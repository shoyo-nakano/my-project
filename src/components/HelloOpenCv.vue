<template>
<h1>{{ msg }}</h1>
<div v-if="!initialized">
    opencvを準備中です...しばらくお待ちください。
</div>
<div v-else>
    <input type="file" accept="image/*" @change="onFileChange">
    <div class="pt-3" v-if="imageData">
        <img id="image" class="float-left" :src="imageData" v-if="imageData">
        <canvas id="outputCanvas"></canvas>
    </div>
    <div class="pt-3 clear-both" v-if="imageData">
        <button type="button" class="bg-indigo-500 text-indigo-50 p-2 rounded mb-3" @click="transform">歪みを修正する</button>
    </div>
</div>
</template>

<script>
//import cv from '@techstark/opencv-js';
import cv from '@shoyo-nakano/opencv';
//import cv from 'C:/projects/npm-project/opencv';
//var cv = require('C:/projects/npm-project/opencv.js/');
//import cv from 'C:/projects/npm-project/opencv';
//import cv from '../../../npm-project/opencv';
//let isCvLoaded = false;
let contactImg = new Image();
const getMethods = (obj) => {
  let properties = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
  return [...properties.keys()].filter(item => typeof obj[item] === 'function')
}
export default {
	name: 'HelloOpenCv',
	props: {
		msg: String
	},
    data() {
        return {
            initialized: false,
            imageData: null,
            MIN_CONTOURS_SCALE: 20, // 最低元画像比率
            THRESHOLD: 170, // モノクロのしきい値
        }
    },
    methods: {
        onFileChange(e) {
            const files = e.target.files;
            if(files.length > 0) {
                const file = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        // opencv
        transform() {
            const imageElement = document.querySelector('#image');
            const im = cv.imread(imageElement);
            const pts = this.getContoursPoints(im);
            if(pts) {
                const transformedIm = this.getTransformedImage(im, pts);
                cv.imshow('outputCanvas', transformedIm);
                console.log('Done!');
            } else {
                console.log('Failed...');
            }
            im.delete();
        },
        getContoursPoints(im) {
            // Image area
            const imRectArea = im.cols * im.rows // 元画像の面積
            // Grayscale
            let im_gray = new cv.Mat();
            cv.cvtColor(im, im_gray, cv.COLOR_RGBA2GRAY);
            // Threshold
            let threshold_im = new cv.Mat();
            cv.threshold(im_gray, threshold_im, this.THRESHOLD, 255, cv.THRESH_BINARY);
            // Contours
            let contours = new cv.MatVector();
            let hierarchy = new cv.Mat();
            cv.findContours(threshold_im, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
            hierarchy.delete();
            let pts = null;
            let maxCntArea = 0
            for(let i = 0; i < contours.size(); ++i) {
                let cnt = contours.get(i);
                const cntArea = cv.contourArea(cnt)
                const maxRectScale = parseInt(cntArea / imRectArea * 100) // 元画像と比べてどれぐらいの大きさか（％）
                if(maxRectScale >= this.MIN_CONTOURS_SCALE) { // 元画像との比率でフィルター
                    if(cntArea > maxCntArea) { // より大きいものをキープ
                        let approx = new cv.Mat();
                        const epsilon = 0.02 * cv.arcLength(cnt, true)
                        cv.approxPolyDP(cnt, approx, epsilon, true)
                        if(approx.size().height === 4) { // 四角形ならキープ
                            maxCntArea = cntArea;
                            pts = approx // 切り抜くべき四角形の座標（4点）
                        }
                    }
                }
            }
            contours.delete();
            im_gray.delete();
            threshold_im.delete();
            pts.convertTo(pts, cv.CV_32FC2);
            return pts;
        },
        getTransformedImage(im, fromPts) {
            let transformedIm = new cv.Mat();
            const rows = im.rows;
            const cols = im.cols;
            let dsize = new cv.Size(cols, rows);
            const toPts = cv.matFromArray(4, 1, cv.CV_32FC2, [
                cols, 0, 0, 0, 0, rows, cols, rows
            ]);
            const M = cv.getPerspectiveTransform(fromPts, toPts); // 変形の行列
            cv.warpPerspective(im, transformedIm, M, dsize);
            fromPts.delete();
            toPts.delete();
            return transformedIm;
        },
        onOpenCvReady(){
			console.log("xxxxxxx");
			// OpenCV.jsのロードが終わったら呼ばれる
			if (cv.getBuildInformation == null)
			{
				console.log("aaaa");
				console.log(cv.getBuildInformation());
				this.onloadCallback();
			}
			else
			{
				console.log("yyyy");
				// WASM
				cv.onRuntimeInitialized = () => {
					this.initialized = true;
					console.log('opencv is loaded');
					console.log(cv.getBuildInformation());
					this.onloadCallback();
				}
				this.initialized = true;
				this.onloadCallback();
			}
			console.log("mounted test2")
		},
        onloadCallback() {
			// OpenCV.jsのロード完了
			//isCvLoaded = true;
			// utilsライブラリも読めてると思うので使う
			//tils = this.$refs.Util_s;
			// XML ファイルを XHR で読み込んでおく←これを
			//utils.createFileFromUrl(eyeCascadeFile, eyeCascadeFile, this.loadedEysCascade);
			contactImg.onload = function() {
			};
			contactImg.src = 'download.png';
			console.log("mounted test3")
		}
    },
    mounted() {
		this.onOpenCvReady();
		console.log(getMethods(cv));
    }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>

<template>
  <div class="auth">
    <h1>This is an auth page</h1>
  </div>
<head>
  <title>CognitoAuthenticateUser</title>
</head>
<body>
  <h1>CognitoAuthenticateUser</h1>
  <span style="display: inline-block; width: 100px;">Email</span>
  <input type="text" id="email" placeholder="Email Address">
  <br/>
  <span style="display: inline-block; width: 100px;">Password</span>
  <input type="password" id="password" placeholder="Password">
  <br/><br/>
  <div id="example-2">
  <button v-on:click="OnCognitoAuthenticateUser">onCognitoAuthenticateUser</button>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
//import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
//import AWS from 'aws-cognito-auth-js';
export default {
  el: '#example-2',
  methods: {
    OnCognitoAuthenticateUser() {

	//var username = document.getElementById("email").value;
	//var password = document.getElementById("password").value;

	//var authenticationData = {
	//	Username: username,
	//	Password: password,
	//};

	//var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
	//	authenticationData
	//);
	//var poolData = {
	//	UserPoolId: 'ap-northeast-1_XXXXXXXXX', // Your user pool id here
	//	ClientId: 'XXXXXXXXXXXXXXXXXX', // Your client id here
	//};
	//var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	//var userData = {
	//	Username: username,
	//	Pool: userPool,
	//};

    console.log('Successfully logged!');

	//var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	//cognitoUser.authenticateUser(authenticationDetails, {
	//	onSuccess: function(result) {
    //        var idToken = result.getIdToken().getJwtToken();          // IDトークン
	//		var accessToken = result.getAccessToken().getJwtToken();  // アクセストークン
    //        var refreshToken = result.getRefreshToken().getToken();   // 更新トークン
            
    //        console.log("idToken : " + idToken);
    //        console.log("accessToken : " + accessToken);
    //        console.log("refreshToken : " + refreshToken);

	//		//POTENTIAL: Region needs to be set if not already set previously elsewhere.
	//		AWS.config.region = 'ap-northeast-1';

	//		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	//			IdentityPoolId: 'ap-northeast-1:XXXXXXXXXXXXXXXXXX', // your identity pool id here
	//			Logins: {
	//				// Change the key below according to the specific region your user pool is in.
	//				'cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_XXXXXXXXX': result
	//					.getIdToken()
	//					.getJwtToken(),
	//			},
	//		});

			//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
			//AWS.config.credentials.refresh(error => {
			//	if (error) {
			//		console.error(error);
			//	} else {
					// Instantiate aws sdk service objects now that the credentials have been updated.
					// example: var s3 = new AWS.S3();
			//		console.log('Successfully logged!');
			//	}
			//});
		//},

		//onFailure: function(err) {
		//	alert(err.message || JSON.stringify(err));
		//},
	//});
  }   
 }
}
</script>
<template>
  <div class="confirm">
    <h1>This is an confirm page</h1>
  </div>
<head>
  <title>CognitoConfirmRegistration</title>
</head>
<body>
  <h1>CognitoConfirmRegistration</h1>
  <span style="display: inline-block; width: 100px;">Email</span>
  <input type="text" id="email" placeholder="Email Address">
  <br/>
  <span style="display: inline-block; width: 100px;">ConfirmCode</span>
  <input type="text" id="ConfirmCode" placeholder="Confirm Code">
  <br/><br/>
  <!--<input type="button" value="CognitoConfirmRegistration" onclick="OnCognitoConfirmRegistration();">-->
  <div id="example-2">
  <button v-on:click="OnCognitoConfirmRegistration">onCognitoConfirmRegistration</button>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
//import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
export default {
  el: '#example-2',
  methods: {
    OnCognitoConfirmRegistration() {

    console.log('test2');
	//var poolData = {
	//	UserPoolId: 'ap-northeast-1_XXXXXXXXX', // Your user pool id here
	//	ClientId: 'XXXXXXXXXXXXXXXXXX', // Your client id here
	//};
	//var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var username = document.getElementById("email").value;
	//var code = document.getElementById("ConfirmCode").value;

	//var userData = {
	//	Username: username,
	//	Pool: userPool,
	//};

    console.log('call result: ' + username);
    this.$router.push('/auth');

	//var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	//cognitoUser.confirmRegistration(code, true, function(err, result) {
	//	if (err) {
	//		alert(err.message || JSON.stringify(err));
	//		return;
	//	}
	//	console.log('call result: ' + result);
	//});
   }
 }   
}
</script>
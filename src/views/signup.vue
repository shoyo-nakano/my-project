<template>
  <div class="signup">
    <h1>This is an signup page</h1>
  </div>
<head>
  <title>CognitoSignUp</title>
</head>
<body>
  <h1>CognitoSignUp</h1>
  <span style="display: inline-block; width: 100px;">Email</span>
  <input type="text" id="email" placeholder="Email Address">
  <br/>
  <span style="display: inline-block; width: 100px;">Password</span>
  <input type="password" id="password" placeholder="Password">
  <br/><br/>
  <!--<input type="button" value="CognitoSignUp" onclick="OnCognitoSignUp();">-->
  <div id="example-2">
  <v-btn v-on:click="OnCognitoSignUp">cognitoSignUp</v-btn>
  </div>
    <v-btn block>
    Block Button
  </v-btn>
</body>
</template>
<script>
// @ is an alias to /src
//import AmazonCognitoIdentity from 'amazon-cognito-identity-js';
export default {
  el: '#example-2',
  methods: {
    OnCognitoSignUp() {
      console.log('test');

      //var poolData = {
      //  UserPoolId: 'ap-northeast-1_XXXXXXXXX', // Your user pool id here
      //  ClientId: 'XXXXXXXXXXXXXXXXXX', // Your client id here
      //};
      //var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      var username = document.getElementById("email").value;
      //var password = document.getElementById("password").value;

      console.log('user name is ' + username);
      this.$router.push('/confirm');

      //userPool.signUp(username, password, null, null, function(
      //  err,
      //  result
      //) {
      //  if (err) {
      //    alert(err.message || JSON.stringify(err));
      //    return;
      //  }
      //  var cognitoUser = result.user;
      //  console.log('user name is ' + cognitoUser.getUsername());
      //});
    }
 }   
}
</script>
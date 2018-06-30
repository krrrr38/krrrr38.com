<template>
  <div class="signup">
    <h2>Sign up</h2>
    <div class="signup-email">
      <input type="text" placeholder="email" :value="email" @input="updateEmail">
      <input type="password" placeholder="password" :value="password" @input="updatePassword">
      <button @click="submitSignupEmail">Register</button>
    </div>
    <div class="signup-google">
      <button @click="submitSigninGoogle">Signup with Google</button>
    </div>
    <p>Do you have an account? 
      <router-link to="/auth/login">sign in now!!</router-link>

    </p>
  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 import { namespace } from 'vuex-class';
 import { HTMLElementEvent } from '../../types';

 const authSignup = namespace('authSignup');

 @Component({
   components: {},
 })
 export default class Signup extends Vue {
   @authSignup.Getter('email') email: string;
   @authSignup.Getter('password') password: string;
   @authSignup.Mutation('updateEmail') updateEmailMutation: any;
   @authSignup.Mutation('updatePassword') updatePasswordMutation: any;
   @authSignup.Action('submitSignupEmail') submitSignupEmailAction: any;
   @authSignup.Action('submitSigninGoogle') submitSigninGoogleAction: any;

   updateEmail(event: HTMLElementEvent<HTMLInputElement>) {
     this.updateEmailMutation(event.target.value);
   }

   updatePassword(event: HTMLElementEvent<HTMLInputElement>) {
     this.updatePasswordMutation(event.target.value);
   }

   submitSignupEmail() {
     this.submitSignupEmailAction({
       email: this.email,
       password: this.password,
     }).then(() => {
       this.$router.push('/');
     });
   }

   submitSigninGoogle() {
     this.submitSigninGoogleAction().then(() => {
       this.$router.push('/');
     });
   }
 }
</script>

<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
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
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>

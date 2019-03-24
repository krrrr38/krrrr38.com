<template>
  <div class="login">
    <h2>Login</h2>
    <div class="login-email">
      <input
        type="text"
        placeholder="email"
        :value="email"
        @input="updateEmail"
      />
      <input
        type="password"
        placeholder="password"
        :value="password"
        @input="updatePassword"
      />
      <button @click="submitLoginEmail">Login</button>
    </div>
    <div class="login-google">
      <button @click="submitSigninGoogle">Signin with Google</button>
    </div>
    <p>
      You don't have an account?
      <router-link to="/auth/signup">Sign up now!!</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { HTMLElementEvent } from '@/types';

const authLogin = namespace('authLogin');

@Component({
  components: {},
})
export default class Login extends Vue {
  @authLogin.Mutation('updateEmail') updateEmailMutation: any;
  @authLogin.Mutation('updatePassword') updatePasswordMutation: any;
  @authLogin.Getter('email') email: string;
  @authLogin.Getter('password') password: string;
  @authLogin.Action('submitLoginEmail') submitLoginEmailAction: any;
  @authLogin.Action('submitSigninGoogle') submitSigninGoogleAction: any;

  updateEmail(event: HTMLElementEvent<HTMLInputElement>) {
    this.updateEmailMutation(event.target.value);
  }

  updatePassword(event: HTMLElementEvent<HTMLInputElement>) {
    this.updatePasswordMutation(event.target.value);
  }

  submitLoginEmail() {
    this.submitLoginEmailAction({
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

.login {
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

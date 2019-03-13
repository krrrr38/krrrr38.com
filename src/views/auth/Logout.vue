<template>
  <div class="logout">
    <button @click="submitLogout">Logout</button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {namespace} from 'vuex-class';

  const authLogout = namespace('authLogout');

  @Component({
    components: {},
  })
  export default class Login extends Vue {
    @authLogout.Action('submitLogout') submitLogoutAction: any;

    submitLogout() {
      this.submitLogoutAction().then(() => {
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

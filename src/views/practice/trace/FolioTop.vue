<template>
  <div class="folio-top">
    <header>
      <div class="header-container">
        <div class="top-header">
          <img src="/assets/img/practice/72x40.png">
          <ul>
            <li>テーマ投資</li>
            <li>おまかせ投資</li>
          </ul>
        </div>
        <div class="login">
          <button>ログイン</button>
        </div>
      </div>
    </header>
    <section class="hero">
      <h2>hero</h2>
    </section>
    <section class="about">
      <h2>about</h2>
    </section>
    <section class="theme">
      <h2>theme</h2>
    </section>
    <section class="ranking">
      <h2>ranking</h2>
    </section>
    <section class="omakase">
      <h2>omakase</h2>
    </section>
    <section class="how-to-use">
      <h2>how to use</h2>
    </section>
    <section class="tips">
      <h2>tips</h2>
    </section>
    <section class="theme-list">
      <h2>theme list</h2>
    </section>
    <section class="account-opening">
      <h2>account opening</h2>
    </section>
    <section class="faq">
      <h2>faq</h2>
    </section>
    <footer>
      <h2>footer</h2>
    </footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class FolioTop extends Vue {
  }
</script>

<style scoped lang="scss">
  header {
    .header-container {
      width: 100%;
      display: inline-block;
      margin: 5px;
      padding: 0 5px;
    }
    .top-header {
      display: flex;
      float: left;
      img {
        height: 44px;
      }
      ul {
        display: flex;
        list-style: none;
        align-items: center;
        li {
          margin: 0 5px;
        }
      }
    }

    .login {
      display: flex;
      float: right;
      button {
        width: 130px;
        border-radius: 5px;
        font-size: 0.8rem;
        line-height: 44px;
      }
    }
  }
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/cv/en">CV - en</router-link>
      |
      <router-link to="/cv/ja">CV - ja</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    font-family: "KoruriNT", 'Lucida Grande', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    color: #68412E;
    background-color: #FFFcF2;
    margin: auto;
    padding: 2%;
    max-width: 800px;
    position: relative;
  }

  div {
    margin: 5px 0;
  }

  ul {
    margin: 0 25px;
  }

  footer {
    margin-top: 1em;
    border-top: 1px solid #68412E;
  }

  @font-face {
    font-family: "KoruriNT";
    src: url("/assets/fonts/KoruriNT/KoruriNT-Regular.ttf")
  }

  @font-face {
    font-family: 'LigatureSymbols';
    src: url('/assets/fonts/LigatureSymbols/LigatureSymbols-2.11.eot');
    src: url('/assets/fonts/LigatureSymbols/LigatureSymbols-2.11.eot?#iefix') format('embedded-opentype'),
    url('/assets/fonts/LigatureSymbols/LigatureSymbols-2.11.woff') format('woff'),
    url('/assets/fonts/LigatureSymbols/LigatureSymbols-2.11.ttf') format('truetype'),
    url('/assets/fonts/LigatureSymbols/LigatureSymbols-2.11.svg#LigatureSymbols') format('svg');
    src: url('/assets/fonts/LigatureSymbols/LigatureSymbols-2.11.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
</style>

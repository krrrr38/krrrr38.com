<template>
  <div class="social">
    <h2>Social</h2>
    <ul class="social-list">
      <li><a href="https://www.facebook.com/k.kaizu38" class="lsf-icon" title="facebook" target="_blank">Facebook</a>
      </li>
      <li><a href="https://twitter.com/krrrr38" class="lsf-icon" title="twitter" target="_blank">Twitter</a></li>
      <li><a href="https://github.com/krrrr38" class="lsf-icon" title="github" target="_blank">GitHub</a></li>
      <li><a href="http://instagram.com/krrrr38" class="lsf-icon" title="instagram" target="_blank">Instagram</a></li>
      <li><a href="http://www.linkedin.com/profile/view?id=186775902" class="lsf-icon" title="linkedin" target="_blank">LinkedIn</a>
      </li>
      <li><a href="http://profile.hatena.ne.jp/krrrr/" class="lsf-icon" title="hatena" target="_blank">Hatena</a></li>
      <li><a href="http://www.amazon.co.jp/registry/wishlist/1HEYQLQTW461W" class="lsf-icon" title="amazon"
             target="_blank">Amazon</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Social extends Vue {
  }
</script>

<style scoped lang="scss">
  .social-list li {
    display: inline-block;
    margin: 0 5px;
  }

  .lsf, .lsf-icon:before {
    font-family: 'LigatureSymbols', sans-serif;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  .lsf-icon:before {
    content: attr(title);
    font-size: 130%;
  }
</style>

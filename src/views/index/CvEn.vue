<template>
  <vue-embed-gist gist-id="f4620b691e322223c7e84a1b3c497773" file="CV_en.md" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueEmbedGist from 'vue-embed-gist'

@Component({
  components: {
    VueEmbedGist
  }
})
export default class CvEn extends Vue {}
</script>

<style lang="scss">
.gist {
  .anchor {
    display: none;
  }
  .gist-file {
    margin-bottom: 1em;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    border: 1px solid #ddd;
    border-bottom: 1px solid #ccc;
    border-radius: 3px;

    .gist-data {
      background-color: #fff;
      padding: 10px;
    }

    .gist-meta {
      padding: 10px;
      overflow: hidden;
      font: 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      color: #586069;
      background-color: #f7f7f7;
      border-radius: 0 0 2px 2px;
      margin: 0;
    }
  }
}
</style>

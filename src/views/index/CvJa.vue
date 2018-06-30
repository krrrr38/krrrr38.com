<template>
  <vue-embed-gist 
      gist-id="f4620b691e322223c7e84a1b3c497773" 
      file="CV_ja.md"/>
</template>
 
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueEmbedGist from 'vue-embed-gist';

@Component({
  components: {
    VueEmbedGist,
  },
})
export default class CvJa extends Vue {}
</script>

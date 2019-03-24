<template>
  <div class="home">
    <Basic />
    <Social />
    <Blog />
    <Something />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Basic from '@/components/index/Basic.vue'
import Social from '@/components/index/Social.vue'
import Blog from '@/components/index/Blog.vue'
import Something from '@/components/index/Something.vue'

@Component({
  components: {
    Basic,
    Social,
    Blog,
    Something
  }
})
export default class Home extends Vue {}
</script>

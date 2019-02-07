<template>
  <div v-if="blog" class="blog">
    <h2>Blog</h2>
    <a :href="blog.link" target="_blank">{{ blog.title }}</a>
    <ul>
      <li v-for="(blogItem, key, index) in blogItems" :key="index">
        <a :href="blogItem.link" target="_blank">{{ blogItem.pubDate }} : {{ blogItem.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 import { State, namespace } from 'vuex-class';
 import { HatenaBlog, HatenaBlogItem, HomeState } from '../../types';

 const home = namespace('home');

 @Component
 export default class Blog extends Vue {
   @State('home') state: HomeState;
   @home.Getter('blog') blog: HatenaBlog | undefined;
   @home.Getter('blogItems') blogItems: HatenaBlogItem[];
   @home.Action('getBlogFeed') getBlogFeed: any;

   created() {
     this.getBlogFeed();
   }
}
</script>

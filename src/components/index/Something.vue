<template>
  <div class="something">
    <h2>Something</h2>
    <div>
      <ul>
        <li>
          <a href="http://krrrr38.github.io/slick-doc-ja/" target="_blank"
            >Slick Japanese Translation</a
          >
        </li>
        <li>
          <a href="https://github.com/krrrr38/jabot" target="_blank"
            >Jabot (Java + Bot)</a
          >
        </li>
        <li>
          <a href="https://github.com/krrrr38/halty" target="_blank"
            >Halty (Text-to-HTML converter)</a
          >
        </li>
        <li>
          <a
            href="http://krrrr38.github.io/json-interface-builder/"
            target="_blank"
            >JSON Interface Builder</a
          >
        </li>
        <li>
          <a href="https://github.com/krrrr38/gpshow" target="_blank"
            >Go port of picture-show</a
          >
        </li>
        <li>
          <a href="https://github.com/krrrr38/sbt-sticker" target="_blank"
            >Sbt Plugin to use Growl</a
          >
        </li>
        <li>
          <a href="https://github.com/krrrr38/play-autodoc" target="_blank"
            >Generate Documents from Play Test</a
          >
        </li>
        <li>
          <a href="https://github.com/krrrr38" target="_blank">and more...</a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="product-list">
        <li class="product">
          <img
            src="/assets/img/products/product_collector_s.png"
            alt="YouTubeStream"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_youtubeextractor_s.png"
            alt="YouTubeExtractor"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_youtubeextractplayer_s.png"
            alt="YouTubeExtractPlayer"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_musicthrough_s.png"
            alt="MusicThrough"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_kyotopower_s.png"
            alt="KyotoPowerMap"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_mergefeed_s.png"
            alt="MergeFeed"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_reportcounter_s.png"
            alt="ReportCounter"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_chatroom_s.png"
            alt="ChatRoom"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img src="/assets/img/products/product_hatekey_s.png" alt="Hatekey" />
        </li>
        <!-- product -->
        <li class="product">
          <img src="/assets/img/products/product_myrss_s.png" alt="myrss" />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_graph_s.png"
            alt="weather graph"
          />
        </li>
        <!-- product -->
        <li class="product">
          <img src="/assets/img/products/product_oneroom_s.png" alt="Oneroom" />
        </li>
        <!-- product -->
        <li class="product">
          <img src="/assets/img/products/product_shooter_s.png" alt="Shooter" />
        </li>
        <!-- product -->
        <li class="product">
          <img
            src="/assets/img/products/product_twitter_s.jpg"
            alt="(*'・ω・)"
          />
        </li>
        <!-- product -->
      </ul>
      <!-- product-line -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Something extends Vue {}
</script>

<style scoped lang="scss">
.product-list {
  margin: 0;
  padding: 0 5px;
}

.product {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 5px;
}

.product img {
  border: 3px solid #c69360;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  width: 100%;
  height: 100%;
}

.product img:hover {
  border: 3px solid #e6913c;
}
</style>

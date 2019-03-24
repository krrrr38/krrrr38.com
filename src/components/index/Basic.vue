<template>
  <div class="basic">
    <h1>krrrr38 info</h1>
    <div class="icon">
      <img src="/assets/img/common/profile.jpg" alt="profile" />
    </div>
    <div>
      <h2>About Me</h2>
      <p>
        Web Application Engineer
      </p>
      interested in Scala, Java, IR, Music, ...
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Basic extends Vue {}
</script>

<style scoped lang="scss">
.icon {
  position: absolute;
  right: 10%;
  top: 15px;
}

.icon img {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}

@media screen and (max-width: 480px) {
  .icon img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
}
</style>

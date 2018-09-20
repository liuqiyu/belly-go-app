<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
  @import './assets/css/mint-ui';
  #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

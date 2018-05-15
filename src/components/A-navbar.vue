<template>
  <div class="a-navbar">
    <div class="nav-item">
      <span class="icon iconfont icon-ren"></span>
      <p class="title">导航1</p>
    </div>
    <div class="nav-item">
      <span class="icon iconfont icon-icon--"></span>
      <p class="title">导航2</p>
    </div>
    <div class="nav-item">
      <span class="icon iconfont icon-qiehuanneirong"></span>
      <p class="title">导航3</p>
    </div>
    <div class="nav-item">
      <span class="icon iconfont icon-biaoqian"></span>
      <p class="title">导航4</p>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
  .a-navbar {
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.51rem;
    border-top: 1px solid #ececec;
    background: #fff;
    display: flex;
    .nav-item {
      flex: 1;
      text-align: center;
      padding-top: 0.06rem;
      .icon {
        display: block;
        font-size: 0.18rem;
        margin: 0 auto;
      }
      .title {
        margin-top: 0.03rem;
        color: #666;
      }
    }
  }
</style>

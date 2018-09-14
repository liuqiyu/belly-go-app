<template>
  <div class="a-navbar">
    <div class="nav-item">
      <router-link to="/share">
        <span class="icon iconfont icon-pengyouquan"></span>
        <p class="title">动态</p>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/follow">
        <span class="icon iconfont icon-tuijian1"></span>
        <p class="title">推荐</p>
      </router-link>
    </div>
    <div class="nav-item">
      <span class="icon iconfont icon-qiehuanneirong"></span>
      <p class="title">导航3</p>
    </div>
    <div class="nav-item">
      <router-link to="/user">
        <span class="icon iconfont icon-weibiaoti-_huabanfuben"></span>
        <p class="title">我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
  @import './../assets/css/main';
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
  .router-active {
    span, p {
      color: $main-color !important;
    }
  }
</style>

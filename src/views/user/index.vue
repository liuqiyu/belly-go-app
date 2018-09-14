<template>
  <div class="content-wrapper">
    <Atopbar>
      <span slot="left"></span>
      <span slot="center">刘岂宇</span>
      <span slot="right">
          <span class="iconfont icon-shezhi"></span>
        </span>
    </Atopbar>
    <div class="user">
      <div class="u-top">
        <div class="img">
          <img src="./../../assets/images/portrait.jpg" alt="">
        </div>
        <div class="info">
          <div class="info-cell">
            <span><span class="icon iconfont icon-tuandui"></span> 刘岂宇</span>
            <span>2<span class="icon-g iconfont icon-you1"></span></span>
          </div>
          <div class="info-cell">
            <span><span class="icon iconfont icon-xin1"></span> 刘岂宇</span>
            <span>2<span class="icon-g iconfont icon-you1"></span></span>
          </div>
          <div class="info-cell">
            <span><span class="icon iconfont icon-gouwu"></span> 刘岂宇</span>
            <span>2<span class="icon-g iconfont icon-you1"></span></span>
          </div>
        </div>
      </div>
      <div class="u-content">
        <ul class="u-content-nav">
          <router-link tag="li" to="/user/a" class="u-content-nav-cell">
            <span class="iconfont icon-icon_category"></span>
          </router-link>
          <router-link tag="li" to="/user/a" class="u-content-nav-cell">
            <span class="iconfont icon-fenlei"></span>
          </router-link>
          <router-link tag="li" to="/user/a" class="u-content-nav-cell">
            <span class="iconfont icon-tag"></span>
          </router-link>
          <router-link tag="li" to="/user/a" class="u-content-nav-cell">
            <span class="iconfont icon-xin1"></span>
          </router-link>
        </ul>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Atopbar from './../../components/A-topbar';

export default {
  components: {
    Atopbar,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
  .user {
    padding: 0.1rem 0 0.2rem 0;
    .u-top {
      display: flex;
      padding: 0.2rem;
      .img {
        overflow: hidden;
        flex: none;
        width: 1.22rem;
        height: 1.22rem;
        border-radius: 50%;
        >img {
          width: 100%;
        }
      }
      .info {
        margin-left: 0.2rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .info-cell {
          width: 100%;
          display: flex;
          justify-content: space-between;
          line-height: 0.22rem;
          .icon {
            font-size: 0.18rem;
            color: #0eb3a7;
            font-weight: bold;
            margin-right: 0.1rem;
          }
        }
      }
    }
    .u-content {
      .u-content-nav {
        background: #f1f1f1;
        height: 0.43rem;
        display: flex;
        .u-content-nav-cell {
          flex: 1;
          line-height: 0.43rem;
          text-align: center;
          span {
            color: #939393;
            font-size: 0.18rem;
          }
        }
      }
    }
  }
</style>

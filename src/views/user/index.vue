<template>
  <div class="">
    <div class="user">
      <div class="u-top" >
        <router-link to="/user/info" class="edit iconfont icon-shezhi"></router-link>
        <div class="user_bg"></div>
        <div class="u-top-info">
          <div class="img">
            <img src="./../../assets/images/portrait.jpg" alt=""
                 v-if="this.$store.getters.username">
            <img src="./../../assets/images/not-login.png" alt="" v-else>
          </div>
          <div class="info">
            <div class="info-cell">
              <span v-if="this.$store.getters.username">{{this.$store.getters.username}}</span>
              <router-link to="/login" class="not-login" v-else>登录 / 注册</router-link>
            </div>
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
    <transition name="router-slid" mode="out-in">
       <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Atopbar from './../../components/A-topbar';
import Info from './info/info';

export default {
  components: {
    Atopbar,
    Info,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
  .user {
    .u-top {
      position: relative;
      height: 1.8rem;
      overflow: hidden;
      .edit {
        position: absolute;
        top: 0.1rem;
        right: 0.1rem;
        font-size: 0.18rem;
        color: #333;
        z-index: 100;
      }
      .user_bg {
        width: 100%;
        height: 100%;
        background: url("./../../assets/images/user_bg2.jpg");
        background-size: contain;
        filter:blur(3px);
      }
      .u-top-info {
        position: absolute;
        left:50%;
        top:50%;
        -webkit-transform:translate(-50%,-50%);
        transform:translate(-50%,-50%);
        .img {
          overflow: hidden;
          width: 0.8rem;
          height: 0.8rem;
          border: 1px solid #e1e1e1;
          border-radius: 50%;
          margin: 0 auto;
          >img {
            width: 100%;
          }
        }
        .info {
          text-align: center;
          margin-top: 0.1rem;
          color: #333;
          font-size: 0.14rem;
          font-weight: bold;
        }
      }
    }
    .u-content {
      border-top: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
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

  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>

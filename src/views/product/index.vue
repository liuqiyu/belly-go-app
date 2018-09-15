<template>
  <div class="content-wrapper">
    <Atopbar>
      <span slot="left">
        <span class="iconfont icon-zuo" @click="goBack"></span>
      </span>
      <span slot="center">产品</span>
      <span slot="right"></span>
    </Atopbar>
    <div class="product">
      <div class="p-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="detials">
        <div class="info">
          <div class="person-cell">
            <div class="photo">
              <img src="" alt="">
            </div>
            <div class="describe">
              <div class="user">
                <p class="name">刘岂宇</p>
                <p class="time">2018-5-8 12：12</p>
              </div>
              <div class="price">￥123</div>
            </div>
          </div>
          <div class="message">123123123123123123123123123123123123123123123123123123123123</div>
        </div>
        <div class="recommend">
          <header>你可能喜欢</header>
          <section class="o-row">
            <div class="o-cell"></div>
            <div class="o-cell"></div>
            <div class="o-cell"></div>
            <div class="o-cell"></div>
            <div class="o-cell"></div>
          </section>
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
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
  @import './../../assets/css/main';
  @import './../../assets/css/mixin';
  .product {
    position: relative;
    .p-swipe {
      height: 4.75rem;
      background: red;
    }
    .detials {
      padding: 0.2rem 0.1rem;
      .info {
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #f4f4f4;
        .person-cell {
          padding: 0 0.02rem;
          display: flex;
          .photo {
            flex: none;
            width: 0.4rem;
            height: 0.4rem;
            background: red;
            border-radius: 50%;
          }
          .describe {
            flex: 1;
            margin-left: 0.15rem;
            @include flex-center-sb;
            .user {
              .name {
                font-size: 0.14rem;
              }
              .time {
                color: #9c9c9c;
              }
            }
            .price {
              color: $main-color;
              font-weight: bold;
              font-size: 0.14rem;
            }
          }
        }
        .message {
          margin-top: 0.1rem;
          word-break:break-all;
          word-wrap:break-word;
        }
      }
      .recommend {
        padding: 0.2rem 0.01rem;
        header {
          font-size: 0.18rem;
          text-align: center;
          margin-bottom: 0.1rem;
        }
        .o-row {
          display: flex;
          flex-wrap: wrap;
          .o-cell {
            width: 1.7rem;
            height: 1.7rem;
            background: red;
            margin: 0.03rem;
            border-radius: 4px;
          }
        }
      }
    }
  }
</style>

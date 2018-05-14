<template>
  <div class="layout">
    <Atopbar></Atopbar>
    <div class="content-wrapper">
      <div class="scroll-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <div class="criticism">
      <div data-v-4337c03f="" class="criticism_con">
        <textarea name="" id="" v-model="textValue"></textarea>
        <span v-if="textValue.length === 0" class="btn disabled">发送</span>
        <span v-if="textValue.length > 0" class="btn">发送</span>
      </div>
    </div>
    <Anavbar></Anavbar>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Atopbar from './../../components/A-topbar';
import Anavbar from './../../components/A-navbar';

export default {
  data() {
    return {
      scroll: null,
      textValue: '',
    };
  },
  mounted() {
    const wrapper = document.querySelector('.content-wrapper');
    this.scroll = new BScroll(wrapper, {
      click: true,
      scrollX: true,
    });
  },
  components: {
    Atopbar,
    Anavbar,
  },
};
</script>

<style scoped lang="scss">
  .layout {
    height: 100%;
    .content-wrapper {
      height: 100%;
      padding: 0.45rem 0 0.51rem 0;
      .scroll-wrapper {
        padding: 0 0 0.7rem 0;
      }
    }
    .criticism {
      transition: top 2s;
      -webkit-transition: top 2s;
      position: absolute;
      bottom: -0.52rem;
      left: 0;
      width: 100%;
      z-index: 1001;
      height: 0.52rem;
      border-top: 1px solid rgba(0,0,0,.1);
      .criticism_con {
        background: #ebebeb;
        padding: 0.08rem 0.12rem;
        display: flex;
        justify-content: space-between;
        position: relative;
        textarea {
          width: 2.9rem;
          outline:none;
          border: none;
          height: 0.35rem;
          max-height: 1rem;
          font-size: 0.16rem;
          line-height: 0.24rem;
          padding-top: 0.05rem;
          background: none;
          border-bottom: 2px solid #06a4a2;
        }
        span.btn {
          margin-top: 0.02rem;
          height: 0.3rem;
          width: 0.46rem;
          line-height: 0.29rem;
          border: 1px solid rgba(0,0,0,.1);
          border-radius: 4px;
          text-align: center;
          background: #06a4a2;
          color: #fff;
          &.disabled {
            color: rgba(0,0,0,.2);
            background: #ebebeb;
          }
        }
      }
    }
  }
</style>

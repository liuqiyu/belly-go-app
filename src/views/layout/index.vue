<template>
  <div class="layout">
    <Atopbar></Atopbar>
    <div class="content-wrapper">
      <div class="scroll-wrapper">
        <router-view></router-view>
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
  mounted() {
    let wrapper = document.querySelector('.content-wrapper');
    let scroll = new BScroll(wrapper, {});
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
        padding: 0 0.16rem 0.7rem 0.16rem;
      }
    }
  }
</style>

<template>
  <div class="content-wrapper">
    <div class="follow">
      <Atopbar>
        <Atab :list="tabList" slot="center"></Atab>
      </Atopbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RecommendBox from './../../components/recommendBox';
import Atab from './../../components/A-tab';
import Atopbar from './../../components/A-topbar';

export default {
  components: {
    RecommendBox,
    Atab,
    Atopbar,
  },
  data() {
    return {
      tabList: [
        {
          label: '推荐',
          path: '/follow/recommend',
        },
        {
          label: '已关注',
          path: '/follow/attention',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  .follow {
    padding: 0.1rem 0.1rem 0.2rem 0.1rem;
  }

</style>

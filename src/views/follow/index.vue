<template>
  <div class="follow">
    <header>
      <Atab :list="tabList"></Atab>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import RecommendBox from './../../components/recommendBox';
import Atab from './../../components/A-tab';

export default {
  components: {
    RecommendBox,
    Atab,
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
    padding: 0 0.05rem 0.4rem 0.05rem;
    header {
      padding: 0.15rem;
      text-align: center;
    }
  }

</style>

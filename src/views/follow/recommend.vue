<template>
  <div class="recommend">
    <RecommendBox :list="data" @getData="getData"></RecommendBox>
  </div>
</template>

<script>
import follow from './../../api/follow';
import RecommendBox from './../../components/recommendBox';

export default {
  components: {
    RecommendBox,
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      follow.list().then((res) => {
        if (res.data.code === 200) {
          this.data = res.data.data;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>

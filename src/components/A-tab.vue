<template>
  <div class="a-tab">
    <ul class="clearfix">
      <router-link tag="li"
                   class="a-tab-item"
                   :to="item.path"
                   :key="index"
                   v-for="(item, index) in list">
        {{item.label}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
  @import './../assets/css/main';
  .a-tab {
    ul li {
      float: left;
      padding: 0.065rem 0.2rem;
      border: 1px solid #dcdfe6;
      border-right: none;
      font-size: 0.12rem;
      &.router-active {
        background: $main-color;
        border-color: $main-color;
        color: #fff;
      }
      &:first-child {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
        border-right: 1px solid #dcdfe6;
      }
    }
  }
</style>

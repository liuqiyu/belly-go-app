<template>
  <div class="a-topbar">
    <div class="top-header">
      <div class="leftbar">
        <slot name="left">
          <span class="iconfont icon-sousuo" ></span>
        </slot>
      </div>
      <div class="centerbar">
        <slot name="center">
          乐购网
        </slot>
      </div>
      <div class="rightbar">
        <slot name="right">
          <span class="iconfont icon-gouwu"></span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
  .a-topbar {
    height: 0.45rem;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    border-bottom: 1px solid #ececec;
    background: #fff;
    z-index: 999;
    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.16rem;
      height: 100%;
      .leftbar {
        span {
          font-size: 0.2rem;
        }
      }
      .centerbar {
        font-size: 0.14rem;
        font-weight: bolder;
      }
      .rightbar {
        span {
          font-size: 0.18rem;
          color: #000;
        }
      }
    }
  }
</style>

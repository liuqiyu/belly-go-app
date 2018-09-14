<template>
  <div class="recommend-content">
    <div class="recommend-list clearfix" ref="recommendList">
      <div class="recommend-box" v-for="(item, index) in data"
           :key="index" @click="deleteBox(index)">
        <div class="recommend-item">
          <span class="delete iconfont icon-error"></span>
          <div class="photo">
            <img src="./../assets/images/portrait.jpg" alt="">
          </div>
          <div class="h2">CEEN.J.K{{item}}</div>
          <div class="h3">Liuqiyuaaaaaa</div>
          <div class="button-wrapper">
            <button>点击关注</button>
          </div>
          <div class="slider clearfix">
            <div class="slider-item">
              <img src="./../assets/images/pros.png" alt="">
            </div>
            <div class="slider-item">
              <img src="./../assets/images/pros.png" alt="">
            </div>
            <div class="slider-item">
              <img src="./../assets/images/pros.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [1, 2, 3, 4, 5],
    };
  },
  mounted() {
    // this.deleteBox();
  },
  methods: {
    deleteBox(index) {
      const $recommendBox = document.getElementsByClassName('recommend-box');
      $recommendBox[index].classList.add('animated', 'zoomOut');
      setTimeout(() => {
        $recommendBox[index].classList.add('hide');
      }, 300);
    },
  }
};
</script>

<style scoped lang="scss">
  .recommend-content {
    width: 100%;
    .recommend-list {
      // 用户滑动
      .recommend-box {
        width: 50%;
        float: left;
        transition: all .7s linear;
        .recommend-item {
          position: relative;
          border-radius: 4px;
          margin: 0.05rem;
          background: #fff;
          text-align: center;
          padding: 0.15rem 0.1rem;
          box-shadow: 0 0 4px 3px rgba(0,0,0,.08);
          // 删除
          .delete {
            position: absolute;
            top: 0.06rem;
            right: 0.1rem;
            display: block;
            width: 0.11rem;
            height: 0.11rem;
            color: rgba(0,0,0,.3);
            font-size: 0.16rem;
            cursor: pointer;
            &:hover {
              color: red;
            }
          }
          .photo {
            width: 0.75rem;
            height: 0.75rem;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 auto;
            img {
              width: 100%;
              vertical-align: middle;
            }
          }
          .h2 {
            font-size: 0.14rem;
            color: #000;
            margin-top: 0.05rem;
          }
          .h3 {
            font-size: 0.12rem;
            color: #999;
            margin-top: 0.05rem;
          }
          .button-wrapper {
            margin-top: 0.1rem;
            button {
              text-align: center;
              display: block;
              height: 0.22rem;
              width: 70%;
              font-size: 0.12rem;
              border-radius: 4px;
              background: #00aba4;
              color: #fff;
              line-height: 0.22rem;
              border: 0;
              outline: none;
              margin: 0 auto;
              &:active {
                opacity: 0.8;
              }
            }
          }
          .slider {
            overflow: hidden;
            margin-top: 0.05rem;
            .slider-item {
              float: left;
              width: 33.333%;
              height: 0.45rem;
              padding: 0.02rem;
              img {
                width: 100%;
                vertical-align: middle;
              }
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
      // 用户按钮滑动
      .recommend-button {
        float: left;
        padding: 0.06rem 0.16rem;
        border: 1px solid #00aba4;
        border-radius: 20px;
        margin-right: 0.1rem;
        margin-bottom: 0.05rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>

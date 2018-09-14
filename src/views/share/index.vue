<template>
  <div class="content-wrapper">
    <Atopbar></Atopbar>
    <div class="share">
      <div class="share-list">
        <div class="share-item" v-for="(item, index) in dataList" :key="index">
          <div class="share-header">
            <div class="s-logo">
              <img src="./../../assets/images/portrait.jpg" alt="">
            </div>
            <div class="s-desc-wrapper">
              <div class="s-desc">
                <div class="s-info">
                  <p class="username">{{item.username}}</p>
                  <p class="tag">{{item.tags}}</p>
                </div>
                <div class="s-other">
                  <span class="share-txt">分享</span>
                  <span class="icon iconfont icon-gengduo"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="share-img-list clearfix">
            <div class="share-img-big">
              <img src="../../assets/images/big-img.jpg" alt="">
            </div>
          </div>
          <div class="share-footer">
            <div class="comment">
              <div class="give-the-thumbs">
                <!-- 已点赞 -->
                <span v-if="!item.hasPoint" class="icon iconfont icon-xinyi"></span>
                <!-- 未点赞 -->
                <span v-else class="icon iconfont icon-xin"></span>
                <span class="number">2323</span>
              </div>
              <div class="discuss" >
                <div class="tooltip" ref="tooltip">
                  <div class="tooltip-box">
                    <div class="fabulous" @click="fabulous(item, index)" ref="zan">
                      <span class="icons iconfont icon-zan icon-xinyi"></span>
                      <span v-if="!item.hasPoint">赞</span>
                      <span v-else>取消</span>
                    </div>
                    <div class="commentary" @click="commentary(index)">
                      <span class="icons iconfont icon-pinglun"></span>
                      <span>评论</span>
                    </div>
                  </div>
                </div>
                <span class="icon iconfont icon-iconpinglun" @click="showDiscuss"
                      ref="pinglun"></span>
              </div>
            </div>
            <div class="describe">
              <p>
                ZhangchundiZhangchundiZhangchundiZhangchundiZhangch
                undiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZh
                angchundiZhangchundiZhangchundiZhangchundi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <header class="title">Zhangchundi</header>
        <div class="recommend-box">
          <div class="recommend-list clearfix" ref="recommendList"
               :style="{width: listWrapWidth + 'px'}">
            <div class="recommend-item">
              <span class="delete iconfont icon-error"></span>
              <div class="photo">
                <img src="./../../assets/images/portrait.jpg" alt="">
              </div>
              <div class="h2">CEEN.J.K</div>
              <div class="h3">Liuqiyuaaaaaa</div>
              <div class="button-wrapper">
                <button>ZCD</button>
              </div>
              <div class="slider clearfix">
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
              </div>
            </div>
            <div class="recommend-item">
              <span class="delete iconfont icon-error"></span>
              <div class="photo">
                <img src="./../../assets/images/portrait.jpg" alt="">
              </div>
              <div class="h2">CEEN.J.K</div>
              <div class="h3">Liuqiyuaaaaaa</div>
              <div class="button-wrapper">
                <button>ZCD</button>
              </div>
              <div class="slider clearfix">
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
              </div>
            </div>
            <div class="recommend-item">
              <span class="delete iconfont icon-error"></span>
              <div class="photo">
                <img src="./../../assets/images/portrait.jpg" alt="">
              </div>
              <div class="h2">CEEN.J.K</div>
              <div class="h3">Liuqiyuaaaaaa</div>
              <div class="button-wrapper">
                <button>ZCD</button>
              </div>
              <div class="slider clearfix">
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
              </div>
            </div>
            <div class="recommend-item">
              <span class="delete iconfont icon-error"></span>
              <div class="photo">
                <img src="./../../assets/images/portrait.jpg" alt="">
              </div>
              <div class="h2">CEEN.J.K</div>
              <div class="h3">Liuqiyuaaaaaa</div>
              <div class="button-wrapper">
                <button>ZCD</button>
              </div>
              <div class="slider clearfix">
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
              </div>
            </div>
            <div class="recommend-item">
              <span class="delete iconfont icon-error"></span>
              <div class="photo">
                <img src="./../../assets/images/portrait.jpg" alt="">
              </div>
              <div class="h2">CEEN.J.K</div>
              <div class="h3">Liuqiyuaaaaaa</div>
              <div class="button-wrapper">
                <button>ZCD</button>
              </div>
              <div class="slider clearfix">
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
                <div class="slider-item">
                  <img src="./../../assets/images/pros.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-list">
        <div class="share-item" v-for="(item, index) in dataList" :key="index">
          <div class="share-header">
            <div class="s-logo">
              <img src="./../../assets/images/portrait.jpg" alt="">
            </div>
            <div class="s-desc-wrapper">
              <div class="s-desc">
                <div class="s-info">
                  <p class="username">{{item.username}}</p>
                  <p class="tag">{{item.tags}}</p>
                </div>
                <div class="s-other">
                  <span class="share-txt">分享</span>
                  <span class="icon iconfont icon-gengduo"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="share-img-list clearfix">
            <div class="share-img-item">
              <img src="../../assets/images/pros.png" alt="">
            </div>
            <div class="share-img-item">
              <img src="../../assets/images/pros.png" alt="">
            </div>
            <div class="share-img-item">
              <img src="../../assets/images/pros.png" alt="">
            </div>
            <div class="share-img-item">
              <img src="../../assets/images/pros.png" alt="">
            </div>
            <div class="share-img-item">
              <img src="../../assets/images/pros.png" alt="">
            </div>
            <div class="share-img-item">
              <img src="../../assets/images/pros.png" alt="">
            </div>
          </div>
          <div class="share-footer">
            <div class="comment">
              <div class="give-the-thumbs">
                <!-- 已点赞 -->
                <span v-if="!item.hasPoint" class="icon iconfont icon-xinyi"></span>
                <!-- 未点赞 -->
                <span v-else class="icon iconfont icon-xin"></span>
                <span class="number">2323</span>
              </div>
              <div class="discuss" >
                <div class="tooltip" ref="tooltip">
                  <div class="tooltip-box">
                    <div class="fabulous" @click="fabulous(item, index)" ref="zan">
                      <span class="icons iconfont icon-zan icon-xinyi"></span>
                      <span v-if="!item.hasPoint">赞</span>
                      <span v-else>取消</span>
                    </div>
                    <div class="commentary" @click="commentary(index)">
                      <span class="icons iconfont icon-pinglun"></span>
                      <span>评论</span>
                    </div>
                  </div>
                </div>
                <span class="icon iconfont icon-iconpinglun" @click="showDiscuss"
                      ref="pinglun"></span>
              </div>
            </div>
            <div class="describe">
              <p>
                ZhangchundiZhangchundiZhangchundiZhangchundiZhangch
                undiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZh
                angchundiZhangchundiZhangchundiZhangchundi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend">
        <header class="title">Zhangchundi</header>
        <div class="recommend-box" id="button-list">
          <div class="recommend-list clearfix" ref="recommendListButton"
               :style="{width: buttonListWrapWidth + 'px'}">
            <div class="recommend-button">ZCD</div>
            <div class="recommend-button">ZHANGCHUNDI</div>
            <div class="recommend-button">ZHANGCHUNDI</div>
            <div class="recommend-button">ZHANGCHUNDI</div>
            <div class="recommend-button">ZHANGCHUNDI</div>
            <div class="recommend-button">ZCD</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Atopbar from './../../components/A-topbar';
import { hasClass, sliverWidth } from './../../utils/utils';

export default {
  mounted() {
    const wrapper = document.querySelector('.recommend-box');
    const wrapper1 = document.querySelector('#button-list');
    const $recommendItem = document.getElementsByClassName('recommend-item');
    const $recommendList = this.$refs.recommendList;
    this.listWrapWidth = sliverWidth($recommendList, $recommendItem) + 10;
    // 按钮
    const $recommendButton = document.getElementsByClassName('recommend-button');
    const $recommendListButton = this.$refs.recommendListButton;
    this.buttonListWrapWidth = sliverWidth($recommendListButton, $recommendButton) + 10;
  },
  components: {
    Atopbar,
  },
  data() {
    return {
      scroll: null,
      dataList: [
        {
          username: 'Maawin1',
          tags: '#fashion#shoose#bag',
          pointNumber: 2200,
          hasPoint: false,
        },
        {
          username: 'Maawin2',
          tags: '#fashion#shoose#bag',
          pointNumber: 2200,
          hasPoint: true,
        },
      ],
      listWrapWidth: 0,
      buttonListWrapWidth: 0,
    };
  },
  methods: {
    // 展开tooltip
    showDiscuss() {
      const $pinglun = this.$refs.pinglun;
      let index;
      for (let i = 0; i < $pinglun.length; i += 1) {
        if ($pinglun[i] === event.target) {
          index = i;
        }
      }
      const $tooltip = this.$refs.tooltip;
      if (hasClass($tooltip[index], 'show')) {
        $tooltip[index].classList.remove('show');
      } else {
        $tooltip[index].classList.add('show');
      }
    },

    // 点赞效果
    fabulous(item, index) {
      // let index;
      // const $zan = this.$refs.zan;
      // for (let i = 0; i < $zan.length; i += 1) {
      //   // console.log($zan[i]);
      //   console.log(event.target);
      //   // console.log(event.target === $zan[i]);
      //   if (event.target === $zan[i]) {
      //     index = i;
      //   }
      // }
      const $zan = this.$refs.zan;
      const $tooltip = this.$refs.tooltip;
      if (item.hasPoint) {
        this.dataList[index].hasPoint = false;
      } else {
        this.dataList[index].hasPoint = true;
      }
      $zan[index].classList.add('action');
      setTimeout(() => {
        $zan[index].classList.remove('action');
        $tooltip[index].classList.remove('show');
      }, 500);
    },

    // 点击评论
    commentary(index) {
      const $tooltip = this.$refs.tooltip;
      const $criticism = document.querySelector('.criticism');
      $tooltip[index].classList.remove('show');
      $criticism.style.bottom = 0;
    },
  },
  beforeDestroy() {
    this.scroll = null;
  },
};
</script>

<style scoped lang="scss">
  .share {
    // padding: 0 0 0.31rem 0;
  }

  // 分享列表
  .share-list {
    padding: 0.12rem 0.16rem;
    width: 100%;
    .share-item {
      margin-bottom: 0.3rem;
      .share-header {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        .s-logo {
          width: 0.4rem;
          height: 0.4rem;
          background: #f6f6f6;
          position: relative;
          overflow: hidden;
          border-radius: 50%;
          flex: none;
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
        .s-desc-wrapper {
          padding-left: 0.1rem;
          flex-grow: 1;
          flex-direction: column;
          user-select: none;
          .s-desc {
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            align-items: center;
            .s-info {
              .username {
                font-weight: bolder;
                margin-bottom: 0.03rem;
                font-size: 0.14rem;
              }
            }
          }
          .s-other {
            color: #999;
            .share-txt {
              margin-right: 0.05rem;
              color: #06a4a2;
              font-size: 0.14rem;
            }
            .icon {
              font-size: 0.2rem;
              vertical-align: middle;
            }
          }
        }
      }
      .share-img-list {
        margin-top: 0.1rem;
        width: 100%;
        .share-img-item {
          width: 1.11rem;
          height: 1.11rem;
          background: #f6f6f6;
          border-radius: 3px;
          overflow: hidden;
          float: left;
          margin-right: 0.05rem;
          margin-bottom: 0.05rem;
          &:nth-child(3n) {
            margin-right: 0;
          }
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
      }
      .share-footer {
        .comment {
          padding: 0.05rem 0;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          align-items: center;
          .give-the-thumbs {
            .icon{
              vertical-align: middle;
              color: #06a4a2;
              font-size: 0.18rem;
              font-weight: bolder;
            }
            .number {
              color: #a1a1a1;
            }
          }
          .discuss {
            position: relative;
            .tooltip {
              position: absolute;
              top: -0.04rem;
              right: 0.26rem;
              border-radius: 3px;
              height: 0.31rem;
              width: 0;
              background: rgba(0,0,0,0.8);
              color: #fff;
              overflow: hidden;
              line-height: 0.31rem;
              transition: width 0.5s;
              -webkit-transition: width 0.5s;
              .tooltip-box {
                width: 1.4rem;
                padding: 0 0.1rem;
                display: flex;
                justify-content: space-between;
                .icons {
                  font-size: 0.16rem;
                  margin-right: 0.03rem;
                  vertical-align: middle;
                }
                .icon-xinyi {
                  display: inline-block;
                  &.action {
                    animation: myfirst 0.5s;
                    -webkit-animation: myfirst 0.5s; /* Safari 与 Chrome */
                  }
                }
              }
              &.show {
                width: 1.4rem;
              }
            }
            .icon {
              font-size: 0.18rem;
              color: #999;
              font-weight: bolder;
            }
          }
        }
        .describe {
          p {
            color: #090909;
            word-break: break-all;
            text-overflow: ellipsis;
            height: 0.32rem;
            overflow: hidden;
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    // 大图
    .share-img-big {
      width: 100%;
      height: 3.43rem;
      overflow: hidden;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }

  // 动画
  @keyframes myfirst
  {
    from {
      -ms-transform:scale(1,1); /* IE 9 */
      -webkit-transform: scale(1,1); /* Safari */
      transform: scale(1,1); /* 标准语法 */
    }
    to {
      -ms-transform:scale(1.5,1.5); /* IE 9 */
      -webkit-transform: scale(1.5,1.5); /* Safari */
      transform: scale(1.5,1.5); /* 标准语法 */
    }
  }
  @-webkit-keyframes myfirst /* Safari 与 Chrome */
  {
    from {
      -ms-transform:scale(1,1); /* IE 9 */
      -webkit-transform: scale(1,1); /* Safari */
      transform: scale(1,1); /* 标准语法 */
    }
    to {
      -ms-transform:scale(1.5,1.5); /* IE 9 */
      -webkit-transform: scale(1.5,1.5); /* Safari */
      transform: scale(1.5,1.5); /* 标准语法 */
    }
  }

  // X轴滑动
  .recommend {
    background: #f0f0f0;
    padding: 0.16rem;
    .title {
      font-size: 0.14rem;
    }
    .recommend-box {
      width: 100%;
      overflow: hidden;
      .recommend-list {
        margin-top: 0.15rem;
        // 用户滑动
        .recommend-item {
          position: relative;
          width: 1.3rem;
          border-radius: 4px;
          float: left;
          margin-right: 0.1rem;
          background: #fff;
          text-align: center;
          padding: 0.06rem;
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
            width: 0.51rem;
            height: 0.51rem;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 auto;
            img {
              width: 100%;
              vertical-align: middle;
            }
          }
          .h2 {
            font-size: 0.16rem;
            color: #000;
            margin-top: 0.05rem;
          }
          .h3 {
            font-size: 0.14rem;
            color: #999;
            margin-top: 0.05rem;
          }
          .button-wrapper {
            button {
              display: block;
              height: 0.2rem;
              width: 100%;
              border-radius: 4px;
              background: #00aba4;
              color: #fff;
              line-height: 0.19rem;
              text-align: center;
              margin-top: 0.05rem;
              border: 0;
              outline: none;
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
              width: 0.36rem;
              height: 0.36rem;
              margin-right: 0.05rem;
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
  }
</style>

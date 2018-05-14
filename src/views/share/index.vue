<template>
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
                <span class="icon iconfont icon-sandian"></span>
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
              <span class="icon iconfont icon-xin"></span>
              <span class="number">2323</span>
            </div>
            <div class="discuss" >
              <div class="tooltip" ref="tooltip">
                <div class="tooltip-box">
                  <div class="fabulous" @click="fabulous(item, index)">
                    <span class="icons iconfont icon-zan icon-fabulous" ref="zan"></span>
                    <span v-if="!item.hasPoint">赞</span>
                    <span v-else>取消</span>
                  </div>
                  <div class="commentary" @click="commentary(index)">
                    <span class="icons iconfont icon-pinglun"></span>
                    <span>评论</span>
                  </div>
                </div>
              </div>
              <span class="icon iconfont icon-pinglun" @click="showDiscuss(index)"></span>
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
        <div class="recommend-list clearfix" ref="recommendList">
          <div class="recommend-item"></div>
          <div class="recommend-item"></div>
          <div class="recommend-item"></div>
          <div class="recommend-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hasClass } from './../../utils/utils';

export default {
  mounted() {
    const $recommendItem = document.getElementsByClassName('recommend-item');
    const $recommendList = this.$refs.recommendList;
    if ($recommendItem.length > 0) {
      const w = Number($recommendItem[0].clientWidth);
      const marginRight = Number(window.getComputedStyle($recommendItem[0], null).marginRight.replace('px', ''));
     $recommendList.style.width =
       `${(w + marginRight) * $recommendItem.length}px`;
    }
  },
  data() {
    return {
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
    };
  },
  methods: {
    // 展开tooltip
    showDiscuss(index) {
      const $tooltip = this.$refs.tooltip;
      if (hasClass($tooltip[index], 'show')) {
        $tooltip[index].classList.remove('show');
      } else {
        $tooltip[index].classList.add('show');
      }
    },

    // 点赞效果
    fabulous(item, index) {
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
};
</script>

<style scoped lang="scss">
  .share {
    padding: 0.16rem 0 0.31rem 0;
  }

  .share-list {
    padding: 0 0.16rem;
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
              font-size: 0.2rem;
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
              top: -0.05rem;
              right: 0.26rem;
              border-radius: 3px;
              height: 0.33rem;
              width: 0;
              background: rgba(0,0,0,0.8);
              color: #fff;
              overflow: hidden;
              line-height: 0.33rem;
              transition: width 0.5s;
              -webkit-transition: width 0.5s;
              .tooltip-box {
                width: 1.4rem;
                padding: 0 0.1rem;
                display: flex;
                justify-content: space-between;
                .icons {
                  font-size: 0.14rem;
                  margin-right: 0.03rem;
                }
                .icon-fabulous {
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
              font-size: 0.2rem;
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
    }
  }

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

  .recommend {
    background: #f0f0f0;
    padding: 0.16rem;
    .recommend-box {
      width: 100%;
      overflow-x: auto;
      .recommend-list {
        .recommend-item {
          width: 1.3rem;
          height: 1.71rem;
          background: red;
          border-radius: 4px;
          margin-top: 0.2rem;
          float: left;
          margin-right: 0.1rem;
        }
      }
    }
  }

</style>

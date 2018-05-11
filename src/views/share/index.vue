<template>
  <div class="share">
    <div class="share-list">
      <div class="share-item">
        <div class="share-header">
          <div class="s-logo">
            <span></span>
          </div>
          <div class="s-desc-wrapper">
            <div class="s-desc">
              <div class="s-info">
                <p class="username">Maawin</p>
                <p class="tag">#fashion#shoose#bag</p>
              </div>
              <div class="s-other">
                <span class="share-txt">分享</span>
                <span class="icon iconfont icon-sandian"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="share-img-list clearfix">
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
        </div>
        <div class="share-footer">
          <div class="comment">
            <div class="give-the-thumbs">
              <span class="icon iconfont icon-xin"></span>
              <span class="number">2323</span>
            </div>
            <div class="discuss">
              <span class="icon iconfont icon-pinglun"></span>
            </div>
          </div>
          <div class="describe">
            <p>
              ZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundi
            </p>
          </div>
        </div>
      </div>
      <div class="share-item">
        <div class="share-header">
          <div class="s-logo">
            <span></span>
          </div>
          <div class="s-desc-wrapper">
            <div class="s-desc">
              <div class="s-info">
                <p class="username">Maawin</p>
                <p class="tag">#fashion#shoose#bag</p>
              </div>
              <div class="s-other">
                <span class="share-txt">分享</span>
                <span class="icon iconfont icon-sandian"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="share-img-list clearfix">
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
        </div>
        <div class="share-footer">
          <div class="comment">
            <div class="give-the-thumbs">
              <span class="icon iconfont icon-xin"></span>
              <span class="number">2323</span>
            </div>
            <div class="discuss">
              <span class="icon iconfont icon-pinglun"></span>
            </div>
          </div>
          <div class="describe">
            <p>
              ZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundi
            </p>
          </div>
        </div>
      </div>
      <div class="share-item">
        <div class="share-header">
          <div class="s-logo">
            <span></span>
          </div>
          <div class="s-desc-wrapper">
            <div class="s-desc">
              <div class="s-info">
                <p class="username">Maawin</p>
                <p class="tag">#fashion#shoose#bag</p>
              </div>
              <div class="s-other">
                <span class="share-txt">分享</span>
                <span class="icon iconfont icon-sandian"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="share-img-list clearfix">
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
          <div class="share-img-item"></div>
        </div>
        <div class="share-footer">
          <div class="comment">
            <div class="give-the-thumbs">
              <span class="icon iconfont icon-xin"></span>
              <span class="number">2323</span>
            </div>
            <div class="discuss">
              <span class="icon iconfont icon-pinglun"></span>
            </div>
          </div>
          <div class="describe">
            <p>
              ZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundiZhangchundi
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
  .share {
    padding: 0.16rem 0;
  }

  .share-list {
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
          flex: none;
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
          float: left;
          margin-right: 0.05rem;
          margin-bottom: 0.05rem;
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }

      .share-footer {
        .comment {
          margin-top: 0.05rem;
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
            .icon {
              font-size: 0.2rem;
              color: #999;
              font-weight: bolder;
            }
          }
        }
        .describe {
          margin-top: 0.06rem;
          p {
            color: #090909;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
            word-wrap:break-word;
            word-break:break-all;
            height: 0.32rem;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="content-wrapper-no-footer">
    <Atopbar>
      <span slot="left" class="iconfont icon-zuo" @click="goAway"></span>
      <span slot="center"></span>
      <span slot="right">
        <mt-button class="publish-btn" @click="publish">发表</mt-button>
      </span>
    </Atopbar>
    <div class="publish">
      <div class="form">
        <div class="textarea">
          <mt-field placeholder="请输入文字..." type="textarea" rows="4" v-model="form.txt"></mt-field>
        </div>
        <div class="img-column">
          <div class="img-column-item" v-for="(item, index) in imgList" :key="index">
            <img :src="item.url" :alt="item.name">
          </div>
          <div class="img-column-item add">
            <span class="iconfont icon-jia1"></span>
            <div class="upload-input">
              <input type="file" ref="upload" @change="upload" multiple="multiple"
                     accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
            </div>
          </div>
        </div>
      </div>
      <!--<div class="setting-wrapper">-->
        <!--<div class="setting-item">3123</div>-->
        <!--<div class="setting-item">3123</div>-->
        <!--<div class="setting-item">312312</div>-->
        <!--<div class="setting-item">3123</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import Atopbar from './../../components/A-topbar';
import share from './../../api/share';

export default {
  components: {
    Atopbar,
  },
  data() {
    return {
      imgList: [],
      form: {
        txt: null,
        imgList: null,
      },
    };
  },
  methods: {
    publish() {
      this.form.imgList = JSON.stringify(this.imgList);
      share.publish(this.form).then((res) => {
        if (res.data.code === 200) {
          this.$router.push({
            path: '/share',
          });
        }
      });
    },
    upload() {
      const upload = this.$refs.upload;
      const data = new FormData();
      for (let i = 0; i < upload.files.length; i += 1) {
        data.append('file', upload.files[i]);
      }
      this.$store.dispatch('upload', data).then((res) => {
        if (res.code === 200) {
          this.imgList = this.imgList.concat(res.data);
        }
      }).catch((err) => {
        MessageBox({
          title: '温馨提示！',
          message: err.message,
        });
      });
    },
    goAway() {
      MessageBox.confirm('编辑还在继续，是否离开？').then(() => {
        this.$router.push({
          path: '/share',
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
  @import './../../assets/css/main';
  .publish-btn {
    border: 0;
    box-shadow: none;
    background: none;
    font-size: 0.13rem;
    padding: 0;
    color: $main-color;
  }
  .publish {
    padding: 0.1rem;
    .form {
      .textarea {
        width: 100%;
      }
      .img-column {
        /*padding: 0 0.05rem;*/
        display: flex;
        flex-wrap: wrap;
        .img-column-item {
          position: relative;
          width: 1rem;
          height: 1rem;
          margin: 0.075rem;
          flex: none;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
          &.add {
            background: rgba(0, 0, 0, .11);
            text-align: center;
            span {
              line-height: 1rem;
              font-size: 0.4rem;
              color: rgba(0, 0, 0, 0.3);
            }
          }
          .upload-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 11;
            input {
              display: block;
              width: 100%;
              height: 100%;
              opacity: 0;
            }
          }
        }
      }
    }
    .setting-wrapper {
      padding: 0.1rem;
      .setting-item {
        width: 100%;
        padding: 0.1rem;
        border-top: 1px solid #e1e1e1;
        &:last-child {
          border-bottom: 1px solid #e1e1e1;
        }
      }
    }
  }
</style>

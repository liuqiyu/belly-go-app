<template>
  <div class="user-info">
    <Atopbar>
      <span slot="left">
         <span class="iconfont icon-zuo" @click="goBack"></span>
      </span>
      <span slot="center">账户信息</span>
      <span slot="right"></span>
    </Atopbar>
    <div class="info-list">
      <div class="info-item">
        <div class="upload-input">
          <input type="file" ref="upload" @change="change">
        </div>
        <span class="label">头像</span>
        <div class="cell">
          <div class="user-photo">
            <img :src="photoUrl"
                 alt="" v-if="photoUrl">
            <img class="user-photo" src="./../../../assets/images/not-login.png" alt="" v-else>
          </div>
          <span class="icon iconfont icon-you"></span>
        </div>
      </div>
      <div class="info-item">
        <span class="label">用户名</span>
        <div class="cell">{{ username }} <span class="icon iconfont icon-you"></span></div>
      </div>
      <div class="info-item">
        <span class="label">性别</span>
        <div class="cell">修改 <span class="icon iconfont icon-you"></span></div>
      </div>
      <div class="info-item">
        <span class="label">登录密码</span>
        <div class="cell">修改 <span class="icon iconfont icon-you"></span></div>
      </div>
      <div class="info-item">
        <span class="label">关于我们</span>
        <div class="cell"><span class="icon iconfont icon-you"></span></div>
      </div>
    </div>
    <div class="btn-wrapper">
      <div>
        <button class="l-button primary" @click="submit">注销</button>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import Atopbar from './../../../components/A-topbar';
import user from './../../../api/user';

export default {
  computed: {
    photoUrl(){
      return this.$store.state.login.user_photo;
    },
    username(){
      return this.$store.state.login.username;
    },
  },
  components: {
    Atopbar,
  },
  methods: {
    change() {
      const upload = this.$refs.upload;
      const data = new FormData();
      data.append('file', upload.files[0]);
      this.$store.dispatch('updatePhoto', data).then(() => {
      }).catch((err) => {
        MessageBox({
          title: '温馨提示！',
          message: err.message,
        });
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    submit() {
      this.$store.dispatch('logout').then(() => {
        // alert(res);
        this.$router.push({
          path: '/user',
        });
      }).catch(() => {
        // alert(err);
      });
    },
  },
};
</script>

<style scoped lang="scss">
  .user-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 1000;
    padding-top: 0.55rem;
    .info-list {
      background-color: #fff;
      .info-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.12rem 0.15rem;
        border-top: 1px solid #e1e1e1;
        &:last-child {
          border-bottom: 1px solid #e1e1e1;
        }
        .cell {
          position: relative;
          font-size: 0.14rem;
          display: flex;
          align-items: center;
          color: #999;
          .user-photo {
            width:0.5rem;
            height: 0.5rem;
            vertical-align: middle;
            overflow: hidden;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .icon {
            margin-left: 0.1rem;
            color: #e1e1e1;
          }
        }
        .upload-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0.58rem;
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
    .btn-wrapper {
      margin-top: 0.15rem;
      padding: 0.1rem;
      height: 0.55rem;
      div {
        height: 100%;
      }
    }
  }
</style>

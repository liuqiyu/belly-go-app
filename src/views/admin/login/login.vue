<template>
  <div class="login">
    <Atopbar>
      <div slot="left"></div>
      <div slot="right">
        <a class="iconfont icon-error" @click="goBack"></a>
      </div>
    </Atopbar>
    <div class="l-body">
      <div class="form">
        <div class="f-item">
          <input class="l-input" type="text" v-model="form.username" placeholder="请输入用户名">
        </div>
        <div class="f-item">
          <input class="l-input" type="password" v-model="form.password" placeholder="请输入密码">
        </div>
        <div class="f-item">
          <button class="l-button primary" @click="submit">登录</button>
        </div>
        <div class="f-item help">
         <router-link to="/register">立即注册</router-link>
         <span>忘记密码？</span>
        </div>
      </div>
    </div>
    <div class="l-other-login">
      <h3>其他登录</h3>
      <div class="other">
        <div class="other-item">1</div>
        <div class="other-item">2</div>
        <div class="other-item">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import Atopbar from './../../../components/A-topbar';

export default {
  components: {
    Atopbar,
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('login', this.form).then(() => {
          this.$router.push({
            path: '/share',
          });
      }).catch((err) => {
        MessageBox({
          title: '温馨提示！',
          message: err,
        });
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
  @import './../../../assets/css/main';
  .login {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0.45rem 0 0 0;
    .l-body {
      padding: 0.9rem 0.15rem 0 0.15rem;
      .form {
        .f-item {
          width: 100%;
          height: 0.4rem;
          margin-bottom: 0.2rem;
        }
        .help {
          padding-top: 0.1rem;
          display: flex;
          justify-content: space-between;
          color: #242424;
        }
      }
    }
    .l-other-login {
      width: 100%;
      margin-top: 2rem;
      h3 {
        font-size: 0.12rem;
        text-align: center;
        margin-bottom: 0.2rem;
        color: #bababa;
      }
      .other {
        display: flex;
        justify-content: space-around;
        .other-item {
          width: 0.4rem;
          height: 0.4rem;
          background: $main-color;
          border-radius: 50%;
          text-align: center;
          line-height: 0.4rem;
        }
      }
    }
  }
</style>

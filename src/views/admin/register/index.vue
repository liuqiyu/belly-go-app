<template>
  <div class="login">
    <Atopbar>
      <div slot="left"></div>
      <div slot="right">
        <span class="iconfont icon-error"></span>
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
          <input class="l-input" type="password" v-model="form.rePassword" placeholder="请确认密码">
        </div>
        <div class="f-item">
          <select class="l-select" v-model="form.gender">
            <option value="0">未知</option>
            <option value="1">男</option>
            <option value="2">女</option>
          </select>
        </div>
        <div class="f-item">
          <!--<mt-button style="width: 100%" size="small" type="primary" @click="submit">注册</mt-button>-->
          <button class="l-button primary" @click="submit">注册</button>
        </div>
        <div class="f-item help">
         <span>注册即视为同意《使用协议》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from './../../../api/user';
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
        rePassword: '',
        gender: 0,
      },
    };
  },
  methods: {
    submit() {
      user.register(this.form).then((res) => {
        console.log(res);
      });
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
  }
</style>

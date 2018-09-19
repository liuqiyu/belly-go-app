/**
 * Created by Kaway on 2018/9/16.
 */
import user from './../../api/user';

const login = {
  state: {
    session_id: window.sessionStorage.getItem('session_id'),
    username: window.sessionStorage.getItem('username'),
    user_photo: window.sessionStorage.getItem('user_photo'),
    user_gender: window.sessionStorage.getItem('user_gender'),
  },
  mutations: {
    SET_SESSION_ID: (state, sessionId) => {
      state.session_id = sessionId;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_USER_PHOTO: (state, photo) => {
      state.user_photo = photo;
    },
    SET_USER_GENDER: (state, gender) => {
      state.user_gender = gender;
    },
  },
  actions: {
    login({ commit }, info) {
      return new Promise((resolve, reject) => {
        user.login(info).then((res) => {
          if (res.data.code === 200) {
            const data = res.data.data;
            window.sessionStorage.setItem('session_id', data.sessionID);
            window.sessionStorage.setItem('username', data.username);
            window.sessionStorage.setItem('user_gender', data.gender);
            window.sessionStorage.setItem('user_photo', data.photo);
            commit('SET_SESSION_ID', data.sessionID);
            commit('SET_USERNAME', data.username);
            commit('SET_USER_GENDER', data.gender);
            commit('SET_USER_PHOTO', data.photo);
            resolve(res.data.message);
          } else {
            reject(res.data.message);
          }
        });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        user.logout().then((res) => {
          if (res.data.code === 200) {
            window.sessionStorage.removeItem('session_id');
            window.sessionStorage.removeItem('username');
            window.sessionStorage.removeItem('user_gender');
            window.sessionStorage.removeItem('user_photo');
            commit('SET_SESSION_ID', '');
            commit('SET_USERNAME', '');
            commit('SET_USER_GENDER', 0);
            commit('SET_USER_PHOTO', null);
            resolve(res.data.message);
          } else {
            reject(res.data.message);
          }
        });
      });
    },
    updatePhoto({ commit }, data) {
      return new Promise((resolve, reject) => {
        user.uploadPhoto(data).then((res) => {
          if (res.data.code === 200) {
            window.sessionStorage.setItem('user_photo', res.data.data);
            commit('SET_USER_PHOTO', res.data.data);
            resolve(res.data);
          } else {
            reject(res.data);
          }
        });
      })
    },
  },
};

export default login;

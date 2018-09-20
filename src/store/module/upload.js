/**
 * Created by Kaway on 2018/9/16.
 */
import common from './../../api/common';

const login = {
  actions: {
    upload({}, data) {
      return new Promise((resolve, reject) => {
        common.uploadImg(data).then((res) => {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            reject(res.data);
          }
        });
      });
    },
  },
};

export default login;

import api from './index';

const path = {
  publish: '/share/publish',
  list: '/share/list',
};

const publish = form => api.post(path.publish, form, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [(data) => {
    // Do whatever you want to transform the data
    let ret = '';
    const keys = Object.keys(data);
    keys.forEach((key) => {
      ret += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
    });
    const newRet = ret.slice(0, ret.length - 1);
    return newRet;
  }],
});

const list = () => api.get(path.list);

export default {
  publish,
  list,
};

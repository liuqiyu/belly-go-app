import api from './index';

const path = {
  uploadImg: '/upload/uploadImg',
};

const uploadImg = form => api.post(path.uploadImg, form);

export default {
  uploadImg,
};

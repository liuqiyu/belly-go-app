import api from './index';

const path = {
  list: '/recommend/list',
  attention: '/recommend/attention',
  unsubscribe: '/recommend/unsubscribe',
};

const list = () => api.get(path.list);

const attention = id => api.get(path.attention, {
  params: {
    id,
  },
});

const unsubscribe = id => api.get(path.unsubscribe, {
  params: {
    id,
  },
});

export default {
  list,
  attention,
  unsubscribe,
};

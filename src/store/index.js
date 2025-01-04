import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import all from './all';

export default createStore({
  modules: {
    all, // 注册的模块
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage, // 使用 localStorage 持久化存储
      paths: ['all'], // 持久化指定模块，比如 "all"
    }),
  ],
});

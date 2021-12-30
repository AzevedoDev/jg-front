import { createStore } from 'vuex';

export default createStore({
  state: {
    studentName: '',
    questions: [],
  },
  mutations: {
    changeName(state, name) {
      return (state.studentName = name);
    },
  },
  actions: {},
  modules: {},
});

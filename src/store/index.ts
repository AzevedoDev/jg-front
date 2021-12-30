import { createStore } from 'vuex';

export default createStore({
  state: {
    studentName: 'Jovem Gênio',
    questions: [
      {
        question: 'Qual desses números é par?',
        answers: [
          { option: 'A. 13', value: 'a', checked: false },
          { option: 'B. 27', value: 'b', checked: false },
          { option: 'C. 1', value: 'c', checked: false },
          { option: 'D. 32', value: 'd', checked: false },
        ],
      },
    ],
  },
  mutations: {
    changeName(state, name) {
      return (state.studentName = name);
    },
  },
  actions: {},
  modules: {},
});

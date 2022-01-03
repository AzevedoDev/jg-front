import { createStore } from 'vuex';

type StudentSideT = {
  studentName: string;
  questions: {
    id: number;
    question: string;
    answers: { option: string; value: string; checked: boolean }[];
  }[];
};

export default createStore<StudentSideT>({
  state: {
    studentName: 'Jovem Gênio',
    questions: [
      {
        id: 1,
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
    updateName(state, name) {
      state.studentName = name;
      return;
    },
    updateAnswer(state, props) {
      const { id: questionID, idx } = props;
      state.questions.find(({ id, answers }) => {
        if (questionID === id) {
          answers[idx].checked = !answers[idx].checked;
        }
      });
    },
  },
  actions: {},
  modules: {},
});

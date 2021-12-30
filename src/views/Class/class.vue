<template>
  <div
    class="flex flex-col justify-evenly items-center h-5/6 w-11/12 container"
  >
    <Logo
      size="logo-small"
      class="fixed top-3 left-3 cursor-pointer"
      @click="() => goToHome"
    />
    <div class="flex justify-center flex-col items-center h-1/5 z-10">
      <h1 class="text-xl font-sans text-white font-bold my-3">
        Olá {{ studentName }}!
      </h1>
      <p
        class="text-xl font-sans text-center text-white font-medium"
        v-if="!hasQuestions"
      >
        Ainda não foi iniciado nenhuma aula. Espere seu professor.
      </p>
    </div>
    <div class="h-2/3">
      <Question :title="'Qual desses números é par ?'" :questions="questions" />
    </div>
    <div class="h-1/5">
      <p
        class="text-xl font-sans text-center text-white font-medium"
        v-if="!hasQuestions"
      >
        Preste atenção no professor.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import Logo from "@/components/logo/Logo.vue";
import router from "@/router";
import Question from "@/components/Question/question.vue";

export default defineComponent({
  components: {
    Logo,
    Question,
  },
  data() {
    return {
      questions: [
        { option: "A. 13", value: "a", checked: true },
        { option: "B. 27", value: "b", checked: false },
        { option: "C. 1", value: "c", checked: true },
        { option: "D. 32", value: "d", checked: false },
      ],
    };
  },
  computed: {
    studentName() {
      return store.state.studentName;
    },
    slug() {
      return "";
    },
    goToHome() {
      return router.push("/");
    },
    hasQuestions() {
      if (store.state.questions.length > 0) {
        return true;
      }
      return false;
    },
  },
});
</script>

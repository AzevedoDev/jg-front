<template>
  <div
    class="flex flex-col justify-evenly items-center h-5/6 container w-11/12"
  >
    <Logo
      size="logo-small"
      class="fixed top-3 left-3 cursor-pointer"
      @click="() => goToHome"
    />
    <div class="flex justify-center flex-col items-center">
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
    <Question
      v-for="question in getQuestions"
      :key="question.id"
      :title="question.question"
      :questions="question.answers"
      :id="question.id"
    />
    <p
      class="text-xl font-sans text-center text-white font-medium"
      v-if="handleTeacherTalking"
    >
      Preste atenção no professor.
    </p>
    <Button buttonName="Continue" v-if="hasQuestions" />
    <img
      src="@/assets/girl-svgrepo-com.svg"
      alt=""
      class="w-36 animate__animated animate__backInUp"
      v-if="handleTeacherTalking"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import Logo from "@/components/logo/Logo.vue";
import router from "@/router";
import Question from "@/components/Question/question.vue";
import Button from "@/components/button/Button.vue";

export default defineComponent({
  components: {
    Logo,
    Question,
    Button,
  },
  store,
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
    getQuestions() {
      return store.state.questions;
    },
    hasQuestions() {
      if (store.state.questions.length > 0) {
        return true;
      }
      return false;
    },
    handleTeacherTalking() {
      return false;
    },
  },
});
</script>

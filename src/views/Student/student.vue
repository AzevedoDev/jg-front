<template>
  <div
    class="flex flex-col justify-evenly items-center h-5/6 w-11/12 container"
  >
    <Logo
      size="logo-small"
      class="
        fixed
        top-3
        left-3
        cursor-pointer
        animate__animated animate__backInRight
      "
      @click="() => goToHome"
    />
    <div
      class="
        flex
        justify-center
        flex-col
        items-center
        h-1/4
        z-10
        animate__animated animate__backInDown animate__delay-1s
      "
    >
      <h1 class="text-3xl font-sans text-white font-medium my-3">Olá Aluno!</h1>
      <p class="text-3xl font-sans text-center text-white font-medium">
        Sua Aula vai ter inicio em breve
      </p>
    </div>
    <img
      src="@/assets/question_1.png"
      alt=""
      class="w-36 animate__animated animate__backInDown animate__delay-2s"
    />
    <div
      class="
        px-5
        h-1/2
        flex flex-col
        justify-evenly
        z-10
        animate__animated animate__backInDown animate__delay-3s
      "
    >
      <p class="text-white text-lg font-medium">
        Mas antes, me diz seu primeiro nome no campo a baixo?
      </p>

      <label for="name" class="text-white text-lg font-medium">Nome</label>
      <input
        v-model="name"
        type="text"
        class="
          w-full
          h-14
          text-3xl text-center
          border-1 border-yellow-400
          rounded-xl
        "
      />
      <Button
        type="submit"
        button-name="Continuar"
        button-type="primary-button"
        @click="studentName"
      />
      <a
        rel="noopener noreferrer"
        class="text-center text-white font-medium underline cursor-pointer"
        >Ajuda</a
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/button/Button.vue";
import store from "@/store";
import Logo from "@/components/logo/Logo.vue";
import router from "@/router";

export default defineComponent({
  components: {
    Button,
    Logo,
  },
  data: () => ({
    name: "",
  }),
  computed: {
    slug() {
      return "mecontrata-eusoulegal-paracaraca";
    },
  },
  methods: {
    studentName() {
      const text = this.name;
      store.commit("changeName", text);
      router.push(`/class/${this.slug}`);
    },
    goToHome() {
      return router.push("/");
    },
  },
});
</script>

<template>
  <div class="container flex flex-col justify-evenly items-center h-full">
    <div
      class="
        container
        flex
        justify-center
        items-center
        flex-col
        animate__animated animate__backInDown
      "
    >
      <Logo />
    </div>
    <div
      class="
        container
        flex flex-col
        justify-evenly
        items-center
        animate__animated animate__backInUp animate__delay-1s
        h-1/3
        px-5
      "
    >
      <p class="text-white text-3xl font-bold my-3">Acessar portal</p>

      <Button
        buttonName="Professor"
        to="/teacher"
        :buttonType="`primary-button`"
      />
      <Button buttonName="Aluno" to="/student" :buttonType="`second-button`" />
      <p class="text-white text-base my-3">
        Primeiro acesso?
        <a rel="noopener noreferrer" class="font-bold underline cursor-pointer"
          >Cadastre-se</a
        >
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/button/Button.vue";
import Logo from "@/components/logo/Logo.vue";
export default defineComponent({
  components: {
    Button,
    Logo,
  },
  setup() {
    return {};
  },
});
</script>
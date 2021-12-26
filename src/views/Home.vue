<template>
  <div
    class="
      container
      flex flex-col
      justify-evenly
      items-center
      h-full
      bg-green-700
    "
  >
    <Logo />
    <div class="container flex flex-col items-center">
      <Button buttonName="Professor" to="/professor" />
      <Button buttonName="Aluno" to="/aluno" />
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

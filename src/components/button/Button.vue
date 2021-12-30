<template>
  <router-link
    :to="`${route}`"
    class="w-full max-w-xl text-center text-2xl font-sans font-bold py-2 h-14"
    :class="buttonType ? buttonType : 'primary-button'"
  >
    {{ buttonName }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    buttonName: String,
    route: String,
    buttonType: String,
  },
});
</script>

<style>
.primary-button {
  background: #fed600;
  border-radius: 9px;
  color: #135958;
}
.second-button {
  color: #fed600;
  border-color: #fed600;
  border-width: 4px;
  border-radius: 9px;
}
.second-button:hover {
  display: inline-block;

  animation: pulse;
  animation-duration: 1s;
}
.primary-button:hover {
  display: inline-block;

  animation: pulse;
  animation-duration: 1s;
}
</style>
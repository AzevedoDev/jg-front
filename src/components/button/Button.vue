<template>
  <router-link
    :to="`${route}`"
    class="
      rounded-xl
      bg-indigo-700
      w-10/12
      text-center text-3xl
      font-sans font-bold
      py-2
      m-2
      text-white
    "
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
  },
});
</script>

<template>
  <img
    src="https://jovensgenios.com/wp-content/uploads/2020/06/sfghfghfgh-768x338.png"
    :class="size ? size : 'logo-standard'"
    alt="Jovens Gênios Logo"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: String,
  },
});
</script>

<style>
.logo-standard {
  width: 326px;
  height: 143px;
}
.logo-small {
  width: 144px;
  height: 63px;
}
</style>
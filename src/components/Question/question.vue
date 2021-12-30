<template>
  <div class="flex items-center justify-evenly h-4/5 flex-col">
    <h2 class="text-white text-4xl font-medium w-4/5">
      {{ title }}
    </h2>
    <div
      class="flex items-center w-full h-14 rounded-lg border-black border-2"
      v-for="(question, idx) in questions"
      :key="idx + 1"
      :class="question.checked ? 'bg-yellow-400' : 'bg-white'"
    >
      <input
        type="checkbox"
        :id="question.option"
        class="form-checkbox"
        :value="question.value"
        :checked="question.checked"
        v-model="question.checked"
      />
      <label
        class="text-2xl font-bold px-2"
        :class="question.checked ? 'text-white' : 'text-gray-500'"
        :for="question.option"
        >{{ question.option }}</label
      >
    </div>
  </div>
</template>
<style>
[type="checkbox"] {
  display: none;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
type QuestionsT = {
  option: string;
  value: string;
  checked: boolean;
};
export default defineComponent({
  props: {
    title: String,
    questions: {
      type: Array as () => Array<QuestionsT>,
    },
  },
});
</script>

<template>
  <div class="flex items-center justify-evenly h-4/5 flex-col max-w-xl w-full">
    <h2 class="text-white text-4xl font-medium max-w-xl text-center">
      {{ title }}
    </h2>
    <div
      class="
        flex
        items-center
        w-full
        h-14
        rounded-lg
        border-black border-2
        cursor-pointer
      "
      v-for="(question, idx) in questions"
      @click="() => onClick(Number(id), idx)"
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
import store from "@/store";
import { defineComponent } from "vue";
type QuestionsT = {
  option: string;
  value: string;
  checked: boolean;
};
export default defineComponent({
  props: {
    title: String,
    id: Number,
    questions: {
      type: Array as () => Array<QuestionsT>,
    },
  },
  methods: {
    onClick(id: number, idx: number) {
      const props = { id, idx };
      store.commit("updateAnswer", props);
    },
  },
});
</script>

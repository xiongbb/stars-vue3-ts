<template>
  <stars :num="num" :size="size" @onStarChange="starChange"></stars>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      num: 3,
      size: 36,
    });

    const starChange = (num: Number) => {
      console.log(num);
    };

    return {
      starChange,
      ...toRefs(state),
    };
  },
});
</script>

<style>
</style>
<template>
  <div>
    <!-- pass content from parent component to child component -->
    <TestSlotChild>
      <h1>Main content</h1>
      <template #top>
        <p>this go to the top slot</p>
      </template>
      <template #bottom><h3>This go to the bottom slot</h3></template>
      <template #middle>This is middle one</template>
    </TestSlotChild>

    <TestSlotChild>
      <template v-slot="{ message }"> {{ message }}</template>
    </TestSlotChild>
  </div>
</template>

<script>
import TestSlotChild from "./TestSlotChild.vue";

export default {
  components: {
    TestSlotChild,
  },
};
</script>

<style lang="scss" scoped></style>

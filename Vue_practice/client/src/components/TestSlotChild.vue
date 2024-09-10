<template>
  <div class="my-component">
    <div>default:<slot></slot></div>
    <div>top:<slot name="top"></slot></div>
    <div>middle:<slot name="middle"></slot></div>
    <div v-if="$slots.bottom">bottom:<slot name="bottom" /></div>
  </div>
  scoped slots
  <div><slot :message="text"></slot></div>
</template>

<script>
export default {
  data() {
    return {
      text: "say hi from child component slot.",
    };
  },
};
</script>

<template>
  <input :value="input1" @input="$emit('update:input1',$event.target.value)"  class="border-2"></input>
  <input :value="input2" @input="$emit('update:input2',$event.target.value)"  class="border-2"></input>
</template>

<script>
export default {
  props: {
    input1: String,
    input2: Number,
  }
};
</script>

<style lang="scss" scoped></style>

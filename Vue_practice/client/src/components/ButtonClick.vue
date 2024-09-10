<template>
  <button :class="newClass">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    newClass() {
      return `${this.bgColor} text-sm ${this.textColor} rounded-md px-1`;
    },
  },
};
</script>

<style lang="scss" scoped></style>

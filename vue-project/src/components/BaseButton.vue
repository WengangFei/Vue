<template>
  <button>
    <slot v-if="left">Submit</slot>
    <slot v-else>Click</slot>
  </button>
</template>

<script>
export default {
  props: {
    left: Boolean,
    icon: String
  },

  setup() {
    return {}
  }
}
</script>

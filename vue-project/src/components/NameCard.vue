<template>
  <span v-for="item in num.n" :key="item">{{ item }}{{ ', ' }}</span>
  <input type="text" @input="$emit('input-number', { event: $event })" />
  <button @click="$emit('click-button', { number: num.id })">Add a Number</button><br /><br />
</template>

<script>
export default {
  props: {
    num: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  emits: ['input-number', 'click-button']
}
</script>

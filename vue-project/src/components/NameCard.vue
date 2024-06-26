<template>
  <span v-for="item in num.n" :key="item">{{ item }}{{ ', ' }}</span>
<<<<<<< HEAD
  <input type="text" @input="$emit('input-number', { event: $event })" />
  <button @click="$emit('click-button', { number: num.id })">Add a Number</button><br /><br />
=======
  <!-- pass a argument as an object payload and emit it to parent component -->
  <input type="text" @input="$emit('input-number',{event:$event})" />
  <button @click="$emit('add-a-number',{id:num.id})">Add a Number</button>
>>>>>>> 29cc573 (added)
</template>

<script>
export default {
<<<<<<< HEAD
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
=======
  //set num to parent prop obj
  props:{
    num:{
      type:Object,
      required:true,
    }
  },
  emits:[
    'input-number',
    'add-a-number'
  ],
>>>>>>> 29cc573 (added)
}
</script>

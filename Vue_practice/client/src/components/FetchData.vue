<template>
  <div>
    <div v-if="data.length > 0" v-for="item in data" :key="item.id">
      {{ item.name }}
    </div>
    <div v-else>No data</div>
    <slot name="here"></slot>
    <slot :text="childrenContent" :number="age"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      childrenContent: "From child",
      age: 40,
    };
  },
  async created() {
    const resp = await fetch("http://localhost:4000/data");
    const result = await resp.json();
    this.data = result;
  },
};
</script>

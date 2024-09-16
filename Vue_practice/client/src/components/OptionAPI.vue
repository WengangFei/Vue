<template>
  <div class="text-center text-4xl">Option API</div>
  <div class="p-6">
    Counter: {{ counter }}<br />
    increment by:
    <input type="number" class="border-2" v-model="counter" /><br />
    <button class="bg-gray-400 py-1 px-2 rounded-md" @click="increment()">
      Click</button
    ><br />
    Profile Name: <span class="text-4xl">{{ name }}</span
    >, User age: <span class="text-4xl">{{ age }}</span>
    <div>
      <button
        class="bg-red-500 rounded-md around-md text-white px-1"
        @click="patchMethod"
      >
        Change Name
      </button>
      <p>
        Name:
        <input v-model.lazy="name" class="border-2 rounded-md p-1 m-2" />
      </p>
      <p>Nickname: {{ myName }}</p>
      <children-option
        v-model:input1="myName"
        v-model:input2="mount"
      ></children-option>
      Mount: {{ mount }}
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapState } from "pinia";
import useProfileStore from "../store/profile";
import ChildrenOption from "./ChildrenOption.vue";

export default {
  //reactive data returns ad an object
  data() {
    return {
      counter: 5,
      mount: 0,
      myName: "guoguo",
    };
  },
  //modifying data
  methods: {
    increment() {
      this.counter += this.mount;
      this.mount = 0;
    },
    changeName() {
      const profile = useProfileStore();
      profile.name = "li";
    },

    patchMethod() {
      const profile = useProfileStore();
      profile.$patch({
        name: "Liu",
      });
    },
  },
  computed: {
    ...mapWritableState(useProfileStore, ["name", "age"]),
  },

  components: { ChildrenOption },
};
</script>

<style lang="scss" scoped></style>

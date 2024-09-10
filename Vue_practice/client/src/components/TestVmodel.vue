<template>
  <div>
    <ul>
      <li v-for="name in nameList">
        {{ name }}
        <ButtonClick
          content="add"
          bgColor="bg-black"
          textColor="text-white"
          @click="addFavoriteName(name)"
        />
      </li>
    </ul>
    <div>
      My favorite names:
      <span v-for="name in favoriteNames">{{ name }}</span>
    </div>
    <div>
      add more names:
      <input
        class="border-2 p-1 rounded-tr-md"
        placeholder="add a name"
        v-model="newName"
        @keyup.enter="addNewName"
      />
    </div>
  </div>
</template>

<script>
import ButtonClick from "./ButtonClick.vue";

export default {
  data() {
    return {
      nameList: ["li", "jay", "fei"],
      favoriteNames: [],
      newName: "",
    };
  },

  methods: {
    addFavoriteName(name) {
      this.favoriteNames.push(name, ", ");
    },
    addNewName() {
      this.nameList.push(this.newName);
      this.newName = "";
    },
  },

  components: {
    ButtonClick,
  },
};
</script>

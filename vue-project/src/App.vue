<script>
import BaseCounter from './components/BaseCounter.vue'
import ListInfo from './components/ListInfo.vue'
import BaseButton from './components/BaseButton.vue'
import BaseLayout from './components/BaseLayout.vue'
import TestComponent from './components/TestComponent.vue'

export default {
  //register a component in to components property.
  components: {
    BaseCounter,
    ListInfo,
    BaseButton,
    BaseLayout,
    TestComponent
  },

  //data function is to define the reactive state for a component
  //when these prop are updated, vue will auto update the DOM
  //to reflect the changes.
  data() {
    //return a configuration object.
    return {
      doctor: {
        name: 'pai',
        age: 30,
        food: 'hotPot',
        location: 'china',
        color: 'yellow,'
      }
    }
  },

  computed: {
    getPersonInfo() {
      //pass an object to children component
      return {
        name: this.doctor.name,
        color: this.doctor.color,
        age: this.doctor.age
      }
    }
  },

  methods: {
    showInfo() {
      return {
        food: this.doctor.food,
        location: this.doctor.location
      }
    },

    changeName() {
      this.doctor.name = 'gun'
    },
    ageChange() {
      this.doctor.age = 18
    }
  },

  watch: {
    //watch method is watching for all data changes.
    // watching the number and auto => newValue
    //to Avoid the heavy computation reactive data, move it to computed
    //property to
    number(newValue) {
      newValue % 2 === 0 ? (this.counter = 'Even Counter') : (this.counter = 'Odd Counter')
    }
  }
}
</script>

<template>
  <h1>Vue practice</h1>
  <div>
    <ListInfo
      :fun="getPersonInfo"
      :med="showInfo"
      @change-name="changeName"
      @change-age="ageChange"
    />
    <hr />
    <!-- Counter component injected -->
    <BaseCounter />
    <hr />

    <BaseButton :left="true">Parent</BaseButton>
    <hr />

    <BaseLayout>
      <template v-slot:top>top section</template>
      <template v-slot:middle>Whooooo</template>
      <!-- pass a component in to a component as prop -->
      <template v-slot:bottom>
        <TestComponent />
      </template>
    </BaseLayout>
  </div>
</template>

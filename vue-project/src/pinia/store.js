import { defineStore } from 'pinia'

export const pinia = defineStore('piniaStore', {
  //data
  state() {
    return {
      name: 'Pina',
      number: 10,
      nameList: []
    }
  },
  //computed
  getters: {
    changeName(state) {
      return state.name
    }
  },
  //methods
  actions: {
    incrementNumber() {
      this.number += 10
    },

    async getNameList() {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resp.json()
      console.log(2)
      this.nameList = data
    }
  }
})

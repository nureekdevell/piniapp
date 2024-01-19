import {defineStore} from "pinia";
export const useCounterStore = defineStore('counterStore', {
    state: () => {
    return{
        counter: 1
    }
    },
    actions: {
        increment() {
            return this.counter++
        },
        decrement() {
            return this.counter--
        }
    }


})


<template>
  <div class="container">
<h1 class="text-center">Hello Pinia</h1>
    <h2 class="text-center">{{counterApp.counter}}</h2>
<div class="text-center">
  <button @click="counterApp.increment"  class="btn m-2 btn-primary">increm</button>
  <button  @click="counterApp.decrement" class="btn btn-danger">decrem</button></div>

  </div>
</template>

<script setup>
import { useCounterStore} from "@/stores/counter.js";
const counterApp = useCounterStore()
console.log(counterApp.counter)


</script>

<style  scoped>

</style>
<template>
  <div class="container">
<h1 class="text-center">Todo App</h1>
<div class="row">
  <form class="col-md-6 offset-3" @submit="counterApp.addUser">
    <input class="form-control" placeholder="Enter Name" type="text" v-model="counterApp.name">
    <input class="form-control my-2" placeholder="Enter @mail" type="text" v-model="counterApp.email">
    <input class="form-control" placeholder="Enter Job" type="text" v-model="counterApp.job">
    <button type="submit" class="btn btn-primary my-2">Add user</button>
  </form>

  <div class="col-md-6 offset-3">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Job</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>nme</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>

      </tbody>
    </table>
  </div>
</div>



  </div>
</template>

<script setup>
import { useCounterStore} from "@/stores/counter.js";
const counterApp = useCounterStore()
console.log(counterApp.counter)


</script>

<style  scoped>

</style>
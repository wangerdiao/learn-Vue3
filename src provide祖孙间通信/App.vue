<template>
  <div class="app">
    <h1>我是App组件（祖）{{name}}----------{{price}}</h1>
    <Child></Child>
  </div>
</template>

<script>
import { reactive, toRefs,provide } from 'vue';
import Child from "./components/Child";
export default {
    name: "App",
    components: { Child },
    setup() {
      let car = reactive({name:'奔驰',price:'40W'})
      provide('car',car) //第一个参数为提供的数据起个名字，第二个参数为提供的数据，给后代组件传入数据
      return {...toRefs(car)}
    }
}
</script>

<style>
  .app {
    background-color: red;
    padding: 10px;
  }
</style>
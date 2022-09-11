<template>
  <div class="app">
    <h1>我是App组件</h1>
  </div>
</template>

<script>
import { reactive, toRefs,ref,isRef,isReactive,isProxy,isReadonly, readonly } from 'vue';
export default {
    name: "App",
    setup() {
      let car = reactive({name:'奔驰',price:'40W'})
      let sum = ref(0)
      let car2 = readonly(car)
      console.log(isRef(sum)) //true
      console.log(isReactive(car))//true
      console.log(isReadonly(car2))//true
      console.log(isProxy(car))//true
      console.log(isProxy(car2))//true
      console.log(isProxy(sum))//false 
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
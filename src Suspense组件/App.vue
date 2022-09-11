<template>
  <div class="app">
    <h1>我是App组件</h1>
    <!-- 等待异步组件渲染 -->
    <Suspense>  
      <!-- 准备好插槽 -->
      <template v-slot:default>  
        <Child> </Child>
      </template>
      <template v-slot:fallback>
        <h3>加载中....</h3>
      </template>
    </Suspense>
    
  </div>
</template>

<script>
// import Child from "./components/Child";  //静态引入
  import {defineAsyncComponent,ref} from 'vue' //静态引入
  const Child = defineAsyncComponent(() => import('./components/Child.vue')) //动态引入异步组件
export default {
    name: "App",
    components: { Child },
    
}
</script>
<style>
  .app {
    background-color: red;
    padding: 10px;
  }
</style>
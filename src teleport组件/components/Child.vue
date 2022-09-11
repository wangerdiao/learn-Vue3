<template>
    <div class="child">
      <h1>我是Child组件</h1>
      <Son></Son>
    </div>
  </template>
  
  <script>
import Son from './Son.vue';
  export default {
    name: "Child",
    components: { Son }
}
  </script>
  
  <style>
    .child {
      background-color: blue;
      padding: 10px;
    }
  </style>
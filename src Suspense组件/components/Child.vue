<template>
    <div class="child">
      <h1>我是Child组件</h1>
    </div>
  </template>
  
  <script>
    import {ref} from 'vue'
  export default {
    name: "Child",
    async setup() {
      let sum = ref(0)
      // return new Promise((resolve,reject) => {
      //   setTimeout(() => {
      //     resolve({sum})
      //   },500)
      // })
      let p = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve({sum})
        },1000)
      })
      return await p
    }
}
  </script>
  
  <style>
    .child {
      background-color: blue;
      padding: 10px;
    }
  </style>
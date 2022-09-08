<template>
  <!-- Vue3里不再需要div容器包裹 -->
  <h1>一个人的信息</h1>
  <h2>姓名{{name}}</h2>
  <h2>年龄{{age}}</h2>
  <h2>性别{{sex}}</h2>
  <h2>体重{{weight}}</h2>
  <button @click="sayHello">说话(vue3里的setup)</button>
  <button @click="sayHi">说话(vue2里的method方法)</button>
  <button @click="test1">测试(vue2配置中的this指向)</button>
  <button @click="test2">测试(vue3配置中的this指向)</button>

</template>
<script>
  import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return {
      sex:'男',
      weight:100
    }
  },
  methods: {
    sayHi(){
      console.log('你好我是Vue2的method')
    },
    test1(){
      console.log(this.name,this.age,this.sayHello)
    }
  },
  setup(){
    //这里测试一下setup，不考虑响应式的问题
    //数据
    let name = "刘凯"
    let age = 18
    let weight = 200
    //方法
    function sayHello() {
      console.log(`我是${name},年龄为${age},你好！`)
    }
    function test2(){
      console.log(this.sex,this.sayHi)  //不能访问到data,method中的配置
    }
    //返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2,
      weight      //重名的时候以setup的配置优先
    }
    //返回一个渲染函数
    // return () => h('h1',尚硅谷)
  }
}
</script>

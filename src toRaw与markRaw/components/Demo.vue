<template>
  <h1>x当前的值是:{{sum}}</h1>
  <button @click="sum++">点我sum+1</button>
  <h1>姓名{{name}}</h1>
  <h1>年龄{{age}}</h1>
  <h1>薪资{{job.j1.salary}}K</h1>
  <h1>车子{{person.car}}</h1>
  <button @click="name+='~'">点我修改姓名</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
  <button @click="showRawPerson">展示原始person</button>
  <button @click="addCar">点我加个车</button>
  <button @click="person.car.name+='!'">换车</button>
  <button @click="changePrice">提价</button>
</template>
<script>
  import {ref, reactive,toRefs,toRaw,markRaw} from 'vue'  //传入watch组合式API
export default {
  name:'Demo',
 setup(){
  let sum = ref(0)
  let person = reactive({  //只进行第一层次的响应式
    name:'刘凯',
    age:18,
    job:{
      j1:{
        salary:20
      }
    }
  })
  function showRawPerson() {
    const p = toRaw(person) //将reactive的响应式对象变为普通对象
    p.age++
    console.log(p)
  }
  function addCar() {
    person.car = markRaw({name:'大奔',price:20}) //markRaw使person里car的属性不再具有响应式，数据变了但是页面不更新
    console.log(person.car.price)
  }
  function changePrice() {
    person.car.price++
    console.log(person.car.price)
  }
  return { 
    person,
    sum,
    ...toRefs(person),
    showRawPerson,
    addCar,
    changePrice
  }
 }
}
</script>
<template>
  <h1>x当前的值是:{{x.y}}</h1>
  <button @click="x.y++">点我x+1</button>
  <h4>{{person}}</h4>
  <h1>姓名{{name}}</h1>
  <h1>年龄{{age}}</h1>
  <h1>薪资{{job.j1.salary}}K</h1>
  <button @click="name+='~'">点我修改姓名</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
</template>
<script>
  import {ref, reactive,shallowReactive,shallowRef,toRefs} from 'vue'  //传入watch组合式API
export default {
  name:'Demo',
 setup(){
  let person = shallowReactive({  //只进行第一层次的响应式
    name:'刘凯',
    age:18,
    job:{
      j1:{
        salary:20
      }
    }
  })
  let x = shallowRef({ //只处理基本类型响应式，不处理复杂类型的响应式
    y:0
  })
  return {
    person,
    x,
    ...toRefs(person)

  }
 }
}
</script>
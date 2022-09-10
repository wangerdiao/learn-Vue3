<template>
  <h1>x当前的值是:{{sum}}</h1>
  <button @click="sum++">点我sum+1</button>
  <h4>{{person}}</h4>
  <h1>姓名{{name}}</h1>
  <h1>年龄{{age}}</h1>
  <h1>薪资{{job.j1.salary}}K</h1>
  <button @click="name+='~'">点我修改姓名</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
</template>
<script>
  import {ref, reactive,toRefs,readonly,shallowReadonly} from 'vue'  //传入watch组合式API
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
  // person = readonly(person) //person这个对象不再是响应式，只读
  // person = shallowReadonly(person)  //第一次为可读不能修改
  sum = readonly(sum)  //sum变为可读
  return { 
    person,
    sum,
    ...toRefs(person)
  }
 }
}
</script>
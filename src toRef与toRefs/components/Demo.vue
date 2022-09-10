<template>
  <h4>{{person}}</h4>
  <h1>姓名{{name}}</h1>
  <h1>年龄{{age}}</h1>
  <h1>薪资{{job.j1.salary}}K</h1>
  <button @click="name+='~'">点我修改姓名</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
</template>
<script>
  import {ref, reactive,toRef,toRefs} from 'vue'  //传入watch组合式API
export default {
  name:'Demo',
 setup(){
  let person = reactive({
    name:'刘凯',
    age:18,
    job:{
      j1:{
        salary:20
      }
    }
  })
  console.log(toRef(person,'name'))
  console.log(toRefs(person))
  return {
    person,
    // name:person.name,   //这种写法相当于 name:'张三' 使数据丢失了响应式
    // age:person.age,
    // salary:person.job.j1
    // name:ref(person.name),   //这种写法只是修改了这里的ref(person.name)，源数组里的person.name并没有改变
    // age:ref(person.age),
    // salary:ref(person.job.j1.salary)
    // name:toRef(person,'name'),  //这样的写法使数据具有响应式，修改与读取的都是源对象person
    // age:toRef(person,'age'),
    // salary:toRef(person.job.j1,'salary')
    ...toRefs(person) // toRefs(person)是一个对象，用展开运算符展开

  }
 }
}
</script>
<template>
    <h1>当前计数的值为{{sum}}</h1>
    <button @click="sum++">点我count+1</button>
    <hr>
    <h1>{{msg}}</h1>
    <button @click="msg += '!'">点我加！</button>
    <hr>
    <h1>姓名{{person.name}}</h1>
    <h1>年龄{{person.age}}</h1>
    <h1>薪资{{person.job.j1.salary}}K</h1>
    <button @click="person.name+='~'">点我修改姓名</button>
    <button @click="person.age++">点我修改年龄</button>
    <button @click="person.job.j1.salary++">点我涨薪</button>
</template>
<script>
    import {watch,ref} from 'vue'  //传入watch组合式API
export default {
    name:'Demo',
   setup(){
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = ref({
      name:'刘凯',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    watch(sum,(newValue,oldValue) => { //watch监测ref的简单型数据不需要.value，如果sum.value的话就成监测0了
        console.log('sum的值变了',newValue,oldValue)
    })
    console.log(person)
    watch(person,(newValue,oldValue) => { //watch监测复杂类型数据需要.value,监测value里面的Proxy对象  or 用{deep:true深度监视}
        console.log('person的值变了',newValue,oldValue)
    },{deep:true})
    return {
      sum,
      msg,
      person
    }
   }
}
</script>
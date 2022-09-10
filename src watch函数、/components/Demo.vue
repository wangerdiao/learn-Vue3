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
    <h1>爱好{{hobby}}K</h1>
    <button @click="person.name+='~'">点我修改姓名</button>
    <button @click="person.age++">点我修改年龄</button>
    <button @click="person.job.j1.salary++">点我涨薪</button>
    <button @click="hobby[0]='学习'">点我修改爱好</button>
</template>
<script>
    import {watch,ref, reactive} from 'vue'  //传入watch组合式API
export default {
    name:'Demo',
   setup(){
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'刘凯',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    let hobby = reactive(['吸烟','喝酒','烫头'])
    // 情况1：监视ref所定义的一个响应式数据
    // watch(sum,(newValue,oldValue) => {  
    //     console.log('sum的值变化了',newValue,oldValue)
    // })
    // 情况2：监视ref所定义的多个响应式数据
    // watch([sum,msg],(newValue,oldValue) => { 
    //     console.log('sum或msg的值变化了',newValue,oldValue)
    // },{immediate:true,deep:true})  //watch第三个参数配置可选项
    // 情况3：监测reactive所定义的一个响应式数据的全部属性,无法正确获取oldValue，强制默认开启深度监视，deep配置无效
    // watch(person,(newValue,oldValue) => { 
    //     console.log('person修改了',newValue,oldValue)
    // },{deep:true}) //此处deep配置无效
    // watch([person,hobby],(newValue,oldValue) => { 监测reactive所定义的多个响应式数据的全部属性
    //     console.log('person修改了',newValue,oldValue)
    // },{deep:true})
    // 情况4：监视reactive所定义的一个响应式数据的 某个属性
    // watch(() => person.age,(newValue,oldValue) => {
    //     console.log('person中的name发生变化了',newValue,oldValue)
    // })
    // 情况5：监视reactive所定义的一个响应式数据的 某些属性
    // watch([() => person.age,()=>person.name],(newValue,oldValue) => {
    //     console.log('person中的name或age发生变化了',newValue,oldValue)
    // })
    // 特殊情况
    // watch(()=>person.job,(newValue,oldValue) => {
    //   console.log('person中的job发生变化了',newValue,oldValue)
    // },{deep:true})//此处监视的是reactive所定义的对象中的一个属性，所以deep配置有效
    return {
      sum,
      msg,
      person,
      hobby
    }
   }
}
</script>
<template>
  <!-- 模板里面会自动解析引用对象的value，即name.value -->
  <h1>一个人的信息</h1>
  <h2>姓名{{name}}</h2>  
  <h2>年龄{{age}}</h2>
  <h2>工作{{job.type}}</h2>
  <h2>薪资{{job.salary}}</h2>
  <button @click="changeInfo">点我更改信息</button>
</template>
<script>
  import {ref} from 'vue'  //引入ref函数使得数据具有响应式
export default {
  name: 'App',
  setup(){
    let name = ref("张三") //使用ref函数让数据变成引用对象
    let age = ref(18)
    const job = ref({
      type:'前端工程师',
      salary:'10K'
    })
    function changeInfo() {
      job.value.type = '后端工程师'
      job.value.salary = '20K'
      console.log(job.value)
    }
    return {
      name,
      age,
      changeInfo,
      job
    }
  }
}
</script>

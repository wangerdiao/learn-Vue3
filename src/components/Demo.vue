<template>
  <h1>一个人的信息</h1>
  <h2>姓名{{name}}</h2>  
  <h2>年龄{{age}}</h2>
  <button @click="test">测试一下Demo组件的hello事件</button>
  <slot name="chazao"></slot>
</template>
<script>
    import {ref,reactive} from 'vue'
export default {
    name:'Demo',
    props:['msg','showName'],
    emits:['hello'], //接受父组件hello的自定义事件
    // beforeCreate(){
    //     console.log('-----------beforeCreate') //setup执行在beforecreated之前，且this为undefined
    // },
    setup(props,context){
        // console.log(props)
        // console.log(context.attrs)  //与vue2的$attrs一样
        // console.log('-----------------setup',this)
        // console.log(context.emit)  //与vue2的$emit一样，触发自定义事件
        console.log(context.slots)   //用来存放收到的插槽内容
    let name = ref("张三") 
    let age = ref(18) 
    function test() {
        context.emit('hello',666)
    }
    return {
      name,
      age,
      test,
    }
  }
}
</script>
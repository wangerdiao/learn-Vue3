<template>
  <!-- 模板里面会自动解析引用对象的value，即name.value -->
  <input type="text" v-model="keyWord">
  <h2>{{keyWord}}</h2>
</template>
<script>
import {ref,customRef} from 'vue'
export default {
    name: "App",
    setup() {
      // let keyWord = ref('hello')  //使用Vue准备好的内置ref
      function myref(value,delay) { //自定义一个myref，要有返回值把它交出去
        return customRef((track,trigger) => {  //通过customRef函数去实现自定义，接受两个参数，track用来追踪，trigger用来重新解析模板
          let timer
            return {
              get() {  //读取时找get
                console.log('有人读取value了')
                track()  //告诉Vue这个value值需要被追踪
                return value
              },
              set(newValue) { //修改时找set
                clearTimeout(timer)  //实现防抖
                console.log(`有人修改keyWord了，改为了${newValue}`)
                timer = setTimeout(() => {
                  value = newValue
                  trigger() //告诉vue去更新界面
                },delay)
              }
            }
        })
      }
      let keyWord = myref('hello',500)
      return {
        keyWord
    }
    },   
}
</script>

<template>
    <h1>当前计数的值为{{sum}}</h1>
    <button @click="sum++">点我count+1</button>
    <hr>
    <h1>X的值{{point.x}}</h1>
    <h1>Y的值{{point.y}}</h1>
</template>
<script>
    import {ref} from 'vue' //传入watch组合式API
    import usePoint from '../hooks/usePoint'
export default {
    name:'Demo',
   setup(){
    let sum = ref(0)
    //实现鼠标打点相关的数据
    let point = usePoint()
    return {
      sum,
      point
    }
   },
}
</script>
<template>
    <h1>当前计数的值为{{sum}}</h1>
    <button @click="sum++">点我count+1</button>
</template>
<script>
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'  //传入watch组合式API
export default {
    name:'Demo',
   setup(){
    let sum = ref(0)
    //通过组合式API来写生命周期钩子
    onBeforeMount(() => {console.log('--------------onBeforeMount')})
    onMounted(() => {console.log('--------------onMounted')})
    onBeforeUpdate(() => {console.log('--------------onBeforeUpdate')})
    onUpdated(() => {console.log('--------------onUpdated')})
    onBeforeUnmount(() => {console.log('--------------onBeforeUnmount')})
    onUnmounted(() => {console.log('--------------onUnmounted')})
    return {
      sum,
    }
   },
   //通过配置项来写生命周期周期钩子
   beforeCreate(){console.log('----beforeCreate')},
   created() {console.log('----created')},
   beforeMount() {console.log('----beforeMount')},
   mounted() {console.log('----mounted')},
   beforeUpdate() {console.log('----beforeUpdate')},
   updated() { console.log('----updated')},
   beforeUnmount() {console.log('----beforeUnmount')},
   unmounted() {console.log('----unmounted')},
}
</script>
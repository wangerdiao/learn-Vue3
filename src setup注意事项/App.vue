<template>
  <!-- 模板里面会自动解析引用对象的value，即name.value -->
  <Demo msg="信息" showName="刘凯酱" @hello="showTest">
    <template v-slot:chazao>
      <span>
          刘凯
      </span>
    </template>
  </Demo>
</template>
<script>
import Demo from './components/Demo.vue';  
export default {
    name: "App",
    components: { Demo },
    setup(){
      function showTest(value){
        alert('我是hello自定义事件',value)
      }
      return {
        showTest
      }
    }
}
</script>

<template>
  <!-- 模板里面会自动解析引用对象的value，即name.value -->
  <button @click="isShow = !isShow">切换显示/隐藏</button>
  <Demo v-if="isShow"> </Demo>
</template>
<script>
import Demo from './components/Demo.vue';  
import {ref} from 'vue'
export default {
    name: "App",
    components: { Demo },
    setup() {
      let isShow = ref(true)
      return {
      isShow
    }
    },   
}
</script>

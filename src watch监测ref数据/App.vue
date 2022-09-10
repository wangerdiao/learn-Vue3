<template>
  <!-- 模板里面会自动解析引用对象的value，即name.value -->
  <Demo> </Demo>
</template>
<script>
import Demo from './components/Demo.vue';  
export default {
    name: "App",
    components: { Demo },
}
</script>

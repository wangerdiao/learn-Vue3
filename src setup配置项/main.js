//引入的不再是Vue构造函数，引入的是名为createApp的工厂函数
import { createApp } from 'vue'
//创建应用实例对象---app（类似于之前Vue2中的vm，但app比vm更“轻”)
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
// createApp(App).mount('#app')

//Vue2创建vm实例对象
// const vm = new Vue({
//     render: h => h(App)
// }).$mount('#app')

//实现鼠标点击页面显示坐标 的代码复用
import {ref,onMounted,onBeforeUnmount,reactive} from 'vue' 
export default function() {
    let point = reactive({
        x:0,
        y:0
      })
      //实现鼠标打点相关的方法
      function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
      }
      //实现鼠标打点相关的生命周期钩子
      onMounted(() => {
        window.addEventListener('click',savePoint)
      })
      onBeforeUnmount (() => {
          window.removeEventListener('click',savePoint)
      })
      return point
}
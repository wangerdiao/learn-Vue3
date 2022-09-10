<template>
  <h1>一个人的信息</h1>
  姓 <input type="text" v-model="person.firstName"> <br>
  名 <input type="text" v-model="person.lastName"> <br>
  全名 <input type="text" v-model="person.fullName">
</template>
<script>
    import {ref,reactive,computed} from 'vue'  //引入vue3中的计算属性
export default {
    name:'Demo',
   setup(){
    let person = reactive({
      firstName :'张',
      lastName:'凯',
    })
    //Vue3的计算属性简写形式,没有考虑计算属性被修改的情况
    // person.fullName = computed(() => {
    //     return person.firstName +'-' + person.lastName
    // })
    //Vue3的计算属性完整形式,考虑计算属性被修改的情况
    person.fullName = computed({
      get() {
        return person.firstName +'-' + person.lastName
      },
      set(value) {
        const personArr = value.split('-')
        person.firstName = personArr[0]
        person.lastName = personArr[1]
      }
    })
    return {
      person
    }
   }
}
</script>
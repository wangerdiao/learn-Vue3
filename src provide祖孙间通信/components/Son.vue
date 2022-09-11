    <template>
        <div class="son">
        <h1>我是son组件（后代） {{car.name}}--{{car.price}}</h1>
        </div>
    </template>
    
    <script>
        import { inject } from 'vue';
    export default {
        name:'Son',
        setup() {
            let car = inject('car')  //接受祖先组件传来的数据car
            return {car}
        }
    }
    </script>
    
    <style>
        .son {
        background-color: orange;
        padding: 10px;
        }
    </style>
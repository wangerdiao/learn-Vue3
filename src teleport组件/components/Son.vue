    <template>
        <div class="son">
        <h1>我是son组件</h1>
        <Dialog></Dialog>
        </div>
    </template>
    
    <script>
        import Dialog from './Dialog.vue'
    export default {
        name:'Son',
        components:{Dialog}
    }
    </script>
    
    <style>
        .son {
        background-color: orange;
        padding: 10px;
        }
    </style>
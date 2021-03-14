import { createApp } from 'vue'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(ant).mount('#app')

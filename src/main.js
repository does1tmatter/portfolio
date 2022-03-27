import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'

const app = createApp(App)

app.use(router)

app.use(Vuesax, {
  colors: {
    primary:'#5b3cc4',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'#0E1116'
  }
})

app.mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

const app = createApp(App);
// const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
// app.use(cors(corsOptions));
app.use(router);
app.use(store);
app.mount('#app');

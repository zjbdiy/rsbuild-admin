import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import naive from 'naive-ui';
import 'vfonts/Lato.css';
import router from './router';
const app = createApp(App);

app.use(naive);
app.use(router);

app.mount('#root');

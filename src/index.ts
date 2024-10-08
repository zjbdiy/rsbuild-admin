import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import naive from 'naive-ui';
import 'vfonts/Lato.css';
import router from './router';
import pinia from './pinia';
const app = createApp(App);

app.use(naive);
app.use(router);
app.use(pinia);

app.mount('#root');

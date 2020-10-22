import { createApp } from 'vue';

import App from './App.vue';
import Silly from '../src/entry.esm';
import router from './router';

createApp(App).use(router).use(Silly).mount('#app');

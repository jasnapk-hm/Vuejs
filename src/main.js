import { createApp } from 'vue';
import App from './App.vue';
import store from './Store/Stores'; // Ensure path is correct

const app = createApp(App);
app.use(store);
app.mount('#app');

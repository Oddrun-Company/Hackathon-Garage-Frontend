import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import axios from 'axios';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(router).mount("#app");
// Vue.prototype.$http = axios;
axios.options.root = 'https://garage.oddrun.ir/api';
// Vue.prototype.$http.options.root = 'http://example.com/api';
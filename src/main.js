import { createApp } from "mini-zvm";
import App from "./app.vue";
console.log(App);
const app = createApp(App);
console.log(app);
app.mount("#app");

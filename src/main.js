import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// Import CSS
import "./index.scss";
import "./assets/main.css";

// Import JS
import fontawesome from "./scripts/fontawesome";

const app = createApp(App);

app.use(router);
app.use(store);

app.component(fontawesome.fontIcon, fontawesome.FontAwesomeIcon);

app.mount("#app");

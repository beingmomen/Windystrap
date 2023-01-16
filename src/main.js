import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// Import CSS
import "./index.scss";
import "./assets/main.css";
import "./assets/index.scss";

// Import JS
import fontawesome from "./plugins/fontawesome";
import i18n from "./plugins/i18n";
import { Toast, options } from "./plugins/toast";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(Toast, options);

app.component(fontawesome.fontIcon, fontawesome.FontAwesomeIcon);

app.mount("#app");

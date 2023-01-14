import { createStore } from "vuex";

import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

// Import Modules
import register from "./modules/auth/register/index";
import login from "./modules/auth/login/index";
import categories from "./modules/categories/index";

const store = createStore({
  modules: {
    categories,
    register,
    login,
  },
  state() {
    return {
      name: "Abdelmomen",
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;

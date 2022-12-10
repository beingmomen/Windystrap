import { createStore } from "vuex";

import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

// Import Modules
import categories from "./modules/categories/index";

const store = createStore({
  modules: {
    categories,
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

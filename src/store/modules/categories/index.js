import mutations from "./methods/mutations";
import actions from "./methods/actions";
import getters from "./methods/getters";

export default {
  namespaced: true,
  state() {
    return {
      age: "26",
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};

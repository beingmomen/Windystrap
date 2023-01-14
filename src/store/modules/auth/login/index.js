import mutations from "./methods/mutations";
import actions from "./methods/actions";
import getters from "./methods/getters";

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      userId: null,
      tokenExpiration: null,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};

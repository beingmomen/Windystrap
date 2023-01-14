import axios from "axios";
import router from "@/router/index";

export default {
  async login({ commit }, payload) {
    try {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8nfZnagAlsna5aVkylZ4C0AFQ6wNlJ2Y";
      const { data, status } = await axios.post(url, payload);
      if (status === 200) {
        localStorage.setItem("windy_strap-token", data.idToken);
        localStorage.setItem("windy_strap-userId", data.localId);
        localStorage.setItem("windy_strap-tokenExpiration", data.expiresIn);

        commit("setUser", {
          userId: data.localId,
          token: data.idToken,
          tokenExpiration: data.expiresIn,
        });
        router.push("/");
      }
    } catch (error) {
      console.warn("error", error);
    }
  },
  autoLogin({ commit }) {
    const token = localStorage.getItem("windy_strap-token");
    const userId = localStorage.getItem("windy_strap-userId");
    const tokenExpiration = localStorage.getItem("windy_strap-tokenExpiration");
    commit("setUser", { userId, token, tokenExpiration });
  },
  logout({ commit }) {
    localStorage.removeItem("windy_strap-token", null);
    localStorage.removeItem("windy_strap-userId", null);
    localStorage.removeItem("windy_strap-tokenExpiration", null);
    commit("setUser", { userId: null, token: null, tokenExpiration: null });
    router.push("/auth/login");
  },
};

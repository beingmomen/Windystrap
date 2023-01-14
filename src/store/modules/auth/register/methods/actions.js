import axios from "axios";
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  async createUser({ commit }, payload) {
    try {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8nfZnagAlsna5aVkylZ4C0AFQ6wNlJ2Y";
      const { data, status } = await axios.post(url, payload);

      console.warn("status", status);

      if (status === 200) {
        // toast.success("Successfully registered");
        // console.warn("data", data);
        commit("setUser", data);
      }
    } catch ({ response }) {
      console.warn("error", response.status);
    }
  },
};

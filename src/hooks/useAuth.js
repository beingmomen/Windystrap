import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();

  const autoLogin = () => {
    store.dispatch("login/autoLogin");
  };

  return { autoLogin };
};

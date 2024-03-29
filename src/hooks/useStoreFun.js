import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();

  const dispatchAction = (module, data) => {
    store.dispatch(module, data);
  };

  return { dispatchAction };
};

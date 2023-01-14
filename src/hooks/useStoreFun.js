import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();

  const name1 = ref("");
  const age1 = ref("");

  const name = computed(() => store.getters.name);
  const age = computed(() => store.getters["categories/age"]);

  const dispatchAction = (module, data) => {
    store.dispatch(module, data);
  };

  return { dispatchAction };
};

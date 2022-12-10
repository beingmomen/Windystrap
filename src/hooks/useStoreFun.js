import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();

  const name1 = ref("");
  const age1 = ref("");

  const name = computed(() => store.getters.name);
  const age = computed(() => store.getters["categories/age"]);

  const changeName = () => {
    store.dispatch("name", name1.value);
  };

  const changeAge = () => {
    store.dispatch("categories/age", age1.value);
  };

  return { name1, age1, name, age, changeName, changeAge };
};

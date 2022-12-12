<template>
  <span></span>
  <!-- <button class="btn" @click="change">Button</button>
  <p>{{ good }}</p> -->
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const good = ref(true);

const change = () => {
  good.value = !good.value;
};

watch(good, function (newValue, oldValue) {
  console.warn("newValue", newValue);
  console.warn("oldValue", oldValue);
});

// onMounted(() => {
//   setInterval(() => {
//     console.warn("good", good.value);
//   }, 2000);
// });
</script>

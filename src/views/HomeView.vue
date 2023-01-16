<template>
  {{ $t("welcome") }}

  <button class="btn" @click="click">click</button>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const click = () => {
  toast.success("good");
};

onMounted(() => {});
</script>

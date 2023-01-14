<template>
  <component :is="$route.meta.layout"></component>
</template>

<script setup>
import useAuth from "./hooks/useAuth";
const { autoLogin } = useAuth();
autoLogin();
</script>

<style scoped>
</style>

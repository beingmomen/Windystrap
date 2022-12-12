<template>
  <div
    class="flex flex-row"
    :class="fullSidebar ? 'static-sidebar' : 'overlay-sidebar'"
  >
    <div class="overlay" @click="toggleFullSidebar"></div>
    <Sidebar
      class="mr-[15px]"
      :class="fullSidebar ? 'full-sidebar' : 'small-sidebar'"
      :fullSidebar="fullSidebar"
    />
    <div class="content w-full shadow-layout rounded-box">
      <Navbar
        class="rounded-box shadow-[rgba(99,99,99,0.2)_0px_0px_12px_0px]"
        @toggleFullSidebar="toggleFullSidebar"
      />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import useToggleSidebar from "../hooks/useToggleSidebar.js";

// Imports Components
import Sidebar from "../components/settings/TheSidebar.vue";
import Navbar from "../components/settings/TheNavbar.vue";

const { fullSidebar, toggleFullSidebar } = useToggleSidebar();
</script>

<style lang="scss" scoped>
@import url("../assets/settings/sidebar.scss");
</style>
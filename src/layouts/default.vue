<template>
  <div
    class="flex-row block md:flex"
    :class="fullSidebarMobile ? 'overlay-sidebar' : 'static-sidebar'"
  >
    <div class="overlay z-40" @click="toggleFullSidebar"></div>
    <transition name="fade" mode="out-in">
      <component :is="fullSidebar ? FullSidebar : SmallSidebar"></component>
    </transition>
    <div class="content w-full shadow-layout rounded-box">
      <Navbar
        class="rounded-box z-30 shadow-[rgba(99,99,99,0.2)_0px_0px_12px_0px]"
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
import FullSidebar from "../components/settings/TheFullSidebar.vue";
import SmallSidebar from "../components/settings/TheSmallSidebar.vue";
import Navbar from "../components/settings/TheNavbar.vue";

const { fullSidebar, fullSidebarMobile, toggleFullSidebar } =
  useToggleSidebar();
</script>

<style lang="scss" scoped>
@import url("../assets/settings/sidebar.scss");
</style>
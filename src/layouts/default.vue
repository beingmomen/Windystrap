<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div
      class="
        drawer-content
        flex flex-col
        items-center
        justify-start
        shadow-layout
        lg:mx-2
        mx-0
      "
    >
      <Navbar
        class="rounded-box z-30 shadow-[rgba(99,99,99,0.2)_0px_0px_12px_0px]"
      >
        <template #menu>
          <fa-icon
            :icon="['fas', 'bars']"
            class="fa-xl hidden lg:inline-block"
            @click="toggleFullSidebar"
          />
          <label for="my-drawer-2" class="drawer-button lg:hidden">
            <fa-icon :icon="['fas', 'bars']" class="fa-xl" />
          </label>
        </template>
      </Navbar>
      <router-view></router-view>
    </div>
    <div class="drawer-side shadow-layout">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <transition name="fade" mode="out-in">
        <component :is="fullSidebar ? FullSidebar : SmallSidebar"></component>
      </transition>
    </div>
  </div>
</template>

<script setup>
import useToggleSidebar from "../hooks/useToggleSidebar.js";

// Imports Components
import FullSidebar from "../components/settings/TheFullSidebar.vue";
import SmallSidebar from "../components/settings/TheSmallSidebar.vue";
import Navbar from "../components/settings/TheNavbar.vue";

const { fullSidebar, toggleFullSidebar } = useToggleSidebar();
</script>

<style lang="scss" scoped>
</style>
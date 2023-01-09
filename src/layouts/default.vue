<template>
  <!-- <div
    class="flex-row block md:flex"
    :class="fullSidebarMobile ? 'overlay-sidebar' : 'static-sidebar'"
  >
    <div
      class="overlay-container overlay z-40"
      @click="toggleFullSidebar"
    ></div>
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
  </div> -->
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div
      class="
        drawer-content
        flex flex-col
        items-center
        justify-start
        shadow-layout
        mx-2
      "
    >
      <Navbar
        class="rounded-box z-30 shadow-[rgba(99,99,99,0.2)_0px_0px_12px_0px]"
      >
        <template #menu>
          <label for="my-drawer-2" class="drawer-button lg:hidden">
            <fa-icon :icon="['fas', 'bars']" class="fa-xl" />
          </label>
        </template>
      </Navbar>
      <router-view></router-view>
    </div>
    <div class="drawer-side shadow-layout">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
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
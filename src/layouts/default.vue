<template>
  <div class="flex flex-row">
    <Sidebar
      class="
        sx:hidden
        sm:flex sm:basis-no-sidebar
        lg:basis-full-sidebar
        mr-[15px]
      "
    />
    <div class="content w-full shadow-layout rounded-box">
      <Navbar
        class="rounded-box shadow-[rgba(99,99,99,0.2)_0px_0px_12px_0px]"
      />
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Sidebar from "../components/settings/TheSidebar.vue";
import Navbar from "../components/settings/TheNavbar.vue";
</script>

<style lang="scss" scoped>
</style>
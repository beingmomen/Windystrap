<template>
  <ul
    class="
      menu
      shadow-layout
      h-screen
      bg-base-100
      p-2
      rounded-box
      mr-[15px]
      fixed
      md:static
      z-40
      full-sidebar
    "
  >
    <li class="logo mb-2">
      <router-link to="" class="btn btn-ghost normal-case text-xl">
        daisyUI
      </router-link>
    </li>
    <li>
      <a class="" :class="fullSidebar ? '' : ''">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 min-w-[2rem]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span class=""> Item 2 </span>
        <!-- <span class="sx:hidden lg:inline whitespace-nowrap"> Item 2 </span> -->
      </a>
    </li>
    <li>
      <a :class="fullSidebar ? '' : ''">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 min-w-[2rem]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class=""> Item 1 </span>
      </a>
    </li>
    <li>
      <!-- <a :class="fullSidebar ? 'lg:justify-start' : 'sx:justify-center'"> -->
      <a :class="fullSidebar ? '' : ''">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 min-w-[2rem]"
          fill="none"
          viewBox="0 0 30 30"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <span class=""> Item Item Item 3 </span>
      </a>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  fullSidebar: Boolean,
});
</script>

<style lang="scss" scoped>
@import url("../../assets/settings/sidebar.scss");
</style>
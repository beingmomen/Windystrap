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
      lg:w-[345px]
    "
  >
    <li class="logo mb-2 mx-[5.500px]">
      <a class="text-xl font-bold hover:bg-inherit p-0">
        <div class="w-12">
          <img src="@/assets/images/touch.png" />
        </div>
        <span> Windy Strap </span>
      </a>
    </li>
    <li>
      <a>
        <fa-icon :icon="['fas', 'home']" class="fa-xl" />
        <span class=""> Item 2 </span>
      </a>
    </li>
    <li>
      <a>
        <fa-icon :icon="['fas', 'circle-info']" class="fa-xl" />
        <span class=""> Item 1 </span>
      </a>
    </li>
    <li>
      <a>
        <fa-icon :icon="['fas', 'chart-simple']" class="fa-xl" />
        <span class=""> Item Item Item 3 </span>
      </a>
    </li>
  </ul>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import url("../../assets/settings/sidebar.scss");
</style>
<template>
  <ul
    class="
      menu
      h-screen
      bg-base-100
      p-2
      rounded-box
      fixed
      md:static
      hidden
      md:flex
    "
  >
    <li class="logo mb-2 mx-auto">
      <a class="w-12 p-0 hover:bg-inherit">
        <img src="@/assets/images/touch.png" />
      </a>
    </li>
    <li>
      <a>
        <fa-icon :icon="['fas', 'home']" class="fa-xl" />
      </a>
    </li>
    <li>
      <a>
        <fa-icon :icon="['fas', 'circle-info']" class="fa-xl" />
      </a>
    </li>
    <li>
      <a>
        <fa-icon :icon="['fas', 'chart-simple']" class="fa-xl" />
      </a>
    </li>
  </ul>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
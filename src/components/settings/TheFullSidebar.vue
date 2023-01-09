<template>
  <ul
    class="
      menu
      h-screen
      bg-base-100
      rounded-box
      fixed
      md:static
      p-2
      w-80
      text-base-content
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
</style>
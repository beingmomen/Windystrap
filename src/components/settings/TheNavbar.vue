<template>
  <div class="navbar bg-base-100 mx-auto mt-2 w-[98%]">
    <div class="flex-1">
      <div class="flex-none">
        <slot name="menu" />
      </div>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost m-1">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>
          Themes

          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </label>

        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
        >
          <li
            class="
              mb-1
              cursor-pointer
              rounded-md
              border
              flex flex-row
              justify-between
            "
            data-theme="light"
            @click="setTheme('light')"
          >
            <a class="hover:bg-inherit">Light</a>
            <div class="avatar-group hover:bg-inherit p-0 -space-x-6">
              <div class="avatar border-3">
                <div class="w-4 bg-primary"></div>
              </div>
              <div class="avatar border-3">
                <div class="w-4 bg-secondary"></div>
              </div>
              <div class="avatar border-3">
                <div class="w-4 bg-success"></div>
              </div>
              <div class="avatar border-3">
                <div class="w-4 bg-error"></div>
              </div>
            </div>
          </li>
          <li
            class="
              mb-1
              cursor-pointer
              rounded-md
              border
              flex flex-row
              justify-between
            "
            data-theme="dark"
            @click="setTheme('dark')"
          >
            <a class="hover:bg-inherit">Dark</a>
            <div class="avatar-group hover:bg-inherit p-0 -space-x-6">
              <div class="avatar">
                <div class="w-4 bg-primary"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-secondary"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-success"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-error"></div>
              </div>
            </div>
          </li>
          <li
            class="
              mb-1
              cursor-pointer
              rounded-md
              border
              flex flex-row
              justify-between
            "
            data-theme="night"
            @click="setTheme('night')"
          >
            <a class="hover:bg-inherit">Night</a>
            <div class="avatar-group hover:bg-inherit p-0 -space-x-6">
              <div class="avatar">
                <div class="w-4 bg-primary"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-secondary"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-success"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-error"></div>
              </div>
            </div>
          </li>
          <li
            class="
              mb-1
              cursor-pointer
              rounded-md
              border
              flex flex-row
              justify-between
            "
            data-theme="halloween"
            @click="setTheme('halloween')"
          >
            <a class="hover:bg-inherit">Halloween</a>
            <div class="avatar-group hover:bg-inherit p-0 -space-x-6">
              <div class="avatar">
                <div class="w-4 bg-primary"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-secondary"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-success"></div>
              </div>
              <div class="avatar">
                <div class="w-4 bg-error"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="
            mt-3
            p-2
            shadow
            menu menu-compact
            dropdown-content
            bg-base-100
            rounded-box
            w-52
          "
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import useThemes from "../../hooks/useThemes.js";

const { setTheme } = useThemes();
</script>

<style lang="scss" scoped>
</style>
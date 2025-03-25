<template>
  <div class="sm:rounded-3xl rounded-[10px] shadow sm:p-6 p-3 bg-white sm:max-w-[233px] max-w-[149px] w-full flex sm:gap-3 gap-2 items-center" :class="$attrs.class">
    <div :class="iconWrapper">
      <i :class="[icon, iconClass]"></i>
    </div>
    <p class="text-xs sm:text-base leading-[13.20px] sm:leading-[17.60px] sm:font-semibold" :class="[textClass]">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  iconClass?: string
  iconWrapper?: string
  text: string
  textClass?: string
}>()
</script>

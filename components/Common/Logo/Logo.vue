<template>
  <NuxtLink to="/" aria-label="home">
    <NuxtImg
      loading="lazy"
      :src="logo ?? '/logoWhite.webp'"
      alt="logo"
      class="w-[168px] h-full"
    />
  </NuxtLink>
</template>
<script setup lang="ts">
interface Props {
  logo?: string
}
defineProps<Props>()
</script>

<template>
  <div
    class="bg-gray-200 p-6 rounded-3xl xl:h-[672px] lg:h-[600px] md:h-[500px] sm:h-[300px] h-[205px] overflow-hidden gap-x-6 flex md:flex-col justify-between pb-0"
  >
    <div class="flex-1">
      <h2 class="text-black text-base sm:text-xl font-semibold">{{ title }}</h2>
      <p class="sm:text-base text-xs text-gray mt-3 mb-5 line-clamp-4">
        {{ subtitle }}
      </p>
    </div>
    <div
      class="flex-none mt-auto max-w-[120px] sm:max-w-[180px] md:max-w-full w-full"
    >
      <img :src="img" alt="iphone" class="shadows w-full" loading="lazy" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  subtitle: string
  img: string
}>()
</script>

<style>
.shadows {
  filter: drop-shadow(-10px 0px 11px #000000);
}
</style>

<template>
  <div
    class="bg-gradient-to-tr from-[#ffffff10] to-[#ffffff02] backdrop-blur-xl border-solid border border-[#ffffff20] rounded-2xl px-4 py-6 md:pb-9 relative md:pt-10 md:px-8"
  >
    <div
      class="bg-yellow sm:size-[86px] size-[68px] rounded-full sm:p-[25px] p-[18px] absolute right-6 sm:left-1/2 transform sm:-translate-x-1/2 -top-10 sm:-top-16"
    >
      <i :class="[icon]" class="sm:text-[35px] text-[30px]"></i>
      <NuxtImg
        :src="icon"
        alt="icon"
        loading="lazy"
        class="size-[30px] sm:size-[35px]"
      />
    </div>
    <h3
      class="sm:text-center text-white text-base sm:text-2xl font-normal capitalize sm:leading-[31.20px] line-clamp-1 leading-tight"
    >
      {{ title }}
    </h3>
    <p
      class="opacity-60 sm:text-center text-white text-xs sm:text-[15px] font-normal capitalize leading-tight mt-2 line-clamp-3"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  title: string
  subtitle: string
}>()
</script>

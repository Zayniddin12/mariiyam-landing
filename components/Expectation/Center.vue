<template>
  <div
    class="bg-gray-200 rounded-b-3xl -mt-1 sm:mt-0 sm:rounded-3xl pb-6 sm:py-[55px] min-[500px]:px-[72px] px-8 sm:px-[24px] md:px-[52px] lg:px-[24px] xl:px-[52px]"
  >
    <NuxtImg
      :src="`/images/features/iPhone-${locale + '.png'}`"
      alt="iphonewhite"
      loading="lazy"
      class="shadows xl:max-h-[563px] md:max-h-full w-full"
    />
  </div>
</template>
<script setup>
const { locale } = useI18n()
</script>
<style>
.shadows {
  filter: drop-shadow(-10px 0px 11px #000000);
}
</style>

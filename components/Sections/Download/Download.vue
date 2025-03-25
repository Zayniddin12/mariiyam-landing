<template>
  <div class="container min:pt-[247px] min-[900px]:pt-[180px] md:pt-[120px]">
    <div
      class="bg-blue container relative mb-[60px] !overflow-visible rounded-[16px]"
    >
      <section
        class="relative flex gap-x-10 items-center max-md:flex-col lg:pl-[64px] lg:pr-[84px] md:py-[78px]"
      >
        <div class="md:w-1/2 w-full max-md:mt-10" data-aos="fade-right">
          <h2 class="text-white md:text-40 sm:text-3xl text-2xl">
            {{ $t('app_download') }}
          </h2>
          <div
            class="text-white opacity-70 sm:text-[20px] text-sm font-normal leading-140 sm:mt-5 md:mb-8 mb-6"
          >
            {{ $t('download_app_desc') }}
          </div>

          <CommonDownload />
        </div>

        <div
          class="md:w-1/2 w-full flex max-md:mt-16 relative"
          data-aos="fade-left"
        >
          <NuxtImg
            :src="`/images/download/group-${locale + '.webp'}`"
            alt="iphonewhite"
            loading="lazy"
            class="md:absolute min-[1110px]:-bottom-[208px] -bottom-[235px]"
          />
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
const { locale } = useI18n()
</script>

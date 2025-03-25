<template>
  <div
    class="bg-gray-600 md:pt-[60px] pt-10 mt-10 lg:mb-20 md:mb-5 pb-[64px] lg:pb-[244px] !overflow-visible mb-10"
  >
    <div class="container relative">
      <div class="max-w-[811px] w-full" data-aos="zoom-out-down">
        <h3
          class="text-black text-2xl md:text-[56px] font-semibold leading-[28.80px] md:leading-[56px]"
        >
          {{ $t('statistics.title') }}
        </h3>
        <p class="max-w-[654px] w-full text-gray text-sm md:text-xl mt-2">
          {{ $t('statistics.subtitle') }}
        </p>
      </div>
      <div
        v-if="isLoading"
        class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-6 mt-10 lg:mt-0 lg:absolute left-4 right-4 -bottom-[314px]"
      >
        <CardStatisticsLoading v-for="i in statistics" :key="i" />
      </div>
      <div
        v-if="!isLoading"
        class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-6 mt-10 lg:mt-0 lg:absolute left-4 right-4 -bottom-[314px]"
      >
        <CardStatistics
          v-for="(stat, index) in statistics"
          :key="index"
          :description="stat.description"
          :title="stat.title"
          data-aos="zoom-out-up"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const statistics = ref()
const isLoading = ref(true)
const getNews = async () => {
  await useApi()
    .$get('landing/project-statistic')
    .then((res) => {
      statistics.value = res.results
    })
    .finally(() => {
      isLoading.value = false
    })
}
getNews()
</script>

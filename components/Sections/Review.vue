<template>
  <ClientOnly class="mt-10 md:mt-16">
    <div class="container mt-20 md:mt-32">
      <h3
        class="text-black-100 sm:text-4xl text-2xl font-semibold leading-130 mb-1.5"
      >
        {{ $t('review_title') }}
      </h3>
      <i18n-t
        class="flex gap-1 flex-wrap text-base font-normal leading-130 text-gray-300"
        keypath="review_subtitle"
        scope="global"
        tag="p"
      >
        <template #sharh>
          <a href="https://sharh.commeta.uz/" target="_blank">
            <NuxtImg
              alt="sharh"
              class="grayscale hover:grayscale-0"
              src="/images/sharhBlue.svg"
              loading="lazy"
            />
          </a>
        </template>
      </i18n-t>
    </div>
    <div class="bg-gradient-to-t from-[#EFF1EF] to-transparent mt-6">
      <div class="space-y-7 overflow-hidden">
        <div class="space-y-3 md:space-y-6 pb-10 md:pb-14">
          <NuxtMarquee :auto-fill="true" :pause-on-hover="true" :speed="60">
            <div class="flex-y-center justify-center space-x-4 gap-4 mr-8">
              <CommonCardSharhLoading v-if="isLoading" />
              <div
                v-for="(item, key) in feedbacks"
                v-else
                :key
                class="space-x-1 !w-fit h-full"
              >
                <CommonCardSharh :item />
              </div>
            </div>
          </NuxtMarquee>

          <NuxtMarquee
            :auto-fill="true"
            :pause-on-hover="true"
            :speed="60"
            direction="right"
          >
            <div class="flex-y-center justify-center space-x-4 gap-4 mr-8">
              <CommonCardSharhLoading v-if="isLoading" />
              <div
                v-for="(item, keyUp) in feedbacks"
                v-else
                :key="keyUp"
                class="space-x-1 !w-fit h-full"
              >
                <CommonCardSharh :item />
              </div>
            </div>
          </NuxtMarquee>
          <!--          <div class="md:hidden flex-x-center px-4 !mt-4">-->
          <!--            <MainCardSharh />-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const feedbacks = ref(null)
const isLoading = ref(true)
const fetchSocial = async () => {
  await useApi()
    .$get('landing/feedback/')
    .then((res) => {
      feedbacks.value = res.results
    })
    .catch(() => {})
    .finally(() => {
      isLoading.value = false
    })
}
fetchSocial()
</script>

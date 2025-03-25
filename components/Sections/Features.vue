<template>
  <div class="sm:pt-[98px] pt-10">
    <div
      class="bg-[url('/images/features/Features.webp')] sm:bg-[url('/images/features/Mobile.webp')] bg-no-repeat bg-center xl:bg-bottom bg-cover py-[60px]"
    >
      <div class="container">
        <h2
          class="sm:text-center text-white text-2xl sm:text-[44px] font-semibold leading-[28.80px] sm:leading-[70.40px]"
          data-aos="fade-down"
        >
          {{ $t('features') }}
        </h2>

        <Transition mode="in-out">
          <div :key="isLoading">
            <div
              v-if="isLoading"
              class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-[70px] sm:gap-y-[100px] mt-[70px] sm:mt-[100px]"
            >
              <CardFeaturesLoading v-for="i in features" :key="i" />
            </div>
            <div
              v-if="!isLoading"
              class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-[70px] sm:gap-y-[100px] mt-[70px] sm:mt-[100px]"
            >
              <CardFeatures
                v-for="(feature, index) in features"
                :key="index"
                :icon="feature.icon"
                :subtitle="feature.description"
                :title="feature.title"
                data-aos="fade-up"
              />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true)
const features = ref([])

const getLetter = async () => {
  isLoading.value = true
  try {
    const res = await useApi().$get('landing/main-advantages/')
    features.value = res.results
    isLoading.value = true
  } finally {
    isLoading.value = false
  }
}

getLetter()
</script>

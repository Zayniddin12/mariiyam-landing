<template>
  <div class="container !pt-16 md:!pt-[120px]">
    <div
      v-if="cards.length"
      class="text-black-100 md:text-[40px] font-bold md:mb-5 mb-3 text-2xl"
      loading="lazy"
    >
      {{ $t('nav.about') }}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Column 1 -->
      <div class="flex flex-col gap-6" data-aos="fade-up">
        <CardHeroLoading v-if="isLoading" />
        <CardHero
          v-if="cards[0] && !isLoading"
          :subtitle="cards[0].description"
          :title="cards[0].title"
          data-aos="fade-up"
        />
        <CardHeroLoadingSecond v-if="isLoading" />
        <CardHeroSecond
          v-if="cards[1] && !isLoading"
          :img="cards[1]?.photo"
          :subtitle="cards[1]?.description"
          :title="cards[1]?.title"
          data-aos="fade-up"
        />
      </div>

      <!-- Column 2 -->
      <div class="flex flex-col-reverse md:flex-col gap-6" data-aos="fade-down">
        <CardHeroLoadingSecond v-if="isLoading" />
        <CardHeroSecond
          v-if="cards[2] && !isLoading"
          :subtitle="cards[2].description"
          :title="cards[2].title"
          data-aos="fade-up"
          :img="cards[1]?.photo"
        />
        <CardHero
          v-if="cards[3] && !isLoading"
          :subtitle="cards[3].description"
          :title="cards[3].title"
          data-aos="fade-up"
        />
        <CardHeroLoading v-if="isLoading" />
      </div>

      <!-- Column 3 -->
      <div class="flex flex-col gap-6" data-aos="fade-up">
        <CardHeroLoading v-if="isLoading" />
        <CardHero
          v-if="cards[5] && !isLoading"
          :subtitle="cards[5].description"
          :title="cards[5].title"
          data-aos="fade-up"
        />
        <CardHeroLoadingSecond v-if="isLoading" />
        <CardHeroSecond
          v-if="cards[4] && !isLoading"
          :img="cards[4]?.photo"
          :subtitle="cards[4].description"
          :title="cards[4].title"
          data-aos="fade-up"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref(true)
const cards = ref([])

const getLetter = async () => {
  isLoading.value = true
  try {
    const res = await useApi().$get('landing/about-project/')
    cards.value = res.results
  } finally {
    isLoading.value = false
  }
}

getLetter()

const { locale } = useI18n()
</script>

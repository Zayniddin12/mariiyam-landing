<template>
  <div class="bg-white-200 !py-7 md:!py-16 container">
    <h1
      class="mb-6 text-xl sm:text-2xl md:text-40 leading-130 font-medium text-black-100"
    >
      {{ $t('faq') }}
    </h1>
    <LazySectionsFaqSingle
      v-if="!loading"
      :faq="faqs"
      class="container max-w-[782px]"
    />
    <SectionsFaqLoading v-else />
  </div>
</template>
<script lang="ts" setup>
const faqs = ref([])
const loading = ref(true)
const getFaqs = async () => {
  await useApi()
    .$get('landing/FAQ/')
    .then((res) => {
      faqs.value = res.results
      loading.value = false
    })
    .finally(() => {
      loading.value = false
    })
}
getFaqs()
</script>

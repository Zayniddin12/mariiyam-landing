<template>
  <div
    class="container flex max-[900px]:flex-col justify-between max-[900px]:gap-6 max-[1028px]:gap-4 sm:!py-[60px] !py-10"
  >
    <SectionsLetterAbout
      :data="letter"
      :loading="loading"
      data-aos="fade-right"
    />
    <div data-aos="fade-left">
      <SectionsLetterImage
        :data="letter"
        :loading="loading"
        class="min-[901px]:w-[486px] w-full max-h-[668px] max-sm-[342px]"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const letter = ref([])
const loading = ref(true)
const getLetter = async () => {
  await useApi()
    .$get('landing/author/')
    .then((res) => {
      letter.value = res.results
      loading.value = false
    })
    .catch((err) => {
      loading.value = false
    })
    .finally(() => {
      loading.value = false
    })
}
getLetter()
</script>

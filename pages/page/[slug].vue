<template>
  <section class="container min-h-screen">
    <div
      class="mb-[60px] bg-white pt-6 pl-6 pr-[22px] pb-[74px] rounded-[20px] w-full shadow-offer"
    >
      <div class="description" v-html="data?.text" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { richTextPurify } from '~/utils/common'

const { t } = useI18n()

const { data, error } = await useAsyncData('ommaviy-oferta', () =>
  useApi().$get(`common/StaticPage/${useRoute().params.slug}`)
)
if (error.value) showError({ status: 404 })

useSeoMeta({
  title: data.value?.title ?? 'Ommaviy Oferta',
  ogTitle: data.value?.title ?? 'Default Title',
  ogImage: data.value?.image ?? '/favicon.webp',
  description: richTextPurify(data.value?.text ?? 'Default Description'),
  ogDescription: richTextPurify(
    data.value?.description ?? 'Default Description'
  ),
})
</script>
<style>
.description {
  color: #131612;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
}

.description p {
  @apply !mb-4;
}

.description {
  color: #131612;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  width: 100% !important;
}

.description .MsoTableGrid {
  width: 100% !important;
}

.description p {
  @apply !mb-4;
}

.description {
  border-radius: 24px;
  border: 2px solid #caa244;
  padding: 40px;
}
</style>

<template>
  <div
    class="border-2 border-yellow rounded-3xl min-[901px]:w-[486px] sm:w-[400px] max-sm:max-w-[486px] max-sm:w-full w-full max-h-[668px] bg-gray-100 shadow-md relative pb-[52px] pt-[18px]"
  >
    <NuxtImg
      alt="auth picture"
      class="object-contain min-[901px]:w-[486px] sm:w-[400px] max-sm:max-w-[486px] max-sm:w-full w-full max-h-[668px] relative"
      src="/images/about/maryam.webp"
      loading="lazy"
    />
  </div>
  <div class="flex md:hidden gap-4 max-sm:flex-wrap">
    <a :href="data[0]?.telegram" target="_blank">
      <BaseButton
        :text="$t('telegram')"
        class="sm:p-4 p-2 group"
        variant="border-yellow"
      >
        <template #prefix>
          <div
            class="rounded-full border border-yellow bg-yellow sm:size-9 size-6 backdrop-blur-[10px] flex-center group-hover:bg-white hover:border-white transition-300 cursor-pointer"
          >
            <span
              class="icon-telegram text-white sm:text-xl text-sm group-hover:text-yellow transition-300"
            />
          </div>
        </template>
      </BaseButton>
    </a>
    <a :href="data[0]?.instagram" target="_blank">
      <BaseButton
        :text="$t('instagram')"
        class="sm:p-4 p-2 group"
        variant="border-yellow"
      >
        <template #prefix>
          <div
            class="rounded-full border border-yellow bg-yellow sm:size-9 size-6 backdrop-blur-[10px] flex-center group-hover:bg-white hover:border-white transition-300 cursor-pointer"
          >
            <span
              class="icon-instagram text-white sm:text-xl text-sm group-hover:text-yellow transition-300"
            />
          </div>
        </template>
      </BaseButton>
    </a>
    <a :href="data[0]?.youtube" target="_blank">
      <BaseButton
        :text="$t('youtube')"
        class="sm:p-4 p-2 group"
        variant="border-yellow"
      >
        <template #prefix>
          <div
            class="rounded-full border border-yellow bg-yellow sm:size-9 size-6 backdrop-blur-[10px] flex-center group-hover:bg-white hover:border-white transition-300 cursor-pointer"
          >
            <span
              class="icon-yotube text-white sm:text-xl text-sm group-hover:text-yellow transition-300"
            />
          </div>
        </template>
      </BaseButton>
    </a>
  </div>
</template>
<script lang="ts" setup>
interface IAbout {
  id: number
  name: string
  text: string
  instagram: string
  telegram: string
  youtube: string
}

interface Props {
  data: IAbout[]
}

defineProps<Props>()
const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

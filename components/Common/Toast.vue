<template>
  <div
    class="relative flex items-center justify-between bg-white overflow-hidden p-4 rounded-xl"
  >
    <span
      :class="
        type === 'error'
          ? 'bg-red'
          : type === 'warning'
          ? 'bg-yellow'
          : 'bg-green'
      "
      class="absolute z-[200] top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 h-7 w-1.5 rounded-full"
    />
    <div class="flex items-center">
      <NuxtImg :src="images[type]" alt="icon" loading="lazy" />
      <div class="ml-2">
        <h2 class="text-dark font-semibold text-sm leading-140 pr-7">
          {{ title }}
        </h2>
      </div>
    </div>
    <CommonTimerCircle class="cursor-pointer" />
  </div>
</template>
<script lang="ts" setup>
interface Props {
  type: 'success' | 'error' | 'warning'
  title: string
}

const props = defineProps<Props>()
const images = computed(() => {
  return {
    success: '/toast/success.svg',
    error: '/toast/error.svg',
    warning: '/toast/warning.svg',
  }
})
watch(props, () => {}, { deep: true })
</script>

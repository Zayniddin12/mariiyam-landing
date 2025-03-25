<template>
  <div
    class="flex-y-center gap-3 transition-300 bg-gray-400 transition py-3 px-3 border border-solid border-white hover:border-blue group rounded-lg cursor-pointer"
    :class="[
      { 'bg-white shadow hover:border-white': active },
      { '!bg-gray-600 pointer-events-none': loading },
    ]"
  >
    <NuxtImg
      class="size-5 sm:size-6 object-cover"
      loading="lazy"
      :src="tab.icon"
      alt="tab.icon"
    />

    <p
      class="text-gray-500 sm:text-lg text-sm leading-130"
      :class="[{ '!text-black': active }]"
    >
      {{ $t(tab.name) }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tab: {
    id: number
    name: string
    icon: string
  }
  active?: boolean
  loading?: boolean
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="flex-y-center gap-1">
    <div
      v-for="(i, key) in calculateRating"
      :key="key"
      class="bg-yellow flex-center w-4 h-4 rounded"
    >
      <span class="icon-star1 text-xs text-white" />
    </div>
    <div
      v-for="(i, keyIN) in 5 - calculateRating"
      :key="keyIN"
      class="bg-gray-300 flex-center w-4 h-4 rounded"
      :class="itemClass"
    >
      <span :class="starColor" class="icon-star1 text-xs text-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  rating?: number
  itemClass?: string
  starColor?: string
}
const props = defineProps<Props>()

const calculateRating = computed(() => {
  return Math?.round(props?.rating)
})
</script>

<style scoped></style>

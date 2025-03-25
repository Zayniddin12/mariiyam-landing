<template>
  <div class="min-[901px]:w-1/2 w-full">
    <h3 class="sm:text-40 text-2xl leading-140 font-normal text-yellow mb-4">
      {{ $t('dear_reader') }}
    </h3>
    <Transition mode="out-in">
      <div :key="loading">
        <div
          v-if="!loading"
          class="sm:text-xl text-sm font-normal leading-140 text-black-100"
          v-html="data[0]?.text"
        />
        <div v-else class="shimmer h-[246px] w-full !bg-[#edeef1]" />
      </div>
    </Transition>
    <div
      class="flex sm:gap-10 gap-7 items-center pt-6 mt-6 border-t border-t-gray-400 md:mb-[38px]"
    >
      <div>
        <p
          class="text-black-100 sm:text-xl text-base sm:font-bold font-semibold"
        >
          {{ $t('name_of_founder') }}
        </p>
        <Transition mode="out-in">
          <div :key="loading">
            <p
              v-if="!loading"
              class="text-gray-300 sm:text-base text-xs font-normal"
            >
              {{ data[0]?.name }}
            </p>
            <span v-else class="shimmer w-full h-4 rounded" />
          </div>
        </Transition>
      </div>
    </div>
    <div class="md:flex hidden gap-4 max-sm:flex-wrap">
      <a :href="data[0]?.telegram" target="_blank">
        <BaseButton
          variant="border-yellow"
          :text="$t('telegram')"
          class="sm:p-4 p-2 group"
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
          variant="border-yellow"
          :text="$t('instagram')"
          class="sm:p-4 p-2 group"
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
          variant="border-yellow"
          :text="$t('youtube')"
          class="sm:p-4 p-2 group"
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
  loading: boolean
}
defineProps<Props>()
</script>

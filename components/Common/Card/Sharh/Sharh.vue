<template>
  <NuxtLink
    aria-label="Sharh"
    class="cursor-pointer transition-300 bg-[#F4F6F4] space-y-[10px] md:w-[379px] w-[335px] border-2 border-white p-4 rounded-20 block hover:border-yellow"
    :target="item?.sharh_id_url ? '_blank' : ''"
    :to="item?.sharh_id_url"
  >
    <div class="flex-y-center gap-3">
      <img
        alt="image"
        :src="item?.image ?? '/favicon.webp'"
        loading="lazy"
        class="w-[50px] h-[50px] shrink-0 rounded-full"
      />
      <div>
        <p
          class="text-brand-black md:text-base text-sm font-bold leading-tight"
        >
          {{ item?.name ?? '' }}
        </p>
        <i18n-t
          keypath="common_source"
          scope="global"
          tag="p"
          class="text-brand-black md:text-sm text-xs font-medium tracking-tight"
        >
          <template #name>
            <span
              class="text-brand-black text-sm font-semibold tracking-tight"
              >{{ item?.company ?? '' }}</span
            >
          </template>
        </i18n-t>
      </div>
    </div>
    <div class="flex-y-center gap-2">
      <LazyBaseRating :rating="item?.rank ?? 0" />
      <span class="text-sm font-semibold leading-130 text-brand-black">
        {{ item?.rank ?? 0 }}
      </span>
    </div>
    <p
      class="line-clamp-3 text-brand-black md:text-sm text-xs font-medium font-['Vela Sans'] tracking-tight"
    >
      {{ item?.description ?? '' }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IFeedback } from '~/types'

interface Props {
  item?: IFeedback
}

defineProps<Props>()
</script>

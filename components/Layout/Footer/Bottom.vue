<template>
  <div
    class="container !py-8 border-t border-blue/[0.3] flex-center-between max-md:flex-col-reverse relative gap-6"
  >
    <p class="text-sm leading-136 text-white/80 font-normal">
      {{ $t('copyright') }} {{ new Date().getFullYear() }} —
      {{ $t('all_rights_reserved') }}
    </p>

    <div
      class="flex justify-between max-md:w-full max-[430px]:gap-4 items-baseline"
    >
      <div v-if="socialLinks" class="max-md:flex hidden gap-4 flex-wrap">
        <a
          v-for="(item, index) in socialLinks"
          :key="index"
          :href="item?.url"
          target="_blank"
        >
          <div
            class="rounded-full border border-white/[0.10] bg-white/[0.05] size-9 backdrop-blur-[10px] flex-center group hover:bg-white hover:border-white transition-300 cursor-pointer"
          >
            <NuxtImg
              :src="item?.icon"
              :alt="item.name"
              loading="lazy"
              class="max-w-6 max-h-6"
            />
          </div>
        </a>
      </div>
      <div class="flex-y-center gap-2.5 max-md:flex-col-reverse">
        <p class="text-sm leading-136 text-white/80">{{ $t('created_by') }}</p>
        <LazyCommonLogoUIC main-color="#fff" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface ISocialLinks {
  name: string
  icon: string
  url: string
}
interface Props {
  socialLinks: ISocialLinks
}
defineProps<Props>()
</script>

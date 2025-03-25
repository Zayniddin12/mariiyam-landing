<template>
  <div
    class="lg:pt-8 md:pt-4 lg:ml-8 md:pl-4 lg:pb-[127px] md:pb-20 max-[800px]:w-full"
  >
    <div class="max-[800px]:hidden">
      <h2 class="text-white font-normal leading-130 text-32">
        {{ $t('contact_us_title') }}
      </h2>
      <p class="text-white/60 text-base font-normal leading-130 mb-9">
        {{ $t('contact_us_subtitle') }}
      </p>
    </div>

    <div
      v-if="ContactData && ContactData.length > 0"
      class="flex flex-col gap-3 max-[800px]:w-full"
    >
      <a
        :href="`https://yandex.ru/maps/?pt=${ContactData[0]?.longitude},${ContactData[0]?.latitude}&z=12&l=map`"
        class="p-3 max-[800px]:w-full flex gap-2 border border-white/[0.16] rounded-xl group hover:bg-yellow cursor-pointer transition-300 hover:border-yellow active:scale-95 select-none"
        target="_blank"
      >
        <div
          class="p-[9px] rounded-lg bg-yellow/20 flex items-center justify-center w-[42px] h-[42px] group-hover:bg-white/20 transition-300 relative"
        >
          <span
            class="icon-pin text-yellow group-hover:text-white transition-300"
          />
        </div>
        <div>
          <p class="text-white/60 text-sm font-normal leading-130">
            {{ $t('visit_office') }}
          </p>
          <p
            class="text-white font-normal md:text-base text-sm leading-130 mt-1.5"
          >
            {{ ContactData[0]?.address }}
            <span class="icon-direct max-md:hidden text-sm leading-130" />
          </p>
        </div>
        <span
          class="block md:hidden icon-direct absolute top-3 right-3 text-white text-sm"
        />
      </a>
      <a
        :href="`tel: ${ContactData[0]?.phone_number}`"
        class="p-3 flex gap-2 border border-white/[0.16] rounded-xl group hover:bg-yellow cursor-pointer transition-300 hover:border-yellow active:scale-95 select-none"
      >
        <div
          class="p-[9px] rounded-lg bg-yellow/20 flex items-center justify-center w-[42px] h-[42px] group-hover:bg-white/20 transition-300"
        >
          <span
            class="icon-phone text-yellow group-hover:text-white transition-300"
          />
        </div>
        <span>
          <p class="text-white/60 text-sm font-normal leading-130">
            {{ $t('phone_number') }}
          </p>
          <p class="font-normal text-white md:text-base text-sm mt-1.5">
            {{ formatPhoneNumber(ContactData[0]?.phone_number) }}
          </p>
        </span>
      </a>
      <div
        class="p-3 flex gap-2 border border-white/[0.16] rounded-xl group hover:bg-yellow cursor-pointer transition-300 hover:border-yellow active:scale-95 select-none"
      >
        <div
          class="p-[9px] rounded-lg bg-yellow/20 flex items-center justify-center w-[42px] h-[42px] group-hover:bg-white/20 transition-300"
        >
          <span
            class="icon-mail text-yellow group-hover:text-white transition-300"
          />
        </div>
        <a :href="`mailto: ${ContactData[0]?.email}`">
          <p class="text-white/60 text-sm font-normal leading-130">
            {{ $t('email') }}
          </p>
          <p class="font-normal text-white md:text-base text-sm mt-1.5">
            {{ ContactData[0]?.email }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatPhoneNumber } from '~/utils/common'

const ContactData = ref(null)
const error = ref()

const fetchData = async () => {
  try {
    const res = await useApi().$get('landing/link-with-us/')
    ContactData.value = res.results
  } catch (err) {
    error.value = err
  }
}

fetchData()
</script>

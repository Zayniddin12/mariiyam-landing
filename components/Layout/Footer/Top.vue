<template>
  <div class="container">
    <div
      class="flex items-start flex-col md:flex-row justify-between border-t border-t-blue/[0.3] !py-10"
    >
      <div class="">
        <CommonLogo :logo="'/logoBlack.webp'" class="max-w-[168px] max-h-9" />
        <p
          class="pt-6 md:pb-10 pb-6 sm:text-base text-sm font-normal leading-130 text-white/60 max-w-[484px] w-full"
        >
          {{ $t('about_maryam_footer') }}
        </p>
        <div class="md:block hidden">
          <h3 class="mb-4 font-normal text-base text-white">
            {{ $t('social_links') }}
          </h3>
          <div v-if="socialLinks" class="flex gap-4">
            <a
              v-for="(item, index) in socialLinks"
              :key="index"
              :href="item?.url"
              target="_blank"
            >
              <div
                class="rounded-full border border-white/[0.10] bg-white/[0.05] size-9 backdrop-blur-[10px] flex-center group hover:bg-[#083B49] hover:border-white transition-300 cursor-pointer"
              >
                <img
                  :alt="item.name"
                  :src="item?.icon"
                  class="max-w-6 max-h-6"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-x-[80px]">
        <div class="">
          <h3 class="text-sm font-bold text-white mb-4">{{ $t('main') }}</h3>
          <div class="flex gap-3 flex-col">
            <nuxt-link
              :class="
                activelink === 'about-section' ? 'text-white' : 'text-white/60'
              "
              :to="{ hash: '#about-section' }"
              class="about-section flex gap-2 items-center group text-sm hover:text-white group transition-300 cursor-pointer font-normal"
              @click="setActiveLink('about-section')"
              ><span
                :class="
                  activelink === 'about-section'
                    ? 'text-yellow'
                    : 'text-white/[0.09]'
                "
                class="icon-star group-hover:text-yellow transition-300 text-lg"
              />
              <p>{{ $t('nav.about') }}</p></nuxt-link
            >
            <nuxt-link
              :class="
                activelink === 'peculiarities' ||
                activelink === '/#peculiaritie'
                  ? 'text-white'
                  : 'text-white/60'
              "
              :to="{ hash: '#peculiarities' }"
              class="peculiaritie flex gap-2 items-center group text-smhover:text-white group transition-300 cursor-pointer font-normal"
              @click="setActiveLink('peculiarities')"
              ><span
                :class="
                  activelink === 'peculiarities'
                    ? 'text-yellow'
                    : 'text-white/[0.09]'
                "
                class="icon-star group-hover:text-yellow transition-300 text-lg"
              />
              <p>{{ $t('nav.peculiaritie') }}</p></nuxt-link
            >
            <nuxt-link
              :class="
                activelink === 'faq' || activelink === '/#faq'
                  ? 'text-white'
                  : 'text-white/60'
              "
              :to="{ hash: '#faq' }"
              class="faq flex gap-2 items-center group text-sm hover:text-white group transition-300 cursor-pointer font-normal"
              @click="setActiveLink('faq')"
              ><span
                :class="
                  activelink === 'faq' || activelink === '#faq'
                    ? 'text-yellow'
                    : 'text-white/[0.09]'
                "
                class="icon-star group-hover:text-yellow transition-300 text-lg !whitespace-nowrap"
              />
              <p class="whitespace-nowrap">
                {{ $t('nav.question_short') }}
              </p></nuxt-link
            >
            <nuxt-link
              :class="
                activelink === 'contact-section' ||
                activelink === '#contact-section'
                  ? 'text-white'
                  : 'text-white/60'
              "
              :to="{ hash: '#contact-section' }"
              class="contact-section flex gap-2 items-center group text-sm hover:text-white group transition-300 cursor-pointer font-normal"
              @click="setActiveLink('contact-section')"
              ><span
                :class="
                  activelink === 'contact-section' ||
                  activelink === '#contact-section'
                    ? 'text-yellow'
                    : 'text-white/[0.09]'
                "
                class="icon-star group-hover:text-yellow transition-300 text-lg"
              />
              <p>{{ $t('nav.contact') }}</p></nuxt-link
            >
          </div>
        </div>
        <div
          v-if="ContactData"
          class="p-6 hidden rounded-lg border border-blue/30 lg:flex flex-col gap-y-3 max-w-[282px] w-full"
        >
          <div class="group">
            <p
              class="text-white/[0.40] transition-300 group-hover:text-white text-sm font-normal leading-130 whitespace-nowrap"
            >
              {{ $t('phone_number') }}
            </p>
            <a
              :href="`tel: ${ContactData[0]?.phone_number}`"
              class="text-white group-hover:text-yellow transition-300 font-normal text-base leading-130 mt-0.5"
            >
              {{ formatPhoneNumber(ContactData[0]?.phone_number) }}
            </a>
          </div>
          <div class="group">
            <p
              class="text-white/[0.40] transition-300 group-hover:text-white text-sm font-normal leading-130 whitespace-nowrap"
            >
              {{ $t('email') }}
            </p>
            <a
              :href="`mailto: ${ContactData[0]?.email}`"
              class="text-white transition-300 group-hover:text-yellow font-normal text-base leading-130 mt-0.5"
            >
              {{ ContactData[0]?.email }}
            </a>
          </div>
          <div class="group">
            <p
              class="text-white/[0.40] transition-300 group-hover:text-white text-sm font-normal leading-130 whitespace-nowrap"
            >
              {{ $t('visit_office') }}
            </p>
            <a
              :href="`https://yandex.ru/maps/?pt=${ContactData[0]?.longitude},${ContactData[0]?.latitude}&z=12&l=map`"
              class="text-white font-normal text-base leading-130 mt-0.5 transition-300 group-hover:text-yellow"
              target="_blank"
            >
              {{ ContactData[0]?.address }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '~/store'
import { formatPhoneNumber } from '~/utils/common'

interface ISocialLinks {
  name: string
  icon: string
  url: string
}

interface Props {
  socialLinks: ISocialLinks
}

defineProps<Props>()
const activelink = ref('')
const route = useRoute()
const store = useStore()
const activeFooterLink = computed(() => store.footerActiveLink)
function setActiveLink(link: string) {
  activelink.value = link
}

const ContactData = ref(null)
const fetchData = async () => {
  await useApi()
    .$get('landing/link-with-us/')
    .then((res) => {
      ContactData.value = res.results
    })
}

fetchData()
onMounted(() => {
  activelink.value = route.hash.substring(1)
})

watch(activeFooterLink, () => {
  activelink.value = activeFooterLink.value
})
</script>

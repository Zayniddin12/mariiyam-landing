<template>
  <div
    :class="
      isScrolled ? 'bg-white/[0.80] backdrop-blur-[10px]' : 'bg-transparent'
    "
    class="bg-transparent sticky inset-0 py-3 lg:py-6 z-40 transition-200"
  >
    <div class="container">
      <header class="flex justify-between items-center">
        <CommonLogo
          class="sm:max-w-[168px] max-w-[126px]"
          @click="removeActiveLink"
        />
        <nav class="">
          <ul class="font-normal text-base hidden xl:flex gap-10 items-center">
            <li class="relative hover:text-blue transition-300 text-black-100">
              <NuxtLink
                :class="
                  activelink === 'about-section' ||
                  activelink === '#about-section'
                    ? 'text-blue'
                    : ''
                "
                :to="{ hash: '#about-section' }"
                class="about-section"
                @click="setActiveLink('about-section', $event)"
              >
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li
              class="relative transition-300 font-normal hover:text-blue text-black-100"
            >
              <NuxtLink
                :class="
                  activelink === 'peculiarities' ||
                  activelink === '#peculiarities'
                    ? 'text-blue'
                    : ''
                "
                :to="{ hash: '#peculiarities' }"
                class="peculiarities"
                @click="setActiveLink('peculiarities', $event)"
              >
                {{ $t('nav.peculiaritie') }}
              </NuxtLink>
            </li>
            <li
              class="relative hover:text-blue transition-300 font-normal text-black-100"
            >
              <NuxtLink
                :class="
                  activelink === 'faq' || activelink === '#faq'
                    ? 'text-blue'
                    : ''
                "
                :to="{ hash: '#faq' }"
                class="faq"
                @click="setActiveLink('faq', $event)"
              >
                {{ $t('nav.question') }}
              </NuxtLink>
            </li>
            <li
              class="relative hover:text-blue transition-300 font-normal text-black-100"
            >
              <NuxtLink
                :class="
                  activelink === 'contact-section' ||
                  activelink === '#contact-section'
                    ? 'text-blue'
                    : ''
                "
                :to="{ hash: '#contact-section' }"
                class="contact-section"
                @click="setActiveLink('contact-section', $event)"
              >
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
          </ul>
          <div
            :style="{
              width: `${underlineWidth}px`,
              left: `${underlineLeft}px`,
            }"
            class="absolute bottom-0 h-[4px] rounded-t-[2px] bg-blue transition-all duration-300 ease-in-out"
          />
        </nav>
        <NuxtLink
          :to="{ hash: '#download-section' }"
          class="hidden xl:block"
          @click="removeActiveLink"
        >
          <LazyBaseButton
            :text="$t('nav.download_app')"
            class="py-3 px-9 !rounded-full"
            main-class="gap-2"
          />
        </NuxtLink>
        <LazyLayoutHeaderLangSwitcher
          class="hidden xl:block"
          @change-lang="changeLocale"
        />
        <Transition name="from-left">
          <LayoutHeaderBurgerMenu
            :is-menu-open="showMenu"
            class="xl:hidden"
            @update:is-menu-open="showMenu = $event"
          />
        </Transition>
        <i class="xl:hidden text-[32px] icon-burger" @click="toggleMenu" />
      </header>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/store/index'

const isScrolled = ref(false)
const showMenu = ref(false)
const activelink = ref('')
const underlineWidth = ref(0)
const underlineLeft = ref(0)
const store = useStore()
const { locale } = useI18n()
const route = useRoute()
function handleScroll() {
  isScrolled.value = window.scrollY > 0
}
onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function removeActiveLink() {
  underlineWidth.value = 0
  underlineLeft.value = 0
  activelink.value = ''
}
const activeLinks = computed(() => store.activeLink)

function setActiveLink(link: string, event: MouseEvent) {
  store.setFooterActiveLink(link)
  if (activelink.value !== '' || activelink.value !== 'download-section') {
    const target = event.target as HTMLElement
    const targetRect = target.getBoundingClientRect()
  } else {
    underlineWidth.value = 0
    underlineLeft.value = 0
  }
}

function changeLocale() {
  if (route.hash) {
    const hash = route.hash.substring(1)
    activelink.value = hash
    const linkElement = document.querySelector(`.${hash}`)
    if (linkElement) {
      const linkRect = linkElement.getBoundingClientRect()
      underlineWidth.value = linkRect.width
      underlineLeft.value = linkRect.left
    }
  }
}

watch(
  () => route.path,
  () => {
    activelink.value = ''
    underlineWidth.value = 0
    underlineLeft.value = 0
  }
)

onMounted(() => {
  const hash = route.hash.substring(1)
  activelink.value = hash
  if (hash) {
    const linkElement = document.querySelector(`.${hash}`)
    const sectionElement = document.getElementById(hash)

    if (linkElement) {
      const linkRect = linkElement.getBoundingClientRect()
      underlineWidth.value = linkRect.width
      underlineLeft.value = linkRect.left
    }
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
})

watch(locale, () => {
  setTimeout(() => {
    changeLocale()
  }, 1000)
})

watch(
  () => activeLinks,
  () => {
    const hash = activeLinks
    if (hash.value) {
      const linkElement = document.querySelector(`.${hash.value}`)
      if (linkElement) {
        const linkRect = linkElement.getBoundingClientRect()
        console.log(underlineLeft.value)
        underlineWidth.value = linkRect.width
        underlineLeft.value = linkRect.left
        activelink.value = hash.value
      }
    }
  },
  { deep: true }
)
</script>

<style>
.from-left-enter-active {
  animation: from-left 300ms ease-out;
}

.from-left-leave-active {
  animation: from-left 300ms ease-in reverse;
}

@keyframes from-left {
  0% {
    opacity: 0;
    transform: translateX(-100%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>

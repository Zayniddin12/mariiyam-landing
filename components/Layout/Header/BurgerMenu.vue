<template>
  <div
    v-if="isMenuOpen"
    class="w-full fixed top-0 left-0 h-screen z-50 transition-all duration-300 bg-white container hidden-print"
  >
    <div class="flex justify-between items-center py-3">
      <CommonLogo class="sm:max-w-[168px] max-w-[126px]" />
      <i class="text-xl icon-close" @click="toggleMenu" />
    </div>
    <div class="flex flex-col justify-between h-[78%] mb-4 mt-12">
      <nav class="flex flex-col items-center">
        <ul
          class="flex flex-col text-dark text-center text-base font-normal border-b border-b-gray-600 w-[80%] mx-auto"
        >
          <li class="py-3">
            <NuxtLink
              :to="{ path: '/', hash: '#about-section' }"
              :class="
                activelink === 'about-section' ? 'text-blue' : 'text-black-100'
              "
              @click="toggleMenu('about-section')"
            >
              {{ $t('nav.about') }}
            </NuxtLink>
          </li>
          <li class="py-3">
            <NuxtLink
              :to="{ path: '/', hash: '#peculiarities' }"
              :class="
                activelink === 'peculiarities' ? 'text-blue' : 'text-black-100'
              "
              @click="toggleMenu('peculiarities')"
            >
              {{ $t('nav.peculiaritie') }}
            </NuxtLink>
          </li>
          <li class="py-3">
            <NuxtLink
              :to="{ path: '/', hash: '#faq' }"
              :class="activelink === 'faq' ? 'text-blue' : 'text-black-100'"
              @click="toggleMenu('faq')"
            >
              {{ $t('nav.question') }}
            </NuxtLink>
          </li>
          <li class="py-3">
            <NuxtLink
              :to="{ path: '/', hash: '#contact-section' }"
              :class="
                activelink === 'contact-section'
                  ? 'text-blue'
                  : 'text-black-100'
              "
              @click="toggleMenu('contact-section')"
            >
              {{ $t('nav.contact') }}
            </NuxtLink>
          </li>
        </ul>
        <LayoutHeaderLangSwitcher
          body-class="-left-[6.5px]"
          class="mt-6 mb-10"
          @change-locale="emit('update:isMenuOpen', !props.isMenuOpen)"
        />
        <NuxtLink
          :to="{ path: '/', hash: '#download-section' }"
          @click="emit('update:isMenuOpen', !props.isMenuOpen)"
        >
          <BaseButton
            class="py-3 px-9"
            main-class="gap-2"
            :text="$t('nav.download_app')"
          />
        </NuxtLink>
      </nav>
      <div class="flex justify-center gap-4">
        <a href="https://www.instagram.com/masudca_05/" target="_blank">
          <div
            class="rounded-full border border-yellow bg-yellow/5 size-9 backdrop-blur-[10px] flex-center transition-300 cursor-pointer"
          >
            <span class="icon-instagram text-yellow text-xl transition-300" />
          </div>
        </a>
        <a href="https://www.instagram.com/masudca_05/" target="_blank">
          <div
            class="rounded-full border border-yellow bg-yellow/5 size-9 backdrop-blur-[10px] flex-center transition-300 cursor-pointer"
          >
            <span class="icon-telegram text-yellow text-xl transition-300" />
          </div>
        </a>
        <a href="https://www.instagram.com/masudca_05/" target="_blank">
          <div
            class="rounded-full border border-yellow bg-yellow/5 size-9 backdrop-blur-[10px] flex-center transition-300 cursor-pointer"
          >
            <span class="icon-linkin text-yellow text-xl transition-300" />
          </div>
        </a>
        <a href="https://www.instagram.com/masudca_05/" target="_blank">
          <div
            class="rounded-full border border-yellow bg-yellow/5 size-9 backdrop-blur-[10px] flex-center transition-300 cursor-pointer"
          >
            <span class="icon-facebook text-yellow text-xl transition-300" />
          </div>
        </a>
        <a href="" target="_blank">
          <div
            class="rounded-full border border-yellow bg-yellow/5 size-9 backdrop-blur-[10px] flex-center transition-300 cursor-pointer"
          >
            <span class="icon-play text-yellow text-xl transition-300" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ isMenuOpen: boolean }>(), {
  isMenuOpen: false,
})

const emit = defineEmits<{
  (e: 'update:isMenuOpen', value: boolean): void
}>()
const activelink = ref('')
const route = useRoute()

function toggleMenu(link: string) {
  activelink.value = link
  emit('update:isMenuOpen', !props.isMenuOpen)
}

onMounted(() => {
  activelink.value = route.hash.substring(1)
})
watch(
  () => props.isMenuOpen,
  (val: any) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }
)
</script>

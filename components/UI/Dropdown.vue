<template>
  <div
    ref="target"
    class="relative min-w-fit inline-block"
    @focusout="onClickAway"
  >
    <button
      class="custom-hover text-sm flex-y-center group rounded-lg transition-all duration-150 hover:text-gray-200 !text-dark w-full"
      :class="buttonClass"
      @click="onClick"
    >
      <slot name="head" />
    </button>
    <transition name="dropdown">
      <ul
        v-if="dropDownActive"
        ref="target"
        class="rounded-lg lg:rounded-xl shadow-[0_4px_36px_rgba(56,56,56,0.16)] border border-white-100 right-0 w-full h-auto absolute !z-[70] flex flex-col cursor-pointer bg-white"
        :class="[listStyle, above ? 'bottom-[60px]' : 'top-7']"
        @click="onClickAway"
      >
        <div
          v-for="item of languagesList"
          :key="item.code"
          class="py-2.5 pl-3 pr-2.5 transition-colors duration-300 first:rounded-t-xl last:rounded-b-xl hover:bg-white-200 flex-center-between"
          @click="changeLang(item.code)"
        >
          <li class="text-sm leading-20 font-medium">
            {{ item.nameFull }}
          </li>
          <i
            v-if="currentLanguage?.code === item?.code"
            class="icon-checked text-xl text-blue"
          />
        </div>
      </ul>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher'

interface Props {
  title?: string
  listStyle?: string
  buttonClass?: string | [string]
  above?: boolean
  active?: boolean
}
const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()
const props = withDefaults(defineProps<Props>(), {})
const target = ref(null)
const emit = defineEmits(['change', 'outsideClick', 'changeLoacale'])
const dropDownActive = ref(false)
const route = useRoute()

const onClick = () => {
  dropDownActive.value = !dropDownActive.value
  emit('change', dropDownActive.value)
}

function onClickAway() {
  emit('outsideClick')
}

const changeLang = (val: string) => {
  onClick()
  changeLocale(val)
  emit('changeLoacale')
}
onClickOutside(target, () => {
  dropDownActive.value = false
})

watch(
  () => props.active,
  () => {
    if (!props.active) {
      dropDownActive.value = false
    }
  }
)
watch(
  () => route.path,
  (newPath: any) => {
    if (newPath === '/cabinet') {
      dropDownActive.value = false
    }
  }
)
</script>

<style>
.dropdown-enter-active {
  transition: all 0.2s ease;
}

.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>

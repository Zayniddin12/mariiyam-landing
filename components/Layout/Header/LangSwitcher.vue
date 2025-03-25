<template>
  <UIDropdown
    v-bind="{ listStyle }"
    list-style="!w-[120px]"
    @change="handleChange"
    @change-loacale="changeLocales"
    @outside-click="handleOutsideClick"
  >
    <template #head>
      <span
        class="flex items-center text-dark font-medium leading-20 text-sm text-black-300"
        ><i class="icon-global text-xl text-black-200" /><span
          class="w-10 mx-auto"
          >{{ currentLanguage?.name }}</span
        ></span
      >
    </template>
  </UIDropdown>
</template>

<script lang="ts" setup>
import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher'

interface Props {
  listStyle?: string
}
defineProps<Props>()

const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()

const isShown = ref(false)
const options = ref([
  {
    id: 1,
    name: 'English',
  },
  {
    id: 2,
    name: 'Русский',
  },
  {
    id: 3,
    name: 'O‘zbek',
  },
])
const emit = defineEmits<{
  (e: ['change-locale']): void
  (e: ['change-lang']): void
}>()

function changeLocales() {
  emit('change-locale')
}
const handleChange = (val: boolean) => {
  isShown.value = val
  emit('change-lang')
}

const handleOutsideClick = () => {
  isShown.value = false
}
</script>

<style lang="scss" scoped></style>

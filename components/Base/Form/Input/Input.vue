<template>
  <div
    :id="id"
    class="bg-white/[0.12] border border-white/[0.12] transition-300 focus-within:border-white/[0.40] flex items-center rounded-xl"
    :class="{ '!border-red-500 !bg-red/5': error }"
  >
    <slot name="prefix" />
    <input
      v-bind="{
        type,
        minlength,
        maxlength,
        max,
        min,
        disabled,
        placeholder,
        readonly,
        autocomplete,
      }"
      :id="inputId"
      ref="Input"
      class="w-full h-full text-sm p-3 text-white bg-transparent outline-none placeholder:text-white/40"
      :value="modelValue"
      :class="[inputClass]"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="handleFocus"
    />
    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: string
  placeholder?: string
  modelValue: number | string | undefined
  disabled?: boolean
  error?: boolean
  focus?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  inputClass?: string | string[]
  prefixClass?: string
  suffixClass?: string
  autocomplete?: string
  inputId?: string
  readonly?: boolean
  id?: string
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'blur'): void
  (e: 'focusout'): void
  (e: 'focus'): void
  (e: 'enter'): void
}>()

const handleInput = (e: { target: HTMLInputElement }) => {
  emit('update:modelValue', e.target.value)
}
const handleEnter = () => {
  emit('enter')
}
const Input = ref()
defineExpose({ Input })

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  maxlength: 99,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: 'new-password',
})

const handleFocus = () => {
  emit('focus')
}
watch(
  () => props?.focus,
  (value: any) => {
    if (value) {
      Input?.value?.focus()
    }
  },
  { deep: true, immediate: true }
)
</script>

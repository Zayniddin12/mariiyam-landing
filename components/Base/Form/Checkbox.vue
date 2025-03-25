<template>
  <label
    class="group flex items-center relative select-none py-auto"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
    for="checkbox"
  >
    <input
      id="checkbox"
      v-bind="{ disabled }"
      type="checkbox"
      class="absolute opacity-0 invisible h-0 w-0 peer"
      :checked="modelValue"
      :value="value"
      :name="name"
      @change="handleChange"
    />
    <span
      class="duration-200 shrink-0 ease-in-out relative left-0 inline-block h-5 w-5 rounded border-2 after:transition-all after:duration-200 after:absolute after:left-[6px] after:top-[2.5px] after:w-1.5 after:h-[11px] after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[0deg] after:opacity-0 border-grey-100 after:border-primary"
      :class="[
        {
          '!border-danger': error,
          'group-hover:border-primary': !disabled,
          ' peer-checked:-rotate-90 peer-checked:after:opacity-100 peer-checked:after:rotate-[138deg] peer-checked:bg-primary peer-checked:after:border-white peer-checked:border-primary peer-disabled:border-grey-100 peer-disabled:after:border-grey-100':
            modelValue,
        },
      ]"
    />

    <span class="pl-3">
      <slot name="label"> </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number | boolean
  label?: string
  name?: string
  value?: string | number | boolean
  disabled?: boolean
  error?: boolean
  labelStyles?: string
  span?: string
}
const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['modelValue']): void
}>()
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', props.value ? target?.value : target?.checked)
}
</script>

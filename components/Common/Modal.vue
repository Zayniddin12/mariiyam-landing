<template>
  <Teleport to="body">
    <div
      :class="[wrapperClass, { '!opacity-100 !visible': show }]"
      class="items-center p-3 fixed w-full h-full bg-black/50 flex justify-center z-[99999] top-0 left-0 invisible opacity-0 transition-all duration-300"
      data-modal="wrapper"
      @click="handleOuterClick"
    >
      <Transition mode="out-in" name="modal">
        <div
          v-if="show"
          :class="customClass ? customClass : 'md:max-w-xl'"
          class="w-full"
        >
          <div
            :class="[bodyClass, { animated: animationIn }]"
            class="bg-white w-full shadow-xl relative max-h-[80vh] my-4 rounded-xl"
          >
            <div :class="headerWrapperClass">
              <div
                v-if="!noHeader"
                :class="[headerStyle]"
                class="flex items-center border-b border-gray-500 px-4 py-3 bg-white !rounded-t-[32px]"
              >
                <slot name="header">
                  <h3
                    :class="titleStyle"
                    class="w-full text-dark text-xl font-bold"
                  >
                    <slot name="preTitle" />
                    {{ title }}
                  </h3>
                  <div
                    :class="iconWrapperClass"
                    class="text-2xl w-7 h-7 rounded-full cursor-pointer shrink-0 flex-center transition-300 hover:bg-transparent active:scale-95 group"
                    @click="$emit('close')"
                  >
                    <i-close
                      class="text-brand-black group-hover:text-red-400 transition-300 text-3xl"
                    />
                  </div>
                </slot>
              </div>
            </div>
            <button
              v-if="hasCloseIcon"
              :class="iconCloseClass"
              aria-label="button"
              class="text-3xl w-7 h-7 absolute text-gray-100 top-3 right-5 rounded-full shrink-0 flex-center transition-300 hover:text-red hover:bg-transparent active:scale-95 z-40"
              @click="$emit('close')"
            >
              <i-close
                class="icon-close text-gray-400 transition-all hover:text-red"
              />
            </button>
            <slot />
            <slot name="footer" />
          </div>
          <slot name="afterBody" />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
interface Props {
  show?: boolean
  isFlow?: boolean
  title?: string
  wrapperClass?: string | string[]
  modalClass?: string | string[]
  noHeader?: boolean
  disableOuterClose?: boolean
  bodyClass?: string | string[]
  hasCloseIcon?: boolean
  titleStyle?: string
  headerStyle?: string
  customClass?: string
  iconCloseClass?: string
  iconWrapperClass?: string
  headerWrapperClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Dialog title',
  titleStyle: '',
  headerStyle: '',
  wrapperClass: '',
  bodyClass: '',
  modalClass: '',
})

interface Emits {
  (e: 'close'): void

  (e: 'outer-click'): void
}

const emit = defineEmits<Emits>()
const animationIn = ref(false)

function handleOuterClick(e: Event) {
  const target = e.target as HTMLElement
  if (target.dataset?.modal == 'wrapper') {
    emit('outer-click')
    if (!props.disableOuterClose) {
      emit('close')
    } else {
      animationIn.value = true
      setTimeout(() => {
        animationIn.value = false
      }, 300)
    }
  }
}

watch(
  () => props.show,
  (val: any) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
)
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !props.disableOuterClose) {
      emit('close')
    }
  })
})
</script>

<style scoped>
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes mobile-modal {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

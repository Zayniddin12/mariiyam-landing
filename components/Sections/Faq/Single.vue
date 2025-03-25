<template>
  <div class="grid items-start gap-4 !px-0">
    <div
      v-for="(item, index) in faq"
      :key="index"
      class="group transition-300 border border-yellow md:rounded-3xl rounded-2xl md:p-8 p-4 hover:bg-yellow/10 cursor-pointer transition-300"
      data-aos="fade-right"
      @click="openItem(item.id)"
    >
      <div
        :class="[selectedItem === item?.id ? '' : '']"
        class="flex items-center justify-between cursor-pointer transition-300 rounded-2xl"
      >
        <p
          class="font-normal md:text-2xl text-sm text-black-100 sm:!leading-7 !leading-[120%] transition-colors duration-300"
        >
          {{ item?.title }}
        </p>
        <div
          :class="{ active: selectedItem === item?.id }"
          class="plusminus flex-shrink-0 ml-1"
        ></div>
      </div>
      <CollapseTransition>
        <div v-if="selectedItem === item?.id">
          <p
            :class="answerClass"
            class="text-gray sm:text-base text-xs font-normal leading-140 sm:pt-5 pt-3"
            v-html="item?.text"
          ></p>
        </div>
      </CollapseTransition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

const selectedItem = ref(1)

interface IFaq {
  id: number
  title: string
  text: string
}

interface Props {
  faq: IFaq[]
  questionClass?: string
  answerClass?: string
}

defineProps<Props>()

const openItem = (id: number) => {
  if (selectedItem.value === id) {
    selectedItem.value = 0
    return
  }
  selectedItem.value = id
}
</script>

<style scoped>
.plusminus {
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.plusminus.active::before {
  transform: translatey(-50%) rotate(-90deg);
  opacity: 0;
}

.plusminus.active::after {
  transform: translatey(-50%) rotate(0);
}

.plusminus::before,
.plusminus::after {
  content: '';
  display: block;
  background-color: #caa244;
  position: absolute;
  top: 50%;
  left: 0;
  transition: 0.35s;
  width: 100%;
  height: 2px;
}

.plusminus::after {
  transform: translatey(-50%) rotate(90deg);
}

.plusminus::before {
  transform: translatey(-50%);
}
</style>

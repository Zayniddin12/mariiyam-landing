<template>
  <div class="md:py-[58px] !overflow-hidden">
    <div
      class="container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6"
    >
      <div
        class="bg-gray-200 pb-4 pt-5 sm:py-[68px] px-6 rounded-t-3xl sm:rounded-3xl"
        data-aos="zoom-out-right"
      >
        <h3
          class="text-black xl:text-[40px] lg:text-[36px] text-2xl sm:text-[30px] font-bold mb-2 sm:mb-12 md:leading-[54px]"
        >
          {{ $t('expectation.title') }}
        </h3>
        <div class="flex flex-wrap gap-2 sm:grid sm:grid-cols-1 sm:gap-[14px]">
          <ExpectationTabs
            v-for="(tab, index) in tabList"
            :key="index"
            :active="tab.id === activeTabId"
            :tab="tab"
            @click="setActiveTab(tab.id)"
          />
        </div>
      </div>
      <ExpectationCenter data-aos="zoom-out-up" />

      <ExpectationEnter
        class="lg:col-span-1 sm:col-span-2 lg:mt-0 mt-6"
        data-aos="zoom-out-left"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeTabId = ref(2)

const setActiveTab = (id: number) => {
  activeTabId.value = id
}

const tabList = [
  {
    id: 1,
    name: 'main_page',
    icon: '/images/expectation/home.svg',
  },
  {
    id: 2,
    name: 'classes',
    icon: '/images/expectation/clapperboard.svg',
  },
  {
    id: 3,
    name: 'profile',
    icon: '/images/expectation/checklist.svg',
  },
  {
    id: 4,
    name: 'webinar_broadcast',
    icon: '/images/expectation/videocamera.svg',
  },
  {
    id: 5,
    name: 'purchasing_course',
    icon: '/images/expectation/sectionIcon.svg',
  },
  {
    id: 6,
    name: 'profile',
    icon: '/images/expectation/profile.svg',
  },
]
</script>

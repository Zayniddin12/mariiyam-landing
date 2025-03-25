<template>
  <div class="grid items-start gap-4 !px-0 w-full h-full">
    <div
      v-for="item in 4"
      :key="item"
      class="md:rounded-3xl rounded-2xl h-[92px] w-full border border-gray-100 flex items-center justify-between p-8"
      data-aos="fade-right"
    >
      <span class="md:h-8 w-[60%] h-[14px] rounded-lg shimmer" />
      <span class="h-8 w-8 rounded-full shimmer" />
    </div>
  </div>
</template>

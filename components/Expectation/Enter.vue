<template>
  <div
    class="bg-gray-200 rounded-3xl py-5 overflow-hidden sm:py-[67px] px-6 sm:gap-[167px] gap-6 grid sm:gap-x-6 lg:gap-x-0 sm:grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col sm:justify-between"
  >
    <div>
      <div class="flex items-center gap-4">
        <p class="text-blue text-[28px] font-bold leading-9">01</p>
        <div class="h-0.5 w-[26px] bg-blue"></div>
      </div>
      <h3
        class="text-black lg:text-[40px] md:text-[35px] text-2xl font-bold mt-4 mb-2 md:mb-0 md:leading-[54px]"
      >
        {{ $t('expectation.enter') }}
      </h3>
      <p class="text-gray-500 text-sm md:text-base font-normal leading-tight">
        {{ $t('expectation.main') }}
      </p>
    </div>
    <ExpectationAppLinks class="mt-auto" />
  </div>
</template>

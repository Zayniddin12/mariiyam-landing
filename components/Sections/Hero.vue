<template>
  <div class="pt-6 md:pt-[64px]">
    <div class="container">
      <div class="max-w-[792px] mx-auto w-full">
        <h1
          class="text-black md:text-[56px] text-2xl md:leading-[56px] font-bold text-center"
        >
          {{ $t('hero.title') }}
        </h1>
        <p class="text-gray md:text-xl text:sm text-center mt-4 mb-6 sm:px-14">
          {{ $t('hero.subtitle') }}
        </p>
      </div>
      <CommonLinks class="pb-10" />
      <div
        class="md:h-[540px] sm:h-[340px] h-[200px] w-full !bg-[url('/images/about/Backgrounds.webp')] bg-gray-200 bg-no-repeat bg-contain sm:bg-auto bg-center sm:mt-[102px] mt-[95px] rounded-3xl relative"
      >
        <div class="relative flex justify-center items-center w-full">
          <client-only>
            <kinesis-container>
              <KinesisElement>
                <img
                  :src="$t('img_hero')"
                  alt="HerroPhone"
                  class="md:max-w-[529px] sm:max-w-[327px] max-w-[227px] -mt-[73px] md:-mt-[96px] w-full"
                  loading="lazy"
                />
              </KinesisElement>
            </kinesis-container>
          </client-only>
        </div>
        <CommonStatus
          :text="$t('hero.status_time')"
          class="absolute lg:top-[160px] md:top-20 md:left-14 lg:left-[140px] top-0 mt-6 ml-4 z-20"
          icon="icon-star11"
          icon-class="text-white sm:text-[20px] text-lg"
          icon-wrapper="rounded-full bg-yellow sm:size-9 size-6 grid place-items-center flex-shrink-0"
          text-class="text-yellow"
        />
        <CommonStatus
          :text="$t('hero.status_factor')"
          class="absolute bottom-6 right-4 md:bottom-20 md:right-16 lg:bottom-[120px] lg:right-[160px]"
          icon="icon-Union !text-blue"
          icon-class="text-white sm:text-[34px] text-[24px] z-40"
          text-class="text-blue "
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
</script>

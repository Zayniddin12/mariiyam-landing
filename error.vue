<template>
  <div>
    <LayoutHeader />
    <div
      class="relative bg-white-100 w-full flex-center overflow-hidden container"
    >
      <div class="text-center absolute-x z-50">
        <NuxtImg
          src="/images/404.webp"
          loading="lazy"
          alt="404"
          class="w-[80%] mx-auto mt-10"
        />
        <p class="text-32 font-medium text-black-100 uppercase mt-2">
          {{ $t('not_found') }}
        </p>
        <p class="text-xl text-gray-300 font-normal mt-2">
          {{ $t('not_found_text') }}
        </p>

        <RouterLink to="/" class="z-50">
          <BaseButton
            class="mt-8 py-2.5 px-4"
            icon-position="left"
            :text="$t('back_home')"
          >
            <template #suffix>
              <span class="icon-home text-white text-2xl" />
            </template>
          </BaseButton>
        </RouterLink>
      </div>
      <div
        class="w-screen h-[426px] opacity-20 rounded-full bg-primary blur-[235px] absolute bottom-[-30%]"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <div
    class="container !bg-[url('/images/about/Background.webp')] bg-contain bg-gray-200 bg-right md:h-[256px] bg-no-repeat md:bg-cover lg:bg-auto gap-2 flex md:block md::bg-center !p-6 rounded-3xl"
  >
    <div class="shrink-0 size-10 sm:size-[64px]">
      <svg fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path
          clip-rule="evenodd"
          d="M25.0094 33.8291C24.6254 34.1784 24.1427 34.3517 23.6627 34.3517C23.1187 34.3517 22.5774 34.1304 22.1827 33.6984L17.3214 28.3651C16.5774 27.5491 16.636 26.2823 17.452 25.541C18.2654 24.7917 19.532 24.853 20.2787 25.669L25.14 31.0024C25.884 31.8211 25.8254 33.0851 25.0094 33.8291ZM56.1907 23.5223L48.348 12.005C47.1293 10.2023 45.1027 9.125 42.924 9.125H21.092C18.916 9.125 16.8894 10.2023 15.6734 11.9996L7.80402 23.5223C6.09469 26.029 6.32669 29.3704 8.37202 31.6504L27.8547 53.0371C28.9133 54.2024 30.4227 54.8717 31.996 54.8717C33.5693 54.8717 35.0787 54.2024 36.1347 53.0344L55.62 31.6237C57.6733 29.3731 57.908 26.0423 56.1907 23.5223Z"
          fill="#077E94"
          fill-rule="evenodd"
        />
      </svg>
    </div>

    <div>
      <h2
        class="sm:text-xl text-base font-semibold text-black md:mt-4 sm:mb-2 mb-1"
      >
        {{ title }}
      </h2>
      <p class="text-gray line-clamp-3 sm:text-base text-xs">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>

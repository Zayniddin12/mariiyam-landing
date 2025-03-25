<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="relative">
      <div class="app-container w-full">
        <a
          :href="playMarketLink"
          class="app flex items-center gap-1.5 bg-black rounded-lg p-[5px] cursor-pointer z-10"
          target="_blank"
        >
          <svg
            fill="none"
            height="28"
            viewBox="0 0 27 28"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8267 13.6676C19.8381 12.7822 20.0732 11.9141 20.5103 11.1441C20.9473 10.374 21.5721 9.72704 22.3264 9.26332C21.8472 8.57897 21.215 8.01578 20.4801 7.61848C19.7452 7.22118 18.9278 7.00071 18.0928 6.97459C16.3116 6.78762 14.5847 8.04045 13.677 8.04045C12.7518 8.04045 11.3543 6.99315 9.84938 7.02411C8.87597 7.05556 7.9273 7.33862 7.09581 7.84572C6.26433 8.35281 5.57837 9.06665 5.10479 9.91767C3.05332 13.4695 4.58353 18.6894 6.54866 21.5604C7.53186 22.9662 8.68093 24.5366 10.1845 24.4809C11.6558 24.4199 12.2053 23.5427 13.9813 23.5427C15.7408 23.5427 16.2563 24.4809 17.7904 24.4455C19.3692 24.4199 20.3639 23.0334 21.3126 21.6143C22.019 20.6125 22.5626 19.5054 22.9232 18.3339C22.006 17.946 21.2232 17.2966 20.6726 16.4668C20.1219 15.637 19.8277 14.6635 19.8267 13.6676Z"
              fill="#066B7E"
            />
            <path
              d="M16.9292 5.08593C17.79 4.05255 18.2141 2.72432 18.1114 1.3833C16.7962 1.52143 15.5814 2.14998 14.709 3.14371C14.2824 3.62917 13.9557 4.19395 13.7475 4.80575C13.5394 5.41755 13.4538 6.06438 13.4958 6.70926C14.1536 6.71603 14.8044 6.57346 15.3991 6.29227C15.9938 6.01108 16.517 5.59861 16.9292 5.08593Z"
              fill="#066B7E"
            />
          </svg>
          <div>
            <p class="text-white/60 text-[8.42px] font-normal leading-3">
              {{ $t('expectation.save') }}
            </p>
            <h4 class="text-white text-sm font-bold leading-[15.16px]">
              App Store
            </h4>
          </div>
        </a>
        <div
          class="w-full h-[100px] bg-gray-200 absolute hidden sm:block"
        ></div>
        <NuxtImg
          alt="qrCode"
          class="hover-image -z-10 size-[140px] mx-auto hidden sm:block"
          loading="lazy"
          src="/images/expectation/qrCode.png"
        />
      </div>
    </div>

    <div class="relative">
      <div class="app-container">
        <a
          :href="playMarketLink"
          class="app flex items-center gap-1.5 bg-black rounded-lg p-[5px] cursor-pointer"
          target="_blank"
        >
          <svg
            fill="none"
            height="28"
            viewBox="0 0 27 28"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M3.50321 2.47858C3.24177 2.76147 3.09076 3.19373 3.09076 3.75951V23.8266C3.09076 24.3924 3.24177 24.8246 3.51223 25.0962L3.5821 25.1573L14.7792 13.9141V13.6629L3.57308 2.41748L3.50321 2.47858Z"
              fill="#077E94"
              fill-rule="evenodd"
            />
            <path
              clip-rule="evenodd"
              d="M18.5046 17.6731L14.77 13.9232V13.6606L18.5046 9.91064L18.5857 9.96043L23.0033 12.4815C24.2677 13.1967 24.2677 14.378 23.0033 15.1022L18.5857 17.6234L18.5046 17.6731Z"
              fill="#077E94"
              fill-rule="evenodd"
              opacity="0.4"
            />
            <path
              clip-rule="evenodd"
              d="M18.5858 17.6235L14.77 13.792L3.50311 25.1053C3.91556 25.5489 4.60749 25.5987 5.38056 25.1664L18.5858 17.6235Z"
              fill="#077E94"
              fill-rule="evenodd"
              opacity="0.7"
            />
            <path
              clip-rule="evenodd"
              d="M18.5858 9.96036L5.38056 2.4287C4.60749 1.98513 3.91331 2.04623 3.50311 2.4898L14.77 13.7918L18.5858 9.96036Z"
              fill="#077E94"
              fill-rule="evenodd"
              opacity="0.2"
            />
          </svg>
          <div>
            <p class="text-white/60 text-[8.42px] font-normal leading-3">
              {{ $t('expectation.save') }}
            </p>
            <h4 class="text-white text-sm font-bold leading-[15.16px]">
              Google Play
            </h4>
          </div>
        </a>

        <div
          class="w-full h-[100px] bg-gray-200 absolute hidden sm:block"
        ></div>

        <NuxtImg
          alt="qrCode"
          class="hover-image -z-10 size-[140px] hidden sm:block"
          loading="lazy"
          src="/images/expectation/qrCode.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { playMarketLink } from '~/config'
</script>
<style scoped>
.app-container {
  position: relative;
}

.hover-image {
  position: absolute;
  top: -20px; /* Start the image outside the top */
  left: 5%;
  transition: top 0.5s ease, opacity 0.5s ease;
  opacity: 0;
}

.app-container:hover .app:hover ~ .hover-image {
  top: -140px; /* Slide the image down to its normal position */
  opacity: 1;
}
</style>

<template>
  <main>
    <LazySectionsHero />
    <div ref="aboutRef">
      <LazySectionsAbout id="about-section" />
    </div>
    <div ref="peculiarities">
      <LazySectionsFeatures id="peculiarities" />
    </div>
    <LazySectionsStatistics class="md:hidden block mb-10" />
    <LazySectionsExpectation />
    <LazySectionsStatistics class="md:block hidden" />
    <LazySectionsLetterAuth />
    <div ref="downloadRef">
      <LazySectionsDownload id="download-section" />
    </div>
    <LazySectionsReview />
    <div ref="faqRef">
      <LazySectionsFaq id="faq" />
    </div>
    <div ref="contactRef">
      <LazySectionsContact id="contact-section" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useStore } from '~/store/index'

const router = useRouter()
const store = useStore()
const aboutRef = ref<HTMLElement | null>(null)
const downloadRef = ref<HTMLElement | null>(null)
const faqRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)
const peculiarities = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserver | null>(null)

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {})
}

const checkVisibilityOnScroll = () => {
  if (aboutRef.value && isElementInViewport(aboutRef.value)) {
    store.setActiveLink('about-section')
  } else if (peculiarities.value && isElementInViewport(peculiarities.value)) {
    store.setActiveLink('peculiarities')
  } else if (faqRef.value && isElementInViewport(faqRef.value)) {
    store.setActiveLink('faq')
  } else if (contactRef.value && isElementInViewport(contactRef.value)) {
    store.setActiveLink('contact-section')
  }
}

const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

onMounted(() => {
  observer.value = new IntersectionObserver(handleIntersect, {
    threshold: 0.1,
  })

  if (aboutRef.value) observer.value.observe(aboutRef.value)
  if (downloadRef.value) observer.value.observe(downloadRef.value)
  if (faqRef.value) observer.value.observe(faqRef.value)
  if (contactRef.value) observer.value.observe(contactRef.value)

  window.addEventListener('scroll', checkVisibilityOnScroll)
})

onUnmounted(() => {
  if (observer.value) observer.value.disconnect()
  window.removeEventListener('scroll', checkVisibilityOnScroll)
})
</script>

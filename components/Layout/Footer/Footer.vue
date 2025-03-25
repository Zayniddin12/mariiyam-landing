<template>
  <div class="bg-blue-200">
    <LayoutFooterTop :social-links="socialLinks" />
    <LayoutFooterBottom :social-links="socialLinks" />
  </div>
</template>
<script lang="ts" setup>
const socialLinks = ref(null)
const fetchSocial = async () => {
  await useApi()
    .$get('landing/social-media-links/')
    .then((res) => {
      socialLinks.value = res.results
    })
}
fetchSocial()
</script>

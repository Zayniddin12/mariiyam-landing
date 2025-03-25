<template>
  <div
    class="border border-white/20 bg-blue lg:py-14 md:py-8 lg:px-8 md:px-6 rounded-2xl p-6 w-full"
  >
    <div>
      <h2
        class="text-white font-normal leading-130 sm:text-32 text-2xl md:mb-2 mb-1"
      >
        {{ $t('have_question') }}
      </h2>
      <p
        class="text-white/60 sm:text-base text-sm font-normal leading-130 md:mb-5 mb-4"
      >
        {{ $t('have_question_subtitle') }}
      </p>
    </div>
    <client-only>
      <div class="flex flex-col gap-7 lg:mb-11 mb-4">
        <BaseFormGroup :label="$t('full_name')">
          <BaseFormInput
            v-model="form.values.name"
            :error="form.$v.value.name.$error"
            :placeholder="$t('enter_name')"
            maxlength="30"
            type="text"
          />
        </BaseFormGroup>
        <BaseFormGroup :label="$t('phone_number')">
          <BaseFormInput
            v-model="form.values.phone"
            v-maska="'+998 ## ###-##-##'"
            :error="form.$v.value.phone.$error"
            :placeholder="$t('enter_number')"
            type="text"
          />
        </BaseFormGroup>
        <BaseFormGroup :label="$t('message')">
          <BaseFormTextarea
            v-model="form.values.message"
            :error="form.$v.value.message.$error"
            :placeholder="$t('comment')"
            :rows="4"
            type="text"
          />
        </BaseFormGroup>
      </div>
      <form id="form" @submit.prevent="submit">
        <div
          class="flex max-sm:flex-col items-center sm:gap-20 gap-6 md:my-8 sm:justify-between"
        >
          <BaseFormCheckbox
            v-model="form.values.termsCheck"
            :checked="form.values.termsCheck"
            :error="form.$v.value.termsCheck.$error"
            :span="$t('terms_and_conditions')"
          >
            <template #label>
              <i18n-t
                class="xl:text-base text-sm font-normal text-white/60 line-clip-2"
                keypath="register_terms"
                tag="span"
              >
                <template #link>
                  <span>
                    <NuxtLink
                      :to="$route.path + '/page/public-offerta-for-payments'"
                      class="text-white"
                    >
                      {{ $t('terms_and_conditions') }}
                    </NuxtLink>

                    <span> {{ $t('and') }} </span>

                    <NuxtLink
                      :to="$route.path + '/page/static-page-for-registration'"
                      class="text-white"
                    >
                      {{ $t('i_read') }}
                    </NuxtLink>
                  </span>
                </template>
              </i18n-t>
            </template>
          </BaseFormCheckbox>
          <BaseButton
            :disabled="!form.values.termsCheck"
            :loading="loading"
            :text="$t('send')"
            class="py-3 px-6 max-sm:w-full"
            type="submit"
            variant="yellow-bg"
          />
        </div>
      </form>
    </client-only>
    <CommonModal
      :show="show"
      body-class="max-w-[383px] mx-auto"
      no-header
      @close="closeModal"
    >
      <div
        class="py-10 px-8 flex items-center justify-center flex-col gap-4 relative"
      >
        <div
          class="rounded-full cursor-pointer shrink-0 flex-center transition-300 bg-gray-700 active:scale-95 group p-2 absolute top-4 right-4"
          @click="show = false"
        >
          <span
            class="icon-close text-brand-black group-hover:text-red-400 transition-300 text-sm"
          />
        </div>
        <img alt="icon" loading="lazy" src="/images/modalIcon.svg" />
        <h3 class="text-black-100 leading-130 text-center text-2xl">
          {{ $t('validation.successfully_send') }}
        </h3>
        <p class="text-gray text-base font-normal leading-130 text-center">
          {{ $t('validation.successfully_send_subtitle') }}
        </p>
        <BaseButton
          :text="$t('validation.good')"
          class="py-3 px-20"
          variant="yellow-bg"
          @click="show = false"
        />
      </div>
    </CommonModal>
  </div>
</template>
<script lang="ts" setup>
import { required, sameAs } from '@vuelidate/validators'

import { useCustomToast } from '~/composables/useCustomToast'
import { isValidPhone } from '~/utils/common.js'

const show = ref(false)
const { showToast } = useCustomToast()
const { t } = useI18n()
const loading = ref(false)

const form = useForm(
  {
    name: null,
    phone: null,
    termsCheck: false,
    message: null,
  },
  {
    name: { required },
    phone: { required, isValidPhone },
    message: { required },
    termsCheck: { sameAs: sameAs(true) },
  }
)
let phoneNumber = ref('')
const closeModal = () => {
  show.value = false
}

async function submit() {
  form.$v.value.$touch()
  if (!form.$v.value.$invalid) {
    loading.value = true
    phoneNumber = form.values.phone.split('-').join('').split(' ').join('')
    const payload = {
      name: form.values.name,
      phone_number: phoneNumber,
      message: form.values.message,
    }

    try {
    const response=  await fetch('https://rest.yuristhaydarov.uz/form',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(payload)
    })
      show.value = true
      form.$v.value.$reset()
      form.values.name = ''
      form.values.phone = ''
      form.values.message = ''
      form.values.termsCheck = '' // O'zgartirish: 'question' o'rniga 'message'
    } catch (e) {
      showToast(t('validation.form_empty'), 'error')
    } finally {
      loading.value = false
    }
  } else {
    showToast(t('validation.form_empty'), 'error')
  }
}
</script>

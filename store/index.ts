import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    activeLinks: '',
    footerActiveLink: '',
  }),
  actions: {
    setActiveLink(link: string) {
      this.activeLink = link
    },
    setFooterActiveLink(link: string) {
      this.footerActiveLink = link
    },
  },
})

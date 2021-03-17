<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" :badge="count"/>
    <transition name="layout-sidebar">
      <div :class="sidebarClass" @click="onSidebarClick" v-show="isSidebarVisible()">
        <div class="layout-logo">
          <router-link to="/">
            <img alt="Logo" src="@/assets/images/logo.png" width="64" height="64" @click="incrementCount"/>
          </router-link>
        </div>

        <!--        <AppProfile :badge="count"/>-->
        <AppMenu :model="menu" @menuitem-click="onMenuItemClick"/>
      </div>
    </transition>
    <div class="layout-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
// import AppProfile from '@/layout/AppProfile'
import AppMenu from '@/layout/AppMenu'
import AppTopBar from '@/layout/AppTopBar'

export default {
  components: {
    'AppTopBar': AppTopBar,
    // 'AppProfile': AppProfile,
    'AppMenu': AppMenu
  },
  setup() {
    const count = ref(0)
    const incrementCount = () => count.value++

    return {
      count,
      incrementCount
    }
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false
        this.mobileMenuActive = false
      }
      this.menuClick = false
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false
        this.mobileMenuActive = false
      }
    },
    onSidebarClick() {
      this.menuClick = true
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === 'static')
          return !this.staticMenuInactive
        else if (this.layoutMode === 'overlay')
          return this.overlayMenuActive
        else
          return true
      } else {
        return true
      }
    },
    isDesktop() {
      return window.innerWidth > 1024
    },
    onMenuToggle(event) {
      this.menuClick = true
      if (this.isDesktop()) {
        if (this.layoutMode === 'overlay') {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true
          }
          this.overlayMenuActive = !this.overlayMenuActive
          this.mobileMenuActive = false
        } else if (this.layoutMode === 'static') {
          this.staticMenuInactive = !this.staticMenuInactive
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive
      }
      event.preventDefault()
    }
  },
  data() {
    return {
      layoutMode: 'static',
      layoutColorMode: 'dark',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu: [
        {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
        {
          label: 'Menes', icon: 'pi pi-fw pi-sitemap', to: '#',
          items: [
            {label: 'Users', icon: 'pi pi-fw pi-user', to: '/users'}
          ]
        }
      ]
    }
  },
  computed: {
    containerClass() {
      return ['layout-wrapper', {
        'layout-overlay': this.layoutMode === 'overlay',
        'layout-static': this.layoutMode === 'static',
        'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
        'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
        'layout-mobile-sidebar-active': this.mobileMenuActive,
        'p-input-filled': this.$appState.inputStyle === 'filled',
        'p-ripple-disabled': this.$primevue.config.ripple === false
      }]
    },
    sidebarClass() {
      return ['layout-sidebar', {
        'layout-sidebar-dark': this.layoutColorMode === 'dark',
        'layout-sidebar-light': this.layoutColorMode === 'light'
      }]
    },
    logo() {
      return this.layoutColorMode === 'dark'
          ? '@/assets/images/logo.png'
          : '@/assets/images/logo.png'
    }
  }
}
</script>

<style lang="css">

</style>
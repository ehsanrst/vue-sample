<template>
  <div class="layout-menu-container">
    <AppSubmenu :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick"/>
  </div>
</template>

<script>
import AppSubmenu from '@/layout/AppSubmenu'

export default {
  props: {
    model: Array
  },
  components: {
    'AppSubmenu': AppSubmenu
  },
  methods: {
    onMenuItemClick(event) {
      this.$emit('menuitem-click', event)
    }
  }
}
</script>

<style scoped>
</style>
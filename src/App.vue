<template>
  <InputText v-model="text"/>
  <Button class="p-button-info" label="Open Dialog" icon="pi pi-user" @click="openBasic"/>
  <Button class="p-button-success" label="Open Toast" icon="pi pi-envelope"  @click="showToast"/>

  <Toast/>
  <Dialog v-model:visible="display">
    <template #header>
      <h3>You wanna share following content:</h3>
    </template>

    {{ text }}

    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text"/>
      <Button label="Send" icon="pi pi-check" autofocus/>
    </template>
  </Dialog>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useToast} from 'primevue/usetoast'

export default defineComponent({
  setup: function () {
    const toast = useToast()
    const text = ref('')
    const display = ref(false)

    const openBasic = () => {
      display.value = true
    }

    const showToast = () => {
      toast.add({severity: 'success', summary: 'Success Message', detail: text.value, life: 3000})
    }

    return {
      text,
      display,
      openBasic,
      showToast
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

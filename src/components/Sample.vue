<template>
  <InputText v-model="text"/>
  <Button class="p-button-info" label="Open Dialog" icon="pi pi-user" @click="openBasic"/>
  <Button class="p-button-success" label="Open Toast" icon="pi pi-envelope" @click="showToast"/>
  <Chart type="line" :data="basicData"/>

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
    const basicData = ref({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726'
        }
      ]
    })

    const openBasic = () => {
      display.value = true
    }

    const showToast = () => {
      toast.add({severity: 'success', summary: 'Success Message', detail: text.value, life: 3000})
    }

    return {
      text,
      display,
      basicData,
      openBasic,
      showToast
    }
  }
})
</script>

<style>

</style>

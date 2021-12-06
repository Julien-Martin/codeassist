<template>
  <div>
    {{ counter }}
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {
      const counter = ref(0)

      return {
        counter
      }
    }
  })
</script>

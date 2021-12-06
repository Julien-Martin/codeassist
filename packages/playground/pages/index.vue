<template>
  <div>
    {{ counter }}
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from '#imports';

  export default defineComponent({
    setup() {
      const counter = ref(0)

      return {
        counter
      }
    }
  })
</script>

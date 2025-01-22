<template #header>
  <header class="flex justify-between">
    <h1>Welcome to my website!</h1>
    <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
  </header>
</template>

<script>
export default {

}
</script>

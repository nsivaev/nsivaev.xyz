<template #header>
  <header class="flex justify-between">
    <UHorizontalNavigation :links="links" class="flex justify-center border-b border-gray-200 dark:border-gray-800" />
  </header>
</template>

<script setup lang="ts">
const links = [{
  label: 'Главная',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/101824119?v=4'
  },
}, {
  label: 'Обо мне',
  icon: 'i-heroicons-document',
  to: '/getting-started/installation'
}, {
  label: 'Проекты',
  icon: 'i-heroicons-command-line',
  to: '/components/horizontal-navigation'
}, {
  label: 'Контакты',
  icon: 'i-heroicons-link',
  to: '/components/command-palette'
}]
</script>
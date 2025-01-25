<template #header>
  <header class="flex justify-between">
    <UHorizontalNavigation :links="links"
                           class="header__nav hidden md:flex justify-center pb-5 border-b border-gray-200 dark:border-gray-800"/>
    <UVerticalNavigation :links="links" class="md:hidden"/>
  </header>
</template>

<script setup lang="ts">
const links = [{
  label: 'Главная',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/101824119?v=4'
  },
  to: '/'
}, {
  label: 'Обо мне',
  icon: 'i-heroicons-document',
  to: '/about'
}, {
  label: 'Портфолио',
  icon: 'i-heroicons-command-line',
  to: '/portfolio'
}, {
  label: 'Контакты',
  icon: 'i-heroicons-link',
  to: '/contacts'
}]
</script>

<style scoped>
</style>
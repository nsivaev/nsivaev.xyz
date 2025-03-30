<template #header>
  <header class="relative flex justify-between">
    <UHorizontalNavigation :links="links"
                           class="header__nav hidden md:flex justify-center pb-5 border-b border-gray-200 dark:border-gray-800"/>
    <UVerticalNavigation :links="links" class="md:hidden"/>
    <ClientOnly>
      <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          class="absolute right-0"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
const links = [{
  label: 'Я',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/101824119?v=4'
  },
  to: '/'
}, {
  label: 'О себе',
  icon: 'i-heroicons-document',
  to: '/about'
},
//   {
//   label: 'Портфолио',
//   icon: 'i-heroicons-command-line',
//   to: '/portfolio'
// },
  {
  label: 'Контакты',
  icon: 'i-heroicons-link',
  to: '/contacts'
}]

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style scoped>
</style>
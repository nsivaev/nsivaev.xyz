<template>
  <UContainer class="mt-5 mb-5">
    <Header/>
  </UContainer>
  <UContainer>
    <UCard class="mt-5">
      <UContainer>
        <NuxtPage/>
      </UContainer>
    </UCard>
    <UContainer class="mt-5 mb-5 flex gap-3 justify-center">
      <UButton
          to="https://github.com/nsivaev"
          target="_blank"
          icon="grommet-icons:github"
          size="sm"
          color="primary"
          variant="link"
          label="GitHub"
          :trailing="false"
      />
      <UButton
          to="https://linkedin.com/in/nikolai-sivaev-1a35a5348"
          target="_blank"
          icon="grommet-icons:linkedin"
          size="sm"
          color="primary"
          variant="link"
          label="LinkedIn"
          :trailing="false"
      />
      <UButton
          to="mailto:nsivaev77@gmail.com"
          icon="grommet-icons:mail"
          size="sm"
          color="primary"
          variant="link"
          label="Mail"
          :trailing="false"
      />
    </UContainer>
  </UContainer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

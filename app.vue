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
    <UContainer class="mt-5 mb-5 flex gap-3 justify-center" v-if="route.name !== 'contacts'">
      <UButton
          to="https://github.com/nsivaev"
          target="_blank"
          icon="line-md:github-loop"
          size="sm"
          color="primary"
          variant="link"
          label="GitHub"
          :trailing="false"
      />
      <UButton
          to="https://t.me/nsivaev77"
          icon="line-md:telegram"
          target="_blank"
          size="sm"
          color="primary"
          variant="link"
          label="Telegram"
          :trailing="false"
      />
      <UButton
          to="mailto:nsivaev77@gmail.com"
          icon="line-md:email"
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
import { useRoute } from 'vue-router';

const route = useRoute();
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

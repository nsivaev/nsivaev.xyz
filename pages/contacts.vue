<template>
  <div>
    <UContainer class="flex gap-3 justify-center flex-wrap px-0 sm:px-0 lg:px-0">
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
          to="mailto:nsivaev77@gmail.com"
          icon="line-md:email"
          size="sm"
          color="primary"
          variant="link"
          label="Mail"
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
          to="https://linkedin.com/in/nikolai-sivaev-1a35a5348"
          target="_blank"
          icon="line-md:linkedin"
          size="sm"
          color="primary"
          variant="link"
          label="LinkedIn*"
          :trailing="false"
      />
      <UButton
          to="https://www.instagram.com/nsivaev77"
          icon="line-md:instagram"
          target="_blank"
          size="sm"
          color="primary"
          variant="link"
          label="Instagram*"
          :trailing="false"
      />
      <UButton
          to="https://x.com/nsivaev77"
          icon="line-md:twitter-x"
          target="_blank"
          size="sm"
          color="primary"
          variant="link"
          label="X*"
          :trailing="false"
      />
    </UContainer>
    <UContainer class="mt-10">
      * — запрещен на территории РФ
    </UContainer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

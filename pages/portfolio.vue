<template>
  <div>
    <!--plants-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <h2 class="text-center mb-5">
        RS School (2022 — 2023)
      </h2>
      <UContainer class="mb-5 mt-0 px-0 sm:px-0 lg:px-0">
        <UCarousel v-slot="{ item }" :items="plants" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                   arrows>
          <img :src="item" class="w-full object-cover" draggable="false" alt="image"/>
        </UCarousel>
        <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <ULink
              to="https://nsivaev.github.io/plants/"
              target="_blank"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            Plants (2022)
          </ULink>
          <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
            <UButton>HTML</UButton>
            <UButton>CSS</UButton>
            <UButton>JavaScript</UButton>
            <UButton>JSON</UButton>
          </UContainer>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--momentum-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <img class="rounded-lg overflow-hidden" :src="momentum[0]" width="100%" height="300" alt="image"/>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://nsivaev.github.io/momentum/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Momentum (2022)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>HTML</UButton>
          <UButton>CSS</UButton>
          <UButton>JavaScript</UButton>
          <UButton>JSON</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--shelter-->
    <UContainer class="mb-5 mt-0 px-0 sm:px-0 lg:px-0">
      <UCarousel v-slot="{ item }" :items="pets" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                 arrows>
        <img :src="item" class="w-full object-cover" draggable="false" alt="image"/>
      </UCarousel>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://nsivaev.github.io/shelter/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Shelter (2023)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>HTML</UButton>
          <UButton>CSS</UButton>
          <UButton>JavaScript</UButton>
          <UButton>JSON</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--momentum-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <h2 class="text-center mb-5">
        Pet-projects
      </h2>
      <img class="rounded-lg overflow-hidden" :src="sushi[0]" width="100%" height="300" alt="image"/>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://nsivaev.github.io/sushi_cart/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Sushi Cart (2023)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>HTML</UButton>
          <UButton>CSS</UButton>
          <UButton>JavaScript</UButton>
          <UButton>Bootstrap</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--personal-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <UCarousel v-slot="{ item }" :items="personal" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                 arrows>
        <img :src="item" class="w-full object-cover" draggable="false" alt="image"/>
      </UCarousel>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="http://c99569n1.beget.tech/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Personal web-site (2024)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Astro</UButton>
          <UButton>p5.js</UButton>
          <UButton>Canvas</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--comments-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <img class="rounded-lg overflow-hidden" :src="comments[0]" width="100%" height="300" alt="image"/>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://github.com/nsivaev/comments"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Comments (2024)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Vue3</UButton>
          <UButton>LocalStorage</UButton>
          <UButton>Emits</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--scrum-board-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <img class="rounded-lg overflow-hidden" :src="scrum[0]" width="100%" height="300" alt="image"/>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://github.com/nsivaev/scrum-board"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Scrum Board (2025)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Vue3</UButton>
          <UButton>Pinia</UButton>
          <UButton>Router</UButton>
          <UButton>Draggable</UButton>
          <UButton>TypeScript</UButton>
          <UButton>Vercel</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--  legoFace  -->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <UCarousel v-slot="{ item }" :items="legoFace" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                 arrows>
        <img :src="item" class="w-full object-cover object-left" draggable="false" alt="image"/>
      </UCarousel>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://github.com/nsivaev/ironov-frontend-test-task/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          LegoFace (2025)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Vite</UButton>
          <UButton>Vue3</UButton>
          <UButton>Pinia</UButton>
          <UButton>Router</UButton>
          <UButton>html2canvas</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--hackathon-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <h2 class="text-center mb-5">
        Hackathon
      </h2>
      <UCarousel v-slot="{ item }" :items="hackathon" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                 arrows>
        <img :src="item" class="w-full object-cover object-left" draggable="false" alt="image"/>
      </UCarousel>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://github.com/nsivaev/design-code-dev"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Design code (2023)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Vue3</UButton>
          <UButton>JavaScript</UButton>
          <UButton>Axios</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <!--studio-->
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <h2 class="text-center mb-5">
        Digital-Studio
      </h2>
      <UCarousel v-slot="{ item }" :items="dominant" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                 arrows>
        <img :src="item" class="w-full object-cover object-left" draggable="false" alt="image"/>
      </UCarousel>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://dominant34.ru/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Dominant (2023 — 2024)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Laravel</UButton>
          <UButton>TypeScript</UButton>
          <UButton>SCSS</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <img class="rounded-lg overflow-hidden" :src="globchemical[0]" width="100%" height="300" alt="image"/>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://globchemical.com/ustojchivoe-razvitie/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Globchemical (2024)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Legacy</UButton>
          <UButton>PHP</UButton>
          <UButton>CSS Animation</UButton>
          <UButton>JavaScript Animation</UButton>
          <UButton>SVG</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <UCarousel v-slot="{ item }" :items="prodvizgenie" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                 arrows>
        <img :src="item" class="w-full object-cover object-left" draggable="false" alt="image"/>
      </UCarousel>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://prodvizgenie.ru/intensive/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Intensive (2024)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Astro</UButton>
          <UButton>TypeScript</UButton>
          <UButton>SCSS</UButton>
          <UButton>Animation</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
    <UContainer class="mb-10 mt-0 px-0 sm:px-0 lg:px-0">
      <UCarousel v-slot="{ item }" :items="marhouse" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                 arrows>
        <img :src="item" class="w-full object-cover object-left" draggable="false" alt="image"/>
      </UCarousel>
      <UContainer class="mb-2 mt-2 px-0 sm:px-0 lg:px-0">
        <ULink
            to="https://marhouse.ru/"
            target="_blank"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          Marhouse (2024)
        </ULink>
        <UContainer class="flex flex-wrap gap-3 mb-2 mt-2 px-0 sm:px-0 lg:px-0">
          <UButton>Laravel</UButton>
          <UButton>TypeScript</UButton>
          <UButton>SCSS</UButton>
          <UButton>Yandex Map API</UButton>
        </UContainer>
      </UContainer>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const plants = [
  '/images/plants/plants1.webp',
  '/images/plants/plants2.webp',
  '/images/plants/plants3.webp',
  '/images/plants/plants4.webp'
]

const momentum = [
  '/images/momentum/momentum.webp'
]

const pets = [
  '/images/pets/pets1.webp',
  '/images/pets/pets2.webp',
  '/images/pets/pets3.webp',
  '/images/pets/pets4.webp'
]

const personal = [
  '/images/personal/personal1.webp',
  '/images/personal/personal2.webp',
]

const sushi = [
  '/images/sushi/sushi.webp'
]

const scrum = [
  '/images/scrum-board/scrum-board.webp'
]

const comments = [
  '/images/comments/comments.webp'
]

const hackathon = [
  '/images/hackathon/hackathon1.webp',
  '/images/hackathon/hackathon2.webp',
  '/images/hackathon/hackathon3.webp',
  '/images/hackathon/hackathon4.webp'
]

// studio
const dominant = [
  '/images/dominant/dominant1.webp',
  '/images/dominant/dominant2.webp',
  '/images/dominant/dominant3.webp',
  '/images/dominant/dominant4.webp',
  '/images/dominant/dominant5.webp',
  '/images/dominant/dominant6.webp'
]

const globchemical = [
  '/images/globchemical/globchemical.webp'
]

const prodvizgenie = [
  '/images/prodvizgenie/prodvizgenie1.webp',
  '/images/prodvizgenie/prodvizgenie2.webp',
  '/images/prodvizgenie/prodvizgenie3.webp'
]

const marhouse = [
  '/images/mar-house/mar-house1.webp',
  '/images/mar-house/mar-house2.webp',
  '/images/mar-house/mar-house3.webp'
]

const legoFace = [
    '/images/lego-face/lego-face1.webp',
    '/images/lego-face/lego-face2.webp',
    '/images/lego-face/lego-face3.webp',
]
</script>

<style scoped>

</style>

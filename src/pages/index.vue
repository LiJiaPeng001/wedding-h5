<script lang="ts" setup>
import TypeIt from '~/utils/typeit'
import bg from '~/assets/bg.webp'

const title = '申明辉 & 孟冰冰'
</script>

<template>
  <div h-100vh overflow-hidden>
    <div cover fixed left-0 top-0 h-full w-full scale-110 :style="{ backgroundImage: `url(${bg})` }" />
    <div fixed left-0 top-0 h-full w-full backdrop-blur-6 />
    <div relative z-9>
      <TypeIt :values="[title]" :cursor="false" :speed="150" />
    </div>
  </div>
</template>

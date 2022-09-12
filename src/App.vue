<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import rawdata from './assets/data.json'
const records = ref(rawdata)
</script>

<template>
  <div class="container">
    <div class="logo">🍜</div>
    <h1>Justin 請我吃 100 元拉麵</h1>
    <pre>{{records}}</pre>
  </div>
</template>

<style scoped lang="sass">
.container
  width: min(100vw,960px)
  margin: 0 auto

.logo
  font-size: 128px
  margin: 16px 0
  margin-top: 128px
  text-align: center
  &+h1
    text-align: center
</style>

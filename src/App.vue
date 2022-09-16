<script setup>
import { ref } from 'vue'
import records from './assets/data.json'
import Header from './components/header.vue'
import Dashboard from './components/dashboard.vue'
</script>

<template>
  <div class="container">
    <Header />
    <Dashboard />
    <footer>
      上次更新：{{ new Date(records.lastUpdate).toLocaleString() }}
      <br />
      Developed by <a href="https://gnehs.net" target="_blank">可愛勝勝寶寶</a> | <a
        href="https://github.com/gnehs/Justin-Ramen" target="_blank">GitHub</a> | <a
        href="https://ramen.justinlin.tw/data.json" target="_blank">原始資料</a>
    </footer>
  </div>
</template>

<style lang="sass">
\:root
  --border-radius: 8px
  // color
  --text-color: #333
  --background-color: #f2f2f2
  --secondary-color: #fff
  --progress-color: #ddd
// dark mode
@media (prefers-color-scheme: dark)
  \:root
    --text-color: #fff
    --background-color: #333
    --secondary-color: #222
    --progress-color: #555
body
  background-color: var(--background-color)
  color: var(--text-color)
  line-height: 1.5
.container
  width: min(calc(100vw - 32px),960px)
  margin: 0 auto
  font-family: 'Roboto Condensed', 'Noto Sans TC', sans-serif
footer
  font-size: 14px
  opacity: .75
  text-align: center
  margin: 16px 0
  a
    color: var(--text-color)
    padding: 4px 4px
    border-radius: 4px
    display: inline-block
    transition: all .2s ease
    &:hover
      background: var(--progress-color)
      text-decoration: none
    &:active
      transform: scale(.95)
</style>

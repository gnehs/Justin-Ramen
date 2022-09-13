<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import rawdata from './assets/data.json'
import chart from './components/chart.vue'
const records = ref(rawdata)
const todayTitle = ref('今日點數')
if (rawdata.data.at(-1).date.split('-').slice(2, 3) != new Date().getDate()) {
  todayTitle.value = '昨日點數'
}
const progress = Math.round((rawdata.total / 300) * 10000) / 100
</script>

<template>
  <div class="container">
    <div class="logo">🍜</div>
    <h1>Justin 請我吃 100 元拉麵</h1>
    <p>賈斯丁寶寶要在三週內在麵屋雞金集 300 點換只有他有的獎品<br />
      為了達成目標他會請大家吃便宜拉麵 <br />
      <a class="join-btn" href="https://t.me/+a77vjN4OlDkyZjVl" target="_blank">加入 Telegram 群組</a>
    </p>

    <div class="progress-container">
      <div class="start">
        <img src="/avatar.jpg" />
      </div>
      <div class="progress-bar" :style="{'--progress' : `${progress}%`}"></div>
      <div class="end">🎁</div>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="title">{{ todayTitle }}</div>
        <div class="value">{{ records.data.at(-1).value }}</div>
      </div>
      <div class="stat">
        <div class="title">累計點數</div>
        <div class="value">{{ records.total }}</div>
      </div>
      <div class="stat">
        <div class="title">剩餘點數</div>
        <div class="value">{{ 300 - records.total }}</div>
      </div>
      <div class="stat">
        <div class="title">達成率</div>
        <div class="value">{{ progress }}%</div>
      </div>
    </div>
    <div class="stat" style="padding-bottom: 0;">
      <div class="title">點數紀錄</div>
      <div class="value">
        <chart />
      </div>
    </div>
    <footer>
      Developed by <a href="https://gnehs.net" target="_blank">可愛勝勝寶寶</a> | <a
        href="https://github.com/gnehs/Justin-Ramen" target="_blank">GitHub</a> | <a
        href="https://ramen.justinlin.tw/data.json" target="_blank">原始資料</a>
    </footer>
  </div>
</template>

<style lang="sass">
\:root
  --text-color: #333
  --background-color: #fff
  --progress-color: #ddd
// dark mode
@media (prefers-color-scheme: dark)
  \:root
    --text-color: #fff
    --background-color: #333
    --progress-color: #555
body
  background-color: var(--background-color)
  color: var(--text-color)
.container
  width: min(calc(100vw - 20px),960px)
  margin: 0 auto
  font-family: 'Roboto Condensed', 'Noto Sans TC', sans-serif
.logo
  font-size: 128px
  margin-top: 128px
  margin-bottom: 8px
  text-align: center
  position: relative
  &:before
    content: '拉麵'
    font-family: 'Noto Serif TC', serif
    font-weight: 700
    font-size: 96px
    line-height: 128px
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    z-index: -1
    opacity: .25
  @media (max-width: 768px)
    margin-top: 64px
  &+h1
    text-align: center
    margin-top: 0
    font-family: 'Noto Serif TC', serif
    &+p
      text-align: center
      margin-top: 0
      line-height: 1.5
.join-btn
  margin-top: 16px
  display: inline-block
  background-color: var(--background-color)
  border: 2px solid rgba(51, 178, 223, 0.85)
  padding: 8px 16px
  border-radius: 100em
  text-decoration: none
  color: rgba(51, 178, 223, 1)
  &:hover
    background-color: rgba(51, 178, 223, 0.85)
    color: var(--background-color)
.stats
  display: grid
  grid-template-columns: repeat(4,1fr)
  gap: 16px
  margin: 16px 0
  @media (max-width: 768px)
    grid-template-columns: repeat(2,1fr)
.stat
  border: 1px solid var(--progress-color)
  border-radius: 8px
  padding: 16px
  .title
    color: var(--text-color)
    font-size: 16px
    opacity: .75
  .value
    font-size: 32px
.progress-container
  --size: 24px
  display: flex
  align-items: center
  gap: 8px
  width: min(512px,100%)
  margin: 32px auto
  .start
    img
      height: var(--size)
      width: var(--size)
      border-radius: 50%
      display: block
  .end
    font-size: var(--size)
    line-height: 1
  .progress-bar
    height: var(--size)
    background: linear-gradient(to right, var(--text-color) var(--progress), var(--progress-color) var(--progress))
    border-radius: calc(var(--size) / 2)
    position: relative
    flex: 1
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

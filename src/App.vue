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
</script>

<template>
  <div class="container">
    <div class="logo">🍜</div>
    <h1>Justin 請我吃 100 元拉麵</h1>
    <p>賈斯丁寶寶要在三週內在麵屋雞金集 300 點換只有他有的獎品，為了達成目標他會請大家吃便宜拉麵</p>
    <div class="stats">
      <div class="stat">
        <div class="title">{{todayTitle}}</div>
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
        <div class="value">{{ Math.round((records.total / 300) * 10000) / 100 }}%</div>
      </div>
    </div>
    <div class="stat" v-if="records.data.length>1">
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
      margin-bottom: 32px
      line-height: 1.5
.stats
  display: grid
  grid-template-columns: repeat(4,1fr)
  gap: 16px
  margin-bottom: 16px
  @media (max-width: 768px)
    grid-template-columns: repeat(2,1fr)
.stat
  border: 1px solid #ddd
  border-radius: 16px
  padding: 16px
  .title
    color: #000
    font-size: 16px
    opacity: .75
  .value
    font-size: 32px
footer
  font-size: 14px
  opacity: .75
  text-align: center
  margin: 16px 0
  a
    color: #333
    padding: 4px 4px
    border-radius: 4px
    display: inline-block
    transition: all .2s ease
    &:hover
      background: rgba(0,0,0,.1)
      text-decoration: none
    &:active
      transform: scale(.95)

</style>

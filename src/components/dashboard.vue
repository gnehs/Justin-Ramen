<script setup>
import { ref } from 'vue'
import records from '../assets/data.json'
import chart from '@/components/chart.vue'
import ConfettiExplosion from '@/components/confettiExplosion.vue'
const todayTitle = ref('今日點數')
if (records.data.at(-1).date.split('-').slice(2, 3) != new Date().getDate()) {
  todayTitle.value = '昨日點數'
}
const progress = Math.round((records.total / 300) * 10000) / 100
const expectedProgress = ref(0)
const expectedPoints = ref(0)
function calcExpectedPoints() {
  const start = new Date('2022-09-12 00:08:00')
  const now = new Date()
  expectedPoints.value = Math.min(Math.floor(((now - start) / 1000) * (300 / 21 / 86400) * 10000) / 10000, 300)
  expectedProgress.value = Math.round((expectedPoints.value / 300) * 10000) / 100
}
calcExpectedPoints()
setInterval(calcExpectedPoints, 605)
</script>
<template>
  <transition name="fade-out">
    <ConfettiExplosion v-if="records.total>=300" :duration="4500" :force="0.75" />
  </transition>
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
      <div class="title">預期點數</div>
      <div class="value">{{ expectedPoints }}</div>
    </div>
    <div class="stat">
      <div class="title">達成率</div>
      <div class="value">{{ progress }}%</div>
    </div>
    <div class="stat">
      <div class="title">預期達成率</div>
      <div class="value">{{ expectedProgress }}%</div>
    </div>
  </div>
  <div class="stat">
    <div class="progress-container">
      <div class="start">
        <img src="/avatar.jpg" />
      </div>
      <div class="progress-bar" :style="{'--progress' : `${progress}%`}"></div>
      <div class="end">🎁</div>
    </div>
  </div>
  <div class="stat" style="padding-bottom: 0;">
    <div class="title">點數紀錄</div>
    <div class="value">
      <chart />
    </div>
  </div>
</template>

<style lang="sass">
.stats
  display: grid
  grid-template-columns: repeat(3,1fr)
  gap: 16px
  margin: 16px 0
  @media (max-width: 768px)
    grid-template-columns: repeat(2,1fr)
  .stat
    margin: 0
.stat
  border-radius: var(--border-radius)
  padding: 16px
  background-color: var(--secondary-color)
  margin: 16px 0
  line-height: 1
  .title
    color: var(--text-color)
    font-size: 16px
    opacity: .75
    margin-bottom: 8px
  .value
    font-size: 32px
    font-weight: 300
.progress-container
  --size: 24px
  display: flex
  align-items: center
  gap: 8px
  width: 100%
  .start
    img
      height: var(--size)
      width: var(--size)
      border-radius: 50%
      display: block
      animation: poyon 0.5s infinite
  .end
    font-size: var(--size)
    line-height: 1
  .progress-bar
    height: var(--size)
    background: linear-gradient(to right, var(--text-color) var(--progress), var(--progress-color) var(--progress))
    border-radius: calc(var(--size) / 2)
    position: relative
    flex: 1
@keyframes poyon
  0%,100%
    transform: scale(1, 1)
  25%
    transform: scale(0.9, 1.1)
  50%
    transform: scale(1.1, 0.9)
  75%
    transform: scale(0.95, 1.05)


// fade-out
.fade-out-leave-to
  opacity: 0
.fade-out-leave-active
  transition: opacity 0.5s ease
</style>

<template>

  <header>

    <div class="logo">🍜</div>
    <h1>Justin 請我吃 100 元拉麵</h1>
    <p>賈斯丁寶寶要在三週內在麵屋雞金集 300 點換只有他有的獎品<br />
      為了達成目標他會請大家吃便宜拉麵 <br />
      <!-- <a class="join-btn" href="https://t.me/+a77vjN4OlDkyZjVl" target="_blank">加入 Telegram 群組</a> -->
    </p>
  </header>

</template>

<style lang="sass">
header
  background-color: var(--secondary-color)
  padding: 16px
  border-radius: var(--border-radius)
  margin-top: 16px
  .logo
    font-size: 128px
    margin-bottom: 8px
    text-align: center
    position: relative
    transform-style: preserve-3d
    line-height: 1
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
      opacity: .25
      transform: translateZ(-1px)
  h1
    text-align: center
    margin-top: 0
    font-family: 'Noto Serif TC', serif
    letter-spacing: 0.02em
    line-height: 1
  p
    text-align: center
    margin: 0
  .join-btn
    margin-top: 16px
    display: inline-block
    border: 2px solid rgba(51, 178, 223, 1)
    padding: 8px 16px
    border-radius: 100em
    text-decoration: none
    color: rgba(51, 178, 223, 1)
    &:hover
      background-color: rgba(51, 178, 223, 1)
      color: var(--background-color)
</style>

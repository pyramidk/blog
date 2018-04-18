<template lang="pug">
  div.blog__home
    div(
      ref="videoContainer"
      class="blog__home-video"
    )
      video(
        ref="video"
        autoPlay
        muted
        loop
        src="/static/night.mp4"
      )
    div.blog__home-container
      div.blog__home-title {{ title }}
      span.blog__home-line
      div.blog__home-intro
        span(
          v-for="(item, index) in introduction"
          class="blog__home-intro-line"
          :key="index"
          @click="setVideoDimensions"
        ) {{ item }}
</template>

<style lang="stylus" scoped>
  .blog__home
    height 100%
    width 100%
    display table
    text-align center
    color white
  .blog__home-video
    position relative
    width 100%
    height 100%
    overflow hidden
  .blog__home-container
    display table-cell
    vertical-align middle
  .blog__home:after
    content ''
    display block
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #000
    opacity .5
    z-index -1
  .blog__home-title
    font-size 40px
  .blog__home-line
    display block
    margin 25px 0 15px
  .blog__home-line:before
    height 20px
    content ''
    display block
    margin 0 auto
    width 1px
    background-color: #fff
    opacity .5
  .blog__home-intro-line
    display block
    margin 10px 0
  video
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>

<script>
import * as aTypes from '@/store/action-types'

export default {
  data () {
    return {
      title: 'Hello Summer',
      introduction: [
        'Récit d’une traversée en mer',
        'réalisée depuis le sud de la Bretagne',
        'jusquau soleil des Canaries'
      ]
    }
  },
  computed: {
    data () {
      return this.$store.state.blog.data
    }
  },
  mounted () {
    this.$store.dispatch(aTypes.GET_BLOG)
    this.$nextTick(() => {
      this.setVideoDimensions()
      window.onresize = () => {
        this.setVideoDimensions()
      }
    })
  },
  methods: {
    setVideoDimensions () {
      const videoWidth = this.$refs.video.videoWidth
      const videoHeight = this.$refs.video.videoHeight
      const videoRatio = (videoWidth / videoHeight).toFixed(2)

      const containerStyles = window.getComputedStyle(this.$refs.videoContainer)
      const minWidth = parseInt(containerStyles.getPropertyValue('width'))
      const minHeight = parseInt(containerStyles.getPropertyValue('height'))

      const widthRatio = minWidth / videoWidth
      const heightRatio = minHeight / videoHeight

      let newWidth, newHeight
      if (widthRatio > heightRatio) {
        newWidth = minWidth
        newHeight = Math.ceil(newWidth / videoRatio)
      } else {
        newHeight = minHeight
        newWidth = Math.ceil(newHeight * videoRatio)
      }

      this.$refs.video.style.width = newWidth + 'px'
      this.$refs.video.style.height = newHeight + 'px'

    }
  }
}
</script>

<style scoped>
</style>

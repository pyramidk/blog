<template lang="pug">
    div(
      ref="videoContainer"
      class="video-container"
    )
      video(
        ref="video"
        class="video"
        autoPlay
        muted
        loop
        src="/static/night.mp4"
      )
      div(
        v-show="videoLoaded"
        class="video-cover"
      )
      div.video-overlay
      div.video-content
        slot(name="content")
</template>

<style lang="stylus" scoped>
  .video-container
    position relative
    width 100%
    height 100%
    overflow hidden
    box-sizing border-box
  .video
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    object-fit cover // fix video全屏时的白边
  .video-cover
    position absolute
    width 100%
    height 100%
    background url('/static/video_cover.jpg') no-repeat
    background-size cover
    background-position center
  .video-overlay
    position absolute
    top 0
    left 0
    right  0
    bottom 0
    background rgba(0, 0, 0, 0.5)
  .video-content
    position relative
    text-align center
    color white
    top: 50%
    transform translateY(-50%)
</style>

<script>

export default {
  data () {
    return {
      videoLoaded: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.video.onloadedmetadata = this.setVideoDimensions
      this.$refs.video.oncanplay = () => {
        if (this.videoLoaded) this.videoLoaded = false
      }
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

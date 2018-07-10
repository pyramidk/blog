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
    object-fit cover // fix the white space around video when fullscreen
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
import Video from '@/common/video'

export default {
  data () {
    return {
      videoLoaded: true,
      videoObject: null
    }
  },
  mounted () {
    this.videoObject = new Video({
      container: this.$refs.videoContainer,
      video: this.$refs.video
    })
    this.videoObject.init()
    this.$nextTick(() => {
      // create video instance when the video loaded
      this.$refs.video.onloadedmetadata = () => {
        this.videoObject.update()
      }
      this.$refs.video.oncanplay = () => {
        if (this.videoLoaded) this.videoLoaded = false
      }
      window.onresize = () => {
        this.videoObject.update()
      }
    })
  },
  methods: {
  }
}
</script>

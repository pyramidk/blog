<template lang="pug">
  div.blog__video
    Video
      template(slot="content")
        div {{ title }}
</template>

<style lang="stylus" scoped>
  .blog__video
    height 100%
    width 100%
</style>

<script>
import Video from '@/components/common/Video'

export default {
  components: {
    Video
  },
  data () {
    return {
      title: 'Hello Summer'
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

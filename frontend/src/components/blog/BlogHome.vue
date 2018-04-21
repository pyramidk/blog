<template lang="pug">
  div.blog__home
    Video
      template(slot="content")
        div {{ title }}
</template>

<style lang="stylus" scoped>
  .blog__home
    height 100%
    width 100%
</style>

<script>
// import * as aTypes from '@/store/action-types'
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
    // this.$store.dispatch(aTypes.GET_BLOG)
  },
  methods: {
  }
}
</script>

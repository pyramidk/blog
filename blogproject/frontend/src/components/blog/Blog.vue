<template lang="pug">
  div.blog
    Sidebar(
      :sidebarItems="collapseData"
    )
    div.blog__wrapper
      BlogContent
</template>

<style lang="stylus" scoped>
  .blog
    width 100%
    height 100%
  .blog__wrapper
    height 100%
    margin-left 301px
    background #f0f0f0
</style>

<script>
import mixins from '@/components/blog/mixins'
import Sidebar from '@/components/blog/Sidebar'
import BlogContent from '@/components/blog/BlogContent'

export default {
  mixins: [mixins],
  components: {
    Sidebar,
    BlogContent
  },
  data () {
    return {
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

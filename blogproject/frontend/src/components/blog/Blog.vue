<template lang="pug">
  div.blog
    Sidebar
    div.blog_wrapper
      BlogContent
</template>

<style lang="stylus" scoped>
  .blog
    width 100%
    height 100%
  .blog_wrapper
    height 100%
    margin-left 301px
    background #f0f0f0
</style>

<script>
import Sidebar from './Sidebar'
import BlogContent from './BlogContent'
export default {
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

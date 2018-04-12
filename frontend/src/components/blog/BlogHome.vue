<template lang="pug">
  div.blog__home
    h1.blog__home-title 首页样式
    span.blog__home-line
    div.blog__home-intro
      span(
        class="home-intro-line"
      ) Récit d’une traversée en mer
      span(
        class="home-intro-line"
      ) Récit d’une traversée en mer
</template>

<style lang="stylus" scoped>
  .blog__home
    text-align center
    color white
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
    z-index 2
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
</style>

<script>
import * as aTypes from '@/store/action-types'

export default {
  data () {
    return {
    }
  },
  computed: {
    data () {
      return this.$store.state.blog.data
    }
  },
  mounted () {
    this.$store.dispatch(aTypes.GET_BLOG)
  }
}
</script>

<style scoped>
</style>

<template lang="pug">
  div.blog__home
    div.blog__home-title {{ title }}
    span.blog__home-line
    div.blog__home-intro
      span(
        v-for="(item, index) in introduction"
        class="blog__home-intro-line"
        :key="index"
      ) {{ item }}
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
    z-index -1
  .blog__home-title
  .blog__home-line:before
    height 40px
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
  }
}
</script>

<style scoped>
</style>

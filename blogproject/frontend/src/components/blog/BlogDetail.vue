<template lang="pug">
  div.blog__detail
    div(
      class="blog__detail-contatiner markdown-body"
    )
      div.blog__detail-title {{ blogData.title }}
      div.blog__detail-meta {{ blogData.created_time }}
      div.blog__detail-content
        VueMarkdown(
          :source="blogData.body"
        )
</template>

<style lang="stylus" scoped>
  .blog__detail-contatiner
    max-width 700px
    margin 0 auto
    padding 60px 30px 50px
  .blog__detail-title
    margin-bottom 45px
    font-size 26px
    font-weight 400
    letter-spacing 1px
    color #444
    text-align center
  .blog__detail-meta
    margin-bottom 30px
    font-size 13px
    color #999
    letter-spacing 1px
    text-align center
  .blog__detail-content
    font-weight 400
    font-size 16px
    color #666
    word-spacing 1px
    h2
      font-weight 400
</style>

<style lang="stylus">
  .blog__detail-content
    h2
      font-weight 400
    blockquote
      margin 2em 0
      padding-left 15px
      border-left 5px solid #e6e6e6
    p
      margin 1em 0 1.5em
      color #666
      font-weight 400
      font-size 16px
      word-spacing 1px
      text-align left
      max-width 100%
      overflow hidden
    a
      color #3db8c1
      cursor pointer
      text-decoration none
    strong
      font-weight 700
      font-size 15px
</style>

<script>
import mixins from '@/components/blog/mixins'
import VueMarkdown from 'vue-markdown'
import * as aTypes from '@/store/action-types'

export default {
  mixins: [mixins],
  components: {
    VueMarkdown
  },
  data () {
    return {
    }
  },
  computed: {
    blogData () {
      return this.$store.state.blog.blogData
    },
    blogId () {
      return this.$route.params.id
    }
  },
  mounted () {
    this.$store.dispatch(aTypes.GET_BLOG, {
      blogId: this.blogId
    })
  },
  methods: {
  }
}
</script>

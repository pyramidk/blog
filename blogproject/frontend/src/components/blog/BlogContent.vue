
<template lang="pug">
  div.blog__content-padding
    div.blog__content
      div(
        v-for="item in blogs"
        class="blog__content-item"
        :key="item.id"
      )
        img(
          class="blog__content-item-img"
          :src="item.img"
        )
        div.blog__content-item-info
          div.blog__content-item-title {{ item.title }}
          div.blog__content-item-tag {{ item.created_time }}
          div.blog__content-item-brief {{ item.article_intro }}
          div(
            class="blog__content-item-more"
            @click="continueRead(item.id)"
          ) Continue Reading
</template>

<style lang="stylus" scoped>
  .blog__content-padding
    padding 60px 35px
    background #f0f0f0
  .blog__content
    width 100%
  .blog__content-item
    width 300px
    margin 0 17px 40px
    background #fff
  .blog__content-item-img
    display block
    width 100%
  .blog__content-item-info
    padding 32px 40px 40px
  .blog__content-item-title
    margin-bottom 12px
    font-size 22px
    font-weight bold
  .blog__content-item-tag
    margin-bottom 12px
    font-size 14px
  .blog__content-item-brief
    line-height 26px
    color #777
    font-size 14px
  .blog__content-item-more
    margin-top 15px
</style>

<script>
import Masonry from 'masonry-layout'
import * as aTypes from '@/store/action-types'

export default {
  mounted () {
    this.$store.dispatch(aTypes.GET_BLOG_LIST)
      .then(() => {
        return new Masonry('.blog__content', {
          itemSelector: '.blog__content-item'
        })
      })
  },
  computed: {
    blogs () {
      return this.$store.state.blog.blogs
    }
  },
  methods: {
    continueRead (blogId) {
      this.$router.push({
        path: `/detail/${blogId}`
      })
      this.$store.dispatch(aTypes.GET_BLOG, { blogId })
    }
  }

}
</script>

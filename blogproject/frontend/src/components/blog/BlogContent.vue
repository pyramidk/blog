
<template lang="pug">
  div.blog__content-padding
    div.blog__content
      div.blog__content-item
        img(
          class="blog__content-item-img"
          src="https://victorthemes.com/themes/seil/wp-content/uploads/2017/06/post1.png"
        )
        div.blog__content-item-info
          div.blog__content-item-title Wooden House
          div.blog__content-item-tag Music -July 5, 2017
          div.blog__content-item-brief Podcasting operational change the main management inside of workflows  super  framework.
          div(
            class="blog__content-item-more"
            @click="continueRead"
          ) Continue Reading
      div.blog__content-item
        img(
          class="blog__content-item-img"
          src="https://victorthemes.com/themes/seil/wp-content/uploads/2017/06/post16.png"
        )
        div.blog__content-item-info
          div.blog__content-item-title Wooden House
          div.blog__content-item-tag Music -July 5, 2017
          div.blog__content-item-brief Podcasting operational change the main management inside of workflows  super  framework.
          div.blog__content-item-more Continue Readin
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
export default {
  mounted () {
    const a = new Masonry('.blog__content', {
      itemSelector: '.blog__content-item'
    })
    console.log(a)
  },
  methods: {
    continueRead () {
      this.$router.push({
        path: '/detail/1'
      })
    }
  }

}
</script>

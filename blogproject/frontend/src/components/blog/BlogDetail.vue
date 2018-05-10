<template lang="pug">
  div.blog__detail
    Sidebar(
      :sidebarItems="collapseData"
    )
    div.blog__detail-contatiner
      div.blog__detail-title New Trendy Music of The Year
      div.blog__detail-meta lifeStyle-Apr 06, 2017
      div.blog__detail-content 内容
</template>

<style lang="stylus" scoped>
  .blog__detail-contatiner
    margin-left 301px
    padding 60px 35px 80px
  .blog__detail-title
    font-size 30px
    font-weight bold
    text-align center
  .blog__detail-meta
    margin-top 10px
    text-align center
</style>

<script>
import mixins from '@/components/blog/mixins'
import Sidebar from '@/components/blog/Sidebar'
export default {
  mixins: [mixins],
  components: {
    Sidebar
  },
  data () {
    return {
    }
  }
}
</script>

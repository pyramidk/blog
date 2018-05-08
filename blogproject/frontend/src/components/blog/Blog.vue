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
import Sidebar from './Sidebar'
import BlogContent from './BlogContent'
export default {
  components: {
    Sidebar,
    BlogContent
  },
  data () {
    return {
      collapseData: [{
        title: 'Categories',
        name: '1',
        isCollapse: true,
        collapseItems: [{
          text: 'Culture'
        }, {
          text: 'Video'
        }]
      }, {
        title: 'PostTypes',
        name: '2',
        isCollapse: true,
        collapseItems: [{
          text: 'Qute'
        }, {
          text: 'Music'
        }]
      }]
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

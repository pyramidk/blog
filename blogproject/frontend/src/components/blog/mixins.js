export default {
  data () {
    return {
    }
  },
  computed: {
    state () {
      return this.$store.state.blog
    },
    tags () {
      return this.state.tags
    },
    categories () {
      return this.state.categories
    },
    collapseData () {
      return [{
        title: '分类',
        name: '1',
        isCollapse: true,
        collapseItems: this.categories
      }, {
        title: '标签',
        name: '2',
        isCollapse: true,
        collapseItems: this.tags
      }]
    }
  }
}

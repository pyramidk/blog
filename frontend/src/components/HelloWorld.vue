<template lang="pug">
  span {{ data }}
</template>

<script>
import * as aTypes from '@/store/action-types'

export default {
  name: 'HelloWorld',
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

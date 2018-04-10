<template>
  <div>{{ data }}</div>
</template>

<script>
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
  }
}
</script>

<style scoped>
</style>

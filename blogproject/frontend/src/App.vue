<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  body, html
    height 100%
    font-family 'montserratregular',"Helvetica Neue",Helvetica,Arial,sans-serif
  #app
    height 100%
</style>

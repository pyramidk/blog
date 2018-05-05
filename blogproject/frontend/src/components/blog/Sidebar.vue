
<template lang="pug">
  div.siderbar
    div.siderbar-title pyramid
    div.siderbar-navigation
      div.siderbar-navigation-item Home
      div.siderbar-navigation-item Categories
      div.siderbar-navigation-item Post Types
    div.siderbar-footer © 2018 Pyra All Rights Reserved.
</template>

<style lang="stylus" scoped>
  .siderbar
    position fixed
    top: 0
    left 0
    width 220px
    height 100%
    padding  60px 40px 0
    font-family 'Josefin Sans", Arial, sans-serif'
    color #777
    border-right 1px solid #f0f0f0
  .siderbar-navigation
    margin-top 90px
  .siderbar-navigation-item
    margin-bottom 25px
  .siderbar-footer
    position fixed
    bottom 40px
    font-size 14px
    letter-spacing 0.3px
</style>

<script>
export default {

}
</script>

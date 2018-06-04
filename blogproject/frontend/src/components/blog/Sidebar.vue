
<template lang="pug">
  div.siderbar
    img(
      class="siderbar-logo"
      src="/static/logo.PNG"
    )
    div.siderbar-navigation
      div.siderbar-navigation-item
      div(
        v-for="item in sidebarItems"
        class="siderbar-navigation-item"
        :key="item.name"
      )
        Collapse(
          v-if="item.isCollapse"
          :title="item.title"
        )
          template(slot="items")
            div.siderbar-navigation-subitem
              span(
                v-for="cItem in item.collapseItems"
                :key="cItem.text"
              ) {{ cItem.text }}
    div.siderbar-footer © 2018 Pyramidk
</template>

<style lang="stylus" scoped>
  .siderbar
    position fixed
    top: 0
    left 0
    width 220px
    height 100%
    padding  60px 40px 0
    border-right 1px solid #f0f0f0
  .siderbar-navigation
    margin-top 90px
  .siderbar-navigation-item
    margin-bottom 25px
    color #777
    cursor pointer
    &:hover
      color #000
  .siderbar-navigation-subitem
    padding 15px 0 0 9px
    font-size 15px
    span
      display block
      line-height 26px
      color #777
      cursor pointer
      &:hover
        color #000
  .siderbar-footer
    position fixed
    bottom 40px
    font-size 14px
    letter-spacing 0.3px
</style>

<script>
import Collapse from '@/components/common/Collapse'

export default {
  props: {
    sidebarItems: {
      type: Array,
      default: () => { return [] }
    }
  },
  components: {
    Collapse
  }
}
</script>

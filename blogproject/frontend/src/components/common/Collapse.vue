<template lang="pug">
  div(class="collapse-container")
    div(
      class="collapse-controller"
      :class="{ isActive: 'active' }"
      @click="toggle"
    ) {{ title }}
    transition(
      name="collapse",
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
      @afterLeave="afterLeave"
    )
      div(
        v-if="isActive"
        class="collapse-item-wrapper"
      )
        slot(name="items")
</template>

<style lang="stylus" scoped>
  .collapse-controller
    height 20px
  .collapse-item-wrapper
    overflow-y hidden
    transition 0.3s height ease-in-out
</style>

<script>

export default {
  props: {
    title: [String, Number]
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    },
    beforeEnter (el) {
      el.style.height = 0 + 'px'
    },
    enter (el, done) {
      // el.offsetHeight: force repaint
      el.style.height = 'auto'
      const endWidth = window.getComputedStyle(el).height
      el.style.height = '0px'
      el.offsetHeight // eslint-disable-line
      el.style.height = endWidth
      done()
    },
    leave (el) {
      el.offsetHeight // eslint-disable-line
      el.style.height = '0px'
    },
    afterLeave (el) {
      el.style.height = null
    }
  },
  mounted () {
  }
}

</script>

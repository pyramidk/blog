import Vue from 'vue'
import Vuex from 'vuex'
import blog from './module/blog'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    blog
  },
  strict: debug
})

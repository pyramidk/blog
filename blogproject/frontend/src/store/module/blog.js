import axios from 'axios'
import * as aTypes from '@/store/action-types'
import * as mTypes from '@/store/mutation-types'

const state = {
  data: 'store data',
  blogData: []
}

const actions = {
  [aTypes.GET_BLOG] ({ commit }) {
    axios.get('/api/list').then(res => {
      commit(mTypes.SET_BLOG_DETAIL, { res })
    })
  }
}

const mutations = {
  [mTypes.SET_BLOG_DETAIL] (state, { res }) {
    state.blogData = res.data
  }
}

export default {
  state,
  actions,
  mutations
}

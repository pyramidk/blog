import axios from 'axios'
import * as aTypes from '@/store/action-types'
import * as mTypes from '@/store/mutation-types'

const state = {
  data: 'store data',
  blogs: [],
  blogData: {}
}

const actions = {
  [aTypes.GET_BLOG_LIST] ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get('/api/list/')
        if (res.status !== 200) return
        commit(mTypes.SET_BLOGS, { blogs: res.data })
        resolve()
      } catch (err) {
        reject(err)
      } finally {
      }
    })
  },
  [aTypes.GET_BLOG] ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get('/api/list/4')
        if (res.status !== 200) return
        commit(mTypes.SET_BLOG_DETAIL, { data: res.data })
      } catch (err) {
        reject(err)
      } finally {
      }
    })
    /* axios.get('/api/list/4').then(res => {
      console.log(res)
      commit(mTypes.SET_BLOG_DETAIL, { res })
    }) */
  }
}

const mutations = {
  [mTypes.SET_BLOGS] (state, { blogs }) {
    state.blogs = blogs
  },
  [mTypes.SET_BLOG_DETAIL] (state, { data }) {
    state.blogData = data
  }
}

export default {
  state,
  actions,
  mutations
}

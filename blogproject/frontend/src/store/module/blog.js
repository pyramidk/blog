import axios from 'axios'
import * as aTypes from '@/store/action-types'
import * as mTypes from '@/store/mutation-types'

const state = {
  data: 'store data',
  blogs: [],
  tags: [],
  categories: [],
  blogData: {},
  loading: true
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
  [aTypes.GET_BLOG] ({ commit }, { blogId }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`/api/list/${blogId}`)
        if (res.status !== 200) return
        commit(mTypes.SET_BLOG_DETAIL, { data: res.data })
        resolve()
      } catch (err) {
        reject(err)
      } finally {
      }
    })
    /* axios.get('/api/list/4').then(res => {
      console.log(res)
      commit(mTypes.SET_BLOG_DETAIL, { res })
    }) */
  },
  [aTypes.GET_BLOG_TAGS] ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`/api/tags`)
        if (res.status !== 200) return
        commit(mTypes.SET_BLOG_TAGS, { tags: res.data })
        resolve()
      } catch (err) {
        reject(err)
      } finally {
      }
    })
  },
  [aTypes.GET_BLOG_CATEGORIES] ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`/api/categories`)
        if (res.status !== 200) return
        commit(mTypes.SET_BLOG_CATEGORIES, { categories: res.data })
        resolve()
      } catch (err) {
        reject(err)
      } finally {
      }
    })
  },
  [aTypes.GET_ALL_CONTENT_DATA] ({ commit, dispatch }) {
    const tagPromise = dispatch(aTypes.GET_BLOG_TAGS)
    const catPromise = dispatch(aTypes.GET_BLOG_CATEGORIES)
    const blogPromise = dispatch(aTypes.GET_BLOG_LIST)

    Promise.all([
      tagPromise,
      catPromise,
      blogPromise
    ]).then(() => {
      commit(mTypes.SET_LOADING, { loading: true })
    })
  }
}

const mutations = {
  [mTypes.SET_BLOGS] (state, { blogs }) {
    state.blogs = blogs
  },
  [mTypes.SET_BLOG_DETAIL] (state, { data }) {
    state.blogData = data
  },
  [mTypes.SET_BLOG_TAGS] (state, { tags }) {
    state.tags = tags
  },
  [mTypes.SET_BLOG_CATEGORIES] (state, { categories }) {
    state.categories = categories
  },
  [mTypes.SET_LOADING] (state, { loading }) {
    state.loading = loading
  }
}

export default {
  state,
  actions,
  mutations
}

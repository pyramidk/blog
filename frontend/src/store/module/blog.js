import axios from 'axios'
import * as aTypes from '@/store/action-types'

const state = {
  data: 'store data'
}

const actions = {
  [aTypes.GET_BLOG] (state) {
    axios.get('/api/list').then(res => {
      console.log(res)
    })
  }
}

const mutations = {

}

export default {
  state,
  actions,
  mutations
}

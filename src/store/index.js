import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gallery:[]
  },
  mutations: {
    setGallery (state, payload){
      state.gallery = payload
    }
  },
  actions: {
    fetchGallery(context){
      axios({
        method: 'get',
        url: '/galleries',
      })
        .then(({ data }) => {
          context.commit('setGallery', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})

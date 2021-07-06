import { getCatalog } from '../services/catalogService'

const state = () => ({
  catalog: []
})

const mutations = {
  SET_CATALOG(state, payload) {
    state.catalog = payload
  }
}

const actions = {
  async fetchCatalog({ commit }) {
    try {
      const catalog = await getCatalog()
      commit("SET_CATALOG", catalog)
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  catalog: ({ catalog }) => catalog
}

export default {
  state,
  mutations,
  actions,
  getters
}


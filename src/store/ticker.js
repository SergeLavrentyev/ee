import { getTicker } from '../services/tickerService'

const state = () => ({
  tickers: []
})

const mutations = {
  SET_TICKER(state, payload) {
    state.tickers = payload
  }
}

const actions = {
  async fetchTickers({ commit }) {
    try {
      const tickers = await getTicker()
      commit("SET_TICKER", tickers)
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  tickers: ({ tickers }) => tickers
}

export default {
  state,
  mutations,
  actions,
  getters
}


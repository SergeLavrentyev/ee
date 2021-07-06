import { createStore } from 'vuex'

import ticker from './ticker'
import catalog from './catalog'
import cart from './cart'
import auth from './auth'

export default createStore({
  modules: {
    auth,
    cart,
    catalog,
    ticker,
  }
})

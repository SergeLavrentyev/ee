import { request } from './genericService'

const getTicker = () => request({ url: 'tickers', method: 'get' })

export {
  getTicker
}
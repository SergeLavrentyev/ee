import { request } from './genericService'

const getCatalog = () => request({ url: 'catalog', method: 'get' })

export {
  getCatalog
}
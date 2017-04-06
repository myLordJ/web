import trae from 'trae'
import { EventEmitter } from 'events'

class API extends EventEmitter {

  constructor() {
    super()

    trae.defaults({
      baseUrl: 'http://localhost:3007/api'
    })

    trae.before((config) => {
      this.emit('trae-before', {})
      return config
    })

    trae.after((res) => {
      this.emit('trae-success', res)
      return Promise.resolve(res)
    }, (err) => {
      this.emit('trae-error', err)
      return Promise.reject(err)
    })

    trae.finally(() => {
      this.emit('trae-finally')
    })
  }

  get(path, opts = {}) {
    return trae.get(path, opts)
  }

  post(path, opts = {}) {
    return trae.post(path, opts)
  }

  put(path, opts = {}) {
    return trae.put(path, opts)
  }

  del(path, opts = {}) {
    return trae.del(path, opts)
  }
}

export default new API()

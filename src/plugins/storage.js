import Storage from 'x2-service-storage'

const storage = {}

storage.install = (Vue) => {
  Vue.prototype.$storage = new Storage()
}

export default storage

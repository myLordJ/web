import api from 'services/rac-api'

const showService = {}

showService.query = function(params) {
  return api.get(`/show`, { params })
    .then(res => res.data)
}

showService.getById = function(id) {
  return api.get(`/show/${id}`)
    .then(res => res.data)
}

showService.getCurrent = function() {
  return api.get(`/show/current`)
    .then(res => res.data)
}

showService.getRandom = function(limit) {
  return api.get(`/show/random`, { limit })
    .then(res => res.data)
}

export default showService

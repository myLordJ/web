import api from 'services/rac-api'

const podcastService = {}

podcastService.query = function(params = {}) {
  params.state = 'published'
  return api.get(`/podcast`, { params })
    .then(res => res.data)
}

podcastService.getByType = function(type, params) {
  return api.get(`/podcast/${type}`, { params })
    .then(res => res.data)
}

podcastService.getById = function(id) {
  return api.get(`/podcast/${id}`)
    .then(res => res.data)
}

export default podcastService

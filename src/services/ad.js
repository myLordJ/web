import api from 'services/rac-api'

const adService = {}

adService.getByPlace = function(type) {
  return api.get(`/ad/${type}`)
    .then(res => res.data)
}

export default adService

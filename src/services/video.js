import api from 'services/rac-api'

const videoService = {}

videoService.getRandom = function() {
  return api.get(`/video/random`)
    .then(res => res.data)
}

export default videoService

import api from 'services/rac-api'

const instagramService = {}

instagramService.getPost = function(url) {
  return api.get(`/instagram/post`)
    .then(res => res.data)
}

export default instagramService

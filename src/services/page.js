import api from 'services/rac-api'

const pageService = {}

pageService.getByKey = function(key) {
  return api.get(`/page/full/${key}`)
    .then(res => res.data)
}

export default pageService

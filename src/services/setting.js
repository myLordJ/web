import api from 'services/rac-api'

const settingService = {}

settingService.getByKey = function(key) {
  return api.get(`/setting/${key}`)
    .then(res => res.data)
}

export default settingService

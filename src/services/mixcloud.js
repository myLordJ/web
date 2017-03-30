import trae from 'trae'

const mixcloud = {}

mixcloud.getCloudcasts = function () {
  const path = 'http://api.mixcloud.com/radioalacalle/cloudcasts?limit=100'
  return trae.get(path, {
    headers: { 'Content-Type': 'application/json' }
  })
}

export default mixcloud

import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (value, format) => {
  const date = moment(value)

  if (!date.isValid()) { return value }

  return date.format(format)
})

Vue.filter('fromNow', value => moment(value).fromNow())

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueStorage from 'plugins/storage'

import App from 'components/App'

import { visible, invisible } from './directives/visible'
import './filters/date'

import routes from 'routes'

Vue.use(VueStorage)
Vue.use(VueRouter)
Vue.directive('v', visible)
Vue.directive('i', invisible)

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  el: 'app',
  render: h => h(App),
  router
})

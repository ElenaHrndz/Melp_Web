import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

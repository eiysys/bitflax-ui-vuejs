import Vue from 'vue'
import axios from 'axios';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes.js';
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource'
import VueQriously from 'vue-qriously'
import moment from 'moment'
import VueClipboard from 'vue-clipboard2'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})

Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(VueQriously);
Vue.use(VueClipboard);

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.prototype.apiURL = "http://35.177.76.135:36115/api";
// Vue.prototype.apiURL = "https://api.bitflax.io/api";
Vue.prototype.MySECRET = 'BitFlexSecret#9876543#$%^&*()'


// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

const router = new VueRouter({
  routes: Routes,
  hashbang: false,
  mode: 'history',
  // linkActiveClass: 'active',
  // transitionOnLoad: true,
  root: '/'
});


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

export const HTTP = axios.create({
  baseURL: `http://35.177.76.135:36115/api`,
  headers: {
    // Authorization: userInfo.userAccessToken
  }
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false
Vue.use(Buefy)

const firebaseConfig = {
  apiKey: 'AIzaSyA9jqN6JpT7fm7mTW9rlyf65xMVqyRF8KU',
  authDomain: 'omgproject-29df3.firebaseapp.com',
  databaseURL: 'https://omgproject-29df3.firebaseio.com',
  projectId: 'omgproject-29df3',
  storageBucket: 'omgproject-29df3.appspot.com',
  messagingSenderId: '118108171064',
  appId: '1:118108171064:web:695e48951c56b40a6fefcd'
}
firebase.initializeApp(firebaseConfig);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
})

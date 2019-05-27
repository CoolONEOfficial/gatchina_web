import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from "vuetify";
import ImageUploader from 'vue-image-upload-resize'
import * as LocationPicker from 'vue2-location-picker'

Vue.config.productionTip = false
Vue.component('google-map', VueGoogleMaps.Map);
Vue.component('google-marker', VueGoogleMaps.Marker);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCfJL6I2U6R9vm26LKG4b8GXRzCMB-L8CY',
    libraries: 'places',
  },
});
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(LocationPicker);
Vue.use(ImageUploader);
Vue.use(require('vue-moment'));
Vue.use(Vuetify, {
  iconfont: 'fa'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
if(this.$store.getters.AUTH != null)
  router.push('/news');

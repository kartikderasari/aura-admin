import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from './config/firebase'
import './style.css';
import VueChatScroll from 'vue-chat-scroll';

Vue.config.productionTip = false;

Vue.use(VueChatScroll);

firebase.auth.onAuthStateChanged(()=>{
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app');
});

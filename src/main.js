import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { i18n } from "@/locales/i18n";
import store from "./store";

import '@/assets/css/common.css'

Vue.config.productionTip = false

export const func = {
   urlSplit: function () {
       var urlGubun = 'dev';
       if(location.host.indexOf('localhost')==-1){
           urlGubun = (location.host.replace('-reboot.cyworld.com',''));
       }
       return urlGubun;
   },
   postMessage: function (action,arg1) {
       // eslint-disable-next-line no-unused-vars
      /* global nativeHandler */
      var ua = navigator.userAgent || navigator.vendor || navigator.opera;
      ua = ua.toLowerCase();
      var jsonObject = {"method":action};
      if(arg1!=undefined){
          jsonObject['arg1'] =arg1;
      }
      console.log('postMessage.jsonObject',jsonObject);

      try {
          if (ua.indexOf("android") > -1) {
            //Android
            window.nativeHandler.postMessage(JSON.stringify(jsonObject));
          }
          else if(ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1){
                //iOS
              window.webkit.messageHandlers.nativeHandler.postMessage(JSON.stringify(jsonObject));
          } else {
                return true;
          }
      } catch(e){
          console.log(e.message);
      }
   }
}
Vue.prototype.$func = func
new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App),
  data: function() {
    return {
      count: 1,
    };
  },
  components: {
      methods: {
        increaseCount: function() {
          this.count++;
        }

      }
  }
}).$mount('#app')


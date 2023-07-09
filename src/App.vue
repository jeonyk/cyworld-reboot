<template>
  <v-app :class="{ isMobile : isMobile }">
    <CustomThemeProvider>
      <router-view :key="$route.fullPath"/>
    </CustomThemeProvider>
  </v-app>
</template>

<script>
import CustomThemeProvider from './ThemeProvider.vue'
import "./styles/mobile/global-styles"


export default {
  name: 'App',
  created: function() {
      //토큰 받기
    var urlCheck = false;
    if(['/AJ-agree','/AI-findid','/AP-findpw-01','/AP-findpw','/AP-findpw','/COM-verisuccess1'].indexOf(location.pathname)>-1){
      urlCheck=true;
    }
    if(urlCheck==false){
      if(!this.$func.postMessage("getToken")){
        window.onGetToken = this.onGetToken
      }
    }
    this.onCheckDevice();
  },
  methods: {
    onGetToken(jsonData) {
      this.$store.dispatch('auth/onGetToken',jsonData).then(() => {

      });
    },
    onCheckDevice() {
      let ua = navigator.userAgent || navigator.vendor || navigator.opera;
      ua = ua.toLowerCase();
      let isMobile = ua.indexOf('android') >-1 || ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1;
      this.isMobile = isMobile;
    }
  },
  components: {
    CustomThemeProvider,
  },

  data: function() {
    return {
      isMobile: false,
    };
  },
};
</script>

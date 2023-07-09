<template>
  <StyledHeader id="header" :prev="prev" :close="close" :isDesktop="isDesktop">
    <v-btn
      class="btn_prev ir"
      fab
      depressed
      @click="onPrevClick"
    >prev</v-btn>
    <v-btn
      class="btn_close ir"
      fab
      @click="onCloseClick"
    >close</v-btn>
  </StyledHeader>
</template>

<script>
import styled, { css } from 'vue-styled-components';

const props = [ 'prev', 'close' ];

const StyledHeader = styled('header', props)`
  ${({ theme }) => {

  var ua = navigator.userAgent || navigator.vendor || navigator.opera;
  ua = ua.toLowerCase();
  var isMobile = ua.indexOf('android') >-1 || ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1;

    const { Space } = theme;
    return css`
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 56px;
      z-index: 10;
      background-color: #fff;
      ${!isMobile && css`
          display: none !important;
      `}
      ${props => props.prev && css`
        .btn_prev {
          display: block !important;
        }
      `}
      ${props => props.close && css`
        .btn_close {
          display: block !important;
        }
      `}

      ${Space};
    `;
  }}
`;

export default {
  props: [ 'prev', 'close' ],
  components: {
    StyledHeader,
  },
  created: function() {
    let tokenExpiredTime = new Date(localStorage.getItem('tokenExpiredTime'))
    let nowTime = new Date()
    // console.log('토큰유효기간', localStorage.getItem('tokenExpiredTime'))
    // console.log('tokenExpiredTime.getTime()', tokenExpiredTime.getTime())
    // console.log('email', this.$store.getters.email)
    // console.log('sid', this.$store.getters.sid)
    // console.log('publicEncKey', this.$store.getters.publicEncKey)
    if(localStorage.getItem('user') || this.$store.getters.email){
      if(tokenExpiredTime.getTime() < nowTime.getTime()){
        // console.log('만료되었음 재발급 실행')
        // this.$store.dispatch('auth/refreshToken', { email: this.$store.getters.email, sid: this.$store.getters.sid, publicEncKey: this.$store.getters.publicEncKey });
      }else{
        // console.log('만료아님')
      }
    }else{
      // console.log('로그아웃 상태')
    }
    // console.log('user :::: ', localStorage.getItem('user'))
  },
  methods: {
    onCloseClick() {
      this.$func.postMessage("confirmClose");
      //this.$emit('closeClick')
    },
    onPrevClick() {
      this.$emit('prevClick')
    }
  }, data() {
    console.log('>>>>>>>>>>',this.$store.getters.isDesktop)
    return {
      isDesktop : this.$store.getters.isDesktop
    }
  }

}
</script>

<style lang="scss">
#header{
  .btn_prev{
    display: none;
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    background: url("/img/svg/ico_back.svg") no-repeat 50% /24px;
    box-shadow: none;

    &:hover::before{
      opacity: 0;
    }
    &:focus::before{
      opacity: 0;
    }

    @media (hover: hover) { // pc에서만 적용
      &:hover::before{
        color: rgb(243, 107, 43, 1);
        opacity: 0.04;
      }
      &:focus::before{
        color: rgb(243, 107, 43, 1);
        opacity: 0.12;
      }
    }
    .v-ripple__animation{
      color: rgba(243, 107, 43, 1);
    }
  }

  .btn_close{
    display: none;
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    background: url("/img/svg/ico_close_modal.svg") no-repeat 50% /24px;
    box-shadow: none;
    &:hover::before{
      opacity: 0;
    }
    &:focus::before{
      opacity: 0;
    }

    @media (hover: hover) { // pc에서만 적용
      &:hover::before{
        color: rgb(243, 107, 43, 1);
        opacity: 0.04;
      }
      &:focus::before{
        color: rgb(243, 107, 43, 1);
        opacity: 0.12;
      }
    }
    .v-ripple__animation{
      color: rgba(243, 107, 43, 1);
    }
  }
}
</style>

<template>
  <v-btn
    icon
    class="styledIcoBtn"
    :small="small"
    :large="large"
    :x-large="xlarge"
    @click="onClick"
    :color="color"
    v-bind="attrs"
    v-on="on"
  >
    <v-icon class="ir">
      {{ value }}
    </v-icon>
  </v-btn>
</template>


<script>
export default {
  props: {
    value: String,
    small: Boolean,
    large: Boolean,
    xlarge: Boolean,
    color: String,
    attrs: null,
    on: null,
  },
  data () {
    return {
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>


<style lang="scss">
.styledIcoBtn{
  &::before{
    display: none;
  }
  transition: background-color 0.3s;

  /* color : default */
  background-color: transparent;
  
  /* color : hover, focus, active */
  &:hover, &:focus, &:active {
    background-color: #eee;
  }
  
  /* color : cy */
  &.cy--text{
    &:hover, &:focus, &:active {
      background-color: rgba(243, 107, 43, 0.08);
    }
  }
  /* color : cy_blue */
  &.cy_blue--text{
    &:hover, &:focus, &:active {
      background-color: rgba(18, 159, 206, 0.04);
    }
  }
  /* color : cy_gray */
  &.cy_gray--text{
    &:hover, &:focus, &:active {
      background-color: #eee;
    }
  }

  /* size : default 36x36 */
  &.v-btn--icon.v-size--default{
    border-radius: 18px;
  }

  /* size : large 44x44 */
  &.v-btn--icon.v-size--large{
    border-radius: 16px;
  }

  &.ico_favorite{
    .v-icon{
      background: url('/img/svg/ico_favorite.svg') no-repeat 50% 50% /24px;
    }
    &.on{
      .v-icon{ 
        background: url('/img/svg/ico_favorite_on.svg') no-repeat 50% 50% /24px;
      }
    }
    &.mh{
      background: #F6F6F6;
      border-radius: 16px;
    }
  }
  &.ico_pin{
    .v-icon{
      background: url('/img/svg/ico_pin.svg') no-repeat 50% 50% /44px;
    }
    &.on{
      .v-icon{
        background: url('/img/svg/ico_pin_on.svg') no-repeat 50% 50% /44px;
      }
    }
  }
  &.ico_refresh{
    .v-icon{
      background: url('/img/svg/ico_refresh.svg') no-repeat 50% 50% /24px;
    }
  }
   &.ico_close_modal{
     border-radius: 16px;
     background-color: #f6f6f6;
    .v-icon{
      background: url('/img/svg/ico_close_modal.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_hompy{
    .v-icon{
      background: url('/img/svg/ico_hompy.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_play{
    .v-icon{
      background: url('/img/svg/ico_play.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_stop{
    .v-icon{
      background: url('/img/svg/ico_stop.svg') no-repeat 50% 50% /24px;
    }
  }  
  &.ico_picture{
    background: #F6F6F6;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 3px 3px rgba(0, 0, 0, 0.03);
    .v-icon{
      background: url('/img/svg/ico_picture.svg') no-repeat 50% 50% /18px;
      width: 18px;
      height: 18px;
    }
  }
  &.ico_setting{
    background: #F6F6F6;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_setting.svg') no-repeat 50% 50% /20px;
      width: 20px;
      height: 20px;
    }
  }
  &.ico_new_window{
    background: #F6F6F6;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_new_window.svg') no-repeat 50% 50% /17px;
      width: 17px;
      height: 17px;
    }
  }
  &.ico_more{
    background: #F6F6F6;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_more_white.svg') no-repeat 50% 50% /44px;
      width: 44px;
      height: 44px;
    }
  }
  &.ico_more_inherit{
    background: inherit;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_more_white.svg') no-repeat 50% 50% /44px;
      width: 44px;
      height: 44px;
    }
    &:hover::before{
      opacity: 0;
    }
  }
  &.ico_add{
    background: #F6F6F6;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_add.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_zoomout{
    background: #F6F6F6;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_zoomout.svg') no-repeat 50% 50% /24px;
      width: 24px;
      height: 24px;
    }
  }
  &.ico_zoomin{
    background: #F6F6F6;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_zoomin.svg') no-repeat 50% 50% /24px;
      width: 24px;
      height: 24px;
    }
  }

  &.ico_back_arrow{
    background: #F6F6F6;
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_back_arrow.svg') no-repeat 50% 50% /20px;
      width: 20px;
      height: 16.4px;
    }
  }
  /* 미니홈피 사진첩 */
  &.ico_gallery_grid3{
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_gallery_grid3.svg') no-repeat 50% 50% /24px;
      width: 44px;
      height: 44px;
    }
    &.v-btn--icon.v-size--default{
      width: 44px;
      height: 44px;
    }
  }
  
  &.ico_gallery_grid5{
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_gallery_grid5.svg') no-repeat 50% 50% /18px;
      width: 44px;
      height: 44px;
    }
    &.v-btn--icon.v-size--default{
      width: 44px;
      height: 44px;
    }
  }

    &.ico_gallery_grid5-1{
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_gallery_grid5-1.svg') no-repeat 50% 50% /18px;
      width: 44px;
      height: 44px;
    }
    &.v-btn--icon.v-size--default{
      width: 44px;
      height: 44px;
    }
  }
/* 미니홈피 리스트 공통 */ 
  &.ico_list{
    border-radius: 16px;
    .v-icon{
      background: url('/img/svg/ico_menu.svg') no-repeat 50% 50% /16px;
      width: 44px;
      height: 44px;
    }
    &.v-btn--icon.v-size--default{
      width: 44px;
      height: 44px;
    }
  }

  /* 미니홈피 BGM */
  &.ico_bgm_list{
    .v-icon{
      background: url('/img/svg/ico_bgm_list.svg') no-repeat 50% 50% /21px;
    }
  }
  &.ico_bgm_repeat{
    .v-icon{
      background: url('/img/svg/ico_bgm_repeat.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_bgm_repeat_on_one{
    .v-icon{
      background: url('/img/svg/ico_bgm_repeat_on_one.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_bgm_repeat_on_all{
    .v-icon{
      background: url('/img/svg/ico_bgm_repeat_on_all.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_bgm_prev{
    .v-icon{
      background: url('/img/svg/ico_bgm_prev.svg') no-repeat 50% 50% /36px;
    }
  }
  &.ico_bgm_play{
    .v-icon{
      background: url('/img/svg/ico_bgm_play.svg') no-repeat 50% 50% /36px;
    }
  }
  &.ico_bgm_stop{
    .v-icon{
      background: url('/img/svg/ico_bgm_stop.svg') no-repeat 50% 50% /36px;
    }
  }
  &.ico_bgm_next{
    .v-icon{
      background: url('/img/svg/ico_bgm_next.svg') no-repeat 50% 50% /36px;
    }
  }
  &.ico_bgm_random{
    .v-icon{
      background: url('/img/svg/ico_bgm_random.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_bgm_random_on{
    .v-icon{
      background: url('/img/svg/ico_bgm_random_on.svg') no-repeat 50% 50% /24px;
    }
  }

  &.ico_video_play{
    width: 70px;
    height: 70px;
    background-color: #fff;
    .v-icon{
      background: url('/img/svg/ico_play.svg') no-repeat 50% 50% /44px;
    }
  }
  &.ico_video_stop{
    width: 70px;
    height: 70px;
    background-color: #fff;
    .v-icon{
      background: url('/img/svg/ico_stop.svg') no-repeat 50% 50% /44px;
    }
  }
  &.ico_video_volume_on{
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.4);
    .v-icon{
      background: url('/img/svg/ico_video_volume_on.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_video_volume_off{
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.4);
    &::before{
      border-radius: 16px;
    }
    .v-icon{
      background: url('/img/svg/ico_video_volume_off.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_album_prev{
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.4);
    &::before{
      border-radius: 16px;
    }
    .v-icon{
      background: url('/img/svg/ico_back_white.svg') no-repeat 50% 50% /24px;
    }
  }
  &.ico_album_next{
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.4);
    &::before{
      border-radius: 16px;
    }
    .v-icon{
      background: url('/img/svg/ico_next_white.svg') no-repeat 4px 50% /24px;
    }
  }
  // footer
  &.ico_apple{
    .v-icon{
      background: url('/img/svg/ico_apple.svg') no-repeat 50% 50% /16px;
    }
  }
  &.ico_android{
    .v-icon{
      background: url('/img/svg/ico_android.svg') no-repeat 7px 50% /15px;
    }
  }
}

</style>
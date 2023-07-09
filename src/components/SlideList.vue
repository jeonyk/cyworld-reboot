<template>
  <div>
    <!-- navigation -->
    <div class="navi_slide">
      <div class="swiper-btn-prev" :class="{disabled: prevBtnState}" @click="prevSlide"></div>
      <div class="swiper-btn-next" :class="{disabled: nextBtnState}" @click="nextSlide"></div>
    </div>
    
    <!-- swiper-slide -->
    <swiper class="swiper" ref="hashSwiper" :options="options" @slideChange="slideChangeTransitionStart">
      <slot name="slideItems"></slot>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);
import {Swiper} from 'vue-awesome-swiper'

export default {
  props: {
    total: Number,
  },
  components: {
    Swiper,
  },
  data() {
    return {
      prevBtnState: true,
      nextBtnState: false,
      options: {
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 0,
        navigation: {
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    prevSlide() {
      // console.log('prev');
      this.swiper.slidePrev();
    },
    nextSlide() {
      // console.log('next');
      this.swiper.slideNext();
    },
    slideChangeTransitionStart() {
      // console.log(this.swiper.activeIndex); //현재 index값 얻기
      if(this.total <= this.swiper.activeIndex) {
        this.nextBtnState = true;
      } else {
        this.nextBtnState = false;
      }

      if(this.swiper.activeIndex === 5) {
        this.prevBtnState = true;
      } else {
        this.prevBtnState = false;
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.hashSwiper.$swiper;
    }
  },
  mounted() {
    // console.log(this.total);
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }

}
</script>

<style lang="scss">
 .navi_slide{
  position: absolute;
  right: 0px;
  top: 0;
  display: inline-flex;
  
  .swiper-btn-prev, .swiper-btn-next{
    overflow: hidden;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    width: 36px;
    height: 36px;
    margin: 0 0 0 8px;
    &::after{
      display: none;
    }
    background-color: #fff;
    &.swiper-button-disabled, &.disabled{
      opacity: 0.35;
      cursor: auto;
      pointer-events: none;
    }
  }

  .swiper-btn-prev{
    background: url('/img/svg/ico_add_prev.svg') no-repeat 0 0 / 36px;
    &:hover{
      background-image: url('/img/svg/ico_add_prev_on.svg');
    }
  }
  .swiper-btn-next{
    background: url('/img/svg/ico_add_next.svg') no-repeat 0 0 / 36px;
    &:hover{
      background-image: url('/img/svg/ico_add_next_on.svg');
    }
  }
}
  
</style>
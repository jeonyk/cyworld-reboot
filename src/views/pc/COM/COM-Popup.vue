<template>
  <Wrap>
    <Header />
    <Container>
      <Aside class="left">
        <AsideInner class="inner_aside">
          <Profile />
        </AsideInner>
      </Aside>
      <Main>
        
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>

    <Alert cardClass="modalpopup" :open="popup" max-width="400">
      <template v-slot:dialog-text>
        <NoticePopup>
          <swiper class="swiper" ref="albumSwiper" 
            :options="swiperOptions" 
            @slideChange="slideChangeTransitionStart"
          >

            <swiper-slide>
              <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
            </swiper-slide>
            
            <!-- pagination -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

          <div class="btn_area">
            <Button value="오늘 하루 보지 않기" color="gray" class="btn_today" large text></Button>
            <Button value="닫기" color="gray" class="btn_close" large text></Button>
          </div>
        </NoticePopup>
      </template>      
    </Alert>

  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Music from '@/views/pc/aside/Music.vue';
import Friends from '@/views/pc/aside/Friends.vue';
// import IconButton from '@/components/IconButton.vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MAlist from '@/styles/pc/MA/MA-list';

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...AlertStyle,
    Header,
    Profile,
    Music,
    Friends,
    // IconButton,
    Alert,
    Button,
    ...MAlist,
    Swiper,
		SwiperSlide,
  },
  data(){
    return {
      popup: true,
      swiperOptions: {
        // loop: true,
        // autoplay:{
        //   delay:5000
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // type: 'fraction'
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },                    
      },
    }
  },
  methods: {
    slideChangeTransitionStart() {
      // console.log(this.swiper.activeIndex); //현재 index값 얻기
    }
  },
  computed: {
    swiper() {
      return this.$refs.albumSwiper.$swiper;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
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
        <Section>
          <H2 class="title_page">싸이생활</H2>

          <FriendsToday class="friends_today">
            <H3>오늘의 추천 친구</H3>
            
              <SlideGroup domID="today_r_f" max-width="740" pagesize="6">
              <template v-slot:f-slide-group>
                
                  <ListFriendsToday id="today_r_f">
                  <li v-for="k in 61" :key="k">
                    <router-link to="">
                      <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                      <span class="name">아이유러브{{k}}</span>
                    </router-link>
                  </li>
                  </ListFriendsToday>
                
              </template>
              
            </SlideGroup>
           
              
              
            
          </FriendsToday>
          
          <Tab class="styled_tab web" mt="40">
            <template v-slot:v-tab>
              <v-tab>일촌</v-tab>
              <v-tab>즐겨찾기</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
                <FriendsBest>
                  <ListFriendsBest>
                    <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag update">UPDATE</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                   <li class="grayscale">
                     <p class="flag sleep">SLEEP</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                  </ListFriendsBest>
                </FriendsBest>
              </v-tab-item>
              <v-tab-item transition="false">
                <FriendsBest>
                  <ListFriendsBest>
                    <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag update">UPDATE</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                   <li class="grayscale">
                     <p class="flag sleep">SLEEP</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                  </ListFriendsBest>
                </FriendsBest>
              </v-tab-item>
            </template>
          </Tab>
          
           

        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>
    <Footer></Footer>

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
import Header from '@/views/publish/pc/includes/Header.vue';
import Footer from '@/views/publish/pc/includes/Footer.vue';
import Profile from '@/views/publish/pc/aside/Profile.vue';
import Tab from '@/components/Tab.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import SlideGroup from '@/components/pc/SlideGroup.vue';
import Alert from '@/components/Alert.vue';
import AlertStyle from '@/styles/pc/common/Alert.js';
import Button from '@/components/Button.vue';

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
    Footer,
    Profile,
    Tab,
    SlideGroup,
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
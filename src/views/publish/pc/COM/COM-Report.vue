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
          <Brithday />
          <News />
        </AsideInner>
      </Aside>

       
      <Alert cardClass="modalpopup" :open="popup" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>
            <h4 class="title_modal">신고하기</h4>
            <ul class="lst_func">
              <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close()" /></li>
            </ul>
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text>
            <SubTitle>
              <h5 class="subtitle">신고 사유를 선택해주세요.</h5>
              <p class="desc">
                싸이월드에서는 등록된 게시물에 문제가 있을 경우 신고를 접수하고있습니다. 신고한 내용은 담당자가 확인하여 싸이월드 운영약관에 따라 적절한 조치를 취하고 있습니다.
              </p>
            </SubTitle>
            <ListReport>
              <template v-slot:items>
                <ListReportDesc primary="스팸, 광고성" />
                <ListReportDesc primary="괴롭힘, 따돌림" />
                <ListReportDesc primary="스토킹" />
                <ListReportDesc primary="음란물, 선정적" />
                <ListReportDesc primary="폭력물, 잔인" />
                <ListReportDesc primary="자살, 자해를 조장" />
                <ListReportDesc primary="저작권 침해" />
                <ListReportDesc primary="기타" />
              </template>
            </ListReport>
            
          </v-card-text>
        </template>
      </Alert>


    </Container>
    <Footer></Footer>
  </Wrap>  
</template>

<script>
import Header from '@/views/publish/pc/includes/Header.vue';
import Footer from '@/views/publish/pc/includes/Footer.vue';
import Profile from '@/views/publish/pc/aside/Profile.vue';
import Brithday from '@/views/publish/pc/aside/Birthday.vue';
import News from '@/views/publish/pc/aside/News.vue';
import Tab from '@/components/Tab.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import Form from '@/styles/pc/common/Form';
import SlideGroup from '@/components/pc/SlideGroup.vue';
import Alert from '@/components/Alert.vue';
import AlertStyle from '@/styles/pc/common/Alert.js';
import IconButton from '@/components/IconButton.vue';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...Form,
    ...AlertStyle,
    Header,
    Footer,
    Profile,
    Brithday,
    News,
    Tab,
    SlideGroup,
    Alert,
    IconButton,
  },
  data(){
    return{
      popup : true,
    }
  },
  methods:{
    popup_close(){
      this.popup = false;
    }
  }
}
</script>

<style>

</style>
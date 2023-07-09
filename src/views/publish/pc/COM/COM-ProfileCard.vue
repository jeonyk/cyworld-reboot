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
            <h4></h4>
            <ul class="lst_func">
              <li><IconButton class="ico_favorite" value="즐겨찾기" large></IconButton></li>
              <!-- <li><IconButton class="ico_pin" value="핀고정" large /></li> -->
              <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close()" /></li>
            </ul>
            <!-- <span class="pop-close-btn" ></span> -->
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text>
            <ProfileInfo>
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="profile">
                <p class="desc">음악없는 세상은 있을 수 없다.</p>
                <p class="subtitle">샌프란에사는고냥이냐옹냐옹</p>
                <ul class="lst_count">
                  <li><b>일촌</b><span class="num">9,999명</span></li>
                  <li><b>게시물</b><span class="num">9,999개</span></li>
                </ul>
              </div>
            </ProfileInfo>
            <FuncButtons mt="24">
              <Button value="선물하기" large outlined width="314" color="gray" class="btn_gift" />
              

              <v-menu 
                offset-y
                left
                transition="slide-y-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <Button value="더보기" large outlined width="80" color="gray" class="btn_more ir" :vbind="attrs" :von="on" />
                </template>

                <ListMore class="lst_more">
                  <template v-slot:items>
                    <ListMoreDesc primary="일촌명 변경" />
                    <ListMoreDesc primary="일촌 해지" />
                    <ListMoreDesc primary="차단" />
                  </template>
                </ListMore>
              </v-menu>
            </FuncButtons>
            <MiniHompyInfo>
              <div class="subtitle">월클~~ 슈퍼스ㅌr♡</div>
              <div class="desc">
                어쩌면 누군가를 사랑하는 것보다 더 어려운게 나 자신을 사랑하는거야. 나부터 사랑해봐~<br />
                안녕~~~
              </div>
              <ul class="lst_img">
                <li><img src="/img/temp_profile.png" alt=""></li>
                <li><img src="/img/temp_profile.png" alt=""></li>
                <li><img src="/img/temp_profile.png" alt=""></li>
              </ul>
            </MiniHompyInfo>
            <RelationButtons>
              <Button value="미니홈피" large block></Button>
            </RelationButtons>
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
import SlideGroup from '@/components/pc/SlideGroup.vue';
import Alert from '@/components/Alert.vue';
import AlertStyle from '@/styles/pc/common/Alert.js';
import Button from '@/components/Button.vue';
import IconButton from '@/components/IconButton.vue';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...AlertStyle,
    Header,
    Footer,
    Profile,
    Brithday,
    News,
    Tab,
    SlideGroup,
    Alert,
    Button,
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
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
                  <InputText
                    type="text"
                    value=""
                    placeholder="이름이나 닉네임으로 친구 검색"
                    solo
                    class="input_search"
                  />
                  <ListFriendsBest>
                    <li>
                      <p class="flag popular">POPULAR</p>
                      <p class="avata"><img src="/img/temp_myAvatar.png" alt=""></p>
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
                      <p class="avata"><img src="/img/temp_myAvatar.png" alt=""></p>
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
                    <li>
                      <p class="flag sleep">SLEEP</p>
                      <p class="avata"><img src="/img/temp_myAvatar.png" alt=""></p>
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
                  <InputText
                    type="text"
                    value=""
                    placeholder="이름이나 닉네임으로 친구 검색"
                    solo
                    class="input_search"
                  />
                  <ListFriendsBest>
                    <li>
                      <p class="avata"><img src="/img/temp_myAvatar.png" alt=""></p>
                      <p class="title_list">
                        <span class="relation">장비홍님의 미니홈피</span>
                        <span class="nick">미지근한따알기우유먹는아이</span>
                        <span class="state">2021.09.10</span>
                      </p>
                      <p class="etc">
                        <span class="emotion sunny">맑음</span>
                        <i class="pin" v-if="false">즐겨찾기</i>
                      </p>
                    </li>
                    <li>
                      <p class="avata"><img src="/img/temp_myAvatar.png" alt=""></p>
                      <p class="title_list">
                        <span class="relation">장영실님의 미니홈피</span>
                        <span class="nick">장영실 사이어슨랩대표</span>
                        <span class="state">2021.09.20</span>
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
              <li><IconButton class="ico_favorite on" value="즐겨찾기" large></IconButton></li>
              <!-- <li><IconButton class="ico_pin on" value="핀고정" large /></li> -->
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
                <p class="subtitle">이조은</p>
                <ul class="lst_count">
                  <li><b>일촌</b><span class="num">9,999명</span></li>
                  <li><b>게시물</b><span class="num">9,999개</span></li>
                </ul>
              </div>
            </ProfileInfo>
            <FuncButtons mt="24">
              <Button value="일촌신청" large outlined width="314" color="gray" class="btn_add" />
              

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
                    <ListMoreDesc primary="차단" />
                  </template>
                </ListMore>
              </v-menu>
            </FuncButtons>
            <MiniHompyInfo>
              <div class="subtitle">북유럽 겨울나기~ 오슬로 그 쓸쓸함...</div>
              <div class="desc">
                여긴 낮보다 밤이 길어요~ 창문만 열면 매일 저녁 우주쇼를 볼 수 있는 곳<br />
                차가운 바람만큼 인생의 깊은 심연으로 나를 밀어넣어...
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
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Brithday from '@/views/pc/aside/Birthday.vue';
import News from '@/views/pc/aside/News.vue';
import Tab from '@/components/Tab.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import InputText from '@/components/InputText.vue';
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
    Profile,
    Brithday,
    News,
    Tab,
    InputText,
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
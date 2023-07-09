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
        <Section pb="20">
          <H2 class="title_page">싸이생활</H2>

          <FriendsToday class="friends_today">
            <H3>오늘의 추천 친구</H3>
            
              <SlideGroup domID="today_r_f" max-width="740">
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
          
          <Tab class="styled_tab web" mt="48">
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

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Header,
    Profile,
    Brithday,
    News,
    Tab,
    InputText,
    SlideGroup,
  }
}
</script>

<style>

</style>
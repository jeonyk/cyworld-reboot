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
                    class="input_search web"
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
                    class="input_search web"
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

      
      <Alert cardClass="giftselect" :open="popup" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>도토리 수량 입력
            <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large  @click="popup_close()" />
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text>
            <GiftSelecterBox>
              <p>to.</p>
              <GiftProfileBox>
                <span>
                  <img src="/img/temp_profile.png" alt="">
                </span>
                <p class="g-relation">딩가딩가소년</p>
                <p class="g-nick">샌프란에사는고냥이냐옹냐옹</p>
              </GiftProfileBox>
              <GiftAcornBox>
                보유 도토리 : 999,999개
                <InputText
                  class="gift-input web input_error"
                  type="text"
                  value="100,000개"
                  placeholder="선물할 도토리 입력(개)"
                  solo
                  mt="21"
                  hint="도토리는 최대 1,000개까지 선물할 수 있습니다. 수량을 확인하세요."
                  persistent-hint
                />
              </GiftAcornBox>
            </GiftSelecterBox>
            <GiftExplan>
              <li>도토리는 1개~1,000개 까지 선물하기가 가능합니다.</li>
              <li>보유한 도토리가 부족할 경우, 자동으로 충전하기 페이지로 이어집니다.</li>
              <li>도토리 선물하기 이후로 선물하기 취소는 불가하오니, <br/>
              신중히 확인하시고 선물하시기 바랍니다.</li>
            </GiftExplan>
            <Button value="선물하기" block large>
            </Button>
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
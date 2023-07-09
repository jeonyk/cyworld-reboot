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
          <TitleBar class="noline">
            <H2 class="title_page">내역보기</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" class="history" pt="48">
          <Tab class="styled_tab web">
            <template v-slot:v-tab>
              <v-tab>선물하기</v-tab>
              <v-tab>선물함</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
               <v-card-text>
                <InputText
                  type="text"
                  value=""
                  placeholder="이름이나 닉네임으로 검색"
                  solo
                  class="input_search gift"
                />
                <FriendsRequest>
                  <ListFriendsGift>
                  <h4>내 일촌 목록</h4>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>열세자테스트를해보자고오오</span>
                        <span class="nickname">닉네임자리예요</span>
                      </p>
                      <p class="friend_gift">
                        <Button value="선물하기" class="btn_gift" outlined></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>코끼리</span>
                        <span class="nickname">코가손이래</span>
                      </p>
                      <p class="friend_gift">
                        <Button value="선물하기" class="btn_gift" outlined></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>일촌명</span>
                        <span class="nickname">닉네임자리예요</span>
                      </p>
                      <p class="friend_gift">
                       <Button value="선물하기" class="btn_gift" outlined></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>일촌명</span>
                        <span class="nickname">닉네임자리예요</span>
                      </p>
                      <p class="friend_gift">
                       <Button value="선물하기" class="btn_gift" outlined></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>일촌명</span>
                        <span class="nickname">닉네임자리예요</span>
                      </p>
                      <p class="friend_gift">
                       <Button value="선물하기" class="btn_gift" outlined></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>일촌명</span>
                        <span class="nickname">닉네임자리예요</span>
                      </p>
                      <p class="friend_gift">
                       <Button value="선물하기" class="btn_gift" outlined></Button>
                      </p>
                    </li>

                  </ListFriendsGift>
                </FriendsRequest>
              </v-card-text>
              
              </v-tab-item>
              <v-tab-item transition="false">

          <AcornHistoryList>
            <li>
              <i class="gift"></i>
              <span>김토토로어쩌구</span>
              <span class="nickname">도토리 선물</span>
              2021.11.01
              <router-link to="/">  
                100개
              </router-link>
            </li>
            <li>
              <i class="gift"></i>
              <span>안녕하세요</span>
              <span class="nickname">도토리 선물</span>
              2021.11.01
              <router-link to="/">  
                100개
              </router-link>
            </li>
            <li>
              <i class="gift"></i>
              <span>김토토로어쩌구</span>
              <span class="nickname">도토리 선물</span>
              2021.11.01
              <router-link to="/">  
                100개
              </router-link>
            </li>
            <li>
              <i class="gift"></i>
              <span>도토리 선물</span>
              <span class="nickname">도토리 선물</span>
              2021.11.01
              <router-link to="/">  
                100개
              </router-link>
            </li>
            <li>
              <i class="gift"></i>
              <span>도토리 선물</span>
              <span class="nickname">도토리 선물</span>
              2021.11.01
              <router-link to="/">  
                100개
              </router-link>
            </li>
            <li>
              <i class="gift"></i>
              <span>도토리 선물</span>
              <span class="nickname">도토리 선물</span>
              2021.11.01
              <router-link to="/">  
                100개
              </router-link>
            </li>
            <li>
              <i class="gift"></i>
              <span>도토리 선물</span>
              <span class="nickname">도토리 선물</span>
              2021.11.01
              <router-link to="/">  
                100개
              </router-link>
            </li>
          </AcornHistoryList>
              </v-tab-item>
            </template>
          </Tab>
        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Events />
        </AsideInner>
      </Aside>
    </Container>

    <Alert cardClass="giftselect" :open="popup" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>도토리 상세 내역
            <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large  @click="popup_close()" />
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text class="history">
            <GiftSelecterBox class="history">
              <p>from.</p>
              <span>2021.07.19 11:11:11</span>
              <GiftProfileBox class="history">
                <span>
                  <img src="/img/temp_profile.png" alt="">
                </span>
                <p class="g-relation">20201조류계에선너가왕</p>
                <p class="g-nick"><span>내이름은장덕출내이름장덕출</span> 님이<br>보내신 선물</p>
              </GiftProfileBox>
              <GiftAcornBox class="history">
                <p>선물 받은 <b>도토리</b><span><b>100</b>개</span></p>
              </GiftAcornBox>
            </GiftSelecterBox> 
          </v-card-text>
        </template>
        
      </Alert>

  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Events from '@/views/pc/aside/Events.vue';
import IconButton from '@/components/IconButton.vue';
import Tab from '@/components/Tab.vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import InputText from '@/components/InputText.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import WHhome from '@/styles/pc/WH/WH-home';
import EM_main from '@/styles/pc/EM/EM-main';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...AlertStyle,
    Header,
    Profile,
    Events,
    IconButton,
    Tab,
    Alert,
    Button,
    ...WHhome,
    ...EM_main,
   InputText,
  },
  data(){
    return {
      popup : true,
    }
  },
  methods:{
    popup_close(){
      this.popup = false;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
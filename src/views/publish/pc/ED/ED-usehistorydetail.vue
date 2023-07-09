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
              <v-tab>충전내역</v-tab>
              <v-tab>사용내역</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
                <AcornHistoryList>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a>10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a>10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a>10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a>10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a>10,000원</a>
                  </li>
                </AcornHistoryList>
              </v-tab-item>
              <v-tab-item transition="false">
                <AcornHistoryList>
                  <li>
                    <i class="gift"></i>
                    <span>도토리 선물</span>
                    2021.11.01
                    <a>100개</a>
                  </li>
                  <li>
                    <i class="music"></i>
                    <span>BGM 구매 6건</span>
                    2021.11.01
                    <a>48개</a>
                  </li>
                  <li>
                    <i class="music"></i>
                    <span>BGM 구매 6건</span>
                    2021.11.01
                    <a>48개</a>
                  </li>
                  <li>
                    <i class="gift"></i>
                    <span>도토리 선물</span>
                    2021.11.01
                    <a>100개</a>
                  </li>
                  <li>
                    <i class="music"></i>
                    <span>BGM 구매 6건</span>
                    2021.11.01
                    <a>48개</a>
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

      <Alert cardClass="giftselect" :open="popup" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>상세 내역 
            <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large  @click="popup_close()" />
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text class="history">
            <GiftSelecterBox class="history">
              <p>to.</p>
              <span>2021.07.19 11:11:11</span>
              <GiftProfileBox class="history">
                <span>
                  <img src="/img/temp_profile.png" alt="">
                </span>
                <p class="g-relation">20201조류계에선너가왕</p>
                <p class="g-nick"><span>내이름은장덕출내이름장덕출</span> 님께<br>보내신 선물</p>
              </GiftProfileBox>
              <GiftAcornBox class="history">
                <p>도토리<span><b>100</b>개</span></p>
              </GiftAcornBox>
            </GiftSelecterBox> 
          </v-card-text>
        </template>
        
      </Alert>

    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Events from '@/views/pc/aside/Events.vue';
import IconButton from '@/components/IconButton.vue';
import Tab from '@/components/Tab.vue';
import Alert from '@/components/Alert.vue';
//import Button from '@/components/Button.vue';
//import InputText from '@/components/InputText.vue';

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
    //Button,
    ...WHhome,
    ...EM_main,
    //InputText,
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
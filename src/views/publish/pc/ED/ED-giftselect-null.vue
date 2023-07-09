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
              <InputText
                type="text"
                value="" 
                placeholder="이름이나 닉네임으로 검색"
                solo
                class="input_search gift"
              />
                <ListFriendsGift>
                  <h4>내 일촌 목록</h4>
                    <ListBlank class="blank_history gift">
                      <p class="msg">현재는 일촌이 없네요.</p>
                    </ListBlank>
                </ListFriendsGift>
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
  </Wrap>  
</template>
<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Events from '@/views/pc/aside/Events.vue';
import IconButton from '@/components/IconButton.vue';
import Tab from '@/components/Tab.vue';
//import Alert from '@/components/Alert.vue';
//import Button from '@/components/Button.vue';
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
    //Alert,
   // Button,
    ...WHhome,
    ...EM_main,
    InputText,
  },
  data(){
    return {
    }
  },
  methods:{
  },
}
</script>

<style lang="scss" scoped>
</style>
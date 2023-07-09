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
    //Alert,
    //Button,
    ...WHhome,
    ...EM_main,
    //InputText,
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
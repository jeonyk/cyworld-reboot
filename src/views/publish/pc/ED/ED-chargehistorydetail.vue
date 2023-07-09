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
                    <a @click="charge_detail_open">10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a @click="charge_detail_open">10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a @click="charge_detail_open">10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a @click="charge_detail_open">10,000원</a>
                  </li>
                  <li>
                    <i class="buy"></i>
                    <span>도토리 100개 충전</span>
                    2021.11.01
                    <a @click="charge_detail_open">10,000원</a>
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

      <!--도토리 충전 내역 상세 팝업-->
      <Alert cardClass="giftselect" :open="acorn_charge_detail" max-width="450" @update:dateSettting="acorn_charge_detail_set">
        <template v-slot:dialog-title>
          <v-card-title>
            <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large  @click="acorn_charge_detail=false" />
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text class="history">
            <AcornChargeDetail>
              <AcornChargeDetailDate>
                <i></i>
                <div>
                  <p>도토리 충전</p>
                  <p class="date">2021.07.19 12:34:02</p>
                </div>
              </AcornChargeDetailDate>
              <AcornChargeDetailInfo>
                <div>
                  <p>충전 수량</p>
                  <p>100개</p>
                </div>
                <div>
                  <p>결제 방법</p>
                  <p>신용카드</p>
                </div>
              </AcornChargeDetailInfo>
              <AcornChargeDetailPrice>
                <p>결제 금액</p>
                <p>10,000원</p>
              </AcornChargeDetailPrice>
            </AcornChargeDetail>
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
      acorn_charge_detail:true,
    }
  },
  methods:{
    charge_detail_open(){
      this.acorn_charge_detail=true;
    },
    acorn_charge_detail_set(data){
      this.acorn_charge_detail=data;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
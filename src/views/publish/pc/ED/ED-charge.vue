<template>
  <Wrap>
    <Header/>
    <Container>
      <Aside class="left">
        <AsideInner class="inner_aside">
          <Profile />
        </AsideInner>
      </Aside>
      <Main>
        <Section pb="30">
          <H2 class="title_page">도토리</H2>
          <EMMainInfo>
            <div class="thumb">
              <img src="/img/temp_profile.png" alt="">
            </div>
            <div class="acorn_cnt">
              <p>보유도토리</p>
              <p class="number">9,999,999 <span>개</span></p>
            </div>
            <ul class="btns-container">
              <!--<Button large text value="충전하기" height="20" color="text_subtitle" class="but">충전하기</Button>
              <Button large text value="선물하기" height="20" color="text_subtitle" class="gift">선물하기</Button>
              <Button large text value="내역보기" height="20" color="text_subtitle" class="history">내역보기</Button>-->
              <li>
                <a @click="acorn_buy"><i class="buy"></i>충전하기</a>
              </li>
              <li>
                <a @click="acorn_gift"><i class="gift"></i>선물하기</a>
              </li>
              <li>
                <router-link to="/"><i class="history"></i>내역보기</router-link>
              </li>
            </ul>
          </EMMainInfo>

          <AcornAD>
            <router-link to="/">
            [AD] 지금 친구 추천하면, 도토리 10개 지급!
            </router-link>
          </AcornAD>

        </Section>

        <Section mt="12">
          <AcornHistoryListTitle>
             <h3>최근 충전 내역</h3>
            <router-link to="/">더보기</router-link>
          </AcornHistoryListTitle>
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

          <AcornHistoryListTitle mt="32">
             <h3>최근 사용 내역</h3>
            <router-link to="/">더보기</router-link>
          </AcornHistoryListTitle>
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
        </Section>

        

      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Events />
        </AsideInner>
      </Aside>


      <!--도토리 충전하기 팝업 -->
      <Alert cardClass="giftselect" :open="acorn_charge_pop" max-width="620" @update:dateSettting="acorn_charge_date_set">
        <template v-slot:dialog-title>
          <v-card-title>도토리 충전
            <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large  @click="acorn_charge_pop=false" />
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text>
            <AcornChargeBox>
              <InputText
                class="charge-input web"
                type="text"
                value=""
                placeholder="충전할 도토리를 입력하세요"
                solo
                mt="21"
                id="acorn_text" 
              />
              <AcornChargeSelect>
                <AcornChargeInfoList class="border-right">
                  <p>보유도토리 <span>999,999</span>개</p>


                  <input type="radio" id="acorn1" name="acorn" value="10" @click="click_acorn('10개')">
                  <label for="acorn1" class="acorn">10개 <span>1,100원</span></label>
                  <input type="radio" id="acorn2" name="acorn" value="30" @click="click_acorn('30개')">
                  <label for="acorn2" class="acorn">30개 <span>3,300원</span></label>
                  <input type="radio" id="acorn3" name="acorn" value="100" @click="click_acorn('100개')">
                  <label for="acorn3" class="acorn">100개 <span>11,000원</span></label>
                  <input type="radio" id="acorn4" name="acorn" value="1000" @click="click_acorn('1,000개')">
                  <label for="acorn4" class="acorn">1,000개 <span>110,000원</span></label>
                  <input type="radio" id="acorn5" name="acorn" value="10000" @click="click_acorn('10,000개')">
                  <label for="acorn5" class="acorn">10,000개 <span>1,100,000원</span></label>

                  <p class="sub-info">충전할 도토리를 선택하면 자동으로 입력돼요.</p>
                </AcornChargeInfoList>
                <AcornChargeInfoList>
                  <p>결제 수단 선택</p>
                  <input type="radio" id="pay1" name="pay" value="credit" @click="click_pay">
                  <label for="pay1" class="pay">카드 결제</label>
                  <input type="radio" id="pay2" name="pay" value="account" @click="click_pay">
                  <label for="pay2" class="pay">계좌이체 결제</label>
                  <input type="radio" id="pay3" name="pay" value="cellphone" @click="click_pay">
                  <label for="pay3" class="pay">휴대폰 결제</label>
                  <div class="charge">
                    <Button value="충전하기" block large :disabled="!btnStatus" mt="33" @click="click_charge">충전하기</Button>
                  </div>
                </AcornChargeInfoList>
                <AcornChargeAD>
                  <router-link to="/">
                    <img src="/img/acorn_charge_ad.png" alt="te">
                  </router-link>
                </AcornChargeAD>
              </AcornChargeSelect>

                
            
            </AcornChargeBox>
            
          </v-card-text>
        </template>
        
      </Alert>

      <!--결제진행중 팝업-->
      <Alert cardClass="title-text web" :open="acorn_charging" persistent max-width="300">
        <template v-slot:dialog-title>
          <v-card-title>결제 진행 중입니다</v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text>
            잠시만 기다려 주세요
          </v-card-text>
        </template>
        
      </Alert>

    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue'
import Events from '@/views/pc/aside/Events.vue';
import IconButton from '@/components/IconButton.vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import InputText from '@/components/InputText.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

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
    Alert,
    Button,
    InputText,
    ...EM_main
  },
  data(){
    return {
      acorn_charge_pop:true,
      acornStatus:false,
      payStatus:false,
      btnStatus:false,
      acorn_charging:false,
    }
  },
  computed:{
  },
  methods:{
    acorn_buy(){
      this.acorn_charge_pop=true;
    },
    acorn_gift(){
      alert('선물하기')
    },
    acorn_charge_date_set(data){
      this.acorn_charge_pop=data;
    },
    click_acorn(txt){
      const input_acorn = document.querySelector('#acorn_text input');
      input_acorn.value = txt;
      const input_slot = document.querySelector('#acorn_text .v-input__slot');
      input_slot.style.setProperty("background", "#fff", "important");
      input_slot.style.setProperty("border", "1px solid #D4D4D4", "important");
      this.acornStatus = true;
      if(this.acornStatus && this.payStatus){
        this.btnStatus=true;
      }
    },
    click_pay(){
      this.payStatus = true;
      if(this.acornStatus && this.payStatus){
        this.btnStatus=true;
      }
    },
    click_charge(){
      this.acorn_charging=true;
    }
    
  },
}
</script>

<style lang="scss" scoped>
</style>
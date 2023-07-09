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
              <router-link to="/">  
                10,000원
              </router-link>
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
    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue'
import Events from '@/views/pc/aside/Events.vue';
//import IconButton from '@/components/IconButton.vue';
//import Alert from '@/components/Alert.vue';
//import Button from '@/components/Button.vue';
//import Checkbox from '@/components/Checkbox.vue';

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
    //IconButton,
    //Checkbox,
    //Alert,
    //Button,
    ...EM_main
  },
  data(){
    return {
      
    }
  },
  methods:{
    acorn_buy(){
      alert('충전하기')
    },
    acorn_gift(){
      alert('선물하기')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
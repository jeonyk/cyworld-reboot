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
            <H2 class="title_page">주인공 보기</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" class="">
          <HeroContents>
            <div class="hero">
              <p class="date">2021년 9월 2째주</p>
              <p class="intro">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
              <p class="rank first">1</p>
              <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
              <p class="profile">김사이입니다</p>
              <p class="likebox"><span class="liketit">칭찬득표수</span><span class="like">152,213</span> 명이 칭찬했어요.</p>
            </div>
              <p class="subtitle">칭찬합시다 사연</p>

              <p class="herotitle">
              타이틀입니다타이틀은최대서른자입니다서른자입니 다서른자서른자</p>

              <p class="txt1">
              삼안 E&amp;C의 남다른 역량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 산다는 것은 어쩌면 장돌뱅이처럼<br>
              돌고 돌아가는 길을 걸어가는 것일지 모른다. 그리고 그 길에서 마주할 앞날의 그 무엇인가를 고대하며 오늘 하루<br>
              를 채워나가면 그 또한 삼안 E&amp;C의 남다른 역량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 산다는 것은 어쩌면 장돌<br>
              뱅이처럼 돌고 돌아가는 길을 걸어가는 것일지 모른 다. 
              </p>

              <p class="txt2">
              그리고 그 길에서 마주할 앞날의 그 무엇인가를 고대하며 오늘 하루를 채워나가면 그 또한 삼안 E&amp;C의 남다른 역<br>
              량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 산다는 것은 어쩌면 장돌뱅이처럼 돌고 돌아가는 길을<br>
              걸어가는 것일지 모른다. 그리고 그 길에서 마주할 앞날의 그 무엇인가를 고대하며 오늘 하루를 채워나가면 그 또<br>
              한 삼안 E&amp;C의 남다른 역량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 
              </p>

              <p class="txt3">
              산다는 것은 어쩌면 장돌뱅이처럼 돌고 돌아가는 길을 걸어가는 것일지 모른다. 그리고 그 길에서 마주할 앞날의<br>
              그 무엇인가를 고대하며 오늘 하루를 채워나가면 그 또한 의미가 있으리라!
              </p>

              <div class="support">
                  <span><img src="/img/acorn_illust_05.png" alt=""></span>
                  <p>사연에 공감하셨으면 도토리 후원하기를 통해 마음을 전달해주세요.<br>
                  보내주신 도토리는 투표가 종료된 후 당사자에게 100% 전달됩니다.</p>
                  <Button value="도토리 후원하기" large  width="150" class="btn_acorn" @click="gift_pop_open"/>
              </div>
          </HeroContents>
   
        
        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Events />
        </AsideInner>
      </Aside>
      
      <!--도토리 후원 팝업-->
      <Alert cardClass="giftselect" :open="gift_pop" max-width="450" @update:dateSettting="gift_pop_update">
        <template v-slot:dialog-title>
          <v-card-title>도토리 후원하기
            <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large  @click="gift_pop_close()" />
          </v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text>
            <GiftSelecterBox mt="53">
              <p>to.</p>
              <GiftProfileBox>
                <span>
                  <img src="/img/temp_profile.png" alt="">
                </span>
                <p class="g-relation">딩가딩가소년</p>
                <p class="g-nick">샌프란에사는고냥이냐옹냐옹</p>
              </GiftProfileBox>
              <HeroStoryGiftBackground></HeroStoryGiftBackground>
              <GiftAcornBox>
                보유 도토리 : 999,999개
                <InputText
                  class="gift-input web medium input_error"
                  type="text"
                  value="100,000개"
                  placeholder="후원 할 도토리 입력(개)"
                  solo
                  mt="21"
                  hint="도토리는 최대 1,000개까지 후원이 가능합니다. "
                  persistent-hint
                />
              </GiftAcornBox>
            </GiftSelecterBox>
            <GiftExplan>
              <li>도토리는 1,000개 까지 후원이 가능합니다. </li>
              <li>보유한 도토리가 부족할 경우, 자동으로 충전하기 페이지로 이어집니다.</li>
              <li>도토리를 후원하면 취소가 불가능하니, 신중히 확인하고 후원하시기 <br/>
              바랍니다.</li>
            </GiftExplan>
            <Button disabled value="후원하기" block large @click="gift_complete_open">
            </Button>
          </v-card-text>
        </template>
      </Alert>
      <!-- 후원 완료 알림 팝업 -->
      <Alert cardClass="title-text web" :open="gift_complete" @update:dateSettting="gift_complete_update" max-width="300">
        <template v-slot:dialog-title>
          <v-card-title>텍스트가 1줄일 경우</v-card-title>
        </template>
        <template v-slot:dialog-text>
          <v-card-text>
            <b>삼안건축구조기술사박동훈</b> 님께 <br/>
             도토리 100개를 후원했습니다.
          </v-card-text>
        </template>
        <template v-slot:dialog-btn>
          <v-btn text x-large block @click="gift_complete_close">확인</v-btn>
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
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import InputText from '@/components/InputText.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import WHhome from '@/styles/pc/WH/WH-home';

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
    ...WHhome,
    InputText,
  },
  data(){
    return {
      expand: false,
      expand2: false,
      expand3: false,
      gift_pop:true,
      gift_complete:false,
    }
  },
  methods:{
    gift_pop_open(){
      this.gift_pop = true
    },
    gift_pop_close(){
      this.gift_pop = false
    },
    gift_pop_update(data) {
      this.gift_pop = data
    },
    gift_complete_open(){
      this.gift_pop = false
      this.gift_complete = true
    },
    gift_complete_close(){
      this.gift_complete = false
    },
    gift_complete_update(data){
      this.gift_complete = data
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
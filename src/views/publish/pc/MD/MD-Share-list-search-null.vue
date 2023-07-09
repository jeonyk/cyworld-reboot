<template>
  <Wrap>
    <Header :selectedIndex="1"/>
    <Container>
      <Aside class="left">
        <AsideInner class="inner_aside">
          <Profile />
        </AsideInner>
      </Aside>
      <Main>
        <Section>
          <MhTitle class="noline">
            <H2 class="title_page mh-title">다이어리</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
            <IconButton class="ico_list cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section mt="12">
          <DiaryListArea class="top">
            <div class="folder">
              <p class="share"><span class="public">멤버공개</span><span>일기 451개</span></p>
              <DiaryGroup>
                <ListDiaryGroup>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                  <li><a href="/"></a><img src="/img/temp_profile.png"></li>
                </ListDiaryGroup>
                <a class="count btn_more" @click='shareList_open'>30/50</a>
              </DiaryGroup>
              <h3>다이어리폴더명테스트중스무자적용모습이야</h3>
            </div>
            <DiaryCalendarSelect class="calendar">
              <v-date-picker
                v-model="picker"
                type="date"
                width="402"
                locale="ko-KR"
                no-title
                :weekday-format="formatWeek"
                :day-format="formatDay"
                show-adjacent-months
                :events="arrayEvents"
                event-color="cy-blue"
                >
              </v-date-picker>
            </DiaryCalendarSelect>
          </DiaryListArea>
        </Section>

        <Section mt="12">
          <DiaryListArea class="bottom">
            <p class="count">총 <span>5개</span>의 일기가 있어요.</p>
            <ListDiary>
              <li>
                <p class="date">
                  <span>THU</span>
                  <span class="num">05</span>
                </p>
                <p class="text">
                  <span class="nick">이익준</span>
                  사월이면 텅 빈 놀이터에 연둣빛 풀씨 하나 살짝 물어다 놓고 날아간 바람의 날개를 기억하는 눈이 있어 아이는 한발짝 한발짝 어른이 되어가지 색이 다르고 성이 다른 것을 차이라 말하고 차별하지 않는 고은 네가 내 죽음을 네 죽음 처럼 보살...
                </p>
                <p class="feel">
                  <AvaFeelImg>
                    <img src="/img/svg/avafeel_4.svg" alt="">
                  </AvaFeelImg>
                </p>
              </li>
              <li>
                <p class="date">
                  <span>FRI</span>
                  <span class="num">06</span>
                </p>
                <p class="text">
                  <span class="nick">김사이</span>
                  사월이면 텅 빈 놀이터에 연둣빛 풀씨 하나 살짝 물어다 놓고 날아간 바람의 날개를 기억하는 눈이 있어 아이는 한발짝 한발짝 어른이 되어가지 색이 다르고
                </p>
                <p class="feel">
                  <AvaFeelImg>
                    <img src="/img/svg/avafeel_1.svg" alt="">
                  </AvaFeelImg>
                </p>
              </li>
              <li>
                <p class="date">
                  <span>THU</span>
                  <span class="num">19</span>
                </p>
                <p class="text">
                  <span class="nick">나한테바나나</span>
                  사월이면 텅 빈 놀이터에 연둣빛 풀씨 하나 살짝 물어다 놓고 날아간 바람의 날개
                </p>
                <p class="feel">
                  <AvaFeelImg>
                    <img src="/img/svg/avafeel_23.svg" alt="">
                  </AvaFeelImg>
                </p>
              </li>
              <li>
                <p class="date">
                  <span>SUN</span>
                  <span class="num">22</span>
                </p>
                <p class="text">
                  <span class="nick">닉네임이에요닉네임이에요</span>
                  사월이면 텅 빈 놀이터에 연둣빛 풀씨 하나 살짝 물어다 놓고 날아간 바람의 날개를 기억하는 눈이 있어 아이는 한발짝 한발짝 어른이 되어가지 색이 다르고 성이 다른 것을 차이라 말하고 차별하지 않는 고은 네가
                </p>
                <p class="feel">
                  <AvaFeelImg>
                    <img src="/img/svg/avafeel_26.svg" alt="">
                  </AvaFeelImg>
                </p>
              </li>
              <li>
                <p class="date">
                  <span>THU</span>
                  <span class="num">26</span>
                </p>
                <p class="text">
                  <span class="nick">소프라노조순이</span>
                  사월이면 텅 빈 놀이터에 연둣빛 풀씨 하나 살짝 물어다 놓고 날아간 바람의 날개를 기억하는 눈이 있어 아이는 한발짝 한발짝 어른이 되어가지 색이 다르고 성이 다른 것을 차이라 말하고
                </p>
                <p class="feel">
                  <AvaFeelImg>
                    <img src="/img/svg/avafeel_6.svg" alt="">
                  </AvaFeelImg>
                </p>
              </li>
            </ListDiary>
          </DiaryListArea>
        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>

      <!--공유 리스트 -->
      <Alert cardClass="giftselect" :open="pop_shareList" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>멤버 목록
          <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large @click="shareList_close" />
          </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text class="diary-share-list">
          <DiarySharePop>
            <p>다이어리를 함께 쓸 일촌을 초대해주세요</p>
            <InputText
              type="text"
              value="닭"
              placeholder="일촌명 또는 닉네임을 입력하세요"
              solo
              class="input_search medium"
            />
            <DiaryShareList class="overflow">
              
              <ListBlank class="blank_diary_share_member">
                <p>찾으시는 검색 결과가 없어요.</p>
              </ListBlank>
              
            </DiaryShareList>
          </DiarySharePop>
        </v-card-text>
      </template>
    </Alert>

    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Music from '@/views/pc/aside/Music.vue';
import Friends from '@/views/pc/aside/Friends.vue';
import IconButton from '@/components/IconButton.vue';
//import Button from '@/components/Button.vue';
import Alert from '@/components/Alert.vue';
import InputText from '@/components/InputText.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MD_Write from '@/styles/pc/MD/MD-Write';
import MD_main from '@/styles/pc/MH/MH-main';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...AlertStyle,    
    Header,
    Profile,
    Music,
    Friends,
    IconButton,
    //Button,
    ...MD_Write,
    Alert,
    ...MD_main,
    InputText,
  },
  data(){
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      daysOfWeek : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      arrayEvents : ['2021-11-20','2021-11-21'],
      pop_shareList : true,
    }
  },
  mounted(){
    setInterval(function(){
      //년도선택 비활성화
      document.querySelector('.accent--text > button').disabled=true;
      //이벤트날짜 클래스추가
      const event_date= document.querySelectorAll('.v-date-picker-table__events');
      event_date.forEach(function(event_date){
        event_date.previousSibling.classList.add('pick_date');
      })
    },100);
  },
  methods:{
    formatWeek(date) {
      let i = new Date(date).getDay(date);
      return this.daysOfWeek[i];
    },
    formatDay(date) {
      date = date.substr(8,2);
      return (date<10 ? date.substr(1,1) : date);
    },
    shareList_open(){
      this.pop_shareList = true;
    },
    shareList_close(){
      this.pop_shareList = false;
    }
    
  },
}
</script>

<style lang="scss" scoped>
</style>
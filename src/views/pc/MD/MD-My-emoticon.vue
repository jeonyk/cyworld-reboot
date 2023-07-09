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
              <p><span class="public">전체공개</span><span>일기 451개</span></p>
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
                :events="funtionEvents"
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
//import Alert from '@/components/Alert.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
//import AlertStyle from '@/styles/pc/common/Alert';

import MD_Write from '@/styles/pc/MD/MD-Write';
import MD_main from '@/styles/pc/MH/MH-main';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    //...AlertStyle,    
    Header,
    Profile,
    Music,
    Friends,
    IconButton,
    //Button,
    ...MD_Write,
    //Alert,
    ...MD_main,
  },
  data(){
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      daysOfWeek : ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    }
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
    funtionEvents(data){
      if(data==='2021-11-04'){
        return 'feel feel4';
      }
      if(data==='2021-11-05'){
        return 'feel feel1';
      }
      if(data==='2021-11-18'){
        return 'feel feel23';
      }
      if(data==='2021-11-21'){
        return 'feel feel26';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
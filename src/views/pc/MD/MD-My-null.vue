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
              <h3>김사이님의 다이어리</h3>
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
                :allowed-dates="allowedDates"
                >
              </v-date-picker>
            </DiaryCalendarSelect>
          </DiaryListArea>
        </Section>

        <Section mt="12">
          <DiaryListArea class="bottom">
            <p class="count">총 <span>0개</span>의 일기가 있어요.</p>
            <ListBlank class="blank_diary">
              <p class="msg">작성한 일기가 없어요.</p>
            </ListBlank>
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
      daysOfWeek : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      arrayEvents : ['2021-11-05','2021-11-06','2021-11-19','2021-11-22'],
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
    allowedDates(date){
      return parseInt(date.split('-')[2]) >= 25;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
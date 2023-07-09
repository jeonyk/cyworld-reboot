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
          <H2 class="title_page">방문자수 통계</H2>
          
          <VisitCount>
            <div class="all_total">
              <p>총 방문자수 <span>1,292,012</span></p>
              <p>이번달 방문자수 <span>1,292,012</span></p>
            </div>
            <div class="month">
              <H3 @click="open_calendar">2021. 08</H3>
              <span class="btn_prev">이전</span>
              <span class="btn_next disabled">다음</span>
            </div>
            <ListVisitCount>
              <li class="today"><p class="date">2021. 08. 08</p><p class="count">207</p></li>
              <li><p class="date">2021. 08. 07</p><p class="count">207</p></li>
              <li><p class="date">2021. 08. 06</p><p class="count">999,999</p></li>
              <li><p class="date">2021. 08. 05</p><p class="count">99</p></li>
              <li><p class="date">2021. 08. 04</p><p class="count">0</p></li>
              <li><p class="date">2021. 08. 03</p><p class="count">837</p></li>
              <li><p class="date">2021. 08. 02</p><p class="count">934</p></li>
              <li><p class="date">2021. 08. 01</p><p class="count">79</p></li>
            </ListVisitCount>
            <p class="total">8월 Total <span>9,999</span></p>
          </VisitCount>
          
           
        <Alert cardClass="calendar" :open="popup" max-width="280">
        <template v-slot:dialog-title>
          <v-card-text>
               <!-- <div class="calendar_dialog">
                  <span class="calendar_prev "></span>
                  <span class="calendar_next disabled"></span>
                  <p>2021</p>
                  <ul>
                    <li>1월</li>
                    <li>2월</li>
                    <li>3월</li>
                    <li>4월</li>
                    <li>5월</li>
                    <li>6월</li>
                    <li>7월</li>
                    <li class="active">8월</li>
                    <li class="disabled">9월</li>
                    <li class="disabled">10월</li>
                    <li class="disabled">11월</li>
                    <li class="disabled">12월</li>
                  </ul>
                </div>-->
            <MonthPick>
              <v-date-picker
                v-model="picker"
                type="month"
                width="240"
                no-title
                :month-format="formatMonth"
              ></v-date-picker>
            </MonthPick>
          </v-card-text>
        </template>
        
      </Alert>
        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Brithday />
          <News />
        </AsideInner>
      </Aside>
    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Brithday from '@/views/pc/aside/Birthday.vue';
import News from '@/views/pc/aside/News.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';

import Alert from '@/components/Alert.vue';

import AlertStyle from '@/styles/pc/common/Alert';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Header,
    Profile,
    Brithday,
    News,
    Alert,
    ...AlertStyle,
  },
  data(){
    return{
      popup : true,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
  mounted(){
    setInterval(function(){
      //년도선택비활성화
      document.querySelector('.accent--text > button').disabled=true;
    },100);
  },
  methods:{
    open_calendar(){
      this.popup = true;
      /*setTimeout(function(){
        document.querySelector('.accent--text > button').disabled=true;
      },500);*/
    },
    formatMonth(date){
      let month = date.substr(5,2);
      return (month<10 ? month.substr(1,1)+'월' : month+'월');
    }
  }
}
</script>

<style>

</style>
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
            <H2 class="title_page">명예의 전당</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" class="banner">
          <Banner class="praise">
            <router-link to=""><img src="/img/temp_banner5.png" alt=""></router-link>
          </Banner>
        </Section>

        <Section mt="12" class="">
          <HallOfFame class="page">
            <H3 @click="open_calendar">2021년 08월</H3>
            <div class="titlebar">
              <div class="date">2021년 9월 1째주</div>
              <router-link to="/" class="btn_more">더보기</router-link>
            </div>
            <ListHeroes>
              <li>
                <router-link to="/">
                  <span class="rank first">1</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">사이좋은아이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank second">2</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">요리조리</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank third">3</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">삼안의건축구조기술수동훈이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
            </ListHeroes>

            <div class="titlebar">
              <div class="date">2021년 9월 2째주</div>
              <router-link to="/" class="btn_more">더보기</router-link>
            </div>
            <ListHeroes>
              <li>
                <router-link to="/">
                  <span class="rank first">1</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">사이좋은아이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank second">2</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">요리조리</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank third">3</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">삼안의건축구조기술수동훈이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
            </ListHeroes>

            <div class="titlebar">
              <div class="date">2021년 9월 3째주</div>
              <router-link to="/" class="btn_more">더보기</router-link>
            </div>
            <ListHeroes>
              <li>
                <router-link to="/">
                  <span class="rank first">1</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">사이좋은아이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank second">2</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">요리조리</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank third">3</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">삼안의건축구조기술수동훈이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
            </ListHeroes>

            <div class="titlebar">
              <div class="date">2021년 9월 4째주</div>
              <router-link to="/" class="btn_more">더보기</router-link>
            </div>
            <ListHeroes mb="0">
              <li>
                <router-link to="/">
                  <span class="rank first">1</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">사이좋은아이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank second">2</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">요리조리</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank third">3</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">삼안의건축구조기술수동훈이</p>
                  <p class="desc">사이좋은 아이들을 위해 후원 하는 주인공입니다.</p>
                </router-link>
              </li>
            </ListHeroes>
          </HallOfFame>  

          <Alert cardClass="calendar" :open="popup" max-width="280">
            <template v-slot:dialog-title>
              <v-card-text>
                <MonthPick class="other">
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
import Alert from '@/components/Alert.vue';
// import Button from '@/components/Button.vue';

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
    // Button,
    ...WHhome,
  },
  data(){
    return{
      popup: false,
      picker: '2021-08',
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
    },
    formatMonth(date){
      let month = date.substr(5,2);
      return (month<10 ? month.substr(1,1)+'월' : month+'월');
     }
  }
}
</script>

<style lang="scss" scoped>
</style>
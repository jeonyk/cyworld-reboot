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
          <MhTitle class="noline">
            <H2 class="title_page mh-title">다이어리</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
            <IconButton class="ico_list cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section mt="12">
          <form>
            <DiaryChoiceArea>
              <DiaryFolder>
                <!-- class : open|friend|lock|member -->
                <Button class="open" large height="44" text value="폴더명 최대스무자입니다스무자입니다아아아" @click="folder_pop_open">
                </Button>
              </DiaryFolder>
              <DiaryDate>
                <Button color="cy_blue" small height="44" width="111" value="날짜 선택" @click="date_pop_open"></Button>
              </DiaryDate>
              <DiaryWeather>
                <v-menu offset-y left class="ch_feel_box" min-width="450">
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-btn color="cy_blue" small height="44" width="111" depressed>
                          <img src="/img/svg/ico_weather_sunny.svg" alt="">
                          날씨 선택
                        </v-btn>
                      </span>
                    </template>
                    <TodayFeelSelect>
                      <FeelSelectTitle>오늘 날씨를 선택하세요!</FeelSelectTitle>
                      <FeelSelectList class="weather">
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_sunny.svg'+')'}">
                          맑음
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_cloud.svg'+')'}">
                          구름 조금
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_blur.svg'+')'}">
                          흐림
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_rainy.svg'+')'}">
                          비
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_snow.svg'+')'}">
                          눈
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_rainbow.svg'+')'}">
                          무지개
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_hail.svg'+')'}">
                          우박
                        </FeelSelectItem>
                        <FeelSelectItem class="active" :style="{backgroundImage:'url('+'/img/svg/ico_weather_shower.svg'+')'}">
                          소나기
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/ico_weather_x.svg'+')'}">
                          사용안함
                        </FeelSelectItem>
                        
                      </FeelSelectList>
                    </TodayFeelSelect>
                  </v-menu>
              </DiaryWeather>
              <DiaryFeel>
                <v-menu offset-y left class="ch_feel_box" min-width="450">
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">
                        <v-btn color="cy_blue" small height="44" width="111" depressed>
                          <img src="/img/svg/ico_feel_smile.svg" alt="">
                          오늘 기분
                        </v-btn>
                      </span>
                    </template>
                    <TodayFeelSelect>
                      <FeelSelectTitle>오늘 기분이 어떠세요?</FeelSelectTitle>
                      <FeelSelectList>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_0.svg'+')'}">
                          사용안함
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_1.svg'+')'}">
                          사용안함
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_2.svg'+')'}">
                          사용안함
                        </FeelSelectItem>
                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_3.svg'+')'}">
                          사용안함
                        </FeelSelectItem>
                        <FeelSelectItem class="active" :style="{backgroundImage:'url('+'/img/svg/avafeel_3.svg'+')'}">
                          사용안함
                        </FeelSelectItem>
                      </FeelSelectList>
                    </TodayFeelSelect>
                  </v-menu>
              </DiaryFeel>
            </DiaryChoiceArea>
            <DiaryWriteArea>
              <TextArea
                class="input_textarea web"
                placeholder="내용을 입력하세요."
                height="328"
              />

              <div class="option">
                <p class="skin">
                  <v-menu 
                    offset-y
                    left
                    transition="slide-y-transition"
                    content-class="bgm_list_popup"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="btn_diary_skin"
                        fab
                        depressed
                      >
                        스킨 선택
                      </v-btn>
                    </template>
                    <ListDiarySkin>
                      <li>
                        <IconButton></IconButton>
                      </li>
                    </ListDiarySkin>
                  </v-menu>
                </p>
                <p class="temp">
                  <Button value="임시 저장" text>
                    <span class="count">99+</span>
                  </Button>
                </p>
                <p class="public">
                  <v-menu 
                    offset-y
                    left
                    transition="slide-y-transition"
                    content-class="bgm_list_popup"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="btn_diary_skin"
                        fab
                        depressed
                      >
                        전체공개
                      </v-btn>
                    </template>
                    <ListMore>
                      <template v-slot:items>
                        <ListMoreDesc primary="전체공개" />
                        <ListMoreDesc primary="일촌공개" />
                        <ListMoreDesc primary="일촌공개" />
                      </template>
                    </ListMore>
                  </v-menu>
                </p>
              </div>
              
              <Button value="취소" large outlined />
              <Button value="등록" large />
            </DiaryWriteArea>
          </form>
        </Section>

      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>

      <Alert cardClass="giftselect" :open="folder_pop" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>폴더 선택
          <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large @click="folder_pop_close()" />
          </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text class="folder">
          <FolderList class="overflow">
            <p>폴더를 선택해 주세요.</p>
            <FolderListItem class="open selected">김사이의 일상 다반사</FolderListItem>
            <FolderListItem class="friend">일촌공개 일기</FolderListItem>
            <FolderListItem class="open">나만의 다이어리 공간</FolderListItem>
            <FolderListItem class="member">나의살아가는이야기들려줄게들어봐제발제발</FolderListItem>
            <FolderListItem class="lock">싸이 중학교</FolderListItem>
          </FolderList>
        </v-card-text>
      </template>
    </Alert>

    <Alert cardClass="giftselect" :open="date_pop" max-width="450">
      <template v-slot:dialog-text>
        <v-card-text>
          <DiaryCalendarSelect>
             <!--<DiaryCalendarMonth>
               <span class="prev"></span>
               2021년 11월
               <span class="next"></span>
             </DiaryCalendarMonth>
             <DiaryCalendarDate>
               <DiaryCalendarWeek>SUN</DiaryCalendarWeek>
               <DiaryCalendarWeek>MON</DiaryCalendarWeek>
               <DiaryCalendarWeek>TUE</DiaryCalendarWeek>
               <DiaryCalendarWeek>WED</DiaryCalendarWeek>
               <DiaryCalendarWeek>THU</DiaryCalendarWeek>
               <DiaryCalendarWeek>FRI</DiaryCalendarWeek>
               <DiaryCalendarWeek>SAT</DiaryCalendarWeek>

               <DiaryCalendarDay v-for="i in 29" :key="i">
                 <span>{{i}}</span>
               </DiaryCalendarDay>
               <DiaryCalendarDay>
                 <span class="today">30</span>
                 </DiaryCalendarDay>
               <DiaryCalendarDay v-for="j in 12" :key="j+30">
                 <span class="disabled">{{j}}</span>
               </DiaryCalendarDay>

             </DiaryCalendarDate>-->
             <v-date-picker
                v-model="picker"
                type="date"
                width="402"
                locale="ko-KR"
                no-title
                :weekday-format="formatWeek"
                :day-format="formatDay"
                show-adjacent-months
              ></v-date-picker>
          </DiaryCalendarSelect>
          
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
import Button from '@/components/Button.vue';
import Alert from '@/components/Alert.vue';
import TextArea from '@/components/TextArea.vue';

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
    Button,
    ...MD_Write,
    Alert,
    ...MD_main,
    TextArea,
  },
  data(){
    return {
      folder_pop: false,
      date_pop:true,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      daysOfWeek : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],

    }
  },
  mounted(){
    setInterval(function(){
      //년도선택비활성화
      document.querySelector('.accent--text > button').disabled=true;
    },100);
  },
  methods:{
    folder_pop_open(){
      this.folder_pop = true;
    },
    folder_pop_close(){
      this.folder_pop = false;
    },
    date_pop_open(){
      this.date_pop = true;
      /*setTimeout(function(){
        document.querySelector('.accent--text > button').disabled=true;
      },500);*/
    },date_pop_close(){
      this.date_pop = false;
    },
    formatWeek(date) {
      let i = new Date(date).getDay(date);
      return this.daysOfWeek[i];
    },
    formatDay(date) {
      date = date.substr(8,2);
      return (date<10 ? date.substr(1,1) : date);
    },
  },

}
</script>

<style lang="scss" scoped>
</style>
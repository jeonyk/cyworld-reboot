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
        <Section pb="20">
          <MhTitle>
            <H2 class="title_page mh-title">조은이의 미니홈피, 방문환영!!!</H2>
            <MhSetting>
              <li><IconButton class="ico_favorite mh cy_gray--text" large /></li>
              <li>
                <v-menu 
                  offset-y
                  left
                  transition="slide-y-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="ico_more"
                      fab
                      depressed
                    >
                      더보기
                    </v-btn>
                  </template>

                  <ListMore class="mh_setting">
                    <template v-slot:items>
                      <ListMoreDesc primary="일촌명 변경" />
                      <ListMoreDesc primary="일촌 해지" />
                      <ListMoreDesc primary="차단하기" />
                      <ListMoreDesc primary="신고하기" />
                      <ListMoreDesc primary="링크 복사" class="invite_chain" />
                      <ListMoreDesc primary="카카오톡 공유" class="invite_kakao" />
                    </template>
                  </ListMore>
                </v-menu>
              </li>
            </MhSetting>
          </MhTitle>
         
          <MyToday>
            <MyTodayThum>
              <div>
                <img src="/img/temp_profile.png" alt="">
              </div>
            </MyTodayThum>
            <MyTodayInfo>
              <TodayCount>
                TODAY
                <span class="today">42</span>
                <span class="total">999</span>
              </TodayCount>
              <TodayName>
                조은이
              </TodayName>
              <TodayDesc>
                ↘━↙↘━↙↘━↙↘━↙↘━↙↘↘━↙↘━↙↘━↙↘━↙↘━↙↘↘━↙↘━↙↘━<br>
                ┃보┃ ┃고┃┃싶┃┃어┃┃요┃┃보┃ ┃고┃┃싶┃┃어┃┃요┃┃보┃ ┃고┃<br>
                ↗━↖↗━↖↗━↖↗━↖↗━↖↗↗━↖↗━↖↗━↖↗━↖↗━↖↗↗━↖↗━↖↗━<br>
                ┃너┃┃무┃┃사┃┃랑┃┃해┃┃너┃┃무┃┃사┃┃랑┃┃해┃┃너┃┃무┃<br>┃
                。'ㅇ'☆'。*。*.。'☆*。。'ㅇ.☆.。'.。'ㅇ'☆'。*。*.。'☆*。。'ㅇ.☆.。'.。'ㅇ'☆'。*。*.
              </TodayDesc>
            </MyTodayInfo>
          </MyToday>
          <MyTodayBot>
              <TodayIs>
                Today is ..
                <TodayFeel>
                  <v-menu offset-y offset-x class="ch_feel_box" min-width="450">
                    <template v-slot:activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        v-on="on"
                      >
                        <!--<AvaFeel class="avafeel-4" mr="4"/>-->
                        <AvaFeelImg>
                          <img :src=monihomepyProfile.feelUrl alt="">
                        </AvaFeelImg>
                      </span>
                    </template>                    
                    <!-- <TodayFeelSelect>
                      <FeelSelectTitle>오늘 기분이 어떠세요?</FeelSelectTitle>
                      <FeelSelectList> -->
                        <!--<template v-for="(feelItem, i) in feelItems"> 
                        <FeelSelectItem :key="i" :class="{ active: feelItem.active }">
                          <AvaFeel :class="'avafeel-'+feelItem.id" width="30" height="30" :backsize="feelItem.bs" mr="5" /><span class="feel-name">{{feelItem.name}}</span>
                        </FeelSelectItem>
                        </template>-->
                        <!-- <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_0.svg'+')'}">
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
                    </TodayFeelSelect> -->
                  </v-menu>
                  개운
                </TodayFeel>
              </TodayIs>
              <TodayFollower>
                <span>일촌</span>
                999
                <span>즐겨찾기</span>
                999
              </TodayFollower>
            </MyTodayBot>
        </Section>

        <Section mt="12">
          <MhCategory>
            <li class="diary">
                <a href="/"><p class="title new">다이어리</p></a>
                <p class="post"><span class="update">126</span><span class="all">880</span></p>
            </li>
            <li class="gallery">
                <a href="/"><p class="title">사진첩</p></a>
                <p class="post"><span class="update">35</span><span class="all">831</span></p>
            </li>
            <li class="jukebox">
                <a href="/"><p class="title">쥬크박스</p></a>
                <p class="post"><span class="update">72</span><span class="all">531</span></p>
            </li>
            <li class="guestbook">
                <a href="/"><p class="title new">방명록</p></a>
                <p class="post"><span class="update">94</span><span class="all">932</span></p>
            </li>
          </MhCategory>
        </Section>

        <Section mt="12" pb="20">
          <TitleBar>
            <H2 class="title_page mh-title mr">Mini Room</H2>
            <p class="subtitle">가을여자, 김사이 미니룸</p>
          </TitleBar>
          <MiniRoom>
            <img src="/img/temp_miniroom.png" alt="">
          </MiniRoom>
        </Section>

        <Section mt="12" pb="32">
          <H2 class="title_page mh-title fs">What Friends Say</H2>
          <!-- <WriteFriendsSay>
            <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
            <InputText
              type="text"
              value=""
              placeholder="일촌평을 입력하세요"
              append-icon="mdi-send"
              class="web"
              solo
            />
          </WriteFriendsSay> -->
          <ListFriendsSay>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <div>
                <p class="nick new">
                  <span>슬기로운 의사생활 겸둥이</span>
                  <span class="name">익준이</span>
                </p>
                <p class="content">
                  싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br>
                  “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
                </p>
                <p class="date">2021.11.01</p>
              </div>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <div>
                <p class="nick new">
                  <span>마케팅팀장</span>
                  <span class="name">Dorothy</span>
                </p>
                <p class="content">
                  싸이월드 BGM 앨범 출시하는 날!! 오늘은 어떤곡일지 기대 많이 해주세요.<br>
                  특별이벤트도 기획되어 있으니 꼭 확인해주세요.
                </p>
                <p class="date">2021.10.21</p>
              </div>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <div>
                <p class="nick new">
                  <span>우리집이마트</span>
                  <span class="name">옐로우맨</span>
                </p>
                <p class="content">
                  이마트 새벽배송 너무 편해요. 집 근처 이마트에서 바로 배송되니, 과일도 채소도 너무 신선하고, 믿을 수 있어요. 특히 정육 같이 바로바로 조리하는 재료는 선도가 너무 중요한데, 받자마자 아침부터 고기파트 하네요^^
                </p>
                <p class="date">2021.08.15</p>
              </div>
            </li>
          </ListFriendsSay>
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
//import AvaFeel from '@/components/AvaFeel.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
//import InputText from '@/components/InputText.vue';

import MHMain from '@/styles/pc/MH/MH-main';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Header,
    Profile,
    Music,
    Friends,
    IconButton,
    ...MHMain,
    //AvaFeel,
    //InputText,
  },
  data(){
    return{
      feelItems: [
        { id:0, name: '사용안함',bs:'18', active:false},
        { id:1, name: '답답',bs:'20', active:false},
        { id:2, name: '사랑해',bs:'30', active:false},
        { id:3, name: '별로',bs:'24', active:false},
        { id:4, name: '개운',bs:'30', active:true},
        { id:5, name: '기쁨',bs:'26', active:false},
        { id:6, name: '앗싸',bs:'24', active:false},
        { id:7, name: '열받음',bs:'26', active:false},
        { id:8, name: '번뜩',bs:'30', active:false},
        { id:9, name: '짜증',bs:'22', active:false},
        { id:10, name: '행복',bs:'28', active:false},
        { id:11, name: '끝',bs:'30', active:false},
        { id:12, name: '그냥',bs:'20', active:false},
        { id:13, name: '파이팅',bs:'20', active:false},
        { id:14, name: '즐거움',bs:'24', active:false},
        { id:15, name: '설렘',bs:'24', active:false},
        { id:16, name: '외로움',bs:'24', active:false},
        { id:17, name: '바쁨',bs:'20', active:false},
        { id:18, name: '아픔',bs:'22', active:false},
        { id:19, name: '쓸쓸',bs:'22', active:false},
        { id:20, name: '명쾌',bs:'22', active:false},
        { id:21, name: '위험',bs:'20', active:false},
        { id:22, name: '신나',bs:'24', active:false},
        { id:23, name: '황당',bs:'22', active:false},
        { id:24, name: '불안',bs:'24', active:false},
        { id:25, name: '귀찮음',bs:'24', active:false},
        { id:26, name: '그리움',bs:'24', active:false},
        //스크롤 확인 임의 추가
        { id:0, name: '사용안함',bs:'18', active:false},
        { id:1, name: '답답',bs:'20', active:false},
        { id:2, name: '사랑해',bs:'30', active:false},
        { id:3, name: '별로',bs:'24', active:false},
        { id:4, name: '개운',bs:'30', active:true},
        { id:5, name: '기쁨',bs:'26', active:false},
        { id:6, name: '앗싸',bs:'24', active:false},
        { id:7, name: '열받음',bs:'26', active:false},
        { id:8, name: '번뜩',bs:'30', active:false},
        { id:9, name: '짜증',bs:'22', active:false},
        { id:10, name: '행복',bs:'28', active:false},
        { id:11, name: '끝',bs:'30', active:false},
        { id:12, name: '그냥',bs:'20', active:false},
        { id:13, name: '파이팅',bs:'20', active:false},
        { id:14, name: '즐거움',bs:'24', active:false},
        { id:15, name: '설렘',bs:'24', active:false},
        { id:16, name: '외로움',bs:'24', active:false},
        { id:17, name: '바쁨',bs:'20', active:false},
        { id:18, name: '아픔',bs:'22', active:false},
        { id:19, name: '쓸쓸',bs:'22', active:false},
        { id:20, name: '명쾌',bs:'22', active:false},
        { id:21, name: '위험',bs:'20', active:false},
        { id:22, name: '신나',bs:'24', active:false},
        { id:23, name: '황당',bs:'22', active:false},
        { id:24, name: '불안',bs:'24', active:false},
        { id:25, name: '귀찮음',bs:'24', active:false},
        { id:26, name: '그리움',bs:'24', active:false},
      ],
      }
    },
}
</script>

<style lang="scss" scoped>
</style>
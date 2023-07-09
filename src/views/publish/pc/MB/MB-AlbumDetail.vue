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
            <H2 class="title_page mh-title">쥬크박스</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section mt="12">
          <TitleBar class="title_list jukebox">
            <h3>총 420곡</h3>
            <div class="align">
              <Button value="곡명순" class="selected" text></Button>
              <Button value="아티스트순" text></Button>
              <Button value="구매순" text></Button>
            </div>
            <!--<div class="btn_bgm">
              <span class="count">3</span>
              <Button value="BGM 추가" text large></Button>-->
              <!--<Button value="BGM 추가" text large disabled></Button>-->
            <!--</div>-->
          </TitleBar>
          <TitleBarList class="music_cate3">
            <!--<li><Checkbox class="styled_checkbox web" /></li>-->
            <li>곡/앨범</li>
            <li>아티스트</li>
            <li>듣기</li>
          </TitleBarList>
          <ListMusics class="music_cate3">
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">잔소리</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">황치열</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="playing">
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">금요일에 만나요 (Feat. 장이정 Of History)</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">SHOST9</div>
              <IconButton value="play" class="ico_stop" color="cy_blue" />
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">가시밭길</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">프리스타일</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="selected">
              <!--<div class="check"><Checkbox class="styled_checkbox web" input-value="true" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">애인 있어요</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">정승환</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="selected">
              <!--<div class="check"><Checkbox class="styled_checkbox web" input-value="true" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">자니</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">하성운X펀치</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="selected">
              <!--<div class="check"><Checkbox class="styled_checkbox web" input-value="true" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">Gallery</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">박지훈</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="play">
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">어떻게 이별까지 사랑하겠어, 널 사랑하는 거지</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">죠지</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">다음생이 있다면 당신을 만나서 다시 사랑할래요</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">임재현</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">신호등</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">이무진</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">STAY</p>
                <p class="cyworld">STAY</p>
              </div>
              <div class="player">The Kid LAROI</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
          </ListMusics>
        </Section>

      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>

    <Alert cardClass="giftselect" :open="music_info_popup" max-width="600">
      <template v-slot:dialog-title>
        <v-card-title>앨범 소개
          <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large @click="music_info_close()" />
        </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          <JukeboxInfo>
            <div class="overflow-y-auto">
              <h3>Breakdown</h3>
              <p class="cover">
                <img src="/img/temp_music.png" alt="">
              </p>
              <ListJukeboxInfo>
                <li>
                  <p class="title">아티스트</p>
                  <p>에픽하이 (EPIK HIGH)</p>
                </li>
                <li>
                  <p class="title">앨범 종류</p>
                  <p>정규</p>
                </li>
                <li>
                  <p class="title">발매일</p>
                  <p>2008.06.10</p>
                </li>
                <li>
                  <p class="title">장르</p>
                  <p>랩/힙합</p>
                </li>
                <li>
                  <p class="title">스타일</p>
                  <p>힙합, 팝랩</p>
                </li>
                <li>
                  <p class="title">기획사</p>
                  <p>Stone Music Entertainment</p>
                </li>
                <li>
                  <p class="title">유통사</p>
                  <p>지니뮤직</p>
                </li>
                <li>
                  <p class="title">재생 시간</p>
                  <p>1:08:25</p>
                </li>              
              </ListJukeboxInfo>
              <TextJukeboxInfo>
                <p>
                  2008년 4월 17일, 절망으로부터 구원의 메시지를 담아 발표한 에픽 하이의 5집 앨범 [Pieces, Part One]! 팬들의 뜨거운 기대 속에 선주문 5만장을 기록하며 발매된 본 앨범의 타이틀곡 'One'은 온.오프라인의 모든 차트에서 1위에 올랐으며, 타이틀곡 외에 '우산' 또한 타이틀곡 못지 않은 사랑을 받으며 2008년 상반기 가요계를 강타했다.
                </p>
                <p>
                  이러한 에픽 하이가 'One'에 이어 'Breakdown'을 후속곡으로, 기존과는 또 다른 이미지로 활동을 개시한다. 'One'이 절망 속에 힘들어하는 이들에게 보내는 희망의 메시지를 담았다면, 'Breakdown'은 미래의 역사는 젊은 세대가 스스로 만들어갈 수 있는 것임으로 하나로 뭉쳐 헤쳐 나가자는 메시지를 강력한 가사와 비트로 구성한 곡이다.<br>
                  이러한 에픽 하이가 'One'에 이어 'Breakdown'을 후속곡으로, 기존과는 또 다른 이미지로 활동을 개시한다. 'One'이 절망 속에 힘들어하는 이들에게 보내는 희망의 메시지를 담았다면, 'Breakdown'은 미래의 역사는 젊은 세대가 스스로 만들어갈 수 있는 것임으로 하나로 뭉쳐 헤쳐 나가자는 메시지를 강력한 가사와 비트로 구성한 곡이다.
                </p>
              </TextJukeboxInfo>
            </div>
          </JukeboxInfo>
        </v-card-text>
      </template>
    </Alert>

  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Music from '@/views/pc/aside/Music.vue';
import Friends from '@/views/pc/aside/Friends.vue';
import IconButton from '@/components/IconButton.vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
//import Checkbox from '@/components/Checkbox.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MHMain from '@/styles/pc/MH/MH-main';

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
    //Checkbox,
    Alert,
    Button,
    ...MHMain,
  },
  data(){
    return {
      checkedValues: true,
      music_info_popup: true,
    }
  },
  methods:{
    music_info_open(){
      this.music_info_popup = true;
    },
     music_info_close(){
      this.music_info_popup = false;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
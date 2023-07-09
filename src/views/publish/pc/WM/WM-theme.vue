<template>
  <Wrap>
    <Header :selectedIndex="2"/>
    <Container>
      <Aside class="left">
        <AsideInner class="inner_aside">
          <Profile />
        </AsideInner>
      </Aside>
      <Main>
        <Section>
          <MhTitle class="noline">
            <H2 class="title_page fw300">#가을</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section mt="12">
          <MusicThemeTitleImg>
            <img src="/img/temp_music.png" alt="">
          </MusicThemeTitleImg>
          <TitleBarList class="music chart">
            <li>곡/앨범</li>
            <li>아티스트</li>
            <li>듣기</li>
            <li>구매</li>
          </TitleBarList>
          <ListMusics class="music chart">
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">1</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">2</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_stop" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">3</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">4</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">5</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">6</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">7</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">8</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">9</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            <li>
              <!--<div class="check"><Checkbox class="styled_checkbox web" /></div>-->
              <div class="thumb chart"><img src="/img/temp_music.png" alt=""></div>
              <div class="rank">100</div>
              <div class="title_list chart">
                <p class="music">10 Minutes</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player chart">프로미스나인</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" width="60" height="36" class="fw400 music-buy" @click="music_buy_confirm">>구매</Button>
            </li>
            
          </ListMusics>
            

        </Section>

      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Events />
        </AsideInner>
      </Aside>

       <Alert cardClass="title2 web" :open="webPopup2" @update:dateSettting="webSetDate2" max-width="300">
        <template v-slot:dialog-title>
          <v-card-title>선택한 곡을 구매할까요? <br/> 도토리 7개가 차감됩니다.</v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns cancel" text  x-large @click="webPopup2 = false">취소</v-btn>
          <v-btn class="two-btns" text x-large @click="need_more_corn">확인</v-btn>
        </template>
      </Alert>
      <Alert cardClass="title2 web" :open="webPopup3" @update:dateSettting="webSetDate3" max-width="300">
        <template v-slot:dialog-title>
          <v-card-title>보유한 도토리가 부족합니다. <br/> 도토리를 충전할까요?</v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns cancel" text  x-large @click="webPopup3 = false">취소</v-btn>
          <v-btn class="two-btns" text x-large @click="webPopup3 = false">확인</v-btn>
        </template>
      </Alert>

    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue'
import Events from '@/views/pc/aside/Events.vue';
import IconButton from '@/components/IconButton.vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
//import Checkbox from '@/components/Checkbox.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MHMain from '@/styles/pc/MH/MH-main';
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
    //Checkbox,
    Alert,
    Button,
    ...MHMain,
    ...WHhome,
  },
  data(){
    return {
      checkedValues: true,
      webPopup2:false,
      webPopup3:false,
    }
  },
  methods:{
    music_buy_confirm(){
      this.webPopup2=true;
    },
    need_more_corn(){
      this.webPopup2=false;
      this.webPopup3=true;
    },
    webSetDate2(webValue2) {
      this.webPopup2 = webValue2
    },
    webSetDate3(webValue3) {
      this.webPopup3 = webValue3
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
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
            <H2 class="title_page">상세 내역보기</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" class="history" pt="48">
          <div class="titlebar">
            <H3>BGM 구매 6건</H3>
            <p class="use_total">도토리 사용 합계 <span class="count">48개</span></p>
            <p class="date">2021.11.01 15:27</p>
          </div>
          <ListMusics class="music_buy">
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">잔소리</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">황치열</div>
              <div class="acorn">도토리 7개</div>
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">금요일에 만나요 (Feat. 장이정 Of History)</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">SHOST9</div>
              <div class="acorn">도토리 7개</div>
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">가시밭길</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">프리스타일</div>
              <div class="acorn">도토리 7개</div>
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">애인 있어요</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">정승환</div>
              <div class="acorn">도토리 7개</div>
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">자니</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">하성운X펀치</div>
              <div class="acorn">도토리 7개</div>
            </li>
          </ListMusics>
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
//import Alert from '@/components/Alert.vue';
//import Button from '@/components/Button.vue';
//import InputText from '@/components/InputText.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import WHhome from '@/styles/pc/WH/WH-home';
import EM_main from '@/styles/pc/EM/EM-main';

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
    //Alert,
    //Button,
    ...WHhome,
    ...EM_main,
    //InputText,
  },
  data(){
    return {
    }
  },
  methods:{
  },
}
</script>

<style lang="scss" scoped>
</style>
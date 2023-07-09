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
           
          </MhTitle>
        </Section>

    <Section mt="12" pb="80">
      <diaryTitle>
        <div class="btn_diary">
          <v-menu 
          offset-y
          left
          transition="slide-y-transition"
          >
          <template v-slot:activator="{ on, attrs }">
              <IconButton
              :attrs="attrs"
              :on="on"
              class="ico_more white"
              color="cy_gray"
              fab
              large
              depressed
              >
              더보기
              </IconButton>
          </template>
            <ListMore class="lst_more_diary">
              <template v-slot:items>
                <ListMoreDesc primary="신고하기" class="notify" />
              </template>
            </ListMore>
          </v-menu>
        </div>
          <li class="tit">
              <p class="thumb_member">싸이대학교</p>
          </li>
          <li class="openset">
              멤버공개
          </li>
          <li class="date">
              2021.06.17
          </li>
          <li class="status">
              <p class="feel">개운</p>
              <p class="weather">소나기</p>
          </li>
        </diaryTitle>

      <DiaryContents>
      <p class="thumb"><img src="/img/temp_profile.png" alt="">닉네임만들어가요</p>
        <p>윤스테이를 보고 반려인이 노래를 부르던 와플팬을 나는 사고 싶지 않았다. 사놓고 몇 번을 해먹을지 눈에보여<br>
          &nbsp;그냥물건 들이지 말고 와플이고 크로플이고 사먹자 했다. </p>

        <p>
        그는 다섯번을 해먹어도 그 만큼의 만족이 있을거라 말했다. 틀리지 않은 말에 묘하게 설득되어 결국 대세 뒷북<br> 
        모드로와플팬을 샀다. <router-link to="/" class="notitag">@홍길동</router-link> 자본주의 일개미들의 작은 행복을 위한 물건. 그덕에 요즘 온갖 것들을  <router-link to="/" class="hashtag">#와플화</router-link>
        시키는데 열을 올리고있다. (조만간 신발도 구울듯.) 그렇게나마 우리의 추억은 쌓이고 이 물건의 쓰임은 다 
        하길 바라고 있다.</p>

        <p> 
          <router-link to="/" class="notitag">@장덕출</router-link> 윤스테이 빨리봐라<br> 
          <router-link to="/" class="hashtag">#윤스테이</router-link> <router-link to="/" class="hashtag">#와플팬</router-link>
        </p>

        <span class="time">1일전</span>
      </DiaryContents>
    </Section>
 
        <Section mt="12" pt="33" pb="33">
          <DiaryComment>
            <CountReply><b class="num">0개</b>의 댓글이 있어요.</CountReply>
          </DiaryComment>
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
    }
  },
  methods:{
  },
}
</script>

<style lang="scss" scoped>
</style>
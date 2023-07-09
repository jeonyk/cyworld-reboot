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
            <H2 class="title_page">명예의 전당 주인공 보기</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" class="">
          <HeroContents>
            <div class="hero">
              <p class="date">2021년 9월 2째주</p>
              <p class="intro">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
              <p class="rank first">1</p>
              <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
              <p class="profile">김사이입니다</p>
              <p class="likebox"><span class="liketit">칭찬득표수</span><span class="like">152,213</span> 명이 칭찬했어요.</p>
            </div>
              <p class="subtitle">칭찬합시다 사연</p>

              <p class="herotitle">
              타이틀입니다타이틀은최대서른자입니다서른자입니 다서른자서른자</p>

              <p class="txt1">
              삼안 E&amp;C의 남다른 역량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 산다는 것은 어쩌면 장돌뱅이처럼<br>
              돌고 돌아가는 길을 걸어가는 것일지 모른다. 그리고 그 길에서 마주할 앞날의 그 무엇인가를 고대하며 오늘 하루<br>
              를 채워나가면 그 또한 삼안 E&amp;C의 남다른 역량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 산다는 것은 어쩌면 장돌<br>
              뱅이처럼 돌고 돌아가는 길을 걸어가는 것일지 모른 다. 
              </p>

              <p class="txt2">
              그리고 그 길에서 마주할 앞날의 그 무엇인가를 고대하며 오늘 하루를 채워나가면 그 또한 삼안 E&amp;C의 남다른 역<br>
              량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 산다는 것은 어쩌면 장돌뱅이처럼 돌고 돌아가는 길을<br>
              걸어가는 것일지 모른다. 그리고 그 길에서 마주할 앞날의 그 무엇인가를 고대하며 오늘 하루를 채워나가면 그 또<br>
              한 삼안 E&amp;C의 남다른 역량과 인간미를 갖춘 능력자 박동훈 부장님을 칭찬합니다. 
              </p>

              <p class="txt3">
              산다는 것은 어쩌면 장돌뱅이처럼 돌고 돌아가는 길을 걸어가는 것일지 모른다. 그리고 그 길에서 마주할 앞날의<br>
              그 무엇인가를 고대하며 오늘 하루를 채워나가면 그 또한 의미가 있으리라!
              </p>

              <div class="support">
                  <span><img src="/img/acorn_illust_05.png" alt=""></span>
                  <p>사연에 공감하셨으면 도토리 후원하기를 통해 마음을 전달해주세요.<br>
                  보내주신 도토리는 투표가 종료된 후 당사자에게 100% 전달됩니다.</p>
                  <Button value="도토리 후원하기" large  width="150" class="btn_acorn" />
              </div>
          </HeroContents>
   
        
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
import Button from '@/components/Button.vue';

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
    //Alert,
    Button,
    ...WHhome,
  },
  data(){
    return {
      expand: false,
      expand2: false,
      expand3: false,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
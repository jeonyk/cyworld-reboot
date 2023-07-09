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
            <H2 class="title_page">이 주의 주인공</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" class="">
          <NextWeekHero class="page">
            <div class="date">2021년 9월 2째주</div>
            <ListHeroes>
              <li>
                <router-link to="/">
                  <span class="rank first">1</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">미아</p>
                  <p class="percent">
                    <span :style="{ width: 60 + '%' }"></span>
                  </p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank second">2</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">체리포터</p>
                  <p class="percent">
                    <span :style="{ width: 60 + '%' }"></span>
                  </p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <span class="rank third">3</span>
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">슈웅슈웅부웅부웅</p>
                  <p class="percent">
                    <span :style="{ width: 60 + '%' }"></span>
                  </p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">김사이입니다</p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">오징어외계인</p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">깜찍이소다</p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">닉네임은최대열세자테스트중</p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">하늘하늘이</p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <p class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </p>
                  <p class="nickname">방배동존잘남</p>
                  <p class="count">
                    칭찬 <span class="num">152,213</span>명
                  </p>
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 방배동존잘남입니다</p>
                </router-link>
              </li>
            </ListHeroes>
          </NextWeekHero>
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
    //Alert,
    // Button,
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
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
            <H2 class="title_page">칭찬합시다 스튜디오</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" class="banner">
          <Banner class="praise">
            <router-link to=""><img src="/img/temp_banner4.png" alt=""></router-link>
          </Banner>
          <!--<Intro class="praise">
            <h3>칭찬합시다 스튜디오란?</h3>
            <p class="desc">싸이월드에서 오픈한 “칭찬합시다 스튜디오”를 소개합니다.</p>
            <router-link to="/" class="link">자세히보기</router-link>
          </Intro>-->
        </Section>

        <Section mt="12" class="studio">
          <ThisWeekHero pt="52" pb="60">
            <div class="titlebar">
              <h3>이 주의 주인공을 소개합니다.</h3>
            </div>
            <div class="date">2021년 9월 2째주</div>
              <ListHeroes>
                <li>
                  <router-link to="/">
                    <span class="rank first">1</span>
                    <p class="thumb">
                      <img src="/img/temp_profile.png" alt="">
                    </p>
                    <p class="nickname">너무달라달라우리들은자매</p>
                    <p class="percent">
                      <span :style="{ width: 60 + '%' }"></span>
                    </p>
                    <p class="count">
                      칭찬 <span class="num">102,999</span>명
                    </p>
                  </router-link>
                  <router-link to="/" class="over">
                    <div>
                      <p class="title">너무달라달라우리들은자매</p>
                      <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                      <router-link to="/" class="btn_more">더보기</router-link>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <span class="rank second">2</span>
                    <p class="thumb">
                      <img src="/img/temp_profile.png" alt="">
                    </p>
                    <p class="nickname">삼안의건축구조기술수동훈이 </p>
                    <p class="percent">
                      <span :style="{ width: 60 + '%' }"></span>
                    </p>
                    <p class="count">
                      칭찬 <span class="num">102,999</span>명
                    </p>
                  </router-link>
                  <router-link to="/" class="over">
                    <div>
                      <p class="title">삼안의건축구조기술수동훈이</p>
                      <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                      <router-link to="/" class="btn_more">더보기</router-link>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/">
                    <span class="rank third">3</span>
                    <p class="thumb">
                      <img src="/img/temp_profile.png" alt="">
                    </p>
                    <p class="nickname">봄여름가을겨울</p>
                    <p class="percent">
                      <span :style="{ width: 60 + '%' }"></span>
                    </p>
                    <p class="count">
                      칭찬 <span class="num">102,999</span>명
                    </p>
                  </router-link>
                  <router-link to="/" class="over">
                    <div>
                      <p class="title">봄여름가을겨울</p>
                      <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
                      <router-link to="/" class="btn_more">더보기</router-link>
                    </div>
                  </router-link>
                </li>
            </ListHeroes>
            <router-link to="/" class="btn_more">더보기</router-link>
          </ThisWeekHero>
          <HallOfFame pt="60" pb="52">
            <div class="titlebar">
              <h3>명예의 전당</h3>
              <p>그동안 선정된 칭찬합시다 주인공을 만나보세요</p>
            </div>
            <div class="date">2021년 9월 1째주</div>
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
            <router-link to="/" class="btn_more">더보기</router-link>
          </HallOfFame>
          <NextWeekHero pt="60">
             <div class="titlebar">
              <h3>다음주 주인공을 칭찬해 주세요.</h3>
              <p>다음 주 칭찬합시다 주인공을 뽑아주세요.</p>
            </div>
            <div class="date">2021년 9월 3째주</div>
            <ListHeroes>
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
                  <p class="desc">15년 간 복지시설 아이들을 위해 후원하신 건축구조기술사 박동훈님을 소개합니다.</p>
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
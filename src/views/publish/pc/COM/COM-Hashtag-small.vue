<template>
  <Wrap>
    <Header :selectedIndex="1"/>
    <Container>
      <Aside class="left">
        <AsideInner class="inner_aside">
          <Profile />
        </AsideInner>
      </Aside>
      <Main>
        <Section>
          <TitlePage>
            <H2 class="title_page">#JMT</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitlePage>
        </Section>

        <Section mt="12" pt="18">
          <TitleBar class="title_list gallery_grid">
            <h4>
              내 미니홈피 검색 결과 <span class="num">99개</span>의 글이 있습니다
            </h4>
            <!-- <IconButton class="ico_gallery_grid3 cy_gray--text" value="3단 목록"></IconButton> -->
            <IconButton class="ico_gallery_grid5 cy_gray--text" value="5단 목록"></IconButton>
          </TitleBar>
          <ListPictures class="small">
            <li>
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="small">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li class="gallery_more">
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
              <span><img src="/img/svg/ico_photo.svg" alt=""></span>
            </li>
            <li>
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <div class="text">음</div>
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li class="gallery_more">
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
              <span><img src="/img/svg/ico_photo.svg" alt=""></span>
            </li>
            <li>
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="/img/temp_profile.png" alt="">
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <div class="text">B</div>
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <div class="text">T</div>
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <div class="text">S</div>
                <div class="desc">
                  <p class="nickname">김사이사이좋은김사이좋은나</p>
                  <p class="date">2021.11.18</p>
                </div>
              </router-link>
            </li>
          </ListPictures>
        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>
    <Footer></Footer>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Footer from '@/views/publish/pc/includes/Footer.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Music from '@/views/publish/pc/aside/Music.vue';
import Friends from '@/views/publish/pc/aside/Friends.vue';
import IconButton from '@/components/IconButton.vue';
//import Alert from '@/components/Alert.vue';
//import Button from '@/components/Button.vue';
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
    Footer,
    Profile,
    Music,
    Friends,
    IconButton,
    //Checkbox,
    //Alert,
    //Button,
    ...MHMain,
  },
  data(){
    return {
      checkedValues: true, 
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
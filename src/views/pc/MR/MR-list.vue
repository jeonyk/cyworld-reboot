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
            <H2 class="title_page mh-title">미니룸</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section mt="12" pb="20" class="mr_active">
          <TitleBar class="mr">
            <Checkbox class="styled_checkbox circle" input-value="true" disabled />
            <p class="subtitle">가을여자, 김사이 미니룸</p>
          </TitleBar>
          <MiniRoom>
            <img src="/img/temp_miniroom.png" alt="">
          </MiniRoom>
        </Section>

        <Section mt="12" pb="20">
          <TitleBar class="mr">
            <p class="subtitle">첫 독립, 첫 원룸, 내 미니룸</p>
            <!-- <v-menu 
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
                  <ListMoreDesc primary="메인 미니룸으로 설정" />
                  <ListMoreDesc primary="미니룸 삭제" />
                </template>
              </ListMore>
            </v-menu> -->
          </TitleBar>
          <MiniRoom>
            <img src="/img/temp_miniroom.png" alt="">
          </MiniRoom>
        </Section>

        <Section mt="12" pb="20">
          <TitleBar class="mr">
            <p class="subtitle">다락방 인생</p>
          </TitleBar>
          <MiniRoom>
            <img src="/img/temp_miniroom.png" alt="">
          </MiniRoom>
        </Section>

        <Section mt="12" pb="20">
          <TitleBar class="mr">
            <p class="subtitle">기본 미니룸</p>
            <!-- <v-menu 
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
                  <ListMoreDesc primary="메인 미니룸으로 설정" />
                </template>
              </ListMore>
            </v-menu> -->
          </TitleBar>
          <MiniRoom>
            <img src="/img/temp_miniroom.png" alt="">
          </MiniRoom>
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
//import Alert from '@/components/Alert.vue';
//import Button from '@/components/Button.vue';
import Checkbox from '@/components/Checkbox.vue';

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
    Checkbox,
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
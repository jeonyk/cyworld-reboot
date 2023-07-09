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
          <TitleBar class="noline">
            <H2 class="title_page mh-title">방명록</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" pb="0" class="bg_none">
          <Notice>방명록 공지사항이 노출됩니다.</Notice>
          <GuestBook>
            <div class="items depth1">
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                  “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
                </p>
                <Button color="cy_blue" text value="댓글 9,999개" class="btn_comment"></Button>
              </div>
              <div class="function">
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
            </div>
          </GuestBook>
          <GuestBook class="lock">
            <div class="items depth1">
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i><span class="chip">비밀이야</span></p>
                <p class="desc">
                  싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                  “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
                </p>
                <Button color="cy_blue" text value="댓글" class="btn_comment"></Button>
              </div>
              <div class="function">
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
            </div>
          </GuestBook>
          <GuestBook>
            <div class="items depth1">
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                  “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
                </p>
                <Button color="cy_blue" text value="댓글 3개" class="btn_comment"></Button>
              </div>
              <div class="function">
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
            </div>
          </GuestBook>
          <GuestBook>
            <div class="items depth1">
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                  “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
                </p>
                <Button color="cy_blue" text value="댓글 3개" class="btn_comment"></Button>
              </div>
              <div class="function">
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
            </div>
          </GuestBook>
          <GuestBook>
            <div class="items depth1">
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                  “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
                </p>
                <Button color="cy_blue" text value="댓글 3개" class="btn_comment"></Button>
              </div>
              <div class="function">
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
            </div>
          </GuestBook>
          <GuestBook>
            <div class="items depth1">
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                  “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
                </p>
                <Button color="cy_blue" text value="댓글 3개" class="btn_comment"></Button>
              </div>
              <div class="function">
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
            </div>
          </GuestBook>
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
import Button from '@/components/Button.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MGlist from '@/styles/pc/MG/MG-list';

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
    //Alert,
    Button,
    ...MGlist,
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
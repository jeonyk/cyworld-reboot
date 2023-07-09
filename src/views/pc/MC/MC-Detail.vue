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
        
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>

    <Alert cardClass="modalpopup" :open="popup" max-width="550">
      <template v-slot:dialog-title>
        <v-card-title>
          <h4 class="title_modal">일촌평</h4>
          <ul class="lst_func">
            <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close()" /></li>
          </ul>
        </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <GroupReply class="overflow-y-auto friend">
          <ListReply>
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle"><span class="nickname">김사이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  일촌평 내용이 출력됩니다. 따로 더보기 처리는 없으며 다보여줍니다. 내용은 60자로 제한합니다.
                </p>
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

                  <ListMore class="lst_more_reply">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
          </ListReply>
          <ListReply>
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle"><span class="nickname">김사이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  일촌평 내용이 출력됩니다. 따로 더보기 처리는 없으며 다보여줍니다. 내용은 60자로 제한합니다.
                </p>
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

                  <ListMore class="lst_more_reply">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
          </ListReply>
          <ListReply>
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle"><span class="nickname">김사이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  일촌평 내용이 출력됩니다. 따로 더보기 처리는 없으며 다보여줍니다. 내용은 60자로 제한합니다.
                </p>
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

                  <ListMore class="lst_more_reply">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
          </ListReply>
          <ListReply>
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle"><span class="nickname">김사이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  일촌평 내용이 출력됩니다. 따로 더보기 처리는 없으며 다보여줍니다. 내용은 60자로 제한합니다.
                </p>
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

                  <ListMore class="lst_more_reply">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
          </ListReply>
          <ListReply>
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle"><span class="nickname">김사이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  일촌평 내용이 출력됩니다. 따로 더보기 처리는 없으며 다보여줍니다. 내용은 60자로 제한합니다.
                </p>
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

                  <ListMore class="lst_more_reply">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
          </ListReply>
          <ListReply>
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle"><span class="nickname">김사이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  일촌평 내용이 출력됩니다. 따로 더보기 처리는 없으며 다보여줍니다. 내용은 60자로 제한합니다.
                </p>
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

                  <ListMore class="lst_more_reply">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
          </ListReply>
          <ListReply>
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle"><span class="nickname">김사이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  일촌평 내용이 출력됩니다. 따로 더보기 처리는 없으며 다보여줍니다. 내용은 60자로 제한합니다.
                </p>
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

                  <ListMore class="lst_more_reply">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
          </ListReply>
        </GroupReply>
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
// import Button from '@/components/Button.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MAlist from '@/styles/pc/MA/MA-list';

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
    Alert,
    // Button,
    ...MAlist,
  },
  data(){
    return {
      popup: true,
      expand: false,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
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
          <h4 class="title_modal">댓글</h4>
          <ul class="lst_func">
            <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close()" /></li>
          </ul>
        </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <CountReply><router-link to="/">댓글 전체보기</router-link></CountReply>
        <GroupReply class="overflow-y-auto">
          <ListReply>
            <div class="items depth1">
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">원슈이원슈이원슈이원슈이이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  포유류 영장목 중에서 사람을 제외한 동물을 일컫는 일반적 호칭으로 투데이 멤버투데이 멤버 <span class="notitag">@김사이</span>
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
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">요리조리</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  우리집에 파스타 먹자!
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
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">원슈이원슈이원슈이원슈이이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  포유류 영장목 중에서 사람을 제외한 동물을 일컫는 일반적 호칭으로 투데이 멤버투데이 멤버... <router-link to="/" class="btn_more">더보기</router-link>
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
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">요리조리</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  우리집에 파스타 먹자!
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
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">맛있닭</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  치킨 1+1 OPEN 행사! 방명록 남기면 50% 할인 쿠폰 제공까지!!!!~
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
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  포유류 영장목 중에서 사람을 제외한 동물을 일컫는 일반적 호칭으로 투데이 멤버투데이 멤버... <router-link to="/" class="btn_more">더보기</router-link>
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
              <div class="thumb">
                <img src="/img/temp_profile.png" alt="">
              </div>
              <div class="contents">
                <p class="subtitle"><span class="nickname">해시태그나라 멘션공주</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                <p class="desc">
                  <span class="notitag">@장덕출</span> 이거 꼭 봐~!!!! <span class="hashtag">#레거시</span>
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
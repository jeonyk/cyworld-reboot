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
            <H2 class="title_page mh-title">사진첩</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </TitleBar>
        </Section>

        <Section mt="12" pb="20" class="bg_none">
          <AlbumDetail>
            <div class="titlebar">
              <h4>사진첩 제목은 20자까지 입력 허용합니다 (비율 3:2)</h4>
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

                <ListMore class="mh_setting">
                  <template v-slot:items>
                    <ListMoreDesc primary="신고하기" class="notify" />
                  </template>
                </ListMore>
              </v-menu>
            </div>
            <div class="thumb">
              <img src="/img/temp_album.png" alt="">
            </div>
            <div class="desc">
              본문 내용은 제한없이 글을 쓸 수 있었던 <router-link to="/" class="hashtag">#레거시</router-link>와 다르게 글자수 제한이 있습니다. 약 2,000자 정도 내외로 제한이 필요하며, 기존 글중에 초과된 게시글이 있을 경우 짤리지 않고 제공합니다. <router-link to="/" class="notitag">@얍</router-link> 하지만 신규로 등록하는 게시글은 글자수 정책을 지켜야합니다. 이렇게 적다보니까 어느덧 3번째 줄에 도달하였습니다. <router-link to="/" class="notitag">@홍길동</router-link> 도달하였... <router-link to="/" class="btn_more">더보기</router-link>
            </div>
            <div class="date">1일전</div>
            <router-link to="/" class="original">
              <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
              <span class="desc">무궁화꽃이피었습니다무궁화 <b class="nickname">애국자김씨애국자이씨애국자</b> 님이 작성한 게시물이에요</span>
            </router-link>
            <div class="function">
              <Button value="공감" text class="btn_like on">
                <template v-slot:icon-left>
                  <v-icon class="ico_like" left></v-icon>
                </template>
              </Button>
              <Button value="댓글" text class="btn_comment">
                <template v-slot:icon-left>
                  <v-icon class="ico_comment" left></v-icon>
                </template>
              </Button>
              <v-spacer></v-spacer>
              <Button value="퍼가요" text class="btn_share">
                <template v-slot:icon-left>
                  <v-icon class="ico_share" left></v-icon>
                </template>
              </Button>
              <p class="count">
                <ul class="lst_thumb">
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                  <li><span class="thumb"><img src="/img/temp_profile.png" alt=""></span></li>
                </ul>
                <b class="num">200명</b>이 이 글에 공감하고있어요.
              </p>
            </div>
          </AlbumDetail>
          <AlbumDetail>
            <div class="titlebar">
              <h4>사진첩 제목은 20자까지 입력 허용합니다 (비율 3:2)</h4>
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

                <ListMore class="mh_setting">
                  <template v-slot:items>
                    <ListMoreDesc primary="신고하기" class="notify" />
                  </template>
                </ListMore>
              </v-menu>
            </div>
            <div class="thumb">
              <img src="/img/temp_album.png" alt="">
            </div>
            <div class="desc">
              어떠냐옹
            </div>
            <div class="date">2일전</div>
            <div class="function">
              <Button value="공감" text class="btn_like">
                <template v-slot:icon-left>
                  <v-icon class="ico_like" left></v-icon>
                </template>
              </Button>
              <Button value="댓글" text class="btn_comment">
                <template v-slot:icon-left>
                  <v-icon class="ico_comment" left></v-icon>
                </template>
              </Button>
              <v-spacer></v-spacer>
              <Button value="퍼가요" text class="btn_share">
                <template v-slot:icon-left>
                  <v-icon class="ico_share" left></v-icon>
                </template>
              </Button>
              <!-- <p class="count"><b class="num">200명</b>이 이 글에 공감하고있어요.</p> -->
            </div>
          </AlbumDetail>
          <AlbumDetail>
            <div class="titlebar">
              <h4>사진첩 제목은 20자까지 입력 허용합니다 (비율 3:2)</h4>
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

                <ListMore class="mh_setting">
                  <template v-slot:items>
                    <ListMoreDesc primary="신고하기" class="notify" />
                  </template>
                </ListMore>
              </v-menu>
            </div>
            <div class="thumb">
              <img src="/img/temp_album.png" alt="">
            </div>
            <div class="desc">
              고양이 랜드에<br />오신걸 환영하오... <router-link to="/" class="btn_more">더보기</router-link>
            </div>
            <div class="date">2일전</div>
            <div class="function">
              <Button value="공감" text class="btn_like">
                <template v-slot:icon-left>
                  <v-icon class="ico_like" left></v-icon>
                </template>
              </Button>
              <Button value="댓글" text class="btn_comment">
                <template v-slot:icon-left>
                  <v-icon class="ico_comment" left></v-icon>
                </template>
              </Button>
              <v-spacer></v-spacer>
              <Button value="퍼가요" text class="btn_share">
                <template v-slot:icon-left>
                  <v-icon class="ico_share" left></v-icon>
                </template>
              </Button>
              <p class="count">
                <b class="num">2명</b>이 이 글에 공감하고있어요.
              </p>
            </div>
          </AlbumDetail>
        </Section>

        
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
        <ListBlank class="blank_reply"><p class="msg">댓글이 없어요.</p></ListBlank>
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
import Button from '@/components/Button.vue';

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
    Button,
    ...MAlist,
  },
  data(){
    return {
      popup: true,
      expand: false,
      expand2: false,
      expand3: false,
      expand4: false,
      expand5: false,
      expand6: false,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
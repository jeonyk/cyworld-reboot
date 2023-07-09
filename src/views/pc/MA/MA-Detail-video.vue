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

        <Section mt="12" pb="0" class="bg_none">
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

                <ListMore class="lst_more_album">
                  <template v-slot:items>
                    <ListMoreDesc primary="신고하기" class="notify" />
                  </template>
                </ListMore>
              </v-menu>
            </div>
            <div class="thumb video">
              <swiper class="swiper" ref="albumSwiper" 
                :options="swiperOptions" 
                @slideChange="slideChangeTransitionStart"
              >
                <swiper-slide>
                  <img src="/img/temp_album.png" alt="">
                  <IconButton value="play" color="cy_blue" class="ico_video_play" xlarge></IconButton>
                  <!-- <IconButton value="stop" color="cy_blue" class="ico_video_stop" xlarge></IconButton> -->
                  <!-- <IconButton value="volume on" color="cy_gray" class="ico_video_volume_on" large></IconButton> -->
                  <!-- <IconButton value="volume off" color="cy_gray" class="ico_video_volume_off" large></IconButton> -->
                </swiper-slide>
                <swiper-slide>
                  <img src="/img/temp_album.png" alt="">
                  <IconButton value="play" color="cy_blue" class="ico_video_play" xlarge></IconButton>
                  <!-- <IconButton value="stop" color="cy_blue" class="ico_video_stop" xlarge></IconButton> -->
                  <!-- <IconButton value="volume on" color="cy_gray" class="ico_video_volume_on" large></IconButton> -->
                  <!-- <IconButton value="volume off" color="cy_gray" class="ico_video_volume_off" large></IconButton> -->
                </swiper-slide>
                <swiper-slide>
                  <img src="/img/temp_album.png" alt="">
                  <IconButton value="play" color="cy_blue" class="ico_video_play" xlarge></IconButton>
                  <!-- <IconButton value="stop" color="cy_blue" class="ico_video_stop" xlarge></IconButton> -->
                  <!-- <IconButton value="volume on" color="cy_gray" class="ico_video_volume_on" large></IconButton> -->
                  <IconButton value="volume off" color="cy_gray" class="ico_video_volume_off" large></IconButton>
                </swiper-slide>
                
                <!-- pagination -->
                <div class="swiper-pagination" slot="pagination"></div>
                    
                <!-- navigation -->
                <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"><IconButton value="volume off" color="cy_gray" class="ico_album_prev" large></IconButton></div>
                <div class="swiper-button-next swiper-btn-next" slot="button-next"><IconButton value="volume off" color="cy_gray" class="ico_album_next" large></IconButton></div>
              </swiper>

              
            </div>
            <div class="desc">
              본문 내용은 제한없이 글을 쓸 수 있었던 <router-link to="/" class="hashtag">#레거시</router-link>와 다르게 글자수 제한이 있습니다. 약 2,000자 정도 내외로 제한이 필요하며, 기존 글중에 초과된 게시글이 있을 경우 짤리지 않고 제공합니다. <router-link to="/" class="notitag">@얍</router-link> 하지만 신규로 등록하는 게시글은 글자수 정책을 지켜야합니다. 이렇게 적다보니까 어느덧 3번째 줄에 도달하였습니다. <router-link to="/" class="notitag">@홍길동</router-link> 도달하였... <router-link to="/" class="btn_more">더보기</router-link>
            </div>
            <div class="date">1일전</div>
            <!-- <router-link to="/" class="original">
              <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
              <span class="desc">무궁화꽃이피었습니다무궁화 <b class="nickname">애국자김씨애국자이씨애국자</b> 님이 작성한 게시물이에요</span>
            </router-link> -->
            <div class="function">
              <Button value="공감" text class="btn_like on">
                <template v-slot:icon-left>
                  <v-icon class="ico_like" left></v-icon> 
                </template>
              </Button>
              <Button value="댓글 10개" text class="btn_comment">
                <template v-slot:icon-left>
                  <v-icon class="ico_comment" left></v-icon>
                </template>
              </Button>
              <v-spacer></v-spacer>
              <v-menu 
                offset-y
                left
                transition="slide-y-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="btn_share"
                    fab
                    depressed
                  >
                    퍼가요
                  </v-btn>
                  </template>
                <ListMore class="mh_setting share">
                  <template v-slot:items>
                    <ListMoreDesc primary="카카오톡 공유" class="invite_kakao noline" />
                    <ListMoreDesc primary="링크 복사" class="invite_chain" />
                  </template>
                </ListMore>
              </v-menu>
              <p class="count">
                <!-- <ul class="lst_thumb">
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
                </ul> -->
                <router-link to="/"><b class="num">200명</b>이 이 글에 공감하고있어요.</router-link>
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
        <CountReply><b class="num">15개</b>의 댓글이 있어요.</CountReply>
        <GroupReply class="overflow-y-auto">
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
                <Button color="cy_blue" text value="댓글 16개" class="btn_comment" @click="expand = !expand"></Button>
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

                  <ListMore class="mh_setting">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
            <v-expand-transition>
              <v-card v-show="expand" class="mx-auto" elevation="0">
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      동해물과 백두산이 마르고 닳도록 하느님이 보우하사우리나라만세
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
                <div class="more_area">
                  <Button value="더보기" text class="btn_more"></Button>
                </div>
              </v-card>
            </v-expand-transition>
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
                <Button color="cy_blue" text value="댓글 1개" class="btn_comment" @click="expand2 = !expand2"></Button>
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

                  <ListMore class="mh_setting">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
            <v-expand-transition>
              <v-card v-show="expand2" class="mx-auto" elevation="0">
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                      “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
              </v-card>
            </v-expand-transition>
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
                <Button color="cy_blue" text value="댓글 1개" class="btn_comment" @click="expand3 = !expand3"></Button>
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

                  <ListMore class="mh_setting">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
            <v-expand-transition>
              <v-card v-show="expand3" class="mx-auto" elevation="0">
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                      “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
              </v-card>
            </v-expand-transition>
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
                <Button color="cy_blue" text value="댓글 1개" class="btn_comment" @click="expand4 = !expand4"></Button>
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

                  <ListMore class="mh_setting">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
            <v-expand-transition>
              <v-card v-show="expand4" class="mx-auto" elevation="0">
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                      “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
              </v-card>
            </v-expand-transition>
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
                <Button color="cy_blue" text value="댓글 1개" class="btn_comment" @click="expand5 = !expand5"></Button>
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

                  <ListMore class="mh_setting">
                    <template v-slot:items>
                      <ListMoreDesc primary="신고하기" class="notify" />
                    </template>
                  </ListMore>
                </v-menu>
              </div>
            </div>
            <v-expand-transition>
              <v-card v-show="expand5" class="mx-auto" elevation="0">
                <div class="items depth2">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">가나다라남준</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br />
                      “최선을 다하겠습니다.” 그 말 하나 밖에 없어요.
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

                      <ListMore class="mh_setting">
                        <template v-slot:items>
                          <ListMoreDesc primary="신고하기" class="notify" />
                        </template>
                      </ListMore>
                    </v-menu>
                  </div>
                </div>
              </v-card>
            </v-expand-transition>
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
import Button from '@/components/Button.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MAlist from '@/styles/pc/MA/MA-list';

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

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
    Swiper,
		SwiperSlide,
  },
  data(){
    return {
      popup: false,
      expand: false,
      expand2: false,
      expand3: false,
      expand4: false,
      expand5: false,
      expand6: false,
      swiperOptions: {
        // loop: true,
        // autoplay:{
        //   delay:1000
        // },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },                    
      },
    }
  },
  methods: {
    slideChangeTransitionStart() {
      // console.log(this.swiper.activeIndex); //현재 index값 얻기
    }
  },
  computed: {
    swiper() {
      return this.$refs.albumSwiper.$swiper;
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-slide {}
</style>
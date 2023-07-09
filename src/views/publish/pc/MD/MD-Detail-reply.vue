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
            <H2 class="title_page mh-title">다이어리</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section mt="12" pb="80">
          <diaryTitle>
            <li class="tit">
                <p class="thumb">김사이의 일상 다반사</p>
            </li>
            <li class="openset">
                전체공개
            </li>
            <li class="date">
              2021.06.17
            </li>
            <li class="status">
              <p class="feel">개운</p>
              <p class="weather">소나기</p>
            </li>
          </diaryTitle>

          <DiaryContents>
            <p>윤스테이를 보고 반려인이 노래를 부르던 와플팬을 나는 사고 싶지 않았다. 사놓고 몇 번을 해먹을지 눈에보여<br>
            &nbsp;그냥물건 들이지 말고 와플이고 크로플이고 사먹자 했다. </p>

            <p>
            그는 다섯번을 해먹어도 그 만큼의 만족이 있을거라 말했다. 틀리지 않은 말에 묘하게 설득되어 결국 대세 뒷북<br> 
            모드로와플팬을 샀다. <router-link to="/" class="notitag">@홍길동</router-link> 자본주의 일개미들의 작은 행복을 위한 물건. 그덕에 요즘 온갖 것들을  <router-link to="/" class="hashtag">#와플화</router-link>
            시키는데 열을 올리고있다. (조만간 신발도 구울듯.) 그렇게나마 우리의 추억은 쌓이고 이 물건의 쓰임은 다 
            하길 바라고 있다.</p>

            <p> 
              <router-link to="/" class="notitag">@장덕출</router-link> 윤스테이 빨리봐라<br> 
              <router-link to="/" class="hashtag">#윤스테이</router-link> <router-link to="/" class="hashtag">#와플팬</router-link>
            </p>

            <span class="time">1일전</span>
          </DiaryContents>
        </Section>
 
        <Section mt="12" pt="33">
          <DiaryComment>
            <CountReply><b class="num">15개</b>의 댓글이 있어요.</CountReply>
            <GroupReply class="group_diary">
              <ListReply class="list_diary">
                <div class="items depth1">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">익준이</span><span class="datetime">2021.11.03 03:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      싸이월드가 고객에게 확실하게 할 수 있는 말은 딱 하나예요.<br>최선을 다하겠습니다. 그 말 하나 밖에 없어요... <router-link to="/" class="btn_more">더보기</router-link>
                    </p>
                    <Button color="cy_blue" text :value="replyState[0].btnText" class="btn_comment" @click="toggleExpend(replyState[0])"></Button>
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
                <v-expand-transition>
                  <v-card v-show="replyState[0].expand" class="mx-auto" elevation="0">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
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

                          <ListMore class="lst_more_reply">
                            <template v-slot:items>
                              <ListMoreDesc primary="신고하기" class="notify" />
                            </template>
                          </ListMore>
                        </v-menu>
                      </div>
                    </div>
                    <div class="more_area">
                      <Button value="댓글 더보기" text class="btn_more"></Button>
                    </div>
                  </v-card>
                </v-expand-transition>
              </ListReply>
              <ListReply class="list_diary">
                <div class="items depth1">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">냥이도좋아하는냥냥이맘</span><span class="datetime">2021.11.02 01:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      고양이 밥은 냥냥이맘에서 만드는 고양이 밥을 추천합니다! 냄새도 덜나고 맛도 있어서 자주 먹어도 <router-link to="/" class="hashtag">#냥냥이맘</router-link> 질려하지 않아요!
                    </p>
                    <Button color="cy_blue" text :value="replyState[1].btnText" class="btn_comment" @click="toggleExpend(replyState[1])"></Button>
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
                <v-expand-transition>
                  <v-card v-show="replyState[1].expand" class="mx-auto" elevation="0">
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

                          <ListMore class="lst_more_reply">
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
              <ListReply class="list_diary">
                <div class="items depth1">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">원슈이</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      포유류 영장목 중에서 사람을 제외한 동물을 일컫는 일반적 호칭. 원숭이를 뜻하는 영어의 Mon key는 긴 꼬리를 가지고 있는 것만을 말하며... <router-link to="/" class="btn_more">더보기</router-link>
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
              <ListReply class="list_diary">
                <div class="items depth1">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">나비이잉나바아앙</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      <router-link to="/" class="notitag">@김사이</router-link> 나비 이외의 나비목 곤충은 모두 나방이라 부르는데, 양자의 차이는 생태적인 차이와 관련되어 생긴 것으로 계통적으로 엄밀히 구별할 만한 특징은 없다.
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
              <ListReply class="list_diary">
                <div class="items depth1">
                  <div class="thumb">
                    <img src="/img/temp_profile.png" alt="">
                  </div>
                  <div class="contents">
                    <p class="subtitle"><span class="nickname">갬성</span><span class="datetime">2021.11.01 15:27</span><i class="new ir">new</i></p>
                    <p class="desc">
                      졸리다 뭐해
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
          </DiaryComment>
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
import Button from '@/components/Button.vue';
//import Alert from '@/components/Alert.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
//import AlertStyle from '@/styles/pc/common/Alert';

import MD_Write from '@/styles/pc/MD/MD-Write';
import MD_main from '@/styles/pc/MH/MH-main';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    //...AlertStyle,    
    Header,
    Profile,
    Music,
    Friends,
    IconButton,
    Button,
    ...MD_Write,
    //Alert,
    ...MD_main,
  },
  data(){
    return {
      popup: true,
       replyState: [
        {
          expand: false,
          btnText: '댓글 16개',
        },
        {
          expand: false,
          btnText: '댓글 1개',
        },
      ],
      copyReply: [],
    }
  },
  methods: {
    toggleExpend(obj) {
      let idx = this.replyState.indexOf(obj);
      if(obj.expand) {
        obj.expand = false;
        obj.btnText = this.copyReply[idx].btnText;
      }else {
        obj.expand = true;
        obj.btnText = '댓글 숨기기';
      }
    }
  },
  created() {
    this.copyReply = JSON.parse(JSON.stringify(this.replyState));
  }
}
</script>

<style lang="scss" scoped>
</style>
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
          <H2 class="title_page bd0">검색</H2>

          <Outer class="m20">
            <InputText
              type="text"
              value=""
              placeholder=""
              solo
              class="input_search medium"
            />
          </Outer>

          <Tab class="styled_tab web" mt="36" :selected="0">
            <template v-slot:v-tab>
              <v-tab>통합</v-tab>
              <v-tab>친구</v-tab>
              <v-tab>사진첩</v-tab>
              <v-tab>뮤직</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
                <TitleBar class="title_list" mt="16">
                  <h3>친구</h3>
                  <!-- <router-link to="/" class="btn_more">더보기</router-link> -->
                </TitleBar>
                <!-- <ListFriends>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p>
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <Button value="일촌 신청" />
                      <IconButton class="ico_favorite" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div>
                  </li>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p> 
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <p class="state">일촌</p>
                      <IconButton class="ico_favorite on" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div>
                  </li>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p>
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <Button value="신청 취소" outlined />
                      <IconButton class="ico_favorite" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div> 
                  </li>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p>
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <Button value="일촌 신청" />
                      <IconButton class="ico_favorite" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div>
                  </li>
                </ListFriends> -->
                <ListBlank class="blank_search"><p class="msg">검색 결과가 없어요.</p></ListBlank>

                <TitleBar class="title_list">
                  <h3>사진첩</h3>
                  <!-- <router-link to="/" class="btn_more">더보기</router-link> -->
                </TitleBar>
                <!-- <ListPictures>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                </ListPictures> -->
                <ListBlank class="blank_search"><p class="msg">검색 결과가 없어요.</p></ListBlank>
                <TitleBar class="title_list">
                  <h3>뮤직</h3>
                  <!-- <router-link to="/" class="btn_more">더보기</router-link> -->
                </TitleBar>
                <!-- <ListMusics>
                  <li>
                    <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                    <div class="title_list">잔소리</div>
                    <div class="player">황치열</div>
                    <IconButton value="play" class="ico_play" />
                    <Button value="담기" outlined color="cy_blue" class="btn btn_put" />
                    <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                  </li>
                  <li>
                    <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                    <div class="title_list">가시밭길</div>
                    <div class="player">프리스타일</div>
                    <IconButton value="play" class="ico_play" />
                    <Button value="담기" outlined color="cy_blue" class="btn btn_put" />
                    <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                  </li>
                  <li>
                    <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                    <div class="title_list">애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요</div>
                    <div class="player">하성운X펀치</div>
                    <IconButton value="play" class="ico_play" />
                    <Button value="담기" outlined color="cy_blue" class="btn btn_put" />
                    <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                  </li>
                </ListMusics> -->
                <ListBlank class="blank_search"><p class="msg">검색 결과가 없어요.</p></ListBlank>
              </v-tab-item>

              <v-tab-item transition="false">
                <!-- <TitleBar class="title_list" mt="16">
                  <h3><span class="num">32명</span>의 검색결과</h3>
                </TitleBar> -->
                <!-- <ListFriends>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p>
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <Button value="일촌 신청" />
                      <IconButton class="ico_favorite" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div>
                  </li>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p> 
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <p class="state">일촌</p>
                      <IconButton class="ico_favorite on" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div>
                  </li>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p>
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <Button value="신청 취소" outlined />
                      <IconButton class="ico_favorite" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div> 
                  </li>
                  <li>
                    <div class="title_area">
                      <p class="thumb">
                        <img src="/img/temp_profile.png" alt="">
                      </p>
                      <p class="desc">음악없는 세상은 있을 수 없다.</p>
                      <p class="title_list">뚝배기전문가세용</p>
                      <p class="etc">함께 아는 일촌 21명</p>
                    </div>
                    <div class="func_area">
                      <Button value="일촌 신청" />
                      <IconButton class="ico_favorite" value="즐겨찾기"></IconButton>
                      <IconButton class="ico_hompy" value="미니홈피 가기"></IconButton>
                    </div>
                  </li>
                </ListFriends> -->
                <ListBlank class="bd0" mt="112"><p class="msg">검색 결과가 없어요.</p></ListBlank>
              </v-tab-item>

              <v-tab-item transition="false">
                <!-- <TitleBar class="title_list" mt="16">
                  <h3><span class="num">320개</span>의 검색결과</h3>
                </TitleBar> -->
                <!-- <ListPictures>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                  <li>
                    <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                  </li>
                </ListPictures> -->
                <ListBlank class="bd0" mt="112"><p class="msg">검색 결과가 없어요.</p></ListBlank>
              </v-tab-item>
              <v-tab-item transition="false">
                <!-- <TitleBar class="title_list" mt="16">
                  <h3><span class="num">320개</span>의 검색결과</h3>
                </TitleBar> -->
                <!-- <TitleBarList class="music">
                  <li>음원</li>
                  <li>아티스트</li>
                  <li>듣기</li>
                  <li>담기</li>
                  <li>구매</li>
                </TitleBarList> -->
                <!-- <ListMusics>
                  <li>
                    <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                    <div class="title_list">잔소리</div>
                    <div class="player">황치열</div>
                    <IconButton value="play" class="ico_play" />
                    <Button value="담기" outlined color="cy_blue" class="btn btn_put" />
                    <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                  </li>
                  <li>
                    <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                    <div class="title_list">가시밭길</div>
                    <div class="player">프리스타일</div>
                    <IconButton value="play" class="ico_play" />
                    <Button value="담기" outlined color="cy_blue" class="btn btn_put" />
                    <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                  </li>
                  <li>
                    <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                    <div class="title_list">애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요애인 있어요</div>
                    <div class="player">하성운X펀치</div>
                    <IconButton value="play" class="ico_play" />
                    <Button value="담기" outlined color="cy_blue" class="btn btn_put" />
                    <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                  </li>
                </ListMusics> -->
                <ListBlank class="bd0" mt="112"><p class="msg">검색 결과가 없어요.</p></ListBlank>
              </v-tab-item>
            </template>
          </Tab>
          
        </Section>
      </Main>
      <Aside class="right"></Aside>
    </Container>
    <Footer></Footer>
  </Wrap>  
</template>

<script>
import Header from '@/views/publish/pc/includes/Header.vue';
import Footer from '@/views/publish/pc/includes/Footer.vue';
import Profile from '@/views/publish/pc/aside/Profile.vue';
import Tab from '@/components/Tab.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import InputText from '@/components/InputText.vue';
// import Button from '@/components/Button.vue';
// import IconButton from '@/components/IconButton.vue';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Header,
    Footer,
    Profile,
    Tab,
    InputText,
    // Button,
    // IconButton,
  }
}
</script>

<style>

</style>
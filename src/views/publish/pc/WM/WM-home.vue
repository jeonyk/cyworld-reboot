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
        <Section class="WH-home">
          <H2 class="title_page">파도타기</H2>
          <TabWH class="styled_tab web" :selected="1">
            <template v-slot:v-tab>
              <v-tab tabindex="0">홈</v-tab>
              <v-tab tabindex="1">뮤직파도</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
                <TodayMember>
                  <H3>투데이 멤버</H3>
                  <ul>
                    <li>
                      <router-link to="/">
                        <img src="/img/temp_profile.png" alt="">
                        <div class="desc">
                          <p class="nickname">뭉이뭉이</p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/">
                        <img src="/img/temp_profile.png" alt="">
                        <div class="desc">
                          <p class="nickname">Artist</p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/">
                        <img src="/img/temp_profile.png" alt="">
                        <div class="desc">
                          <p class="nickname">닉네임열세자테스트중입니다</p>
                          <p class="msg">싸이감성 말기 의사 선생님입니다.두줄까지 가능 어드민에서싸이감성 말기 의사 선생님입니다.두줄까지 가능 어드민에서싸이감성 말기 의사 선생님입니다.두줄까지 가능 어드민에서</p>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </TodayMember>

                <MHOfficial>
                  <H3>미니홈피 Official</H3>

                  <SlideList :total="items2">
                    <template v-slot:slideItems>
                      <swiper-slide  v-for="(item, idx) in items2" :key="idx">
                        <router-link to="">
                          <div class="thumb confirm">
                            <img src="/img/temp_Profile.png" alt="">
                          </div>
                          <div class="nickname">
                            러블리헤이즈응영원히함께해
                          </div>
                        </router-link>
                      </swiper-slide>
                    </template>
                  </SlideList>
                </MHOfficial>

                <Banner>
                  <router-link to=""><img src="/img/temp_banner.png" alt=""></router-link>
                </Banner>

                <SlideMiniRoom>
                  <H3>미니홈피 Official</H3>
                  <!-- navigation -->
                  <div class="navi_slide">
                    <div class="swiper-button-prev swiper-btn-prev"></div>
                    <div class="swiper-button-next swiper-btn-next"></div>
                  </div>
                  
                  <swiper class="swiper" ref="albumSwiper" 
                    :options="swiperOptions"
                  >
                    <swiper-slide v-for="(item, idx) in items2" :key="idx">
                      <router-link to="/">
                        <img src="/img/temp_miniroom.png" alt="">
                        <div class="roomname">동심 가득! 색감 가득! 키덜트 하우스</div>
                        <div class="userinfo">
                          <span class="thumb">
                            <img src="/img/temp_profile.png" alt="">
                          </span>
                          <span class="nickname">닉네임은최대열세자입니다</span>
                        </div>
                      </router-link>
                    </swiper-slide>
                  </swiper>
                </SlideMiniRoom>

                <Studio>
                  <div class="titlebar">
                    <H3>칭찬합시다 스튜디오</H3>
                    <div class="date">2021년 9월 3째주</div>
                    <router-link to="/" class="btn_more">더보기</router-link>
                  </div>
                  <ul class="lst_studio">
                    <li>
                      <router-link to="/">
                        <span class="rank first">1</span>
                        <p class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                        </p>
                        <p class="nickname">너무달라달라우리들은자매</p>
                        <p class="percent">
                          <span :style="{ width: 30 + '%' }"></span>
                        </p>
                        <p class="count">
                          칭찬 <span class="num">102,999</span>명
                        </p>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/">
                        <span class="rank second">2</span>
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
                    </li>
                    <li>
                      <router-link to="/">
                        <span class="rank third">3</span>
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
                    </li>
                  </ul>
                </Studio>

                <Banner>
                  <router-link to=""><img src="/img/temp_banner2.png" alt=""></router-link>
                </Banner>
 
                <SlideHashtag>
                  <H3>#1일1싸이캠페인</H3>
                  <SlideList :total="items">
                    <template v-slot:slideItems>
                      <swiper-slide  v-for="(item, idx) in items" :key="idx">
                        <router-link to="">
                          <div class="thumb_album">
                            <img src="/img/temp_Profile.png" alt="">
                            <div class="count">
                              <span class="like">78</span>
                              <span class="comment">78</span>
                            </div>
                          </div>
                          <div class="userinfo">
                            <span class="thumb">
                              <img src="/img/temp_profile.png" alt="">
                            </span>
                            <span class="nickname">덕출이는휴가중 {{ idx + 1 }}</span>
                          </div>
                        </router-link>
                      </swiper-slide>
                    </template>
                  </SlideList>
                </SlideHashtag>

                <SlideHashtag>
                  <H3>#가을비</H3>
                  <SlideList :total="items2">
                    <template v-slot:slideItems>
                      <swiper-slide  v-for="(item, idx) in items2" :key="idx">
                        <router-link to="">
                          <div class="thumb_album">
                            <img src="/img/temp_Profile.png" alt="">
                            <div class="count">
                              <span class="like">78</span>
                              <span class="comment">78</span>
                            </div>
                          </div>
                          <div class="userinfo">
                            <span class="thumb">
                              <img src="/img/temp_profile.png" alt="">
                            </span>
                            <span class="nickname">덕출이는휴가중 {{ idx + 1 }}</span>
                          </div>
                        </router-link>
                      </swiper-slide>
                    </template>
                  </SlideList>
                </SlideHashtag>

                <SlideHashtag>
                  <H3>#백신접종인증</H3>
                  <SlideList :total="items">
                    <template v-slot:slideItems>
                      <swiper-slide  v-for="(item, idx) in items" :key="idx">
                        <router-link to="">
                          <div class="thumb_album">
                            <img src="/img/temp_Profile.png" alt="">
                            <div class="count">
                              <span class="like">78</span>
                              <span class="comment">78</span>
                            </div>
                          </div>
                          <div class="userinfo">
                            <span class="thumb">
                              <img src="/img/temp_profile.png" alt="">
                            </span>
                            <span class="nickname">덕출이는휴가중 {{ idx + 1 }}</span>
                          </div>
                        </router-link>
                      </swiper-slide>
                    </template>
                  </SlideList>
                </SlideHashtag>
              </v-tab-item>
              <v-tab-item transition="false">
                <MHOfficial mt="0">
                  <H3>싸이에서 만나는 아티스트</H3>
                  <SlideList :total="items2">
                    <template v-slot:slideItems>
                      <swiper-slide  v-for="(item, idx) in items2" :key="idx">
                        <router-link to="">
                          <div class="thumb confirm">
                            <img src="/img/temp_Profile.png" alt="">
                          </div>
                          <div class="nickname">
                            러블리헤이즈응영원히함께해
                          </div>
                        </router-link>
                      </swiper-slide>
                    </template>
                  </SlideList>
                </MHOfficial>
 
                <Banner>
                  <router-link to=""><img src="/img/temp_banner.png" alt=""></router-link>
                </Banner>

                <BGM>
                  <H3>
                    나의 Today is.. <span class="feel"><img src="/img/temp_feel.png" alt="">설렘</span>을 위한 추천 BGM
                    <IconButton value="refresh" class="ico_refresh"></IconButton>
                  </H3>
                  <ul class="lst_bgm">
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <IconButton value="play" class="ico_video_play" color="cy_blue"></IconButton>
                          </div>
                        </div>
                        <p class="music">Tyler, the Creator</p>
                        <p class="name">황치열</p>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <IconButton value="play" class="ico_video_play" color="cy_blue"></IconButton>
                          </div>
                        </div>
                        <p class="music">Tyler, the Creator</p>
                        <p class="name">황치열</p>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <IconButton value="play" class="ico_video_play" color="cy_blue"></IconButton>
                          </div>
                        </div>
                        <p class="music">Tyler, the Creator</p>
                        <p class="name">황치열</p>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <IconButton value="play" class="ico_video_play" color="cy_blue"></IconButton>
                          </div>
                        </div>
                        <p class="music">Tyler, the Creator</p>
                        <p class="name">황치열</p>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <IconButton value="play" class="ico_video_play" color="cy_blue"></IconButton>
                          </div>
                        </div>
                        <p class="music">Tyler, the Creator</p>
                        <p class="name">황치열</p>
                      </router-link>
                    </li>
                  </ul>
                </BGM>

                <Theme>
                  <H3>
                    추천테마
                  </H3>
                  <ul class="lst_theme">
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <span class="theme">#가을</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <span class="theme">#밤 새벽</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <span class="theme">#잔잔한</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <span class="theme">#Jazz</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <span class="theme">#소풍</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="">
                        <div class="thumb">
                          <img src="/img/temp_profile.png" alt="">
                          <div class="func_area">
                            <span class="theme">#따스한</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </Theme>

                <Chart>
                  <H3>인기차트</H3>
                  <TabChart class="styled_tab web">
                    <template v-slot:v-tab>
                      <v-tab>가을듣기좋은음악모음</v-tab>
                      <v-tab>겨울엔이음악을들어요</v-tab>
                      <v-tab>크리스마스에듣는노래</v-tab>
                    </template>
                    <template v-slot:v-tab-item>
                      <v-tab-item transition="false">
                        <div class="base">가을바람부는오전기준</div>
                        <ListMusics>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">1</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">황치열</div>
                            <IconButton value="play" class="ico_stop" color="cy_blue" />
                            <p class="state">보유중</p>
                            <!-- <Button value="구매" outlined color="cy_blue" class="btn btn_buy" /> -->
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">2</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">프리스타일</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">3</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">4</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">5</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                        </ListMusics>
                        <div class="more">
                          <Button value="더보기" text color="gray" class="btn btn_more" large />
                        </div>
                      </v-tab-item>
                      <v-tab-item transition="false">
                        <div class="base">겨울엔이음악을들어요</div>
                        <ListMusics>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">1</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">황치열</div>
                            <IconButton value="play" class="ico_stop" color="cy_blue" />
                            <p class="state">보유중</p>
                            <!-- <Button value="구매" outlined color="cy_blue" class="btn btn_buy" /> -->
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">2</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">프리스타일</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">3</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">4</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">5</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                        </ListMusics>
                        <div class="more">
                          <Button value="더보기" text color="gray" class="btn btn_more" large />
                        </div>
                      </v-tab-item>
                      <v-tab-item transition="false">
                        <div class="base">크리스마스에듣는노래</div>
                        <ListMusics>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">1</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">황치열</div>
                            <IconButton value="play" class="ico_stop" color="cy_blue" />
                            <p class="state">보유중</p>
                            <!-- <Button value="구매" outlined color="cy_blue" class="btn btn_buy" /> -->
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">2</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">프리스타일</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">3</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">4</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                          <li>
                            <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
                            <div class="no">5</div>
                            <div class="title_list">
                              <p class="music">잔소리</p>
                              <p class="cyworld">싸이월드 BGM 2021</p>
                            </div>
                            <div class="player">하성운X펀치</div>
                            <IconButton value="play" class="ico_play" color="cy_blue" />
                            <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
                          </li>
                        </ListMusics>
                        <div class="more">
                          <Button value="더보기" text color="gray" class="btn btn_more" large />
                        </div>
                      </v-tab-item>
                    </template>
                    
                  </TabChart>
                  <!-- <ListBlank class="" mt="112"><p class="msg">검색 결과가 없어요.</p></ListBlank> -->
                </Chart>

                <Banner mt="47">
                  <router-link to=""><img src="/img/temp_banner2.png" alt=""></router-link>
                </Banner>
              </v-tab-item>
            </template>
          </TabWH>
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
import SlideList from '@/components/SlideList';
import IconButton from '@/components/IconButton';
import Button from '@/components/Button';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';


import WHhome from '@/styles/pc/WH/WH-home';

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
    Events,
    IconButton,
    Button,
    ...WHhome,
    Swiper,
		SwiperSlide,
    SlideList,
  },
  data(){
    return {
      items: 16,
      items2: 7,
      
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },                    
      },
      
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
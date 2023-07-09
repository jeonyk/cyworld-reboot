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
            <H2 class="title_page mh-title">쥬크박스</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section mt="12">
          <TitleBar class="title_list jukebox">
            <h3>총 420곡</h3>
            <div class="align">
              <Button value="곡명순" class="selected" text></Button>
              <Button value="아티스트순" text></Button>
              <Button value="구매순" text></Button>
            </div>
            <div class="btn_bgm">
              <span class="count">3</span>
              <Button value="구매하기" text large></Button>
              <!--<Button value="구매하기" text large disabled></Button>-->
            </div>
          </TitleBar>
          <TitleBarList class="music_cate5">
            <li><Checkbox class="styled_checkbox web" /></li>
            <li>곡/앨범</li>
            <li>아티스트</li>
            <li>재생</li>
            <li>듣기</li>
          </TitleBarList>
          <ListMusics class="music_cate5">
            <li>
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">잔소리</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">황치열</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
            <li class="playing">
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">금요일에 만나요 (Feat. 장이정 Of History)</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">SHOST9</div>
              <IconButton value="play" class="ico_stop" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
            <li>
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">가시밭길</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">프리스타일</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
               <p class="state">보유중</p>
            </li>
            <li class="selected">
              <div class="check"><Checkbox class="styled_checkbox web" input-value="true" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">애인 있어요</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">정승환</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
            <li class="selected">
              <div class="check"><Checkbox class="styled_checkbox web" input-value="true" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">자니</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">하성운X펀치</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
            <li class="selected">
              <div class="check"><Checkbox class="styled_checkbox web" input-value="true" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">Gallery</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">박지훈</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
               <p class="state">보유중</p>
            </li>
            <li class="play">
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">어떻게 이별까지 사랑하겠어, 널 사랑하는 거지</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">죠지</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
               <p class="state">보유중</p>
            </li>
            <li>
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">다음생이 있다면 당신을 만나서 다시 사랑할래요</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">임재현</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
            <li>
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">신호등</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">이무진</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
            <li>
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">STAY</p>
                <p class="cyworld">STAY</p>
              </div>
              <div class="player">The Kid LAROI</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>

            <li>
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
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
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">잔소리</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">프리스타일</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
            <li>
              <div class="check"><Checkbox class="styled_checkbox web" /></div>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">잔소리</p>
                <p class="cyworld">싸이월드 BGM 2021</p>
              </div>
              <div class="player">하성운X펀치</div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
              <Button value="구매" outlined color="cy_blue" class="btn btn_buy" />
            </li>
          </ListMusics>
          <!-- <ListBlank class="" mt="112"><p class="msg">검색 결과가 없어요.</p></ListBlank> -->
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
    Button,
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
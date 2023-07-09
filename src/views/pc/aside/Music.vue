<template>
  <Music>
    <TitleBar>
      <h3 class="subtitle">BGM</h3>
      <v-menu 
        offset-y
        left
        transition="slide-y-transition"
        content-class="bgm_list_popup"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="ico_bgm_list"
            fab
            depressed
          >
            배경음악 목록보기
          </v-btn>
        </template>
        <PlayMusic>
          <TitlePlayMusic>
            <h3>BGM 플레이리스트</h3>
            <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large />
          </TitlePlayMusic>
          <p class="count">총 42곡</p>
          <ListPlayMusic class="overflow-y-auto">
            <li class="playing">
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">잔소리</p>
                <p class="player">황치열</p>
              </div>
              <IconButton value="play" class="ico_stop" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">금요일에 만나요 (Feat. 장이정 Of History)</p>
                <p class="player">SHOST9</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">가시밭길</p>
                <p class="player">프리스타일(Freestyle)</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">애인 있어요</p>
                <p class="player">정승환</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">자니</p>
                <p class="player">하성운X펀치</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="selected">
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">Gallery</p>
                <p class="player">박지훈</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="play">
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">세글자 (드라마 ‘루루공주’ 김정은 메인 테마)</p>
                <p class="player">죠지</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">고칠게</p>
                <p class="player">죠지</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">잔소리</p>
                <p class="player">황치열</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">금요일에 만나요 (Feat. 장이정 Of History)</p>
                <p class="player">SHOST9</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">가시밭길</p>
                <p class="player">프리스타일(Freestyle)</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">애인 있어요</p>
                <p class="player">정승환</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">자니</p>
                <p class="player">하성운X펀치</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="selected">
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">Gallery</p>
                <p class="player">박지훈</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li class="play">
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">세글자 (드라마 ‘루루공주’ 김정은 메인 테마)</p>
                <p class="player">죠지</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
            <li>
              <div class="thumb"><img src="/img/temp_music.png" alt=""></div>
              <div class="title_list">
                <p class="music">고칠게</p>
                <p class="player">죠지</p>
              </div>
              <IconButton value="play" class="ico_play" color="cy_blue" />
            </li>
          </ListPlayMusic>
        </PlayMusic>
      </v-menu>
    </TitleBar>

    <MusicInfo>
      <p class="cover"><img src="/img/temp_music.png" alt=""></p>
      <p class="title">애인있어요</p>
      <p class="artist">정승환</p>
    </MusicInfo>
    
    <PlayControl>
      <p class="time">
        <span class="bar"></span>
        <span class="playing">1:23</span>
        <span class="all">4:29</span>
      </p>

      <p class="btn_area">
        <!--<IconButton class="ico_bgm_repeat cy_gray--text" value="반복 재생 off"></IconButton>
        <IconButton class="ico_bgm_repeat_on_one cy_gray--text" value="한곡 반복 재생 on"></IconButton>-->
        <IconButton class="ico_bgm_repeat_on_all cy_gray--text" value="전곡 반복 재생 on"></IconButton>
        <IconButton class="ico_bgm_prev cy_gray--text" value="이전곡 듣기"></IconButton>
        <IconButton class="ico_bgm_stop cy_gray--text" value="현재 재생곡 일시정지"></IconButton>
        <IconButton class="ico_bgm_next cy_gray--text" value="다음곡 듣기"></IconButton>
        <!--<IconButton class="ico_bgm_random  cy_gray--text" value="랜덤 재생 off"></IconButton>-->
        <IconButton class="ico_bgm_random_on  cy_gray--text" value="랜덤 재생 on"></IconButton>
      </p>

      <p class="volume">
        <Slider prepend-icon="mdi-volume-high"></Slider>
      </p>
    </PlayControl>
    
    <Ad>
      <p class="text">
        <a href="/" target="_blank">[AD] 청춘 페스타 2021 콘서트 티켓 예매</a>
      </p>
    </Ad>
  </Music>
</template>

<script>
import styled, { css } from 'vue-styled-components';

const Music = styled.div`
  ${({ theme }) => {
    const { Margins } = theme;
    return css`
      position: relative;
      /* margin-top: ${Margins.base}; */
      overflow: hidden;
      padding: 30px 16px 26px;
      /*height: 350px;*/
      background-color: #E1E6E8;
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
    `;
  }}
`;

const TitleBar = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      position: relative;
      .subtitle{
        padding-left: 4px;
        font-size: 20px;
        font-weight: 700;
        color: ${Colors.text_title};
      }
      .ico_bgm_list.v-btn--fab.v-size--default{
          position: absolute;
          top: 50%;
          right: 0;
          width: 44px;
          height: 44px;
          margin-top: -22px;
          border-radius: 16px;
          background: url('/img/svg/ico_bgm_list.svg') no-repeat 50% 50% /21px;
          .v-ripple__container{
            .v-ripple__animation{
              background-color: #3c3c3c;
            }
          }
          .v-btn__content{
            font-size: 0;
          }
        }
      }
    `;
  }}
`;

const PlayMusic = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      width: 450px;
      padding: 0 0 24px 24px;
      background-color: #fff;
      box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.14);
      border-radius: 18px;
      .count{
        padding-left: 4px;
        margin-bottom: 24px;
        font-size: 16px;
        font-weight: 400;
        color: ${Colors.text_title};
      }
    `;
  }}
`;

const TitlePlayMusic = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      position: relative;
      height: 84px;
      padding: 16px 16px 24px 4px;
      h3{
        height: 44px;
        font-size: 20px;
        font-weight: 400;
        color: ${Colors.text_title};
        line-height: 44px;
      }
      .pop-close-btn{
        position: absolute;
        top: 16px;
        right: 16px;        
      }
    `;
  }}
`;

const ListPlayMusic = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      margin-right: 4px;
      padding: 0 4px 0 24px;
      height: 490px;
      li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        height: 48px;
        margin-bottom: 16px;
        &:last-child{
          margin-bottom: 0;
        }
        .thumb{
          overflow: hidden;
          width: 48px;
          height: 48px;
          border-radius: 0;
          img{
            display: block;
            width: 48px;
            height: 48px;
          }
        }
        .title_list{
          padding: 0 0 0 16px;
          width: 290px;
          .music{
            font-size: 16px;
            font-weight: 400;
            color: ${Colors.text_title};
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .player{
            padding-top: 3px;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
        }
        
        .ico_play, .ico_stop{
          margin: 0 0 0 30px;
        }
        &:hover{
          .title_list p{
            color: ${Colors.cy_blue_vari};
            cursor: pointer;
          }
        }
      }

      &.overflow-y-auto{
        &::-webkit-scrollbar { width: 5px; } /* 스크롤 바 */
        &::-webkit-scrollbar-track { background-color: transparent; } /* 스크롤 바 밑의 배경 */
        &::-webkit-scrollbar-thumb { background:  #B3B3B3; border-radius: 4px; } /* 실질적 스크롤 바 */
        &::-webkit-scrollbar-thumb:hover{ background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
        &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
        &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
        /* FireFox */
        scrollbar-width: thin; /* 스크롤 바 굵기 */
        scrollbar-color: #B3B3B3 transparent; /* 스크롤 바 색상 */
      }
    `;
  }}
`;

const MusicInfo = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      p{
        text-align: center;
        &.cover{
          margin: 26px 0 16px;
          img{
            max-width: 180px;
            height: auto;
          }
        }
        &.title{
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_title};
        }
        &.artist{
          font-size: 14px;
          font-weight: 300;
          color: ${Colors.text_body};
        }
      }
    `;
  }}
`;

const PlayControl = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      .time{
        height: 22px;
        margin-top: 24px;
        span{
          font-size: 12px;
          &.bar{
            position: relative;
            display: block;
            width: 100%;
            height: 4px;
            margin-bottom: 3px;
            background-color: #fff;
            border-radius: 1px;
            &:before{
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              display: block;
              width: 24%;
              height: 4px;
              background-color: ${Colors.cy_blue};
              border-radius: 1px;
            }
          }
          &.playing{
            float: left;
            color: ${Colors.cy_blue_vari};
          }
          &.all{
            float: right;
            color: ${Colors.text_subbody};
          }
        }        
      }
      .btn_area{
        display: flex;
        justify-content: space-between;
        margin: 22px 0 24px;
      }
      .volume{
        .v-input__prepend-outer{
          margin-right: 10px;
          .v-icon{
            width: 24px;
            height: 24px;
            background: url('/img/svg/ico_volume_on.svg') no-repeat 50% 50% /24px;
            &:before{
              content: '';
            }
          }
        }
        .v-slider--horizontal{
          margin: 0;
        }
      }
    `;
  }}
`;

const Ad = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      text-align: center;
      a{
        font-size: 12px;
        font-weight: 300;
        color: ${Colors.text_subtitle};
      }
    `;
  }}
`;

const styledComponents = {
  Music, TitleBar, MusicInfo, PlayControl, Ad, PlayMusic, TitlePlayMusic, ListPlayMusic,
};

import IconButton from '@/components/IconButton.vue';
import Slider from '@/components/Slider.vue';
import AlertStyle from '@/styles/pc/common/Alert';

export default {
  components: {
    ...styledComponents,
    ...AlertStyle,
    IconButton,
    Slider,
  },
}
</script>

<style lang="scss">
  // 플레이리스트 위치
  .bgm_list_popup{
    top: 88px !important;
    left: 936px !important;
  }
</style>
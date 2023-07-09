<template>
  <Header>
    <Inner class="inner">
      <H1><a class="ir">cyworld</a></H1>
      <Gnb >
        <TabGnb class="styled_tab gnb" :selected="value">
          <template v-slot:v-tab>
            <v-tab tabindex="0" @click="movePage('/pc/LM-main')">싸이생활</v-tab>
            <v-tab tabindex="1" @click="movePage('/pc/MH-Main')">미니홈피</v-tab>
            <v-tab tabindex="2" @click="movePage('/pc/WH-home')">파도타기</v-tab>
            <v-tab tabindex="3">선물가게</v-tab>
          </template>
        </TabGnb>
      </Gnb>
      <Shortcut>
        <ul>
          <li justify>
            <v-menu
              top
              right
              :close-on-content-click="false"
              transition="slide-x-reverse-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="ir search"
                  fab
                  depressed
                >
                  검색
                </v-btn>
              </template>
              <InputSearch
                  type="text"
                  value=""
                  placeholder="검색어를 입력하세요"
                  solo
                  class="input_search"
                />
            </v-menu>
          </li>
          <li>
            <v-menu
              offset-y
              left
              :close-on-content-click="false"
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="ir notice on"
                  fab
                  depressed
                >
                  알림
                </v-btn>
              </template>

              <TabNotice class="styled_tab">
                <template v-slot:v-tab>
                  <v-tab class="new"><span>반가운 소식</span></v-tab>
                  <v-tab class="new"><span>초대</span></v-tab>
                  <v-tab class="new"><span>일촌 생일</span></v-tab>
                </template>
                <template v-slot:v-tab-item>
                  <v-tab-item transition="false">
                    <h4 class="subtitle">반가운 소식(30)<Button small text value="전체읽음"></Button></h4>
                    <ListNotice class="lst_notice overflow-y-auto">
                      <template v-slot:items>
                        <ListNoticeDesc class="new">
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>사극요정김아무개</b>님이 방명록을 남겼어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc class="new">
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>내가바로천상계목소리이지현</b>님이 방명록을 남겼어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc class="new">
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>내가바로천상계목소리이지현</b>님이 내 글 을 공감했어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc>
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>디오디오조아조아</b>님이 내 사진첩에 공감 했어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc>
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>블랙핑크뚜루뚜루</b>님이 일촌신청을 수락했어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc>
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>샌프란에사는고냥이냐옹냐옹</b>님이 일촌신청을 수락했어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc>
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>디오디오조아조아</b>님이 내 사진첩에 공감 했어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc>
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>블랙핑크뚜루뚜루</b>님이 일촌신청을 수락했어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                        <ListNoticeDesc>
                          <div class="thumb"><img src="/img/temp_profile.png" alt=""></div>
                          <div class="contents">
                            <p class="subtitle"><b>샌프란에사는고냥이냐옹냐옹</b>님이 일촌신청을 수락했어요.</p>
                            <p class="state">50초 전</p>
                          </div>
                        </ListNoticeDesc>
                      </template>
                    </ListNotice>

                    <!-- 리스트 없을 시 -->
                    <!-- <h4 class="subtitle">반가운 소식(0)<Button small text disabled value="전체읽음"></Button></h4>
                    <ListBlank class="bd0" mt="122">
                      <p class="msg">생일인 일촌이 없어요.</p>
                    </ListBlank> -->
                  </v-tab-item>
                  <v-tab-item transition="false">
                    <ListNews class="lst_invite overflow-y-auto">
                      <li>
                        <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                        <div>
                          <p class="desc"><span>밤나무나무아래인절미인절미</span>님이 일촌 신청을 기다리고 있어요.</p>
                          <div class="btn_area">
                            <Button value="수락" class="btn_accept" text xSmall></Button>
                            <Button value="거절" class="btn_refuse" text xSmall></Button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                        <div>
                          <p class="desc"><span>호호홍</span>님이 <span>악소리 나는 등산</span> 공유다이어리에 신청했어요.</p>
                          <div class="btn_area">
                            <Button value="수락되었습니다" class="btn_accept" text xSmall disabled></Button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                        <div>
                          <p class="desc"><span>밤나무</span>님이 <span>달려라싸이클</span> 공유다이어리에 신청했어요.</p>
                          <div class="btn_area">
                            <Button value="거절되었습니다" class="btn_refuse" text xSmall disabled></Button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                        <div>
                          <p class="desc"><span>인절미인절미</span>님이 일촌 신청을 기다리고 있어요.</p>
                          <div class="btn_area">
                            <Button value="수락" class="btn_accept" text xSmall></Button>
                            <Button value="거절" class="btn_refuse" text xSmall></Button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                        <div>
                          <p class="desc"><span>밤나무나무아래인절미인절미</span>님이 일촌 신청을 기다리고 있어요.</p>
                          <div class="btn_area">
                            <Button value="수락" class="btn_accept" text xSmall></Button>
                            <Button value="거절" class="btn_refuse" text xSmall></Button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                        <div>
                          <p class="desc"><span>호호홍</span>님이 <span>악소리 나는 등산</span> 공유다이어리에 신청했어요.</p>
                          <div class="btn_area">
                            <Button value="수락되었습니다" class="btn_accept" text xSmall disabled></Button>
                          </div>
                        </div>
                      </li>
                    </ListNews>

                    <!-- 리스트 없을 시 -->
                    <!-- <ListBlank class="bd0" mt="170">
                      <p class="msg">생일인 일촌이 없어요.</p>
                    </ListBlank> -->
                  </v-tab-item>
                  <v-tab-item transition="false">
                    <ListOuter class="overflow-y-auto">
                      <div class="date">2021.10.20</div>
                      <ListBirthday class="lst_birthday">
                        <li>
                          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                          <div>
                            <p class="desc">큰소히</p>
                            <p class="subtitle">so hee han</p>
                            <div class="btn_area">
                              <Button value="선물하기" xSmall></Button>
                              <Button value="미니홈피 가기" xSmall outlined></Button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                          <div>
                            <p class="desc">오늘도산책갈까?</p>
                            <p class="subtitle">닉네임은최대열세자테스트</p>
                            <div class="btn_area">
                              <Button value="선물하기" xSmall></Button>
                              <Button value="미니홈피 가기" xSmall outlined></Button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                          <div>
                            <p class="desc">노랑이조아</p>
                            <p class="subtitle">개나리</p>
                            <div class="btn_area">
                              <Button value="선물하기" xSmall></Button>
                              <Button value="미니홈피 가기" xSmall outlined></Button>
                            </div>
                          </div>
                        </li>
                      </ListBirthday>
                      <div class="date">2021.10.20</div>
                      <ListBirthday class="lst_birthday">
                        <li>
                          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                          <div>
                            <p class="desc">큰소히</p>
                            <p class="subtitle">so hee han</p>
                            <div class="btn_area">
                              <Button value="선물하기" xSmall></Button>
                              <Button value="미니홈피 가기" xSmall outlined></Button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                          <div>
                            <p class="desc">오늘도산책갈까?</p>
                            <p class="subtitle">닉네임은최대열세자테스트</p>
                            <div class="btn_area">
                              <Button value="선물하기" xSmall></Button>
                              <Button value="미니홈피 가기" xSmall outlined></Button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                          <div>
                            <p class="desc">노랑이조아</p>
                            <p class="subtitle">개나리</p>
                            <div class="btn_area">
                              <Button value="선물하기" xSmall></Button>
                              <Button value="미니홈피 가기" xSmall outlined></Button>
                            </div>
                          </div>
                        </li>
                      </ListBirthday>
                    </ListOuter>

                    <!-- 리스트 없을 시 -->
                    <!-- <ListBlank class="bd0" mt="170">
                      <p class="msg">생일인 일촌이 없어요.</p>
                    </ListBlank> -->
                  </v-tab-item>
                </template>
              </TabNotice>
            </v-menu>
          </li>
          <li>
            <v-menu
              offset-y
              left
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="ir more"
                  fab
                  depressed
                >
                  더보기
                </v-btn>
              </template>

              <ListMore class="lst_myinfo">
                <template v-slot:items>
                  <!-- <ListMoreDesc primary="내 정보" /> -->
                  <ListMoreDesc primary="도토리" />
                  <ListMoreDesc primary="설정" />
                  <ListMoreDesc primary="로그아웃" />
                </template>
              </ListMore>
            </v-menu>
          </li>
        </ul>
      </Shortcut>
    </Inner>
  </Header>
</template>

<script>
import Common from '@/styles/pc/common/Common';
import StyledList from '@/styles/pc/common/List';
import Tab from '@/components/Tab.vue';
import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';
import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'size'
];

const InputSearch = styled(InputText)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      &.input_search{
        margin-left: -260px;
        min-height: unset;
        .styled_input.v-text-field--filled {
          .v-input__control{
            min-height: 42px;
            width: 260px;
            .v-input__slot{
              min-height: 42px;
              padding-left: 40px !important;
              background-position-x: 12px !important;
              background-image: url('/img/svg/ico_search.svg') !important;
              background-size: 18px !important;

              .v-text-field__slot input{
                font-size: 16px;
                font-weight: 400;
                color: ${Colors.text_title};
              }
            }
          }

          &.v-input--is-focused{
            > .v-input__control{
              > .v-input__slot{
                  background-color: #F6F6F6 !important;
                  border: 1px solid #8E8E8E;
              }
            }
          }
        }

        
      }
    `;
  }}
`;

const TabGnb = styled(Tab)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      &.styled_tab{
        &.gnb{
          .v-tabs{
            padding: 0;
            border-bottom: 0;
            .v-tabs-bar{
              height: 68px;
              .v-tabs-slider-wrapper{
                height: 4px !important;
              }
              .v-tab{
                margin: 0 25px;
                padding: 0 5px;
                min-width: unset;
                font-size: 18px;
                font-weight: 400;
                &:hover{
                  color: ${Colors.cy_orange} !important;
                  &::before{
                    background-color: #fff;
                    opacity: 0;
                  }
                }
                .v-ripple__container{
                  display: none;
                }
              }
            }
          }
        }
      }
      ${Space};
    `;
  }}
`;

const TabNotice = styled(Tab)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      &.styled_tab{
        position: fixed;
        overflow: hidden;
        margin: 0;
        margin-top: 8px;
        margin-left: -295px;
        padding: 21px 0 24px;
        width: 340px;
        height: 580px;
        border-radius: 18px;
        box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.14);
        background-color: #fff;
        .v-tabs{
          padding: 0 20px;
          border-bottom: 0;
          .v-tabs-bar{
            height: 41px;
          }
          .v-tabs-slider-wrapper{
            height: 3px !important;
          }
          .v-tab{
            position:relative;
            margin-right: 24px;
            padding: 0;
            min-width: unset;
            font-size: 18px;
            font-weight: 400;
            color: ${Colors.text_subbody} !important;
            &:last-of-type{
              margin-right: 0;
            }
            &.v-tab--active{
              color: ${Colors.cy_orange} !important;
              font-weight: 700;
            }
            &:hover{
              color: ${Colors.cy_orange} !important;
              &::before{
                background-color: #fff;
                opacity: 0;
              }
            }
            .v-ripple__container{
              display: none;
            }
            &.new{
              span{
                &::after{
                  content: '';
                  position: fixed;
                  margin-top: -5px;
                  margin-right: -5px;
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: ${Colors.cy_orange};
                }
              }
            }
          }
        }

        .v-window-item{
          padding: 0;

          // 일촌 생일
          .lst_birthday{
            li{
              &:hover{
                background-color: #fff !important;
              }
            }

          }
        }

        h4{
          position: relative;
          margin: 32px 0 16px;
          padding: 0 20px;
          line-height: 16px;
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_subtitle};
          button{
            position: absolute;
            top: 50%;
            right: 8px;
            transform: translateY(-50%);
            color:  ${Colors.cy_orange};
          }
        }
      }
    `;
  }}
`;

const Header = styled('header', props)`
  ${({ theme }) => {
    const { Align, Space } = theme;
    return css`
      position: sticky;
      left: 0;
      top: 0;
      right: 0;
      padding: 0;
      height: 68px;
      background-color: #fff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04);
      z-index: 100;

      ${Space}
      ${Align}
    `;
  }}
`;

const H1 = styled.h1`
  position: absolute;
  left:0;
  top: 50%;
  transform: translateY(-50%);
  a{
    display: block;
    width: 160px;
    height: 33px;
    background: url('/img/svg/logo_cyworld.svg') no-repeat 0 0 /160px;
  }
`;

const Gnb = styled('nav', props)`
  ${({ theme }) => {
    const { Align, Space, } = theme;
    return css`
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);

      ${Space}
      ${Align}
    `;
  }}
`;

const Shortcut = styled('nav', props)`
  ${({ theme }) => {
    const { Align, Space, Colors } = theme;
    return css`
      position: absolute; 
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      ul{
        display: flex;
        li{
          position: relative;
          margin-left: 8px;
          .v-btn{
            display: block;
            position: relative;
            width: 44px;  
            height: 44px;
            background: url('/img/svg/ico_search.svg') no-repeat 50% 50%/ 24px;

            &.v-btn--round{
              border-radius: 16px;
            }
            &.v-btn--has-bg{
              background-color: #fff;
            }
            &:before{
              display: none;
            }
            &:hover{
              background-color: rgba(243, 107, 43, 0.08);
            }
            &:active, &:focus{
              background-color: rgba(243, 107, 43, 0.08);
            }
            .v-ripple__animation {
              color: rgb(243, 107, 43);
            }

            &.search{
              &:active, &:focus{
                background-color: #fff;
              }
            }

            &.notice{
              position: relative;
              background-image: url('/img/svg/ico_notice.svg');
              &.on{
                &::after{
                  content: '';
                  position: absolute;
                  right: 9px;
                  top: 7px;
                  z-index: 10;
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: ${Colors.cy_orange};
                }
              }
            }
            &.more{
              background-image: url('/img/svg/ico_list_more.svg');
            }
          }
        }
      }

      ${Space}
      ${Align}
    `;
  }}
`;

export default {
  props: [
      'selectedIndex'
  ],
  data() {
    let index = this.selectedIndex
    return{
      value : index
    }
  },
  components: {
    ...Common,
    ...StyledList,
    Header,
    H1,
    Gnb,
    Shortcut,
    TabNotice,
    InputSearch,
    Button,
    TabGnb,
  },
  created: function() {
    let tokenExpiredTime = new Date(localStorage.getItem('tokenExpiredTime'))
    let nowTime = new Date()
    // console.log('토큰유효기간222', localStorage.getItem('tokenExpiredTime'))
    // console.log('현재시간', nowTime)
    // console.log('tokenExpiredTime.getTime()', tokenExpiredTime.getTime())
    // console.log('email', this.$store.getters.email)
    // console.log('sid', this.$store.getters.sid)
    // console.log('publicEncKey', this.$store.getters.publicEncKey)
    if(localStorage.getItem('user') || this.$store.getters.email){
      if(tokenExpiredTime.getTime() < nowTime.getTime()){
        // console.log('만료되었음 재발급 실행')
        // this.$store.dispatch('auth/refreshToken', { email: this.$store.getters.email, sid: this.$store.getters.sid, publicEncKey: this.$store.getters.publicEncKey });
      }else{
        // console.log('만료아님')
      }
    }else{
      // console.log('로그아웃 상태')
    }
    // console.log('user :::: ', localStorage.getItem('user'))
  },
  methods: {
    movePage(val) {
      this.$router.push(val).catch(()=>{});
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

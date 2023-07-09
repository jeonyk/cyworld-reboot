<template>
  <Friends>
    <Tab class="styled_tab web">
      <template v-slot:v-tab>
        <v-tab>일촌<span>11</span></v-tab>
        <v-tab>즐겨찾기<span>999</span></v-tab>
      </template>
      <template v-slot:v-tab-item>
        <v-tab-item transition="false">
          <InputText
            type="text"
            value=""
            placeholder="이름이나 닉네임으로 친구검색"
            solo
            class="input_search"
          />
          <ListFriends class="overflow-y-auto">
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">든든은 든든</span>
                <span class="nick">가나다라남준</span>
              </p>
            </li>
          </ListFriends>
          <InfiniteLoading @infinite="infiniteFriendHandler">
            <div slot="no-more"></div>
            <div slot="no-results"></div>
          </InfiniteLoading>

          <!-- <ListBlank class="blank_aside_search">
            <p class="subtitle">검색 결과가 없어요.</p>
          </ListBlank> -->

        </v-tab-item>
        <v-tab-item transition="false">
          <InputText
            type="text"
            value=""
            placeholder="이름이나 닉네임으로 친구검색"
            solo
            class="input_search"
          />
          <ListFriends class="overflow-y-auto">
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
            <li>
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">살금살금걸어다니는아이</span>
                <span class="nick">바람에 흔들흔들</span>
              </p>
            </li>
          </ListFriends>
          <InfiniteLoading @infinite="infiniteBookmarkHandler">
            <div slot="no-more"></div>
            <div slot="no-results"></div>
          </InfiniteLoading>
          <!-- 리스트 없을 시(검색 결과) -->
          <!-- <ListBlank class="blank_aside_search" v-if="!bookmark.bookmarkList">
            <p class="subtitle">검색 결과가 없어요.</p>
          </ListBlank> -->
        </v-tab-item>
      </template>
    </Tab>



    <Alert cardClass="modalpopup" :open="ProfileCardOtherPopup" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>
          <h4></h4>
          <ul class="lst_func">
            <li><IconButton :class="profileCardData.isBookmark ? 'ico_favorite  on' : 'ico_favorite'" value="즐겨찾기" large></IconButton></li>
<!--            <li><IconButton :class="profileCardData.isPin ? 'ico_pin on' : 'ico_pin'" value="핀고정" large /></li>-->
            <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close()" /></li>
          </ul>
          <!-- <span class="pop-close-btn" ></span> -->
        </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          <ProfileInfo>
            <div class="thumb">
              <img src="/img/temp_profile.png" alt="">
            </div>
            <div class="profile">
              <p class="subtitle">{{ profileCardData.nickname }}</p>
              <ul class="lst_count">
                <li><b>일촌</b><span class="num" v-text="numberFormat(profileCardData.friendCount)+'명'" /></li>
                <li><b>게시물</b><span class="num" v-text="numberFormat(profileCardData.contentCount)+'개'" /></li>
              </ul>
            </div>
          </ProfileInfo>
          <FuncButtons mt="24">
            <Button value="일촌신청" large outlined width="314" color="gray" class="btn_add" />


            <v-menu
                offset-y
                left
                transition="slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <Button value="더보기" large outlined width="80" color="gray" class="btn_more ir" :vbind="attrs" :von="on" />
              </template>

              <ListMore class="lst_more">
                <template v-slot:items>
                  <ListMoreDesc primary="차단" />
                </template>
              </ListMore>
            </v-menu>
          </FuncButtons>
          <MiniHompyInfo>
            <div class="subtitle">{{ profileCardData.minihompyName }}</div>
            <div class="desc">
              {{ profileCardData.description }}
            </div>
            <ul class="lst_img">
              <li v-for="data in profileCardData.contents" :key="data">
                <img :src="data" alt="" />
              </li>
            </ul>
          </MiniHompyInfo>
          <RelationButtons>
            <Button value="미니홈피" large block @click="moveMinihomePage(profileCardData.did)"></Button>
          </RelationButtons>
        </v-card-text>
      </template>
    </Alert>

    <Alert cardClass="modalpopup" :open="profileCardPopup" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>
          <h4></h4>
          <ul class="lst_func">
            <li><IconButton :class="profileCardData.isBookmark ? 'ico_favorite  on' : 'ico_favorite'" value="즐겨찾기" large
              @click="buttonBookmark" /></li>
<!--            <li><IconButton :class="profileCardData.isPin ? 'ico_pin on' : 'ico_pin'" value="핀고정" large /></li>-->
            <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close()" /></li>
          </ul>
          <!-- <span class="pop-close-btn" ></span> -->
        </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          <ProfileInfo>
            <div class="thumb">
              <img :src="profileCardData.profileImgUrl" alt="">
            </div>
            <div class="profile">
              <p class="desc">{{ profileCardData.relationNameOfMe }}</p>
              <p class="subtitle">{{ profileCardData.nickname }}</p>
              <ul class="lst_count">
                <li><b>일촌</b><span class="num" v-text="numberFormat(profileCardData.friendCount)+'명'" /></li>
                <li><b>게시물</b><span class="num" v-text="numberFormat(profileCardData.contentCount)+'개'" /></li>
              </ul>
            </div>
          </ProfileInfo>
          <FuncButtons mt="24">
            <Button value="선물하기" large outlined width="314" color="gray" class="btn_gift" />


            <v-menu
                offset-y
                left
                transition="slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <Button value="더보기" large outlined width="80" color="gray" class="btn_more ir" :vbind="attrs" :von="on" />
              </template>

              <ListMore class="lst_more">
                <template v-slot:items>
                  <ListMoreDesc primary="일촌명 변경" />
                  <ListMoreDesc primary="일촌 해지" />
                  <ListMoreDesc primary="차단" />
                </template>
              </ListMore>
            </v-menu>
          </FuncButtons>
          <MiniHompyInfo>
            <div class="subtitle">{{ profileCardData.minihompyName }}</div>
            <div class="desc">
              {{ profileCardData.description }}
            </div>
            <ul class="lst_img">
              <li v-for="data in profileCardData.contents" :key="data">
                <img :src="data" alt="" />
              </li>
            </ul>
          </MiniHompyInfo>
          <RelationButtons>
            <Button value="미니홈피" large block @click="moveMinihomePage(profileCardData.did)"></Button>
          </RelationButtons>
        </v-card-text>
      </template>
    </Alert>
  </Friends>
</template>

<script>
import styled, { css } from 'vue-styled-components';

const Friends = styled.div`
  ${({ theme }) => {
    const { Margins, Colors } = theme;
    return css`
      /* margin-top: ${Margins.base}; */
      overflow: hidden;
      padding: 30px 0 8px;
      height: 646px;
      background-color: #ebf1f3;
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);

      .styled_tab.web{
        .v-tabs-items{
          background-color: transparent;
        }
        .v-tabs{
          padding: 0 20px;
          .v-tabs-bar{
            height: 32px;
            background-color: transparent;
          }
        }
        .v-tab{
          margin-right: 16px;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          span{
            margin-left: 4px;
            font-weight: 400;
          }
          &:hover{
            color: #129fce !important;
          }
        }
        .v-tab--active{
          color: #129fce !important;
          font-weight: 700;
          background: none;
        }
        .v-tabs-slider-wrapper{
          height: 3px !important;
          .v-tabs-slider{
            background-color: #129fce !important;
          }
        }

        .input_search{
          margin: 20px 16px 0;
          .styled_input.v-text-field--filled{
            .v-input__control{
              .v-input__slot{
                min-height: 40px;
                padding: 0 0 0 38px !important;
                background-color: #fff !important;
                background-position-x: calc(8px) !important;
                .v-input__append-inner{
                  .v-input__icon{
                    position: relative;
                    left: -5px;
                  }
                }
                input{
                  font-size: 15px;
                  &::placeholder{
                    font-size: 15px;
                    color: ${Colors.text_subbody};
                  }
                }
              }
            }
          }
        }
      }
    `;
  }}
`;

const ListFriends = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      width: 266px;
      height: 511px;
      padding-left: 8px !important;
      li{
        position: relative;
        width: 254px;
        min-height: 64px;
        padding: 8px 0 8px 68px;
        &:first-child{
          border-top: 0;
        }
        &:hover{
          background-color: ${Colors.hover_gray};
          border-radius: 8px;
        }
        .thumb{
          overflow: hidden;
          position: absolute;
          left: 8px;
          top: 8px;
          border-radius: 20px;
          img{
            display: block;
            width: 48px;
            height: 48px;
          }
        }

        .title_list{
          > span{
            display: block;
          }
          .relation{
            padding-top: 5px;
            font-size: 13px;
            font-weight: 300;
            color: ${Colors.text_subbody};
          }
          .nick{
            font-size: 15px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
        }
      }
    `;
  }}
`;

const styledComponents = {
  Friends, ListFriends,
};

import List from '@/styles/pc/common/List';
import Tab from '@/components/Tab.vue';
import InputText from '@/components/InputText.vue';
import InfiniteLoading from 'vue-infinite-loading'
import Alert from '@/components/Alert.vue';
import AlertStyle from '@/styles/pc/common/Alert.js';
import Button from '@/components/Button.vue';
import IconButton from '@/components/IconButton.vue';
import { addComma } from '@/utils/formatter'


export default {
  components: {
    Tab,
    InputText,
    ...List,
    ...styledComponents,
    ...AlertStyle,
    InfiniteLoading,
    Alert,
    Button,
    IconButton
  },

  
  data() {
    return {
      ProfileCardOtherPopup : false,
      profileCardPopup : false,
      friend: {
        friendList: [],
        hasNext: true,
        pagesize: 0
      },
      bookmark: {
        bookmarkList: [],
        hasNext: true,
        pagesize: 0
      },
      profileCardData: {
        did: '',
        nickname: '',
        profileImgUrl: '',
        description: '',
        minihompyName: '',
        contentCount: '',
        contents: [],
        friendCount: '',
        isFriend : false,
        isBookmark: false,
        friendPin:false,
        bookmarkPin:false,
        isPin: false,
        relationNameOfMe: ''
      }
    }
  },
  methods: {
    infiniteFriendHandler($state) {
      if(this.friend.hasNext) {
        this.$store.dispatch('cyhome/cylifeFriend',{page: this.friend.pagesize}).then(() => {

          $state.loaded();

          this.friend.friendList = this.friend.friendList.concat(this.$store.getters.friendJson.elements)
          this.friend.hasNext = this.$store.getters.friendJson.slice.hasNext
          this.friend.pagesize += 1

          if(!this.$store.getters.friendJson.slice.hasNext) {
            $state.complete()
          }
        })
      } else {
        $state.complete()
      }
    },
    infiniteBookmarkHandler($state) {
      if(this.bookmark.hasNext) {
        this.$store.dispatch('cyhome/cylifeBookmark',{page: this.bookmark.pagesize}).then(() => {

          $state.loaded();

          this.bookmark.bookmarkList = this.bookmark.bookmarkList.concat(this.$store.getters.bookmarkJson.elements)
          this.bookmark.hasNext = this.$store.getters.bookmarkJson.slice.hasNext
          this.bookmark.pagesize += 1

          if(!this.$store.getters.bookmarkJson.slice.hasNext) {
            $state.complete()
          }
        })
      } else {
        $state.complete()
      }
    },
    profileCard(did, flag="N"){

      this.$store.dispatch('cyhome/profileCard',{did: did}).then(() => {
        this.profileCardData = this.$store.getters.profileCardJson;

        if(flag === 'F') {
          this.profileCardData.isPin = this.profileCardData.friendPin;
        } else {
          this.profileCardData.isPin = this.profileCardData.bookmarkPin;
        }

        if(this.profileCardData.isFriend) {
          this.profileCardPopup = true;
          this.ProfileCardOtherPopup = false;
        } else {
          this.ProfileCardOtherPopup = true;
          this.profileCardPopup = false;
        }

      })
    },
    popup_close() {
      this.ProfileCardOtherPopup = false
      this.profileCardPopup = false
    },
    numberFormat(val) {
      return addComma(val)
    },
    moveMinihomePage(did) {
      // this.$router.push({name:'/pc/MH-Main/'+did,params:{userId:did}});
      this.$router.push('/pc/MH-Main/'+did)
    },
    buttonBookmark(){
      if(this.profileCardData.isBookmark) {
        this.$store.dispatch('cyhome/buttonBookmarkDelete',{did: this.profileCardData.did}).then(()=> {
          if(this.$store.getters.successJson.code == "OK"){
            this.profileCardData.isBookmark = false;
            this.bookmark.pagesize = 0;
            this.$store.dispatch('cyhome/cylifeBookmark',{page: this.bookmark.pagesize}).then(() => {
              this.bookmark.bookmarkList = this.$store.getters.bookmarkJson.elements
              this.bookmark.hasNext = this.$store.getters.bookmarkJson.slice.hasNext
              this.bookmark.pagesize += 1
            })
          }
        })
      } else {
        this.$store.dispatch('cyhome/buttonBookmarkRegister',{did: this.profileCardData.did}).then(()=> {
          if(this.$store.getters.successJson.code == "OK"){
            this.profileCardData.isBookmark = true;
            this.bookmark.pagesize = 0;
            this.$store.dispatch('cyhome/cylifeBookmark',{page: this.bookmark.pagesize}).then(() => {
              this.bookmark.bookmarkList = this.$store.getters.bookmarkJson.elements
              this.bookmark.hasNext = this.$store.getters.bookmarkJson.slice.hasNext
              this.bookmark.pagesize += 1
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overflow-y-auto{
  /* IE, Chrome */
  &::-webkit-scrollbar { width: 4px; } /* 스크롤 바 */
  &::-webkit-scrollbar-track { background-color: #ebf1f3; } /* 스크롤 바 밑의 배경 */
  &::-webkit-scrollbar-thumb { background:  rgba(0, 0, 0, 0.2); border-radius: 4px; } /* 실질적 스크롤 바 */
  &::-webkit-scrollbar-thumb:hover { background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
  &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
  &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
  /* FireFox */
  scrollbar-width: thin; /* 스크롤 바 굵기 */
  scrollbar-color: rgba(0, 0, 0, 0.2) #ebf1f3; /* 스크롤 바 색상 */
}
</style>

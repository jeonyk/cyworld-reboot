<template>
  <Friends>
    <Tab class="styled_tab web">
      <template v-slot:v-tab>
        <v-tab>일촌<span>{{ friend.totalCount }}</span></v-tab>
        <v-tab>즐겨찾기<span>{{ bookmark.totalCount }}</span></v-tab>
      </template>
      <template v-slot:v-tab-item>
        <v-tab-item transition="false">
          <InputText
            id="keyword"
            name="keyword"
            type="text"
            value=""
            placeholder="이름이나 닉네임으로 친구검색"
            solo
            class="input_search"
            @update:dateSettting="eventInputKeyword"
            @setInput="setFriendKeyword"
            @keyup.enter="setFriendKeyword"
          />
          <InfiniteLoading @infinite="infiniteFriendHandler">
            <div slot="no-more"></div>
            <div slot="no-results"></div>
          </InfiniteLoading>
          <ListFriends v-if="friend.friendList.length" class="overflow-y-auto">
            <li v-for="friend in friend.friendList" :key="friend.did" @click="profileCard(friend.did,'F')">
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">{{ friend.relationName }}</span>
                <span class="nick">{{ friend.didNickname }}</span>
              </p>
            </li>
          </ListFriends>
          <ListBlank v-else class="blank_aside_search">
            <p class="subtitle">검색 결과가 없어요.</p>
          </ListBlank>

        </v-tab-item>
        <v-tab-item transition="false">
          <InputText
            type="text"
            value=""
            placeholder="이름이나 닉네임으로 친구검색"
            solo
            class="input_search"
            @update:dateSettting="eventInputKeyword"
            @setInput="setBookmarkKeyword"
          />
          <InfiniteLoading @infinite="infiniteBookmarkHandler">
            <div slot="no-more"></div>
            <div slot="no-results"></div>
          </InfiniteLoading>
          <ListFriends  v-if="bookmark.bookmarkList.length" class="overflow-y-auto">
            <li v-for="bookmark in bookmark.bookmarkList" :key="bookmark.did" @click="profileCard(bookmark.did,'B')">
              <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
              <p class="title_list">
                <span class="relation">일촌일땐닉네임표현예정</span>
                <span class="nick">{{ bookmark.nickname }}</span>
              </p>
            </li>
          </ListFriends>
          <ListBlank v-else class="blank_aside_search">
            <p class="subtitle">검색 결과가 없어요.</p>
          </ListBlank>
        </v-tab-item>
      </template>
    </Tab>

    <!-- 타인 프로필 카드 팝업 -->
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

    <!-- 친구 프로필 카드 팝업 -->
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
                  <ListMoreDesc primary="일촌명 변경" @click="changeNickName"/>
                  <ListMoreDesc primary="일촌 해지" @click="friendDeletePopup = true, profileCardPopup = false"/>
                  <ListMoreDesc primary="차단" @click="blockFriendPopup = true, profileCardPopup = false"/>
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

    <!-- 친구 요청 팝업 -->
    <Alert cardClass="modalpopup" :open="friendRequestPopup" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>
          <h4 class="title_modal">{{modalTitle}}</h4>
          <ul class="lst_func">
            <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close()" /></li>
          </ul>
        </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          <ProfileRequest>
            <div class="thumb">
              <!-- 이미지 변경 -->
              <img src="/img/temp_profile.png" alt="">
            </div>
            <div class="msg_request">
              <b>{{profileCardData.nickname}}</b> {{requestMessageFirst}}<br />{{requestMessageSecond}}
            </div>
          </ProfileRequest>

          <FormConfirm mb="24">
            <FormConfirmDesc>
              <InputText id="relationName"
                        name="relationName"
                        type="text"
                        @blur="validateNickName"
                        @mouseout="validateNickName"
                        :class="writeForm.class"
                        hint="내가 상대방을 부르는 일촌명입니다."
                        label="상대방 일촌명"
                        maxlength="20"
                        counter="20"
                        :value="writeForm.relationName"
                        @setInput="setRelationName"
                        @update:dateSettting="eventInputRelationName"
                        />
            </FormConfirmDesc>
            <FormConfirmDesc mt="16">
              <InputText id="relationNameOfMe"
                        name="relationNameOfMe"
                        type="text"
                        @blur="validateNickName"
                        @mouseout="validateNickName"
                        :class="writeForm.class"
                        hint="상대방이 나를 부르는 일촌명입니다."
                        label="내 일촌명"
                        counter="20"
                        maxlength="20"
                        :value="writeForm.relationNameOfMe"
                        @setInput="setRelationNameOfMe"
                        @update:dateSettting="eventInputRelationNameOfMe"
                        />
            </FormConfirmDesc>
          </FormConfirm>

          <RelationButtons>
            <Button value="취소" large outlined width="197" @click="popup_close()"/>
            <Button :value="buttonMessage" large  width="197" @click="friendRequest" :disabled="btnDisabled"/>
          </RelationButtons>
        </v-card-text>
      </template>
    </Alert>

    <!-- 일촌 요청 완료 팝업 -->
    <Alert cardClass="title-text" :open="friendRequestCheckPopup">
      <template v-slot:dialog-title>
        <v-card-title>{{requestAlertMessageFirst}}</v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          {{requestAlertMessageSecond}}
        </v-card-text>
      </template>
      <template v-slot:dialog-btn>
        <v-btn text block x-large @click="friendRequestCheckPopup = false">확인</v-btn>
      </template>
    </Alert>

    <!-- 일촌 해지 submit 팝업 -->
    <Alert cardClass="title-text web" :open="friendDeletePopup" @update:dateSettting="popup_close" max-width="300">
      <template v-slot:dialog-title>
        <v-card-title>일촌을 해지하시겠어요?</v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          일촌을 해지하시면, 일촌 목록에서 '{{profileCardData.relationName}} {{profileCardData.nickname}}'님을 더 이상 만날 수 없어요
        </v-card-text>
      </template>
      <template v-slot:dialog-btn>
        <v-btn class="two-btns cancel" text  x-large @click="friendDeletePopup = false">취소</v-btn>
        <v-btn class="two-btns" text x-large @click="handleFriendDelete">확인</v-btn>
      </template>
    </Alert>

    <!-- 에러 팝업 -->
    <Alert cardClass="title-text" :open="errorPopup" @update:dateSettting="errorPopup = false">
      <template v-slot:dialog-title>
        <v-card-title>확인</v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          {{ errorMessage }}
        </v-card-text>
      </template>
      <template v-slot:dialog-btn>
        <v-btn text block x-large @click="errorPopup = false, errorMessage = ''">확인</v-btn>
      </template>
    </Alert>

    <!-- 차단 submit 팝업 -->
    <Alert cardClass="title-text web" :open="blockFriendPopup" @update:dateSettting="popup_close" max-width="300">
      <template v-slot:dialog-title>
        <v-card-title>{{profileCardData.nickname}} 님을 차단 하시겠어요?</v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          차단을 하시면, 싸이월드에서 '{{profileCardData.nickname}}'님을 탐색 할 수 없습니다.
        </v-card-text>
      </template>
      <template v-slot:dialog-btn>
        <v-btn class="two-btns cancel" text  x-large @click="blockFriendPopup = false">취소</v-btn>
        <v-btn class="two-btns" text x-large @click="blockFriendHandle">확인</v-btn>
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

import Form from '@/styles/pc/common/Form';
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
    ...Form,
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
  created() {
    if(this.bookmark.hasNext) {
      this.searchBookmark(0, '', this.bookmark.pagesize);
    }
  },
  data() {
    return {
      keyword: '',
      btnDisabled: true,
      ProfileCardOtherPopup : false,
      profileCardPopup : false,
      friend: {
        friendList: [],
        totalCount: 0,
        hasNext: true,
        pagesize: 0
      },
      bookmark: {
        bookmarkList: [],
        totalCount: 0,
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
      },
      writeForm: {
        class: 'input_error',
        persistentHint: true,
        relationName: '',
        relationNameOfMe: ''
      },
      type: '',
      friendDeletePopup: false,
      currentTab: 'friend',
      friendRequestPopup : false,
      friendRequestCheckPopup : false,
      requestMessageFirst : '',
      requestMessageSecond : '',
      buttonMessage : '',
      requestAlertMessageFirst : '',
      requestAlertMessageSecond : '',
      modalTitle : '',
      errorPopup: false,
      errorMessage: '',
      blockFriendPopup: false,
      isBlock: false
    }
  },
  methods: {
    infiniteFriendHandler($state) {
      if (this.friend.hasNext) {
        this.searchFriend(0, this.keyword, this.friend.pagesize, $state);
      } else {
        $state.complete();
      }
    },
    infiniteBookmarkHandler($state) {
      if (this.bookmark.hasNext) {
        this.searchBookmark(0, this.keyword, this.bookmark.pagesize, $state);
      } else {
        $state.complete();
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
          this.writeForm.class = "";
          this.writeForm.relationName = this.profileCardData.relationName;
          this.writeForm.relationNameOfMe = this.profileCardData.relationNameOfMe;
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
      this.friendRequestPopup = false
      this.friendRequestCheckPopup = false
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
        this.$store.dispatch('cyhome/buttonBookmarkDelete',{ did: this.profileCardData.did }).then(()=> {
          if(this.$store.getters.homeReturnJson.code == "OK") {
            this.profileCardData.isBookmark = false;
            this.bookmark.pagesize = 0;
            this.searchBookmark(0, '', this.bookmark.pagesize);
          } else {
            this.errorMessage = this.$store.getters.homeReturnJson.message;
            this.errorPopup = true;
          }
        })
      } else {
        this.$store.dispatch('cyhome/buttonBookmarkRegister',{ did: this.profileCardData.did }).then(()=> {
          if(this.$store.getters.homeReturnJson.code == "OK") {
            this.profileCardData.isBookmark = true;
            this.bookmark.pagesize = 0;
            this.searchBookmark(0, '', this.bookmark.pagesize);
          } else {
            this.errorMessage = this.$store.getters.homeReturnJson.message;
            this.errorPopup = true;
          }
        })
      }
    },
    changeNickName(){
      this.profileCardPopup = false;
      this.modalTitle = '일촌명 변경';
      this.requestMessageFirst = '님과';
      this.requestMessageSecond = '일촌명을 변경합니다.';
      this.buttonMessage = '일촌명 변경 신청';
      this.friendRequestPopup = true;
    },
    friendRequest(){
      this.friendRequestPopup = false;
      if(this.buttonMessage =='일촌신청'){
        this.$store.dispatch('cyhome/friendRequest', {
          did: this.profileCardData.did,
          type: 1,
          relationName: this.writeForm.relationName,
          relationNameOfMe: this.writeForm.relationNameOfMe
        })
        .then(() => {
          if (this.$store.getters.homeReturnJson.code === 'OK') {
            this.requestAlertMessageFirst = '일촌 신청을 보냈어요.',
            this.requestAlertMessageSecond = '상대방이 수락하면 일촌 맺기가 완료됩니다.',
            this.friendRequestCheckPopup = true;
          } else {
            this.errorMessage = this.$store.getters.homeReturnJson.message;
            this.errorPopup = true;
          }
        })
      }else{
        this.$store.dispatch('cyhome/friendRequest', {
          did: this.profileCardData.did,
          type: 2,
          relationName: this.writeForm.relationName,
          relationNameOfMe: this.writeForm.relationNameOfMe
        })
        .then(() => {
          if (this.$store.getters.homeReturnJson.code === 'OK') {
            this.requestAlertMessageFirst = '일촌명 변경 신청을 보냈어요.',
            this.requestAlertMessageSecond = '상대방이 수락하면 일촌명 변경이 완료됩니다.',
            this.friendRequestCheckPopup = true;
          } else {
            this.errorMessage = this.$store.getters.homeReturnJson.message;
            this.errorPopup = true;
          }
        })
      }
    },
     requestPopupOpen () {
      this.modalTitle = '일촌 신청',
      this.requestMessageFirst = '님께',
      this.requestMessageSecond = '일촌을 신청합니다.',
      this.buttonMessage = '일촌신청',
      this.ProfileCardOtherPopup=false,
      this.friendRequestPopup=true
    },
    validateNickName() {
      if (!this.writeForm.relationName || !this.writeForm.relationName.trim().length
        || !this.writeForm.relationNameOfMe || !this.writeForm.relationNameOfMe.trim().length) {
        this.nickNameErrorChk(true)
      }else{
        this.nickNameErrorChk(false)
      }
    },
    nickNameErrorChk(flag){
      if(flag){
        this.writeForm.class = 'input_error';
        this.writeForm.persistentHint = true
        this.btnDisabled = true
      }else{
        this.writeForm.class = '';
        this.writeForm.hint = '';
        this.writeForm.persistentHint = false
        this.btnDisabled = false
      }
    },
    setRelationName(value){
      this.writeForm.relationName = value;
    },
    setRelationNameOfMe(value){
      this.writeForm.relationNameOfMe = value;
    },
    eventInputRelationName(value) {
      this.writeForm.relationName = value;
    },
    eventInputRelationNameOfMe(value) {
      this.writeForm.relationNameOfMe = value;
    },
    friendDelete(did) {
      this.friendDeletePopup = true;
      this.$store.dispatch('cyhome/profileCard',{did: did}).then(() => {
        this.profileCardData = this.$store.getters.profileCardJson;
      })
    },
    handleFriendDelete() {
      if (this.profileCardData.isFriend) {
        this.$store.dispatch('cyhome/cylifeFriendDelete',{ did: this.profileCardData.did }).then(()=> {
          if(this.$store.getters.successJson.code == "OK") {
            if (this.currentTab === 'friend') {
              this.friend.pagesize = 0;
              this.searchFriend(0, '', this.friend.pagesize);
            } else {
              this.bookmark.pagesize = 0;
              this.searchBookmark(0, '', this.bookmark.pagesize );
            }
          }
          this.friendDeletePopup = false;
        })
      }
    },
    eventInputKeyword(value) {
      this.keyword = value;
    },
    setFriendKeyword() {
      this.friend.pagesize = 0;
      this.searchFriend(0, this.keyword, this.friend.pagesize);
    },
    setBookmarkKeyword() {
      this.bookmark.pagesize = 0;
      this.searchBookmark(0, this.keyword, this.bookmark.pagesize);
    },
    searchFriend(mode, keyword, pagesize, $state) {
      this.$store.dispatch('cyhome/searchFriend',{ mode: mode, key: keyword, page: pagesize }).then(() => {
        if ($state) {
          $state.loaded();
        }
        this.friend.hasNext = this.$store.getters.searchFriendJson.slice.hasNext
        if (pagesize === 0) {
          this.friend.friendList = this.$store.getters.searchFriendJson.elements
          this.friend.totalCount = this.$store.getters.searchFriendJson.totalCount
        } else {
          this.friend.friendList = this.friend.friendList.concat(this.$store.getters.searchFriendJson.elements)
        }
        this.friend.pagesize += 1
        if ($state && !this.friend.hasNext) {
          $state.complete();
        }
      })
    },
    searchBookmark(mode, keyword, pagesize, $state) {
      this.$store.dispatch('cyhome/searchBookmark',{ mode: mode, key: keyword, page: pagesize }).then(() => {
        if ($state) {
          $state.loaded();
        }
        this.bookmark.hasNext = this.$store.getters.searchBookmarkJson.slice.hasNext
        if (pagesize === 0) {
          this.bookmark.bookmarkList = this.$store.getters.searchBookmarkJson.elements
          this.bookmark.totalCount = this.$store.getters.searchBookmarkJson.totalCount
        } else {
          this.bookmark.bookmarkList = this.bookmark.bookmarkList.concat(this.$store.getters.searchBookmarkJson.elements)
        }
        this.bookmark.pagesize += 1
        if ($state && !this.bookmark.hasNext) {
          $state.complete()
        }
      })
    },
    blockFriendHandle(){
      this.isBlock = true;
      this.$store.dispatch('cyhome/blockCylifeFriend', {did: this.profileCardData.did, isBlock: this.isBlock }).then(()=>{
        if(this.$store.getters.homeReturnJson.code === "OK") {
          this.blockFriendPopup = false;

        } else {
          this.errorMessage = this.$store.getters.homeReturnJson.message;
          this.errorPopup = true;
        }
      })
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

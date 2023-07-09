<template>
  <Wrap>
    <Header :selectedIndex="value"/>
    <Container>
      <Aside class="left">
        <AsideInner class="inner_aside">
          <Profile />
        </AsideInner>
      </Aside>
      <Main>
        <Section class="main" pb="20">
          <H2 class="title_page">싸이생활</H2>

          <FriendsToday class="friends_today">
            <H3>오늘의 추천 친구</H3>

              <SlideGroup domID="today_r_f" max-width="740" pagesize="6" :total="Math.ceil(recommandList.length/6)">
              <template v-slot:f-slide-group>

                  <ListFriendsToday id="today_r_f">
                    <li v-for="recommend in recommandList" :key="recommend.did">
                      <a @click="profileCard(recommend.did)">
                        <span class="thumb"><img :src="recommend.profileUrl" alt=""></span>
                        <span class="name">{{ recommend.nickname }}</span>
                      </a>
                    </li>
                  </ListFriendsToday>

              </template>
            </SlideGroup>

          </FriendsToday>

          <Tab class="styled_tab web" mt="48">
            <template v-slot:v-tab>
              <v-tab @change="onChangeTab('friend')">일촌</v-tab>
              <v-tab @change="onChangeTab('bookmark')">즐겨찾기</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
                <FriendsBest>
                  <!-- <InputText
                    type="text"
                    value=""
                    placeholder="이름이나 닉네임으로 친구 검색"
                    solo
                    class="input_search web"
                  /> -->
                  <!-- <ListFriendsBest>
                    <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag update">UPDATE</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                   <li class="grayscale">
                     <p class="flag sleep">SLEEP</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                  </ListFriendsBest> -->

                  <InfiniteLoading @infinite="infiniteFriendHandler">
                    <div slot="no-more"></div>
                    <div slot="no-results"></div>
                  </InfiniteLoading>

                  <!-- 리스트 없을 시 -->
                  <ListBlank class="blank_cylive">
                    <p class="subtitle">만나서 반가워요!</p>
                    <p class="msg">현재는 일촌이 없네요. <br>
                    상대방이 나를 일촌으로 추가할 수 있도록 초대해 보세요.</p>
                    <div class="btn_area">
                      <a href="/" class="kakao">카카오톡으로 링크 보내기</a>
                      <a href="/" class="invite">초대 링크 보내기</a>
                    </div>
                  </ListBlank>
                  <!-- 리스트 없을 시(검색 결과) -->
                  <!--<ListBlank class="blank_search">
                    <p class="subtitle">찾으시는 검색 결과가 없어요.</p>
                  </ListBlank>-->
                </FriendsBest>
              </v-tab-item>
              <v-tab-item transition="false">
                <FriendsBest>
                  <!-- <InputText
                    type="text"
                    value=""
                    placeholder="이름이나 닉네임으로 친구 검색"
                    solo
                    class="input_search web"
                  /> -->
                  <ListFriendsBest>
                    <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag popular">POPULAR</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin">즐겨찾기</i>
                     </p>
                   </li>
                   <li>
                     <p class="flag update">UPDATE</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                   <li class="grayscale">
                     <p class="flag sleep">SLEEP</p>
                     <p class="avata">
                        <AvatarImage>
                          <span class="body"><img src="/img/temp_profile_body.gif" alt=""></span>
                          <span class="hair"><img src="/img/temp_profile_hair.gif" alt=""></span>
                          <span class="dressup"><img src="/img/temp_profile_dressup.gif" alt=""></span>
                          <span class="dressdown"><img src="/img/temp_profile_dressdown.gif" alt=""></span>
                          <span class="acc"><img src="/img/temp_profile_acc.gif" alt=""></span>
                        </AvatarImage>
                      </p>
                     <p class="title_list">
                       <span class="relation">일촌명은한글기준열세글자임</span>
                       <span class="nick">닉네임은한글기준열세글자임</span>
                       <span class="state">방금 전</span>
                     </p>
                     <p class="etc">
                       <span class="emotion sunny">맑음</span>
                       <i class="pin" v-if="false">즐겨찾기</i>
                     </p>
                   </li>
                  </ListFriendsBest>
                  <InfiniteLoading @infinite="infiniteBookmarkHandler">
                    <div slot="no-more"></div>
                    <div slot="no-results"></div>
                  </InfiniteLoading>
                </FriendsBest>
              </v-tab-item>
            </template>
          </Tab>

        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Brithday />
          <News />
        </AsideInner>
      </Aside>

      <Alert cardClass="modalpopup" :open="ProfileCardOtherPopup" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>
            <h4></h4>
            <ul class="lst_func">
              <li><IconButton :class="profileCardData.isBookmark ? 'ico_favorite  on' : 'ico_favorite'" value="즐겨찾기"
                large @click="buttonBookmark"></IconButton></li>
<!--              <li><IconButton :class="profileCardData.isPin ? 'ico_pin on' : 'ico_pin'" value="핀고정" large /></li>-->
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
              <Button value="일촌신청" large outlined width="314" color="gray" class="btn_add"
                @click="requestPopupOpen"/>

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
              <li><IconButton :class="profileCardData.isBookmark ? 'ico_favorite on' : 'ico_favorite'" value="즐겨찾기"
                large @click="buttonBookmark"/></li>
<!--              <li><IconButton :class="profileCardData.isPin ? 'ico_pin on' : 'ico_pin'" value="핀고정"-->
<!--                large/></li>-->
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
                    <ListMoreDesc primary="일촌명 변경" @click="changeNickName()"/>
                    <ListMoreDesc primary="일촌 해지" @click="friendDeletePopup = true, profileCardPopup = false"/>
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

      <!-- 일촌 해지 submit 팝업 -->
      <Alert cardClass="title-text web" :open="friendDeletePopup" max-width="300">
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

    </Container>
  </Wrap>
</template>

<script>
import Header from '@/views/publish/pc/includes/Header.vue';
import Profile from '@/views/publish/pc/aside/Profile.vue';
import Brithday from '@/views/publish/pc/aside/Birthday.vue';
import News from '@/views/publish/pc/aside/News.vue';
import Tab from '@/components/Tab.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import Form from '@/styles/pc/common/Form';
import InputText from '@/components/InputText.vue';
import SlideGroup from '@/components/pc/SlideGroup.vue';
import InfiniteLoading from 'vue-infinite-loading'
import { formatTime, addComma } from '@/utils/formatter'
import Alert from '@/components/Alert.vue';
import AlertStyle from '@/styles/pc/common/Alert.js';
import Button from '@/components/Button.vue';
import IconButton from '@/components/IconButton.vue';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...Form,
    ...AlertStyle,
    Header,
    Profile,
    Brithday,
    News,
    Tab,
    InputText,
    SlideGroup,
    InfiniteLoading,
    Alert,
    Button,
    IconButton
  },
  created() {
    this.$store.dispatch('cyhome/cylifeRecommend').then(() => {
      this.recommandList = this.$store.getters.recommendJson
    })

    if(this.bookmark.hasNext) {
      this.$store.dispatch('cyhome/cylifeBookmark',{page: this.bookmark.pagesize}).then(() => {
        this.bookmark.bookmarkList = this.$store.getters.bookmarkJson.elements
        this.bookmark.hasNext = this.$store.getters.bookmarkJson.slice.hasNext
        this.bookmark.pagesize += 1
      })
    }
  },
  props: [
      'selectedIndex'
  ],
  data() {
    let index = this.selectedIndex
    return{
      btnDisabled: true,
      ProfileCardOtherPopup : false,
      profileCardPopup : false,
      minimi : [
        'body',
        'hair',
        'dressup',
        'dressdown',
        'acc'
      ],
      value : index,
      recommandList: [],
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
        relationName: null,
        relationNameOfMe: null
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
      errorMessage: '',
      errorPopup: false,
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
        this.writeForm.relationName = this.profileCardData.relationName;
        this.writeForm.relationNameOfMe = this.profileCardData.relationNameOfMe;
      })
    },
    popup_close() {
      this.ProfileCardOtherPopup = false
      this.profileCardPopup = false
      this.friendRequestPopup = false
      this.friendRequestCheckPopup = false
    },
    timeFormat(val) {
      return formatTime(val)
    },
    numberFormat(val) {
      return addComma(val)
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
    },
    moveMinihomePage(did) {
      this.$router.push('/pc/MH-Main/'+did)
    },
    handleFriendDelete() {
      if (this.profileCardData.isFriend) {
        this.$store.dispatch('cyhome/cylifeFriendDelete',{ did: this.profileCardData.did }).then(()=> {
          if(this.$store.getters.homeReturnJson.code === "OK") {
            if (this.currentTab === 'friend') {
              this.friend.pagesize = 0;
              this.$store.dispatch('cyhome/cylifeFriend',{ page: this.friend.pagesize }).then(() => {
                this.friend.friendList = this.$store.getters.friendJson.elements
                this.friend.hasNext = this.$store.getters.friendJson.slice.hasNext
                this.friend.pagesize += 1
              })
            } else {
              this.bookmark.pagesize = 0;
              /** TODO:: 즐겨찾기 목록을 재요청? bookmarkList 의 정보만 수정? */
              this.$store.dispatch('cyhome/cylifeBookmark',{ page: this.bookmark.pagesize }).then(() => {
                this.bookmark.bookmarkList = this.$store.getters.bookmarkJson.elements
                this.bookmark.hasNext = this.$store.getters.bookmarkJson.slice.hasNext
                this.bookmark.pagesize += 1
              })
            }
          } else {
            this.errorMessage =this.$store.getters.homeReturnJson.message;
            this.errorPopup = true;
          }
          this.friendDeletePopup = false;
        })
      }
    },
    onChangeTab(value) {
      this.currentTab = value;
    },
    // buttonPin(isPin, did){
    //   if(isPin){
    //     this.$store.dispatch('')
    //   }
    // }
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
          this.requestAlertMessageFirst = '일촌 신청을 보냈어요.',
          this.requestAlertMessageSecond = '상대방이 수락하면 일촌 맺기가 완료됩니다.',
          this.friendRequestCheckPopup = true;
        })
      }else{
        this.$store.dispatch('cyhome/friendRequest', {
          did: this.profileCardData.did,
          type: 2,
          relationName: this.writeForm.relationName,
          relationNameOfMe: this.writeForm.relationNameOfMe
        })
        .then(() => {
          this.requestAlertMessageFirst = '일촌명 변경 신청을 보냈어요.',
          this.requestAlertMessageSecond = '상대방이 수락하면 일촌명 변경이 완료됩니다.',
          this.friendRequestCheckPopup = true;
        })
      }
    },
    requestPopupOpen(){
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
    changeNickName(){
      this.profileCardPopup = false;
      this.modalTitle = '일촌명 변경';
      this.requestMessageFirst = '님과';
      this.requestMessageSecond = '일촌명을 변경합니다.';
      this.buttonMessage = '일촌명 변경 신청';
      this.friendRequestPopup = true;
    }
  }
}
</script>

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
          <H2 class="title_page">싸이생활</H2>

          <Tab class="styled_tab web" mt="48">
            <template v-slot:v-tab>
              <v-tab>받은 일촌 신청</v-tab>
              <v-tab>보낸 일촌 신청</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
                <FriendsRequest>
                  <ListFriendsRequest v-if="receiving.result && receiving.receivingList.length">
                    <li v-for="receiving in receiving.receivingList" :key="receiving.did">
                      <p class="thumb"><img :src="receiving.profileImgUrl" alt=""></p>
                      <p class="link_text">
                        <span>{{ receiving.relationNameOfMe }}({{ $store.getters.profileJson.nickname }})</span>
                        <span class="you">{{ receiving.relationName }}({{ receiving.nickname }})</span>
                      </p>
                      <p v-if="receiving.isRefuse" class="btn_area">
                        <Button value="거절되었습니다" class="btn_refuse" disabled></Button>
                      </p>
                      <p v-else-if="receiving.isAccept" class="btn_area">
                        <Button value="수락되었습니다" class="btn_accept" disabled></Button>
                      </p>
                      <p v-else class="btn_area">
                        <!-- TODO:: 거절 / 수락 버튼 작업 필요 -->
                        <Button value="거절" class="btn_refuse" outlined @click="onRefuseFriendReceiving(receiving)"></Button>
                        <Button value="수락" class="btn_accept" @click="onAcceptFriendReceiving(receiving)"></Button>
                      </p>
                    </li>
                  </ListFriendsRequest>
                  <InfiniteLoading @infinite="infiniteReceivingHandler">
                    <div slot="spinner"><Loading></Loading></div>
                    <div slot="no-more"></div>
                    <div slot="no-results"></div>
                  </InfiniteLoading>
                  <!-- 리스트 없을 시(검색 결과) -->
                  <ListBlank class="blank_receive" v-if="receiving.result && !receiving.receivingList.length">
                    <p class="subtitle">일촌 신청이 없어요</p>
                    <p class="msg">오늘의 추천 친구를 통해 일촌을 신청해보는 것은 어떨까요?</p>
                  </ListBlank>
                  <FriendsToday class="friends_today" v-if="receiving.result && !receiving.receivingList.length">
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
                </FriendsRequest>
              </v-tab-item>
              <v-tab-item transition="false">
                <FriendsRequest>
                  <InfiniteLoading @infinite="infiniteSendingHandler">
                    <div slot="spinner"><Loading></Loading></div>
                    <div slot="no-more"></div>
                    <div slot="no-results"></div>
                  </InfiniteLoading>
                  <ListFriendsRequest v-if="sending.result && sending.sendingList.length">
                    <li v-for="sending in sending.sendingList" :key="sending.did">
                      <p class="thumb"><img :src="sending.profileImgUrl" alt=""></p>
                      <p class="link_text">
                        <span>{{ sending.relationNameOfMe }}({{ $store.getters.profileJson.nickname }})</span>
                        <span class="you">{{ sending.relationName }}({{ sending.nickname }})</span>
                      </p>
                      <p v-if="sending.isCancel" class="btn_area">
                        <Button value="취소되었습니다" class="btn_refuse" disabled></Button>
                      </p>
                      <p v-else class="btn_area">
                        <Button value="취소" class="btn_refuse" outlined @click="onCancelFriendSending(sending)"></Button>
                      </p>
                    </li>
                  </ListFriendsRequest>
                  <InfiniteLoading @infinite="infiniteSendingHandler">
                    <div slot="no-more"></div>
                    <div slot="no-results"></div>
                  </InfiniteLoading>
                  <!-- 리스트 없을 시(검색 결과) -->
                  <ListBlank class="blank_receive" v-if="sending.result && !sending.sendingList.length">
                    <p class="subtitle">일촌 신청이 없어요</p>
                    <p class="msg">오늘의 추천 친구를 통해 일촌을 신청해보는 것은 어떨까요?</p>
                  </ListBlank>
                  <FriendsToday class="friends_today" v-if="sending.result && !sending.sendingList">
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
                </FriendsRequest>
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

      <!-- 타인 프로필 카드 팝업 -->
      <Alert cardClass="modalpopup" :open="profileCardOtherPopup" @update:dateSettting="popup_close" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>
            <h4></h4>
            <ul class="lst_func">
              <li><IconButton :class="profileCardData.isBookmark ? 'ico_favorite  on' : 'ico_favorite'" value="즐겨찾기" large @click="buttonBookmark"></IconButton></li>
              <li><IconButton :class="profileCardData.isPin ? 'ico_pin on' : 'ico_pin'" value="핀고정" large/></li>
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
                    <ListMoreDesc primary="차단" @click="blockFriendPopup = true, profileCardOtherPopup = false"/>
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


      <!-- 친구 프로필카드 -->
      <Alert cardClass="modalpopup" :open="profileCardPopup" @update:dateSettting="popup_close" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>
            <h4></h4>
            <ul class="lst_func">
              <li><IconButton :class="profileCardData.isBookmark ? 'ico_favorite on' : 'ico_favorite'" value="즐겨찾기"
                large @click="buttonBookmark"/></li>
<!--              <li><IconButton :class="profileCardData.isPin ? 'ico_pin on' : 'ico_pin'" value="핀고정"-->
<!--                large/></li>-->
              <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large @click="popup_close()" /></li>
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
                    <ListMoreDesc primary="차단"  @click="blockFriendPopup = true, profileCardPopup = false"/>
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

      <Alert cardClass="modalpopup" :open="friendRequestPopup" @update:dateSettting="friendRequestPopup = false" max-width="450">
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

    </Container>
  </Wrap>
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Brithday from '@/views/pc/aside/Birthday.vue';
import News from '@/views/pc/aside/News.vue';
import Tab from '@/components/Tab.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';

import Form from '@/styles/pc/common/Form';
import InputText from '@/components/InputText.vue';
import SlideGroup from '@/components/pc/SlideGroup.vue';
import InfiniteLoading from 'vue-infinite-loading'

import { formatTime, addComma } from '@/utils/formatter';
import Alert from '@/components/Alert.vue';
import AlertStyle from '@/styles/pc/common/Alert.js';
import Button from '@/components/Button.vue';
import IconButton from '@/components/IconButton.vue';
import Loading from '@/components/Loading.vue';

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
    IconButton,
    Loading
  },
  created() {
    this.$store.dispatch('cyhome/cylifeFriendReceiving', { page: this.receiving.pagesize }).then(() => {
      this.receiving.receivingList = this.$store.getters.friendReceivingJson.elements
      this.receiving.hasNext = this.$store.getters.friendSendingJson.slice.hasNext
      this.receiving.pagesize += 1
    })

    if(this.sending.hasNext) {
      this.$store.dispatch('cyhome/cylifeFriendSending',{ page: this.sending.pagesize }).then(() => {
        this.sending.sendingList = this.sending.sendingList.concat(this.$store.getters.friendSendingJson.elements)
        this.sending.hasNext = this.$store.getters.friendSendingJson.slice.hasNext
        this.sending.pagesize += 1
      });
    }

    this.recommandList = this.$store.getters.recommendJson;
  },
  data() {
    return {
      btnDisabled: true,
      writeForm: {
        class: 'input_error',
        persistentHint: true,
        relationName: '',
        relationNameOfMe: ''
      },
      receiving: {
        receivingList : [],
        hasNext: true,
        result: false,
        pagesize: 0
      },
      sending: {
        sendingList : [],
        hasNext: true,
        result: false,
        pagesize: 0
      },
      recommandList: [],
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
        isPin: false
      },
      profileCardOtherPopup: false,
      profileCardPopup: false,
      errorMessage: '',
      errorPopup: false,
      friendRequestPopup: false,
      friendRequestCheckPopup: false,
      friendDeletePopup: false,
      modalTitle : '',
      requestAlertMessageFirst : '',
      requestAlertMessageSecond : '',
      requestMessageFirst : '',
      requestMessageSecond : '',
      buttonMessage : '',
      blockFriendPopup: false,
      isBlock: false
    }
  }, methods: {
    infiniteReceivingHandler($state) {
      if(this.receiving.hasNext) {
        this.$store.dispatch('cyhome/cylifeFriendReceiving',{page: this.receiving.pagesize}).then(() => {
          this.receiving.result = false;
          $state.loaded();

          this.receiving.receivingList = this.receiving.receivingList.concat(this.$store.getters.friendReceivingJson.elements)
          this.receiving.hasNext = this.$store.getters.friendReceivingJson.slice.hasNext
          this.receiving.pagesize += 1

          if(!this.$store.getters.friendReceivingJson.slice.hasNext) {
            this.receiving.result = true;
            $state.complete()
          }
        })
      } else {
        this.receiving.result = true;
        $state.complete()
      }
    },
    infiniteSendingHandler($state) {
      if(this.sending.hasNext) {
        this.$store.dispatch('cyhome/cylifeFriendSending',{page: this.sending.pagesize}).then(() => {

          this.sending.result = false;
          $state.loaded();

          this.sending.sendingList = this.sending.sendingList.concat(this.$store.getters.friendSendingJson.elements)
          this.sending.hasNext = this.$store.getters.friendSendingJson.slice.hasNext
          this.sending.pagesize += 1

          if(!this.$store.getters.friendSendingJson.slice.hasNext) {
            this.sending.result = true;
            $state.complete()
          }
        })
      } else {
        this.sending.result = true;
        $state.complete()
      }
    },
    onAcceptFriendReceiving(receiving) {
      this.$store.dispatch('cyhome/cylifeAcceptFriendReceiving', { did: receiving.did }).then(() => {
        if (this.$store.getters.homeReturnJson.code === 'OK') {
          this.$set(receiving, 'isAccept', true);
        } else {
          this.errorMessage = this.$store.getters.homeReturnJson.messgae;
          this.errorPopup = true;
        }
      });
    },
    onRefuseFriendReceiving(receiving) {
      this.$store.dispatch('cyhome/cylifeRefuseFriendReceiving', { did: receiving.did }).then(() => {
        if (this.$store.getters.homeReturnJson.code === 'OK') {
          this.$set(receiving, 'isRefuse', true);
        } else {
          this.errorMessage = this.$store.getters.homeReturnJson.messgae;
          this.errorPopup = true;
        }
      });
    },
    onCancelFriendSending(sending) {
      this.$store.dispatch('cyhome/cylifeCancelFriendSending', { did: sending.did }).then(() => {
        if (this.$store.getters.homeReturnJson.code === 'OK') {
          this.$set(sending, 'isCancel', true);
        } else {
          this.errorMessage = this.$store.getters.homeReturnJson.messgae;
          this.errorPopup = true;
        }
     });
    },
    profileCard(did, flag='N'){
      /** TODO:: 프로필 카드 this 있는 데이터 사용 가능 여부 체크 */
      this.$store.dispatch('cyhome/profileCard',{did: did}).then(() => {
        this.profileCardData = this.$store.getters.profileCardJson;

        if(flag === 'F') {
          this.profileCardData.isPin = this.profileCardData.friendPin;
        } else {
          this.profileCardData.isPin = this.profileCardData.bookmarkPin;
        }

        if(this.profileCardData.isFriend) {
          // this.writeForm.relationName = this.profileCardData.relationName;
          // this.writeForm.relationNameOfMe = this.profileCardData.relationNameOfMe;
          // this.writeForm.class = '';
          this.profileCardPopup = true;
          this.profileCardOtherPopup = false;

          } else {
          this.profileCardOtherPopup = true;
          this.profileCardPopup = false;
        }
      })
    },
    popup_close() {
      this.profileCardOtherPopup = false
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
    buttonBookmark() {
      if(this.profileCardData.isBookmark) {
        this.$store.dispatch('cyhome/buttonBookmarkDelete',{did: this.profileCardData.did}).then(()=> {
          if(this.$store.getters.homeReturnJson.code == "OK"){
            this.profileCardData.isBookmark = false;
          } else {
            this.errorMessage = this.$store.getters.homeReturnJson.messgae;
            this.errorPopup = true;
          }
        })
      } else {
        this.$store.dispatch('cyhome/buttonBookmarkRegister',{did: this.profileCardData.did}).then(()=> {
          if(this.$store.getters.homeReturnJson.code == "OK"){
            this.profileCardData.isBookmark = true;
          } else {
            this.errorMessage = this.$store.getters.homeReturnJson.messgae;
            this.errorPopup = true;
          }
        })
      }
    },
    requestPopupOpen() {
      this.modalTitle = '일촌 신청',
      this.requestMessageFirst = '님께',
      this.requestMessageSecond = '일촌을 신청합니다.',
      this.buttonMessage = '일촌신청',
      this.profileCardOtherPopup = false,
      this.friendRequestPopup = true
    },
    validateNickName() {
      if (!this.writeForm.relationName || !this.writeForm.relationName.trim().length
        || !this.writeForm.relationNameOfMe || !this.writeForm.relationNameOfMe.trim().length) {
        this.nickNameErrorChk(true)
      }else{
        this.nickNameErrorChk(false)
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
    changeNickName(){
      this.profileCardPopup = false;
      this.modalTitle = '일촌명 변경';
      this.requestMessageFirst = '님과';
      this.requestMessageSecond = '일촌명을 변경합니다.';
      this.buttonMessage = '일촌명 변경 신청';
      this.friendRequestPopup = true;
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
    handleFriendDelete() {
      if (this.profileCardData.isFriend) {
        this.$store.dispatch('cyhome/cylifeFriendDelete',{ did: this.profileCardData.did }).then(()=> {
          if(this.$store.getters.homeReturnJson.code === "OK") {
            this.friendDeletePopup = false;
          } else {
            this.errorMessgae = this.$store.getters.homeReturnJson.message;
            this.errorPopup = true;
            this.friendDeletePopup = false;
          }
        })
      }
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
    },
    moveMinihomePage(did) {
      this.$router.push('/pc/MH-Main/'+did)
    },
  }
}
</script>

<style>

</style>
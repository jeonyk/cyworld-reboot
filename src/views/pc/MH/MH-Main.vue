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
        <Section pb="20">
          <MhTitle>
            <H2 class="title_page mh-title">{{ monihomepyProfile.minihompyName }}</H2>
            <MhSetting>
<!--              <li><IconButton class="ico_setting cy_gray&#45;&#45;text" large /></li>-->
              <li v-if="did"><IconButton :class="monihomepyProfile.isBookmark ? 'ico_favorite mh cy_gray--text large on' : 'ico_favorite mh cy_gray--text large'" @click="buttonBookmark"/></li>
              <li v-if="did && !monihomepyProfile.isFriend"><IconButton class="ico_add mh cy_gray--text" large @click="requestPopupOpen"/></li>
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
                      class="ico_more"
                      fab
                      depressed
                    >
                      더보기
                    </v-btn>
                  </template>

                  <ListMore class="mh_setting">
                    <template v-slot:items>
                      <ListMoreDesc primary="일촌 해지" v-if="did && monihomepyProfile.isFriend" @click="friendDelete(monihomepyProfile.did)"/>
                      <ListMoreDesc primary="일촌명 변경" v-if="did && monihomepyProfile.isFriend" @click="changeNickName(monihomepyProfile.did)"/>
                      <ListMoreDesc primary="차단하기" v-if="did" @click="blockFriend(monihomepyProfile.did)"></ListMoreDesc>
                      <ListMoreDesc primary="신고하기" v-if="did"/>
                      <ListMoreDesc primary="카카오톡 공유" class="invite_kakao noline" />
                      <ListMoreDesc primary="링크 복사" class="invite_chain" />
                    </template>
                  </ListMore>

                </v-menu>
              </li>
            </MhSetting>
          </MhTitle>

          <MyToday>
            <MyTodayThum>
              <div>
                <img :src="monihomepyProfile.profileImgUrl" alt="">
              </div>
              <!-- <IconButton class="ico_picture cy_gray--text" large @click="pic_upload_open()"/> -->
            </MyTodayThum>
            <MyTodayInfo>
              <TodayCount>
                TODAY
                <span class="today">{{monihomepyProfile.visitCount}}</span>
                <span class="total">{{monihomepyProfile.totalVisitCount}}</span>
              </TodayCount>
              <TodayName>
                {{ monihomepyProfile.nickname }}
              </TodayName>
              <TodayDesc>
                {{monihomepyProfile.description}}
              </TodayDesc>
            </MyTodayInfo>
          </MyToday>
          <MyTodayBot>
              <TodayIs>
                Today is ..
                <TodayFeel>
                  <v-menu offset-y offset-x class="ch_feel_box" min-width="450">
                    <template v-slot:activator="{ on, attrs }">
                      <span
                        v-bind="attrs"
                        v-on="on"
                      >
                        <!--<AvaFeel class="avafeel-4" mr="4"/>-->
                        <AvaFeelImg>
                          <img :src=monihomepyProfile.feelUrl alt="">
                        </AvaFeelImg>
                      </span>
                    </template>
<!--                    <TodayFeelSelect>-->
<!--                      <FeelSelectTitle>오늘 기분이 어떠세요?</FeelSelectTitle>-->
<!--                      <FeelSelectList>-->
<!--                        &lt;!&ndash;<template v-for="(feelItem, i) in feelItems">-->
<!--                        <FeelSelectItem :key="i" :class="{ active: feelItem.active }">-->
<!--                          <AvaFeel :class="'avafeel-'+feelItem.id" width="30" height="30" :backsize="feelItem.bs" mr="5" /><span class="feel-name">{{feelItem.name}}</span>-->
<!--                        </FeelSelectItem>-->
<!--                        </template>&ndash;&gt;-->
<!--                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_0.svg'+')'}">-->
<!--                          사용안함-->
<!--                        </FeelSelectItem>-->
<!--                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_1.svg'+')'}">-->
<!--                          사용안함-->
<!--                        </FeelSelectItem>-->
<!--                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_2.svg'+')'}">-->
<!--                          사용안함-->
<!--                        </FeelSelectItem>-->
<!--                        <FeelSelectItem :style="{backgroundImage:'url('+'/img/svg/avafeel_3.svg'+')'}">-->
<!--                          사용안함-->
<!--                        </FeelSelectItem>-->
<!--                        <FeelSelectItem class="active" :style="{backgroundImage:'url('+'/img/svg/avafeel_3.svg'+')'}">-->
<!--                          사용안함-->
<!--                        </FeelSelectItem>-->

<!--                      </FeelSelectList>-->
<!--                    </TodayFeelSelect>-->
                  </v-menu>
                  {{ monihomepyProfile.feelName }}
                </TodayFeel>
              </TodayIs>
              <TodayFollower>
                <span>일촌</span>
                {{ monihomepyProfile.friendCount }}
                <span>즐겨찾기</span>
                {{ monihomepyProfile.bookmarkCount }}
              </TodayFollower>
            </MyTodayBot>
        </Section>

        <Section mt="12">
          <MhCategory>
            <li class="diary" @click="movePage('/pc/MD-My')">
              <a @click="movePage('/pc/MD-My')"><p v-if="contentsCount.newDiary" class="title new">다이어리</p><p v-else class="title">다이어리</p></a>
                <p class="post"><span class="update">{{contentsCount.newDiary}}</span><span class="all">{{ contentsCount.totalDiary }}</span></p>
            </li>
            <li class="gallery" @click="movePage('/pc/MA-List')">
              <a @click="movePage('/pc/MA-List')"><p v-if="contentsCount.newPost" class="title new">사진첩</p><p v-else class="title">사진첩</p></a>
                <p class="post"><span class="update">{{ contentsCount.newPost }}</span><span class="all">{{ contentsCount.totalPost }}</span></p>
            </li>
            <li class="jukebox" @click="movePage('/pc/MJ-jukebox')">
              <a @click="movePage('/pc/MJ-jukebox')"><p v-if="contentsCount.newJukebox" class="title new">쥬크박스</p><p v-else class="title">쥬크박스</p></a>
                <p class="post"><span class="update">{{ contentsCount.newJukebox }}</span><span class="all">{{ contentsCount.totalJukebox }}</span></p>
            </li>
            <li class="guestbook" @click="movePage('/pc/MG-list')">
              <a @click="movePage('/pc/MG-list')"><p v-if="contentsCount.newGuestbook" class="title new">방명록</p><p v-else class="title">방명록</p></a>
                <p class="post"><span class="update">{{contentsCount.newGuestbook}}</span><span class="all">{{ contentsCount.totalGuestbook }}</span></p>
            </li>
          </MhCategory>
        </Section>

        <Section mt="12" pb="20">
          <TitleBar>
            <H2 class="title_page mh-title mr">Mini Room</H2>
            <p class="subtitle">가을여자, 김사이 미니룸</p>
          </TitleBar>
          <MiniRoom>
            <img src="/img/temp_miniroom.png" alt="">
          </MiniRoom>
        </Section>
        <Section mt="12" pb="32">
          <H2 class="title_page mh-title fs">What Friends Say</H2>
          <ListFriendsSay v-if="friendSayList.elements && friendSayList.elements.length">
            <li v-for="friendSay in friendSayList.elements" :key="friendSay.did">
              <p class="thumb"><img :src="friendSay.profileImgUrl" alt=""></p>
              <div>
                <p class="nick new">
                  <span>{{ friendSay.relationName }}</span>
                  <span class="name">{{ friendSay.nickname }}</span>
                </p>
                <p class="content" @click="friendSayDetailPopup">
                  {{ friendSay.content }}
                </p>
                <p class="date">{{ friendSay.createDate.substr(0,10).replace(/-/,'.') }}</p>
              </div>
            </li>
          </ListFriendsSay>
          <ListFriendsSay v-else>
            <ListBlank class="blank_friends_say">
              <p class="subtitle">일촌평으로 시작하는 너와 나의 즐거운 추억,</p>
              <p class="msg">따뜻한 말 한마디로 소중한 마음을 전해보세요.</p>
            </ListBlank>
          </ListFriendsSay>
        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>

    <Alert cardClass="giftselect" :open="pic_upload_popup" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>프로필 사진 <ProfileCount>1/999</ProfileCount>

          <!-- <v-menu
              offset-y
              left
              transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="ico_more"
                  fab
                  depressed
              >
                더보기
              </v-btn>
            </template>

            <ListMore class="mh_setting">
              <template v-slot:items>
                <ListMoreDesc primary="메인 프로필 설정" />
                <ListMoreDesc primary="사진 삭제" />
              </template>
            </ListMore>
          </v-menu> -->
          <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large @click="pic_upload_close()" />
        </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          <ProfileUploadModify>
            <img src="/img/temp_profile.png" alt="" class="profile">
          </ProfileUploadModify>

          <SlideGroup domID="profile_list" class="pf" max-width="372" pagesize="4" :total="recommandList ? Math.ceil(recommandList.length/4) : 0">
            <template v-slot:f-slide-group>
              <ProfileUploadList id="profile_list">
                <ProfileUploadItem v-for="recommend in recommandList" :key="recommend.did">
                  <router-link to="" :style="{backgroundImage:'url('+recommend.profileUrl+')'}">
                    <!--<img :src="recommend.profileUrl" alt="" class="profile">-->
                  </router-link>
                </ProfileUploadItem>
              </ProfileUploadList>

            </template>
          </SlideGroup>
        </v-card-text>
      </template>
    </Alert>


    <!-- 일촌평 상세보기 팝업 -->
    <Alert cardClass="modalpopup" :open="friendRequestPopup" @update:dateSettting="popup_close" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>
          <h4 class="title_modal">일촌평</h4>
          <ul class="lst_func">
            <li><IconButton class="ico_close_modal pop-close-btn" value="닫기" large  @click="popup_close" /></li>
          </ul>
        </v-card-title>
      </template>

      <template v-slot:dialog-text>
        <GroupReply class="overflow-y-auto friend">
          <div v-if="friendSayDetail.friendSayDetailList && friendSayDetail.friendSayDetailList.length">
          <ListReply v-for="friendSayDetail in friendSayDetail.friendSayDetailList" :key="friendSayDetail.writerTid">
            <div class="items depth1">
              <div class="contents">
                <p class="subtitle">
                  <span class="nickname">{{friendSayDetail.nickname}}</span>
                  <span class="datetime">{{friendSayDetail.createDate}}</span>
                  <i class="new ir"></i>
                </p>
                <p class="desc">
                  {{friendSayDetail.content}}
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
        </div>
      </GroupReply>
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
              <b>{{monihomepyProfile.nickname}}</b> {{requestMessageFirst}}<br />{{requestMessageSecond}}
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

    <Alert cardClass="title-text web" :open="friendDeletePopup" max-width="300">
      <template v-slot:dialog-title>
        <v-card-title>일촌을 해지하시겠어요?</v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text>
          일촌을 해지하시면, 일촌 목록에서 '{{profileCardData.relationName}} {{monihomepyProfile.nickname}}'님을 더 이상 만날 수 없어요
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

  </Wrap>
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Music from '@/views/pc/aside/Music.vue';
import Friends from '@/views/pc/aside/Friends.vue';
import IconButton from '@/components/IconButton.vue';
//import AvaFeel from '@/components/AvaFeel.vue';
import Alert from '@/components/Alert.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MHMain from '@/styles/pc/MH/MH-main';
import SlideGroup from '@/components/pc/SlideGroup.vue';
import Form from '@/styles/pc/common/Form';
import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';


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
    //AvaFeel,
    Alert,
    SlideGroup,
    ...MHMain,
    ...Form,
    InputText,
    Button

  },
  props: {
    selectedIndex: {
      type: Number,
      default: 1
    },
    userId: {
      type: String,
      default: ''
    }
  },
  created() {
    this.$store.dispatch('cyhome/cylifeFriendSay', {page: 0,did: this.did}).then(() => {
      this.friendSayList = this.$store.getters.friendSayJson;
    })

    this.$store.dispatch('cyhome/minihompyProfile', {did: this.did}).then(() => {
      this.monihomepyProfile = this.$store.getters.monihomepyProfileJson
    })

    this.$store.dispatch('cyhome/contentsCount', {did: this.did}).then(() => {
      this.contentsCount = this.$store.getters.contentsCountJson
    })

    //프로필사진리스트 임의로 넣어둔것. api 완성 시 수정해야함.
    this.$store.dispatch('cyhome/cylifeRecommend').then(() => {
      this.recommandList = this.$store.getters.recommendJson
    })
  },
  data(){
    return{
      btnDisabled: true,
      friendSayList : '',
      monihomepyProfile : '',
      contentsCount : '',
      did: this.userId,
      value : this.selectedIndex,
      feelItems: [
        { id:0, name: '사용안함',bs:'18', active:false},
        { id:1, name: '답답',bs:'20', active:false},
        { id:2, name: '사랑해',bs:'30', active:false},
        { id:3, name: '별로',bs:'24', active:false},
        { id:4, name: '개운',bs:'30', active:true},
        { id:5, name: '기쁨',bs:'26', active:false},
        { id:6, name: '앗싸',bs:'24', active:false},
        { id:7, name: '열받음',bs:'26', active:false},
        { id:8, name: '번뜩',bs:'30', active:false},
        { id:9, name: '짜증',bs:'22', active:false},
        { id:10, name: '행복',bs:'28', active:false},
        { id:11, name: '끝',bs:'30', active:false},
        { id:12, name: '그냥',bs:'20', active:false},
        { id:13, name: '파이팅',bs:'20', active:false},
        { id:14, name: '즐거움',bs:'24', active:false},
        { id:15, name: '설렘',bs:'24', active:false},
        { id:16, name: '외로움',bs:'24', active:false},
        { id:17, name: '바쁨',bs:'20', active:false},
        { id:18, name: '아픔',bs:'22', active:false},
        { id:19, name: '쓸쓸',bs:'22', active:false},
        { id:20, name: '명쾌',bs:'22', active:false},
        { id:21, name: '위험',bs:'20', active:false},
        { id:22, name: '신나',bs:'24', active:false},
        { id:23, name: '황당',bs:'22', active:false},
        { id:24, name: '불안',bs:'24', active:false},
        { id:25, name: '귀찮음',bs:'24', active:false},
        { id:26, name: '그리움',bs:'24', active:false},
        //스크롤 확인 임의 추가
        { id:0, name: '사용안함',bs:'18', active:false},
        { id:1, name: '답답',bs:'20', active:false},
        { id:2, name: '사랑해',bs:'30', active:false},
        { id:3, name: '별로',bs:'24', active:false},
        { id:4, name: '개운',bs:'30', active:true},
        { id:5, name: '기쁨',bs:'26', active:false},
        { id:6, name: '앗싸',bs:'24', active:false},
        { id:7, name: '열받음',bs:'26', active:false},
        { id:8, name: '번뜩',bs:'30', active:false},
        { id:9, name: '짜증',bs:'22', active:false},
        { id:10, name: '행복',bs:'28', active:false},
        { id:11, name: '끝',bs:'30', active:false},
        { id:12, name: '그냥',bs:'20', active:false},
        { id:13, name: '파이팅',bs:'20', active:false},
        { id:14, name: '즐거움',bs:'24', active:false},
        { id:15, name: '설렘',bs:'24', active:false},
        { id:16, name: '외로움',bs:'24', active:false},
        { id:17, name: '바쁨',bs:'20', active:false},
        { id:18, name: '아픔',bs:'22', active:false},
        { id:19, name: '쓸쓸',bs:'22', active:false},
        { id:20, name: '명쾌',bs:'22', active:false},
        { id:21, name: '위험',bs:'20', active:false},
        { id:22, name: '신나',bs:'24', active:false},
        { id:23, name: '황당',bs:'22', active:false},
        { id:24, name: '불안',bs:'24', active:false},
        { id:25, name: '귀찮음',bs:'24', active:false},
        { id:26, name: '그리움',bs:'24', active:false},
      ],
      pic_upload_popup:false,
      recommandList: null,
      friendSayDetailOpen: false,

      friendSayDetail: {
        friendSayDetailList: []
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
      friend: {
        friendList: [],
        hasNext: true,
        pagesize: 0
      },
      errorPopup: false,
      errorMessage: '',
      blockFriendPopup: false,
      isBlock: false
    }
  },

  methods:{

    pic_upload_open(){
      this.pic_upload_popup = true;
    },
    pic_upload_close(){
      this.pic_upload_popup = false;
    },
    movePage(val) {
      this.$router.push(val).catch(()=>{});
    },
    friendSayDetailPopup(){
      this.friendSayDetailOpen = true;
      this.$store.dispatch('cyhome/friendSayDetail', {did: this.did, writerTid: this.writerTid, page: 0}).then(() => {
        this.friendSayDetail.friendSayDetailList = this.$store.getters.friendSayDetailJson;
      })
    },
    popup_close(){
      this.friendSayDetailOpen = false;
      this.friendRequestPopup = false;
    },
    friendRequest(){
      this.friendRequestPopup = false;
        if (this.buttonMessage =='일촌신청') {
          this.$store.dispatch('cyhome/friendRequest', {
            did: this.monihomepyProfile.did,
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
        } else {
          this.$store.dispatch('cyhome/friendRequest', {
            did: this.monihomepyProfile.did,
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
      changeNickName(did) {
        this.$store.dispatch('cyhome/profileCard',{did: did}).then(() => {
          this.profileCardData = this.$store.getters.profileCardJson;
          this.writeForm.relationName = this.profileCardData.relationName;
          this.writeForm.relationNameOfMe = this.profileCardData.relationNameOfMe;
        })

        this.modalTitle = '일촌명 변경';
        this.requestMessageFirst = '님과';
        this.requestMessageSecond = '일촌명을 변경합니다.';
        this.buttonMessage = '일촌명 변경 신청';
        this.friendRequestPopup = true;
      },
      profileCard(did, flag="N") {
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
        if (this.monihomepyProfile.isFriend) {
          this.$store.dispatch('cyhome/cylifeFriendDelete',{ did: this.monihomepyProfile.did }).then(()=> {
            if(this.$store.getters.homeReturnJson.code === "OK") {
              this.friend.pagesize = 0;
              this.$store.dispatch('cyhome/cylifeFriend',{ page: this.friend.pagesize }).then(() => {
                this.friend.friendList = this.$store.getters.friendJson.elements
                this.friend.hasNext = this.$store.getters.friendJson.slice.hasNext
                this.friend.pagesize += 1
              })
            } else {
              this.errorMessage = this.$store.getters.homeReturnJson.message;
              this.errorPopup = true;
            }
            this.friendDeletePopup = false;
          })
        }
      },
      friendDelete(did) {
        this.friendDeletePopup = true;
        this.$store.dispatch('cyhome/profileCard',{did: did}).then(() => {
          this.profileCardData = this.$store.getters.profileCardJson;
        })
      },
      blockFriend(did) {
        this.blockFriendPopup = true;
        this.$store.dispatch('cyhome/profileCard',{did: did}).then(() => {
          this.profileCardData = this.$store.getters.profileCardJson;
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
      },
      buttonBookmark(){
        if(this.monihomepyProfile.isBookmark) {
          this.$store.dispatch('cyhome/buttonBookmarkDelete',{did: this.monihomepyProfile.did}).then(()=> {
            if(this.$store.getters.homeReturnJson.code === "OK") {
              this.monihomepyProfile.isBookmark = false;
              this.bookmark.pagesize = 0;
              this.$store.dispatch('cyhome/cylifeBookmark',{page: this.bookmark.pagesize}).then(() => {
                this.bookmark.bookmarkList = this.$store.getters.bookmarkJson.elements
                this.bookmark.hasNext = this.$store.getters.bookmarkJson.slice.hasNext
                this.bookmark.pagesize += 1
              })
            } else {
              this.errorMessgae = this.$store.getters.homeReturnJson.message;
              this.errorPopup = true;
            }
          })
        } else {
          this.$store.dispatch('cyhome/buttonBookmarkRegister',{did: this.monihomepyProfile.did}).then(()=> {
            if(this.$store.getters.homeReturnJson.code === "OK") {
              this.monihomepyProfile.isBookmark = true;
              this.bookmark.pagesize = 0;
              this.$store.dispatch('cyhome/cylifeBookmark',{page: this.bookmark.pagesize}).then(() => {
                this.bookmark.bookmarkList = this.$store.getters.bookmarkJson.elements
                this.bookmark.hasNext = this.$store.getters.bookmarkJson.slice.hasNext
                this.bookmark.pagesize += 1
              })
            } else {
              this.errorMessgae = this.$store.getters.homeReturnJson.message;
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
        this.friendRequestPopup = true
      }
  },
}
</script>

<style lang="scss" scoped>
</style>

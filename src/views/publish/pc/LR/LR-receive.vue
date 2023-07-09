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
                  <ListFriendsRequest>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>사이좋은사이 (김사이)</span>
                        <span class="you">무궁화꽃이피었습니다. (김꽃님)</span>
                      </p>
                      <p class="btn_area">
                        <Button value="거절" class="btn_refuse" outlined></Button>
                        <Button value="수락" class="btn_accept"></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>친한친구 (김사이)</span>
                        <span class="you">웃긴친구 (이조은)</span>
                      </p>
                      <p class="btn_area">
                        <Button value="수락되었습니다" class="btn_accept" disabled></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>울퉁불퉁멋진몸매에빨간몸매 (김사이)</span>
                        <span class="you">딩가딩가 (김기타리스트)</span>
                      </p>
                      <p class="btn_area">
                        <Button value="거절되었습니다" class="btn_refuse" disabled></Button>
                      </p>
                    </li>
                  </ListFriendsRequest>
                  <InfiniteLoading @infinite="infiniteReceivingHandler">
                    <div slot="no-more"></div>
                    <div slot="no-results"></div>
                  </InfiniteLoading>
                  <!-- 리스트 없을 시(검색 결과) -->
                  <!-- <ListBlank class="blank_search">
                    <p class="subtitle">일촌 신청이 없어요</p>
                    <p class="msg">오늘의 추천 친구를 통해 일촌을 신청해보는 것은 어떨까요?</p>
                  </ListBlank> -->

                  <!-- <FriendsToday class="friends_today" v-if="!receiving.receivingList.length">
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
                  </FriendsToday> -->
                </FriendsRequest>
              </v-tab-item>
              <v-tab-item transition="false">
                <FriendsRequest>
                  <ListFriendsRequest>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>사이좋은사이 (김사이)</span>
                        <span class="you">무궁화꽃이피었습니다. (김꽃님)</span>
                      </p>
                      <p class="btn_area">
                        <Button value="취소" class="btn_refuse" outlined></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>친한친구 (김사이)</span>
                        <span class="you">웃긴친구 (이조은)</span>
                      </p>
                      <p class="btn_area">
                        <Button value="취소" class="btn_refuse" outlined></Button>
                      </p>
                    </li>
                    <li>
                      <p class="thumb"><img src="/img/temp_profile.png" alt=""></p>
                      <p class="link_text">
                        <span>울퉁불퉁멋진몸매에빨간몸매 (김사이)</span>
                        <span class="you">딩가딩가 (김기타리스트)</span>
                      </p>
                      <p class="btn_area">
                        <Button value="취소되었습니다" class="btn_refuse" disabled></Button>
                      </p>
                    </li>
                  </ListFriendsRequest>
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
      <!-- 프로필 카드 팝업 -->
      <Alert cardClass="modalpopup" :open="profileCardOtherPopup" max-width="450">
        <template v-slot:dialog-title>
          <v-card-title>
            <h4></h4>
            <ul class="lst_func">
              <li><IconButton :class="profileCardData.isBookmark ? 'ico_favorite  on' : 'ico_favorite'" value="즐겨찾기" large @click="handleClickBookmark"></IconButton></li>
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
              <Button value="미니홈피" large block></Button>
            </RelationButtons>
          </v-card-text>
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
import Button from '@/components/Button.vue';
// import SlideGroup from '@/components/pc/SlideGroup.vue';

import { formatTime, addComma } from '@/utils/formatter';
import Alert from '@/components/Alert.vue';
import AlertStyle from '@/styles/pc/common/Alert.js';
import IconButton from '@/components/IconButton.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';

import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...AlertStyle,
    Header,
    Profile,
    Brithday,
    News,
    Tab,
    Button,
    // SlideGroup,
    InfiniteLoading,
    Alert,
    IconButton
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
    console.log(this.recommandList);
  },
  data() {
    return {
      receiving: {
        receivingList : [],
        hasNext: true,
        pagesize: 0
      },
      sending: {
        sendingList : [],
        hasNext: true,
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
      profileCardOtherPopup: false
    }
  }, methods: {
    infiniteReceivingHandler($state) {
      if(this.receiving.hasNext) {
        this.$store.dispatch('cyhome/cylifeFriendReceiving',{page: this.receiving.pagesize}).then(() => {

          $state.loaded();

          this.receiving.receivingList = this.receiving.receivingList.concat(this.$store.getters.friendReceivingJson.elements)
          this.receiving.hasNext = this.$store.getters.friendReceivingJson.slice.hasNext
          this.receiving.pagesize += 1

          if(!this.$store.getters.friendReceivingJson.slice.hasNext) {
            $state.complete()
          }
        })
      } else {
        $state.complete()
      }
    },
    infiniteSendingHandler($state) {
      if(this.sending.hasNext) {
        this.$store.dispatch('cyhome/cylifeFriendSending',{page: this.sending.pagesize}).then(() => {

          $state.loaded();

          this.sending.sendingList = this.sending.sendingList.concat(this.$store.getters.friendSendingJson.elements)
          this.sending.hasNext = this.$store.getters.friendSendingJson.slice.hasNext
          this.sending.pagesize += 1

          if(!this.$store.getters.friendSendingJson.slice.hasNext) {
            $state.complete()
          }
        })
      } else {
        $state.complete()
      }
    },
    onAcceptFriendReceiving(receiving) {
      this.$store.dispatch('cyhome/cylifeAcceptFriendReceiving', { did: receiving.did }).then(() => {
        if (this.$store.getters.successJson.code === 'OK') {
          this.$set(receiving, 'isAccept', true);
        }
      });
    },
    onRefuseFriendReceiving(receiving) {
      this.$store.dispatch('cyhome/cylifeRefuseFriendReceiving', { did: receiving.did }).then(() => {
        if (this.$store.getters.successJson.code === 'OK') {
          this.$set(receiving, 'isRefuse', true);
        }
      });
    },
    onCancelFriendSending(sending) {
      this.$store.dispatch('cyhome/cylifeCancelFriendSending', { did: sending.did }).then(() => {
        if (this.$store.getters.successJson.code === 'OK') {
          this.$set(sending, 'isCancel', true);
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
        this.profileCardOtherPopup = true;
      })
    },
    popup_close() {
      this.profileCardOtherPopup = false
    },
    timeFormat(val) {
      return formatTime(val)
    },
    numberFormat(val) {
      return addComma(val)
    },
    handleClickBookmark() {
      if(this.profileCardData.isBookmark) {
        this.$store.dispatch('cyhome/buttonBookmarkDelete',{did: this.profileCardData.did}).then(()=> {
          if(this.$store.getters.successJson.code == "OK"){
            this.profileCardData.isBookmark = false;
          }
        })
      } else {
        this.$store.dispatch('cyhome/buttonBookmarkRegister',{did: this.profileCardData.did}).then(()=> {
          if(this.$store.getters.successJson.code == "OK"){
            this.profileCardData.isBookmark = true;
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
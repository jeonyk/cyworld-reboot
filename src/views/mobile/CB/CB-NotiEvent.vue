<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents class="cb-content">
      <Tab class="styled_tab" :selected="value" grow>
        <template v-slot:v-tab>
          <v-tab tabindex="0">공지사항</v-tab>
          <v-tab tabindex="1">이벤트</v-tab>
        </template>
        <template v-slot:v-tab-item>
          <v-tab-item transition="false">
            <ListNotice component="nav" class="list_notice" aria-label="list notice">
              <template v-slot:items>
                <ListNoticeDesc class="new" primary="싸이월드가 다시 시작합니다." secondary="2021-12-8" link :to="'/CB-NoticeDetail'" />
              </template>
            </ListNotice>
          </v-tab-item>
          <v-tab-item transition="false">
            <EventList>
              <EventListDesc>
                <EventImgWrap v-bind:style="{backgroundColor:'#3d71d4'}">
                  <img src="/img/temp_1_0228_mable03_m 2.png" alt="" />
                  <!-- <EventImgTitleSub>출석 이벤트 시 토도리 드려요!</EventImgTitleSub>
                  <EventImgTitle>매달 출석 하고 <br /> 선물 받자!</EventImgTitle> -->
                </EventImgWrap>
                <EventTitleWrap>
                  <EventTitleLeft>
                    <EventTitle>다시 만나 반가운 싸이월드 오픈 이벤트! (~12/31까지)</EventTitle>
                    <!-- <EventDate>2021.8.1~20218.31</EventDate> -->
                  </EventTitleLeft>
                  <!-- <EventBtn>
                    <Button width="80" small outlined value="참여하기" />
                  </EventBtn> -->
                </EventTitleWrap>
              </EventListDesc>

              <!-- <EventListDesc>
                <EventImgWrap v-bind:style="{backgroundColor: '#3daf86'}">
                  <img src="/img/temp_myAvatar_17000369_2_2.png" alt="" />
                  <EventImgTitleSub>추천 친구 가입시 도토리~</EventImgTitleSub>
                  <EventImgTitle>친구 추천으로 <br /> 가입하자!</EventImgTitle>
                </EventImgWrap>
                <EventTitleWrap>
                  <EventTitleLeft>
                    <EventTitle>추천 친구 이벤트</EventTitle>
                    <EventDate>2021.8.1~</EventDate>
                  </EventTitleLeft>
                  <EventBtn>
                    <Button width="80" small outlined value="참여하기" />
                  </EventBtn>
                </EventTitleWrap>
              </EventListDesc>

              <EventListDesc>
                <EventImgWrap v-bind:style="{backgroundColor: '#35375f'}">
                  <img src="/img/temp_120_5.png" alt="" />
                  <EventImgTitleSub>컴백 싸이월드 </EventImgTitleSub>
                  <EventImgTitle>깨어나라 <br /> 잠자는 용사여!</EventImgTitle>
                </EventImgWrap>
                <EventTitleWrap>
                  <EventTitleLeft>
                    <EventTitle  class="end-event">컴백 이벤트</EventTitle>
                    <EventDate>2021.7.1~2021.7.31</EventDate>
                  </EventTitleLeft>
                  <EventBtn>
                    <Button width="80" small outlined disabled value="참여종료" />
                  </EventBtn>
                </EventTitleWrap>
              </EventListDesc> -->

              <!-- <EventListDesc>
                <EventImgWrap v-bind:style="{backgroundColor: '#ed86a0'}">
                  <img src="/img/temp_myAvatar_17000390_2_1.png" alt="" />
                  <EventImgTitleSub>BGM 싸다 싸!</EventImgTitleSub>
                  <EventImgTitle>BGM 싸다구 <br /> 이게 무슨 129</EventImgTitle>
                </EventImgWrap>
                <EventTitleWrap>
                  <EventTitleLeft>
                    <EventTitle class="end-event">BGM 싸다싸 이벤트</EventTitle>
                    <EventDate>2021.7.1~2021.7.31</EventDate>
                  </EventTitleLeft>
                  <EventBtn>
                    <Button width="80" small outlined disabled value="참여종료" />
                  </EventBtn>
                </EventTitleWrap>
              </EventListDesc> -->
            </EventList>
          </v-tab-item>
        </template>
      </Tab>
    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import List from "@/styles/mobile/common/List"
import Header from '@/views/mobile/includes/Header'
import CB_Event from "@/styles/mobile/CB/CB-Event"
import Tab from '@/components/Tab'
// import Button from "@/components/Button"

export default {
  name: "CB-NoticEvent",
  props:[ 'selectedIndex'],
  components: {
    Header,
    Tab,
    // Button,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    ...CB_Event,
  },
  data() {

    let index = this.selectedIndex

    return{
      value : index
    }
  },
  methods : {
    onCloseClick() {
      this.$router.push('/EM-main')
    },
    onPrevClick() {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
  .cb-content{
    margin-top: -21px;
  }
  .styled_item.v-list-item .v-list-item__content .v-list-item__subtitle{
    font-size: 12px;
    color:rgba(0, 0, 0, 0.4);
  }
  .theme--light.v-btn.v-btn--disabled span{
    color:rgba(0,0,0,0.5) !important;
  }
</style>
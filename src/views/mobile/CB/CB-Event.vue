<template>
  <Wrap>
    <Header close="close"/>
    <Contents>
      <Tab class="styled_tab" grow>
        <template v-slot:v-tab>
          <v-tab>공지사항</v-tab>
          <v-tab>이벤트</v-tab>
        </template>
        <template v-slot:v-tab-item>
          <v-tab-item transition="false">공지사항 내용</v-tab-item>
          <v-tab-item transition="false">
            <EventList>
            <EventListDesc>
              <EventImgWrap v-bind:style="{backgroundColor:'#3d71d4'}">
                <img src="/static/img/temp_1_0228_mable03_m 2.png" alt="" />
                <EventImgTitleSub>출석 이벤트 시 토도리 드려요!</EventImgTitleSub>
                <EventImgTitle>매달 출석 하고 <br /> 선물 받자!</EventImgTitle>
              </EventImgWrap>
              <EventTitleWrap>
                <EventTitleLeft>
                  <EventTitle>8월 출첵 이벤트</EventTitle>
                  <EventDate>2021.8.1~20218.31</EventDate>
                </EventTitleLeft>
                <EventBtn>
                <Button type="button" size="small" color="primary" variant="outlined" onHandleClickButton={HandleClickButton}>참여하기</Button>
                </EventBtn>
              </EventTitleWrap>
            </EventListDesc>

            <EventListDesc>
              <EventImgWrap v-bind:style="{backgroundColor: '#3daf86'}">
                <img src="/static/img/temp_myAvatar_17000369_2_2.png" alt="" />
                <EventImgTitleSub>추천 친구 가입시 도토리~</EventImgTitleSub>
                <EventImgTitle>친구 추천으로 <br /> 가입하자!</EventImgTitle>
              </EventImgWrap>
              <EventTitleWrap>
                <EventTitleLeft>
                  <EventTitle>추천 친구 이벤트</EventTitle>
                  <EventDate>2021.8.1~</EventDate>
                </EventTitleLeft>
                <EventBtn>
                <Button type="button" size="small" color="primary" variant="outlined" onHandleClickButton={HandleClickButton}>참여하기</Button>
                </EventBtn>
              </EventTitleWrap>
            </EventListDesc>

            <EventListDesc>
              <EventImgWrap v-bind:style="{backgroundColor: '#35375f'}">
                <img src="/static/img/temp_120_5.png" alt="" />
                <EventImgTitleSub>컴백 싸이월드 </EventImgTitleSub>
                <EventImgTitle>깨어나라 <br /> 잠자는 용사여!</EventImgTitle>
              </EventImgWrap>
              <EventTitleWrap>
                <EventTitleLeft>
                  <EventTitle>컴백 이벤트</EventTitle>
                  <EventDate>2021.7.1~2021.7.31</EventDate>
                </EventTitleLeft>
                <EventBtn>
                <Button type="button" size="small" color="primary" variant="outlined" onHandleClickButton={HandleClickButton} disabled>참여종료</Button>
                </EventBtn>
              </EventTitleWrap>
            </EventListDesc>

            <EventListDesc>
              <EventImgWrap v-bind:style="{backgroundColor: '#ed86a0'}">
                <img src="/static/img/temp_myAvatar_17000390_2_1.png" alt="" />
                <EventImgTitleSub>BGM 싸다 싸!</EventImgTitleSub>
                <EventImgTitle>BGM 싸다구 <br /> 이게 무슨 129</EventImgTitle>
              </EventImgWrap>
              <EventTitleWrap>
                <EventTitleLeft>
                  <EventTitle>BGM 싸다싸 이벤트</EventTitle>
                  <EventDate>2021.7.1~2021.7.31</EventDate>
                </EventTitleLeft>
                <EventBtn>
                <Button type="button" size="small" color="primary" variant="outlined" onHandleClickButton={HandleClickButton} disabled>참여종료</Button>
                </EventBtn>
              </EventTitleWrap>
            </EventListDesc>

            
          </EventList>
          </v-tab-item>
        </template>
      </Tab>
    </Contents>
    <Footer/>
  </Wrap>
</template>

<script>
import Header from '@/views/mobile/includes/Header'
import Footer from '@/views/mobile/includes/Footer'
import Common from "@/styles/mobile/common/Common";
import Tab from "@/components/Tab";
import CB_Event from "@/styles/mobile/CB/CB-Event";
import Button from "@/components/Button";


export default ({
  name: "CB-Event",
  components: {
    Header,
    Footer,
    ...Common,
    Tab,
    ...CB_Event,
    Button
  },
})
</script>

<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>차단회원</H3>
      <DescDefault>
        회원님의 설정하신 차단 회원을 관리합니다.
      </DescDefault>
      <ListBlock>
        <ListBlockDesc key="1">
          <ListBlockThumb/>
          <ListBlockInfo>
            <p id="1" class="nickname">닉네임닉네임은최대여기까지</p>
            <p class="date">차단일 : 2021.03.03</p>
          </ListBlockInfo>
          <ListBlockBtn>
            <Button small value="해제" outlined @click="clickButton"/>
          </ListBlockBtn>
        </ListBlockDesc>
        <ListBlockDesc key="2">
          <ListBlockThumb/>
          <ListBlockInfo>
            <p id="2" class="nickname">김철수1</p>
            <p class="date">차단일 : 2021.03.03</p>
          </ListBlockInfo>
          <ListBlockBtn>
            <Button small value="해제" outlined @click="clickButton"/>
          </ListBlockBtn>
        </ListBlockDesc>
          <ListBlockDesc key="3">
            <ListBlockThumb/>
            <ListBlockInfo>
              <p id="3" class="nickname">김철수2</p>
              <p class="date">차단일 : 2021.03.03</p>
            </ListBlockInfo>
            <ListBlockBtn>
              <Button small value="해제" outlined @click="clickButton"/>
            </ListBlockBtn>
          </ListBlockDesc>
            <ListBlockDesc key="4">
              <ListBlockThumb/>
              <ListBlockInfo>
                <p id="4" class="nickname">김철수3</p>
                <p class="date">차단일 : 2021.03.03</p>
              </ListBlockInfo>
              <ListBlockBtn>
                <Button small value="해제" outlined @click="clickButton"/>
              </ListBlockBtn>
            </ListBlockDesc>
      </ListBlock>

      <Alert cardClass="title-text2" :open="popup" @update:dateSettting="setDate"  >
        <template v-slot:dialog-title>
          <v-card-title>
            차단 해제
          </v-card-title>
          <v-card-text>
            <b>'김철수'</b>님을 차단 해제
            <br/>
            하시겠어요? 해제 후에는 상대방에게
            <br/>
            나의 미니홈피가 공개됩니다.
          </v-card-text>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns cancel" text  x-large @click="popup = false" >취소</v-btn>
          <v-btn class="two-btns" text  x-large @click="confirmHandler">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title2" :open="confirm" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            '김철수'님의 차단이
            <br/>
            해제 되었습니다.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="confirm = false">확인</v-btn>
        </template>
      </Alert>

    </Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Desc from "../../../styles/mobile/common/Desc";
import Title from "../../../styles/mobile/common/Title";
import List from "../../../styles/mobile/common/List";
import Alert from "../../../components/Alert";
import Header from '@/views/mobile/includes/Header';
import Button from "../../../components/Button";

export default {
  name :"ES-privacyperiod",
  components : {
    Button,
    ...Common,
    ...Desc,
    ...Title,
    ...List,
    Alert,
    Header
  },
  data (){
    return {
      popup : false,
      confirm : false
    }
  },
  methods : {
    clickButton(){
      this.popup = true
      console.log('차단해제 alert 띄어야함')
    },
    setDate(value) {
      this.popup = value
    },
    confirmHandler() {
      this.popup = false
      this.confirm = true
    },
    onPrevClick() {
        this.$router.go(-1);
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
  }
}
</script>
<style>

</style>

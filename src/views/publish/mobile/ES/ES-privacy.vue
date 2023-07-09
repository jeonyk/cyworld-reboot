<template>
  <Wrap>
    <Header prev="prev" close="close" @click="onCloseClick"  @prevClick="onPrevClick"/>
<Contents>
  <H3>개인정보 수정</H3>
  <DescDefault>
    개인정보 수정은 실명인증을 통해 할 수 있습니다.
  </DescDefault>
  <H4>개인 정보</H4>
  <ListInfo class="align_left title_lg">
    <ListInfoDesc>
      <ListInfoSubTitle>이름</ListInfoSubTitle>
      <ListInfoSubDesc>황장운</ListInfoSubDesc>
    </ListInfoDesc>
    <ListInfoDesc>
      <ListInfoSubTitle>성별</ListInfoSubTitle>
      <ListInfoSubDesc>남</ListInfoSubDesc>
    </ListInfoDesc>
    <ListInfoDesc>
      <ListInfoSubTitle>생년월일</ListInfoSubTitle>
      <ListInfoSubDesc>1921.06.12</ListInfoSubDesc>
    </ListInfoDesc>
    <ListInfoDesc>
      <ListInfoSubTitle>휴대폰 번호</ListInfoSubTitle>
      <ListInfoSubDesc>010-2278-8712</ListInfoSubDesc>
    </ListInfoDesc>
  </ListInfo>
  <DescDefault align="center" mt="16" size="xs">최근 실명인증 이력일 2021.09.12</DescDefault>
  <Submit>
    <Button large value="본인확인 후 개인정보 업데이트" block @click="HandleClickButton"/>
  </Submit>

  <Alert cardClass="title-text" :open="popup" @update:dateSettting="setDate">
    <template v-slot:dialog-title>
      <v-card-title>
        개인정보가 업데이트 되었습니다.
      </v-card-title>
      <v-card-text class="fs13">
        2021.10.19
      </v-card-text>
    </template>
    <template v-slot:dialog-btn>
      <v-btn class="two-btns" text x-large @click="popup = false">확인</v-btn>
    </template>
  </Alert>

</Contents>
  </Wrap>
</template>
<script>
import Common from "../../../../styles/mobile/common/Common";
import Title from "../../../../styles/mobile/common/Title";
import Desc from "../../../../styles/mobile/common/Desc";
import List from "../../../../styles/mobile/common/List";
import Button from "../../../../components/Button";
import Alert from "../../../../components/Alert";
import Header from '@/views/mobile/includes/Header';

export default {
  name : "ES-privacy",
  components : {
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    Button,
    Alert,
    Header
  },
  created() {
    /*this.updateStatus = this.$route.params.updateStatus*/
    console.log('updateStatus ::: ',this.updateStatus)
    console.log('phonenumber ::: ',this.dataForm.phonenumber)
    console.log('txId ::: ',this.dataForm.txId)
    if(this.updateStatus === '1'){
      this.$store.dispatch('member/myInfoUpdate',this.dataForm).then(() => {
        if(this.$store.getters.returnJson.data){
          this.popup = true
        }
      })
    }
  },
  data () {
    return{
      popup : false,
      updateStatus : this.$route.params.updateStatus,
      dataForm : {
        phonenumber : this.$route.params.phonenumber,
        txId : this.$route.params.reqTxId,
      }
    }
  },
  methods : {
    setDate(value) {
      this.popup = value
    },
    HandleClickButton(){
      this.$store.dispatch('member/setMemberAuthType','infoUpdate').then(() => {
        this.$router.push({name: 'COM-veriinfo', params: {page : 'infoUpdate'}})
      })

    },
    onPrevClick() {
      if(this.$func.postMessage("confirmClose")){
        this.$router.go(-1);
      }
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
  }
}
</script>
<style>

</style>

<template>
  <Wrap>
    <Header prev="prev" close="close" @click="onCloseClick"  @prevClick="onPrevClick"/>
    <Contents>
      <H3 class="title_channeling">
        <div class="thumb"><img :src=data.partnerIconUrl alt=""></div>
        <TitleSub>
          {{ data.partnerName }}
        </TitleSub>
        <TitleDesc>
          등록된 부가서비스의
          <br />
          정보 및 상태를 관리합니다.
        </TitleDesc>
      </H3>

      <ListInfo mt="32">
        <ListInfoDesc>
          <ListInfoSubTitle>등록 일자</ListInfoSubTitle>
          <ListInfoSubDesc>{{ data.affiliateRegistDateTime.substring(0,10) }}</ListInfoSubDesc>
        </ListInfoDesc>
        <ListInfoDesc>
          <ListInfoSubTitle>NHN한게임 아이디</ListInfoSubTitle>
          <ListInfoSubDesc>{{ data.affiliateUserId }}</ListInfoSubDesc>
        </ListInfoDesc>
      </ListInfo>

      <ListGuide>
        <ListGuideDesc>{{ data.partnerDescription }}</ListGuideDesc>
      </ListGuide>

      <Submit>
        <Button large block value="연결 해제" @click="onBtnClick"/>
      </Submit>

      <Alert cardClass="title-text2" :open="partnerDelete" @update:dateSettting="setDate"  >
        <template v-slot:dialog-title>
          <v-card-title>
            {{ data.partnerName }} 서비스 연결을 해제
            <br/>
            하시겠습니까?
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns cancel" text  x-large @click="partnerDelete = false" >취소</v-btn>
          <v-btn class="two-btns" text  x-large @click="onPartnerDelete">확인</v-btn>
        </template>
      </Alert>
      <Alert cardClass="title-text2" :open="partnerDeleteConfirm" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            서비스 연결해제
          </v-card-title>
          <v-card-text>
            {{data.partnerName}} 서비스가 연결해제 되었습니다.
          </v-card-text>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="onPartnerDeleteConfirm">확인</v-btn>
        </template>
      </Alert>
    </Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Header from "../includes/Header";
import Title from "../../../styles/mobile/common/Title";
import List from "../../../styles/mobile/common/List";
import Button from "../../../components/Button";
import Alert from "../../../components/Alert";

export default {
  components :{
    ...Common,
    Header,
    ...Title,
    ...List,
    Button,
    Alert
  },
  created() {
    this.$store.dispatch('member/partnerList').then((e) => {
      console.log('partnerList',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
      for (var i=0 ; i <this.$store.getters.returnJson.data.length ; i++){
        if(JSON.stringify(this.$store.getters.returnJson.data[i].affiliateId) === this.$route.params.affiliateId) {
          this.data.affiliateId = this.$store.getters.returnJson.data[i].affiliateId
          this.data.affiliateUserId = this.$store.getters.returnJson.data[i].affiliateUserId
          this.data.affiliateRegistDateTime = this.$store.getters.returnJson.data[i].affiliateRegistDateTime
          this.data.partnerName = this.$store.getters.returnJson.data[i].partnerName
          this.data.partnerIconUrl = this.$store.getters.returnJson.data[i].partnerIconUrl
          this.data.partnerDescription = this.$store.getters.returnJson.data[i].partnerDescription
        }
      }
    });
  },
  data(){
    return {
      partnerDeleteConfirm : false,
      partnerDelete : false,
      data : {
        affiliateId :'',
        affiliateUserId : '',
        affiliateRegistDateTime : '',
        partnerName : '',
        partnerIconUrl : '',
        partnerDescription : ''
      }
    }
  },
  methods : {
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onBtnClick() {
      this.partnerDelete = true
    },
    onPartnerDelete(){
      this.$store.dispatch('member/partnerDelete',this.data.affiliateId).then((e) => {
        console.log('partnerList',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        if(this.$store.getters.returnJson.data){
          this.partnerDelete = false
          this.partnerDeleteConfirm = true
        }
      });
    },
    onPartnerDeleteConfirm() {
      if(this.$func.postMessage("confirmClose")) {
        this.$router.go(-1);
      }
    },
    onPrevClick() {
        this.$router.go(-1);
    },
  }
}
</script>
<style>

</style>

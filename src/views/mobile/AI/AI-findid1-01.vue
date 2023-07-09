<template>
  <Wrap>
    <Header />
    <Contents>
      <H3>아이디 찾기 결과</H3>
      <DescDefault>본인확인으로 찾은 아이디를 알려드릴게요.</DescDefault>

      <ListResult mt="32" v-if="isEmpty">
        <ListResultDt>
          <ListResultDtPrimary>{{ this.$store.getters.memberAuthInfo.paramName }} ({{ this.$store.getters.memberAuthInfo.paramPhone | setPhoneNumberFormat }}) 님</ListResultDtPrimary>
          <ListResultDtSecondary>찾은 싸이월드 아이디</ListResultDtSecondary>
        </ListResultDt>
        <ListResultDd v-bind:key="item" v-for="item in findIdList">
          <ListResultItemPrimary>{{ item.email }}</ListResultItemPrimary>
          <ListResultItemSecondary>{{ item.createDateTime | setDateFormat }} 가입</ListResultItemSecondary>
        </ListResultDd>
      </ListResult>

      <ListResult mt="32" v-else>
        <ListResultDt>
          <ListResultDtPrimary>{{ this.$store.getters.memberAuthInfo.paramName }} ({{ this.$store.getters.memberAuthInfo.paramPhone | setPhoneNumberFormat }}) 님</ListResultDtPrimary>
          <ListResultDtSecondary>찾은 싸이월드 아이디</ListResultDtSecondary>
        </ListResultDt>
        <ListResultDd>
          <ListResultItemPrimary>일치하는 회원정보가 없습니다.</ListResultItemPrimary>
        </ListResultDd>
      </ListResult>

      <DescLink align="right">
        <a @click="onBtnResetPassword">비밀번호 재설정</a>
      </DescLink>

      <Submit>
        <Button block large value="싸이월드 로그인" @click="onBtnClick" />
      </Submit>
    </Contents>
    <Footer />
  </Wrap>
</template>

<script>
import Common from "@/styles/mobile/common/Common";
import Title from "@/styles/mobile/common/Title";
import Desc from "@/styles/mobile/common/Desc";
import Header from '@/views/mobile/includes/Header';
import Footer from '@/views/mobile/includes/Footer';
import List from "@/styles/mobile/common/List";
import Button from "@/components/Button";



export default {
  name: "AI-findid1-01",
  components: {
    Button,
    Header,
    Footer,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  data() {
    return {
      reqTxId : this.$route.params.reqTxId,
      findIdList : {},
      isEmpty: false
    }
  },
  created() {
    this.getFindIdList();
  },
  filters : {
    setDateFormat : function(value){
      if(value == '') return '';
      var js_date = new Date(value);
      var year = js_date.getFullYear();
      var month = js_date.getMonth() + 1;
      var day = js_date.getDate();
      if(month < 10){
        month = '0' + month;
      }
      if(day < 10){
        day = '0' + day;
      }
      return year + '.' + month + '.' + day;
    },
    setPhoneNumberFormat : function(phoneNumber){
      if(!phoneNumber) return phoneNumber

      phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
      let tmp = ''
      if( phoneNumber.length < 4){
        return phoneNumber;
      }
      else if(phoneNumber.length < 7)
      {
        tmp += phoneNumber.substr(0, 3);
        tmp += '-';
        tmp += phoneNumber.substr(3);
        return tmp;
      }
      else if(phoneNumber.length == 8)
      {
        tmp += phoneNumber.substr(0, 4);
        tmp += '-';
        tmp += phoneNumber.substr(4);
        return tmp;
      }
      else if(phoneNumber.length < 10)
      {
        if(phoneNumber.substr(0, 2) =='02') { //02-123-5678
          tmp += phoneNumber.substr(0, 2);
          tmp += '-';
          tmp += phoneNumber.substr(2, 3);
          tmp += '-';
          tmp += phoneNumber.substr(5);
          return tmp;
        }
      }
      else if(phoneNumber.length < 11)
      {
        if(phoneNumber.substr(0, 2) =='02') { //02-1234-5678
          tmp += phoneNumber.substr(0, 2);
          tmp += '-';
          tmp += phoneNumber.substr(2, 4);
          tmp += '-';
          tmp += phoneNumber.substr(6);
          return tmp;
        } else { //010-123-4567
          tmp += phoneNumber.substr(0, 3);
          tmp += '-';
          tmp += phoneNumber.substr(3, 3);
          tmp += '-';
          tmp += phoneNumber.substr(6);
          return tmp;
        }
      }
      else { //010-1234-5678
        tmp += phoneNumber.substr(0, 3);
        tmp += '-';
        tmp += phoneNumber.substr(3, 4);
        tmp += '-';
        tmp += phoneNumber.substr(7);
        return tmp;
      }
    }
  },
  methods: {
    onRadioChange(val) {
      this.radioGroup = val
    },
    onPrevClick() {
      this.$router.go(-1);
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onBtnResetPassword() {
      this.$router.push('/AP-findpw')
    },
    onBtnClick() {
      this.$router.push('/AL-login')
    },
    getFindIdList() {
      this.$store.dispatch('member/findIdsCi', this.reqTxId).then(() => {
        const status = this.$store.getters.findedIdsData.code
        const data = this.$store.getters.findedIdsData.data
        if(status === 'OK' && data.length > 0) {  //정상
          this.isEmpty = true;
          this.findIdList = data;
        }
      }).catch(() => {
        console.log('error catch')
      })
    }
  }
}
</script>

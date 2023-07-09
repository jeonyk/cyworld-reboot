<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick"/>
<Contents>
  <H3>보조 이메일 등록</H3>
  <DescDefault>회원님의 이메일 아이디와 함께
        <br/>
        싸이월드 서비스 공지사항, 소식지, 이벤트 안내 등을
        <br/>
        보내드리는 보조 이메일 주소입니다.
  </DescDefault>
  <FormConfirm>
    <InputText
      id="inp_emailId"
      name="emailId"
      type="text"
      label="새 이메일"
      value="cykim@cyworld.com"
      :class="emailForm.class"
      :hint="emailForm.hint"
      :persistentHint="emailForm.persistentHint"
      @blur="validateId"
      @mouseout="validateId"
      @setInput="setId"
    />
  </FormConfirm>
  <DescLink align="right">
    <router-link @click.native="onHandleClickMailOpen" to="ES-subaccount-01" class="">인증메일 발송</router-link>
  </DescLink>
  <Submit>
    <Button large value="보조 이메일 등록" block @click="onHandleClickMailSuccess" />
  </Submit>

  <Alert cardClass="title-text2" :open="popup" @update:dateSettting="setDate">
  <template v-slot:dialog-title>
    <v-card-title>
      인증 메일이 발송되었습니다.
    </v-card-title>
  </template>
  <template v-slot:dialog-btn>
    <v-btn class="two-btns" text  x-large @click="onConfirm">확인</v-btn>
  </template>
  </Alert>

  <Alert cardClass="title-text2" :open="mailSuccess" @update:dateSettting="setDate">
    <template v-slot:dialog-title>
      <v-card-title>
        성공적으로 이메일 등록이 완료되었습니다.
      </v-card-title>
    </template>
    <template v-slot:dialog-btn>
      <v-btn class="two-btns" text  x-large @click="onConfirmMailSuccess">확인</v-btn>
    </template>
  </Alert>

</Contents>
  </Wrap>
</template>

<script>
import Common from "../../../styles/mobile/common/Common";
import Title from "../../../styles/mobile/common/Title";
import Desc from "../../../styles/mobile/common/Desc";
import Form from "../../../styles/mobile/common/Form";
import InputText from "../../../components/InputText";
import Button from '@/components/Button';
import { validEmail, validEmailSpecialStr } from '@/utils/validate';
import Header from '@/views/mobile/includes/Header';
import Alert from "../../../components/Alert";

export default {
  name: "ES-subaccount-01",
  components:{
    Button,
    InputText,
    ...Common,
    H3 : Title.H3,
    DescDefault : Desc.DescDefault,
    FormConfirm : Form.FormConfirm,
    DescLink : Desc.DescLink,
    Header,
    Alert
  },
  data() {
    return {
      popup : false,
      mailSuccess : false,
      disabled : "disabled",
      btnDisabled : true,
      emailForm: {
        class: '',
        hint: '',
        persistentHint: false,
        email: '',
      }
    }
  },
  methods:{
    onHandleClickMailOpen(){
      this.popup=true
    },
    setDate(value) {
      this.popup = value
    },
    setId(value) {
      this.emailForm.email = value;
    },
    onConfirm(){
      this.btnDisabled =false;
      this.popup=false;
    },
    onConfirmMailSuccess(){
      this.$router.push('/')
    },
    validateId() {
      if(this.emailForm.email) {
        if(validEmail(this.emailForm.email)) {//이메일 형식 오류시
          if(validEmailSpecialStr(this.emailForm.email)) {
            this.emailErrorChk(false)
          } else {
            this.emailErrorChk(true)
            this.emailForm.hint = '영문, 숫자, 마침표(.), 하이픈(-), 언더바(_)만 사용할 수 있습니다.';
          }
        } else {
          this.emailErrorChk(true)
          this.emailForm.hint = '이메일 아이디를 확인해주세요.';
        }
      } else {
        this.emailErrorChk(true)
        this.emailForm.hint = '이메일 아이디를 입력해주세요.';
      }
    },
    emailErrorChk(flag) {
      if(flag) {
        this.emailForm.class = 'input_error';
        this.emailForm.persistentHint = true
      } else {

        this.emailForm.class = '';
        this.emailForm.hint = '';
        this.emailForm.persistentHint = false
      }
    },
    onHandleClickMailSuccess(){
      this.mailSuccess = true
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
  }
}
</script>

<style>

</style>

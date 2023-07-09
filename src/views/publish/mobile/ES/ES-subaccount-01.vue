<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
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
      :value="emailForm.email"
      :class="emailForm.class"
      :hint="emailForm.hint"
      :persistentHint="emailForm.persistentHint"
      @keyup="onKeyupEmail"
      @blur="onBlurEmail"
      @setInput="setId"
      @update:dateSettting="setEmailDate"
      ref="email"
    />
  </FormConfirm>
  <DescLink align="right">
    <router-link @click.native="onHandleClickMailOpen" to="ES-subaccount-01" class=disabled>인증메일 발송</router-link>
  </DescLink>
  <Submit>
    <Button large value="보조 이메일 등록" block @click="onHandleClickMailSuccess" :disabled="btnDisabled"/>
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

  <Alert cardClass="title-text2" :open="maillError" @update:dateSettting="setDate">
    <template v-slot:dialog-title>
      <v-card-title>
        이메일 인증을 완료해주세요.
      </v-card-title>
    </template>
    <template v-slot:dialog-btn>
      <v-btn class="two-btns" text  x-large @click="onConfirmMailError">확인</v-btn>
    </template>
  </Alert>

</Contents>
  </Wrap>
</template>

<script>
import Common from "../../../../styles/mobile/common/Common";
import Title from "../../../../styles/mobile/common/Title";
import Desc from "../../../../styles/mobile/common/Desc";
import Form from "../../../../styles/mobile/common/Form";
import InputText from "../../../../components/InputText";
import Button from '@/components/Button';
import { validEmail } from '@/utils/validate';
import Header from '@/views/mobile/includes/Header';
import Alert from "../../../../components/Alert";

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
      maillError : false,
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
      if(!this.emailForm.email){
        alert('보조이메일을 입력해주세요.')
      }else if(this.emailForm.persistentHint) {
        alert('이메일을 확인해주세요.')
      }
      else{
        this.popup=true
        this.$store.dispatch('member/subemail', this.emailForm.email).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
      });
      }

    },
    setDate(value) {
      this.popup = value
    },
    setEmailDate(value) {
      this.emailForm.email = value
    },
    setId(value) {
      this.emailForm.email = value;
    },
    onConfirm(){
      this.btnDisabled =false;
      this.popup=false;
    },
    onConfirmMailSuccess(){
      if(this.$func.postMessage("confirmClose")) {
        this.$router.go(-1);
      }
    },
    onConfirmMailError(){
      this.maillError = false;
    },
    onKeyupEmail() {
      this.emailForm.email = this.$refs.email.value;
      if(this.emailForm.email){
        if(validEmail(this.emailForm.email)){
          this.emailForm.hint = '사용 가능한 아이디입니다.';
          this.emailForm.class = 'input_success';
          this.emailForm.persistentHint = false;
        }else{
          this.emailForm.hint = '이메일 아이디를 확인해주세요';
          this.emailForm.class = 'input_error';
          this.emailForm.persistentHint = true;
        }
      }else{
        this.emailForm.hint = '';
        this.emailForm.class = '';
      }
    },
    onBlurEmail() {
      this.emailForm.email = this.$refs.email.value;
      if(this.emailForm.email){
        if(validEmail(this.emailForm.email)){
          this.emailForm.hint = '사용 가능한 아이디입니다.';
          this.emailForm.class = 'input_success';
          this.emailForm.persistentHint = false;
        }else{
          this.emailForm.hint = '이메일 아이디를 확인해주세요';
          this.emailForm.class = 'input_error';
          this.emailForm.persistentHint = true;
        }
      }else{
        this.emailForm.hint = '';
        this.emailForm.class = '';
      }
    },
    onHandleClickMailSuccess(){
      this.$store.dispatch('member/subemailCheck').then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        if(this.$store.getters.returnJson.data){
          this.mailSuccess = true
        }else{
          this.maillError = true
        }
      });
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
    onPrevClick() {
      if(this.$func.postMessage("confirmClose")){
        this.$router.go(-1);
      }
    }
  }
}
</script>

<style>

</style>

<template>
  <Wrap>
    <Header close="close" @click="onCloseClick" />
    <Contents>
      <H3>비밀번호 재설정</H3>
      <DescDefault>비밀번호는 8~20자의 영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 설정해 주세요.</DescDefault>

      <FormConfirm>
        <FormConfirmDesc>
          <InputText id="password"
                     name="password"
                     v-model="resetForm.password"
                     :class="resetForm.classPw"
                     :hint="resetForm.hintPw"
                     :persistent-hint="resetForm.persistentHintPw"
                     type="password"
                     @blur="validPw($event)"
                     label="새로운 비밀번호 (8~20자)"
                     :maxlength="20"
                     @setInput="setPw"
                     @update:dateSettting="setPasswordDate"/>
        </FormConfirmDesc>
        <FormConfirmDesc>
          <InputText id="passwordConfirm"
                     name="passwordConfirm"
                     v-model="resetForm.passwordConfirm"
                     :class="resetForm.classPwConfirm"
                     :hint="resetForm.hintPwConfirm"
                     :persistent-hint="resetForm.persistentHintPwConfirm"
                     type="password"
                     @blur="validPwConfirm($event)"
                     label="비밀번호 재확인"
                     :maxlength="20"
                     @setInput="setPwCheck"
                     @update:dateSettting="setPasswordConfirmDate"/>
        </FormConfirmDesc>
      </FormConfirm>

      <Submit mt="24">
        <Button block large value="비밀번호 재설정" @click="onBtnClick" :disabled="disabled"/>
      </Submit>

      <Alert cardClass="text2 web" :open="popup" max-width="300">
        <template v-slot:dialog-text>
          <v-card-text>
            {{ resetForm.cardMessage }}
          </v-card-text>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns cancel" text  x-large @click="onBtnCancel">취소</v-btn>
          <v-btn class="two-btns" text x-large @click="onBtnOk">확인</v-btn>
        </template>
      </Alert>

    </Contents>
  </Wrap>
</template>

<script>
import Common from '@/styles/mobile/common/Common';
import Title from '@/styles/mobile/common/Title';
import Desc from '@/styles/mobile/common/Desc';
import List from '@/styles/mobile/common/List';
import Button from '@/components/Button';
import Header from '@/views/mobile/includes/Header'
import Form from '@/styles/mobile/common/Form';
import InputText from '@/components/InputText'
import { validPassword } from '@/utils/validate'
import Alert from '@/components/Alert'
import Crypto from "@/plugins/Crypto";


export default {
  name: "AP-findpw-01",
  components: {
    Button,
    Header,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    ...Form,
    InputText,
    Alert
  },
  data() {
    return {
      resetForm: {
        classPw: '',
        classPwConfirm: '',
        hintPw: '',
        hintPwConfirm: '',
        persistentHintPw: false,
        persistentHintPwConfirm: false,
        password : '',
        passwordConfirm : '',
        cardTitle: '',
        cardMessage: '',
      },
      disabled: true,
      popup: false
    }
  },
  methods: {
    onPrevClick() {
        this.$router.push('/AL-login')
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    setPw(value) {
      this.resetForm.password = value;
    },
    setPwCheck(value) {
      this.resetForm.passwordConfirm = value;
    },
    validPw() {
      this.resetForm.persistentHintPw = true;
      if(validPassword(this.resetForm.password)) {
        console.log(this.resetForm.password);
        this.resetForm.hintPw ='사용할 수 있는 비밀번호 입니다.';
        this.resetForm.classPw = "input_success"
      }else{
        console.log(this.resetForm.password);
        this.resetForm.hintPw ='사용할 수 없는 비밀번호 입니다.';
        this.resetForm.classPw = "input_error"
      }
    },
    validPwConfirm() {
      this.resetForm.persistentHintPwConfirm = true;
      this.resetForm.classPwConfirm = "input_error"
      if(this.resetForm.password != this.resetForm.passwordConfirm) {
        this.resetForm.hintPwConfirm ='비밀번호가 일치하지 않습니다.';
      }else if(this.resetForm.passwordConfirm === '') {
        this.resetForm.hintPwConfirm ='비밀번호 확인을 위해 한번 더 입력해주세요.';
      }else if(this.resetForm.password === this.resetForm.passwordConfirm) {
        this.resetForm.hintPwConfirm ='비밀번호가 일치합니다.';
        this.resetForm.classPwConfirm = "input_success"
        this.disabled = false
      }
    },
    onBtnClick() {
      console.log('비밀번호 재설정 시작')
      var sha256password = Crypto.getSha256(this.resetForm.password,'cyreboot')
      var sendData = this.$route.params.reqTxId+'||'+this.$store.getters.resetPasswordEmail+'||'+ sha256password

      console.log("sendData", sendData);
      this.$store.dispatch('member/findPassword', sendData).then(() => {
        const status = this.$store.getters.returnJson.code
        const data = this.$store.getters.returnJson.data
        if(status === 'OK' && data === true) {  //정상
          this.$router.push('/AP-findpw-02')
        } else {  //그 외
          this.popup = true
          this.resetForm.cardMessage = '비밀번호 재설정이 완료되지 않았습니다.\n재설정을 종료하시겠습니까?'
        }
      }).catch(() => {
        this.popup = true
        this.resetForm.cardMessage = '비밀번호 재설정이 완료되지 않았습니다.\n재설정을 종료하시겠습니까?'
      })
    },
    onBtnOk(){
      this.popup = false
      if(this.$func.postMessage("confirmClose")) {
        this.$router.push('/AL-login')
      }
    },
    onBtnCancel(){
      this.popup = false
    },
    setPasswordDate(value) {
      this.resetForm.password = value
    },
    setPasswordConfirmDate(value) {
      this.resetForm.passwordConfirm = value
    },
  }
}
</script>

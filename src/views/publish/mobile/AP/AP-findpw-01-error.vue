<template>
  <Wrap>
    <Header close="close" @click="onCloseClick"/>
    <Contents>
      <H3>비밀번호 재설정</H3>
      <DescDefault>비밀번호는 8~20자의 영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 설정해 주세요.</DescDefault>

      <FormConfirm>
        <FormConfirmDesc>
          <InputText id="password"
                     name="password"
                     :class="resetForm.classPw"
                     :hint="resetForm.hintPw"
                     :persistent-hint="resetForm.persistentHintPw"
                     type="password"
                     @change="validPw"
                     @setInput="setPw"
                     label="새로운 비밀번호 (8~20자)"
                     :maxlength="20"
                     value="123456"
                     @keyup="validPw" />
        </FormConfirmDesc>
        <FormConfirmDesc>
          <InputText id="passwordConfirm"
                     name="passwordConfirm"
                     mt="16"
                     :class="resetForm.classPwConfirm"
                     :hint="resetForm.hintPwConfirm"
                     :persistent-hint="resetForm.persistentHintPwConfirm"
                     type="password"
                     @change="validPw"
                     @setInput="setPwCheck"
                     label="비밀번호 확인"
                     value="123457"
                     :maxlength="20"
          />
        </FormConfirmDesc>
      </FormConfirm>

      <Submit mt="24">
        <Button block large value="비밀번호 재설정" @click="onBtnClick" :disabled="disabled" />
      </Submit>

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


export default {
  name: "AP-findpw-01-error",
  components: {
    Button,
    Header,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    ...Form,
    InputText
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
        password : ''
      },
      disabled: true
    }
  },
  methods: {
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    setPw(value) {
      this.resetForm.password = value;
      this.validPw();
    },
    setPwCheck(value) {
      this.resetForm.passwordConfirm = value;
      this.validPwConfirm();
    },
    validPw() {
      if(validPassword(this.resetForm.password)) {
        console.log('test1-1');
        console.log(this.resetForm.password);
        this.resetForm.hintPw ='사용할 수 있는 비밀번호 입니다.';
        this.resetForm.persistentHintPw = true;
        this.resetForm.classPw = "input_success"
      }else{
        console.log('test1-2');
        console.log(this.resetForm.password);
        this.resetForm.hintPw ='사용할 수 없는 비밀번호 입니다.';
        this.resetForm.persistentHintPw = true;
        this.resetForm.classPw = "input_error"
      }
    },
    validPwConfirm() {
      if(this.resetForm.password != this.resetForm.passwordConfirm) {
        this.resetForm.hintPwConfirm ='비밀번호가 일치하지 않습니다.';
        this.resetForm.persistentHintPwConfirm = true;
        this.resetForm.classPwConfirm = "input_error"
      }else if(this.resetForm.passwordConfirm === '') {
        this.resetForm.hintPwConfirm ='비밀번호 확인을 위해 한번 더 입력해주세요.';
        this.resetForm.persistentHintPwConfirm = true;
        this.resetForm.classPwConfirm = "input_error"
      }else if(this.resetForm.password === this.resetForm.passwordConfirm) {
        this.resetForm.hintPwConfirm ='비밀번호가 일치합니다.';
        this.resetForm.persistentHintPwConfirm = true;
        this.resetForm.classPwConfirm = "input_success"
        this.disabled = false
      }
    },
    onBtnClick() {
      console.log('실명인증 모듈 호출')
    }

  },
  //success 추가
  mounted() {
    this.$nextTick(function () {
      this.setPw('123456');
      this.setPwCheck('123457');
    })
  },
}
</script>

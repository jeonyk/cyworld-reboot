<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>비밀번호 입력</H3>
      <DescDefault>
        비밀번호는 8~20자의 영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 설정해 주세요.
      </DescDefault>

      <FormConfirm>
        <FormConfirmDesc>
          <TextField id="password"
                     name="password"
                     type="password"
                     :class="personDataForm.class"
                     :hint="personDataForm.hint"
                     :persistentHint="personDataForm.persistentHint"
                     label="비밀번호"
                     maxlength="20"
                     @keyup="onKeyupPassword"
                     @blur="onBlurPassword"
                     value="123456!!!te"
                     ref="password"/>
        </FormConfirmDesc>
        <FormConfirmDesc mt="16">
          <TextField id="passwordConfirm"
                     name="passwordConfirm"
                     type="password"
                     :class="personDataForm.class"
                     :hint="personDataForm.hintConfirm"
                     :persistentHint="personDataForm.persistentHintConfirm"
                     label="비밀번호 재확인"
                     maxlength="20"
                     @keyup="onKeyupPasswordConfirm"
                     @blur="onBlurPasswordConfirm"
                     value="123456!!!te"
                     ref="passwordConfirm"/>
        </FormConfirmDesc>
      </FormConfirm>

      <Submit mt="24">
        <Button large value="다음" block @click="onClickSuccess" :disabled="disabled"/>
      </Submit>
    </Contents>
    <Footer/>
  </Wrap>
</template>

<script>
import Title from '@/styles/mobile/common/Title';
import Common from '@/styles/mobile/common/Common';
import Form from '@/styles/mobile/common/Form';
import Desc from '@/styles/mobile/common/Desc';
import Button from "@/components/Button";
import TextField from "@/components/InputText";
import isStrongPassword from "@/utils/isStrongPassword";
import Header from '@/views/mobile/includes/Header'
// import Footer from '@/views/mobile/includes/Footer'

const passWord_options = {
  minLength: 8,
  maxLength: 20,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
};

export default {
  name: "AJ-profile-02-success",
  components: {
    Header,
    // Footer,
    TextField,
    Button,
    ...Title,
    ...Common,
    ...Form,
    ...Desc,
  },
  data: function () {
    return {
      personDataForm: {
        class: '',
        password: '',
        passwordConfirm: '',
        hint: '',
        hintConfirm: '',
        persistentHint: false,
        persistentHintConfirm: false,
      },
      disabled: true,
    };
  },
  methods: {
    onKeyupPassword() {
      this.personDataForm.password = this.$refs.password.value;
      this.validationFnc();
    },
    onBlurPassword() {
      this.personDataForm.password = this.$refs.password.value;
      this.validationFnc();
    },
    onKeyupPasswordConfirm() {
      this.personDataForm.passwordConfirm = this.$refs.passwordConfirm.value;
      this.validationFnc();
    },
    onBlurPasswordConfirm() {
      this.personDataForm.passwordConfirm = this.$refs.passwordConfirm.value;
      this.validationFnc();
    },
    validationFnc() {
      let passwordFLAG = true;
      let confirmFLAG = true;

      if (this.personDataForm.password !== '') {
        if (this.personDataForm.password.length < 8) {
          this.personDataForm.hint = '비밀번호는 8자~20자 사이로 입력해주세요.';
          this.personDataForm.persistentHint = true;
          passwordFLAG = false;
        } else if (isStrongPassword(this.personDataForm.password, [passWord_options])) {
          this.personDataForm.hint = '사용할 수 있는 비밀번호입니다.';
          this.personDataForm.persistentHint = false;
          passwordFLAG = true;
        } else {
          this.personDataForm.hint = '영문 대/소문자, 숫자, 특수문자 중 2가지 이상을 포함하여 입력해주세요.';
          this.personDataForm.persistentHint = true;
          passwordFLAG = false;
        }
      }

      if (this.personDataForm.passwordConfirm !== '') {
        if (this.personDataForm.password !== this.personDataForm.passwordConfirm) {
          this.personDataForm.hintConfirm = '비밀번호가 일치하지 않습니다.';
          this.personDataForm.persistentHintConfirm = true;
          confirmFLAG = false;
        } else {
          this.personDataForm.hintConfirm = '비밀번호가 일치합니다.';
          this.personDataForm.persistentHintConfirm = true;
          confirmFLAG = true;
        }
      }

      if (passwordFLAG && confirmFLAG) {
        this.personDataForm.class = 'input_success';
        this.disabled = false;
      } else {
        this.personDataForm.class = 'input_error';
        this.disabled = true;
      }
    },
    onClickSuccess() {
      alert('다음');
    }
  },
  //success 추가
  mounted() {
    this.$nextTick(function () {
      this.personDataForm.password="123456!!!te";
      this.personDataForm.passwordConfirm="123456!!!te";
      this.validationFnc();
      this.$refs['password'].$el.querySelector('input').focus();
    })
  },
  onCloseClick() {
      this.$func.postMessage("confirmClose");
  },
  onPrevClick() {
    this.$func.postMessage("confirmBack");
    console.log('뒤로가기');
  },
}
</script>

<style scoped>

</style>

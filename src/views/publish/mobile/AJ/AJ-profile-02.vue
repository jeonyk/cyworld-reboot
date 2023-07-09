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
                     :value="personDataForm.password"
                     label="비밀번호"
                     maxlength="20"
                     @keyup="onKeyupPassword"
                     @blur="onBlurPassword"
                     @update:dateSettting="passdate"
                     ref="password"/>
        </FormConfirmDesc>
        <FormConfirmDesc mt="8">
          <TextField id="passwordConfirm"
                     name="passwordConfirm"
                     type="password"
                     :class="personDataForm.classConfirm"
                     :hint="personDataForm.hintConfirm"
                     :persistentHint="personDataForm.persistentHintConfirm"
                     :value="personDataForm.passwordConfirm"
                     label="비밀번호 재확인"
                     maxlength="20"
                     @keyup="onKeyupPasswordConfirm"
                     @blur="onBlurPasswordConfirm"
                     @update:dateSettting="passConfirmdate"
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
import Header from '@/views/mobile/includes/Header'
// import Footer from '@/views/mobile/includes/Footer'
import { validPassword ,validSpclChrct , samePwd , continuousPwd} from '@/utils/validate'


export default {
  name: "AJ-profile-02",
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
  created() {
    if(this.$store.getters.memberDataForm.pw){
      this.personDataForm.password = this.$store.getters.memberDataForm.pw
      this.personDataForm.passwordConfirm = this.$store.getters.memberDataForm.pw
    }
  },
  data: function () {
    return {
      personDataForm: {
        classConfirm: '',
        class: '',
        password: '',
        passwordConfirm: '',
        hint: '',
        hintConfirm: '',
        persistentHint: false,
        persistentHintConfirm: false,
      },
      memberDataForm : {
        reqTxId : this.$store.getters.memberDataForm.reqTxId,
        phonenumber: this.$store.getters.memberDataForm.phonenumber,
        email: this.$store.getters.memberDataForm.email,
        pw : '',
      },
      disabled: true,
      email: this.$route.params.email,
      reqTxId : this.$route.params.reqTxId,
      phonenumber : this.$route.params.phonenumber,
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
          this.personDataForm.class = 'input_error';
          passwordFLAG = false;
        } else if (!validPassword(this.personDataForm.password)){
          this.personDataForm.hint = '영문 대/소문자, 숫자, 특수문자 중 2가지 이상을 포함하여 입력해주세요.';
          this.personDataForm.persistentHint = true;
          this.personDataForm.class = 'input_error';
          passwordFLAG = false;
        } else if (validSpclChrct(this.personDataForm.password)) {
          this.personDataForm.hint = '사용할 수 없는 문자가 포함되어 있습니다.';
          this.personDataForm.persistentHint = true;
          this.personDataForm.class = 'input_error'
          passwordFLAG = false;
        } else if (this.memberDataForm.email === this.personDataForm.password){
          this.personDataForm.hint = 'ID와 동일한 비밀번호는 사용불가 합니다.';
          this.personDataForm.persistentHint = true;
          this.personDataForm.class = 'input_error'
          passwordFLAG = false;
        } else if (continuousPwd(this.personDataForm.password) || samePwd(this.personDataForm.password)){
          this.personDataForm.hint = '3개 이상 연속되거나 같은 문자는 비밀번호로 사용할 수 없습니다.';
          this.personDataForm.persistentHint = true;
          this.personDataForm.class = 'input_error'
          passwordFLAG = false;
        } else if (this.personDataForm.password.indexOf(this.memberDataForm.phonenumber) != -1){
          this.personDataForm.hint = '휴대폰번호는 비밀번호로 사용할 수 없습니다.';
          this.personDataForm.persistentHint = true;
          this.personDataForm.class = 'input_error'
          passwordFLAG = false;
        }else {
          this.personDataForm.hint = '사용할 수 있는 비밀번호입니다.';
          this.personDataForm.persistentHint = false;
          this.personDataForm.class = 'input_success'
          passwordFLAG = true;
        }
      }else{
        this.personDataForm.hint = '';
        this.personDataForm.class = 'input_success'
        passwordFLAG = false;
      }
      if (this.personDataForm.passwordConfirm !== '') {
        if (this.personDataForm.password !== this.personDataForm.passwordConfirm) {
          this.personDataForm.hintConfirm = '비밀번호가 일치하지 않습니다.';
          this.personDataForm.persistentHintConfirm = true;
          this.personDataForm.classConfirm = 'input_error';
          confirmFLAG = false;
        } else {
          this.personDataForm.hintConfirm = '비밀번호가 일치합니다.';
          this.personDataForm.persistentHintConfirm = false;
          this.personDataForm.classConfirm = 'input_success';
          confirmFLAG = true;
        }
      }else{
        this.personDataForm.hintConfirm = '';
        this.personDataForm.classConfirm = 'input_success';
        confirmFLAG = false;
      }

      if (passwordFLAG && confirmFLAG) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    onClickSuccess() {
      this.memberDataForm.pw = this.personDataForm.passwordConfirm
      this.$store.dispatch('member/setMemberDataForm',this.memberDataForm);
      this.$router.push('AJ-profile-03')
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
      this.$router.go(-1);
    },
    passdate(value) {
      this.personDataForm.password = value
    },
    passConfirmdate(value) {
      this.personDataForm.passwordConfirm = value
    },
  }
}
</script>

<style scoped>

</style>

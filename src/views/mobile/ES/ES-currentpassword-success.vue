<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick"/>
<Contents>
  <H3>비밀번호 재설정</H3>
  <DescDefault>
    회원님의 현재 비밀번호를 입력해주세요.
  </DescDefault>
  <FormConfirm>
    <FormConfirmDesc>
      <InputText
          :class="emailForm.class"
          :hint="emailForm.hint"
          :persistentHint="emailForm.persistentHint"
          :btnDisabled="btnDisabled"
          type="password"
          label="현재 비밀번호"
          id="inp_password"
          name="password"
          @keyup="keyupPw"
          @blur="validatePw"
          ref="password"
          value="123456789a"
      />
    </FormConfirmDesc>
  </FormConfirm>
  <Submit mt="24">
    <Button large value="확인" block @click="HandleClickButton" />
  </Submit>
</Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Title from "../../../styles/mobile/common/Title";
import Desc from "../../../styles/mobile/common/Desc";
import Form from "../../../styles/mobile/common/Form";
import InputText from "../../../components/InputText";
import Button from "../../../components/Button";
import Header from '@/views/mobile/includes/Header';

export default {
  name : "ES-currentpassword",
  components :{
    ...Common,
    H3 : Title.H3,
    ...Desc,
    ...Form,
    InputText,
    Button,
    Header
  },
  data(){
    return{
      btnDisabled:true,
      pws:'123456789a',
      pw:'',
      emailForm: {
        class: '',
        hint: '',
        persistentHint: false
      },
    }
  },
  methods:{
    HandleClickButton(){
      console.log("확인")
    },
    keyupPw(){
      this.pw = this.$refs.password.value;
      this.validatePw();
    },
    validatePw(){
      if(this.pw !== this.pws){
        this.btnDisabled = true
        this.emailForm.class="input_error"
        this.emailForm.persistentHint = true
        this.emailForm.hint = "비밀번호를 확인해주세요."
      }else{
        this.btnDisabled = false
        this.emailForm.class=""
        this.emailForm.persistentHint = false
        this.emailForm.hint = ""
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

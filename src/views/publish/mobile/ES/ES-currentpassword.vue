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
          :class="passwordForm.class"
          :hint="passwordForm.hint"
          :persistentHint="passwordForm.persistentHint"
          :btnDisabled="btnDisabled"
          type="password"
          label="현재 비밀번호"
          id="inp_password"
          name="password"
          @blur="validatePw"
          @setInput="setPassword"
          :value="this.passwordForm.password"
          @update:dateSettting="passdate"
      />
    </FormConfirmDesc>
  </FormConfirm>
  <Submit mt="24">
    <Button large value="확인" block @click="HandleClickButton" :disabled="btnDisabled"/>
  </Submit>
</Contents>
  </Wrap>
</template>
<script>
import Common from "../../../../styles/mobile/common/Common";
import Title from "../../../../styles/mobile/common/Title";
import Desc from "../../../../styles/mobile/common/Desc";
import Form from "../../../../styles/mobile/common/Form";
import InputText from "../../../../components/InputText";
import Button from "../../../../components/Button";
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
  created() {
     // alert(this.$store.getters.token);
  },
  data(){
    return{
      btnDisabled:true,
      passwordForm: {
        password: '',
        class: '',
        hint: '',
        persistentHint: false
      },
    }
  },
  methods:{
    HandleClickButton(){
      console.log("확인")
      this.$store.dispatch('auth/passwordVerify', this.passwordForm.password).then(() => {
        console.log(this.$store.getters.authReturnJson);
        const status = this.$store.getters.authReturnJson.code
        const data = this.$store.getters.authReturnJson.data
        console.log('data', data);
        console.log('data.success', data.success);
        if(status === 'OK' && data.success) {  //정상
          this.$router.push({name : 'AP-findpw-login', params: {txId: data.txId}})
        } else {  //그 외
          this.btnDisabled = true
          this.passwordForm.class="input_error"
          this.passwordForm.persistentHint = true
          this.passwordForm.hint = "비밀번호가 올바르지 않습니다."
        }
      }).catch(() => {
        this.btnDisabled = true
        this.passwordForm.class="input_error"
        this.passwordForm.persistentHint = true
        this.passwordForm.hint = "비밀번호가 올바르지 않습니다."
      })
    },
    setPassword(value){
      this.passwordForm.password = value;
      this.validatePw()
    },
    validatePw(){
      if(this.passwordForm.password === ''){
        this.btnDisabled = true
        this.passwordForm.class="input_error"
        this.passwordForm.persistentHint = true
        this.passwordForm.hint = "비밀번호를 입력해주세요."
      }else{
        this.btnDisabled = false
        this.passwordForm.class=""
        this.passwordForm.persistentHint = false
        this.passwordForm.hint = ""
      }
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
    passdate(value) {
      this.passwordForm.password = value
    },

  }
}
</script>
<style>

</style>

<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>이메일 아이디 입력</H3>
      <DescDefault>
        아이디로 사용할 이메일 주소를 입력해주세요.
      </DescDefault>

      <FormConfirm>
        <FormConfirmDesc>
          <TextField id="email"
                     name="email"
                     type="text"
                     :class="personDataForm.class"
                     :hint="personDataForm.hint"
                     :persistentHint="personDataForm.persistentHint"
                     :value="personDataForm.email"
                     label="이메일 아이디"
                     maxlength="50"
                     @keyup="onKeyupEmail"
                     @blur="onBlurEmail"
                     @update:dateSettting="setDate"
                     ref="email"/>
        </FormConfirmDesc>
      </FormConfirm>

      <Submit mt="24">
        <Button large value="본인확인하기" block @click="onClickSuccess" :disabled="disabled"/>
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
import {validEmail} from "@/utils/validate";
import Header from '@/views/mobile/includes/Header'
// import Footer from '@/views/mobile/includes/Footer'

export default {
  name: "AJ-profile-01",
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
    if(!this.$store.getters.legalData.checked){
      this.$store.dispatch('member/findCi', this.$route.query.reqTxId).then(() => {
            if(JSON.stringify(this.$store.getters.returnJson.data) != 'false'){
              this.$router.push('/COM-veriexist')
            }
      })
    }
    if(this.$store.getters.memberDataForm.email){
      this.personDataForm.email = this.$store.getters.memberDataForm.email
    }
  },
  data: function () {
    return {
      personDataForm: {
        class: '',
        email: '',
        hint: '',
        persistentHint: false,
      },
      memberDataForm : {
        reqTxId : this.$store.getters.memberDataForm.reqTxId,
        phonenumber: this.$store.getters.memberDataForm.phonenumber,
        email: ''
      },
      disabled: true,
      reqTxId : this.$route.params.reqTxId,
    };
  },
  methods: {
    onKeyupEmail() {
      this.personDataForm.email = this.$refs.email.value;
      if (validEmail(this.personDataForm.email)) {
        this.$store.dispatch('member/findId', this.personDataForm.email).then(() => {
          //data가 true 이면 존재, false 이면 없음.
          if(JSON.stringify(this.$store.getters.returnJson.data) == 'true'){
            this.personDataForm.class = 'input_error';
            this.personDataForm.hint = '이미 사용중인 아이디입니다.';
            this.personDataForm.persistentHint = true;
            this.disabled = true;
          }else{
            this.personDataForm.hint = '사용 가능한 아이디입니다.';
            this.personDataForm.class = 'input_success';
            this.personDataForm.persistentHint = false;
            this.disabled = false;
          }
        });
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onBlurEmail() {
      this.personDataForm.email = this.$refs.email.value;
      if (validEmail(this.personDataForm.email)) {
        this.$store.dispatch('member/findId', this.personDataForm.email).then(() => {
          //data가 true 이면 존재, false 이면 없음.
          if(JSON.stringify(this.$store.getters.returnJson.data) == 'true'){
            this.personDataForm.class = 'input_error';
            this.personDataForm.hint = '이미 사용중인 아이디입니다.';
            this.personDataForm.persistentHint = true;
            this.disabled = true;
          }else{
            this.personDataForm.hint = '사용 가능한 아이디입니다.';
            this.personDataForm.class = 'input_success';
            this.personDataForm.persistentHint = false;
            this.disabled = false;
          }
        });
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onClickSuccess(){
      if(this.reqTxId === undefined){
        this.reqTxId = this.$route.query.reqTxId
      }
      this.memberDataForm.email = this.personDataForm.email
      this.$store.dispatch('member/setMemberDataForm',this.memberDataForm);
      this.$router.push('AJ-profile-02')
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
      this.$router.go(-1);
    },
    setDate(value) {
      this.personDataForm.email = value
    },
  }
}
</script>

<style scoped>

</style>

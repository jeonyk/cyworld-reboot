<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick" />
    <Contents>
      <H3>이메일 아이디 입력</H3>
      <DescDefault>
        로그인할 때 사용하는 이메일 아이디를 입력해 주세요.
        <br>
        본인확인 후 비밀번호를 재설정할 수 있습니다.
      </DescDefault>

      <FormConfirm>
        <FormConfirmDesc>
          <InputText id="email"
                      name="email"
                      :class="emailForm.class"
                      :hint="emailForm.hint"
                      :persistentHint="emailForm.persistentHint"
                      type="text"
                      :value="this.emailForm.email"
                      @blur="validateId"
                      @mouseout="validateId"
                      @setInput="setId"
                      @update:dateSettting="setDate"
                      label="이메일 아이디" />
        </FormConfirmDesc>
      </FormConfirm>

      <Submit mt="24">
        <Button block large value="본인확인하기" @click="onBtnClick" :disabled="btnDisabled"/>
      </Submit>
    </Contents>
    <Footer />
  </Wrap>
</template>

<script>

  import Common from '@/styles/mobile/common/Common'
  import Title from '@/styles/mobile/common/Title'
  import Desc from '@/styles/mobile/common/Desc'
  import Form from '@/styles/mobile/common/Form'
  import InputText from '@/components/InputText'
  import Button from '@/components/Button'
  import Header from '@/views/mobile/includes/Header'
  import Footer from '@/views/mobile/includes/Footer'
  import {validEmail, validEmailSpecialStr} from "@/utils/validate";


  export default {
    name: "AP-findpw",
    components: {
      InputText,
      Button,
      Header,
      Footer,
      ...Common,
      ...Title,
      ...Desc,
      ...Form,
    },

    data() {
      return {
        emailForm: {
          class: '',
          hint: '',
          persistentHint: false,
          email: '',
        },
        btnDisabled: true
      }
    },

    methods:{
      onBtnClick(){
        this.$store.dispatch('member/findId', this.emailForm.email).then(() => {
          if (JSON.stringify(this.$store.getters.returnJson.data) == 'true') {
            this.$store.dispatch('member/setResetPasswordEmail', this.emailForm.email).then(() => {
              this.$store.dispatch('member/setMemberAuthType', 'resetPassword');
              this.$router.push({name: 'COM-veriinfo', params: {page: 'resetPassword'}})
            })
          } else {
            this.emailErrorChk(true)
            this.emailForm.hint = '이메일 아이디를 찾을수 없습니다.';
          }
        })
      },
      setId(value) {
        this.emailForm.email = value;
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
          this.btnDisabled = true
        } else {
          this.emailForm.class = '';
          this.emailForm.hint = '';
          this.emailForm.persistentHint = false
          this.btnDisabled = false
        }
      },
      onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
      onPrevClick() {
          this.$router.go(-1);
      },
      setDate(value) {
        this.emailForm.email = value
      },
    }

  }

</script>

<template>
  <WrapLogin>
    <Header close="close" @closeClick="onCloseClick"/>
    <LogoCyworld class="ir" />
    <FormLogin>
      <FormList>
        <FormDesc>
          <InputText id="email"
                      name="email"
                      :class="emailForm.class"
                      :hint="emailForm.hint[0]"
                      :persistentHint="emailForm.persistentHint"
                      type="text"
                      @blur="validateId"
                     @mouseout="validateId"
                      @setInput="setId"
                      :value="this.emailForm.email"
                      label="이메일 아이디" />
        </FormDesc>
        <FormDesc>
          <InputText id="password"
                      name="password"
                      mt="16"
                      :class="emailForm.class"
                      :hint="emailForm.hint[1]"
                      :persistentHint="emailForm.persistentHint"
                      type="password"
                      @setInput="setPw"
                      :value="this.emailForm.password"
                      label="비밀번호" />
        </FormDesc>
        <FormDesc class="submit">
          <Button large value="로그인" block @click="login" :disabled="btnDisabled"/>
        </FormDesc>
      </FormList>

      <Account>
        <AccountList>
          <AccountDesc>
            <router-link to="/">아이디 찾기</router-link>
          </AccountDesc>
          <AccountDesc>
            <router-link to="/">비밀번호 재설정</router-link>
          </AccountDesc>
          <AccountDesc>
            <router-link to="/">회원가입</router-link>
          </AccountDesc>
        </AccountList>
      </Account>
        <Banner>
          <router-link to=""><img src="/img/visual_login_banner_3x.png" alt=""></router-link>
        </Banner>
    </FormLogin>
    <Footer />
  </WrapLogin>
</template>

<script>

  import styledComponents from '@/styles/mobile/AL/AL-login'
  import InputText from '@/components/InputText'
  import Button from '@/components/Button'
  import { validEmail, validEmailSpecialStr } from '@/utils/validate'
  import Header from '@/views/mobile/includes/Header'
  import Footer from '@/views/mobile/includes/Footer'

export default {
  name: "AL-login-error",
  components: {
    ...styledComponents,
    InputText,
    Button,
    Header,
    Footer,
  },

  data() {
    return {
      show: false,
      emailForm: {
        class: 'input_error',
        hint: [
          '이메일 형식이 올바르지 않습니다.',
          '비밀번호가 일치하지 않습니다.',
        ],
        persistentHint: true,
        email: 'cykim4279@cyworld.com',
        password : 'cykim4279',
      },
      btnDisabled: true
    }
  },
  methods:{
    setId(value) {
      this.emailForm.email = value;
    },
    setPw(value) {
      this.emailForm.password = value;
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
    }
  }
}
</script>

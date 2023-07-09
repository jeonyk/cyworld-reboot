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
                      :hint="emailForm.hint"
                      :persistentHint="emailForm.persistentHint"
                      type="text"
                      @blur="validateId"
                      @mouseout="validateId"
                      @setInput="setId"
                     :value="this.emailForm.email"
                     @update:dateSettting="setDate"
                      label="이메일 아이디" />
        </FormDesc>
        <FormDesc>
          <InputText @setInput="setPw"
                      id="password" name="password" type="password" label="비밀번호" :value="this.emailForm.password" @update:dateSettting="setPasswordDate"/>
        </FormDesc>
        <FormDesc class="submit">
          <Button large value="로그인" block @click="login" :disabled="btnDisabled"/>
        </FormDesc>
      </FormList>

      <Account>
        <AccountList>
          <AccountDesc>
            <router-link to="/AI-findid">아이디 찾기</router-link>
          </AccountDesc>
          <AccountDesc>
            <router-link to="/AP-findpw">비밀번호 재설정</router-link>
          </AccountDesc>
          <AccountDesc>
            <router-link to="/AJ-agree">회원가입</router-link>
          </AccountDesc>
        </AccountList>
      </Account>
        <Banner>
          <router-link to=""><img src="/img/visual_login_banner_3x.png" alt=""></router-link>
        </Banner>
    </FormLogin>

    <Alert cardClass="title2" :open="popup" @update:dateSettting="setDate">
      <template v-slot:dialog-title>
        <v-card-title>
          {{ message }}
        </v-card-title>
      </template>
      <template v-slot:dialog-btn>
        <v-btn class="two-btns" text x-large @click="popup = false">확인</v-btn>
      </template>
    </Alert>

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
  import Alert from "@/components/Alert"

export default {
  name: "AL-login",
  components: {
    ...styledComponents,
    InputText,
    Button,
    Header,
    Footer,
    Alert,
  },

  data() {
    return {
      emailForm: {
        class: '',
        hint: '',
        persistentHint: false,
        email: '',
        password : ''
      },
      btnDisabled: true,
      popup: false,
      message: ''
    }
  },
  methods:{
    login: function () {
      if (this.emailForm.email && this.emailForm.password) {
        this.$store.dispatch('auth/login', this.emailForm).then(() => {
          const status = this.$store.getters.status
          if(status === 'active' || status === 'active_trace') {  //정상
            this.$router.push('/pc/LM-main')
          } else if(status === 'wait_regist') { //회원가입 대기
            this.$router.push('/AL-BX')
          } else if(status === 'black_list') {  //블랙리스트
            this.$router.push('/AL-BL')
          } else if(status === 'stop_huge') { //대량제재
            this.$router.push('/AL-B5')
          } else if(status === 'stop_write') { //글쓰기 정지
            this.$router.push('/AL-C1')
          } else if(status === 'stop_tmp') { //임시정지
            this.$router.push('/AL-B4')
          } else if(status === 'sleep') { //휴면
            this.$router.push('/AL-S1-01')
          } else {  //그 외
            this.message = status;
            this.popup = true
          }
        }).catch(() => {
          this.message = this.$store.getters.message;
          this.popup = true
        })
      }
    },
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
    },
    setDate(value) {
      this.emailForm.email = value
    },
    setPasswordDate(value) {
      this.emailForm.password = value
    },
    onCloseClick() {

    }
  }
}
</script>

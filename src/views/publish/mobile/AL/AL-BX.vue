<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick"/>
    <Contents>
      <H3>이메일 인증</H3>
      <DescDefault>
        이메일 주소로 인증 메일을 발송했습니다. 메일 확인 후
        <br />
        인증 완료 버튼을 눌러주세요. 가입 신청 후 7일 안에
        <br />
        인증을 하지 않으면 가입을 다시 진행해야 합니다.
      </DescDefault>
            <InputText mt="32"
               id="email"
              name="email"
              :class="emailForm.class"
              :hint="emailForm.hint"
              :persistentHint="emailForm.persistentHint"
              type="text"
              @blur="validateId"
              @mouseout="validateId"
              @setInput="setId"
              :value="this.emailForm.email"
              label="이메일 아이디"
              />
      <DescLink align="right">
        <router-link @click.native="onClickPopup" to="">인증 메일 다시 보내기</router-link>
      </DescLink>
      
      <Submit>
        <Button large block value="이메일 인증 완료" @click="onClickSuccess" />
      </Submit>

      <Alert cardClass="title" :open="success" >
        <template v-slot:dialog-title>
          <v-card-title>
            싸이월드 가입이 완료되었습니다.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="onConfirm">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title-text2" :open="unverifyEmail" >
        <template v-slot:dialog-title>
          <v-card-title>
            이메일 인증이 완료되지 않았습니다.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="unverifyEmail = false">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title-text2" :open="verifyEmail" >
        <template v-slot:dialog-title>
          <v-card-title>
            인증 메일이 발송되었습니다.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="verifyEmail = false">확인</v-btn>
        </template>
      </Alert>

    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import List from "@/styles/mobile/common/List"
import Alert from "@/components/Alert";
import Header from '@/views/mobile/includes/Header'
import Button from "@/components/Button"
import InputText from '@/components/InputText'

export default {
  name: "AL-BX",
  components: {
    Header,
    Button,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    Alert,
    InputText,
  },

  data() {
    return {
      emailForm: {
        persistentHint: true,
        email: 'cykim1004@cyworld.com',
      },
      btnDisabled: true
    }
  },


  methods: {
    onConfirm(){
      if(this.$store.getters.isMobile){
         this.$func.postMessage("locationLogin");
      }
      else {
        this.$router.push('/AL-login');
      }

    },
    onClickSuccess() {
      this.$store.dispatch('member/emailcheck', this.$store.getters.email).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));

        if(this.$store.getters.returnJson.data === 'success') {
          this.success = true

        }else {
          this.unverifyEmail = true
        }
      });
    },
    onClickPopup() {
      this.verifyEmail = true
      var id= this.$store.getters.email

      this.$store.dispatch('member/verifyEmail', id).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
      });
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
        this.$router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>

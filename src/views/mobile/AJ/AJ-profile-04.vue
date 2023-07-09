<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>이메일 인증</H3>
      <DescDefault>
        이메일 주소로 인증 메일을 발송했습니다. 메일 확인 후<br />
        인증 완료 버튼을 눌러주세요. 7일 안에 인증을 하지<br />
        않으면 가입을 다시 진행해야 합니다.
      </DescDefault>

      <FormConfirm>
        <FormConfirmDesc class="color-dis">
          <TextField id="email"
                     name="email"
                     type="text"
                     :disabled="true"
                     label="fxgear@cyworld.com"
                     :value="personDataForm.email"
                     ref="email"/>
        </FormConfirmDesc>
      </FormConfirm>
      <DescLink align="right">
        <router-link @click.native="onClickPopup" to="">인증 메일 다시 보내기</router-link>
      </DescLink>

      <Submit>
        <Button large value="이메일 인증 완료" block @click="onClickSuccess"/>
      </Submit>

      <Alert cardClass="title-text2" :open="success" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            싸이월드 가입이 완료되었습니다.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="onConfirm">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title-text2" :open="unverifyEmail" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            이메일 인증이 완료되지 않았습니다.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="unverifyEmail = false">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title-text2" :open="verifyEmail" @update:dateSettting="setDate">
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
//import Footer from '@/views/mobile/includes/Footer'
import Alert from "../../../components/Alert";

export default {
  name: "AJ-profile-04",
  components: {
    Header,
   //Footer,
    TextField,
    Button,
    ...Title,
    ...Common,
    ...Form,
    ...Desc,
    Alert
  },
  data: function () {
    return {
      personDataForm: {
        //email: 'test@fxgear.net',
        // 잠시 디자인컨펌 테스트 중..
        email: this.$store.getters.memberDataForm.email,
      },
      success : false,
      unverifyEmail : false,
      verifyEmail: false

    };
  },
  methods: {
    onConfirm(){
      if(this.$func.postMessage("locationLogin")){
         this.$store.dispatch('member/setMemberDataForm', undefined);
         this.$router.push('/AL-login');
      }

    },
    onClickSuccess() {
      this.$store.dispatch('member/emailcheck', this.$store.getters.memberDataForm.email).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));

        if(this.$store.getters.returnJson.data === 'success') {
            if(this.$func.postMessage("locationLogin")){
              this.success = true
            }
        }else {
          this.unverifyEmail = true
        }
      });
    },
    onClickPopup() {
      this.verifyEmail = true
      this.$store.dispatch('member/verifyEmail', this.$store.getters.memberDataForm.email).then((e) => {
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

<style>
  .color-dis .styled_input.v-text-field--filled .v-input__control .v-input__slot .v-text-field__slot label{
    color: rgba(0, 0, 0, 0.38) !important;
  }
</style>

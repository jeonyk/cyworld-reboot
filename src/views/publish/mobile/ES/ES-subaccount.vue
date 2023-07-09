<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
  <Contents>
    <H3>보조 이메일</H3>
    <DescDefault>
      회원님의 이메일 아이디와 함께
      <br />
      싸이월드 서비스 공지사항, 소식지, 이벤트 안내 등을<br />
      보내드리는 보조 이메일 주소입니다.
    </DescDefault>
    <FormConfirm>
      <FormConfirmDesc>
        <InputText id="email"
                    name="email"
                    :value="email"
                    type="text"
                    label="이메일 아이디"
                    disabled/>
      </FormConfirmDesc>
    </FormConfirm>

    <DescLink align="right" >
      <router-link @click.native="open" to="/ES-subaccount">
        이메일 삭제
      </router-link>
    </DescLink>
    <Submit>
      <Button large block value="이메일 변경" @click="onBtnClick"/>
    </Submit>

    <Alert cardClass="title-text2" :open="popup" @update:dateSettting="setDate"  >
      <template v-slot:dialog-title>
        <v-card-title>
          등록된 이메일을
          <br/>
          삭제하시겠어요?
        </v-card-title>
      </template>
      <template v-slot:dialog-btn>
        <v-btn class="two-btns cancel" text  x-large @click="popup = false" >취소</v-btn>
        <v-btn class="two-btns" text  x-large @click="subemailDelete">확인</v-btn>
      </template>
    </Alert>

    <Alert cardClass="title-text2" :open="emailDelete" @update:dateSettting="setDate"  >
      <template v-slot:dialog-title>
        <v-card-title>
          보조이메일이 삭제되었습니다.
        </v-card-title>
      </template>
      <template v-slot:dialog-btn>
        <v-btn class="two-btns" text  x-large @click="subemailDeleteSuccess">확인</v-btn>
      </template>
    </Alert>

    <Alert cardClass="title-text2" :open="deletePopup" @update:dateSettting="setDate">
      <template v-slot:dialog-title>
        <v-card-title>
          삭제실패
        </v-card-title>
      </template>
      <template v-slot:dialog-btn>
        <v-btn class="two-btns" text  x-large @click="deletePopup = false">확인</v-btn>
      </template>
    </Alert>

  </Contents>
  </Wrap>
</template>

<script>
import Common from '@/styles/mobile/common/Common';
import InputText from '@/components/InputText';
import Title from '@/styles/mobile/common/Title';
import Desc from '@/styles/mobile/common/Desc';
import Form from '@/styles/mobile/common/Form';
import Button from '@/components/Button'
import Header from '@/views/mobile/includes/Header';
import Alert from "../../../../components/Alert";

export default {
  name: "ES-subaccount",
  components:{
    Alert,
    Button,
    InputText,
    Contents: Common.Contents,
    H3: Title.H3,
    DescDefault: Desc.DescDefault,
    FormConfirm: Form.FormConfirm,
    FormConfirmDesc: Form.FormConfirmDesc,
    DescLink: Desc.DescLink,
    Wrap:Common.Wrap,
    Submit:Common.Submit,
    Header
  },

  data() {
    return {
      email: '',
      popup: false,
      emailDelete: false,
      deletePopup: false
    }
  },
  created() {
    this.$store.dispatch('member/subemailSelect').then(() => {
      this.email = this.$store.getters.subMail.data
    })
  },
  methods:{
    onBtnClick() {
      this.$router.push('/ES-subaccount-01')
    },
    open(){
      this.popup=true
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    setDate(value) {
      this.popup = value
    },
    subemailDelete() {
      this.$store.dispatch('member/subemailDelete').then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        if(JSON.stringify(this.$store.getters.returnJson.data) == 'true'){
          this.popup = false;
          this.emailDelete = true;
        }else{
          this.deletePopup = true;
        }
      });
    },
    subemailDeleteSuccess() {
      this.$router.push('/')
    },
    onPrevClick() {
      if(this.$func.postMessage("confirmClose")){
        this.$router.go(-1);
      }
    }
  }
}
</script>
<style>
</style>

<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>보호자 동의</H3>
      <DescDefault class="fw4">만 14세 미만은 보호자(법정대리인)의 동의가 필요합니다. 아래 보호자 본인확인하기 버튼을 눌러 동의 절차를 시작해주세요.</DescDefault>

      
      <FormAgreeList class="form-list">
        <FormAgreeListDesc class="listdesc">
          <Checkbox id="cbx1" name="cbx1" class="styled_checkbox" inputValue="a" label="법정대리인 개인정보 수집 및 이용 (필수)"
                    @change="onChangeCheck" ref="primaryCbx"/>
          <router-link class="more" to="/TP-policy-join">내용보기</router-link>
        </FormAgreeListDesc>
      </FormAgreeList>
      <Submit>
        <Button large value="본인확인하기" block @click="onClickSuccess" :disabled="disabled"/>
      </Submit>

      <form name="danalform" method="post" action="https://wauth.teledit.com/Danal/WebAuth/Web/Start.php" >
        <input type="hidden" name="TID" :value="danalform.TID" />
      </form>
    </Contents>
    <Footer/>
  </Wrap>
</template>

<script>
import Title from "@/styles/mobile/common/Title";
import Common from "@/styles/mobile/common/Common";
import Form from "@/styles/mobile/common/Form";
import Desc from "@/styles/mobile/common/Desc";
// import TextField from "@/components/InputText";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import {validEmail} from "@/utils/validate";
import Header from '@/views/mobile/includes/Header'
// import Footer from '@/views/mobile/includes/Footer'

export default {
  name: "AJ-agreechild",
  components: {
    Header,
    // Footer,
    // TextField,
    Checkbox,
    Button,
    ...Title,
    ...Common,
    ...Form,
    ...Desc,
  },
  data: function () {
    return {
      danalform : {
        TID : '',
      },
      personDataForm: {
        name: '',
        email: '',
        checked: '',
        legalConditionId: '',
        class: '',
        hint: '',
        persistentHint: false,
      },
      disabled: true,
      agreementLocation : this.$route.params.agreementLocation,
      agreementMarketing : this.$route.params.agreementMarketing,
      legalPath :'',
    };
  },
  // created() {
  //   this.$store.dispatch('member/termslatest', 'legal').then(() => {
  //     this.legalPath = this.$store.getters.returnJson.data[0].htmlPath
  //   })
  // },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onChangeCheck(prop, event, checked, inputValue) {
      this.personDataForm.checked = checked;
      this.validationFnc();
    },
    onKeyupName() {
      this.personDataForm.name = this.$refs.name.value;
      this.validationFnc();
    },
    onKeyupEmail() {
      this.personDataForm.email = this.$refs.email.value;
      if(this.personDataForm.email){
        if(validEmail(this.personDataForm.email)){
          this.personDataForm.hint = '사용 가능한 아이디입니다.';
          this.personDataForm.class = 'input_success';
          this.personDataForm.persistentHint = false;
        }else{
          this.personDataForm.hint = '이메일 아이디를 확인해주세요';
          this.personDataForm.class = 'input_error';
          this.personDataForm.persistentHint = true;
        }
      }else{
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
      }
      if (validEmail(this.personDataForm.email) && this.personDataForm.checked && this.personDataForm.name) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    onBlurEmail() {
      this.personDataForm.email = this.$refs.email.value;
      if(this.personDataForm.email){
        if(validEmail(this.personDataForm.email)){
        this.personDataForm.hint = '사용 가능한 아이디입니다.';
        this.personDataForm.class = 'input_success';
        this.personDataForm.persistentHint = false;
        }else{
          this.personDataForm.hint = '이메일 아이디를 확인해주세요';
          this.personDataForm.class = 'input_error';
          this.personDataForm.persistentHint = true;
        }
      }else{
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
      }
      if (validEmail(this.personDataForm.email) && this.personDataForm.checked && this.personDataForm.name) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    onClickSuccess() {
      this.$store.dispatch('member/setMemberAuthType','join');
      this.$store.dispatch('member/setLegalData', this.personDataForm);
      this.$store.dispatch('member/setAgreementLocation', this.agreementLocation);
      this.$store.dispatch('member/setAgreementMarketing', this.agreementMarketing);
      this.$store.dispatch('member/termslatest', 'legal').then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        this.personDataForm.legalConditionId = JSON.stringify(this.$store.getters.returnJson.data[0].id)
      })
      this.$store.dispatch('member/danalready','AJ-profile-01').then(() => {
        var reqTxId = this.$store.getters.returnJson.data;
        this.danalform.TID = reqTxId;
        this.$store.dispatch('member/danalconfirm', reqTxId ).then(() => {
          document.danalform.submit();
        });
      });
    },
    validationFnc() {
      if (validEmail(this.personDataForm.email) && this.personDataForm.checked && this.personDataForm.name) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
      this.$router.go(-1);
    },
    setNameDate(value) {
      this.personDataForm.name = value
    },
    setEmailDate(value) {
      this.personDataForm.email = value
    },

  }
}
</script>

<style>
.fw4{
  font-weight: 400;
}
.fs13{
  width:calc(100% - 48px);
}
.fs13.styled_checkbox .v-input--checkbox .v-label{
  font-size: 13px;
  color: rgba(0,0,0,0.7);
}
.v-application a.link-a{
  display: block;
  font-size: 13px;
  color: rgba(0,0,0,0.38);
  text-decoration: underline;
  text-underline-position: under;
  width:48px;
  margin-top:6px;
}
.dp-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 3px;
}
</style>

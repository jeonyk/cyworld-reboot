<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>닉네임 입력</H3>
      <DescDefault>
        싸이월드에서 사용할 닉네임을 입력해주세요.
        <br />
        닉네임은 언제든지 바꿀 수 있습니다.
      </DescDefault>

      <FormConfirm>
        <FormConfirmDesc class="po-rel">
          <TextField id="nickname"
                     name="nickname"
                     type="text"
                     :class="personDataForm.class"
                     :hint="personDataForm.hint"
                     :persistentHint="personDataForm.persistentHint"
                     :value="memberDataForm.nickname"
                     label="닉네임"
                     maxlength="13"
                     @keyup="onKeyupNickname"
                     @blur="onBlurNickname"
                     @update:dateSettting="setDate"
                     ref="nickname"/>

          <span class="limit-txt">
            {{ limitFnc }}
          </span>
        </FormConfirmDesc>


      </FormConfirm>

      <Submit mt="24">
        <Button large value="다음" block @click="onClickSuccess" :disabled="disabled"/>
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
import Header from '@/views/mobile/includes/Header'
//import Footer from '@/views/mobile/includes/Footer'

export default {
  name: "AJ-profile-03",
  components: {
    Header,
    //Footer,
    TextField,
    Button,
    ...Title,
    ...Common,
    ...Form,
    ...Desc,
  },
  data: function () {
    return {
      maxLength: '13',
      personDataForm: {
        class: '',
        nickname: '',
        hint: '',
        persistentHint: false,
      },
      disabled: true,
      limit: '',
      memberForm : {
        reqTxId : this.$store.getters.memberDataForm.reqTxId,
        phonenumber: this.$store.getters.memberDataForm.phonenumber,
        email: this.$store.getters.memberDataForm.email,
        pw : this.$store.getters.memberDataForm.pw,
        nickname : '',
      },
      memberDataForm : {
        reqTxId : this.$store.getters.memberDataForm.reqTxId,
        email: this.$store.getters.memberDataForm.email,
        pw:this.$store.getters.memberDataForm.pw,
        nickname:'',
        phonenumber: this.$store.getters.memberDataForm.phonenumber,
        cyworldConditionId: '',
        agreementCyword : true ,
        privateConditionId : '',
        agreementPrivate : true,
        locationConditionId : '',
        agreementLocation : this.$store.getters.agreementLocation,
        marketingConditionId : '',
        agreementMarketing : this.$store.getters.agreementMarketing,
        legalEmailId : this.$store.getters.legalData.email,
        legalConditionId : this.$store.getters.legalData.legalConditionId,
        agreementLegal : this.$store.getters.legalData.checked
      },
    };
  },
  computed: {
    limitFnc: function () {

      var returnVal = '';

      if(this.memberDataForm.nickname === null) {

        this.setPersonDataReset()
        returnVal =  0 + "/" + this.maxLength

      } else {
        returnVal = this.memberDataForm.nickname.length + "/" + this.maxLength
      }

      return returnVal
    }

  },
  created() {
    if(this.$store.getters.memberDataForm.nickname){
      this.memberDataForm.nickname = this.$store.getters.memberDataForm.nickname
    }
    this.$store.dispatch('member/termslatest', 'CYWORLD').then(() => {
      this.memberDataForm.cyworldConditionId = JSON.stringify(this.$store.getters.returnJson.data[0].id)
    })
    this.$store.dispatch('member/termslatest', 'private').then(() => {
      this.memberDataForm.privateConditionId = JSON.stringify(this.$store.getters.returnJson.data[0].id)
    })
    this.$store.dispatch('member/termslatest', 'location').then(() => {
      this.memberDataForm.locationConditionId = JSON.stringify(this.$store.getters.returnJson.data[0].id)
    })
    this.$store.dispatch('member/termslatest', 'marketing').then(() => {
      this.memberDataForm.marketingConditionId = JSON.stringify(this.$store.getters.returnJson.data[0].id)
    })
  },
  methods: {
    onKeyupNickname() {
      this.memberDataForm.nickname = this.$refs.nickname.value;
      var blank_pattern = /^\s+|\s+$/g;
      if (this.memberDataForm.nickname && this.memberDataForm.nickname.length > 0) {
        if(this.memberDataForm.nickname.replace(blank_pattern, '' ) == ""){
          this.personDataForm.hint = '최소 1자 이상 입력해주세요.';
          this.personDataForm.class = 'input_error';
          this.personDataForm.persistentHint = true;
          this.disabled = true;
        }else{
          this.personDataForm.hint = '사용 가능한 닉네임입니다.';
          this.personDataForm.class = 'input_success';
          //this.personDataForm.persistentHint = false;
          this.disabled = false;
        }
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onBlurNickname() {
      this.memberDataForm.nickname = this.$refs.nickname.value;
      var blank_pattern = /^\s+|\s+$/g;
      if (this.memberDataForm.nickname && this.memberDataForm.nickname.length > 0) {
        if(this.memberDataForm.nickname.replace(blank_pattern, '' ) == ""){
          this.personDataForm.hint = '최소 1자 이상 입력해주세요.';
          this.personDataForm.class = 'input_error';
          this.personDataForm.persistentHint = true;
          this.disabled = true;
        }else{
          this.personDataForm.hint = '사용 가능한 닉네임입니다.';
          this.personDataForm.class = 'input_success';
          //this.personDataForm.persistentHint = false;
          this.disabled = false;
        }
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onClickSuccess() {
      this.$store.dispatch('member/registnew', this.memberDataForm).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        this.memberForm.nickname = this.memberDataForm.nickname
        this.$store.dispatch('member/setMemberDataForm',this.memberForm);
        this.$router.push('AJ-profile-04')
      })
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
    onPrevClick() {
      this.$router.go(-1);
    },
    setDate(value) {
      this.memberDataForm.nickname = value
    },
    setPersonDataReset() {
      this.personDataForm.hint = '';
      this.personDataForm.class = '';
      this.personDataForm.persistentHint = true;
      this.disabled = true;
    }
  },
  //hint 기본값
  mounted() {
    this.personDataForm.persistentHint = true;
    this.personDataForm.hint = '최대 13자 까지 입력할 수 있습니다.';
  },
  onCloseClick() {
      this.$func.postMessage("confirmClose");
  },
}
</script>

<style>
  .po-rel{
    position: relative;
  }
  .limit-info{
    width: calc(100% - 38px);
  }
  .limit-txt{
    font-size: 12px;
    font-weight: 300;
    color: rgba(0,0,0,0.7);
    width:34px;
    position: absolute;
    text-align: right;
    right: 4px;
    top: 63px;
  }
</style>

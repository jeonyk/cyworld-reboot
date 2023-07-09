<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>
        본인확인
      </H3>

      <DescDefault>본인확인을 위해 성명과 휴대폰번호를 입력해주세요.</DescDefault>

      <FormUser>
        <FormUserLabel htmlfor="inp_username" class="sr_only">성명</FormUserLabel>
        <InputText id="inp_username"
                    name="username"
                    mt="8"
                    type="text"
                    :maxlength="20"
                   @setInput="setId"
                   :value="this.name"
                   @update:dateSettting="setNameDate"
                    label="성명" />
      </FormUser>

      <FormUser mt="0">
        <FormUserLabel htmlfor="inp_phonenumber" class="sr_only">휴대폰 번호</FormUserLabel>
          <InputText id="inp_phonenumber"
                      name="phonenumber"
                      type="text"
                     mt="8"
                      :maxlength="11"
                      label="휴대폰 번호"
                      :value="this.phonenumber"
                      @keyup="onKeyupPhonenumber"
                      @blur="onBlurPhonenumber"
                     @update:dateSettting="setPhonenumberDate"
                      ref="phonenumber"
          />
      </FormUser>

      <FormAgreeList class="form-list form-auth">
        <FormAgreeListDesc class="allcbx_area">
          <Checkbox id="cbx_all" name="cbx_all" class="styled_checkbox fs16" ariaControls="cbx1 cbx2 cbx3 cbx4 cbx5"
                  inputValue="all" @change="onChangeCheck" ref="cbx_all"
                  label="모두 동의합니다."/>
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx1" name="cbx1" class="styled_checkbox" inputValue="a"
                    @change="onChangeCheck" ref="primaryCbx"
                    htmlLabel="<a href='/'>개인정보 수집과 이용</a>에 동의합니다." />
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx2" name="cbx2" class="styled_checkbox" inputValue="b"
                    @change="onChangeCheck" ref="primaryCbx"
                    htmlLabel="<a href='/'>고유식별정보의 처리</a>에 동의합니다." />
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx3" name="cbx3" class="styled_checkbox" inputValue="c"
                    @change="onChangeCheck" ref="primaryCbx"
                    htmlLabel="<a href=/'>본인확인 서비스 이용약관</a>에 동의합니다." />
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx4" name="cbx4" class="styled_checkbox" inputValue="d"
                    @change="onChangeCheck" ref="primaryCbx"
                    htmlLabel="<a href='/'>통신사 본인확인 이용약관</a>에 동의합니다." />
        </FormAgreeListDesc>
      </FormAgreeList>

      <Submit>
        <Button block large value="본인 확인하기" @click="onBtnClick" />
      </Submit>

      <form name="danalform" method="post" action="https://wauth.teledit.com/Danal/WebAuth/Web/Start.php" >
        <input type="hidden" name="TID" :value="danalform.TID" />
      </form>

      <Alert cardClass="title-text2" :open="checkedPopup" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            필수체크 해주세요.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="checkedPopup = false">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title-text2" :open="namePopup" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            성명을 입력해주세요.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="namePopup = false">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title-text2" :open="phonenumberPopup" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            휴대폰 번호를 입력해주세요.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="phonenumberPopup = false">확인</v-btn>
        </template>
      </Alert>

      <Alert cardClass="title-text2" :open="countryCodePopup" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            통신사를 선택해주세요.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="countryCodePopup = false">확인</v-btn>
        </template>
      </Alert>

    </Contents>
    <Footer />
  </Wrap>
</template>

<script>
import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import Header from '@/views/mobile/includes/Header'
import Footer from '@/views/mobile/includes/Footer'
import List from "@/styles/mobile/common/List"
import Button from "@/components/Button"
// import Select from "@/components/mobile/Select"
import InputText from '@/components/InputText'
import Checkbox from '@/components/Checkbox'
import Form from '@/styles/mobile/common/Form'
import Alert from "../../../../components/Alert"


export default {
  name: "COM-veriinfo",
  components: {
    InputText,
    Button,
    Header,
    Footer,
    // Select,
    Checkbox,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    ...Form,
    Alert
  },
  data() {
    return {
      btnDisabled: true,
      phonenumber: '',
      name: '',
      countryCode: '',
      data : '',
      checkedPopup : false,
      namePopup : false,
      phonenumberPopup : false,
      countryCodePopup : false,
      danalform : {
        TID : '',
      },
      agreementLocation : this.$route.params.agreementLocation,
      agreementMarketing : this.$route.params.agreementMarketing,
      page :this.$route.params.page,
    }
  },
  methods: {
    setId(value) {
      this.name = value;
    },
    onKeyupPhonenumber(){
      this.phonenumber= this.$refs.phonenumber.value;
      this.phonenumber = this.phonenumber.replace(/[^0-9]/g, '');
    },
    onBlurPhonenumber(){
      this.phonenumber= this.$refs.phonenumber.value;
      this.phonenumber = this.phonenumber.replace(/[^0-9]/g, '');
    },
    setCountryCode(event) {
      this.countryCode = event.target.value;
    },
    onChangeCheck(prop, event, checked, inputValue) {
      var i;
      var checkboxes = prop.ariaControls;
      var workList = (checkboxes || '').split(' ');
      if (inputValue === 'all') {
        if (checked === true) {
          for (i = 0; i < workList.length; i++) {
            if (!document.querySelector("#" + workList[i]).checked) {
              document.getElementById(workList[i]).click();
            }
          }
        } else {
          for (i = 0; i < workList.length; i++) {
            if (document.querySelector("#" + workList[i]).checked) {
              document.getElementById(workList[i]).click();
            }
          }
        }
      }
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
      this.$router.go(-1);
    },
    onBtnClick(){
      var i;
      let primaryChecked = [];
      primaryChecked.push("cbx1");
      primaryChecked.push("cbx2");
      primaryChecked.push("cbx3");
      primaryChecked.push("cbx4");
      for (i = 0; i < primaryChecked.length; i++) {
        if (!document.querySelector("#" + primaryChecked[i]).checked) {
          this.checkedPopup = true
          return false;
        }
      }
      if(this.name === ''){
        this.namePopup = true
        return false;
      }
      if(this.phonenumber === ''){
        this.phonenumberPopup = true
        return false;
      }
      // if(this.countryCode === ''){
      //   this.countryCodePopup = true
      //   return false;
      // }
      var id = this.name + '||' + this.phonenumber;
      var authInfo = { paramName : this.name, paramPhone : this.phonenumber }
      this.$store.dispatch('member/setMemberAuthInfo', authInfo);
      this.$store.dispatch('member/setAgreementLocation', this.agreementLocation);
      this.$store.dispatch('member/setAgreementMarketing', this.agreementMarketing);
      this.$store.dispatch('member/certification', id).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        this.data = JSON.stringify(this.$store.getters.returnJson.data)
       if(this.data === 'true'){
          this.$router.push({name: 'COM-veriproceeding', params: {name: this.name, phonenumber: this.phonenumber,page: this.page}})
        }else{
         // if(this.page == 'join'){
         //   this.$store.dispatch('member/danalready','AJ-profile-01').then(() => {
         //     var reqTxId = this.$store.getters.returnJson.data;
         //     this.danalform.TID = reqTxId;
         //     this.$store.dispatch('member/danalconfirm', reqTxId ).then(() => {
         //       document.danalform.submit();
         //     });
         //   });
         // }
         //   else{
           this.$store.dispatch('member/danalready', 'COM-verisuccess1').then(() => {
             var reqTxId = this.$store.getters.returnJson.data;
             this.danalform.TID = reqTxId;
           }).catch(() => {
             if(this.danalform.TID != ''){
               // this.$router.push('/COM-veriinfo');
             }
           }).finally(() => {
             if(this.danalform.TID != ''){
               this.submitDanal();
             }
           })
         // }
        }
      });
    },
    submitDanal(){
      document.danalform.submit();
    },
    setNameDate(value) {
      this.name = value
    },
    setPhonenumberDate(value) {
      this.phonenumber = value
    },
  }
}
</script>

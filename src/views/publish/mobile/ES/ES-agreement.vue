<template>
  <Wrap>
    <Header prev="prev" close="close" @click="onCloseClick"  @prevClick="onPrevClick"/>
    <Contents :key="componentKey">
      <H3>약관 및 정책 동의</H3>
      <DescDefault>
        싸이월드의 이용약관과 마케팅 정보 수신에
        <br/>
        동의해주세요.
      </DescDefault>

      <FormAgreement>
        <FormAgreementTitle>동의/철회</FormAgreementTitle>
        <FormAgreementList>
          <FormAgreementListDesc>
            <p class="title">싸이월드 이용약관 동의 일시 (필수)</p>
            <p class="datetime">2021.03.03 12:27 동의</p>
          </FormAgreementListDesc>
          <FormAgreementListDesc>
            <p class="title">개인정보 처리방침 동의 일시 (필수)</p>
            <p class="datetime">2021.03.03 12:27 동의</p>
          </FormAgreementListDesc>
          <FormAgreementListDesc>
            <p class="title">위치정보 서비스 이용약관</p>
            <p class="datetime">2021.03.03 12:27 동의</p>
            <Switchbtn class="styled_switch" id="LOCATION" flat="" v-bind:checkedFlag="locationChecked"
                       inputValue="location"
                       inset="" @click="changeSwitch"/>
          </FormAgreementListDesc>
        </FormAgreementList>
      </FormAgreement>
      <FormAgreement>
        <FormAgreementTitle>마케팅 수신</FormAgreementTitle>
        <FormAgreementList>
          <FormAgreementListDesc>
            <p class="title">마케팅 정보 수신 동의</p>
            <p class="datetime">2021.03.03 12:27 동의</p>
            <Switchbtn class="styled_switch" id="MARKETING" v-bind:checkedFlag="marketingChecked" inputValue="marketing"
                       flat
                       inset @click="changeSwitch"/>
          </FormAgreementListDesc>
        </FormAgreementList>
        <FormAgreementList size="small">
          <FormAgreementListDesc>
            <p class="title">이메일</p>
            <Switchbtn class="styled_switch" id="email" flat="" v-bind:checkedFlag="emailChecked" inputValue="email"
                       inset=""
                       @click="changeSwitch"/>
          </FormAgreementListDesc>
          <FormAgreementListDesc>
            <p class="title">SMS/비즈톡</p>
            <Switchbtn class="styled_switch" id="sms_talk" flat="" v-bind:checkedFlag="smsTalkChecked"
                       inputValue="sms_talk"
                       inset="" @click="changeSwitch"/>
          </FormAgreementListDesc>
          <FormAgreementListDesc>
            <p class="title">PUSH</p>
            <Switchbtn class="styled_switch" id="push" flat="" v-bind:checkedFlag="pushChecked" inputValue="push"
                       inset=""
                       @click="changeSwitch"/>
          </FormAgreementListDesc>
        </FormAgreementList>
      </FormAgreement>

    </Contents>
  </Wrap>

</template>
<script>
import Common from "../../../../styles/mobile/common/Common";
import Title from "../../../../styles/mobile/common/Title";
import Desc from "../../../../styles/mobile/common/Desc";
import Form from "../../../../styles/mobile/common/Form";
import Header from "../includes/Header";
import Switchbtn from "../../../../components/Switch";

export default {
  components: {
    ...Common,
    ...Title,
    ...Desc,
    ...Form,
    Header,
    Switchbtn
  },
  data() {
    return {
      locationChecked: "false",
      marketingChecked: "false",
      emailChecked: "false",
      smsTalkChecked: "false",
      pushChecked: "false",
      componentKey: 0,
    }
  },
  mounted() {
    this.$store.dispatch('member/infoTerms').then((e) => {
      console.log('infoTerms', e, this.$store.getters.returnJson, JSON.stringify(this.$store.getters.returnJson));
      for (var i = 0; i < this.$store.getters.returnJson.data.termsAgreementList.length; i++) {
        if (this.$store.getters.returnJson.data.termsAgreementList[i].agree) {
          if (document.getElementById(this.$store.getters.returnJson.data.termsAgreementList[i].termsType)) {
            if (this.$store.getters.returnJson.data.termsAgreementList[i].termsType === 'LOCATION') {
              this.locationChecked = "true";
            } else if (this.$store.getters.returnJson.data.termsAgreementList[i].termsType === 'MARKETING') {
              this.marketingChecked = "true";
            }
          }
        }
      }
      this.forceRerender();
    });

    this.$store.dispatch('member/infoMarketingChannel').then((e) => {
      console.log('infoMarketingChannel', e, this.$store.getters.returnJson, JSON.stringify(this.$store.getters.returnJson));
      for (var i = 0; i < this.$store.getters.returnJson.data.channelAgreementList.length; i++) {
        if (this.$store.getters.returnJson.data.channelAgreementList[i].agree) {
          if (document.getElementById(this.$store.getters.returnJson.data.channelAgreementList[i].channel)) {
            if (this.$store.getters.returnJson.data.channelAgreementList[i].channel === 'email') {
              this.emailChecked = "true";
            } else if (this.$store.getters.returnJson.data.channelAgreementList[i].channel === 'sms_talk') {
              this.smsTalkChecked = "true";
            } else if (this.$store.getters.returnJson.data.channelAgreementList[i].channel === 'push') {
              this.pushChecked = "true";
            }
          }
        }
      }
      this.forceRerender();
    });
  },
  methods: {
    changeSwitch(prop, event, checked, inputValue) {
      var params = {
        'checked': checked,
        'inputValue': inputValue
      }
      if (inputValue === 'location' || inputValue === 'marketing') {
        this.$store.dispatch('member/settingTerms', params).then((e) => {
          console.log(',eff', e, this.$store.getters.returnJson, JSON.stringify(this.$store.getters.returnJson));
        });
      } else if (inputValue === 'email' || inputValue === 'sms_talk' || inputValue === 'push') {
        this.$store.dispatch('member/marketingChannel', params).then((e) => {
          console.log(',eff', e, this.$store.getters.returnJson, JSON.stringify(this.$store.getters.returnJson));
        });
      }


    },
    forceRerender() {
      this.componentKey += 1;
    },
    onPrevClick() {
      if(this.$func.postMessage("confirmClose")){
        this.$router.go(-1);
      }
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
  },
}


</script>
<style>

</style>

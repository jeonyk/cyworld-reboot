<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>서비스 약관</H3>
       <DescDefault>싸이월드 서비스 약관에 동의해주세요.</DescDefault>

      <FormAgreeAll id="all_checkbox">
        <Checkbox id="cbx_all" name="cbx_all" class="styled_checkbox fs16" ariaControls="cbx1 cbx2 cbx3 cbx4 cbx5"
                  inputValue="all"
                  label="모두 동의합니다." @change="onChangeCheck" ref="cbx_all"/>
        <DescDefault class="fw4" size="xs">모두 동의할 경우 필수 정보인 싸이월드 이용약관, 개인정보 처리방침과 선택 정보인 프로모션 정보 수신에도 동의하게 됩니다. 선택 정보에 대한 동의를 거부하는 경우에도 서비스
          이용은
          가능합니다.
        </DescDefault>
      </FormAgreeAll>

      <FormAgreeList class="form-list">
        <FormAgreeListDesc>
          <Checkbox id="cbx1" name="cbx1" class="styled_checkbox" inputValue="a" label="싸이월드 이용약관 (필수)"
                    @change="onChangeCheck" ref="primaryCbx"/>
          <router-link to="/TP-policy">내용보기</router-link>
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx2" name="cbx2" class="styled_checkbox" inputValue="b" label="개인정보 처리방침 (필수)"
                    @change="onChangeCheck" ref="primaryCbx"/>
<!--                    <a :href= cyworldPath>내용보기</a>-->
          <router-link to="/TP-policy">내용보기</router-link>
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx3" name="cbx3" class="styled_checkbox" inputValue="c" label="위치정보 서비스 이용약관 (선택)"
                    @change="onChangeCheck" ref="primaryCbx"/>
<!--                    <a :href= privatePath>내용보기</a>-->
          <router-link to="/TP-private">내용보기</router-link>
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx4" name="cbx4" class="styled_checkbox" inputValue="d" label="마케팅 정보 수신 (선택)"
                    @change="onChangeCheck" ref="cbx4"/>
<!--                    <a :href= locationPath>내용보기</a>-->
          <router-link to="/TP-location">내용보기</router-link>
        </FormAgreeListDesc>
      </FormAgreeList>

      <Submit>
        <Button large width="100%" @click="btnClick" value="본인확인하기" />
      </Submit>

      <Alert cardClass="title-text2" :open="popup" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            만 14세 미만의 가입자는 법정대리인 동의 후 가입하실 수 있습니다.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="onConfirm">확인</v-btn>
        </template>
      </Alert>

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

    </Contents>
    <Footer/>
  </Wrap>
</template>
<script>
import Title from '@/styles/mobile/common/Title';
import Common from '@/styles/mobile/common/Common';
import Form from '@/styles/mobile/common/Form';
import Desc from '@/styles/mobile/common/Desc';
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Header from '@/views/mobile/includes/Header'
// import Footer from '@/views/mobile/includes/Footer'
import Alert from "@/components/Alert";

export default {
  name: "AJ-agree",
  components: {
    Header,
    // Footer,
    Checkbox,
    Button,
    ...Title,
    ...Common,
    ...Form,
    ...Desc,
    Alert
  },
  data() {
    return {
      agreementLocation : false,
      agreementMarketing : false,
      popup : false,
      cyworldPath : '',
      privatePath : '',
      locationPath : '',
      marketingPath : '',
      checkedPopup : false
    }
  },
  // created() {
  //   this.$store.dispatch('member/termslatest', 'CYWORLD').then(() => {
  //     this.cyworldPath = this.$store.getters.returnJson.data[0].htmlPath
  //   })
  //   this.$store.dispatch('member/termslatest', 'private').then(() => {
  //     this.privatePath = this.$store.getters.returnJson.data[0].htmlPath
  //   })
  //   this.$store.dispatch('member/termslatest', 'location').then(() => {
  //     this.locationPath = this.$store.getters.returnJson.data[0].htmlPath
  //   })
  //   this.$store.dispatch('member/termslatest', 'marketing').then(() => {
  //     this.marketingPath = this.$store.getters.returnJson.data[0].htmlPath
  //   })
  //
  // },
  methods: {
    setDate(value) {
      this.popup = value
    },
    onConfirm() {
      this.$router.push({
        name: 'AJ-agreechild',
        params: {page: 'join', agreementLocation: this.agreementLocation, agreementMarketing: this.agreementMarketing}
      })
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
    btnClick: function () {
      var i;
      let primaryChecked = [];
      primaryChecked.push("cbx2");
      primaryChecked.push("cbx3");
      if (document.getElementById('cbx4').checked) {
        this.agreementLocation = true
      } else {
        this.agreementLocation = false
      }
      if (document.getElementById('cbx5').checked) {
        this.agreementMarketing = true
      } else {
        this.agreementMarketing = false
      }

      for (i = 0; i < primaryChecked.length; i++) {
        if (!document.querySelector("#" + primaryChecked[i]).checked) {
          this.checkedPopup = true
          return false;
        }
      }
      let primaryChecked2 = [];
      primaryChecked2.push("cbx1");
      if (!document.querySelector("#" + primaryChecked2[0]).checked) {
        this.popup = true
        return false;
      }else{
        this.$store.dispatch('member/setLegalData', undefined);
      }
      this.$store.dispatch('member/setMemberAuthType','join').then(() => {
        this.$router.push({
          name: 'COM-veriinfo',
          params: {page: 'join', agreementLocation: this.agreementLocation, agreementMarketing: this.agreementMarketing}
        })
      })
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
.fs16.styled_checkbox .v-input--checkbox .v-label{
  font-size: 16px;
}
.v-application ul.form-list{
  padding: 21px 12px 15px 9px
}
.v-application a{
  color:rgba(0,0,0,0.38);
}
.fw4{
  font-weight: 400;
}
</style>

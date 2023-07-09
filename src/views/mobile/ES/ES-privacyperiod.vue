<template>
  <Wrap>
    <Header close="close" @click="onCloseClick"  @prevClick="onPrevClick"/>
<Contents>
  <H3>개인정보 유효기간 설정</H3>
  <DescDefault>
    개인정보 유효기간이란?
    <br/>
    싸이월드가 회원님의 개인정보를 보유할 수 있는
    <br/>
    기간을 의미합니다. 유효기간 내 로그인 기록이 없을 경우 개인정보는 파기됩니다.
  </DescDefault>
  <H4>개인정보 유효기간을 선택해주세요.</H4>
  <RadioGroup :radiogroup="radioGroup" @change="onRadioChange">
    <template v-slot:radios>
      <ListSelect>
        <ListSelectDesc>
          <SelectPeriod>1년</SelectPeriod>
          <Radios class="styled_radio" value="year_1" />
        </ListSelectDesc>
        <ListSelectDesc>
          <SelectPeriod>3년</SelectPeriod>
          <Radios class="styled_radio" value="year_3"/>
        </ListSelectDesc>
        <ListSelectDesc>
          <SelectPeriod>5년</SelectPeriod>
          <Radios class="styled_radio" value="year_5"/>
        </ListSelectDesc>
        <ListSelectDesc>
          <SelectPeriod>탈퇴시까지</SelectPeriod>
          <Radios class="styled_radio" value="before_delete"/>
        </ListSelectDesc>
      </ListSelect>
    </template>
  </RadioGroup>
  <Submit>
    <Buttons large value="확인" block @click="HandleClickButton" :disabled="btnDisabled"/>
  </Submit>

  <Alert cardClass="title-text" :open="popup" @update:dateSettting="setDate">
    <template v-slot:dialog-title>
      <v-card-title v-if="selectValue ==='year_1'">
        개인정보 유효기간이 <br>
        1년까지로 설정되었습니다.
      </v-card-title>
      <v-card-title v-if="selectValue ==='year_3'">
        개인정보 유효기간이 <br>
        3년까지로 설정되었습니다.
      </v-card-title>
      <v-card-title v-if="selectValue ==='year_5'">
        개인정보 유효기간이 <br>
        5년까지로 설정되었습니다.
      </v-card-title>
      <v-card-title v-if="selectValue ==='before_delete'">
        개인정보 유효기간이 <br>
        탈퇴시까지로 설정되었습니다.
      </v-card-title>
    </template>
    <template v-slot:dialog-text>
      <v-card-text v-if="selectValue ==='year_1'">
        1년 간 서비스 미이용 시 개인정보는 파기됩니다.
      </v-card-text>
      <v-card-text v-if="selectValue ==='year_3'">
        3년 간 서비스 미이용 시 개인정보는 파기됩니다.
      </v-card-text>
      <v-card-text v-if="selectValue ==='year_5'">
        5년 간 서비스 미이용 시 개인정보는 파기됩니다.
      </v-card-text>
      <v-card-text v-if="selectValue ==='before_delete'">
        탈퇴시까지 서비스 미이용 시 개인정보는 파기됩니다.
      </v-card-text>
    </template>
    <template v-slot:dialog-btn>
      <v-btn class="two-btns" text  x-large @click="popup = false">확인</v-btn>
    </template>
  </Alert>

</Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Title from "../../../styles/mobile/common/Title";
import Desc from "../../../styles/mobile/common/Desc";
import List from "../../../styles/mobile/common/List";
import Alert from "../../../components/Alert";
import Header from '@/views/mobile/includes/Header';
import Radios from "../../../components/Radio";
import RadioGroup from "../../../components/RadioGroup";
import Buttons from "../../../components/Button";

export default {
  name : "ES-privacy",
  components : {
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    Alert,
    Header,
    Radios,
    RadioGroup,
    Buttons
  },
  data () {
    return{
      radioGroup: 'year_3',
      selectValue:'',
      btnDisabled : true,
      popup : false

    }
  },
  methods : {
    HandleClickButton(){
      this.$store.dispatch('member/periodSetting',this.selectValue).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        this.radioGroup = this.selectValue
        this.popup = true
      });
    },
    setDate(value) {
      this.popup = value
    },
    onRadioChange(val) {
      this.selectValue = val
      this.btnDisabled = this.radioGroup === val;

    },
    onPrevClick() {
        this.$router.go(-1);
    },
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
  }
}
</script>
<style>

</style>

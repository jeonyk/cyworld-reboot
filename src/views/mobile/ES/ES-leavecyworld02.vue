<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" />
    <Contents>
      <H3>회원탈퇴</H3>
      <DescDefault>
        마지막으로 싸이월드를 떠나시는 이유와
        <br />
        싸이월드팀에게 의견을 남겨주시면,
        <br />
        더 발전하는 싸이월드가 될 것을 약속드릴께요.
      </DescDefault>

      <H4>싸이월드를 떠나는 이유는... </H4>
      <RadioGroup :radiogroup="radioGroup" @change="onRadioChange">
        <template v-slot:radios>
          <FormRadioList>
            <FormRadioListDesc>
              <Radio value="for_delete_my_info" class="styled_radio" label="개인정보 및 콘텐츠를 지우고 싶어서" radiogroup="1" />
            </FormRadioListDesc>
            <FormRadioListDesc>
              <Radio value="uncomfortable" class="styled_radio" label="서비스가 이용하기 불편해서"/>
            </FormRadioListDesc>
            <FormRadioListDesc>
              <Radio value="for_re_regist" class="styled_radio" label="탈퇴 후 새 마음으로 재가입하고 싶어서"/>
            </FormRadioListDesc>
            <FormRadioListDesc>
              <Radio value="etc" class="styled_radio" label="기타"/>
            </FormRadioListDesc>
          </FormRadioList>
        </template>
      </RadioGroup>
      <TextArea
        class="input_textarea"
        counter="50"
        placeholder="50자 이내"
        height="102"
        mt="8"
        maxheight={102}
        @setInput="changeReasonText"
        v-model="reasonEtcText"
      />
      <H4 mt="24">싸이월드팀에게 남길 의견</H4>
      <TextArea
        class="input_textarea"
        counter="200"
        placeholder="200자 이내로 의견을 남겨주세요."
        height="125"
        mt="16"
        maxlength="200"
        maxheight={125}
        @setInput="changeOpinionText"
        v-model="jsonData.opinion"
      />

      <Submit>
        <Button large block @click="HandleClickButton" value="본인확인 후 회원 탈퇴 하기" :disabled="disabled" />
      </Submit>

    </Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Title from "../../../styles/mobile/common/Title";
import List from "../../../styles/mobile/common/List";
import Button from "../../../components/Button";
import Header from "../includes/Header";
import RadioGroup from "../../../components/RadioGroup";
import Radio from "../../../components/Radio";
import TextArea from "../../../components/TextArea";
import Form from "../../../styles/mobile/common/Form";
import Desc from "../../../styles/mobile/common/Desc";
export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Button,
    Header,
    RadioGroup,
    Radio,
    TextArea,
    ...Form,
    ...Desc
  },
  data(){
    return {
      radioGroup: '',
      disabled: true,
      reasonEtcText : '',
      jsonData : {
        txId : '',
        reasonType : '',
        reason : '',
        opinion : '',
      }
    }
  },
  methods:{
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onRadioChange(value) {
      this.disabled = false
      this.jsonData.reasonType = value;
      this.reasonEtcText = '';
      if(value == 'for_delete_my_info'){
        this.jsonData.reason = '개인정보 및 콘텐츠를 지우고 싶어서';
      } else if(value == 'uncomfortable') {
        this.jsonData.reason = '서비스가 이용하기 불편해서';
      } else if(value == 'for_re_regist') {
        this.jsonData.reason = '탈퇴 후 새 마음으로 재가입하고 싶어서';
      }
    },
    changeReasonText(value) {
      this.reasonEtcText = value;
    },
    changeOpinionText(value) {
      this.jsonData.opinion = value;
    },
    HandleClickButton(){
      if(this.jsonData.reasonType === 'etc') {
        this.jsonData.reason = this.reasonEtcText;
      }
      console.log(this.jsonData)
      this.$store.dispatch('member/setMemberAuthType','leave');
      this.$store.dispatch('member/setLeaveInfo', this.jsonData);
      this.$router.push({name: 'COM-veriinfo', params: {page : 'leave'}})
    }
  }
}
</script>
<style>

</style>

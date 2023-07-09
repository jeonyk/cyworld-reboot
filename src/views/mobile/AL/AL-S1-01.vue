<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick"/>
    <Contents>
      <H3>휴면해제 안내</H3>
      <DescDefault>
        회원님의 계정은 로그인 한 지 1년 이상이 지나 휴면 상태로 전환되었습니다. 휴면 상태를 해제하고 계속 이용하시려면 본인확인을 진행해주세요.
      </DescDefault>

      <H4>휴면 계정 정보</H4>
      <ListInfo>
        <ListInfoDesc>
          <ListInfoSubTitle>이메일 아이디</ListInfoSubTitle>
          <ListInfoSubDesc>{{ this.$store.getters.email }}</ListInfoSubDesc>
        </ListInfoDesc>
        <ListInfoDesc>
          <ListInfoSubTitle>휴면 전환 일자</ListInfoSubTitle>
          <ListInfoSubDesc>{{ this.$store.getters.statusStartDate | setDateFormat}}</ListInfoSubDesc>
        </ListInfoDesc>
      </ListInfo>

      <H5>휴면 계정이란?</H5>
      <DescDefault size="small">
        장기간 로그인하지 않은 회원님의 정보가 분리 보관되는
        것을 뜻합니다. 최근 1년 내 로그인 기록이 없는 계정은 휴면
        계정으로 전환됩니다.
      </DescDefault>

      <Hr />

      <H4>개인정보 유효기간 설정</H4>
      <DescDefault>
        개인정보를 파기 또는 분리 저장, 관리해야 하는 서비스
        미이용 기간을 선택해 주세요. 선택한 기간 동안 서비스를 이용하지 않을 경우 휴면 계정으로 전환됩니다.
      </DescDefault>
      <RadioGroup :radiogroup="radioGroup" @change="onRadioChange">
        <template v-slot:radios>
          <ListSelect>
            <ListSelectDesc>
              <SelectPeriod>1년</SelectPeriod>
              <Radio id="rdo1" class="styled_radio" ref="rdo1" value="a"/>
            </ListSelectDesc>
            <ListSelectDesc>
              <SelectPeriod>3년</SelectPeriod>
              <Radio id="rdo2" class="styled_radio" ref="rdo2" value="b"/>
            </ListSelectDesc>
            <ListSelectDesc>
              <SelectPeriod>5년</SelectPeriod>
              <Radio id="rdo3" class="styled_radio" ref="rdo3" value="c"/>
            </ListSelectDesc>
            <ListSelectDesc>
              <SelectPeriod>탈퇴시까지</SelectPeriod>
              <Radio id="rdo4" class="styled_radio" ref="rdo4" value="d" />
            </ListSelectDesc>
          </ListSelect>
        </template>
      </RadioGroup>

      <Submit>
        <Button block large value="본인확인하기" @click="onBtnClick"/>
      </Submit>

    </Contents>
  </Wrap>
</template>

<script>
import Common from "@/styles/mobile/common/Common";
import Title from "@/styles/mobile/common/Title";
import Desc from "@/styles/mobile/common/Desc";
import List from "@/styles/mobile/common/List";
import Button from "@/components/Button";
import Radio from "@/components/Radio";
import RadioGroup from "@/components/RadioGroup";
import Header from '@/views/mobile/includes/Header'


export default {
  name: "AL-S1-01",
  components: {
    RadioGroup,
    Button,
    Radio,
    Header,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  data() {
    return {
      radioGroup: 'a',
    }
  },
  filters : {
    setDateFormat: function (value) {
      if (value == '') return '';
      var js_date = new Date(value.replace('.', '-').replace('.', '-'));
      var year = js_date.getFullYear();
      var month = js_date.getMonth() + 1;
      var day = js_date.getDate();
      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
      return year + '년 ' + month + '월  ' + day+'일';
    }
  },
  methods: {
    onRadioChange(val) {
      this.radioGroup = val
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onBtnClick() {
      this.$store.dispatch('member/setMemberAuthType','wakeUp');
      this.$router.push({name: 'COM-veriinfo', params: {page : 'wakeUp'}})
    },
    onPrevClick() {
        this.$router.go(-1);
    },
  }
}
</script>

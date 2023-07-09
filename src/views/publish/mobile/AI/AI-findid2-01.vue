<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>
        이름, 휴대폰 번호로
        <br />
        아이디 찾기
      </H3> 

      <DescDefault>싸아월드에서 사용한 이름과 휴대폰 번호를 입력해 주세요.</DescDefault>

      <FormUser>
        <FormUserLabel htmlfor="inp_username">회원 이름</FormUserLabel>
        <InputText id="inp_username"
                    name="username"
                    mt="8"
                    :class="findIdForm.class"
                    :hint="findIdForm.hint"
                    :persistentHint="findIdForm.persistentHint"
                    type="text"
                    :placeholder="findIdForm.placeholderName"
                    :maxlength="20"
                    @setInput="setName"
                    :value="this.findIdForm.name"
                   @update:dateSettting="setDate"
                    label="이름" />
        <DescDefault size="xs" mt="16">싸이월드에서 사용했던 이름을 입력해 주세요. 본명 대신 별명이나 영문 이름을 사용했을 수도 있습니다.</DescDefault>
      </FormUser>

      <FormUser>
        <FormUserLabel htmlfor="inp_phonenumber">휴대폰 번호</FormUserLabel>
          <InputText id="inp_phonenumber"
                      name="phonenumber"
                      mt="8"
                      :value="findIdForm.phone"
                      :class="findIdForm.class"
                      :hint="findIdForm.hint"
                      :persistentHint="findIdForm.persistentHint"
                      type="text"
                      @blur="validatePhone"
                      @setInput="setPhone"
                      :placeholder="findIdForm.placeholderPhone"
                      :maxlength="11"
                      @update:dateSettting="setPhonenumberDate"
                      append-icon="mdi-eye"
                      label="'-' 없이 번호만 입력" />
        <DescDefault size="xs">싸이월드에 등록했던 휴대폰 번호를 입력해 주세요. 과거 휴대폰 번호로 011, 016, 017, 109 등을 사용했을 수도 있습니다.</DescDefault>
      </FormUser>

      <Submit>
        <Button block large value="아이디 찾기" @click="onBtnClick" :disabled="btnDisabled" />
      </Submit>

      <Alert cardClass="title-text2" :open="popup">
        <template v-slot:dialog-title>
          <v-card-title>
            {{ findIdForm.cardTitle }}
          </v-card-title>
          <v-card-text>
            {{ findIdForm.cardMessage }}
          </v-card-text>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text  x-large @click="confirmHandler">확인</v-btn>
        </template>
      </Alert>

    </Contents>
  </Wrap>
</template>

<script>
import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import Header from '@/views/mobile/includes/Header'
import List from "@/styles/mobile/common/List"
import Button from "@/components/Button"
import InputText from '@/components/InputText'
import Form from '@/styles/mobile/common/Form'
import { validNumber } from '@/utils/validate'
import Alert from '@/components/Alert'


export default {
  name: "AI-findid2-01",
  components: {
    InputText,
    Button,
    Header,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    ...Form,
    Alert,
  },

  data() {
    return {
      findIdForm: {
        class: '',
        hint: '',
        name: '',
        countryCode: '+82',
        phone: '',
        persistentHint: false,
        placeholderName: '',
        placeholderPhone: '',
        cardTitle: '',
        cardMessage: '',
      },
      btnDisabled: true,
      popup : false,
      confirm : false
    }
  },
  methods: {
    setName(value) {
      this.findIdForm.name = value;
    },
    setCountryCode(event) {
      alert(event.target.value);
      this.findIdForm.countryCode = event.target.value;
    },
    setPhone(value) {
      this.findIdForm.phone = value;
    },
    validatePhone() {
      // 숫자만 입력되어야 하는데 SB에 관련내용이 없어 유효성 체크만 추가 해놓음
      if(validNumber(this.findIdForm.phonenumber)) {
        console.log("number");
      }else{
        console.log("str");
      }
      if(this.findIdForm.phonenumber != ''){
        this.btnDisabled = false;
      }else{
        this.btnDisabled = true;
      }
    },
    onPrevClick() {
      this.$router.go(-1);
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onBtnClick() {

      var sendData = this.findIdForm.name+'||'+this.findIdForm.countryCode+'||'+this.findIdForm.phone;
      // var sendData = '김에프01||+82||01019020066'

      console.log("sendData", sendData);
      this.$store.dispatch('member/findIdsInfo', sendData).then(() => {
        const status = this.$store.getters.findedIdsData.code
        const data = this.$store.getters.findedIdsData.data
        if(status === 'OK' && data.length > 0) {  //정상
          this.$router.push('/AI-findid2-02')
        } else if(status === 'ERR_COM_001') { //일치하는 정보 없음
          this.popup = true
          this.findIdForm.cardTitle = '일치하는 회원이 없습니다.'
          this.findIdForm.cardMessage = '입력한 이름과 휴대폰 번호를\n다시 확인해 주세요.'
        } else {  //그 외
          this.popup = true
          this.findIdForm.cardTitle = '일치하는 회원이 없습니다.'
          this.findIdForm.cardMessage = '입력한 이름과 휴대폰 번호를\n다시 확인해 주세요.'
        }
      }).catch(() => {
        this.popup = true
        this.findIdForm.cardTitle = '일치하는 회원이 없습니다.'
        this.findIdForm.cardMessage = '입력한 이름과 휴대폰 번호를\n다시 확인해 주세요.'
      })

    },
    confirmHandler() {
      this.popup = false
      this.confirm = true
    },
    setDate(value) {
      this.findIdForm.name = value
    },
    setPhonenumberDate(value) {
      this.findIdForm.phone = value
    },

  }
}
</script>

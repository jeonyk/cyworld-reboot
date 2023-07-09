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
                    @setInput="setName"
                    @blur="validateName"
                    :placeholder="findIdForm.placeholderName"
                    :maxlength="20"
                    :value="this.findIdForm.name"
                    label="이름을 입력해주세요." />
        <DescDefault size="xs" mt="16">싸이월드에서 사용했던 이름을 입력해 주세요. 본명 대신 별명이나 영문 이름을 사용했을 수도 있습니다.</DescDefault>
      </FormUser>

      <FormUser>
        <FormUserLabel htmlfor="inp_phonenumber">휴대폰 번호</FormUserLabel>
     
          <InputText id="inp_phonenumber"
                      name="phonenumber"
                      mt="8"
                      :class="findIdForm.class"
                      :hint="findIdForm.hint"
                      :persistentHint="findIdForm.persistentHint"
                      type="text"
                      @blur="validatePhone"
                      @setInput="setPhone"
                      :placeholder="findIdForm.placeholderPhone"
                      :maxlength="8"
                      :value="this.findIdForm.phonenumber"
                      label="'-' 없이 번호만 입력" />
  
        <DescDefault size="xs">싸이월드에 등록했던 휴대폰 번호를 입력해 주세요. 과거 휴대폰 번호로 011, 016, 017, 109 등을 사용했을 수도 있습니다.</DescDefault>
      </FormUser>

      <Submit>
        <Button block large value="아이디 찾기" @click="onBtnClick" :disabled="btnDisabled" />
      </Submit>
    </Contents>
    <Footer />
  </Wrap>
</template>

<script>
import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import Header from '@/views/mobile/includes/Header'
//import Footer from '@/views/mobile/includes/Footer'
import List from "@/styles/mobile/common/List"
import Button from "@/components/Button"
//import Select from "@/components/mobile/Select"
import InputText from '@/components/InputText'
import Form from '@/styles/mobile/common/Form'
import { validNumber } from '@/utils/validate'


export default {
  name: "AI-findid2-01-success",
  components: {
    InputText,
    Button,
    Header,
    //Footer,
    //Select,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    ...Form,
  },
  data() {
    return {
      findIdForm: {
        class: '',
        hint: '',
        name: '김사이',
        phonenumber: '54327890',
        persistentHint: false,
        placeholderName: '',
        placeholderPhone: '',
      },
      btnDisabled: false
    }
  },
  methods: {
    setName(value) {
      this.findIdForm.name = value;
    },
    setPhone(value) {
      this.findIdForm.phonenumber = value;
    },
    validateName(value) {
      if(value) {
        console.log(value);
      }
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
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onBtnResetPassword() {
      console.log('비밀번호 재설정 페이지 이동')
    },
    onBtnClick() {
      console.log('완료 후 페이지 이동')
    }
  }
}
</script>

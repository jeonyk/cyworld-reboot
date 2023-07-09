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
                    value="김사이"
                    :maxlength="20"
                    label="성명" />
      </FormUser>

      <FormUser mt="0">
        <FormUserLabel htmlfor="inp_phonenumber" class="sr_only">휴대폰 번호</FormUserLabel>
        <FormUserPhone>
          <Select class="input_select selected">
            <template v-slot:options>
              <option value="">통신사</option>
              <option value="SKT" selected>SKT</option>
            </template>
          </Select>
          <InputText id="inp_phonenumber"
                      name="phonenumber"
                      type="text"
                      :maxlength="8"
                      label="휴대폰 번호"
                      value="01012345678" />
        </FormUserPhone>
      </FormUser>

      <FormAgreeList class="form-list form-auth">
        <FormAgreeListDesc class="allcbx_area">
          <Checkbox id="cbx_all" name="cbx_all" class="styled_checkbox fs16" ariaControls="cbx1 cbx2 cbx3 cbx4 cbx5"
                  inputValue="all"
                  label="모두 동의합니다."/>
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx1" name="cbx1" class="styled_checkbox" inputValue="a"
                    htmlLabel="<a href='/'>개인정보 수집과 이용</a>에 동의합니다." />
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx2" name="cbx2" class="styled_checkbox" inputValue="b"
                    htmlLabel="<a href='/'>고유식별정보의 처리</a>에 동의합니다." />
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx3" name="cbx3" class="styled_checkbox" inputValue="c"
                    htmlLabel="<a href=/'>본인확인 서비스 이용약관</a>에 동의합니다." />
        </FormAgreeListDesc>
        <FormAgreeListDesc>
          <Checkbox id="cbx4" name="cbx4" class="styled_checkbox" inputValue="d"
                    htmlLabel="<a href='/'>통신사 본인확인 이용약관</a>에 동의합니다." />
        </FormAgreeListDesc>
      </FormAgreeList>

      <Submit>
        <Button block large value="본인 확인하기" @click="onBtnClick" :disabled="btnDisabled" />
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
import Footer from '@/views/mobile/includes/Footer'
import List from "@/styles/mobile/common/List"
import Button from "@/components/Button"
import Select from "@/components/mobile/Select"
import InputText from '@/components/InputText'
import Checkbox from '@/components/Checkbox'
import Form from '@/styles/mobile/common/Form'


export default {
  name: "AI-findid2-01",
  components: {
    InputText,
    Button,
    Header,
    Footer,
    Select,
    Checkbox,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
    ...Form,
  },
  data() {
    return {
      btnDisabled: false
    }
  },
  methods: {
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
      this.$router.go(-1);
    },
    onBtnClick(){

    }
  }
}
</script>

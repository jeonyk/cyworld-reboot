<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>

      <H3>1:1 문의하기</H3>
      <DescDefault>싸이월드 고객센터에 문의하실 내용을 자세히 남겨주세요. 최대한 신속하게 답변 드릴 수 있도록 노력할께요.</DescDefault>
      <DescWarning>회원 로그인을 하지 않은 상태로 문의를 남기실 경우, 문의 내역은 이메일을 통해서만 확인 하실 수 있습니다.</DescWarning>

      <H4>문의 내용</H4>
      <TextArea
          class="input_textarea inquery"
          mt="8"
          placeholder="문의 내용을 입력해주세요."
          height="217"
      />

      <ListFileUpload>
        <!--<ListFileUploadDesc>
          <span class="filename">ABCD_imagefile.PNG</span>
          <v-btn icon class="btn_delete">
            <v-icon></v-icon>
          </v-btn>
        </ListFileUploadDesc>-->
      </ListFileUpload>
      <FileUpload
          label="이미지 첨부"
          :hint="fileForm.hint"
      >
      </FileUpload>

      <H4>문의자 정보</H4>
      <FormConfirm mt="8">
        <FormConfirmDesc>
          <InputText
              type="text"
              label="답변 받을 이메일 주소"
              id="inp_email"
              name="email"
              value=""
              helperText=""
          />
        </FormConfirmDesc>
        <FormConfirmDesc mb="12">
          <InputText
              type="password"
              label="비밀번호"
              id="inp_password"
              name="password"
              value=""
              helperText=""
          />
        </FormConfirmDesc>
        <FormConfirmDesc class="check_area check_privacy" mb="24">
          <Checkbox class="styled_checkbox" input-value="true" label="개인정보 처리방침 (필수)" />
          <router-link to="/">내용보기</router-link>
        </FormConfirmDesc>
      </FormConfirm>

      <FormDesc class="submit">
        <Button large value="문의 남기기" block @click="onBtnClick" :disabled="btnDisabled"/>
      </FormDesc>

    </Contents>
  </Wrap>
</template>

<script>

  import Common from '@/styles/mobile/common/Common'
  import Title from '@/styles/mobile/common/Title'
  import Desc from '@/styles/mobile/common/Desc'
  import Header from '@/views/mobile/includes/Header'
  import TextArea from '@/components/TextArea'
  import InputText from '@/components/InputText'
  import List from '@/styles/mobile/common/List'
  import FileUpload from '@/components/FileUpload'
  import Button from '@/components/Button'
  import Form from '@/styles/mobile/common/Form'
  import Checkbox from "@/components/Checkbox";

  export default {
    name: "CQ11-NotLogin",
    components: {
      Header,
      ...Common,
      ...Title,
      ...Desc,
      TextArea,
      ...List,
      FileUpload,
      Button,
      ...Form,
      Checkbox,
      InputText,
    },

    data() {
      return {
        fileForm : {
          hint : "이미지 파일 1개만 첨부 가능합니다."
        }
      }
    },

    methods:{
      onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
      onPrevClick() {
        this.$router.go(-1);
      },
      onBtnClick() {
        console.log('문의 남기기');
      },
    }

  }

</script>

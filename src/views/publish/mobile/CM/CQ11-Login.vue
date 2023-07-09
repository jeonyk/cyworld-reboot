<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>

      <H3>1:1 문의하기</H3>
      <DescDefault>싸이월드 고객센터에 문의하실 내용을 자세히 남겨주세요. 최대한 신속하게 답변 드릴 수 있도록 노력할께요.</DescDefault>

      <H4>문의 내용</H4>
      <TextArea
          class="input_textarea inquery"
          placeholder="문의 내용을 입력해주세요."
          height="217"
          mt="8"
      />

      <!--<ListFileUpload>
        <ListFileUploadDesc>
          <span class="filename">ABCD_imagefile.PNG</span>
          <v-btn icon class="btn_delete">
            <v-icon></v-icon>
          </v-btn>
        </ListFileUploadDesc>
      </ListFileUpload>-->
      <FileUpload
          label="이미지 첨부"
          :hint="fileForm.hint"
      >
      </FileUpload>

      <FormDesc class="submit">
        <Button large value="문의 남기기" block @click="login" :disabled="btnDisabled"/>
      </FormDesc>

    </Contents>
    <Footer />
  </Wrap>
</template>

<script>

  import Common from '@/styles/mobile/common/Common'
  import Title from '@/styles/mobile/common/Title'
  import Desc from '@/styles/mobile/common/Desc'
  import Footer from '@/views/mobile/includes/Footer'
  import Header from '@/views/mobile/includes/Header'
  import TextArea from '@/components/TextArea'
  import List from '@/styles/mobile/common/List'
  import FileUpload from '@/components/FileUpload'
  import Button from '@/components/Button'

  export default {
    name: "CQ11-Login",
    components: {
      Header,
      Footer,
      ...Common,
      ...Title,
      ...Desc,
      TextArea,
      ...List,
      FileUpload,
      Button,
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
        this.$func.postMessage("confirmBack");
        console.log('뒤로가기');
      },
    }

  }

</script>

<style>
 .submit button{
   margin-top: 36px;
 }
</style>

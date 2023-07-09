<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>

      <H3>1:1 문의하기</H3>

      <ListBlank class="blank_notlogin">
        <p class="msg_main">앗! 아직 로그인 전이시네요.</p>
        <p class="msg_sub">
          싸이월드 고객센터에서는 로그인 후
          <br />
          문의하시기를 권해드려요.
        </p>
      </ListBlank>

      <Submit>
        <Button value="로그인" large block></Button>
        <Button value="비로그인 문의" large block outlined></Button>
      </Submit>

    </Contents>
  </Wrap>
</template>

<script>

  import Common from '@/styles/mobile/common/Common'
  import Title from '@/styles/mobile/common/Title'
  import Desc from '@/styles/mobile/common/Desc'
  import Header from '@/views/mobile/includes/Header'
  import List from '@/styles/mobile/common/List'
  import Button from '@/components/Button'

  export default {
    name: "CQ11-NotLogin-before",
    components: {
      Header,
      ...Common,
      ...Title,
      ...Desc,
      ...List,
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
        this.$router.go(-1);
      },
    }

  }

</script>

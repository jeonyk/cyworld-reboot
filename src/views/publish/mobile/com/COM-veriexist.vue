<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>

      <H3>이전에 가입된 계정이 있어요.</H3>

      <ListBlank class="blank_veri exist">
        <p class="msg_sub">
          싸이월드에서 이미 아이디를 만든 적 있으시네요.<br />
          혹시 생각이 안나시면 <span>아이디를 잊어버렸어요</span> 버튼을 눌러주세요.
        </p>
      </ListBlank>

      <Submit mt="42">
        <Button value="로그인하기" @click="goLogin" large block></Button>
        <Button value="아이디를 잊어버렸어요" @click="goFindid" large block outlined></Button>
      </Submit>

    </Contents>
    <Footer />
  </Wrap>
</template>

<script>

  import Common from '@/styles/mobile/common/Common'
  import Title from '@/styles/mobile/common/Title'
  import Desc from '@/styles/mobile/common/Desc'
  import Header from '@/views/mobile/includes/Header'
  import Footer from '@/views/mobile/includes/Footer'
  import List from '@/styles/mobile/common/List'
  import Button from '@/components/Button'

  export default {
    name: "COM-veriexist",
    components: {
      Header,
      Footer,
      ...Common,
      ...Title,
      ...Desc,
      ...List,
      Button,
    },

    data() {
      return {

      }
    },

    methods:{
      onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
      onPrevClick() {
        this.$router.go(-1);
      },
      goLogin(){
        this.$router.push('/AL-login')
      },
      goFindid(){
        this.$router.push('/AI-findid')
      },
    }

  }

</script>

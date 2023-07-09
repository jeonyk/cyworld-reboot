<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>실명인증</H3>
      <DescDefault>아이디 전체 확인을 위해 실명인증을 진행해 주세요.</DescDefault>

      <Submit>
        <Button block large value="실명인증 하기" @click="onBtnClick" />
      </Submit>

      <form name="danalform" method="post" action="https://wauth.teledit.com/Danal/WebAuth/Web/Start.php" >
        <input type="hidden" name="TID" :value="danalform.TID" />
      </form>

    </Contents>
    <Footer />
  </Wrap>

</template>

<script>
import Common from "@/styles/mobile/common/Common";
import Title from "@/styles/mobile/common/Title";
import Desc from "@/styles/mobile/common/Desc";
import Header from '@/views/mobile/includes/Header';
import Footer from '@/views/mobile/includes/Footer';
import List from "@/styles/mobile/common/List";
import Button from "@/components/Button";


export default {
  name: "AI-findid2-03",
  components: {
    Button,
    Header,
    Footer,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  data() {
    return {
      danalform : {
        TID : ''
      }
    }
  },
  methods: {
    onPrevClick() {
      this.$router.go(-1);
    },
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onBtnClick() {
      this.$store.dispatch('member/setMemberAuthType','findId');
      this.$router.push({name: 'COM-veriinfo', params: {page : 'findId'}})
    }
  }
}
</script>

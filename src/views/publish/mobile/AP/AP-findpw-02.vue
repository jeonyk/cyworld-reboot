<template>
  <Wrap>
    <Header />
    <Contents>
      <H3>비밀번호 재설정 완료</H3>
      <DescDefault>이제 새로운 비밀번호로 로그인 할 수 있습니다.</DescDefault>

      <Submit>
        <Button block large value="확인" @click="onBtnClick" />
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
import Header from '@/views/mobile/includes/Header'


export default {
  name: "AP-findpw-02",
  components: {
    Button,
    Header,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  data() {
    return {
    }
  },
  methods: {
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onBtnClick() {
      this.$router.push('/AL-login')
    }
  }
}
</script>

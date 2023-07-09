<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" />
    <Contents>
      <H3>부가서비스</H3>
      <DescDefault>
        싸이월드에 연결된 부가서비스 목록입니다.
      </DescDefault>
      <ListBlank>연결된 부가서비스가 없습니다.</ListBlank>
    </Contents>
    <Footer />
  </Wrap>
</template>
<script>
import Common from "../../../../styles/mobile/common/Common";
import Header from "../includes/Header";
import Title from "../../../../styles/mobile/common/Title";
import Desc from "../../../../styles/mobile/common/Desc";
import List from "../../../../styles/mobile/common/List";
// import Footer from "../includes/Footer";
export default {
  components : {
    ...Common,
    Header,
    ...Title,
    ...Desc,
    ...List,
    // Footer
  },
  methods:{
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
  }
}
</script>
<style>

</style>

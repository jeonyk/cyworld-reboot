<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick" />
    <Contents>
       <H3>
        서비스 이용 제한
      </H3>
      <DescDefault>해당 계정은 서비스 이용 제한으로 <br />
      로그인이 불가능합니다.</DescDefault>

      <H4>이용 제한 정보</H4>
      <ListInfo class="align_left">
        <ListInfoDesc class="InfoDesc">
          <ListInfoSubTitle>대상 아이디</ListInfoSubTitle>
          <ListInfoSubDesc class="d-flex flex-column mt-1">fxgear@cyworld.com</ListInfoSubDesc>
        </ListInfoDesc>

        <ListInfoDesc class="InfoDesc"> 
          <ListInfoSubTitle>제한 기간</ListInfoSubTitle>
          <ListInfoSubDesc class="d-flex flex-column mt-1">2021년11월13일~2022년12월24일</ListInfoSubDesc>
        </ListInfoDesc> 

        <ListInfoDesc class="InfoDesc">
          <ListInfoSubTitle>사유</ListInfoSubTitle>
          <ListInfoSubDesc class="d-flex flex-column mt-1">
            저작권 위반 게시물을 수차례 등록하여 싸이월드 이용약관 위반행위가 확인되었습니다. 이로 인해 30일 간 싸이월드를 이용하실 수 없도록 계정사용이 제한되었습니다. 
            저작권 위반 게시물은 싸이월드 이용약관에 의거하여 모두 삭제될 예정입니다. 원활한 서비스 운영을 위한 부득이한 조치임을 양해하여 주시길 바랍니다.
          </ListInfoSubDesc>
        </ListInfoDesc>
      </ListInfo>

      <DescDefault size="small" mt="16">
        자세한 내용은 싸이월드
        <router-link to="/CM-main" class="btn_link">고객센터</router-link>로 문의해 주세요.
      </DescDefault>
      
      <Submit>
        <Button large block value="확인" @click="onBtnClick"/>
      </Submit>

    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import List from "@/styles/mobile/common/List"
import Header from '@/views/mobile/includes/Header'
import Button from "@/components/Button"

export default {
  name: "AL-C1",
  components: {
    Header,
    Button,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  methods: {
    onCloseClick() {
      this.$func.postMessage("confirmClose");
    },
    onBtnClick() {
      if(this.$func.postMessage("confirmClose")) {
        this.$router.push('/AL-login')
      }
    },
    onPrevClick() {
        this.$router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>

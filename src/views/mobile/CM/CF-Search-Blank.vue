<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>자주 하는 질문</H3>
      <InputText
          type="text"
          value="일촌공개"
          placeholder="궁금한 것을 검색해서 찾아보세요"
          solo
          class="input_search"
          id="inp_searchText"
          name="searchText"
          mt="24"
      />

      <H4>검색 결과 (0개)</H4>
      
      <ListBlank class="blank_search">
        <p class="msg_main">찾으시는 검색 결과가 없어요.</p>
        <p class="msg_sub">
          추가 궁금하신 사항은,
          <br />
          1:1 문의하기를 이용해 주세요.
        </p>
      </ListBlank>

      <Submit>
        <Button large block value="1:1 문의하기" />
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
import InputText from '@/components/InputText'

export default {
  name: "CF-Search",
  components: {
    Header,
    Button,
    InputText,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  methods : {
    onCloseClick() {
      this.$router.push('/EM-main')
    },
    onPrevClick() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
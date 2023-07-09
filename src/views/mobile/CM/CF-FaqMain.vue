<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>자주 하는 질문</H3>
      <InputText
          type="text"
          value=""
          placeholder="궁금한 것을 검색해서 찾아보세요"
          solo
          class="input_search"
          id="inp_searchText"
          name="searchText"
          mt="24"
      />

      <ListQnaType component="nav" aria-label="qna list main">
        <template v-slot:items>
          <ListQnaTypeDesc primary="싸이월드 서비스 이용 안내" />
          <ListQnaTypeDesc primary="싸이월드 용어집" />
          <ListQnaTypeDesc primary="도토리 충전, 선물하기" />
          <ListQnaTypeDesc primary="미니미, 미니룸 설정하기" />
          <ListQnaTypeDesc primary="랜덤 파도타기" />
        </template>
      </ListQnaType>

      <H4>자주 하는 질문 TOP 5</H4>
      <ListQuestion component="nav" class="lst_top5" aria-label="list question top5">
        <template v-slot:items>
          <router-link to="/CF-FaqDetail1">
            <ListQuestionDesc primary="미니홈피 공개설정은 어떻게 바꾸나요?" secondary="1" />
          </router-link>
          <router-link to="/CF-FaqDetail2">
            <ListQuestionDesc primary="일촌은 어디서 관리하나요?" secondary="2" />
          </router-link>
          <router-link to="/CF-FaqDetail3">
            <ListQuestionDesc primary="폴더 공개설정은 어떻게 바꾸나요?" secondary="3" />
          </router-link>
          <router-link to="/CF-FaqDetail4">
            <ListQuestionDesc primary="BGM이 계속 끊겨요" secondary="4" />
          </router-link>
          <router-link to="/CF-FaqDetail5">
            <ListQuestionDesc primary="파도타기는 어떻게 하나요?" secondary="5" />
          </router-link>
        </template>
      </ListQuestion>

      <ListGuide mt="24">
        <ListGuideDesc>
          위의 안내 사항 이외에 추가로 궁금하신 사항이 있다면,
          <br />
          1:1 문의하기를 이용해 주세요.
        </ListGuideDesc>
      </ListGuide>

      <Submit align="both">
        <Button large outlined value="내 문의 내역" />
        <Button large value="1:1 문의하기" />
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
  name: "CF-FaqMain",
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
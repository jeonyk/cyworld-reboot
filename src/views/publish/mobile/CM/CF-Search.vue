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

      <H4>검색 결과 (36개)</H4>
      <ListQuestion component="nav" class="lst_qna_sub" aria-label="list qna sub">
        <template v-slot:items>
          <ListQuestionDesc primary="텍스트릴 입력해 주세요" />
          <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
          <ListQuestionDesc primary="일촌 공개 키워드 검색" />
          <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
          <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
          <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
          <ListQuestionDesc primary="일촌 공개 키워드 검색" />
          <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
          <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
          <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
          <ListQuestionDesc primary="일촌 공개 키워드 검색" />
          <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
          <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
          <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
          <ListQuestionDesc primary="일촌 공개 키워드 검색" />
          <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
          <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
          <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
          <ListQuestionDesc primary="일촌 공개 키워드 검색" />
          <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
          <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
        </template>
      </ListQuestion>

      <ListGuide mt="24">
        <ListGuideDesc>
          위의 안내 사항 이외에 추가로 궁금하신 사항이 있다면,
          <br />
          1:1 문의하기를 이용해 주세요.
        </ListGuideDesc>
      </ListGuide>

      <!-- <hr/>
      <H2>결과가 0 일 경우 보여주는 부분 start</H2>
      <ListBlank class="blank_search">
        <p class="msg_main">연결된 부가서비스가 없습니다.</p>
        <p class="msg_sub">
          추가 궁금하신 사항은,
          <br />
          1:1 문의하기를 이용해 주세요.
        </p>
      </ListBlank> -->

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
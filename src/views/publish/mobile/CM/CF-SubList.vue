<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>서비스 이용 가이드</H3>

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
        </template>
      </ListQuestion>
    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import List from "@/styles/mobile/common/List"
import Header from '@/views/mobile/includes/Header'

export default {
  name: "CF-SubList",
  components: {
    Header,
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

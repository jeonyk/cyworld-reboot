<template>
  <Wrap>
      <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
      <Contents>
        <H3>내 문의 내역</H3>

        <ListNotice component="nav" class="list_cmy" aria-label="list cmy">
          <template v-slot:items>
            <ListNoticeDesc primary="일촌 목록 편집은 어떻게 하나요?" secondary="2021-11-30 12:30:20" />
            <ListNoticeDesc primary="BGM 구매 취소해주세요. 안그러면 블랙 컨슈 BGM 구매 취소해주세요. 안그러면 블랙 컨슈" secondary="2021-11-30 12:30:20" />
            <ListNoticeDesc primary="응원은 하는데요, 클럽은 언제 만들어 줄거에요 응원은 하는데요, 클럽은 언제 만들어 줄거에요" secondary="2021-11-30 12:30:20" class="answer" />
            <ListNoticeDesc primary="선물하기 매뉴얼은 어디서 찾아요?" secondary="2021-11-30 12:30:20" class="answer" />
            <ListNoticeDesc primary="일촌 목록 편집은 어떻게 하나요?" secondary="2021-11-30 12:30:20" class="answer" />
            <ListNoticeDesc primary="BGM 구매 취소해주세요. 안그러면 블랙 컨슈 BGM 구매 취소해주세요. 안그러면 블랙 컨슈" secondary="2021-11-30 12:30:20" class="answer" />
          </template>
        </ListNotice>
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
  name: "CMy-List",
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

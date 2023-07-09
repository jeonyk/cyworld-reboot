<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3 class="sr_only">고객센터 &gt; 자주하는 질문 &gt; 상세</H3>
      <DetailList>
        <DetailListTitle>
          일촌은 어디서 관리하나요?
        </DetailListTitle>
        <DetailListSub>
          <p>
            일촌 관리는 미니홈피 - 일촌 을 선택하시면 일촌 목록이 보여집니다. <br />
            여기서 일촌 즐겨찾기 추가, 일촌 해지, 차단 을 설정 할 수 있습니다. 또한 일촌 신청한 상태 및 받은 일촌 신청 수락은 싸이 생활 - 일촌 신청 을 선택하여 확인 가능합니다.
          </p>
        </DetailListSub>
      </DetailList>
    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Header from '@/views/mobile/includes/Header'
import Detail from '@/styles/mobile/common/Detail'

export default {
  name: "CF_FaqDetail",
  components: {
    Header,
    ...Common,
    ...Title,
    ...Detail
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
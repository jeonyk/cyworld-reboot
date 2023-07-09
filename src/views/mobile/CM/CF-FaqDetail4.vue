<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3 class="sr_only">고객센터 &gt; 자주하는 질문 &gt; 상세</H3>
      <DetailList>
        <DetailListTitle>
          BGM이 계속 끊겨요
        </DetailListTitle>
        <DetailListSub>
          <p>
            현재 미니홈피의 BGM은 해당 BGM이 설정된 미니홈피를 화면에 띄울 경우에만 플레이가 됩니다.
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
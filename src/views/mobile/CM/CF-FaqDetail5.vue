<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3 class="sr_only">고객센터 &gt; 자주하는 질문 &gt; 상세</H3>
      <DetailList>
        <DetailListTitle>
          파도타기는 어떻게 하나요?
        </DetailListTitle>
        <DetailListSub>
          <p>
            미니홈피 화면의 상단에 파도모양 아이콘을 누르시면, 다른 유저의 미니홈피로 파도타기가 가능합니다.
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
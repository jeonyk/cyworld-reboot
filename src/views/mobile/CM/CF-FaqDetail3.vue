<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3 class="sr_only">고객센터 &gt; 자주하는 질문 &gt; 상세</H3>
      <DetailList>
        <DetailListTitle>
          폴더 공개설정은 어떻게 바꾸나요?
        </DetailListTitle>
        <DetailListSub>
          <p>
            폴더 공개 관리는 원하시는 폴더가 있는 메뉴를 선택하신 후, 상단 설정버튼을 누르면 폴더 관리 화면이 나옵니다. <br />
            원하시는 폴더를 선택하면 폴더의 공개설정을 변경 가능합니다.
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
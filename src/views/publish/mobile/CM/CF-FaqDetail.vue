<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3 class="sr_only">고객센터 &gt; 자주하는 질문 &gt; 상세</H3>
      <DetailList>
        <DetailListTitle>
          내 사진을 일촌에게만 보여주고 싶어요 안 보이게 설정하려면 어떻게 해야 하는지 알려주세요.
        </DetailListTitle>
        <DetailListSub>
          <p>
            회원님의 사진을 일촌에게만 공개하고 싶을 경우, 미니홈피 &gt; 설정(아이콘)을 선택하신 후 &gt; 공개 설정에서 원하시는 항목의 공개 설정을 ‘일촌 공개’로 설정하면 됩니다.
          </p>
          <p>
            회원님의 사진을 일촌에게만 공개하고 싶을 경우, 미니홈피 &gt; 설정(아이콘)을 선택하신 후 &gt; 공개 설정에서 원하시는 항목의 공개 설정을 ‘일촌 공개’로 설정하면 됩니다.
          </p>
          <p>
            <img src="/img/temp_detail.png" alt="" />
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
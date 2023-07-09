<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3 class="sr_only">공지사항 &gt; 상세</H3>
      <DetailList>
        <DetailListTitle>
          <p class="title">싸이월드가 다시 시작합니다.</p>
          <p class="datetime">2021.12.08 10:42:42</p>
        </DetailListTitle>
        <DetailListSub>
          <p>
            안녕하세요.<br /> 사이 좋은 사람들, 싸이월드에서 알려드립니다.<br /><br />

            싸이월드가 드디어 다시 시작합니다.<br />
            예전 그 느낌, 그 감성 그대로 다시 태어난 싸이월드를 둘러보세요.<br /><br />

            내 일촌은 누구였을지, 잘 살고 있는지 안부를 묻고, 방명록을 남겨보세요.<br /><br />

            옛날 내 사진도 미니홈피 사진첩에서 다시 확인할 수 있어요. 혹시 사진이 작고 저화질이라면 추억 사진관을 통해 고화질로 변환할 수 있는 서비스도 제공하고 있으니 이용해 보세요.<br /><br />

            새롭게 태어난 싸이월드는 메타버스 플랫폼인 한컴타운도 이용할 수 있어요. 새로운 시대에 맞는 새로운 방식의 소통방식도 꼭 경험해 보세요.<br /><br />

            앞으로도 더 유용하고 많은 서비스를 제공할 예정이니, 계속 지켜봐주세요!<br /><br />

            감사합니다.<br /><br />

            사이좋은 사람들 싸이월드팀 드림<br /><br /><br /><br />

            <img src="/img/svg/logo_cyworld.svg" alt="" style="width:150px">
          </p>
        </DetailListSub>
      </DetailList>
    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import List from "@/styles/mobile/common/List"
import Detail from "@/styles/mobile/common/Detail";
import Header from '@/views/mobile/includes/Header'

export default {
  name: "CB-NoticeDetail",
  components: {
    Header,
    ...Common,
    ...Title,
    ...Desc,
    ...List,
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

<style scoped>

</style>
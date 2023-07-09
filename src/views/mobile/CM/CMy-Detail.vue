<template>
  <Wrap>
      <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
      <Contents>
        <H3 class="sr_only">고객 센터 &gt; 내 문의내역 &gt; 상세</H3>

        <DetailList>
          <DetailListTitle>
            <p class="title">일촌 목록 편집은 어떻게 하나요?</p>
            <p class="datetime">
              2021-11-30 12:30:20
            </p>
          </DetailListTitle>
          <DetailListSub>
            <p>
              안녕하세요!~
              <br />
              일촌 목록을 편집모드로 들어가면 앱이 자꾸 튕기면서 먹통이 됩니다.
              <br />
              그래서 앱을 다시 지었다가 새로 깔았는데도 똑같은 증상이 나타납니다.
              <br />
              어떻게 해야 할까요?
            </p>
            <p class="img_area">
              <img src="/img/temp_Rectangle_477.png" alt="" />
            </p>
          </DetailListSub>
        </DetailList>

        <DetailAnswer>
          <DetailAnswerTitle>
            <p class="title">문의하신 내용에 대해 답변 드립니다.</p>
            <p class="datetime">
              2021.11.30 14:33:25
            </p>
          </DetailAnswerTitle>
          <DetailAnswerSub>
            <p>
              싸이월드 고객센터 상담원 날때도 친절입니다.
            </p>
            <p>
              일촌 편집은 미니홈피 &gt; 일촌 숫자 영역을 클릭하시구요. 일촌 목록을 띄우고 편집하면 돼요.
              <br />
              일촌 목록에서는 일촌 해제, 일촌명 수정, 즐겨찾기 추가, 차단도 할 수 있어요.
              <br />
              도움이 되었으면 좋겠네요.
            </p>
            <p>
              오늘도 싸이하는 즐거운 하루 되세요.
              <br />
              사이좋은 사람들, 싸이월드
              <br />
              날때도 친절 상담원 올림.
            </p>
          </DetailAnswerSub>
        </DetailAnswer>
      </Contents>
    </Wrap>
</template>

<script>

import Common from '@/styles/mobile/common/Common';
import Title from '@/styles/mobile/common/Title';
import DetailList from '@/styles/mobile/common/Detail';
import Header from '@/views/mobile/includes/Header';
// import Crypto from '@/plugins/Crypto';
// console.log(Crypto.test('hotest'));  // 잠시.. 디자인컴펌때문에 주석처리 할게요.
// console.log(Crypto.aseencrypt('hotest'));
// console.log(Crypto.testRsa('RSA테스트'));

export default {
  name: "CMy-Detail",
  components: {
    Header,
    ...Common,
    ...Title,
    ...DetailList,
    //...List,
  },

  data() {
    return '';
  },

  methods: {
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
      this.$router.go(-1);
    }
  }
}
</script>

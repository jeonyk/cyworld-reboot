<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>
        탈퇴 완료, <br />
        우리 꼭 다시 만나요!
      </H3>
      <DescDefault>
        그동안 싸이월드 서비스를 이용해주셔서 감사합니다.
        <br />
        싸이월드는 언제나 고객님을 기다리고 있을게요.
        <br />
        더 좋은 모습으로 만나요.^^
      </DescDefault>

      <H4>싸이월드의 미래를 살짝꿍 알려드릴께요</H4>

      <DescDefault>
        싸이월드는 앞으로 많은 변화와 발전을
        <br />
        준비하고 있어요. 앞으로도 많은 관심 부탁드립니다.
      </DescDefault>

      <DescDefault mt="32" align="center">
        이미지 영역
        <br />
        (내용 추가 예정)
      </DescDefault>

      <Submit>
        <Button large value="확인" block @click="HandleClickButton"/>
      </Submit>

    </Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Title from "../../../styles/mobile/common/Title";
import Button from "../../../components/Button";
import Header from "../includes/Header";
import Desc from "../../../styles/mobile/common/Desc";

export default {
  components :{
    ...Common,
    ...Title,
    Button,
    Header,
    ...Desc
  },
  methods :{
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    HandleClickButton(){
      if(this.$func.postMessage("confirmClose")) {
        this.$router.push('/AL-login')
      }
    },
    onPrevClick() {
        this.$router.go(-1);
    },
  }
}

</script>
<style>

</style>

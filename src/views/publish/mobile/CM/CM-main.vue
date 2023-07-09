<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>싸이월드 고객센터</H3>
      <InputText
          type="text"
          value=""
          placeholder="검색어를 입력하세요"
          solo
          class="input_search"
          id="inp_searchText"
          name="searchText"
          mt="24"
      />

      <H4>서비스 주요 안내</H4>
      <ListService component="nav" class="lst_service" aria-label="service list main info">
        <template v-slot:items>
          <ListServiceDesc primary="싸이월드 서비스 이용 안내" listtype="new" />
          <ListServiceDesc primary="싸이월드 용어집" listtype="new" />
          <ListServiceDesc primary="도토리 충전, 선물하기" />
          <ListServiceDesc primary="미니미, 미니룸 설정하기" />
          <ListServiceDesc primary="랜덤 파도타기" />
        </template>
      </ListService>

      <Hr mt="16" />

      <H4>자주 하는 질문</H4>
      <ListQuestion component="nav" class="lst_qna" aria-label="list question">
        <template v-slot:items>
          <ListQuestionDesc primary="내 사진을 일촌에게만 공개하고 싶어요" />
          <ListQuestionDesc primary="검색에서 내 정보가 나오지 않았으면 좋겠어요 검색에서 내 정보가 나오지 않았으면 좋겠어요" />
          <ListQuestionDesc primary="친구에게 아이템 선물은 어떻게 하나요?" />
          <ListQuestionDesc primary="BGM 구매는 어떻게 하나요?" />
          <ListQuestionDesc primary="도토리 충전은 얼마까지 가능하나요?" />
          <ListQuestionDesc primary="Today is, 감정상태 변경은 어떻게 하나요?" />
          <ListQuestionDesc primary="내 프로필 변경은 어떻게 하나요?" />
          <ListQuestionDesc primary="Today is, 감정상태 변경은 어떻게 하나요?" />
        </template>
      </ListQuestion>

      <DescLink align="center" mt="23">
        <router-link to="/">더보기</router-link>
      </DescLink>

      <ListGuide mt="24">
        <ListGuideDesc>
          위의 안내 사항 이외에 추가로 궁금하신 사항이 있다면,
          <br />
          1:1 문의하기를 이용해 주세요.
        </ListGuideDesc>
      </ListGuide>

      <Submit align="both">
        <Button large outlined value="내 문의 내역" />
        <Button large value="1:1 문의하기" />
      </Submit>

    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common"
import Title from "@/styles/mobile/common/Title"
import Desc from "@/styles/mobile/common/Desc"
import List from "@/styles/mobile/common/List"
import Header from '@/views/mobile/includes/Header'
import Button from "@/components/Button"
import InputText from '@/components/InputText'

export default {
  name: "CM-main",
  components: {
    Header,
    Button,
    InputText,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  methods : {
    onCloseClick() {
      if(this.$func.postMessage("confirmClose")) {
        this.$router.push('/EM-main')
      }
    },
    onPrevClick() {
      if(this.$func.postMessage("confirmClose")){
        this.$router.go(-1);
      }
    }
  }
}
</script>

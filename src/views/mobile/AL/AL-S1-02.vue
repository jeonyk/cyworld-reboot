<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick" />
    <Contents>
      <H3 class="title_complete">
        <TitleSub>휴면해제 완료</TitleSub>
        <TitleDesc>회원님의 계정이 깨어났습니다.</TitleDesc>
      </H3>

      <DescDefault mt="32">
        <p class="txt_sub">휴면 계정 정보</p>
      </DescDefault>
      <ListInfo mt="20">
        <ListInfoDesc>
          <ListInfoSubTitle>이메일 아이디</ListInfoSubTitle>
          <ListInfoSubDesc>email@cyworld.com</ListInfoSubDesc>
        </ListInfoDesc>
        <ListInfoDesc>
          <ListInfoSubTitle>휴면 해제일</ListInfoSubTitle>
          <ListInfoSubDesc>2016년 11월 24일</ListInfoSubDesc>
        </ListInfoDesc>
      </ListInfo>

      <DescDefault mt="32">
        <p class="txt_sub">안심하세요!</p>
       </DescDefault>

      <DescDefault mt="14">
       내 미니홈피는 아직 다른 사람에게 보이지 않습니다.<br>
       미니홈피 공개 여부를 선택해 주세요.
      </DescDefault>

      <CardList>
        <CardListDesc>
          <CardListLink to="/" :class="onPublic" @click="onPublicClick">
            <CardListSubTitle class="tit_card">전체공개</CardListSubTitle>
            <DescDefault size="small" class="desc_card">
              내 미니홈피를 모두 방문할 수 있습니다.
            </DescDefault>
          </CardListLink>
        </CardListDesc>
        <CardListDesc>
          <CardListLink to="/" :class="onFriend" @click="onFriendClick">
            <CardListSubTitle class="tit_card">일촌 공개</CardListSubTitle>
            <DescDefault size="small" class="desc_card">
              나와 일촌만 내 미니홈피를 방문할 수 있습니다.
            </DescDefault>
          </CardListLink>
        </CardListDesc>
        <CardListDesc>
          <CardListLink to="/" :class="onPrivate" @click="onPrivateClick">
            <CardListSubTitle class="tit_card">비공개</CardListSubTitle>
            <DescDefault size="small" class="desc_card">
              나만 내 미니홈피를 볼 수 있습니다.
            </DescDefault>
          </CardListLink>
        </CardListDesc>
      </CardList>

      <Submit>
        <Button large block value="싸이월드 시작하기" @click="onBtnClick"/>
      </Submit>

    </Contents>
  </Wrap>
</template>

<script>

import Common from "@/styles/mobile/common/Common";
import Title from "@/styles/mobile/common/Title";
import Desc from "@/styles/mobile/common/Desc";
import List from "@/styles/mobile/common/List";
import Button from "@/components/Button";
import Header from '@/views/mobile/includes/Header'

export default {
  name: "AL-S1-02",
  components: {
    Button,
    Header,
    ...Common,
    ...Title,
    ...Desc,
    ...List
  },
  data() {
    return {
      onPublic : 'on',
      onPrivate : ''
    }
  },
  methods: {
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onPrevClick() {
        this.$router.go(-1);
    },
    onPublicClick() {
      this.onPublic = 'on'
      this.onPrivate = ''
      this.onFriend = ''
    },
    onPrivateClick() {
      this.onPublic = ''
      this.onPrivate = 'on'
      this.onFriend = ''
    },
    onFriendClick() {
      this.onPublic = ''
      this.onPrivate = ''
      this.onFriend = 'on'
    },
    onBtnClick() {
      console.log('확인버튼 클릭')
    }
  }
}
</script>

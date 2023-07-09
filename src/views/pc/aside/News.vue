<template>
  <News>
    <TitleBar>
      <h3 class="subtitle">초대 목록</h3>
    </TitleBar>

    <ListNews  class="overflow-y-auto">
      <li v-for="friendReceiving in friendReceivingJson.elements" :key="friendReceiving.did">
        <span class="thumb"><img :src="friendReceiving.profile" alt=""></span>
        <div>
          <p class="desc"><span>{{ friendReceiving.nickname }}</span>님이 일촌 신청을 기다리고 있어요.</p>
        </div>
      </li>

    </ListNews>

  </News>
</template>

<script>
import styled, { css } from 'vue-styled-components';

const News = styled.div`
  ${({ theme }) => {
    const { Margins } = theme;
    return css`
      /* margin-top: ${Margins.base}; */
      overflow: hidden;
      padding: 30px 0 8px;
      height: 470px;
      background-color: #F2ECEA;
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
    `;
  }}
`;

const TitleBar = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      .subtitle{
        padding-left: 20px;
        font-size: 20px;
        font-weight: 700;
        color: ${Colors.text_title};
      }
    `;
  }}
`;

const ListNews = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      width: 266px;
      height: 398px;
      margin-top: 14px;
      padding-left: 8px !important;
      li{
        position: relative;
        width: 254px;
        min-height: 80px;
        padding: 18px 12px 18px 68px;
        &:after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-49%);
          display: block;
          width: calc(100% - 32px);
          height: 1px;
          background-color: #d5d5d5;
        }
        &:hover{
          background-color: ${Colors.hover_gray};
          border-radius: 8px;
        }
        &:last-child:after{
          display: none;
        }
        .thumb{
          overflow: hidden;
          position: absolute;
          left: 8px;
          top: 18px;
          border-radius: 20px;
          img{
            display: block;
            width: 48px;
            height: 48px;
          }
        }

        .desc{
          font-size: 15px;
          font-weight: 300;
          color: ${Colors.text_body};
          span{
            color: ${Colors.text_title};
            font-weight: 400;
          }
        }
      }
    `;
  }}
`;


const styledComponents = {
  News, TitleBar, ListNews,
};

export default {
  components: {
    ...styledComponents,
  },
  created() {
    this.$store.dispatch('cyhome/cylifeFriendReceiving',{page:0})
    this.friendReceivingJson = this.$store.getters.friendReceivingJson
  }
}
</script>

<style lang="scss" scoped>
.overflow-y-auto{
  /* IE, Chrome */
  &::-webkit-scrollbar { width: 4px; } /* 스크롤 바 */
  &::-webkit-scrollbar-track { background-color: #f2ecea; } /* 스크롤 바 밑의 배경 */
  &::-webkit-scrollbar-thumb { background:  rgba(0, 0, 0, 0.2); border-radius: 4px; } /* 실질적 스크롤 바 */
  &::-webkit-scrollbar-thumb:hover { background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
  &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
  &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
  /* FireFox */
  scrollbar-width: thin; /* 스크롤 바 굵기 */
  scrollbar-color: rgba(0, 0, 0, 0.2) #f2ecea; /* 스크롤 바 색상 */
}
</style>

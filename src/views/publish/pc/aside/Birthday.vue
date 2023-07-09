<template>
  <Birthday>
    <TitleBar>
      <h3 class="subtitle">오늘의 일촌 생일</h3>
    </TitleBar>
    <ListBirthday class="overflow-y-auto">
      <ul>
        <li class="date">2021.10.20</li>
        <li>
          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
          <div>
            <p class="desc">큰소히</p>
            <p class="subtitle">so hee han</p>
          </div>
        </li>
        <li>
          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
          <div>
            <p class="desc">오늘도산책갈까?</p>
            <p class="subtitle">닉네임은최대열세자테스트</p>
          </div>
        </li>
        <li>
          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
          <div>
            <p class="desc">노랑이조아</p>
            <p class="subtitle">개나리</p>
          </div>
        </li>
      </ul>
      <ul>
        <li class="date">2021.10.20</li>
        <li>
          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
          <div>
            <p class="desc">큰소히</p>
            <p class="subtitle">so hee han</p>
          </div>
        </li>
        <li>
          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
          <div>
            <p class="desc">오늘도산책갈까?</p>
            <p class="subtitle">닉네임은최대열세자테스트</p>
          </div>
        </li>
        <li>
          <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
          <div>
            <p class="desc">노랑이조아</p>
            <p class="subtitle">개나리</p>
          </div>
        </li>
      </ul>
    </ListBirthday>
  </Birthday>
</template>

<script>
import styled, { css } from 'vue-styled-components';
// import InfiniteLoading from 'vue-infinite-loading'

const Birthday = styled.div`
  ${({ theme }) => {
    const { Margins } = theme;
    return css`
      /* margin-top: ${Margins.base}; */
      overflow: hidden;
      padding: 30px 0 8px;
      height: 350px;
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

const ListBirthday = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      width: 266px;
      height: 272px;
      margin-top: 20px;
      padding-left: 8px !important;
      ul{
        margin-bottom: 20px;
        li{
          position: relative;
          width: 254px;
          min-height: 64px;
          padding: 8px 0 8px 68px;
          &:first-child{
            border-top: 0;
          }
          &:hover{
            background-color: ${Colors.hover_gray};
            border-radius: 8px;
            cursor: pointer;
          }
          &.date{
            display: block;
            min-height: 0;
            margin-bottom: 8px;
            padding: 0 0 0 12px;
            font-size: 12px;
            color: ${Colors.text_disabled};
            &:hover{
              background-color: transparent;
            }
          }
          .thumb{
            overflow: hidden;
            position: absolute;
            left: 8px;
            top: 8px;
            border-radius: 20px;
            img{
              display: block;
              width: 48px;
              height: 48px;
            }
          }

          .subtitle{
            max-width: 165px;
            font-size: 15px;
            font-weight: 400;
            color: ${Colors.text_title};
            white-space: nowrap;
            /* overflow: hidden;
            text-overflow: ellipsis; */
          }
          .desc{
            padding-top: 5px;
            font-size: 13px;
            font-weight: 400;
            color: ${Colors.text_body};
          }
        }
      }
      
    `;
  }}
`;

const styledComponents = {
  Birthday, TitleBar, ListBirthday,
};

export default {
  components: {
    ...styledComponents,
    // InfiniteLoading
  },
  data() {
    return {
      birth: {
        currentPage: 0,
        hasNext: true,
        keys: [],
        list: {}
      }
    }
  },
  created() {
    if(this.birth.hasNext) {
      this.$store.dispatch('cyhome/cylifeFriendBirth',{ page: this.birth.currentPage }).then(()=> {
        for(let i = 0; i < this.$store.getters.friendBirthJson.elements.length; i++) {
          let element = this.$store.getters.friendBirthJson.elements[i];
          if (this.birth.list[element.date] === undefined) {
            this.birth.list[element.date] = [];
          }
          this.birth.list[element.date].push(element);
        }
        this.birth.hasNext = this.$store.getters.friendBirthJson.slice.hasNext;
        this.birth.currentPage += 1;
        this.birth.keys = Object.keys(this.birth.list);
      });
    }
  },
  methods: {
    infiniteFriendBirthDay($state) {
      if(this.birth.hasNext) {
        this.$store.dispatch('cyhome/cylifeFriendBirth',{ page: this.birth.currentPage }).then(()=> {
          $state.loaded();
          for(let i = 0; i < this.$store.getters.friendBirthJson.elements.length; i++) {
            let element = this.$store.getters.friendBirthJson.elements[i];
            if (this.birth.list[element.date] === undefined) {
              this.birth.list[element.date] = [];
            }
            this.birth.list[element.date].push(element);
          }
          this.birth.hasNext = this.$store.getters.friendBirthJson.slice.hasNext;
          this.birth.currentPage += 1;
          this.birth.keys = Object.keys(this.birth.list);
          if(!this.$store.getters.friendBirthJson.slice.hasNext) {
            $state.complete()
          }
        });
      } else {
        $state.complete()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overflow-y-auto{
  /* IE, Chrome */
  &::-webkit-scrollbar { width: 4px; } /* 스크롤 바 */
  &::-webkit-scrollbar-track { background-color: transparent; } /* 스크롤 바 밑의 배경 */
  &::-webkit-scrollbar-thumb { background:  rgba(0, 0, 0, 0.2); border-radius: 4px; } /* 실질적 스크롤 바 */
  &::-webkit-scrollbar-thumb:hover{ background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
  &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
  &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
  /* FireFox */
  scrollbar-width: thin; /* 스크롤 바 굵기 */
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent; /* 스크롤 바 색상 */
}
</style>
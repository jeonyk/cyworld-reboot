<template>
  <Profile class="profile">
    <Avatar>
      <AvatarImage>
        <span v-for="(data, index) in this.$store.getters.profileJson.arrayMinimeUrl" :key="data" :class="minimi[index]" >
          <img v-if="data" :src="data" alt="">
        </span>
      </AvatarImage>
      <img :src="this.$store.getters.profileJson.feelUrl" class="img_feeling" alt="">
    </Avatar>
    <UserInfo>
      <h3 class="name">{{ this.$store.getters.profileJson.nickname }}</h3>
      <p class="desc">싸이월드와 만난지 <span class="num">{{ this.$store.getters.profileJson.daySinceCyMet }}</span>일째</p>
    </UserInfo>

    <ListToday>
      <li>
        <span class="subtitle">오늘의 방문자 수</span>
        <router-link to="/" class="desc">{{ this.$store.getters.profileJson.visitCount }}</router-link>
      </li>
      <li>
        <span class="subtitle">일촌 신청
          <i class="new ir" v-if="this.$store.getters.profileJson.requestFriendCount > 0">new</i>
        </span>
        <router-link to="/pc/LR-receive" class="desc">{{ this.$store.getters.profileJson.requestFriendCount }}</router-link>
      </li>
    </ListToday>

    <ListLink class="link">
      <li class="link_mini"><router-link to="/pc/MH-Main">내 미니홈피</router-link></li>
      <li class="link_random"><router-link to="">랜덤 파도타기</router-link></li>
    </ListLink>
  </Profile>
</template>

<script>
import styled, { css } from 'vue-styled-components';
import Common from '@/styles/pc/common/Common';

const Profile = styled.div`
  ${({ theme }) => {
    const { Margins } = theme;
    return css`
      position: sticky;
      top: 88px;
      /* margin-top: ${Margins.base}; */
      padding: 0 0 8px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
    `;
  }}
`;

const Avatar = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      height: 180px;
      background-color: ${Colors.cy_blue};
      .img_feeling{
        display: block;
        position: absolute;
        top: 12px;
        right: 11px;
        width: 30px;
        height: 30px;
      }
    `;
  }}
`;

const UserInfo = styled.div`
  ${({ theme }) => {
    const { Colors, } = theme;
    return css`
      padding: 24px 16px 19px;
      text-align: center;
      .name{
        font-size: 20px;
        color: ${Colors.gray_title};
      }
      .desc{
        padding-top: 10px;
        font-size: 14px;
        color: ${Colors.text_subbody};
        .num{
          color: ${Colors.cy_orange_vari};
        }
      }
    `;
  }}
`;


const ListToday = styled.ul`
  ${({ theme }) => {
    const { Colors, } = theme;
    return css`
      margin: 0 16px;
      padding: 24px 0;
      text-align: center;
      border-top: 1px dashed ${Colors.gray_silver};
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        &:first-child{
          margin-top: 0;
        }
        .subtitle{
          font-size: 15px;
          font-weight: 400;
          color: ${Colors.gray_title};
          .new{
            display: inline-block;
            margin-left: 4px;
            vertical-align: middle;
            width: 14px;
            height: 14px;
            background: url('/img/svg/bullet_new.svg') no-repeat 0 0 /14px;
          }
        }
        .desc{
          font-size: 15px;
          font-weight: 400;
          color: ${Colors.cy_orange_vari};
        }
      }
      
    `;
  }}
`;

const ListLink = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
    /* margin-top: 23px; */
    padding: 0 16px !important;
      li{
        padding: 16px 0;
        border-top: 1px dashed ${Colors.gray_silver};
        &:first-child{
          /* border-top: 0; */
        }
        a{
          display: block;
          position: relative;
          padding-left: 44px;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
          font-weight: 700;
          color: ${Colors.gray_title};
          background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px;
          &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 36px;
            height: 36px;
            line-height: 36px;
            border-radius: 14px;
            background: #3c3c3c url('/img/svg/ico_hompy_white.svg') no-repeat 50% 50% /36px;
          }
        }
        &.link_random{
          a{
            &::before{
              background: #3c3c3c url('/img/svg/ico_wave_white.svg') no-repeat 50% 50% /24px;
            }
          }
        }
      }
    `;
  }}
`;

const styledComponents = {
  Profile, UserInfo, ListToday, ListLink, Avatar,
};

export default {
  components: {
    ...Common,
    ...styledComponents,
  },
  created() {
    this.$store.dispatch('cyhome/cylifeProfile')
  },
  data() {
    return {
      minimi : [
        'body',
        'hair',
        'dressup',
        'dressdown',
        'acc'
      ]
    }
  }
}
</script>

<style>

</style>
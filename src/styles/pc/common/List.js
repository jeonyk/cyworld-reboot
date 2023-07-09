import styled, { css } from 'vue-styled-components';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';


const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'listtype'
];

// 오늘의 추천 친구
const FriendsToday = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      padding: 50px 4px 0;
      & + .v-window .web{
        margin: 0 -10px;
        .v-slide-group__content{
          margin-left: 10px;
        }
      }
      h3{
        padding: 0;
      }
      ${Space};
    `;
  }}
`;

const ListFriendsToday = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      display: flex;
      justify-content: space-between;
      margin-top: 36px;
      li{
        width: 100px;
        text-align: center;
        margin-right: 28px;
        &:nth-child(6n){
          margin-right: 0;
        }
        a{
          display: block;
        }
        .thumb{
          overflow: hidden;
          display: block;
          width: 100px;
          height: 100px;
          border-radius: 42px;
          img{
            display: block;
            width: 100px;
            height: 100px;
          }
        }
        .name{
          display: block;
          padding-top: 16px;
          font-size: 16px;
          color: ${Colors.text_title};
          letter-spacing: -0.5px;
        }
      }

      ${Space};
    `;
  }}
`;

// 일촌 / 즐겨찾기
const FriendsBest = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      margin-top: 32px;
      /* padding: 24px 10px 20px; */
      background-color: #fff;
      border-radius: 18px;    
      ${Space};
      & > .input_search{
        display: none;
        padding: 0 20px;
        .styled_input{
          .v-input__control{
            .v-input__slot{
              background-color: #fff !important;
              border: 1px solid #e5e5e5;
              &:hover{
                background-color: #fff !important;
              }
            }
          }
        }
      }
    `;
  }}
`;

const ListFriendsBest = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      /* padding-top: 24px; */
      /* background-color: #F6F6F6; */
      /* border-radius: 18px; */
      
      li{
        position: relative;
        display: flex;
        margin-top: 10px;
        background: #FFFFFF;
        /* line/black_12 */

        border: 1px solid rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        border-radius: 18px;
        &:first-child{
          margin-top: 0;
        }
        &.grayscale {
          /* Firefox 10+, Firefox on Android */
          filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
          /* IE 6-9 */
          filter: gray;
          /* Chrome 19+,  Safari 6+, Safari 6+ iOS, Opera 15+ */
          -webkit-filter: grayscale(100%);

          .title_list{
            .relation{
              color: ${Colors.text_subbody};
            }
            .nick{
              color: rgba(0,0,0,0.4);
            }
            .state{
              color: rgba(0,0,0,0.4);
            }
          }
        }
        .flag{
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          width: 72px;
          height: 72px;
          font-size: 0;
          background-size: 100%;
          &.popular{
            background-image: url('/img/svg/flag_popular.svg');
          }
          &.update{
            background-image: url('/img/svg/flag_update.svg');
          }
          &.sleep{
            background-image: url('/img/svg/flag_sleep.svg');
          }
        }
        .avata{
          width: 178px;
          height: 178px;
          /* img{
            display: block;
            width: 178px;
            height: 178px;
          } */
        }
        .title_list{
          > span{
            display: block;
          }
          .relation{
            padding-top: 40px;
            font-size: 17px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
          .nick{
            padding-top: 3px;
            font-size: 20px;
            font-weight: 400;
            color: ${Colors.text_subtitle};
          }
          .state{
            padding-top: 29px;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_subbody};
          }
        }
        .etc{
          position: absolute;
          top: 43px;
          right: 30px;
          font-size: 0;
          
          .emotion{
            display: block;
            width: 45px;
            height: 45px;
            background-size: 100%;
            img{
              display: block;
              width: 45px;
              height: 45px;
            }
            &.sunny{
              background-image: url('/img/img_complete_3x.png');
            }
          }
          .pin{
            display: block;
            width: 45px;
            height: 45px;
            margin-top: 10px;
            background-image: url('/img/svg/ico_pin_on.svg');
            background-position: center center;
          }
        }
      }
      ${Space};
    `;
  }}
`;

// 오늘의 일촌 생일
const ListBirthday = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      li{
        position: relative;
        padding: 15px 0 15px 58px;
        &:first-child{
          border-top: 0;
        }
        &:hover{
          background-color: ${Colors.hover_gray};
        }
        .thumb{
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 15px;
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
          font-size: 13px;
          font-weight: 400;
          color: ${Colors.text_body};
        }

        .btn_area{
          padding-top: 7px; 
          button.v-btn--outlined{
            background-color: #fff;
          }
          button + button{
            margin-left: 5px;
          }
        }
      }

      /* header: 일촌 생일 */
      &.lst_birthday{
        padding: 0 16px;
        max-height: 456px;
        li{
          &:hover{
            background-color: #fff !important;
          }
        }
      }
    `;
  }}
`;

/* header: 일촌 생일 outer */
const ListOuter = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      margin-top: 24px;
      width: 336px;
      max-height: 470px;
      .date{
        margin: 23px 0 7px;
        padding: 0 20px;
        font-size: 12px;
        color: ${Colors.text_subbody};
        &:first-child{
          margin-top: 0;
        }
      }
    `;
  }}
`;
// header: 반가운 소식
const ListNotice = styled(List)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      padding: 0 0px 0 8px !important;
      width: 336px;
      max-height: 430px;
      /* background-color: ${Colors.cy_orange}; */
    `;
  }}
`;

const ListNoticeDesc = styled(ListItem)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      &.styled_item.v-list-item{
        position: relative;
        padding: 16px 20px 14px 68px;
        width: 324px;
        font-size: 14px;
        color: ${Colors.gray_title};
        font-weight: 400;
        background-image: none;
        border-radius: 0px;
        &:hover{
          background-color: #f6f6f6;
        }
        &.new{
          &::before{
            content: '';
            position: absolute;
            left: 56px;
            top: 16px;
            margin-right: -5px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: ${Colors.cy_orange};
            opacity: 1;
          }
        }
        
        .thumb{
          overflow: hidden;
          position: absolute;
          left: 8px;
          top: 14px;
          width: 48px;
          height: 48px;
          border-radius: 20px;
          img{
            display: block;
            width: 48px;
            height: 48px;
          }
        }
        .subtitle{
          font-size: 15px;
          font-weight: 300;
          color: ${Colors.text_body};
          line-height: 18px;
          b{
            font-weight: 400;
            color: ${Colors.text_title};
          }
        }
        .state{
          padding-top: 6px;
          font-size: 12px;
          font-weight: 300;
          color: ${Colors.text_disabled};
        }

        .v-ripple__container{
          .v-ripple__animation{
            background-color: #000;
            opacity: 0.02 !important;
          }
        }  
      }
    `;
  }}
`;

// 오늘의 반가운 소식
const ListNews = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      height: 100%;
      padding-top: 16px;
      li{
        position: relative;
        padding: 13px 0 13px 58px;
        border-top: 1px solid #d5d5d5;
        &:first-child{
          border-top: 0;
        }
        .thumb{
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 15px;
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

        .btn_area{
          padding-top: 7px;
          button{
            min-width: 0 !important;
            height: auto !important;
            padding: 0 !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            &.btn_accept{
              position: relative;
              margin-right: 17px;
              color: ${Colors.cy_orange_vari} !important;
              &:after{
                content: '';
                position: absolute;
                top: 50%;
                right: -9px;
                transform: translateY(-50%);
                display: block;
                width: 1px;
                height: 10px;
                background-color: #d4d4d4;
              }
              &.v-btn--disabled{
                padding: 6px !important;
                font-size: 12px !important;
                background-color: rgba(243, 107, 43, 0.12);
                border-radius: 4px;
                &:after{
                  display: none;
                }
              }
            }
            &.btn_refuse{
              color: ${Colors.text_subbody} !important;
              &.v-btn--disabled{
                padding: 6px !important;
                font-size: 12px !important;
                background-color: #e5e5e5;
                border-radius: 4px;
                &:after{
                  display: none;
                }
              }
            }
            &.cy--text{
              .v-ripple__container{
                .v-ripple__animation{
                  opacity: 0 !important;
                }
              }
            }
          }
        }
      }
      
      /* header: 초대 */
      &.lst_invite{
        margin-top: 33px;
        padding: 0 0 0 16px;
        width: 336px;
        max-height: 461px;
        li{
          width: 308px;
          border-color: #eee;
        }
      }
    `;
  }}
`;

/* header: 일촌 생일 blank */
const ListBlank = styled('div', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      padding: 96px 0 80px;
      width: auto;
      text-align: center;
      background: url('/img/gif/img_ani_sadminime_3x.gif') no-repeat 50% 0px /72px;
      border-top: 1px solid #e5e5e5;
      .msg{
        padding: 0 20px;
        font-size: 16px;
        font-weight: 400;
        color: ${Colors.text_subbody};
      }
      &.blank_search{
        margin-top: 0px;
        padding: 60px 0;
        background-image: none;
      }
      ${Space};
      /* header - 반가운소식, 초대, 일촌생일 */
      &.blank_news{
        margin-top: 118px;
      }
      &.blank_invite{
        margin-top: 170px;
      }
      &.blank_birthday{
        margin-top: 170px;
      }

      /* 싸이생활 메인 탭 (일촌, 즐겨찾기) */
      &.blank_cylive{
        padding: 144px 0 0;
        text-align: center;
        background: url('/img/temp_hello.gif') no-repeat 50% 48px /72px;
        border-top: 0;
        .subtitle{
          font-size: 16px;
          color: ${Colors.cy_orange};
        }
        .msg{
          margin: 9px 0 29px;
          font-size: 14px;
          color: ${Colors.text_subtitle};
        }
        .btn_area{
          margin-bottom: 74px;
          a{
            display: inline-block;
            width: 224px;
            height: 50px;
            font-size: 14px;
            line-height: 50px;
            text-align: left;
            border-radius: 12px;
            box-sizing: border-box;
            &.kakao{
              padding-left: 56px;
              color: ${Colors.text_subtitle};
              background: #fae100 url('/img/invite_kakao.png') no-repeat 12px 50%;
            }
            &.invite{
              margin-left: 8px;
              padding-left: 78px;
              color: #fff;
              background: #666 url('/img/svg/invite_chain.svg') no-repeat 44px 50%;
            }
          }
        }
      }

      /* 일촌신청 */
      &.blank_receive{
        padding-top: 208px;
        height: 368px;
        text-align: center;
        background-position: center 112px;
        border-top: 0;
        .subtitle{
          font-size: 16px;
          color: ${Colors.text_body};
        }
        .msg{
          margin: 9px 0 29px;
          font-size: 14px;
          color: ${Colors.text_subbody};
        }
      }

      /* 일촌목록 */
      &.blank_friend{
        border-top: 0;
        padding: 173px 0 85px;
        background-position: 50% 85px;
      }

      /* 미니홈피 우측 사이드 탭 (일촌, 즐겨찾기) */
      &.blank_aside_search{
        height: 511px;
        margin-top: 0;
        padding: 60px 0;
        background-position: 50% calc(50% - 92px);
        border-top: 0;
        p{
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          font-size: 15px;
          font-weight: 300;
          color: ${Colors.text_body};
        }
      }

      /* 미니홈피 메인 일촌평 */
      &.blank_friends_say{
        padding: 320px 0 248px;
        background: url('/img/temp_blank_friends.png') no-repeat 50% 116px /180px;
        border-top: 0;
        .subtitle{
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_body};
        }
        .msg{
          margin: 9px 0 0;
          font-size: 14px;
          font-weight: 300;
          color: ${Colors.text_subbody};
        }
      }
      /* 쥬크박스 */
      &.blank_jukebox{
        height: 666px;
        padding: 344px 0 248px;
        text-align: center;
        background: url('/img/gif/img_ani_music.gif') no-repeat 50% 140px /180px;
        border-top: 0;
        .subtitle{
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_body};
        }
        .msg{
          margin: 9px 0 29px;
          font-size: 14px;
          font-weight: 300;
          color: ${Colors.text_subbody};
        }
        .v-btn.cy_blue--text{
          min-width: 200px;
          box-sizing: border-box;
        }
      }

      &.blank_guestbook{
        border: 0;
        margin: 98px 0 328px;
        padding-top: 96px;
        .msg{
          line-height: 16px;
          font-weight: 400;
          color: ${Colors.text_body};
        }
      }
      &.blank_reply{
        border: 0;
        margin: 108px 0 156px;
      }

      /* 사진첩 */
      &.blank_gallery{
        border: 0px;
        margin: 69px 0 0;
        padding: 69px 0 0;
        .msg{
          font-weight: 400;
          color: ${Colors.text_body};
          margin-top: 24px;
        }
      }

      /* 다이어리 */
      &.blank_diary{
        padding: 164px 0 22px;
        border-top: 0;
        background-position: 50% 76px;
        .msg{
          //margin-top: 164px;
        }
      }

      /* 다이어리 공유 멤버 목록 */
      &.blank_diary_share_member{
        border-top: 0;
        background-position: 50% 120px;
        padding: 211px 0 0 0;
        margin-right: 15px;
        p{
          font-size: 16px;
          color: ${Colors.text_subbody};
          font-weight: 400;
        }
      }

      /* 더보기(도토리) */
      &.blank_history{
        margin: 112px 0 268px;
        border-top: 0;
        &.gift{
          margin: 112px 0 224px;
        }
        p{
          font-size: 16px;
          color: ${Colors.text_body};
          font-weight: 400;
        }
      }
    `;
  }}
`;
      
// 일촌신청
const FriendsRequest = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      margin-top: 32px;
      ${Space};
    `;
  }}
`;

const ListFriendsRequest = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      border-top: 1px solid #eee;
      
      li{
        position: relative;
        display: flex;
        padding: 20px 0;
        background: #FFFFFF;
        /* line/black_12 */

        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        &:first-child{
          margin-top: 0;
        }
        .link_text{
          width: 480px;
          height: 64px;
          padding: 27px 0 27px 16px;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_body};
          .you{
            padding-left: 35px;
            font-weight: 400;
            color: ${Colors.text_title};
            background: url('/img/svg/ico_chain.svg') no-repeat 5px 50%;
          }
        }
        .thumb{
          border-radius: 32px;
          overflow: hidden;
          img{
            display: block;
            width: 80px;
            height: 80px;
          }
        }
        .btn_area{
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          button{
            &.btn_accept{
              width: 67.5px;
              &.v-btn--disabled{
                width: 140px;
                padding: 6px !important;
                color: ${Colors.cy_orange_vari} !important;
                background-color: rgba(243, 107, 43, 0.12) !important;
                border-radius: 8px;
              }
            }
            &.btn_refuse{
              width: 67.5px;
              &.v-btn--disabled{
                width: 140px;
                padding: 6px !important;
                color: ${Colors.text_subbody} !important;
                background-color: #e5e5e5;
                border-radius: 8px;
              }
            }
          }
        }
        button + button{
          margin-left: 5px;
        }
      }
      ${Space};
    `;
  }}
`;
const ListFriendsGift = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      h4{
        font-size:19px;
        font-weight:400;
        color: ${Colors.text_subtitle};
        padding:32px 0 22px 4px;
        &.null{
          padding-top:16px;
          padding:16px;
        }
      }
      li{
        position: relative;
        display: flex;
        padding: 10px 0;
        background: #FFFFFF;
        box-sizing: border-box;
        margin:0 10px;
        .link_text{
          width: 480px;
          height: 0px;
          padding: 0px 0 0px 16px;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_body};
          line-height:48px;
          .nickname{
            padding-left: 8px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
        }
        .thumb{
          border-radius: 20px;
          overflow: hidden;
          img{
            display: block;
            width: 48px;
            height: 48px;
          }
        }
        .btn_gift{
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);   
        }
      }
      ${Space};
    `;
  }}
`;
// 검색: 친구
const ListFriends = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      border-top: 1px solid #e5e5e5;
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 120px;
        border-bottom: 1px solid #e5e5e5;
        .title_area{
          padding-left: 96px;
          .thumb{
            overflow: hidden;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 80px;
            height: 80px;
            border-radius: 32px;
            img{
              display: block;
              width: 80px;
              height: 80px;
            }
          }
          .desc{
            line-height: 15px;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
          .title_list{
            padding-top: 6px;
            line-height: 18px;
            font-size: 17px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
          .etc{
            padding-top: 12px;
            line-height: 14px;
            font-size: 13px;
            font-weight: 300;
            color: ${Colors.cy_orange_vari};
          }
        }
        .func_area{
          display: flex;
          align-items: center;
          padding-right: 4px;
          .ico_hompy{
            margin-left: 8px;
          }
          .ico_favorite{
            margin-left: 14px;
          }
          .state{
            margin: 0;
            width: 88px;
            text-align: center;
            line-height: 36px;
            font-size: 14px;
            font-weight: 400;
            color: ${Colors.cy_orange_vari};
          }
        }
      }
    `;
  }}
`;

// 검색: 사진
const ListPictures = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      &.small{  // 5단
        li{
          padding: 0;
          margin-right: 5px;
          margin-bottom: 5px;
          &:nth-child(5n - 5){
            margin-right: 0;
          }
          a{
            position: relative;
            width: 152px;
            height: 152px;
            img{
              width: 152px;
              height: 152px;
            }
            .text{
              width: 152px;
              height: 152px;
              line-height: 150px;
              font-size: 70px;
            }
            .desc{
              padding: 0 24px;
            }
          }
        }
      }

      li{
        padding-left: 6px;
        padding-bottom: 6px;
        &:nth-child(3n - 2){
          padding-left: 0;
        }
        &.gallery_more{
          position:relative;
        }

        a{
          display: block;
          position: relative;

          &:before{ // 마우스오버 효과
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.6);
            opacity: 0;
            transition: opacity 0.3s;
          }
          &:hover:before{
            opacity: 1;
          }

          &:hover{
            .desc{
              opacity: 1;
            }
          }
          img{
            display: block;
            width: 256px;
            height: 256px;
          }
          .text{
            display: block;
            width: 256px;
            height: 256px;
            line-height: 254px;
            text-align: center;
            font-size: 120px;
            font-weight: 300;
            color: ${Colors.text_subtitle};
            border: 1px solid #e5e5e5;
          }
          .desc{
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            color: #fff;
            background-color: rgba(0,0,0,0.6);
            opacity: 0;
            transition: opacity 0.3s;
            .nickname{
              margin: 0;
              text-align: center;
              line-height: 20px;
              font-size: 16px;
              font-weight: 400;
            }
            .date{
              margin: 0;
              padding-top: 16px;
              line-height: 14px;
              font-size: 14px;
              font-weight: 300;
            }
          }
        }
        span{
          position:absolute;
          top:15px;
          right:15px;
        }
      }
    `;
  }}
`;

// 검색: 사진
const ListPictures5 = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      /* color: ${Colors.text_title}; */
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;

      li{  
        margin-right: 5px;
        margin-bottom: 5px;
        &:nth-child(5n - 10){
          margin-right: 0;
        }
          &.gallery_more{
            position:relative;
          }
        }
      a{
        position: relative;
        display: block;
        
        &:before{ // 마우스오버 효과
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.6);
          opacity: 0;
          transition: opacity 0.3s;
        }
        &:hover:before{
          opacity: 1;
        }

        img{
          display: block;
          width: 152px;
          height: 152px;
          object-fit: cover; 
          }
        }
        span{
          position:absolute;
          top:15px;
          right:15px;
    
        }
        }
        img{
           width:20px;
          }
        }
    `;
  }}
`;

// search: music titlebar
const TitleBarList = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      height: 42px;
      border-top: 1px solid #e5e5e5;
      /* border-bottom: 1px solid #e5e5e5; */
      li{
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: ${Colors.text_body};
      }
      &.music{
        li{
          &:nth-child(1){
            width: 408px;
          }
          &:nth-child(2){
            margin-left: 40px;
            text-align: left;
            width: 180px;
          }
          &:nth-child(3){
            margin: 0 0 0 24px;
            width: 60px;
          }
          &:nth-child(4){
            margin-left: 8px;
            width: 60px;
          }
        }
        &.chart{
          padding: 0 10px;
        }
      }
      &.music_cate3{
        li{
          &:nth-child(1){
          width: 494px;
          }
          &:nth-child(2){
            width: 222px;
            text-align: left;
          }
          &:nth-child(3){
            padding-right: 10px;
            width: 60px;
          }
        }
      }
      &.music_cate4{
        li{
          &:nth-child(1){
            width: 66px;
            .styled_checkbox .v-input__control .v-input__slot{
              position: relative;
              top: 2px;
              padding-left: 13px;
            }
          }
          &:nth-child(2){
            width: 470px;
          }
          &:nth-child(3){
            /*margin: 0 0 0 24px;*/
            width: 194px;
            text-align: left;
          }
          &:nth-child(4){
            padding-right: 10px;
            width: 60px;
          }
        }
      }
      &.music_cate5{
        li{
          &:nth-child(1){
            width: 66px;
            .styled_checkbox .v-input__control .v-input__slot{
              position: relative;
              top: 2px;
              padding-left: 13px;
            }
          }
          &:nth-child(2){
            width: 410px;
          }
          &:nth-child(3){
           /* margin: 0 0 0 24px;*/
            width: 186px;
            text-align: left;
          }
          &:nth-child(4){
            width: 60px;
          }
          &:nth-child(5){
            margin: 0 10px 0 8px;
            width: 60px;
          }
        }
      }
      ${Space}; 
    `;
  }}
`;

// 검색: 뮤직
const ListMusics = styled.ul`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      border-top: 1px solid #e5e5e5;
      li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        height: 100px;
        border-bottom: 1px solid #e5e5e5;
        .check{
          width: 66px;
          .styled_checkbox .v-input__control .v-input__slot{
            position: relative;
            top: 2px;
            padding-left: 13px;
          }
        }
        .thumb{
          overflow: hidden;
          width: 68px;
          height: 68px;
          border-radius: 0;
          img{
            display: block;
            width: 68px;
            height: 68px;
          }
        }
        .rank{
          width: 62px;
          padding-left: 16px;
          box-sizing: border-box;
          text-align: center;
          font-size: 20px;
          color:#666666;
          font-weight: 300;
        }
        .title_list{
          padding: 0 0px 0 16px;
          width: 340px;
          .music{
            font-size: 16px;
            font-weight: 400;
            color: ${Colors.text_title};
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .cyworld{
            padding-top: 3px;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
          &.chart{
            width: 303px;
          }
        }
        .player{
          margin-left: 40px;
          width: 180px;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_body};
          &.chart{
            margin-left: 0;
            width: 175px;
          }
        }
        .ico_play, .ico_stop{
          margin: 0 0 0 36px;
        }
        .music-buy{
          margin-left: 20px;
        }
        .btn{
          margin-left: 20px;
          padding: 0 10px !important;
          min-width: 60px !important;
        }
        .state{
          margin-left: 20px;
          margin-bottom: 0;
          text-align: center;
          width: 60px;
          line-height: 36px;
          height: 36px;
          font-size: 14px;
          font-weight: 400;
          color: ${Colors.cy_blue};
        }
        &.playing{
          .title_list p, .player{
            color: ${Colors.cy_blue_vari};
          }
        }
        &.selected{
          background-color: ${Colors.hover_blue};
        }
      }

      &.chart li{
        padding: 0 10px;
      }

      &.music_cate3{
        li{
          padding-left: 10px;
        }
        .title_list{
          width: 375px;
        }
        .player{
          width: 192px;
        }
      }
      &.music_cate4{
        .title_list{
          width: 355px;
        }
        .ico_play, .ico_stop{
          margin: 0 0 0 18px;
        }
      }
      &.music_cate5{
        .title_list{
          width: 290px;
        }
        .player{
          width: 177px;
        }
        .ico_play, .ico_stop{
          margin: 0 0 0 13px;
        }
      }

      // 더보기(도토리) BGM 구매
      &.music_buy{
        li{
          padding-left: 10px;
          .title_list{
            width: 330px;
          }
          .player{
            width: 197px;
          }
          .acorn{
            width: 85px;
            margin-left: 40px;
            font-size: 15px;
            font-weight: 400;
            color: ${Colors.text_subtitle};
            text-align: right;
          }
        }
      }
    `;
  }}
`;

// 방문자수 통계
const VisitCount = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      margin-top: 48px;
      padding: 0 20px;

      .all_total{
        height: 80px;
        margin-bottom: 48px;
        background-color: #f6f6f6;
        border-radius: 12px;
        box-sizing: border-box;
        p{
          position: relative;
          float: left;
          width: calc(50% - 80px);
          margin: 0 40px;
          font-size: 16px;
          font-weight: 400;
          line-height: 80px;
          color: ${Colors.text_body};
          &:first-child:after{
            content: '';
            position: absolute;
            top: 50%;
            right: -40px;
            transform: translateY(-50%);
            display: block;
            width: 1px;
            height: 24px;
            background: #e5e5e5;
          }
          span{
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            font-size: 28px;
            font-weight: 700;
            color: ${Colors.cy_orange};
          }
        }
      }
      .month{
        position: relative;
        width: 214px;
        height: 36px;
        margin: 0 auto;
        h3{
          text-align: center;
          line-height: 36px;
          cursor: pointer;
        }
        span{
          position: absolute;
          top: 0;
          display: block;
          width: 36px;
          height: 36px;
          font-size: 0;
          background-repeat: no-repeat;
          &.btn_prev{
            left: 0;
            background-image: url('/img/svg/ico_add_prev.svg');
            &:hover{
              cursor: pointer;
              background-image: url('/img/svg/ico_add_prev_on.svg');
            }
            &.disabled{
              background-image: url('/img/svg/ico_add_prev_disabled.svg');
              &:hover{
                cursor: default;
              }
            }
          }
          &.btn_next{
            right: 0;
            background-image: url('/img/svg/ico_add_next.svg');
            &:hover{
              cursor: pointer;
              background-image: url('/img/svg/ico_add_next_on.svg');
            }
            &.disabled{
              background-image: url('/img/svg/ico_add_next_disabled.svg');
              &:hover{
                cursor: default;
              }
            }
          }
        }
      }
      .total{
        padding-top: 25px;
        font-size: 18px;
        font-weight: 400;
        color: ${Colors.text_subtitle};
        text-align: right;
        span{
          padding-left: 4px;
          font-size: 20px;
          color: ${Colors.cy_orange};
        }
      }
      ${Space};
    `;
  }}
`;

const ListVisitCount = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      margin-top: 41px;
      border-top: 1px solid #eee;
      color: ${Colors.text_body};
      
      li{
        position: relative;
        padding: 16px 10px;
        font-size: 16px;
        font-weight: 400;
        border-bottom: 1px solid #eee;
        &:first-child{
          margin-top: 0;
        }
        &.today{
          color: ${Colors.cy_orange};
          .date{
            display: inline-block;
            padding-right: 48px;
            background: url('/img/svg/bullet_today.svg') no-repeat 100% 50%;
          }
        }
        .count{
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
        }
      }
      ${Space};
    `;
  }}
`;

const ListMore = styled(List)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      &.styled_list.v-list:not(.v-sheet--outlined){
        overflow: hidden;
        margin-top: 10px;
        padding: 4px 0;
        /* border-top: 1px solid ${Colors.gray_light} !important; */
        width: 164px;
        border-radius: 12px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16);
        .styled_item.v-list-item{
          padding: 14px 16px;
          .v-list-item__title, .v-list-item__subtitle{
            flex: 1 1 100%;
            overflow: visible;
            text-overflow: unset;
            white-space: nowrap;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_subtitle};
          }
        }

        &.lst_myinfo{
          position: fixed;
          margin-top: 8px;
          margin-left: -124px;
        }

        &.lst_more{
          margin-top: -4px;
          width: 108px;
          .styled_item.v-list-item{
            padding: 14px 16px;
            .v-list-item__title, .v-list-item__subtitle{
              flex: 1 1 100%;
              overflow: visible;
              text-overflow: unset;
              white-space: nowrap;
              font-size: 14px;
            }
          }
        }

        &.lst_more_reply{
          margin-top: -14px;
          width: 122px;
        }

        &.lst_more_album{
          margin-top: -8px;
          width: 100px;
        }

        &.lst_more_diary{
          margin-top: -4px;
          width: 100px;
        }
        &.mh_setting{
          margin-top: -4px;
          &.share{ // 2021.12.03 사진첩 퍼가요 메뉴 위치
            margin-top: -8px;
            margin-right: 10px;
          }
          .styled_item.v-list-item{
            .v-list-item__title, .v-list-item__subtitle{
              font-size: 14px;
              font-weight: 300;
            }
            &.invite_kakao{
              position: relative;
              padding-left: 48px;
              &:before{
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                display: block;
                width: calc(100% - 32px);
                height: 1px;
                background-color: #eee;
                opacity: 1;
              }
              &:after{
                content: '';
                position: absolute;
                top: 50%;
                left: 16px;
                transform: translateY(-50%);
                display: block;
                width: 24px;
                height: 24px;
                background: #fae100 url('/img/invite_kakao.png') no-repeat 50% 50% /22px;
                border-radius: 10px;
              }
              &.noline:before{
                display: none;
              }
            }

            &.invite_chain{
              position: relative;
              padding-left: 48px;
              &:after{
                content: '';
                position: absolute;
                top: 50%;
                left: 16px;
                transform: translateY(-50%);
                display: block;
                width: 24px;
                height: 24px;
                background: #666 url('/img/svg/invite_chain.svg') no-repeat 50% 50% /13px;
                border-radius: 10px;
              }
            }
          }
        }
      }
    `;
  }}
`;

const ListMoreDesc = styled(ListItem)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      &.styled_item.v-list-item{
        padding: 12px 16px;
        font-size: 14px;
        color: ${Colors.gray_title};
        font-weight: 400;
        background-image: none;
        &:hover{
          background-color: #f6f6f6;
        }
        .v-ripple__container{
          .v-ripple__animation{
            background-color: #333;
            opacity: 0.02 !important;
          }
        }
      }
    `;
  }}
`;

const ListFriendsSay = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`      
      li{
        position: relative;
        display: flex;
        padding: 24px 0;
        background: #FFFFFF;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        .thumb{
          border-radius: 32px;
          overflow: hidden;
          img{
            display: block;
            width: 80px;
            height: 80px;
          }
        }
        & > div{
          width: 540px;
          margin: 8px 0 0 20px;
          font-weight: 300;
          .nick{
            display: inline-block;
            font-size: 20px;
            color: ${Colors.text_subtitle};
            & > .name{
              display: inline-block;
              margin-left: 6px;
              font-weight: 400;
            }
            &.new{
              padding-right: 18px;
              background: url('/img/svg/bullet_new.svg') no-repeat 100% 50%;
            }
          }
          .content{
            margin: 20px 0;
            font-size: 16px;
            color: ${Colors.text_body};
          }
          .date{
            font-size: 14px;
            color: ${Colors.text_subbody};
          }
        }        
      }
      ${Space};
    `;
  }}
`;

const ListJukeboxInfo = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      padding-left: 224px !important;
      li{
        padding-bottom: 7px;
        text-align: left;
        &:last-child{
          padding-bottom: 0;
        }
        p{
          display: inline-block;
          font-size: 14px;
          font-weight: 300;
          color: ${Colors.text_body};
          &.title{
            width: 96px;
            font-size: 14px !important;
            font-weight: 400;
            color: ${Colors.text_subtitle};
            line-height: normal;
          }
        }
      ${Space};
    `;
  }}
`;

const ListinpoSetting = styled('ul')`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
    position: relative;
      li{
        overflow:hidden;
        font-size:16px; 
        font-weight:400;
        overflow:hidden;
        .inpotxt{
          padding:15px 0;
          float:left;
          font-size:17px;
          color:#1A1A1A;
        }
        .Settingtxt{
          padding: 20px 75px 18px 0;
          font-size:16px;
          color:#666666;
          float:left;
          position:absolute;
          font-weight:400;
          right:0;
          line-height:20px;
        }
        .btn_Setting{
          padding:0 0;
          position:absolute;
          right:0;
          &.v-btn:not(.v-btn--round){
              height:61px;
              min-width:0;
              padding:0
             
            }
          .v-btn__content{
            font-size:14px;
            font-weight:400;
          }
          .v-ripple__container{
            .v-ripple__animation{
              background-color: yellow !important;
              display:none;
            }
          }
        }

        .Settingradio{
          position:absolute;
          right:0;
            .v-input--selection-controls.v-input--radio-group{
              margin-top:13px;
              .v-input__slot{
                margin-bottom:0px;
                .styled_radio label{
                  font-size:15px;
                  font-weight:400;
                  color: ${Colors.text_subtitle};
                }
              }  
            }
          }
        }
      }
      ${Space};
    `;
  }}
`;

const ListDiary = styled('ul')`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      li{
        position: relative;
        height: 159px;
        margin-top: 10px;
        padding: 24px 0;
        border: 1px solid #e5e5e5;
        border-radius: 18px;
        box-sizing: border-box;
        cursor: pointer;
        &:first-child{
          margin-top: 0;
        }
        p{
          display: inline-block;
          vertical-align: top;
          &.date{
            width: 120px;
            height: 111px;
            margin-right: 24px;
            padding-top: 28px;
            text-align: center;
            border-right: 1px dashed #e5e5e5;
            box-sizing: border-box;
            span{
              font-size: 14px;
              color: ${Colors.text_disabled};
              &.num{
                display: block;
                font-family: 'DungGeunMo', sans-serif;
                font-size: 40px;
                color: ${Colors.text_subtitle};
                letter-spacing: -1px;
                line-height: normal;
              }
            }
          }
          &.text{
            position: absolute;
            top: 50%;
            left: 143px;
            transform: translateY(-50%);
            width: 530px;
            font-size: 16px;
            font-weight: 300;
            color: ${Colors.text_body};
            .nick{
              display: block;
              margin-bottom: 12px;
              font-size: 20px;
              font-weight: 400;
              color: ${Colors.text_title};
            }
          }
          &.feel{
            position: absolute;
            top: 50%;
            right: 30px;
            transform: translateY(-50%);
            width: 45px;
            height: 45px;
            & > span{
              margin: 0;
              img{
                width: 100%;
                height: auto;
              }
            }
          }
        }        
      }
      ${Space};
    `;
  }}
`;

const ListDiaryGroup = styled('ul')`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      li{
        display: inline-block;
        img{
          width: 24px;
          height: 24px;
          border-radius: 10px;
          border: 2px solid #fff;
        }
      }
      li+li{
        margin-left: -6px;
      }
      ${Space};
    `;
  }}
`;

// 댓글목록
const GroupReply = styled.div`
  ${({ theme }) => {
    const { Space, Colors  } = theme;
    return css`
      margin-bottom: 24px;
      padding: 12px 16px 24px 24px;
      height: 502px;
      width: calc(100% - 4px);

      &.my{
        .function{
          display: none;
        }
      }
      .blank_reply{
        margin: 92px 0 0;
        padding-top: 90px;
        color: ${Colors.text_body};
      }

      &.friend{ // 일촌평
        height: 549px;
        .items{
          .contents{
            margin-left: 0;
            width: 467px;
          }
        }
      }
      
      /* 다이어리 */
      &.group_diary{
        width: auto;
        height: auto;
        margin: 33px 24px 0;
        padding: 0;
        border-bottom: 1px solid #eee;
      }
      ${Space}; 
    `;
  }}
`;

const CountReply = styled.div`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      margin: 10px 24px 12px;
      padding-left: 28px;
      text-align: left;
      line-height: 24px;
      font-size: 16px;
      font-weight: 300;
      color: ${Colors.text_subtitle};
      background: url('/img/svg/ico_comment.svg') no-repeat 0 50%;
      .num{
        font-weight: 400;
      }
      a{
        display: inline-block;
        font-weight: 400;
        color: ${Colors.cy_blue_vari} !important;
        border-bottom: 1px solid ${Colors.cy_blue_vari};
      }
      &.sympathy{
        background-image: url('/img/svg/ico_like_on.svg')
      }
      ${Space}; 
    `;
  }}
`;

const ListReply = styled('div', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      position: relative;
      text-align: left;
      background-color: #fff;
      margin-top: 30px;
      &:first-child{
        margin-top: 0;
      }
      .items{
        display: flex;
        position: relative;
        color: ${Colors.text_title};

        &.depth2{
          margin-top: 30px;
          margin-left: 58px;
          &:first-child{
            margin-top: 15px;
          }
          &::before{
            content: '';
            position: absolute;
            left: -31px;
            top: 0px;
            width: 16px;
            height: 16px;
            border-left: 1px solid #B3B3B3;
            border-bottom: 1px solid #B3B3B3;
          }
          .contents{
            width: 340px;
          }
        }
      }

      .thumb{
        overflow: hidden;
        width: 48px;
        height: 48px;
        border-radius: 20px;
        img{
          display: block;
          width: 48px;
          height: 48px;
        }
      }

      .contents{
        margin-left: 10px;
        width: 410px;
        .subtitle{
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_title};
          .new{
            display: inline-block;
            margin-left: 4px;
            vertical-align: middle;
            width: 14px;
            height: 14px;
            background: url('/img/svg/bullet_new.svg') no-repeat 50% 50% /14px;
          }
        }
        .datetime{
          display: inline-block;
          vertical-align: middle;
          padding-left: 4px;
          font-size: 14px;
          font-weight: 300;
          color: ${Colors.text_subbody};
        }
        .desc{
          padding-top: 8px;
          font-size: 16px;
          color: ${Colors.text_body};
          .btn_more{
            color: ${Colors.text_disabled};
          }
          .hashtag{
            display: inline-block;
            vertical-align: middle;
            color: ${Colors.cy_blue_vari};
          }
          .notitag{
            display: inline-block;
            padding: 0 6px;
            vertical-align: middle;
            height: 24px;
            line-height: 24px;
            border-radius: 12px;
            background-color: #E5E5E5;
            font-size: 16px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
        }
        .btn_comment{
          position: relative;
          z-index: 1;
          margin-left: -16px;
          &.cy_blue--text{
            color: ${Colors.cy_blue_vari};
          }
        }
      }

      .function{
        flex: 1;
        position: relative;
        text-align: right;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        justify-content: space-between;
        .ico_more{
          position: absolute;
          right: 0;
          top: 0;
          margin-top: -12px;
          margin-right: -12px;
        }
      }

      .more_area{
        padding: 10px 0;
        text-align: center;
        .btn_more{
          color: ${Colors.text_subbody};
        }
      }

      /* 다이어리 */
      &.list_diary{
        margin-top: 0;
        padding: 30px 0 28px;
        border-top: 1px solid #eee;
        .items{
          &.depth2{
            .contents{
              width: 560px;
            }
          }
          .contents{
            width: 628px;
            margin-left: 20px;
            .btn_comment{
              margin-top: 3px;
              color: ${Colors.cy_blue_vari};
            }
          }
          .function{
            right: 4px;
          }
        }        
      }
      ${Space}; 
    `;
  }}
`;


const ListDiaryShareMember = styled('ul')`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      li{
        position: relative;
        display: flex;
        padding-top: 16px;
        padding-right: 15px;
        .thumb{
          overflow: hidden;
          width: 48px;
          height: 48px;
          border-radius: 20px;
          img{
            display: block;
            width: 48px;
            height: 48px;
          }
        }
        .name_area{
          display: table;
          padding-left: 16px;
          text-align: left;
          div{
            display: table-cell;
            vertical-align: middle;
            .desc{
              font-size: 14px;
              font-weight: 300;
              color: ${Colors.gray_body};
            }
            .subtitle{
              max-width: 180px;
              font-size: 16px;
              font-weight: 400;
              color: ${Colors.gray_title};
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .btn_area{
          margin-left: auto;
          padding-top: 6px;
          .v-btn:not(.v-btn--round).v-size--default, .v-btn:not(.v-btn--round).v-size--default{
            font-weight: 400;
          }
          .v-btn--text.cy--text{
            color:${Colors.cy_orange_vari};
          }
        }
      }
      ${Space};
    `;
  }}
`;

const ListHeroes = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      li{
        position: relative;
        width: 249px;
        background-color: #fff;
        border-radius: 12px;
        border: 1px solid #e5e5e5;
        overflow: hidden;
        
        & > a{
          display: block;
          padding: 40px 24px 30px;
          
          .rank{
            position: absolute;
            top: 16px;
            left: 16px;
            padding-top: 28px;
            width: 28px;
            text-align: center;
            line-height: 14px;
            font-family: 'DungGeunMo';
            font-size: 28px;
            font-weight: 400;
            color: #EDB200;
            background: url('/img/svg/ico_rank1.svg') no-repeat 50% 0 / 28px;
            &.first{
              background-image: url('/img/svg/ico_rank1.svg');
              color: #EDB200;
            }
            &.second{
              background-image: url('/img/svg/ico_rank2.svg');
              color: #949494;
            }
            &.third{
              background-image: url('/img/svg/ico_rank3.svg');
              color: #A57136;
            }
          }
          .thumb{
            overflow: hidden;
            margin: 0 auto;
            width: 100px;
            height: 100px;
            border-radius: 40px;
            img{
              display: block;
              width: 100px;
              height: 100px;
            }
          }
          .nickname{
            margin: 30px -24px 40px;
            text-align: center;
            line-height: 19px;
            font-size: 18px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
          .percent{
            overflow: hidden;
            position: relative;
            height: 5px;
            border-radius: 3px;
            background-color: #e5e5e5;
            span{
              position: absolute;
              left: 0;
              top: 0;
              height: 5px;
              width: 0%;
              border-radius: 3px;
              background-color: ${Colors.cy_blue};
            }
          }
          .count{
            margin-top: 12px;
            line-height: 14px;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_subbody};
            .num{
              font-weight: 400;
              color: ${Colors.cy_blue_vari};
            }
          }
          .desc{
            font-size: 15px;
            color: ${Colors.text_body};
            text-align: center;
            word-break: keep-all;
          }
          &.over{
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            background-color: rgba(243, 113, 36, 0.95);
            & > div{
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 100%;
              padding: 0 32px;
              .title{
                font-size: 18px !important;
                font-weight: 400;
                color: #fff;
                line-height: 1.4;
              }
              .desc{
                margin: 28px 0 40px;
                font-size: 16px;
                color: #fff;
                word-break: keep-all;
              }
              .btn_more{
                color: #fff;
                border-bottom: 1px solid #fff;
              }
            }
          }
        }
        &:hover > .over{
          opacity: 1;
        }
      }
      ${Space};
    `;
  }}
`;


//더보기 도토리 충전 내역 메인
const AcornHistoryListTitle = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      display: flex;
      flex-flow:row nowrap;
      align-items: center;
      padding: 31px 26px 20px 4px;
      border-bottom: 1px solid #E5E5E5;
      h3{
        font-size: 22px;
        color: #333333;
      }
      a{
        margin-left: auto;
        font-size: 14px;
        color: #808080;
        position: relative;
        &:after{
          content: '';
          display: block;
          position: absolute;
          width: 7px;
          height: 13px;
          background: url(/img/svg/ico_more_light.svg);
          right:-15px;
          top:2px;
        }
      }
      ${Space};
    `;
  }}
`;

const AcornHistoryList = styled.ul`
  li{
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-top:20px;
    font-size: 14px;
    color: #808080;
    font-weight: 300;
    &:first-child{
      margin-top:32px;
    }

    span,a{
      font-size: 16px;
      color: #333333;
      font-weight: 400;
    }
    span{
      margin-right: 20px;
      &:nth-child(3){
        margin-right:16px;
        position:relative;
        &:after{
            width:1px;
            height:10px;
            right:-9px;
            top:4px;
            content: '';
            position: absolute;
            background-color: #000;
            opacity:12%;
          }    
      }   
    }
    .nickname{
      font-size:14px;
      color:#333333;
    }
    i{
      display: block;
      width: 48px;
      height: 48px;
      border-radius: 20px;
      background-repeat: no-repeat;
      background-position:center;
      margin-right: 10px;
      &.buy{
        background-color:#F6F6F6;
        background-image: url(/img/svg/ico__history_acorn_buy.svg);
      }
      &.gift{
        background-color:rgba(243, 107, 43, 0.08);
        background-image: url(/img/svg/ico__history_acorn_gift.svg);
      }
      &.music{
        background-color:rgba(18, 159, 206, 0.04);
        background-image: url(/img/svg/ico__history_music_buy.svg);
      }
    }
    a{
      margin-left: auto;
      display: block;
      position: relative;
      padding-right: 24px;
      &:after{
        content: '';
        display: block;
        position: absolute;
        width: 7px;
        height: 13px;
        background: url(/img/svg/ico_more_light.svg);
        right:0px;
        top:4px;
      }
    }
  }
`;



const styledComponents = {
  FriendsToday, ListFriendsToday, FriendsBest, ListFriendsBest, ListBirthday, ListNews, ListNotice, ListNoticeDesc, ListOuter, ListBlank, FriendsRequest, ListFriendsRequest, VisitCount, ListVisitCount, ListFriends, ListPictures, ListMusics, TitleBarList, ListMore, ListMoreDesc, ListFriendsSay, ListJukeboxInfo, ListinpoSetting, ListPictures5, ListDiary, ListDiaryGroup, GroupReply, CountReply, ListReply, ListDiaryShareMember, ListHeroes,
  AcornHistoryListTitle, AcornHistoryList, ListFriendsGift,
};

export default styledComponents;

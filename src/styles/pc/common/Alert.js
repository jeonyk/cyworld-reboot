import styled, { css } from 'vue-styled-components';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'align', 'bg', 'pl'
];


const GiftSelecterBox = styled('div', props)` 
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      padding: 15px 20px 20px;
      border-radius: 18px;
      background-color: #FDEDE5;
      border: 1px solid #F36B2B;
      position: relative;
      &>p{
        font-family: 'DungGeunMo', sans-serif;
        font-size: 30px;
        color: #F36B2B;
        text-align: left;
      }

      &.history{ // 더보기(도토리)
        position: relative;
        &>p{
          font-size: 24px;
        }
        &>span{
          position: absolute;
          top: 25px;
          right: 20px;
          color: ${Colors.text_subbody};
        }
      }
      ${Space};
    `;
  }}
`;

const GiftProfileBox = styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      text-align: center;
      margin-top: -27px;
      &>span{
        display: block;
        margin: auto;
        width: 100px;
        height: 100px;
        border-radius: 42px;  
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .g-relation{
        font-size: 16px;
        color: ${Colors.text_body};
        font-weight: 400;
        padding-top: 13px;
      }
      .g-nick{
        font-size: 20px;
        color: ${Colors.text_title};
        font-weight: 400;
        padding-top: 4px;
        padding-bottom: 12px;
      }

      &.history{ // 더보기(도토리)
        &>span{
          margin: 40px auto 0;
        }
        .g-relation{
          padding-top: 21px;
        }
        .g-nick{
          padding-bottom: 20px;
          font-weight: 300;
          color: ${Colors.text_body};
          span{
            font-weight: 400;
            color: ${Colors.text_title};
          }
        }
      }
      ${Space};
    `;
  }}
`;

const GiftAcornBox= styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      border-top: 1px dashed rgba(0, 0, 0, 0.12);
      padding-top: 13px;
      margin: 0 4px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.9);
      .medium{
        .styled_input.v-text-field--filled .v-input__control .v-input__slot{
          height: 50px;
        }
        &.input_error .v-input__icon{margin-right:0px;}
        &.input_success .v-input__icon{margin-right:0px;}
      }

      &.history{ // 더보기(도토리)
        padding-top: 18px;
        p{
          position: relative;
          padding-left: 30px;
          font-weight: 300;
          color: ${Colors.text_subtitle};
          text-align: left;
          background: url('/img/svg/ico_acorn_illust.svg') no-repeat 0 0 /24px;
          &>b{
            font-weight: 400;
          }
          &>span{
            position: absolute;
            top: -6px;
            right: 0;
            font-size: 20px;
            font-weight: 400;
            line-height: normal;
            color: ${Colors.cy_orange};
            &>b{
              position: relative;
              top: 1px;
              left: -1px;
              font-size: 26px;
              font-weight: 400;
              letter-spacing: -0.025rem;
            }
          }
        }
      }
      ${Space};
    `;
  }}
`;

const GiftExplan = styled('ul', props)`
  ${({theme}) => {
    const { Space } = theme;
    return css`
      margin-top: 13px;
      margin-bottom: 7px;
      &>li{
        text-align: left;
        font-size: 13px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.7);
        padding: 0 0 6px 8px;
        position: relative;
        &::before{
          content:'';
          display: block;
          position: absolute;
          top:9px;
          left:0;
          margin-top:-3px;
          width:3px;
          height:3px;
          background-color: rgba(0, 0, 0, 0.38);
          border-radius: 1.5px;
        }
      }
      ${Space};
    `;
  }}
`;


const RelationProfile = styled('div', props)`
  ${({theme}) => {
    const { Space } = theme;
    return css`
      padding-top: 11px;
      &>span{
        display: block;
        margin: auto;
        width: 100px;
        height: 100px;
        border-radius: 42px;  
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      &>p{
        padding: 20px 39px 36px;
        word-break: break-all;
        font-size: 18px;
        font-weight: 300;
        color:#666666;
        span.chain{
          display: inline-block;
          width:28px;
          height: 18px;
          background-image: url(/img/svg/ico_chain.svg);  
          background-position: left 4px;
        }
        span.you{
          color:#1a1a1a;
          font-weight: 400;
        }
      }
      ${Space};
    `;
  }}
`;

const RelationButtons = styled.div`
  &>button:first-child{
    margin-right: 8px;
  }
`;

// 공지용 팝업
const NoticePopup = styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      .swiper{
        .swiper-slide{
          img{
            display: block;
            width: 400px;
            height: 480px;
          }
        }
        .swiper-pagination{
          bottom: 16px;
          height: 10px;
          line-height: 0;
          .swiper-pagination-bullet{
            margin: 0 4px;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: ${Colors.cy_gray};
            opacity: 1;
          }
          .swiper-pagination-bullet-active{
            background-color: ${Colors.cy_orange};
          }
        }
      }
      .v-carousel{
        .v-window__prev, .v-window__next{
          opacity: 0;
        }
        .v-carousel__item{
          img{
            display: block;
            width: 400px;
            height: 480px;
          }
        }
        .v-carousel__controls{
          /* background-color: transparent; */
          .v-btn{
            width: 10px;
            height: 10px;
            background-color: #333;
            .v-btn__content{
              display: none;
            }
            &.v-item--active{
              background-color: ${Colors.cy_orange};;
            }
          }
        }
      }

      .btn_area{
        display: flex;
        position: relative;
        &::before{
          content: '';
          position: absolute;
          left: 244px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 16px;
          background-color: rgba(0, 0, 0, 0.2);
        }
        .v-btn{
          &.gray--text{
            flex: 1;
            padding: 0;
            border-radius: 0;
            .v-btn__content{
              font-size: 16px;
              font-weight: 300 !important;
              color: ${Colors.text_subtitle} !important;
            }
            
            &.btn_today{
              flex: 0 0 244px;
            }
          }
            
        }
      }
      ${Space};
    `;
  }}
`;

// 프로필 카드
const ProfileInfo = styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      display: flex;
      align-items: center;
      position: relative;
      text-align: left;
      .thumb{
        overflow: hidden;
        margin-left: 19px;
        width: 100px;
        height: 100px;
        border-radius: 42px;
        img{
          display: block;
          width: 100px;
          height: 100px;
        }
      }
      .profile{
        padding-left: 24px;
        .desc{
          font-size: 16px;
          color: ${Colors.text_body};
        }
        .subtitle{
          padding-top: 2px;
          font-size: 20px;
          font-weight: 400;
          color: ${Colors.text_title};
        }
      }
      .lst_count{
        display: flex;
        padding-top: 10px;
        li{
          padding-left: 16px;
          font-size: 14px;
          font-weight: 400;
          color: ${Colors.text_body};
          &:first-child{
            padding-left: 0;
          }
          b{
            font-weight: 400;
          }
          .num{
            padding-left: 5px;
            color: ${Colors.cy_orange};
          }
        }
      }
      ${Space};
    `;
  }}
`;
const MiniHompyInfo = styled('div', props)`
  ${({theme}) => {
    const {Space, Colors} = theme;
    return css`
      position: relative;
      text-align: left;
      .subtitle{
        padding: 24px 4px 16px;
        line-height: 19px;
        font-size: 18px;
        font-weight: 400;
        color: ${Colors.cy_blue};
      }
      .desc{
        padding: 0 4px;
        font-size: 15px;
        color: ${Colors.text_body};
      }
      
      .lst_img{
        display: flex;
        padding: 12px 0 16px;
        li{
          overflow: hidden;
          margin-left: 6px;
          border-radius: 12px;
          width: 130px;
          height: 130px;
          &:first-child{
            margin-left: 0;
          }
          img{
            display: block;
            width: 130px;
            height: 130px;
          }
        }
      }
      ${Space};
    `;
  }}
`;
const FuncButtons = styled('div', props)`
  ${({theme}) => {
    const {Space} = theme;
    return css`
      .v-btn{
        min-width: unset !important;
        margin-left: 8px;
        &:first-child{
          margin-left: 0;
        }

        &.btn_gift{
          .v-btn__content{
            flex: 0;
            padding: 5px 0 5px 28px;
            background: url('/img/svg/ico_gift.svg') no-repeat 0 50% /24px;
          }
        }
        &.btn_add{
          .v-btn__content{
            flex: 0;
            padding: 5px 0 5px 28px;
            background: url('/img/svg/ico_add.svg') no-repeat 0 50% /24px;
          }
        }
        &.btn_more{
          .v-btn__content{
            width: 44px;
            height: 44px;
            background: url('/img/svg/ico_more_white.svg') no-repeat 0 50% /44px;
          }
        }
      }
      ${Space};
    `;
  }}
`;

// 일촌 신청
const ProfileRequest = styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      position: relative;
      text-align: center;
      .thumb{
        overflow: hidden;
        margin-left: 19px;
        width: 100px;
        height: 100px;
        border-radius: 42px;
        img{
          display: block;
          width: 100px;
          height: 100px;
        }
      }
      .msg_request{
        padding: 16px 0 24px;
        font-size: 20px;
        font-weight: 300;
        color: ${Colors.cy_orange};
        b{
          font-weight: 400;
          color: ${Colors.text_title};
        }
      }
      
      ${Space};
    `;
  }}
`;
const FormRequest = styled('div', props)`
  ${({theme}) => {
    const { Space } = theme;
    return css`
          
      ${Space};
    `;
  }}
`;

// 신고하기
const SubTitle = styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      text-align: left;
      .subtitle{
        padding: 8px 4px 0;
        font-size: 18px;
        font-weight: 400;
        color: ${Colors.text_title};
      }
      .desc{
        padding: 16px 4px 0;
        font-size: 15px;
        font-weight: 300;
        color: ${Colors.text_body};
      }
      &.done{
        height: 535px;
      }
      ${Space};
    `;
  }}
`;

const ListReport = styled(List, props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      margin-top: 10px;
      margin-left: -24px;
      margin-right: -24px;
      
      ${Space};
    `;
  }}
`;

const ListReportDesc = styled(ListItem)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      display: block;
      position: relative;
      margin: 0;
      padding: 16px 28px !important;
      border: 0;
      border-radius: 0;
      text-align: left;
      background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px !important;
      background-position-x: calc(100% - 24px) !important;
      &::after{     
        content: '';
        position: absolute;
        bottom: 0;
        left: 28px;
        right: 24px;
        height: 1px;
        background-color: #eee;
      }
   
      .v-list-item__title{
        position: relative;
        margin: 0;
        color: ${Colors.text_title} !important;
        z-index: 10;
      }

      &:hover, &:focus, &:active, &.on{
        background-color: #f6f6f6 !important;
      }

      .v-ripple__container{
        .v-ripple__animation{
          background-color: #000;
          opacity: 0.08 !important;
        }
      }
    `;
  }}
`;

// 프로필 사진
const ProfileUploadForm = styled.div`
  height: 300px;
  border: 2px dashed #E5E5E5;
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 24px;
  background: url('/img/svg/ico_plus.svg') 20px no-repeat;
  background-position: center 122px;
  padding-top: 143px;
  p{
    font-size: 16px;
    color: #808080;
    padding-top: 21px;
  }
  input[type=file]{
    display: none;
  }
  &.profile-already{
    padding-top: 60px;
    img{
      width: 140px;
      height: 140px;
      border-radius: 50px;
    }
  }
`;

const ProfileUploadModify = styled.div`
  height: 300px;
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 24px;
  background: #F6F6F6;
  overflow: hidden;
  position: relative;
  img{
    max-width: 402px;
    max-height: 300px;
  }
`;
const ProfilePicSlider = styled.div`
  padding: 0 34px;
  margin-top: 36px;
  margin-bottom: 16px;
  .profile-slider{
    display: flex;
  }
  button{
    margin-top: -6px;
  }
  .v-input__slider{
    width: 230px;
  }
`;

const ProfileCount = styled.span`
  display: inline-block;
  padding-left: 8px;
  font-size: 14px;
  padding-top: 3px;
`;

const ProfileUploadList = styled('ul', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      display: flex;
      justify-content: start;
      ${Space}
  `;
  }}
`;

const ProfileUploadItem = styled.li`
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f6f6f6;
  margin-right: 4px;
  flex-grow: 0;
  flex-shrink:0;
  &:nth-child(4n){
    margin-right: 0;
  }
  &:hover{ 
    cursor: pointer;
  }
  a{
    display: block;
    height:90px;
    background-position: center;
    background-size: cover;/*cover | contain*/
    background-repeat: no-repeat;
  }
  &.active{
    position: relative;
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 9;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(243, 107, 43, 0.8) url('/img/svg/ico_check_white.svg') no-repeat 50% 50%;
      z-index: 2;
    }
  }
  &.selected{    
    border: 3px solid #f36b2b;
    img{
      position: relative;
      top: -3px;
      left: -3px;
      width: calc(100% + 6px);
    }
  }
  &.blank{
    &:hover{
      cursor: default;
    }
  }
  img{
    width: 100%;
  }  
`;

// 쥬크박스
const JukeboxInfo = styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      
      & > div{
        position: relative;
        height: 528px;
        margin-right: -16px;
        padding-right: 16px;
        h3{
          margin: -4px 0 12px;
          padding-left: 4px;
          font-size: 28px;
          letter-spacing: normal;
          color: ${Colors.text_title};
          text-align: left;
        }
        .cover{
          position: absolute;
          img{
            width: 200px;
            border: 1px solid #e5e5e5;
          }
        }
        &.overflow-y-auto{
          &::-webkit-scrollbar { width: 5px; } /* 스크롤 바 */
          &::-webkit-scrollbar-track { background-color: transparent; } /* 스크롤 바 밑의 배경 */
          &::-webkit-scrollbar-thumb { background:  #B3B3B3; border-radius: 4px; } /* 실질적 스크롤 바 */
          &::-webkit-scrollbar-thumb:hover{ background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
          &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
          &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
          /* FireFox */
          scrollbar-width: thin; /* 스크롤 바 굵기 */
          scrollbar-color: #B3B3B3 transparent; /* 스크롤 바 색상 */
        }
      }      
      ${Space};
    `;
  }}
`;

const TextJukeboxInfo = styled('div', props)`
  ${({theme}) => {
    const { Space, Colors } = theme;
    return css`
      margin-top: 24px;
      padding-top: 20px;
      text-align: left;
      border-top: 1px solid #e5e5e5;
      h4{
        margin-bottom: 14px;
        font-weight: 400;
        color: ${Colors.text_subtitle};
      }
      p{
        margin-bottom: 24px;
        line-height: 1.7;
        color: ${Colors.text_body};
        &:last-child{
          margin-bottom: 0;
        }
      }
    ${Space};
    `;
  }}
`;


const FolderList = styled.ul`
  text-align: left;
  padding-top: 3px;
  font-size: 16px;
  font-weight: 300;
  color:#1a1a1a;
  height: 480px;
  &.overflow{
    overflow-y: scroll;
    &::-webkit-scrollbar { width: 5px; } /* 스크롤 바 */
    &::-webkit-scrollbar-track { background-color: transparent; } /* 스크롤 바 밑의 배경 */
    &::-webkit-scrollbar-thumb { background:  #B3B3B3; border-radius: 4px; } /* 실질적 스크롤 바 */
    &::-webkit-scrollbar-thumb:hover{ background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
    &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
    &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
    /* FireFox */
    scrollbar-width: thin; /* 스크롤 바 굵기 */
    scrollbar-color: #B3B3B3 transparent; /* 스크롤 바 색상 */
  }
  &.folderlist-my{
    height: 435px;
  }
  p{
    margin-bottom: 17px;
    padding-left: 4px;
  }
`;
const FolderListItem = styled.li`
  height: 40px;
  vertical-align: text-bottom;
  cursor: pointer;
  margin-bottom: 10px;
  &.selected{
    color:#129FCE;
    font-weight: 400;
  }
  &:before{
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    margin-top:5px;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  &.open:before{
    background-image: url(/img/svg/bullet_diary.svg);
  }
  &.friend:before{
    background-image: url(/img/svg/bullet_diary_friend.svg);
  }
  &.member:before{
    background-image: url(/img/svg/bullet_diary_member.svg);
  }
  &.lock:before{
    background-image: url(/img/svg/bullet_diary_lock.svg);
  }
  
`;

const DiaryCalendarMonth = styled.div`
  font-size: 18px;
  color:rgba(0, 0, 0, 0.9);
  font-weight: 400;
  span{
    display: inline-block;
    width: 36px;
    height: 36px;
    cursor: pointer;
    position: relative;
    top:12px;
    &.prev{
      margin-right: 16px;
      background:url(/img/svg/ico_add_prev.svg) no-repeat;
      &:hover{
        background:url(/img/svg/ico_add_prev_on.svg) no-repeat;
      }
    }
    &.next{
      margin-left: 16px;
      background:url(/img/svg/ico_add_next.svg) no-repeat;
      &:hover{
        background:url(/img/svg/ico_add_next_on.svg) no-repeat;
      }
    }
  }
`;

const DiaryCalendarDate = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  text-align: center;
  li{
    width:56px;
  }
`;

const DiaryCalendarWeek = styled.li`
  margin-top: 44px;
  font-weight: 300;
  color: #808080;
  margin-bottom: 22px;
`;

const DiaryCalendarDay = styled.li`
  font-weight: 400;
  span{
    margin:auto;
    display: block;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border:1px solid transparent;
    border-radius:12px;
    padding-top: 3px;
    position: relative;
    margin-bottom: 14px;
    &.disabled{
      color: #B3B3B3;
      &:hover{
        cursor: default;
      }
    }
    &:hover{
      border:1px solid #129FCE;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
      cursor: pointer;
    }
    &.today{
      background-color: #129FCE;
      border:1px solid #129FCE;
      color:#FFF;
      &:after{
        display: block;
        position: absolute;
        content:'TODAY';
        font-family: 'DungGeunMo', sans-serif;
        top:26px;
        font-size: 12px;
        color:#0C80A7;
      }
    }
  }
  
`;

// 폴더
const TreeMenu = styled.div`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      overflow-x: hidden;
      overflow-y: auto;
      width: 446px;
      height: 420px;
      margin-bottom: 24px;
      .v-treeview{
        padding-left: 8px;
        width: 442px;
        .v-treeview-node{
          border-radius: 8px;
        }

        .v-treeview-node:not(.v-treeview-node--leaf){
          >.v-treeview-node__root{
            >.v-treeview-node__content{
              >.v-treeview-node__label{
                font-size: 16px;
                font-weight: 400;
                color: ${Colors.text_title};
              }
              >.v-treeview-node__prepend{
                display: none;
              }
            }
          }
        }

        .v-treeview-node__root{
          padding: 0;
          border-radius: 8px;
          padding-left: 18px;
          transition: background-color 0.2s;
          &:hover{
            background-color: #f6f6f6;
            &::before{
              display: none;
            }
          }
          &::before{
            border-radius: 8px;
            /* display: none; */
          }
          >.v-treeview-node__level{
            display: none;
          }
          .v-treeview-node__content{
            margin: 0;
            .v-treeview-node__label{
              font-size: 16px;
              font-weight: 300;
              color: ${Colors.text_title};

              .v-icon{
                margin-right: 8px;
              }

              .name_item{
                display: inline-block;
                /* padding-left: 8px; */
                vertical-align: middle;
              }

              .first + .name_item{
                font-weight: 400;
                color: ${Colors.cy_blue_vari};
              }
            }
          }
          .v-treeview-node__toggle{
            position: absolute;
            right: 12px;
            background-image: url('/img/svg/ico_down.svg');
            transform: rotate(0deg);
            &.v-treeview-node__toggle--open{
              transform: rotate(-180deg);
            }
            &::before{
              display: none;
            }
          }
        }
        .v-treeview-node__children{
          .v-treeview-node__root{
            padding-left: 32px;
          }
        }
      }
      
      .v-icon{
        width: 24px;
        height: 24px;
        background: url('/img/svg/ico_folder_default.svg') no-repeat 50% 50% / 24px;
        &.ico_blank{
          display: none;
        }
        &.ico_folder{
          background-image: url('/img/svg/ico_folder_default.svg');
        }
        &.ico_folder_all{
          background-image: url('/img/svg/ico_folder_all.svg');
        }
        &.ico_folder_friend{
          background-image: url('/img/svg/ico_folder_friend.svg');
        }
        &.ico_folder_lock{
          background-image: url('/img/svg/ico_folder_lock.svg');
        }
      }
      
      ${Space}; 
    `;
  }}
`;

// 공감
const GroupSympathy = styled.div`
  ${({ theme }) => {
    const { Space, Colors  } = theme;
    return css`
      margin-bottom: 24px;
      padding: 12px 16px 24px 24px;
      height: 373px;
      width: calc(100% - 4px);

      .blank_reply{
        margin: 65px 0 0;
        padding-top: 204px;
        background: url('/img/temp_blank_reply.png') no-repeat 50% 0 / 180px;
        color: ${Colors.text_body};
      }
      ${Space}; 
    `;
  }}
`;
const ListSympathy = styled('div', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      position: relative;
      text-align: left;
      background-color: #fff;
      margin-top: 16px;
      &:first-child{
        margin-top: 0;
      }
      .items{
        display: flex;
        position: relative;
        color: ${Colors.text_title};
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
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        margin-left: 16px;
        .subtitle{
          display: inline-block;
          margin: 0;
          vertical-align: middle;
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_title};
          
        }
        
        .desc{
          font-size: 16px;
          color: ${Colors.text_body};
          & + .subtitle{
            padding-top: 3px;
          }
        }
        
      }
      ${Space}; 
    `;
  }}
`;

const MonthPick = styled.div`
  .v-date-picker-header{
    position: relative;
    padding: 4px;
    &>button{
      position: absolute;
      width: 35px;
      height: 35px;
      .v-btn__content{
        i{
          font-size: 0;
        }
      }
      &:first-child{
        right:50px;
        background: url(/img/svg/ico_prev.svg) center no-repeat;
      }
      &:last-child{
        right:7px;
        background: url(/img/svg/ico_next.svg) center no-repeat;
      }
    }
    .v-date-picker-header__value{
      width: 80px;
      flex: none;
      .accent--text{
        text-align: left;
        button{
          font-size: 24px;
          color: rgba(0, 0, 0, 0.9);
          cursor: default;
        }
      }
    }
  }
  .v-date-picker-table--month{
    padding: 0;
    height:auto;
    button.v-btn:not(.v-btn--round).v-size--default, .v-btn:not(.v-btn--round).v-size--default{
      min-width:56px;
      width:56px;
      height:40px;
      border-radius: 16px;
      color: #3C3C3C;
      font-size: 15px;
      font-weight: 300;
    }
    button.accent{
      color:#fff !important;
      background-color: #F36B2B !important;
    }
    button.v-date-picker-table__current.v-btn--outlined{
      color: #F36B2B !important;
      caret-color : #F36B2B !important;
    }
    td{
      height:48px;
      &:nth-child(3n){
        text-align: right;
      }
      &:nth-child(3n-2){
        text-align: left;
      }
    }

  }

  // 파도타기 명에의 전당
  &.other{
    .v-date-picker-table--month{
      button.v-date-picker-table__current.v-btn--outlined{
        color: #3c3c3c !important;
        border: 0 !important;
      }
      button.v-btn:not(.v-btn--round).v-size--default:before,
      .v-btn:not(.v-btn--round).v-size--default:before{
        opacity: 0;
      }
    }
  }
`;

//공유 다이어리 멤버목록
const DiarySharePop = styled.div`
  &>p,&>div>p{
    text-align: left;
    padding-left: 4px;
    padding-top: 1px;
    font-size: 16px;
    color: #1A1A1A;
    font-weight: 300;
  }
  &>div>p{
    font-weight: 400;
  }
  .medium{
    padding-right: 20px;
    margin: 13px 0 24px;;
    .styled_input.v-text-field--filled .v-input__control .v-input__slot{
      height: 50px;
    }
  }
`;
const DiaryShareList = styled.div`
  height: 389px;
  &.overflow{
    overflow-y: scroll;
    &::-webkit-scrollbar { width: 5px; } /* 스크롤 바 */
    &::-webkit-scrollbar-track { background-color: transparent; } /* 스크롤 바 밑의 배경 */
    &::-webkit-scrollbar-thumb { background:  #B3B3B3; border-radius: 4px; } /* 실질적 스크롤 바 */
    &::-webkit-scrollbar-thumb:hover{ background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
    &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
    &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
    /* FireFox */
    scrollbar-width: thin; /* 스크롤 바 굵기 */
    scrollbar-color: #B3B3B3 transparent; /* 스크롤 바 색상 */
  }
  &>p{
    font-size: 16px;
    font-weight: 400;
    color: #1A1A1A;
  }
  &>ul+p{
    margin-top: 21px;
  }
`;

//도토리 후원하기 다람쥐
const HeroStoryGiftBackground = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  background-image: url(/img/svg/herostory_gift_back.svg);
  background-repeat: no-repeat;
  background-position-x: center;
  top:-56px;
  left:0;
`;


//도토리 충전하기
const AcornChargeBox = styled.div`
  .charge-input{
    margin-top: -21px;
    .styled_input.v-text-field--filled .v-input__control .v-text-field__details{
      position: absolute;
      top: 58px;
    }
  }
  
`;
const AcornChargeSelect = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 29px;
  p{
    font-size: 16px;
    color: #1A1A1A;
    font-weight: 400;
    text-align: left;
    margin-bottom: 3px;
    &.sub-info{
      position: relative;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 300;
      margin-bottom:0;
      margin-top:8px;
      padding-left: 26px;
      &:before{
        content:'';
        display: block;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background:rgba(0, 0, 0, 0.7);
        position: absolute;
        left:15px;
        top:7px;
      }
    }
    span{
      color:#F36B2B;  
    }
  }
`;
const AcornChargeInfoList = styled.div`
  box-sizing: border-box;
  &.border-right{
    border-right:1px dashed #EEEEEE;
    padding-right: 20px;
    margin-right: 19px;
  }
  label{
    display: flex;
    align-items: center;
    position: relative;
    width: 300px;
    height: 50px;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 12px;
    color:#333333;
    font-size: 14px;
    font-weight: 400;
    padding: 0 20px 0 60px;
    margin-top:8px;
    &.acorn{
      &:before{
        content:'';
        display: block;
        position: absolute;
        background: url(/img/svg/ico_acorn_illust_03.svg) no-repeat;
        width: 24px;
        height: 24px;
        left:20px;
        top:10px;
      }
    }
    &.pay{
      font-size: 16px;
      width: 232px;
      padding: 0;
      text-align: center;
      display: block;
      padding-top: 13px;
    }
    span{
      color:gray;
      margin-left: auto;
    }
  }
  input[type="radio"]{
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
  }
  input[type="radio"]:checked+label {
    border: 1px solid #F36B2B;
    background: rgba(243, 107, 43, 0.08);
    color:#F36B2B;
    span{
      color:#F36B2B;
    }
  }
  .charge{
    margin-top:33px;
    border-top: 1px solid #EEEEEE;
  }
`;
const AcornChargeAD = styled.div`
  margin-top: 30px;
  margin-bottom: 6px;
  img{
    width: 100%;
  }
`;

const AcornChargeDetail = styled.div`
  margin-top: 44px;
  background-image: url(/img/bill_box.png);
  padding: 24px 16px;
`;
const AcornChargeDetailDate = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 33px;
  border-bottom: 1px dashed #E5E5E5;
  box-sizing: border-box;
  i{
    display: block;
    width: 60px;
    height: 60px;
    background-image: url(/img/svg/ico_acorn_illust.svg);
  }
  p{
    font-size: 20px;
    font-weight: 400;
    color: #333333;
    padding-left: 16px;
    text-align: left;
    &.date{
      font-size: 14px;
      font-weight: 300;
      color: #808080;
      margin-top: 1px;
    }
  }
`;
const AcornChargeDetailInfo = styled.div`
  padding: 21px 8px;
  border-bottom: 1px solid #D4D4D4;
  box-sizing: border-box;
  div{
    display: flex;  
    p{
      font-size: 16px;
      font-weight: 300;
      color: #808080;
      &:last-child{
        margin-left:auto;
        font-weight: 400;
        color: #333333;
      }
    }
    &:last-child{
      margin-top: 10px;
    }
  }
`;
const AcornChargeDetailPrice = styled.div`
  display: flex;
  margin-top: 19px;
  p{
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    &:first-child{
      padding-top: 5px;
    }
    &:last-child{
      margin-left:auto;
      color: #F36B2B;
      font-size: 26px;
    }
  }
`;

const styledComponents = {
  GiftSelecterBox, GiftProfileBox, GiftAcornBox, GiftExplan, RelationProfile, RelationButtons, ProfileInfo, MiniHompyInfo, FuncButtons, ProfileRequest, FormRequest, SubTitle, ListReport, ListReportDesc,
  ProfileUploadForm, ProfileUploadModify, ProfilePicSlider, ProfileCount,ProfileUploadList, ProfileUploadItem,
  JukeboxInfo, TextJukeboxInfo,
  FolderList, FolderListItem, DiaryCalendarMonth, DiaryCalendarDate, DiaryCalendarWeek, DiaryCalendarDay,
   TreeMenu, NoticePopup,
  GroupSympathy, ListSympathy,
  MonthPick, DiarySharePop, DiaryShareList, HeroStoryGiftBackground,
  AcornChargeBox, AcornChargeSelect, AcornChargeInfoList,AcornChargeAD, AcornChargeDetail, AcornChargeDetailDate,AcornChargeDetailInfo, AcornChargeDetailPrice,
};

export default styledComponents;

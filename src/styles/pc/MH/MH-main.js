import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

const MhTitle = styled.div`
  display: flex;
  border-bottom: 1px dashed #E5E5E5;
  &.noline{
    position: relative;
    display: block;
    text-align: center;
    border-bottom: 0;
    .title_page{
      padding: 28px 0;
    }
    .ico_back_arrow{
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
    .ico_list{
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const MhSetting = styled.ul`
  margin-left: auto;
  order: 2;
  padding-top: 18px;
  li{
    display: inline-block;
    margin-left: 4px;
  }
  .ico_more.v-btn--fab.v-size--default{
    width: 44px;
    height: 44px;
    border-radius: 16px;
    background: #f6f6f6 url('/img/svg/ico_more_white.svg') no-repeat 50% 50% /44px;
    .v-ripple__container{
      .v-ripple__animation{
        background-color: #3c3c3c;
      }
    }
    .v-btn__content{
      font-size: 0;
    }
  }
`;

const MyToday = styled('div', props)`
  ${({theme}) => {
    const {Space} = theme;
    return css`
      padding: 29px 20px 38px;
      display: flex;
      ${Space};
    `;
  }}
`;

const MyTodayThum = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
  &>div{
    display: block;
    width: 140px;
    height: 140px;
    overflow: hidden;
    border-radius: 50px;
    img{
      width: 140px;
      height: 140px;
    }
  }
  &>button{
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const MyTodayInfo = styled.div`
  margin-top: -1px;
  padding-left: 28px;
`;

const TodayCount = styled('p')`
  ${({theme}) => {
    const {Colors} = theme;
    return css`
      font-family: 'DungGeunMo', sans-serif;
      color: ${Colors.text_subbody};
      font-size: 20px;
      span{
        &.today{
          color: ${Colors.cy_orange_vari};
          &::after{
            content: '';
            display: inline-block;
            margin-left: 7px;
            width: 1px;
            height: 12px;
            background-color: #8e8e8e;
          }
        }
        &.total{
          padding-left: 7px;
        }  
      }
    `;
  }}
`;

const TodayName = styled.p`
  font-size: 28px;
  font-weight: 700;
  padding-top: 6px;
`;

const TodayDesc = styled.p`
  font-size: 16px;
  color:#666;
  padding-top: 7px;
`;

const MyTodayBot = styled('div', props)`
  ${({theme}) => {
    const {Space} = theme;
    return css`
      padding:0 20px 4px;
      display: flex;
      ${Space};
    `;
  }}
`;

const TodayIs = styled.div`
  ${({theme}) => {
    const {Colors} = theme;
    return css`
      font-family: 'DungGeunMo', sans-serif;
      font-size:22px;
      color: ${Colors.cy_blue};
      display: flex;
  `;
  }}
`;
const TodayFeel = styled.div`
  padding-left: 4px;
  font-size: 18px;
  color: #666;
  display: flex;
  .avafeel{
    margin-top: -10px;
  }
`;
const TodayFollower = styled.div`
  ${({theme}) => {
    const {Colors} = theme;
    return css` 
      margin-left: auto;
      order: 2;
      font-size: 18px;
      font-weight: 400;
      margin-top: 3px;
      span{
        font-family: 'DungGeunMo', sans-serif;
        color: ${Colors.cy_blue};
        margin-right: 16px;
        &:last-of-type{
          margin-left: 29px;
          margin-right: 15px;
        }
      }
    `;
  }}
`;

const MhCategory = styled('ul', props)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      height: 183px;
      padding: 12px 0;
      &:before{
        content: '';
        position: absolute;
        left: 50px;
        top: calc(50% - 2px);
        display: block;
        width: calc(100% - 100px);
        height: 0;
        border-bottom: 1px dashed #e5e5e5;
      }
      &:after{
        content: '';
        position: absolute;
        left: calc(50% - 1px);
        top: 20px;
        display: block;
        width: 0;
        height: calc(100% - 40px);
        border-right: 1px dashed #e5e5e5;
      }

      li{
        position: relative;
        float: left;
        width: calc(50% - 40px);
        height: 78px;
        margin: 0 20px;
        padding: 12px 0;
        background-repeat: no-repeat;
        background-position: 0 50%;
        background-size: 54px;
        &.diary{
          background-image: url('/img/svg/ico_cate_diary.svg');
        }
        &.gallery{
          background-image: url('/img/svg/ico_cate_gallery.svg');
        }
        &.jukebox{
          background-image: url('/img/svg/ico_cate_jukebox.svg');
        }
        &.guestbook{
          background-image: url('/img/svg/ico_cate_guestbook.svg');
        }
          .title{
            display: inline-block;
            padding-left: 68px;
            font-family: 'DungGeunMo' !important;
            color: ${Colors.cy_blue};
            font-size: 20px;
            line-height: 54px;
            &.new{
              padding-right: 18px;
              background: url('/img/svg/bullet_new.svg') no-repeat 100% 50%;
            }
          }
          .post{
            position: absolute;
            top: 12px;
            right: 0;
            line-height: 54px;
            span{
              font-size: 16px;
              &.update{
                color: ${Colors.cy_orange_vari};
              }
              &.all{
                position: relative;
                margin-left: 7px;
                padding-left: 7px;
                color: rgba(0, 0, 0, 0.6);
                &:before{
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 2px;
                  display: block;
                  width: 1px;
                  height: 12px;
                  background-color: #bbb;
                  transform: rotate(25deg);
                }
              }
            }
          }
        }
      }
    `;
  }}
`;

const TodayFeelSelect = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.14);
  border-radius: 18px;
  padding: 20px 0 10px 28px;
  width: 450px;
`;

const FeelSelectTitle = styled.p`
  ${({theme}) => {
    const {Colors} = theme;
    return css`
      font-family: 'DungGeunMo', sans-serif;
      color: ${Colors.cy_blue};
      font-size: 18px;
      padding-bottom: 13px;
      margin-right: 28px;
      border-bottom: 1px dashed rgba(0, 0, 0, 0.12);
    `;
  }}
`;

const FeelSelectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 11px;
  margin-right: 4px;
  height: 395px;
  &.weather{
    height: auto;
    padding-bottom: 18px;
  }
  overflow: hidden;
  overflow-y: scroll;
  /* IE, Chrome */
  &::-webkit-scrollbar { width: 4px; } /* 스크롤 바 */
  &::-webkit-scrollbar-track { background-color: #fff; } /* 스크롤 바 밑의 배경 */
  &::-webkit-scrollbar-thumb { background: #B3B3B3; border-radius: 4px; } /* 실질적 스크롤 바 */
  &::-webkit-scrollbar-thumb:hover { background: #999; } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
  &::-webkit-scrollbar-thumb:active { background: #808080; } /* 실질적 스크롤 바를 클릭할 때 */
  &::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
  /* FireFox */
  scrollbar-width: thin; /* 스크롤 바 굵기 */
  scrollbar-color: #B3B3B3 #fff; /* 스크롤 바 색상 */
`;

const FeelSelectItem = styled.li`
  width: 110px;
  padding-left: 45px;
  border-radius: 10px;
  height: 44px;
  margin-right: 32px;
  font-family: 'DungGeunMo', sans-serif;
  font-size: 14px;
  color: #666666;
  cursor: pointer;
  padding-top: 12px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position-x: 10px;
  background-position-y: center;

  .feel-name{
    position: relative;
    top:-10px;
  }
  &:nth-child(3n){
    margin-right: 0;
  }
  &:hover{
    background-color: rgba(18, 159, 206, 0.04);
  }
  &.active{
    border: 2px solid #129FCE;
  }
`;

const MiniRoom = styled.div`
  margin: 0 -10px;
  img{
    width: 100%;
    height: auto;
  }
`;

const WriteFriendsSay = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding: 25px 30px;
  background-color: #f6f6f6;
  border-radius: 18px;

  .thumb{
    margin-right: 20px;
    padding-top: 1px;
    border-radius: 20px;
    overflow: hidden;
    img{
      display: block;
      width: 48px;
      height: 48px;
    }

    & + div{
      flex: auto;
    }
  }
  .styled_input{
    &.v-text-field--filled{
      .v-input__control{
        .v-input__slot{
          min-height: 50px;
          background-color: #fff !important;
          border: 1px solid #eee;
          .v-input__append-inner{
            margin-top: 0;
            .v-icon.mdi-send{
              width: 18px;
              height: 18px;
              background: url('/img/svg/ico_send.svg') no-repeat 100% 50% /18px;
              &:before{
                content: '';
              } 
            }
          }
        }
      }

      &.v-input--is-dirty{
        .v-input__control{
          .v-input__slot{
            .v-input__append-inner{
              .v-icon.mdi-send{
                background-image: url('/img/svg/ico_send_on.svg');
              }
            }
          }
        }
      }
    }
  }
`;

const AvaFeelImg = styled.span`
  display: block;
  width: 45px;
  height: 45px;
  margin-right: 4px;
  margin-top: -10px;
    img{
      width: 100%;
      height: auto;
    }
`;
 

const styledComponents = {
  MhTitle, MhSetting, MyToday, MyTodayThum, MyTodayInfo, TodayCount, TodayName, TodayDesc, MyTodayBot, TodayIs, TodayFollower,
  TodayFeel, TodayFeelSelect, FeelSelectTitle, FeelSelectList, FeelSelectItem,
  MhCategory, MiniRoom, WriteFriendsSay, AvaFeelImg
};

export default styledComponents;

import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

const DiaryChoiceArea = styled.ul`
  padding-top:40px;
  display: flex;
  li{
    .v-btn:not(.v-btn--round).v-size--small{
      border-radius: 12px;
    }
  }
`;

const DiaryFolder = styled.li`
  .v-btn{
    padding: 0 !important;
    .v-btn__content{
      font-size: 18px;
      color:#1A1A1A;
      font-weight: 400;
      &:before{
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url('/img/svg/bullet_diary.svg') no-repeat;
        margin-right: 12px;
      }
      &:after{
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url('/img/svg/ico_down.svg') no-repeat;
        margin-left:7px;
      }
    }
  }
  .open{
    .v-btn__content{
      &:before{
        background: url('/img/svg/bullet_diary.svg') no-repeat;
        width: 16px;
        height: 19px;
      }
    }
  }
  .friend{
    .v-btn__content{
      &:before{
        background: url('/img/svg/bullet_diary_friend.svg') no-repeat;
      }
    }
  }
  .lock{
    .v-btn__content{
      &:before{
        background: url('/img/svg/bullet_diary_lock.svg') no-repeat;
      }
    }
  }
  .member{
    .v-btn__content{
      &:before{
        background: url('/img/svg/bullet_diary_member.svg') no-repeat;
      }
    }
  }

  
`;

const DiaryDate = styled.li`
  margin-left: auto;
  .v-btn__content{
    &:before{
      content: '';
      display: inline-block;
      width: 18px;
      height: 20px;
      background: url('/img/svg/ico_calendar.svg') no-repeat;
      margin-right: 13px;
    }
  }
`;
const DiaryWeather = styled.li`
  margin-left: 8px;
  img{margin-right:13px;}
`;
const DiaryFeel = styled.li`
  margin-left: 8px;
  img{margin-right:13px;}
`;

const DiaryWriteArea = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      height: 400px;
      margin-top: 24px;
      border: 1px solid #eee;
      border-radius: 18px;
    ${Space}  
  `;
  }}
`;

const DiaryListArea = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      &.top{
        height: 452px;
        padding: 40px 10px;
        .folder{
          float: left;
          width: 45.5%;
          height: 100%;
          padding-right: 40px;
          border-right: 1px dashed #e5e5e5;
          p{
            padding-left: 30px;
            font-size: 15px;
            background: url('/img/svg/bullet_diary.svg') no-repeat 4px 0 /16px;
            &.share{
              background: url('/img/svg/bullet_diary_member.svg') no-repeat 0 50% /24px;
            }
            span{
              color: ${Colors.text_subbody};
              &.public{
                position: relative;
                margin-right: 8px;
                padding-right: 10px;                
                color: ${Colors.text_subtitle};
                &:after{
                  content: '';
                  position: absolute;
                  top: 50%;
                  right: 0;
                  transform: translateY(-50%);
                  display: block;
                  width: 1px;
                  height: 10px;
                  background-color: #e5e5e5;
                }
              }
            }
          }
          h3{
            margin-top: 19px;
            font-size: 22px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
        }
        .calendar{
          float: right;
          width: 54.5%;
          margin-top:-10px;
        }
      }
      &.bottom{
        padding: 30px 0;
        .count{
          margin-bottom: 26px;
          padding-left: 32px;
          font-size: 20px;
          font-weight: 300;
          color: ${Colors.text_subtitle};
          background: url('/img/svg/bullet_diary_note.svg') no-repeat 2px 50% /24px;
          span{
            font-weight: 400;
          }
        }
      }
    ${Space}  
  `;
  }}
`;

const DiaryCalendarSelect = styled.div`
  font-family: 'GothicNeoaUni', sans-serif;
  .v-date-picker-header{
    padding-top: 40px;
    padding-bottom: 35px;
    display: block;
    text-align: center;
    .v-date-picker-header__value{
      display: inline-block;
      vertical-align: middle;
      padding-left: 16px;
      padding-right: 16px;
      button{
        color: rgba(0, 0, 0, 0.9);
        font-size: 18px;
        font-weight: 400;
        cursor: default;
      }
    }
    &>button {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      &:first-child{
        background-image: url('/img/svg/ico_add_prev.svg');
      }
      &:last-child{
        background-image: url('/img/svg/ico_add_next.svg');
      }
      .v-btn__content{
        i{
          font-size: 0;
        }
      }
      
    }
  }
  .v-date-picker-table{
    padding: 0;
    height: auto;
    th{
      font-size: 16px;
      color: #808080;
      font-weight: 300;
      padding: 0;
    }
    td{
      padding: 8px 0;
      font-size: 0;
      &>button{
        border-radius: 12px;
        width: 30px;
        height: 30px;
        color: #1A1A1A;
        border: 1px solid #fff;
        &:hover{
          box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
          border: 1px solid #129FCE;
        }
        .v-btn__content{
          font-size: 16px;
          font-weight: 400;
        }
        &.accent{
          color:#fff !important;
          background-color: #129FCE !important;
        }
        &.v-date-picker-table__current{
          caret-color : #129FCE !important;
          border: 1px solid #129FCE;
          &.v-btn--outlined .v-btn__content{
            color : #1A1A1A !important;
          }
          &:after{
            display: block;
            content: 'TODAY';
            position: absolute;
            text-align: center;
            bottom: -17px;
            font-family: 'DungGeunMo', sans-serif;
            color: #0C80A7;
          }
        }
        &.v-btn--active .pick_date{
          color: #fff;
        }
        .pick_date{
          color: #129FCE;
        }
        .v-date-picker-table__events{
          width: 100%;
          height: 100%;
          & > div{
            width: 6px;
            height: 6px;

            &.cy-blue{
              position: absolute;
              background-color: #129FCE;
              border-color: #129FCE;
              top: 32px;
              left: 10px;
            }
            &.feel{
              position: absolute;
              background-color: #fff;
              border-color: #fff;
              width: 32px;
              height: 32px;
              top: 4px;
              left: -2px;
              border-radius: 12px;
              background-image: url('/img/svg/avafeel_0.svg');
              &.feel1{
                background-image: url('/img/svg/avafeel_1.svg');
              }
              &.feel4{
                background-image: url('/img/svg/avafeel_4.svg');
              }
              &.feel23{
                background-image: url('/img/svg/avafeel_23.svg');
              }
              &.feel26{
                background-image: url('/img/svg/avafeel_26.svg');
              }
            }

          }          
        }
      }
      
    }
  }
  
  &.calendar{
    padding-left: 25px;
    position: relative;
    .v-date-picker-header{
      padding-top: 0;
      &:before{
        content: '';
        display: block;
        
      }
    }
    .go-today{
      color: #0C80A7;
      font-size: 16px;
      font-weight: 400;
      position: absolute;
      top:9px;
      right:0;
      cursor: pointer;
    }
  }
`;

const DiaryGroup = styled('div', props)`
${({ theme }) => {
  const { Space, Colors } = theme;
  return css`
    position: relative;
    margin-top: 15px;
      .count{
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        height: 24px;
        padding: 0 24px 0 20px;
        color: ${Colors.text_subbody};
        line-height: 24px;
        background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px;
        &:before{
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          display: block;
          width: 18px;
          height: 18px;
          background: url('/img/svg/ico_member.svg') no-repeat 0 50% /18px;
        }
      }
      ${Space}
    `;
  }}
`;

// 다이어리 상세 공통 타이틀
const DiaryTitle = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      padding-top: 56px;
      text-align: center;
     
      .btn_diary{
        position:absolute;
        top:20px;
        right:30px;
      }

      li{
        &.tit{
          .thumb{
            display: inline-block;
            font-size:16px;
            font-weight:400;
            color:#333;
            margin-bottom:12px;
            background: url('/img/svg/bullet_diary.svg') no-repeat 0 2px /16px;
            padding-left:28px;
            position: relative;
          }
          .thumb_member{
            display: inline-block;
            font-size:16px;
            font-weight:400;
            color:#333;
            margin-bottom:12px;
            background: url('/img/svg/bullet_diary_member.svg') no-repeat 0 0px /22px;
            padding-left:28px;
            position: relative;
          }
        }
        &.openset{
          font-size:16px; 
          color: #808080;
        }
        &.date{
          font-family: 'DungGeunMo', sans-serif;
          color: ${Colors.cy_blue};
          font-size:40px;
          line-height:40px;
          margin-top:30px;
          margin-bottom:16px;
        }
        &.status{
          padding-bottom:50px;
          font-weight:400;
          p{
            display: inline-block;
            height:30px;
            line-height:30px;
            &.feel{
              background: url('/img/svg/avafeel_4.svg') no-repeat 0 0%; /30px;
              padding-left:35px;
              margin-right:35.67px;
                &::after{
                  position:absolute;
                  content:"";
                  height:10px;
                  width:1px; 
                  right:424px;
                  top:209px;
                  background-color: rgba(0, 0, 0, 0.12);
                }
            }
              &.weather{
                background: url('/img/svg/ico_weather_shower.svg') no-repeat 0 4px /21px;
                padding-left:28px;
              }
          }
        }
      }
        ${Space};
      }
    `;
  }}
`;

// 다이어리 상세 내용
const DiaryContents = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      font-size:16px;
      font-weight:400;
      line-height:25px;
      margin-top:50px;
      border-top: 1px dashed #E5E5E5;
      margin:0 30px;
      
      p{
        line-height:1.7;
        padding-bottom:30px;        
        &.thumb{
          display: flex;
          align-items:center;
          overflow: hidden;
          font-size:18px;
          font-weight:400;
          white-space:nowrap; 
          color:#1A1A1A;
          img{
            display: block;
            width: 48px;
            height: 48px;
            border-radius: 20px;
            margin-right: 16px;
          }          
        }
        &:first-child{
          padding-top:50px;
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
      .time{
        //background: url('/img/svg/ico_time.svg') no-repeat 0 3px /18px;
        font-size:14px;
        color:${Colors.text_subbody};
        //padding-left:24px;
        position:absolute;
        right:30px;
        bottom:60px;
      }
      ${Space};
    `;
  }}
`;

// 다이어리 댓글 내용
const DiaryComment = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
        & > div{
          margin: 0 24px;
        }
        ${Space};
      }
    `;
  }}
`;

const styledComponents = {
  DiaryChoiceArea, DiaryFolder, DiaryDate, DiaryWeather, DiaryFeel, DiaryWriteArea, DiaryListArea,
  DiaryCalendarSelect, DiaryGroup, DiaryTitle, DiaryContents, DiaryComment,
};

export default styledComponents;

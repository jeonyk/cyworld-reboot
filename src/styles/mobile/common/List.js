import styled, { css } from 'vue-styled-components';

import ListCard from '@/components/List';
import ListItem from '@/components/ListItem';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'listtype'
];

const ListInfo = styled('ul', props)`
  ${({ theme }) => {
    const { Margins, Colors, Space } = theme;
    return css`
      margin-top: ${Margins.base};
      padding: 8px 16px !important;
      border: 1px solid ${Colors.gray_silver};
      border-radius: 8px;
      &.align_left{
        strong{
          flex: 0 0 50px;
          
        }
        span{
          text-align: left;
        }
        &.title_lg{
          strong{
            flex: 0 0 93px;
          }
        }
      }

      ${Space};
    `;
  }}
`;

const ListInfoDesc = styled.li`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      display: flex;
      flex-flow: row nowrap;
      padding: 12px 0;
      border-top: 1px dashed ${Colors.gray_silver};
      &:first-child{
        border-top: 0;
      }
      &.InfoDesc{
        border:0;
        display:block;
        &:nth-child(2){
          padding:4px 0;
        }
      }//2021.12.01 /클래스 추가
      strong{
        margin-top: -3px;
        margin-bottom: -3px;
        flex: 1;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.cy_orange_vari};
      }
      span{
        margin-top: -3px;
        margin-bottom: -3px;
        flex: 1;
        text-align: right;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.gray_title};
      }
    `;
  }}
`;

const ListInfoSubTitle = styled.strong`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
        flex: 1;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.cy_orange_vari};
    `;
  }}
`;

const ListInfoSubDesc = styled.span`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      flex: 1;
      text-align: right;
      font-size: ${Fonts.size.base};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_title};
    `;
  }}
`;

const ListSelect = styled.ul`
  ${({ theme }) => {
    const { Margins } = theme;
    return css`
      margin-top: ${Margins.base};
      padding: 24px 20px 12px !important;
      border-radius: 12px;
      background-color: #f6f6f6;
      display: flex;
      flex-flow: row nowrap;
    `;
  }}
`;

const ListSelectDesc = styled.li`
  flex: 1;
  text-align: center;
  .styled_radio {
    display: inline-block;
    .v-radio{
      padding: 8px;
      .v-input--selection-controls__input{
        margin-right: 0;
      }
    }
  }
`;

const SelectPeriod = styled.p`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-bottom: 0 !important;
      padding-bottom: 9px;
      line-height: ${Fonts.lineHeight.base};
      font-size: ${Fonts.size.base};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_title};
    `;
  }}
`;

const CardList = styled.ul`
  ${({ theme }) => {
    const { Margins } = theme;
    return css`
      margin-top: ${Margins.md};
      padding-left: 0 !important;
    `;
  }}
`;

const CardListDesc = styled.li`
  margin-top: 8px;
  &:first-child{
    margin-top: 0;
  }
`;
//2021.11.30/.tit_card 추가
const CardListLink = styled.a`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      display: block;
      padding: 20px 18px;
      border: solid 1px ${Colors.gray_silver};
      border-radius: 12px;
      background: #fff url("/img/svg/ico_check.svg") no-repeat 100% 20px /24px 24px;
      background-position-x: calc(100% - 16px);

      &.on, &:hover{
        .title_card{
          color: ${Colors.cy_orange_vari};
        }
        .tit_card{
          color: ${Colors.cy_orange_vari};
        }
        border-color: ${Colors.cy_orange_vari};
        background-image: url("/img/svg/ico_check_primary.svg");
        box-shadow: 0 4px 6px 0 rgba(0,0,0,0.15), 0 3px 6px 0 rgba(0,0,0,0.08);
      }
    `;
  }}
`;

const CardListSubTitle = styled.strong`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      display: block;
      margin-top: -3px;
      margin-bottom: -3px !important;
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};
    `;
  }}
`;

const ListResult = styled('dl', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      margin-top: 24px;
      padding: 0 12px 24px;
      border-radius: 12px;
      border: 1px solid ${Colors.gray_silver};
      ${Space}
    `;
  }}
`;

const ListResultDt = styled.dt`
  
`;

const ListResultDtPrimary = styled.p`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      padding: 20px 8px 13px;
      font-size: ${Fonts.size.lg};
      color: ${Colors.gray_title};
      font-weight: ${Fonts.weight.normal};
      border-bottom: 1px dashed ${Colors.gray_silver};
    `;
  }}
`;

const ListResultDtSecondary = styled.p`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: -2px;
      margin-bottom: -2px !important;
      padding: 17px 5px 0;
      font-size: ${Fonts.size.xs};
      color: ${Colors.cy_orange_vari};
      font-weight: ${Fonts.weight.light};
    `;
  }}
`;

const ListResultDd = styled.dd`
  padding: 24px 8px 0;
`;

const ListResultItemPrimary = styled.p`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: -3px;
      margin-bottom: -3px !important;
      font-size: ${Fonts.size.base};
      color: ${Colors.gray_body};
      font-weight: ${Fonts.weight.normal};
    `;
  }}
`;

const ListResultItemSecondary = styled.p`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: -2px;
      margin-bottom: -2px !important;
      padding-top: 6px;
      font-size: ${Fonts.size.xs};
      color: ${Colors.disabled};
      font-weight: ${Fonts.weight.light};
    `;
  }}
`;

const ListBlock = styled.ul`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: 40px;
      font-size: ${Fonts.size.xs};
      color: ${Colors.disabled};
      font-weight: ${Fonts.weight.light};
    `;
  }}
`;

const ListBlockDesc = styled.li`
  ${({ theme }) => {
    const { Colors, Fonts, Margins } = theme;
    return css`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-top: ${Margins.base};
      font-size: ${Fonts.size.xs};
      color: ${Colors.disabled};
      font-weight: ${Fonts.weight.light};
      &:first-child{
        margin-top: 0;
      }
    `;
  }}
`;

const ListBlockThumb = styled.div`
  width: 48px;
  height: 48px;
  background: url('/img/svg/img_profile_block.svg') no-repeat 50% 50% /48px;
`;

const ListBlockInfo = styled.div`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      flex: 1;
      padding: 0 16px;
      font-size: ${Fonts.size.xs};
      color: ${Colors.disabled};
      font-weight: ${Fonts.weight.light};
      .nickname{
        margin-top: -3px;
        margin-bottom: -3px;
        font-size: ${Fonts.size.lg};
        color: ${Colors.gray_title};
        font-weight: ${Fonts.weight.normal};
      }
      .date{
        margin-top: -2px;
        margin-bottom: -2px;
        padding-top: 6px;
        font-size: ${Fonts.size.xs};
        color: rgba(0,0,0,0.5);
        font-weight: ${Fonts.weight.light};
      }
    `;
  }}
`;

const ListBlockBtn = styled.div`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      font-size: ${Fonts.size.xs};
      color: ${Colors.disabled};
      font-weight: ${Fonts.weight.light};
      width: 56px;

      button{
        width: 56px;
      }
    `;
  }}
`;

const ListChanneling = styled(ListCard)`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      margin-top: 32px;
      padding-top: 16px !important;
      border-top: 1px solid ${Colors.gray_light} !important;

      &.blank{
        margin-top: 0;
        border: 0;
        padding-top: 100px;

        .MuiListItem-root{
          padding: 0;
          border: 0;
          background: none;
        }
      }
    `;
  }}
`;

const ListChannelingDesc = styled(ListItem)`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      padding: 20px 0 19px !important;
      border: 0;
      border-bottom: 1px solid ${Colors.gray_light};
      border-radius: 0;
      background-position-x: calc(100%) !important;

      &.desc_channeling{
        /* display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin: 0; */

        .v-list-item__content{
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-start;
          margin: 0;

          .thumb{
            overflow: hidden;
            margin-bottom: 0;
            flex: 0 0 48px
            width: 48px;
            height: 48px;
            border: 1px solid ${Colors.gray_silver};
            
            img{
              display: block;
              margin-top: -1px;
              margin-left: -1px;
              width: 48px;
              height: 48px;
            }
          }
          .title{
            margin-bottom: 0;
            padding-left: 16px;
            font-family: ${Fonts.family.base} !important;
            font-size: ${Fonts.size.lg} !important;
            font-weight: ${Fonts.weight.normal};
            color: ${Colors.gray_title};
          }
        }

        
      }
      
    `;
  }}
`;

const ListBlank = styled.div`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      padding-top: 190px;
      margin: 0 auto;
      width: 202px;
      text-align: center;
      font-size: ${Fonts.size.base};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_body};
      background: url('/img/gif/img_ani_balloon_3x.gif') no-repeat 50% 100px /72px;

      .msg_main{
        margin-top: -3px;
        margin-bottom: -3px;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.normal};
        color: ${Colors.gray_body};
      }
      .msg_sub{
        margin-top: -3px;
        margin-bottom: -3px;
        padding-top: 16px;
        font-size: ${Fonts.size.sm};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.gray_dark};
      }

      &.blank_search{
        padding: 158px 0 64px;
        background: url('/img/gif/img_ani_sadminime_3x.gif') no-repeat 50% 62px /72px;
      }

      &.blank_notlogin{
        padding: 208px 0 67px;
        width: auto;
        background: url('/img/gif/img_ani_questionminime_3x.gif') no-repeat 50% 112px /72px;
        .msg_main{
          margin-top: -4px;
          margin-bottom: -4px;
          font-size: 20px;
          font-weight: ${Fonts.weight.normal};
          color: ${Colors.gray_title};
        }
        .msg_sub{
          margin-top: -3px;
          margin-bottom: -3px;
          padding-top: 16px;
          font-size: ${Fonts.size.base};
          font-weight: ${Fonts.weight.light};
          color: ${Colors.gray_dark};
        }
      }
      &.blank_veri{
        width: auto;
        &.success{
          padding: 0 0 180px;
          border: 0 !important;
          background-color: #fff !important;
          background: url('/img/gif/img_ani_dance.gif') no-repeat 50% 100% /130px;
        }
        &.exist{
          padding: 0 0 180px;
          background: url('/img/gif/img_ani_check.gif') no-repeat 50% 100% /150px;
        }
        &.proceeding{
          padding: 0 0 175px;
          background: url('/img/gif/img_ani_card.gif') no-repeat 50% 100% /135px;
        }
        .msg_sub{
          margin-top: -3px;
          margin-bottom: -3px;
          padding: 16px 4px 0;
          font-size: ${Fonts.size.base};
          font-weight: ${Fonts.weight.light};
          color: ${Colors.gray_body};
          text-align: left;
          span{
            font-weight: ${Fonts.weight.normal};
          }
        }
      }
    `;
  }}
`;

const ListGuide = styled('ul', props)`
  ${({ theme }) => {
    const { Margins, Space } = theme;
    return css`
      margin-top: ${Margins.base};

      ${Space};
    `;
  }}
`;

const ListGuideDesc = styled.li`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      position: relative;
      margin-top: calc(14px - 3px);
      margin-bottom: -3px;
      padding-left: 15px;
      font-size: ${Fonts.size.sm};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_body};
      &::before{
        content: '';
        position: absolute;
        left: 4px;
        top: 8px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: ${Colors.disabled};
      }
      &:first-child{
        margin-top: -3px;
      }
      &>a{
        color: ${Colors.cy_orange_vari};
        text-decoration: underline;
        text-underline-position: under;
        font-weight: ${Fonts.weight.normal};
      }
    `;
  }}
`;

const ListFileUpload = styled.ul`
  position: relative;
  padding-left: 0 !important;
  /* & + .form_fileupload{
    margin-top: 0;
  } */
`;

const ListFileUploadDesc = styled('li', props)`
  ${({ theme }) => {
    const {
      Colors, Fonts, Space,
    } = theme;
    
    return css`
      position: relative;
      /* margin-top: 4px; */
      padding: 0 16px;
      
      .filename{
        display: inline-block;
        vertical-align: middle;
        font-size: ${Fonts.size.lg};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.cy_black};
      }
      .btn_delete{
        margin-left: -8px;
        width: 48px !important;
        height: 48px !important;
        background: url("/img/svg/ico_cancel.svg") no-repeat 50% 50% /24px 24px;
      }

      ${Space};
    `;
  }}
`;

// 서비스 주요 안내 리스트
const ListService = styled(ListCard)`
  margin-top: 8px;
  margin-left: -16px;
  margin-right: -16px;
`;

const ListServiceDesc = styled(ListItem, props)`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      position: relative;
      margin: 0;
      padding: 13px 16px 13px 48px !important;
      height: 48px;
      border: 0;
      border-radius: 0;
      background-position-x: calc(100% -18px);
      &::before{
        content: '';
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background: url('/img/svg/ico_file.svg') no-repeat 50% 50% /24px 24px;
        opacity: 1 !important;
      }

      &.v-list-item {
        .v-list-item__content{
          .v-list-item__title{
            margin: 0;
            font-size: ${Fonts.size.md} !important;
            font-weight: ${Fonts.weight.normal} !important;
            color: ${Colors.gray_body} !important;
          }
        }
      }

      ${props => props.listtype === 'new' && css`
        &.v-list-item .v-list-item__title{
          &::after{
            content: '';
            display: inline-block;
            position: relative;
            top: -1px;
            margin-left: 4px;
            vertical-align: middle;
            width: 14px;
            height: 14px;
            background: url('/img/svg/bullet_new.svg') no-repeat 50% 50% /14px 14px;
          }
        }
      `}
      
    `;
  }}
`;

// 자주 하는 질문
const ListQuestion = styled(ListCard)`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: 8px;
      margin-left: -16px;
      margin-right: -16px;

      .v-list-item__title{
        font-size: ${Fonts.size.md} !important;
        font-weight: ${Fonts.weight.light} !important;
        color: ${Colors.gray_title_sub} !important;
      }

      &.lst_qna{
        .v-list-item__title{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          
        }
      }

      &.lst_top5{
        .v-list-item{
          height: auto;
          &::before{
            display: none;
          }
          .v-list-item__title{
            text-overflow: unset;
            white-space: normal;
            line-height: 1.5;
          }
          .v-list-item__subtitle{
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            padding: 0;
            width: 24px;
            height: 24px;
            border-radius: 12px;
            text-align: center;
            line-height: 24px;
            font-size: ${Fonts.size.sm};
            font-weight: ${Fonts.weight.bold};
            color: ${Colors.cy_orange} !important;
            background-color: ${Colors.pressed_orange};
          }
        }
      }

      &.lst_qna_sub{
        margin-top: 16px;
        
        .v-list-item {
          padding: 13px 20px !important;
          height: auto;
          &::before{
            display: none;
          }
          .v-list-item__content{
            .v-list-item__title{
              font-size: ${Fonts.size.md};
              font-weight: ${Fonts.weight.light};
              color: ${Colors.gray_title_sub};
              text-overflow: unset;
              white-space: normal;
              line-height: 1.5;
            }
            .v-list-item__subtitle{
              position: absolute;
              left: 16px;
              top: 50%;
              transform: translateY(-50%);
              margin: 0;
              padding: 0;
              width: 24px;
              height: 24px;
              border-radius: 12px;
              text-align: center;
              line-height: 24px;
              font-size: ${Fonts.size.sm};
              font-weight: ${Fonts.weight.bold};
              color: ${Colors.cy_orange};
              background-color: ${Colors.pressed_orange};
            }
          }
        }
        
      }
    `;
  }}
`;

const ListQuestionDesc = styled(ListItem)`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      position: relative;
      margin: 0;
      padding: 13px 16px 13px 48px !important;
      height: 48px;
      border: 0;
      border-radius: 0;
      background-image: none !important;
      &::before{
        content: 'Q' !important;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        font-size: ${Fonts.size.xl};
        font-weight: ${Fonts.weight.bold};
        color: ${Colors.cy_orange};
        opacity: 1 !important;
      }
      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 16px;
        right: 16px;
        height: 1px;
        background-color: ${Colors.gray_light};
      }

      &.v-list-item {
        .v-list-item__content{
          .v-list-item__title{
            margin: 0;
            font-size: ${Fonts.size.md};
            font-weight: ${Fonts.weight.light};
            color: ${Colors.gray_title_sub};
          }
        }
      }
      
    `;
  }}
`;

// 자주 하는 질문 분류
const ListQnaType = styled(ListCard, props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      margin-top: 32px;
      ${Space};
    `;
  }}
`;

const ListQnaTypeDesc = styled(ListItem, props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      position: relative;
      margin-top: 8px;
      padding: 15px 16px !important;
      height: 56px;
      border: 1px solid rgba(0,0,0,0.12);
      border-radius: 12px;

      &:first-child{
        margin-top: 0;
      }

      .MuiTypography-root{
        margin: 0;
      }
      ${Space};
    `;
  }}
`;

//공지사항 & 이벤트 & 고객센터 (내 문의 내역)
const ListNotice = styled(ListCard)`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: 16px;
      margin-left: -16px;
      margin-right: -16px;

      &.list_cmy{
        .v-list-item__title{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;          
        }
        .v-list-item__subtitle{         
          &:after{
            content: '문의접수';
            position: relative;
            margin-top: 16px;
            display: block;
            width: 64px;
            height: 25px;
            text-align: center;
            font-size: ${Fonts.size.sm};
            font-weight: ${Fonts.weight.light};
            color: ${Colors.gray_dark};
            background-color: #f6f6f6;
            border-radius: 4px;
            padding: 3px 0;
            box-sizing: border-box;
          }       
        }
        .answer{
          .v-list-item__subtitle{
            &:after{
              content: '답변완료';
              color: ${Colors.cy_orange_vari};
              background-color: ${Colors.focus_orange};
            }
          }
        }
      }
      .styled_item.v-list-item{
        padding-top: 16px !important;
        .v-list-item__content .v-list-item__subtitle{
          margin-top: 6px;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.4);
        }
      } 
    `;
  }}
`;

const ListNoticeDesc = styled(ListItem)`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      display: block;
      position: relative;
      margin: 0;
      padding: 13px 20px 14px 20px !important;
      border: 0;
      border-radius: 0;
      background-image: none !important;

      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 16px;
        right: 16px;
        height: 1px;
        background-color: ${Colors.gray_light};
      }
      
   
      .v-list-item__title{
        margin: 0;
        font-size: ${Fonts.size.lg};
        color: ${Colors.gray_title};

        &.v-list-item__title{
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: 'GothicNeoaUni',sans-serif;
        }
      }

      &.new .v-list-item__title{
        display: inline-block;
        margin-bottom: 0;
        padding-right: 18px;
        max-width: 100%;
        flex: unset;
      }

      &.new .v-list-item__title::after{
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        background: url('/img/svg/bullet_new.svg') no-repeat 0 0 / 14px 14px;
      }
      
      .v-list-item__subtitle{
        display: block;
        font-size: ${Fonts.size.xs};
        color: rgba(0, 0, 0, 0.4);
        margin-top: 8px;
        padding: 0px;
      }
    `;
  }}
`;


const styledComponents = {
  ListInfo, ListInfoDesc, ListInfoSubTitle, ListInfoSubDesc, ListSelect, ListSelectDesc, SelectPeriod, CardList, CardListDesc, CardListLink, CardListSubTitle, ListResult, ListResultDt, ListResultDd, ListResultItemPrimary, ListResultItemSecondary, ListResultDtPrimary, ListResultDtSecondary, ListBlock, ListBlockDesc, ListBlockThumb, ListBlockInfo, ListBlockBtn, ListChanneling, ListChannelingDesc, ListBlank, ListGuide, ListGuideDesc, ListFileUpload, ListFileUploadDesc, ListService, ListServiceDesc, ListQuestion, ListQuestionDesc, ListQnaType, ListQnaTypeDesc, ListNotice, ListNoticeDesc,
};

export default styledComponents;

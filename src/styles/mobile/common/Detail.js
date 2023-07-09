import styled, { css } from 'vue-styled-components';

const props = [
  'size', 'p', 'pt', 'pb', 'm', 'mt', 'mb', 'align'
];

const DetailList = styled('dl', props)`
  ${({ theme }) => {
    const {
      Align, Space,
    } = theme;
    return css`
      ${Space}
      ${Align}
    `;
  }}
`;

const DetailListTitle = styled('dt', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Align, Space,
    } = theme;
    return css`
      margin-top: -6px;
      padding: 0 4px 21px;
      font-size: 20px;
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};

      p{
        &.title{
          font-size: 20px;
          font-weight: ${Fonts.weight.normal};
          letter-spacing: normal !important;
          color: ${Colors.gray_title};
        }
        &.datetime{
          margin-top: -5px;
          padding: 8px 0 0;
          font-size: ${Fonts.size.xs};
          font-weight: ${Fonts.weight.light};
          color: rgba(0, 0, 0, 0.4);
        }
      }

      ${Space}
      ${Align}
    `;
  }}
`;

const DetailListSub = styled('dd', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Align, Space,
    } = theme;
    return css`
      padding: 7px 4px 0;
      border-top: 1px solid ${Colors.gray_silver};
      p{
        margin-top: -3px;
        margin-bottom: -3px;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.gray_body};
        padding-top: 16px;
        &.img_area{
          margin-left: -4px;
          margin-right: -4px;
          line-height: 0;
          &.ac{
            text-align: center;
          }
        }
      }
      img{
        display: block;
        width: 100%;
      }

      ${Space}
      ${Align}
    `;
  }}
`;


//고객센터 내문의내역 상세 답변부분
const DetailAnswer = styled('dl', props)`
  ${({ theme }) => {
    const {
      Colors, Align, Space,
    } = theme;
    return css`
      background-color: ${Colors.pressed_orange};
      border-radius: 12px;
      margin-top: 24px;
      padding: 24px 16px;
      ${Space}
      ${Align}
    `;
  }}
`;

const DetailAnswerTitle = styled('dt', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Align, Space,
    } = theme;
    return css`
      margin-top: -3px;
      padding: 0 4px 21px;
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.cy_orange_vari};
      p{
        &.title{
          font-size: ${Fonts.size.lg} !important;
          font-weight: ${Fonts.weight.normal};
          color: ${Colors.cy_orange_vari};
          line-height: inherit !important;
        }
        &.datetime{
          margin-top: -3px;
          padding: 8px 0 0;
          font-size: ${Fonts.size.xs};
          font-weight: ${Fonts.weight.light};
          color: ${Colors.cy_orange_vari};
        }
      }
      ${Space}
      ${Align}
    `;
  }}
`;

const DetailAnswerSub = styled('dd', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Align, Space,
    } = theme;
    return css`
      padding: 8px 4px 0;
      border-top: 1px solid ${Colors.gray_silver};
      p{
        margin-top: -3px;
        margin-bottom: -3px;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.gray_body};
        padding-top: 16px;
      }
      ${Space}
      ${Align}
    `;
  }}
`;


const styledComponents = {
  DetailList, DetailListTitle, DetailListSub, DetailAnswer, DetailAnswerTitle, DetailAnswerSub,
};

export default styledComponents;

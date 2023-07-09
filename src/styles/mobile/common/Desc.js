import styled, { css } from 'vue-styled-components';

const props = [
  'size', 'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

const DescDefault = styled('div',props)`
  ${({ theme }) => {
    const {
      Colors, Fonts, Margins, Space, Align,
    } = theme;
    return css`
      margin-top: calc(${Margins.base} - 3px);
      margin-bottom: -3px;
      padding: 0 4px;
      font-size: ${Fonts.size.base};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_body};
      .txt_sub{
        font-size:16px;
        font-weight:400;
        color:#000;
      }//2021.11.30/txt_sub 추가
      &.desc_card{
        padding: 0 2px;
      }
      
      .btn_link{ 
        padding: 1px 0;
        color: ${Colors.cy_orange_vari};
        border-bottom: 1px solid ${Colors.cy_orange_vari};
        font-weight: ${Fonts.weight.normal};
      }

      ${props => props.size === 'small' && css`
        margin-top: calc(${Margins.sm} - 3px);
        margin-bottom: -3px;
        font-size: ${Fonts.size.sm};
      `}
      ${props => props.size === 'xs' && css`
        margin-top: calc(${Margins.sm} - 2px);
        margin-bottom: - 2px;
        font-size: ${Fonts.size.xs};
      `}

      ${Space};
      ${Align}
    `;
  }}
`;

const DescEtc = styled('div',props)`
  ${({ theme }) => {
    const { Align, Space } = theme;
    return css`
      ${Space}
      ${Align}
    `;
  }}
`;

const DescLink = styled('div',props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Align, Space,
    } = theme;
    return css`
      margin-top: 16px;
      padding: 0 4px 0;

      a{
        display: inline-block;
        margin-top: -3px;
        margin-bottom: -3px;
        line-height: 16px;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.gray_title} !important;
        border-bottom: 1px solid ${Colors.gray_title} !important;;
        /* text-decoration: underline; */
        &.disabled, &:disabled{
          color: ${Colors.disabled} !important;;
          border-bottom: 1px solid ${Colors.disabled} !important;;
        }
      }

      ${Space}
      ${Align}
    `;
  }}
`;

const DescWarning = styled('div',props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Margins, Align, Space,
    } = theme;
    return css`
      margin-top: ${Margins.base};
      padding: 13px 16px 13px 52px;
      border-radius: 12px;
      font-size: ${Fonts.size.sm};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_body};
      background-color: ${Colors.pressed_orange};
      background-image: url('/img/svg/ico_info_primary.svg');
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: 16px 16px;
      ${Space}
      ${Align}
    `;
  }}
`;

const DescPolicy = styled('div', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Margins, Align, Space,
    } = theme;
    return css`
      margin-top: ${Margins.lg};
      padding: 0 4px;
      border-radius: 12px;
      font-size: ${Fonts.size.sm};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_body};
      ${Space}
      ${Align}
    `;
  }}
`;

const DescPolicyTitle = styled('div', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Margins, Align, Space,
    } = theme;
    return css`
      margin-top: ${Margins.lg};
      padding: 0 4px;
      border-radius: 12px;
      font-size: ${Fonts.size.sm};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_title};
      ${Space}
      ${Align}
    `;
  }}
`;

const DescPolicyDetail = styled('div', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Margins, Align, Space,
    } = theme;
    return css`
      margin-top: ${Margins.lg};
      padding: 0 4px;
      border-radius: 12px;
      font-size: ${Fonts.size.sm};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_body};
      ${Space}
      ${Align}
    `;
  }}
`;


const styledComponents = {
  DescDefault, DescEtc, DescLink, DescWarning, DescPolicy, DescPolicyTitle, DescPolicyDetail, 
};

export default styledComponents;

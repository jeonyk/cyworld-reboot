import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'size'
];

const FormConfirm = styled('ul', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Space,
    } = theme;
    return css`
      margin-top: 0;
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};
      ${Space};
    `;
  }}
`;

const FormConfirmDesc = styled('li', props)`
  ${({ theme }) => {
    const { Fonts, Colors, Space } = theme;
    return css`
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};
      ${Space};

      .styled_input{
        margin-top: 8px !important;
        &.helperText{
          margin-top: 16px;
        }
      }

      &:first-child{
        .styled_input{
          margin-top: 0 !important;
        }
      }

      &.check_area{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        padding: 0 3px;
        .MuiFormControlLabel-label{
          font-size: ${Fonts.size.sm};
          font-weight: ${Fonts.weight.light};
          color: ${Colors.gray_body};
        }
        a{
          display: block;
          font-size: ${Fonts.size.sm};
          font-weight: ${Fonts.weight.normal};
          color: ${Colors.disabled};
          text-decoration: underline;
        }
        &.check_privacy{
          .MuiFormControlLabel-label{
            font-size: ${Fonts.size.base};
            font-weight: ${Fonts.weight.light};
            color: ${Colors.gray_title};
          }
        }
      }
      ${Space}
    `;
  }}
`;



const styledComponents = {
  FormConfirm, FormConfirmDesc,
};

export default styledComponents;

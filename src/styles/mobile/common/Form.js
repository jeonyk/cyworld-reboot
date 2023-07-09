import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'size'
];

const FormUser = styled('div', props)`
  ${({ theme }) => {
    const { Align, Space, Margins } = theme;
    return css`
      margin-top: ${Margins.lg};
      .MuiFormControl-root{
        margin-top: ${Margins.xs};
        & + div{
          margin-top: ${Margins.base};
        }
      }
      ${Space}
      ${Align}
    `;
  }}
`;

const FormUserLabel = styled('label', props)`
  ${({ theme }) => {
    const { Fonts, Colors } = theme;
    return css`
      display: block;
      margin-top: -3px;
      margin-bottom: -3px;
      padding: 0 4px;
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};
    `;
  }}
`;

const FormUserPhone = styled('div', props)`
  ${({ theme }) => {
    const { Margins } = theme;
    return css`
      display: flex;
      flex-flow: row nowrap;
      margin-top: ${Margins.xs};
      & + div{
        margin-top: ${Margins.base};
      }
      & > div{
        &.input_select{
          flex: 1;
          margin-top: 0;
        }
        &:nth-child(1){
          flex: 0 0 110px;
          min-width: 120px;
        }
        &:nth-child(2){
          margin-left: ${Margins.xs};
          width: 100%;
        }
      }
    `;
  }}
`;

const FormAgreeAll = styled('div', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Margins, Paddings,
    } = theme;
    return css`
      margin-top: ${Margins.lg};
      padding: 20px 12px 29px;
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};
      border: 1px solid ${Colors.gray_silver};
      border-radius: 12px;
      .MuiFormControlLabel-label{
        font-size: ${Fonts.size.lg};
      }
      & > div:last-child{
        border-top: 1px solid ${Colors.gray_silver};
        margin-top: 4px;
        padding-top: ${Paddings.sm};
      }
    `;
  }}
`;

const FormAgreeList = styled('ul', props)`
  ${({ theme }) => {
    const { Fonts, Colors, Margins } = theme;
    return css`
      margin-top: ${Margins.base};
      padding: 16px 11px !important;
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};
      border: 1px solid ${Colors.gray_silver};
      border-radius: 12px;

      &.form-auth{  // 본인확인
        margin-top: ${Margins.lg};
        .allcbx_area{
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          .styled_checkbox{
            .v-input--checkbox{
              .v-input__control{
                flex-grow: 1;
              }
              
              .v-label{
                font-size: ${Fonts.size.lg};
                font-weight: ${Fonts.weight.normal};
              }
            }
          }
        }

        .styled_checkbox{
          .v-input--checkbox{
            .v-input__control{
              flex: 0 0 20px;
            }
            .v-input__append-outer{
              height: 24px;
              line-height: 24px;
              font-size: ${Fonts.size.base};
              color: ${Colors.gray_title};
              font-weight: ${Fonts.weight.light};
              a{
                display: inline-block;
                font-size: ${Fonts.size.base};
                color: ${Colors.gray_title};
                font-weight: ${Fonts.weight.light};
              }
            }
            .v-messages{
              display: none;
            }
            .v-label{
              font-weight: ${Fonts.weight.light};
              a{
                display: inline-block;
                position: relative;
                z-index: 10;
                font-size: ${Fonts.size.base};
                color: ${Colors.gray_title};
                font-weight: ${Fonts.weight.light};
              }
            }
          }
        }
        
      }
    `;
  }}
`;

const FormAgreeListDesc = styled('li', props)`
  ${({ theme }) => {
    const { Fonts, Colors } = theme;
    return css`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      &.listdesc{
        .v-input__slot{ 
          margin-bottom:0;
        }
      }//2021.12.01 / 클래스 추가
      a{
        display: block;
        margin-top: -2px;
        font-size: ${Fonts.size.sm};
        font-weight: ${Fonts.weight.normal};
        color: ${Colors.disabled};
        border-bottom: 1px solid ${Colors.disabled};
        line-height: 1;
        &.more{
        display: block;
        margin-top:3px;
        font-size: ${Fonts.size.sm};
        font-weight: ${Fonts.weight.normal};
        color: ${Colors.disabled};
        border-bottom: 1px solid ${Colors.disabled};
        line-height: 1;
        }
      }

    `;
  }}
`;

const FormConfirm = styled('ul', props)`
  ${({ theme }) => {
    const {
      Fonts, Colors, Margins, Space,
    } = theme;
    return css`
      margin-top: ${Margins.lg};
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

const FormAgreement = styled('div', props)`
  ${({ theme }) => {
    const {
      // eslint-disable-next-line no-unused-vars
      Fonts, Colors, Margins, Paddings, Space
    } = theme;
    return css`
      margin-top: ${Margins.lg};
      padding: 32px 4px 0;
      border-top: 1px solid ${Colors.gray_light};
      & + &{
        margin-top: 0;
      }
      ${Space};
    `;
  }}
`;

const FormAgreementTitle = styled('p', props)`
  ${({ theme }) => {
    const {
      // eslint-disable-next-line no-unused-vars
      Fonts, Colors, Margins, Paddings,
    } = theme;
    return css`
      margin-top: -3px;
      margin-bottom: -3px !important;
      font-size: ${Fonts.size.sm};
      color: ${Colors.gray_dark};
      font-weight: ${Fonts.weight.light};
    `;
  }}
`;

const FormAgreementList = styled('ul', props)`
  ${({ theme }) => {
    const {
      // eslint-disable-next-line no-unused-vars
      Fonts, Colors, Margins, Paddings, Space,
    } = theme;
    return css`
      padding: 16px 0;

      li {
        .title{
          margin-top: -3px;
          margin-bottom: -3px;
          font-size: ${Fonts.size.lg} !important;
          font-weight: ${Fonts.weight.normal} !important;
          color: ${Colors.gray_title};
          line-height: 1.4;
        }
      }

      ${props => props.size === 'small' && css`
        margin-top: -8px;
        padding:0;
        li{
          padding: 15px 0 19px;
          padding-left: 9px;
          
          &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 20px;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background-color: ${Colors.disabled};
          }
          .title{
            font-size: ${Fonts.size.base} !important;
            font-weight: ${Fonts.weight.light} !important;
            color: ${Colors.gray_title} !important;
          }
          .styled_switch{
            top: 2px;
            transform: unset;
          }
        }
      `}

      ${Space};
    `;
  }}
`;

const FormAgreementListDesc = styled('li', props)`
  ${({ theme }) => {
    const {
      // eslint-disable-next-line no-unused-vars
      Fonts, Colors, Margins, Paddings, Space,
    } = theme;
    return css`
      position: relative;
      padding: 14px 0;

      /* .title{
        margin-top: -3px;
        margin-bottom: -3px;
        font-size: ${Fonts.size.lg} !important;
        font-weight: ${Fonts.weight.normal} !important;
        color: ${Colors.gray_title};
      } */
      .datetime{
        margin-top: -3px;
        margin-bottom: -3px;
        padding-top: 6px;
        font-size: ${Fonts.size.base};
        font-weight: ${Fonts.weight.light};
        color: ${Colors.gray_dark};
      }

      .styled_switch{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-right: -14px;
      }

      ${Space};
    `;
  }}
`;

const FormRadioList = styled('ul', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      padding: 8px 2px 0px;
      ${Space};
    `;
  }}
`;
const FormRadioListDesc = styled('li', props)`
  ${({ theme }) => {
    const { Fonts } = theme;
    return css`
    .v-radio{
      padding: 8px 0;
      .v-label{
        font-weight: ${Fonts.weight.light};
      }
    }
    
    `;
  }}
`;

const styledComponents = {
  FormUser, FormUserLabel, FormUserPhone, FormAgreeList, FormAgreeListDesc, FormAgreeAll, FormConfirm, FormConfirmDesc, FormAgreement, FormAgreementTitle, FormAgreementList, FormAgreementListDesc, FormRadioList, FormRadioListDesc,
};

export default styledComponents;

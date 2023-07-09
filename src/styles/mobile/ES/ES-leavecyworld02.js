import styled, { css } from 'vue-styled-components';

const FormLeaveList = styled.ul`
  padding: 8px 4px 0px 4px;
`;
const FormLeaveListDesc = styled.li`
${({ theme }) => {
  const { Fonts } = theme;
  return css`
  span.MuiFormControlLabel-label{
    font-weight: ${Fonts.weight.light};
  }
  `;
}}
`;

const H4Mt24 = styled.h4`
${({ theme }) => {
  const { Fonts, Margins, Colors } = theme;
  return css`
    margin-top: calc(${Margins.md} - 3px);
    margin-bottom: -3px;
    padding: 0 4px;
    line-height: ${Fonts.lineHeight.base};;
    font-size: ${Fonts.size.lg};
    font-weight: ${Fonts.weight.normal};
    color: ${Colors.gray_title};
  `;
}}
`;

const styledComponents = {
  FormLeaveList, FormLeaveListDesc, H4Mt24
};

export default styledComponents;
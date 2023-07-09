import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'align'
];

const Wrap = styled.div`
  position: relative;
  min-width: 360px;
  min-height: 100%;
`;

const Contents = styled.div`
  position: relative;
  padding: 72px 16px 113px;
`;

const Hr = styled('hr', props)` 
  ${({ theme }) => {
    const { Margins, Colors, Space } = theme;
    return css`
      margin: ${Margins.lg} 0 0;
      border: 0;
      height: 1px;
      background-color: ${Colors.gray_silver};
      ${Space};
    `;
  }}
`;

const Submit = styled('div', props)`
  ${({ theme }) => {
    const { Margins, Space } = theme;
    return css`
      margin-top: ${Margins.lg};
      button + button{
        margin-top: 8px;
      }

      ${props => props.align === 'both' && css`
        display: flex;
        flex-flow: row nowrap;

        button{
          flex: 1;
          & + button{
            margin-top: 0;
            margin-left: 8px;
          }
        }
      `};

      ${Space};
    `;
  }}
`;

const styledComponents = {
  Wrap, Contents, Submit, Hr
};

export default styledComponents;

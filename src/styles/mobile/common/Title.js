import styled, { css } from 'vue-styled-components';

const H3 = styled.h3`
  ${({ theme }) => {
    const { Colors, Fonts, Margins } = theme;
    return css`
      margin-top: -5px;
      margin-bottom: -5px;
      padding: 0 4px;
      line-height: ${Fonts.lineHeight.base};
      font-size: ${Fonts.size.xxl};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.cy_orange};
      &.title_complete{
        padding-left: 101px;
        background: url("/img/img_complete_3x.png") no-repeat 21px 50% /50px;
        /* .txt_sm{
          font-size: ${Fonts.size.md};
          color: ${Colors.gray_title}
        } */
      }

      &.title_open{
        position: relative;
        margin-top: ${Margins.lg};
        margin-bottom: 0;
        padding-left: 101px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 20px;
        /* &:before{
          content: '';
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 90px;
          height: 90px;
          border-radius: 45px;
          background: rgba(243, 107, 43, 0.08) url("/img/img_myavatar_3x.png") no-repeat 0 0 /90px;
        } */ // 2021.11.30/s1-02기존 백그라운드 이미지 백업
        p{
          margin-top: -4px;
          margin-bottom: -4px;
        }
        .txt_sm{
          /* margin-top: -3px;
          margin-bottom: -3px;
          padding-bottom: 7px;
          line-height: ${Fonts.lineHeight.base};;
          font-family: 'DungGeunMo', sans-serif;
          font-size: ${Fonts.size.base};
          color: ${Colors.gray_title}; */
          // 2021.11.30/s1-02/글 수정
        }
      }

      &.title_channeling{
        position: relative;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 104px;
        height: 80px;
        p:nth-of-type(1){
          position: relative;
          margin-top: 0;
          margin-bottom: 0;
          line-height: 26px;
          font-size: ${Fonts.size.xxl};
          color: ${Colors.gray_title};
          font-weight: ${Fonts.weight.bold};
        }
        p:nth-of-type(2){
          padding-top: 16px;
          font-size: ${Fonts.size.base};
          color: ${Colors.gray_body};
          font-weight: ${Fonts.weight.light};
        }

        .thumb{
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          margin-bottom: 0;
          flex: 0 0 48px
          width: 80px;
          height: 80px;
          border: 1px solid ${Colors.gray_silver};
          
          img{
            display: block;
            margin-top: -1px;
            margin-left: -1px;
            width: 80px;
            height: 80px;
          }
        }
        
        .txt_sm{
          margin-bottom: 7px;
          line-height: ${Fonts.lineHeight.base};;
          font-family: 'DungGeunMo', sans-serif;
          font-size: ${Fonts.size.base};
          color: ${Colors.gray_title};
        }
      }
        
    `;
  }}
`;

const TitleSub = styled.p`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: -5px;
      margin-bottom: -5px !important;
      font-size: ${Fonts.size.xxl};
      font-weight: ${Fonts.weight.light};;
      color: ${Colors.cy_orange};
    `;
  }}
`;

const TitleDesc = styled.p`
  ${({ theme }) => {
    const { Colors, Fonts } = theme;
    return css`
      margin-top: -3px;
      margin-bottom: -3px !important;
      padding-top: 6px;
      font-size: ${Fonts.size.md};
      color: ${Colors.gray_title}
    `;
  }}
`;

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

const H4 = styled('h4', props)`
  ${({ theme }) => {
    const {
      Colors, Fonts, Margins, Space,
    } = theme;
    
    return css`
      margin-top: calc(${Margins.lg} - 3px);
      margin-bottom: -3px;
      padding: 0 4px;
      line-height: ${Fonts.lineHeight.base};;
      font-size: ${Fonts.size.lg};
      font-weight: ${Fonts.weight.normal};
      color: ${Colors.gray_title};
      ${Space};
    `;
  }}
`;

const H5 = styled.h5`
  ${({ theme }) => {
    const { Colors, Fonts, Margins } = theme;
    return css`
      margin-top: calc(${Margins.base} - 3px);
      margin-bottom: -3px;
      padding: 0 4px;
      line-height: ${Fonts.lineHeight.sm};
      font-size: ${Fonts.size.sm};
      font-weight: ${Fonts.weight.light};
      color: ${Colors.gray_title};
    `;
  }}
`;

const styledComponents = {
  H3, H4, H5, TitleSub, TitleDesc,
};

export default styledComponents;

import styled, { css } from 'vue-styled-components';

const EventList = styled.ul`
  position: relative;
  margin-top: 16px;
`;

const EventListDesc = styled.li`
  position: relative;
  margin-top: 34px;
  &:first-child{ 
    margin-top: 0px;
  }
`;

const EventImgWrap = styled.div`
  position: relative;
  border-radius: 12px;
  padding: 29px 20px 0px 20px;
  height: 170px;
  &>img{
    position: absolute;
    bottom: 0;
    right: 20px;
  }
`;

const EventImgTitleSub = styled.p`
  ${({ theme }) => {
    const { Fonts } = theme;
    return css`
      font-size: ${Fonts.size.sm};
      color: #fff;
      font-weight: ${Fonts.weight.light};
    `;
  }}
`;

const EventImgTitle = styled.p`
  ${({ theme }) => {
    const { Fonts } = theme;
    return css`
      margin-top: 7px;
      font-size: ${Fonts.size.xxl};
      font-weight: ${Fonts.weight.bold};
      color: #fff;
      
    `;
  }}
`;

const EventTitleWrap = styled.div`
  display: flex;
  margin-top: 16px;
`;

const EventTitleLeft = styled.div`
  flex: 1;
`;

const EventTitle = styled.p`
  ${({ theme }) => {
    const { Fonts, Colors } = theme;
    return css`
      font-size: ${Fonts.size.lg};
      color: ${Colors.gray_body};
      font-weight: ${Fonts.weight.normal};
      margin-top: -3px;
      &.end-event{
        color: rgba(0, 0, 0, 0.4);
      }
    `;
  }}
`;

const EventDate = styled.span`
  ${({ theme }) => {
    const { Fonts } = theme;
    return css`
      font-size: ${Fonts.size.sm};
      color: rgba(0, 0, 0, 0.4);
      padding-top: 3px;
      display: block;
    `;
  }}
`;

const EventBtn = styled.div`
  ${({ theme }) => {
    const { Fonts } = theme;
    return css`
      flex: 1;
      text-align: right;
      padding-right: 4px;
      &>button{
        min-width: 80px;
        font-weight: ${Fonts.weight.normal};
      }
  `;
  }}
`;

const styledComponents = {
  EventList, EventListDesc, EventImgWrap, EventImgTitleSub, EventImgTitle, EventTitleWrap, EventTitleLeft, EventTitle, EventDate, EventBtn,
};

export default styledComponents;

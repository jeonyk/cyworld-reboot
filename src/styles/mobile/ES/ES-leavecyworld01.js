import styled, { css } from 'vue-styled-components';

const AvatarWarp = styled.div`
  position: relative;
  margin-top: 8px;
  padding-left: 200px;
  height: 200px;
  &:before{
    content: '';
    overflow: hidden;
    position: absolute;
    width: 200px;
    height: 200px;
    left: 0;
    background: url('/img/gif/leave_ani_avatar.gif');
    background-size: 200px;
  }
`;

const SpeechBalloon01 = styled.div`
  position: absolute;
  width: 88px;
  height: 33px;
  top: 53px;
  left: 235px;
  background: url('/img/speech_balloon_01_3x.png') no-repeat 0 0 /88px;
`;
const SpeechBalloon02 = styled.div`
  position: absolute;
  width: 101px;
  height: 37px;
  top: 99px;
  left: 183px;
  background: url('/img/speech_balloon_02_3x.png') no-repeat 0 0 /101px;
`;
const LeaveDesc01 = styled.div`
  ${({ theme }) => {
    const { Fonts, Colors } = theme;
    return css`
    padding: 0 4px;
    font-size: ${Fonts.size.xxl};
    font-weight: ${Fonts.weight.light};
    &>strong{
      font-weight: ${Fonts.weight.bold};;
    }
    &>span{
      color: ${Colors.cy_orange};
    }
    `;
  }}
`;

const LeaveDesc02 = styled.div`
  ${({ theme }) => {
    const { Fonts} = theme;
    return css`
    margin-top: 8px;
    padding: 0 4px;
    font-size: ${Fonts.size.lg};
    font-weight: ${Fonts.weight.light};
    `;
  }}
`;

const LeaveBox = styled.div`
  ${({ theme }) => {
    const { Fonts, Colors } = theme;
    return css`
      margin-top: 37px;
      padding: 21px 16px 23px 16px;
      border: 1px solid ${Colors.gray_silver};
      border-radius: 12px;
      &>p{
        color: ${Colors.cy_orange};
        font-size: ${Fonts.size.lg};
        font-weight: ${Fonts.weight.normal};
        padding: 0 4px;
      }
    `;
  }}
`;

const LeftAcornList = styled.ul`
  ${({ theme }) => {
    const { Fonts, Colors } = theme;
    return css`
      display: flex;
      flex-flow:row nowrap;
      margin-top: 13px;
      padding: 15px 16px 14px 16px !important;
      border: 1px solid ${Colors.cy_orange};
      border-radius: 12px;
      background-color: rgba(243, 107, 43, 0.08);
      font-size: ${Fonts.size.base};
      font-weight: ${Fonts.weight.normal};
    `;
  }}
`;

const LeftAcornListDesc = styled.li`
  ${({ theme }) => {
    const { Fonts } = theme;
    return css`
      position: relative;
      text-align: left;
      flex: 1;
      &:first-child{
        top: 2px;
      }
      &:last-child{
        text-align: right;
        font-size: ${Fonts.size.lg};
        span{position: relative;
          &:before{
          content: '';
          width: 18px;
          height: 18px;
          background: url('/img/svg/ico_acorn.svg') no-repeat 50% 50% /18px 18px;
          position: absolute;
          left: -20px;
          top: -1px;
          }
          &:after{
            content: ' 개';
            font-size: ${Fonts.size.xs};
            font-weight: ${Fonts.weight.light};
            position: relative;
            bottom: 0;
          }
        }
      }
    `;
  }}
`;

const LeaveChkBox = styled.div`
  ${({ theme }) => {
    const { Fonts, Colors } = theme;
    return css`
      margin: 8px 0px 0px 5px;
      height: 40px;
      .v-input--selection-controls{
        padding: 8px 0;
      }
      .v-input__slot{
        margin-bottom: 0;
      }
      .v-label{
        color: ${Colors.cy_orange_vari} !important;
        font-size: ${Fonts.size.sm} !important;
        font-weight: ${Fonts.weight.light};
      }
    `;
  }}
`;

const styledComponents = {
  AvatarWarp, SpeechBalloon01, SpeechBalloon02, LeaveDesc01, LeaveDesc02, LeaveBox, LeftAcornList, LeftAcornListDesc, LeaveChkBox,
};

export default styledComponents;

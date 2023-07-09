import styled, { css } from 'vue-styled-components';

const WrapLogin = styled.div`
  position: relative;
  padding: 0 16px;
  width: 100%;
  min-width: 360px;
  height: 100%;
  min-height: 640px; 
`;

const LogoCyworld = styled.h1`
  position: absolute;
  left: 50%;
  top: 15.4220%;
  width: 200px;
  height: 46px;
  margin-left: -100px;
  background: #fff url('/img/svg/logo_cyworld.svg') no-repeat 50% / 200px;
`;

const Account = styled.div`
  margin-top: 22px;
  text-align: center;
`;

const AccountList = styled.ul`
  display: inline-flex;
  flex-flow: row nowrap;
`;

const FormLogin = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 32px);
`;

const FormList = styled.ul`

`;

const FormDesc = styled.li`
  position: relative;
  margin-top: 8px;
  &:nth-of-type(1){
    margin-top: 0;
  }
  
  &.submit{
    margin-top: 24px;
  }
`;



const AccountDesc = styled.li`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      position: relative;
      padding-left: 26px;
      &:before{
        content: '';
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 2px;
        background-color: ${Colors.disabled};
      }
      &:first-child{
        padding-left: 0;
        &:before{
            display: none;
        }
      }
      a{
        display: block;
        line-height: 14px;
        font-size: 14px;
        font-weight: 300;
        color: rgba(0,0,0,0.7) !important;
      }
    `;
  }}
`;

// 2021.11.30 기획수정 - 배너추가
const Banner = styled('div')`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      position:absolute;
      left:0;
      bottom:0;
      transform: translateY(100%);
      width:100%;
      padding-top:32px;
      img{
          width: 100%;
        }
      }
      ${Space};
    `;
  }}
`;


const styledComponents = {
  WrapLogin, LogoCyworld, Account, AccountList, FormLogin, FormList, FormDesc, AccountDesc, Banner,
};

export default styledComponents;

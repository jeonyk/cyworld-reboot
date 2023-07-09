import styled from 'vue-styled-components';

const EMMainInfo = styled.div`
  display: flex;
  flex: row nowrap;
  align-items: center;
  margin-top: 40px;
  padding-left: 10px;
  .thumb{
    width:80px;
    height:80px;
    overflow: hidden;
    border-radius: 32px;
    img{
      width:100%;
    }
  }
  .acorn_cnt{
    margin-left:20px;
    p{
      color: #1A1A1A;
      font-size: 20px;
      font-weight: 300;
      &.number{
        color: #F36B2B;
        font-size: 28px;
        font-weight: 400;
        span{
          font-size: 20px;
        }
      }
    }
  }
  .btns-container{
    margin-left: auto;
    margin-top:28px;
    li{
      position: relative;
      display: inline-block;
      &:nth-child(1):after,&:nth-child(2):after{
        content:'';
        display: block;
        width: 1px;
        height: 10px;
        background:rgba(0, 0, 0, 0.12);
        position: absolute;
        left:102px;
        top:9px;
      }
      &:nth-child(2){
        margin: 0 37px;
      }
      a{
        position: relative;
        font-size: 16px;
        font-weight: 400;
        color:#333333;
        i{
          display: inline-block;
          position: relative;
          top:4px;
          margin-right: 7px;
          height: 18px;
          &.buy{
            width: 18px;
            background:url(/img/svg/ico_acorn_buy.svg) no-repeat;
          }
          &.gift{
            width: 17px;
            background:url(/img/svg/ico_acorn_gift.svg) no-repeat;
          }
          &.history{
            width: 14px;
            background:url(/img/svg/ico_acorn_history.svg) no-repeat;
            
          }
        }
      }
    }
  }
`;

const AcornAD = styled.div`
  margin-top:40px;
  a{
    display: block;
    position: relative;
    background-color: #F6F6F6;
    border-radius: 12px;
    padding: 19px 20px;
    font-size: 16px;
    color:#000000;
    font-weight: 300;
    &:after{
      content: '';
      display: block;
      position: absolute;
      width: 7px;
      height: 13px;
      background: url(/img/svg/ico_more_light.svg);
      right:22px;
      top:24px;
    }
  }
`;

const HallOfFame = styled.div`
    margin: 0 -30px;
    padding: 0 30px;
    background-color: #ebedf2;
    &.page{
          padding: 35px 30px 0;
          background-color: transparent;
          h3{
            width: 162px;
            margin: 0 auto 0px;
            padding-bottom:10px;
            padding-right: 28px;
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            background: url('/img/svg/ico_down_black.svg') no-repeat 90% 25% /15px;
            cursor: pointer;
            }
          }
      `;



const styledComponents = {
  EMMainInfo, AcornAD, HallOfFame,
};

export default styledComponents;
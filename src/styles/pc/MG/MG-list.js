import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

const H3 = styled('h3', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      padding: 0;
      font-size: 22px;
      font-weight: 400;
      color: ${Colors.text_title};
      ${Space}; 
    `;
  }}
`;

const TitleBar = styled.div`
  display: flex;
  border-bottom: 1px dashed #E5E5E5;
  &.noline{
    position: relative;
    display: block;
    text-align: center;
    border-bottom: 0;
    .title_page{
      padding: 28px 0;
    }
    .ico_back_arrow{
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const Notice = styled('div', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      position: relative;
      padding: 16px 30px 16px 58px;
      line-height: 24px;
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 3px rgba(0, 0, 0, 0.03);
      font-size: 15px;
      font-weight: 300;
      color: ${Colors.text_title};
      background: #fff url('/img/svg/ico_notice_list.svg') no-repeat 26px 16px /24px;
      ${Space}; 
    `;
  }}
`;

const GuestBook = styled('div', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      position: relative;
      margin: 12px auto 0;
      padding: 30px 30px 30px;
      background-color: #fff; 
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 3px rgba(0, 0, 0, 0.03);

      &.lock{
        background-color: rgba(18, 159, 206, 0.08);
      }

      &.my{
        .function{
          .ico_more{
            display: none;
          }
        }
      }

      .items{
        display: flex;
        position: relative;
        color: ${Colors.text_title};

        &.depth2{
          margin-top: 50px;
          margin-left: 68px;
          &::before{
            content: '';
            position: absolute;
            left: -31px;
            top: 0px;
            width: 16px;
            height: 16px;
            border-left: 1px solid #B3B3B3;
            border-bottom: 1px solid #B3B3B3;
          }
        }
      }

      .thumb{
        overflow: hidden;
        width: 48px;
        height: 48px;
        border-radius: 20px;
        img{
          display: block;
          width: 48px;
          height: 48px;
        }
      }

      .contents{
        margin-left: 20px;
        width: 596px;
        .subtitle{
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_title};
          .new{
            display: inline-block;
            margin-left: 4px;
            vertical-align: middle;
            width: 14px;
            height: 14px;
            background: url('/img/svg/bullet_new.svg') no-repeat 50% 50% /14px;
          }
          .chip{
            display: block;
            vertical-align: middle;
            margin-top: 8px;
            padding: 0 8px 0 26px;
            width: 81px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            font-weight: 300;
            color: ${Colors.cy_orange_vari};
            background: #fff url('/img/svg/ico_lock_small_filled.svg') no-repeat 10px 50% /12px;
            border-radius: 12px;
          }
        }
        .datetime{
          display: inline-block;
          vertical-align: middle;
          padding-left: 4px;
          font-size: 14px;
          font-weight: 300;
          color: ${Colors.text_subbody};
        }
        .desc{
          padding-top: 16px;
          font-size: 16px;
          color: ${Colors.text_body};
        }
        .btn_comment{
          position: relative;
          z-index: 1;
          margin-top: 5px;
          margin-left: -16px;
          margin-bottom: -10px;
        }
      }

      .function{
        flex: 1 1 116px;
        text-align: right;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        justify-content: space-between;
        .ico_more{
          margin-top: -10px;
          margin-right: -10px;
          background-color: transparent !important;
        }
      }
      ${Space}; 
    `; 
  }}
`;


const styledComponents = {
  TitleBar, H3, Notice, GuestBook,
};

export default styledComponents;

import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'align', 'bg',
];

const Wrap = styled('div', props)`
  position: relative;
  padding: 0 0px;
  min-width: 1366px;
  min-height: 100%;
  background-color: #f6f6f6;

  .webview{
    padding: 40px 0 0px;
    width: 450px;
    min-height: 768px;
    &.login{
      padding-top: 0;
    }

    .wrap_login{
      min-height: 768px;
    }

    #header{
      position: absolute;
    }

    main{
      margin: 0 auto;
      padding: 0;
      section{
        padding: 0;
        border-radius: 0;
        box-shadow: none;
      }
    }
    
  }
  
  ${({ theme }) => {
    const { Space, BackgroundColor } = theme;
    return css`
      ${Space};
      ${BackgroundColor};
    `;
  }}
`;

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 20px 0px 80px;
  margin: 0 auto;
  width: 1366px;
  min-height: 100%;

`;

const Main = styled.main`
  position: relative;
  padding: 0 20px 0;
  width: 880px;
  min-height: 100%;

  section:last-child{
    padding-bottom: 80px;
  }
`;

const Section = styled('section', props)` 
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      position: relative;
      margin: 0 auto;
      padding: 0 30px;
      background-color: #fff; 
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 3px rgba(0, 0, 0, 0.03);
      ${Space};

      &.bg_none{
        padding: 0;
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
      }
      
      // 마니룸
      &.mr_active{
        border: 2px solid ${Colors.cy_blue};
        box-sizing: border-box;
        .subtitle{
          font-weight: 400;
          color: ${Colors.cy_blue};
        }
      }

      // 미니홈피 설정
      &.mh_admin{
        padding: 0 90px;
      }
      
      // 미니홈피 사진첩
      &.gallery{
        height: 838px;
      }

      // 파도타기 배너
      &.banner {
        overflow: hidden;
      }
      
      // 파도타기 스튜디오
      &.studio{
        text-align: center;
        .titlebar{
          margin-bottom: 40px;
          h3{
            font-size: 28px;
            font-weight: 300;
            color: ${Colors.cy_orange};
          }
          p{
            margin-top: 10px;
            font-size: 16px;
            color: ${Colors.text_title};
          }
        }
        .date{
          padding-left: 4px;
          font-size: 16px;
          color: ${Colors.text_body};
          text-align: left;
        }
        & > div > ul{
          text-align: left;
        }
        & > div > .btn_more{
          display: inline-block;
          padding-right: 17px;
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_subbody};
          background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px 24px;
        }
      }

      // 더보기(도토리)
      &.history{
        .styled_tab.web{
          .v-window{
            overflow: visible;
          }
          .v-tabs{
          border-bottom: 1px solid #e5e5e5;
          }
        }
        .titlebar{
          position: relative;
          margin-bottom: 17px;
          .use_total{
            margin: 27px 0 0 4px;
            font-size: 18px;
            color: ${Colors.text_body};
            span{
              font-weight: 400;
              color: ${Colors.text_title};
            }
          }
          .date{
            position: absolute;
            right: 4px;
            bottom: 2px;
            font-size: 14px;
            color: ${Colors.text_subbody};
          }
        }
      }
    `;
  }}
`;

const Contents = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #fff; 
  border-radius: 18px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 3px rgba(0, 0, 0, 0.03);     
`;

const Aside = styled.aside`
  position: relative;
  &.left{
    width: 216px;
  }
  &.right{
    width: 270px;
    .inner_aside{
      > div {
        margin-top: 12px;
        &:first-child{
          margin-top: 0;
        }
      }
    }
  }
`;

const AsideInner = styled.div`
  position: sticky;
  top: 88px;
`;

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1366px;
  height: 68px;
`;

const Outer = styled.div`
  &.m20{
    margin: 0 -10px;
  }
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

// profile avatar image
const AvatarImage = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;
    return css`
      position: relative;
      height: 100%;
      /* background-color: ${Colors.cy_blue}; */
      span{
        position:absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%, -50%);
        img{
          display: block;
          width: 70px;
          height: 130px;
        }
      }
      /* .img_avatar{
        display: block;
        margin: 0 auto;
        width: 180px;
        height: 180px;
      } */
      
    `;
  }}
`;

// 해시태그 검색
const TitlePage = styled.div`
  display: flex;
  position: relative;
  display: block;
  text-align: center;
  border-bottom: 0;
  .title_page{
    padding: 28px 0;
    font-weight: 300;
    border-bottom: 0;
  }
  .ico_back_arrow{
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const styledComponents = {
  Wrap, Container, Main, Inner, Contents, Submit, Hr, Aside, AsideInner, Section, Outer, AvatarImage, TitlePage, 
};

export default styledComponents;

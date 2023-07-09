import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

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

const AlbumDetail = styled('div', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      position: relative;
      margin: 12px auto 0;
      padding: 30px;
      background-color: #fff; 
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 3px rgba(0, 0, 0, 0.03);

      .titlebar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4{
          line-height: 44px;
          font-size: 20px;
          font-weight: 400;
          color: ${Colors.text_title};
        }
      }

      .thumb{
        overflow: hidden;
        position: relative;
        margin-top: 8px;
        &.video.hover{
          .swiper-button-prev, .swiper-button-next, .ico_video_stop, .swiper-pagination{
            display: none;
          }
          &:hover{
            .swiper-button-prev, .swiper-button-next, .ico_video_stop, .swiper-pagination{
              display: block;
            }
          }
        }
        img{
          display: block;
          width: 100%;
        }
        .swiper-slide{
          .ico_video_play, .ico_video_stop{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .ico_video_volume_on, .ico_video_volume_off{
            position: absolute;
            right: 24px;
            bottom: 24px;
          }
        }

        .swiper-pagination{
          position: absolute;
          left: auto;
          right: 24px;
          top: 24px;
          padding: 10px 14px;
          width: auto;
          height: 32px;
          border-radius: 13px;
          line-height: 12px;
          font-size: 12px;
          font-weight: 400;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .swiper-button-prev, .swiper-button-next {
          position: absolute;
          top: calc(50% - 22px);
          width: 44px;
          height: 44px;
          margin-top: 0;
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--swiper-navigation-color, var(--swiper-theme-color));
          background: rgba(0, 0, 0, 0.4);
          border-radius: 16px;
          &::after{
            content: '';
            width: 44px;
            height: 44px;
          }
        }

        .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
          opacity: 0;
        }

        .swiper-button-prev{
          left: 24px;
          background-color: transparent;
          &::after{
            display: none;
          }
        }
        .swiper-button-next{
          right:24px;
          background-color: transparent;
          &::after{
            display: none;
          }
        }
      }

      .desc{
        padding: 20px 10px;
        line-height: 16px;
        font-size: 16px;
        font-weight: 300;
        color: ${Colors.text_body};
        line-height: 24px;
        .hashtag{
          display: inline-block;
          vertical-align: middle;
          color: ${Colors.cy_blue_vari};
        }
        .notitag{
          display: inline-block;
          padding: 0 6px;
          vertical-align: middle;
          height: 24px;
          line-height: 24px;
          border-radius: 12px;
          background-color: #E5E5E5;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_title};
        }
        .btn_more{
          color: ${Colors.text_disabled};
        }
      }

      .date{
        padding: 0 10px;
        font-size: 14px;
        font-weight: 300;
        color: ${Colors.text_subbody};
      }

      .function{
        position: relative;
        margin-top: 30px;
        padding: 30px 10px 0;
        &::before{
          content: '';
          position: absolute;
          left: 10px;
          right: 10px;
          top: 0;
          height: 1px;
          background-color: #eee;
        }

        .btn_like{
          margin-left: -13px;
          margin-top: -12px;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_body};
          .ico_like{
            margin-right: 6px;
            background: url('/img/svg/ico_like.svg') no-repeat 0 0 / 24px;
          }
          &.on{
            .ico_like{
              background-image: url('/img/svg/ico_like_on.svg');
            }
          }
        }
        .btn_comment{
          margin-right: -13px;
          margin-top: -12px;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_body};
          .ico_comment{
            margin-right: 6px;
            background: url('/img/svg/ico_comment.svg') no-repeat 0 0 / 24px;
          }
        }
        .btn_share{
          /*position: absolute;
          right: 10px;
          top: 30px;
          margin-right: -13px;
          margin-top: -12px;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_body};
          .ico_share{
            margin-right: 6px;
            background: url('/img/svg/ico_share.svg') no-repeat 0 0 / 24px;
          }*/

          position: absolute;
          padding: 10px;
          right: 0;
          top: 17px;
          width: auto;
          height: auto;
          padding-left: 36px;
          font-size: 16px;
          letter-spacing: 0;
          font-weight: 300;
          color: ${Colors.text_body};
          background: url('/img/svg/ico_share.svg') no-repeat 10px 6px /24px;
          border-radius: 12px;
          &:hover::before, &:focus::before{
            opacity: 0;
          }
          .v-ripple__container{
            .v-ripple__animation{
              background-color: transparent !important;
            }
          }
        }

        .count{
          padding: 12px 0 10px;
          
          a{
            display: inline-block;
            font-size: 16px;
            font-weight: 300;
            color: ${Colors.text_title};
            .num{
              font-weight: 400;
            }
          }
          
          .lst_thumb{
            display: inline-block;
            vertical-align: middle;
            margin-right: 6px;
            li{
              position: relative;
              overflow: hidden;
              display: inline-block;
              vertical-align: middle;
              margin-left: -10px;
              &:nth-child(1){
                margin-left: 0;
                z-index: 10;
              }
              &:nth-child(2){
                z-index: 9;
              }
              &:nth-child(3){
                z-index: 8;
              }
              &:nth-child(4){
                z-index: 7;
              }
              &:nth-child(5){
                z-index: 6;
              }
              &:nth-child(6){
                z-index: 5;
              }
              &:nth-child(7){
                z-index: 4;
              }
              &:nth-child(8){
                z-index: 3;
              }
              &:nth-child(9){
                z-index: 2;
              }
              &:nth-child(10){
                z-index: 1;
              }
              .thumb{
                display: block;
                overflow: hidden;
                margin: 0;
                width: 28px;
                height: 28px;
                border-radius: 13px;
                border: 2px solid #fff;
                img{
                  display: block;
                  overflow: hidden;
                  border-radius: 10px;
                  width: 24px;
                  height: 24px;
                }
              }
            }
          }
        } // .count
      } // .function

      .original{
        display: block;
        margin-top: 30px;
        padding: 16px;
        display: flex;
        align-items: center;
        border-radius: 12px;
        background: #f6f6f6 url('/img/svg/ico_link.svg') no-repeat 100% 50% / 24px;
        background-position-x: calc(100% - 16px);
        .thumb{
          margin: 0; 
          width: 48px;
          height: 48px;
          border-radius: 20px;
          img{
            display: block;
            width: 48px;
            height: 48px;
          }
        }
        .desc{
          padding: 0 16px;
          font-size: 16px;
          font-weight: 300;
          color: ${Colors.text_body};
          .nickname{
            font-weight: 400;
            margin-top: -2px;
          }
        }
      }

      ${Space}; 
    `;
  }}
`;




const styledComponents = {
  TitleBar, AlbumDetail, 
};

export default styledComponents;

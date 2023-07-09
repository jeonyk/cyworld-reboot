import styled, { css } from 'vue-styled-components';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

const H2 = styled('h2', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      &.title_page{
        display: block;
        margin: 0 -10px;
        padding: 30px 10px 24px;
        height: 81px;
        line-height: 26px;
        font-size: 26px;
        font-weight: 400;
        color: ${Colors.text_title};
        border-bottom: 1px solid #E5E5E5;
        &.mr{
          height: auto;
          padding-top: 26px;
          padding-bottom: 3px;
          font-size: 26px;
          line-height: 1.4;
          border-bottom: 0;
        }
        &.fs{
          height: auto;
          padding-top: 27px;
          padding-bottom: 13px;
          margin-bottom: 24px;
          font-size: 26px;
          line-height: 1.4;
          border-bottom: 1px solid #eee;
        }
        &.noline{
          margin-bottom: 0;
          border-bottom: 0;
        }
        &.fw300{
          font-weight: 300;
        }
      }
      &.mh-title{
        font-family: 'DungGeunMo', sans-serif;
        color: ${Colors.cy_blue};
        font-size: 24px;
        border-bottom: none;
      }
      ${Space};
    `;
  }}
`;

const H3 = styled('h3', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      padding: 0 4px;
      font-size: 22px;
      font-weight: 400;
      color: ${Colors.text_title};
      ${Space}; 
    `;
  }}
`;

const TitleBar = styled('div', props)`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      position: relative;

      &.title_settings{
        h3{
          border-bottom:1px solid #EEEEEE;
          padding-bottom:16px;
          font-size:16px;
          font-weight:400;
          color: ${Colors.text_subbody};
        }
      }
      &.title_list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 4px;
        margin-top: 70px;
        /* border-bottom: 1px solid #e5e5e5; */
        &:first-child{
          margin-top: 0;
        }
        h3{
          line-height: 20px;
          font-size: 18px;
          font-weight: 400;
          color: ${Colors.text_body};
          .num{
            color: ${Colors.text_subtitle};
          }
        }
        .btn_more{
          display: inline-block;
          padding-right: 19px;
          font-size: 14px;
          font-weight: 400;
          color: ${Colors.text_subbody};
          background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px 24px;
        }

        // 미니홈피 설정
        &.admin{
          padding: 13px 0;
          margin-top: 0px;
        }
        
        // 미니홈피 사진첩
        &.gallery_grid{
          display:block;
          padding:0 4px;  
            & > div{
              position: relative;
            }
            h3{
              padding-top:48px;
              font-size:22px;
              line-height:normal;
              color:#1A1A1A;
            }
            .v-btn:not(.v-btn--round){
              height:auto !important;
              margin-bottom:-4px;
              margin-top:-4px;
              border-radius:0;
            }  
            
            .btn_more{
              padding-left:30px;
              font-size:22px;
              color:#1A1A1A;
              background: url('/img/svg/ico_folder_all.svg') no-repeat 0 -1px  /24px;
              &:before{
                width: 24px;
                height: 24px;
              }
            }
          }
          
          .ico_gallery_grid3{
            position:absolute;
            right:0; 
            top:20px;
            
          }
          .ico_gallery_grid5{
            position:absolute;
            right:0; 
            top:20px;
            
          }
          .ico_gallery_grid5-1{
            position:absolute;
            right:0; 
            top:20px;
            
          
          }
          
          h4{
            padding-top:30px;
            padding-bottom:24px;
            font-size: 18px;
            font-weight: 300;
            color: ${Colors.text_body};
      
            .num{
              font-weight: 400;
              color: ${Colors.text_subtitle};
            }
          }
        }        
      };

      &.mr{
        position: relative;

        .styled_checkbox{
          position: relative;
          top: 6px;
          display: inline-block;
        }
        .subtitle{
          position: relative;
          top: auto;
          display: inline-block;
          padding: 21px 0 15px;
        }
        .ico_more.v-btn--fab.v-size--default{
          position: absolute;
          top: 50%;
          right: 0;
          width: 44px;
          height: 44px;
          margin-top: -22px;
          border-radius: 16px;
          background: url('/img/svg/ico_more_white.svg') no-repeat 50% 50% /44px;
          .v-ripple__container{
            .v-ripple__animation{
              background-color: #3c3c3c;
            }
          }
          .v-btn__content{
            font-size: 0;
          }
        }
      };

      &.jukebox{
        position: relative;
        justify-content: normal;
        padding: 48px 0 24px;
        h3{
          color: ${Colors.text_title};
        }
        .align{
          margin-left: 24px;
          .v-btn{
            position: relative;
            min-width: auto;
            height: auto;
            padding: 0;
            font-weight: 400;
            color: ${Colors.text_subbody};
            vertical-align: bottom;
            & > span{
              margin-left: 12px;
              padding: 0 0 0 12px;
              &::before{
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                display: block;
                width: 1px;
                height: 12px;
                margin-top: -6px;
                background-color: #e5e5e5;
              }
            }          
            &.selected{
              color: ${Colors.cy_blue_vari};
            }
            &:first-child{
              span{
                margin-left: 0;
                padding: 0;
                &::before{
                  display: none;
                }
              }
            }
            .v-ripple__container{
              opacity: 0;
            }
          }
        }
        .btn_bgm{     
          position: absolute;
          right: 0;
          bottom: 24px;
          .count{
            position: relative;
            top: 1px;
            right: 4px;
            display: inline-block;
            height: 20px;
            padding: 0 6px;
            line-height: 20px;
            color: #fff;
            border-radius: 20px;
            background-color: ${Colors.cy_blue};
          }
          .v-btn{
            min-width: auto;
            height: auto;
            padding: 0;
            font-size: 16px;
            color: ${Colors.cy_blue_vari};
            &.v-btn--disabled{
              color: ${Colors.disabled} !important;
            }
            .v-ripple__container{
              opacity: 0;
            }
          }
        }
      };

      &.diary{
        
      }
      
      .subtitle{
        position: absolute;
        top: 26px;
        right: 0;
        font-size: 20px;
        font-weight: 300;
        color: ${Colors.text_subtitle};
      }

      &.admin{ 
        border-bottom:1px solid #E5E5E5;
        margin-bottom:8px;

        h3{
          font-weight:400;
          font-size:20px;
          color:#1A1A1A;
         
        }
      
        

        }
      }
      ${Space}; 
    `;
  }}
`;

// 다이어리 상세 공통 타이틀
const DiaryTitle = styled('ul', props)`
  ${({ theme }) => {
    const { Space, Colors} = theme;
    return css`
      padding-top: 56px;
      text-align: center;
    li{

      &.tit{
        .thumb{
          display: inline-block;
          font-size:16px;
          color:#333;
          margin-bottom:12px;
          background: url('/img/svg/bullet_diary.svg') no-repeat 0 0 /16px;
          padding-left:28px;
         
        }
      }

      &.openset{
        font-size:16px; 
        color: #808080;
       
      }

      &.date{
        font-family: 'DungGeunMo', sans-serif;
        color: ${Colors.cy_blue};
        font-size:40px;
        line-height:40px;
        margin-top:30px;
        margin-bottom:25px;
      }

      &.status{
        p{
          display: inline-block;
         
          &.feel{
            background: url('/img/svg/avafeel_4.svg') no-repeat 0px 0 /30px;
            padding-right:65px;
            padding-left:28px;
          }
          &.weather{
            background: url('/img/svg/avafeel_4.svg') no-repeat 0px 0 /30px;
            padding-left:28px;
          }
        }
      }
    }
      ${Space};
      }
    `;
  }}
`;

const styledComponents = {
  H2, H3, TitleBar, DiaryTitle,
};

export default styledComponents;

import styled, { css } from 'vue-styled-components';
import Tab from '@/components/Tab.vue';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb'
];

const TabWH = styled(Tab, props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      ${Space}; 
      &.styled_tab.web{
        padding-top: 48px;
        .v-tabs{
          position: absolute;
          left: 174px;
          top: 33px;
          width: auto;
          .v-tab{
            margin-right: 28px;
            padding-bottom: 24px;
          }
        }
        .v-window{
          overflow: visible;
        }
      }
      
    `;
  }}
`;

const TodayMember = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      ${Space};
      ul{
        margin-top: 30px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        li{
          a{
            overflow: hidden;
            position: relative;
            display: block;
            width: 228px;
            height: 228px;
            border-radius: 12px;
            text-align: center;
            img{
              display: block;
              width: 228px;
              height: 228px;
            }
            .desc{
              position: absolute;
              bottom: 27px;
              width: 100%;
              text-align: center;
              .nickname{
                line-height: 19px;
                font-size: 18px;
                font-weight: 400;
                color: #fff;
              }
              .msg{
                padding: 15px 22px 0;
                line-height: 14px;
                font-size: 13px;
                font-weight: 300;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
            
          }
        }
      }
    `;
  }}
`;

const MHOfficial = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      position: relative;
      h3{
        /* padding: 0 34px; */
        line-height: 36px;
      }
      margin: 60px 0px 0;

      .navi_slide{
        position: absolute;
        right: 0px;
        top: 0;
        display: inline-flex;
        
        .swiper-btn-prev, .swiper-btn-next{
          overflow: hidden;
          position: relative;
          top: auto;
          left: auto;
          right: auto;
          width: 36px;
          height: 36px;
          margin: 0 0 0 8px;
          &::after{
            display: none;
          }
          background-color: #fff;
          &.swiper-button-disabled{
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
          }
        }

        .swiper-btn-prev{
          background: url('/img/svg/ico_add_prev.svg') no-repeat 0 0 / 36px;
          &:hover{
            background-image: url('/img/svg/ico_add_prev_on.svg');
          }
        }
        .swiper-btn-next{
          background: url('/img/svg/ico_add_next.svg') no-repeat 0 0 / 36px;
          &:hover{
            background-image: url('/img/svg/ico_add_next_on.svg');
          }
        }
      }
      .swiper-container{
        margin-top: 12px;
      }
      .swiper-slide{
        a{
          display: block;
          text-align: center;
          .thumb{
            /* overflow: hidden; */
            margin: 0 auto;
            width: 100px;
            height: 100px;
            
            img{
              display: block;
              width: 100px;
              height: 100px;
              border-radius: 42px;
            }
          }
          .nickname{
            margin: 0 auto;
            padding-top: 16px;
            width: 110px;
            text-align: center;
            font-size: 16px;
            font-weight: 300;
            color: ${Colors.text_title};
          }
          .confirm{
            position: relative;
            &::before{
              content: '';
              position: absolute;
              right: 0;
              top: 0;
              width: 24px;
              height: 24px;
              background: url('/img/svg/ico_confirm.svg') no-repeat 0 0 /24px;
            }
          }
        }
      }
      ${Space};
    `;
  }}
`;

const Banner = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      margin: 60px -30px 0;
      a{
        display: block;
        img{
          display: block;
          width: 100%;
        }
      }
      &.praise{
        height: 180px;
        margin: 0 -30px;
      }
      ${Space};
    `;
  }}
`;

const SlideMiniRoom = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      position: relative;
      h3{
        padding: 0 34px;
        line-height: 36px;
      }
      margin: 60px -30px 0;

      .navi_slide{
        position: absolute;
        right: 30px;
        top: 0;
        display: inline-flex;
        
        .swiper-btn-prev, .swiper-btn-next{
          overflow: hidden;
          position: relative;
          top: auto;
          left: auto;
          right: auto;
          width: 36px;
          height: 36px;
          margin: 0 0 0 8px;
          &::after{
            display: none;
          }
          background-color: #fff;
          &.swiper-button-disabled{
            opacity: 0.35;
            cursor: auto;
            pointer-events: none;
          }
        }

        .swiper-btn-prev{
          background: url('/img/svg/ico_add_prev.svg') no-repeat 0 0 / 36px;
          &:hover{
            background-image: url('/img/svg/ico_add_prev_on.svg');
          }
        }
        .swiper-btn-next{
          background: url('/img/svg/ico_add_next.svg') no-repeat 0 0 / 36px;
          &:hover{
            background-image: url('/img/svg/ico_add_next_on.svg');
          }
        }
      }
      
      .swiper-container{
        margin-top: 12px;
        padding-left: 30px;
        padding-right: 30px;
      }
      .swiper-slide{
        width: 400px;
        a{
          display: block;
          img{
            display: block;
            width: 400;
            height: 200px;
          }
          .roomname{
            padding: 12px 4px;
            font-size: 18px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
          .userinfo{
            position: relative;
            display: flex;
            align-items: center;
            padding-left: 4px;
            .thumb{
              overflow: hidden;
              width: 24px;
              height: 24px;
              border-radius: 10px;
              img{
                display: block;
                width: 24px;
                height: 24px;
              }
            }
            .nickname{
              padding-left: 10px;
              font-size: 14px;
              font-weight: 300;
              color: ${Colors.text_title};
            }
          }
        }
      }

      
      
      ${Space};
    `;
  }}
`;

const SlideHashtag = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      position: relative;
      h3{
        /* padding: 0 34px; */
        line-height: 36px;
      }
      margin: 60px 0px 0;

      .lst_hash{
        display: flex;
        flex-flow: row nowrap;
        li{
          margin-left: 10px;
          &:first-child{
            margin-left: 0;
          }
        }
      }
      
      .swiper-container{
        margin-top: 12px;
        margin-left: -4px;
        margin-right: -4px;
      }
      .swiper-slide{
        a {
          display: block;
          width: 156px;
          &:hover{
            .thumb_album{
              .count{
                opacity: 1;
              }
            }
          }
          .thumb_album{
            overflow: hidden;
            position: relative;
            border-radius: 12px;
            margin: 0 auto;
            width: 148px;
            img{
              display: block;
              width: 148px;
              height: 148px;
            }
            .count{
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              text-align: center;
              transition: opacity 0.3s;
              opacity: 0;
              &::before{
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
              }
              span{
                position: relative;
                z-index: 1;
                display: inline-block;
                padding-left: 28px;
                font-size: 14px;
                font-weight: 400;
                color: #fff;
              }
              .like{
                background: url('/img/svg/ico_like_white.svg') no-repeat 0 50% /24px;
              }
              .comment{
                margin-left: 17px;
                background: url('/img/svg/ico_comment_white.svg') no-repeat 0 50% /24px;
              }
            }
          }
          
          .roomname{
            padding: 12px 4px;
            font-size: 18px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
          .userinfo{
            position: relative;
            display: flex;
            align-items: center;
            margin-top: 10px;
            padding-left: 4px;
            .thumb{
              overflow: hidden;
              width: 24px;
              height: 24px;
              border-radius: 10px;
              img{
                display: block;
                width: 24px;
                height: 24px;
              }
            }
            .nickname{
              flex: 1;
              padding-left: 10px;
              font-size: 14px;
              font-weight: 300;
              color: ${Colors.text_title};
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }

      
      
      ${Space};
    `;
  }}
`;

const Studio = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      margin: 60px 0 0;
      .titlebar{
        display:flex;
        align-items: center;
        .date{
          flex: 1;
          padding-left: 16px;
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.text_disabled};
        }
        .btn_more{
          padding-right: 19px;
          font-size: 14px;
          font-weight: 400;
          color: ${Colors.text_subbody};
          background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px 24px;
        }
      }
      
      .lst_studio{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        li{
          width: 249px;
          a{
            display: block;
            position: relative;
            padding: 40px 24px 30px;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            
            .rank{
              position: absolute;
              top: 16px;
              left: 16px;
              padding-top: 28px;
              width: 28px;
              text-align: center;
              line-height: 14px;
              font-family: 'DungGeunMo';
              font-size: 28px;
              font-weight: 400;
              color: #EDB200;
              background: url('/img/svg/ico_rank1.svg') no-repeat 50% 0 / 28px;
              &.first{
                background-image: url('/img/svg/ico_rank1.svg');
                color: #EDB200;
              }
              &.second{
                background-image: url('/img/svg/ico_rank2.svg');
                color: #949494;
              }
              &.third{
                background-image: url('/img/svg/ico_rank3.svg');
                color: #A57136;
              }
            }
            .thumb{
              overflow: hidden;
              margin: 0 auto;
              width: 100px;
              height: 100px;
              border-radius: 40px;
              img{
                display: block;
                width: 100px;
                height: 100px;
              }
            }
            .nickname{
              margin: 30px -24px 40px;
              text-align: center;
              line-height: 19px;
              font-size: 18px;
              font-weight: 400;
              color: ${Colors.text_title};
            }
            .percent{
              overflow: hidden;
              position: relative;
              height: 5px;
              border-radius: 3px;
              background-color: #e5e5e5;
              span{
                position: absolute;
                left: 0;
                top: 0;
                height: 5px;
                width: 0%;
                border-radius: 3px;
                background-color: ${Colors.cy_blue};;
              }
            }
            .count{
              margin-top: 12px;
              line-height: 14px;
              font-size: 14px;
              font-weight: 300;
              color: ${Colors.text_subbody};
              .num{
                font-weight: 400;
                color: ${Colors.cy_blue};
              }
            }
          }
        }
      }
      
      ${Space};
    `;
  }}
`;

const BGM = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      margin: 0 -30px;
      padding: 60px 50px;
      background-color: rgba(243, 113, 36, 0.12);
      h3{
        position: relative;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        color: ${Colors.text_subtitle};
        .feel{
          padding: 0 5px 0 0;
          font-family: 'DungGeunMo';
          font-size: 22px;
          font-weight: 400;
          color: ${Colors.cy_blue};
          img{
            display: inline-block;
            margin-right: 2px;
            vertical-align: middle;
            width: 36px;
            height: 36px;
          }
        }
        .ico_refresh{
          position: absolute;
          right: -6px;
          top: 0;
        }
      }
      
      .lst_bgm{
        margin-top: 27px;
        display: flex;
        justify-content: space-between;
        li{
          a{
            display: block;
            position: relative;
            &:hover{
              .func_area{
                opacity: 1;
              }
            }
          }

          .thumb{
            position: relative;
            width: 125px;
            height: 125px;
            img{
              display: block;
              width: 125px;
              height: 125px;
            }
            .func_area{
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.4);
              transition: opacity 0.3s;
              opacity: 0;
              button{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: transparent;
              }
            }
          }
          .music{
            padding-top: 16px;
            line-height: 16px;
            font-size: 16px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
          .name{
            padding-top: 10px;
            line-height: 14px;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
        } // li
      } // .lst_bgm
      
      ${Space};
    `;
  }}
`;

const Theme = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      margin-top: 60px;
      h3{
        position: relative;
      }
      
      .lst_theme{
        margin-top: 15px;
        display: flex;
        justify-content: flex-start;
        li{
          margin-left: 6px;
          &:first-child{
            margin-left: 0;
          }
          a{
            display: block;
            position: relative;
          }

          .thumb{
            position: relative;
            width: 125px;
            height: 125px;
            img{
              display: block;
              width: 125px;
              height: 125px;
            }
            .func_area{
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.4);
              .theme{
                font-size: 16px;
                font-weight: 400;
                color: #fff;
              }
            }
          }
          .music{
            padding-top: 16px;
            line-height: 16px;
            font-size: 16px;
            font-weight: 400;
            color: ${Colors.text_title};
          }
          .name{
            padding-top: 10px;
            line-height: 14px;
            font-size: 14px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
        } // li
      } // .lst_theme
      
      ${Space};
    `;
  }}
`;

const TabChart = styled(Tab, props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      ${Space}; 
      &.styled_tab.web{
        padding-top: 0px;
        
        .v-tabs{
          position: absolute;
          left: auto;
          right: 0px;
          top: 5px;
          width: auto;
          .v-slide-group__content{
            /* justify-content: flex-end; */
            .v-tabs-slider-wrapper{
              height: 3px !important;
              .v-tabs-slider{
                background-color: ${Colors.cy_blue} !important;
              }
            }
          }
          .v-tab{
            position: relative;
            margin: 0 16px;
            padding-bottom: 9px;
            font-size: 16px;
            &:hover{
              color: ${Colors.cy_blue} !important;
            }
            &.v-tab--active{
              color: ${Colors.cy_blue} !important;
            }
            &::after{
              content: '';
              position: absolute;
              left: -15px;
              top: 2px;
              width: 1px;
              height: 12px;
              background-color: #e5e5e5;
            }
            &:nth-child(2){
              &::after{
                display: none;
              }
            }
          }
        }
        .v-window{
          overflow: visible;
        }
      }
      
    `;
  }}
`;

const Chart = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      position: relative;
      margin-top: 60px;
      h3{
        position: relative;
      }

      .base{
        padding: 30px 4px 16px;
        font-size: 16px;
        font-weight: 300;
        color: ${Colors.text_body};
      }
      ul{
        li{
          .no{
            width: 78px;
            text-align: center;
            font-size: 20px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
          .title_list{
            padding-left: 0;
            width: 286px;
          }
          .player{
            margin-left: 40px;
            width: 162px;
          }
          .ico_play, .ico_stop{
            margin-left: 25px;
          }

          .state, .btn{
            margin-left: 25px;
            min-width: 60px;
          }
        }
      }

      .more{
        padding-top: 7px;
        text-align: center;
        .btn_more{
          .v-btn__content{
            flex: unset;
            padding-right: 10px;
            line-height: 24px;
            color: ${Colors.text_subbody} !important;
            background: url('/img/svg/ico_more.svg') no-repeat 100% 50% / 6px;
          }
          
        }
      }
      
      ${Space};
    `;
  }}
`;

const TitleBar = styled.div`
  ${({ theme }) => {
    const { Colors, Space } = theme;
    return css`
      display: flex;
      border-bottom: 1px dashed #E5E5E5;
      &.noline{
        position: relative;
        display: block;
        text-align: center;
        border-bottom: 0;
        .title_page{
          padding: 28px 0;
          font-size: 26px;
          font-weight: 300;
          color: ${Colors.text_title};
          border-bottom: 0;
        }
        .ico_back_arrow{
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
        }
        ${Space}; 
    `;
  }}
`;

const Intro = styled.div`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      &.praise{
        height: 200px;
      }
      text-align: center;
      h3{
        font-size: 24px;
        font-weight: 400;
        color: ${Colors.cy_orange};
      }
      .desc{
        font-size: 18px;
        font-weight: 300;
        color: ${Colors.text_title};
      }
      ${Space}; 
    `;
  }}
`;

const HeroContents = styled.div`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      padding:0 20px;
      .hero{
       text-align: center;
      }
      .date{
        font-size:16px;
        padding-top:48px;
        padding-bottom:14px;
        color: ${Colors.text_subbody};
      }
      .intro{
        font-size:20px;
        padding-bottom:50px;
        color: ${Colors.cy_orange};
        &.quotes{ 
        background: url('/img/svg/ico_quotes.svg') no-repeat 50% 56px /20px;
        padding-top:80px
        }
      }
      .rank{
        height: 32px;
        margin-bottom: 5px;
        font-size: 0;
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: 32px auto;
        &.first{
          background-image: url('/img/svg/ico_crown1.svg');
        }
        &.second{
          background-image: url('/img/svg/ico_crown2.svg');
        }
        &.third{
          background-image: url('/img/svg/ico_crown3.svg');
        }
      }
      .thumb{
        &>img{
          width: 140px;
          height: 140px;
          border-radius: 60px;
        }
      }
      .profile{
        font-size:20px;
        font-weight:400;
        color: ${Colors.text_title};
        padding-top:30px;
        padding-bottom:30px;
        &.next{
          padding-bottom:42px;
        }
        
      }
      .likebox{
        width: 740px;
        height: 68px;
        background:#F6F6F6;
        border-radius: 12px;
        line-height:68px;
        font-size:15px;
        color: ${Colors.text_title};
        &>.liketit{
          color: ${Colors.text_subbody};
          padding-right:15px;
        }
        &>.like{
          color: ${Colors.cy_orange_vari};
          font-weight:500;
        }
      }
      .todaybox{       
        display: flex;
        align-items:center;
        font-size:16px;
        font-weight:400;
        width: 740px;
        height: 68px;
        background:#F6F6F6;
        border-radius: 12px;
        line-height:68px;
        font-size:16px;
        color: ${Colors.text_title};
        padding-left:30px;
        .likeday{
          padding-right:320px;
        }
        .like{
          color: ${Colors.cy_orange_vari};
        }
        .btn_today{
          font-size:14px;
          border-radius: 8px;
          height:36px;
        }
      }
      .subtitle{
        background: url('/img/svg/bullet_diary_note.svg') no-repeat 0 62px /24px;
        font-size:18px;
        font-weight:500;
        color: ${Colors.text_body};
        padding-top:62px;
        padding-left:29px;
      }
      .herotitle{
        font-size:18px;
        color: ${Colors.text_title};
        font-weight:500;
        padding:29px 0 16px 0;
      }
      .txt1{
        font-size:16px
        color: ${Colors.text_body};
      }
      .txt2{
        font-size:16px
        padding:26px 0 26px 0;
        color: ${Colors.text_body};
      }
      .txt3{
        font-size:16px;
        color: ${Colors.text_body};
        padding-bottom:60px;
      }
      .support{
        width: 740px;
        height: 120px;
        border-radius: 12px;
        background-color:rgba(18, 159, 206, 0.08);
        overflow: hidden;
        display: flex;
        align-items:center;
        &>span{
         padding:0 16px 0 30px;
        
        }
        &>p{
          padding-right:28px;
          margin:0;
          font-size:15px;
          font-weight:400;
          color:#1A1A1A;
        }
        .btn_acorn{
          margin:42px 0 42px 0;
          font-size:14px;
          border-radius: 8px;
          height:36px;
        }
      }
      ${Space}; 
    `;
  }}
`;

const ThisWeekHero = styled('div', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      ${Space};
      .btn_more{
        margin-top: 20px;
      }
    `;
  }}
`;

const HallOfFame = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      margin: 0 -30px;
      padding: 0 30px;
      background-color: #ebedf2;
      ul > li{
        border: 0;
        & > a{
          .nickname{
            margin: 24px -24px 16px;
            font-size: 16px;
          }
        }
      }
      .btn_more{
        margin-top: 24px;
      }

      // 명에의 전당 페이지
      &.page{
        padding: 45px 30px 0;
        background-color: transparent;
        h3{
          width: 162px;
          margin: 0 auto 38px;
          padding-right: 28px;
          font-size: 22px;
          font-weight: 400;
          text-align: center;
          background: url('/img/svg/ico_down_black.svg') no-repeat 100% 50% /15px;
          cursor: pointer;
          }
        .titlebar{
          position: relative;
          text-align: center;
          .date{
            font-size: 16px;
            color: ${Colors.text_subbody};
            text-align: left;
          }
          .btn_more{
            position: absolute;
            right: 0;
            bottom: 2px;
            padding-right: 19px;
            font-size: 14px;
            font-weight: 400;
            color: ${Colors.text_subbody};
            background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px;            
          }
        }
        ul{
          margin: 16px 0 62px;
          li{
            border: 1px solid #e5e5e5;
            .rank{
              width: 32px;
              height: 32px;
              margin-bottom: 5px;
              font-size: 0;
              background-repeat: no-repeat;
              background-position: 50% 0;
              background-size: 32px auto;
              &.first{
                background-image: url('/img/svg/ico_crown1.svg');
              }
              &.second{
                background-image: url('/img/svg/ico_crown2.svg');
              }
              &.third{
                background-image: url('/img/svg/ico_crown3.svg');
              }
            }
          }
        }
      }
      ${Space};
    `;
  }}
`;

const NextWeekHero = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      color: ${Colors.cy_orange};
      ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 10px;
        column-gap: 10px;
        li{
          width: 253px;
          & > a{
            padding: 24px 24px 30px;
            .thumb{
              width: 48px;
              height: 48px;
              margin: 0;
              border-radius: 20px;
            }
            .nickname{
              margin: 22px 0 0;
              font-size: 16px;
              text-align: left;
            }
            .count{
              margin-top: 6px;
              margin-bottom: 16px;
              font-size: 13px;
            }
            .desc{
              font-size: 14px;
              text-align: left;
            }
          }
        }
      }

      // 이 주의 주인공 페이지
      &.page{
        padding-top: 46px;
        .date{
          padding-left: 36px;
          font-size: 16px;
          font-weight: 400;
          color: ${Colors.cy_orange};
          background: url('/img/svg/ico_calendar_on.svg') no-repeat 6px 50% /18px;
        }
        ul{
          margin-top: 15px;
          li{
            & > a{
              padding: 24px;
            }
            .rank{
              top: 26px;
              left: auto;
              right: 24px;
              width: 32px;
              height: 32px;
              margin-bottom: 5px;
              font-size: 0;
              background-repeat: no-repeat;
              background-position: 50% 0;
              background-size: 32px auto;
              &.first{
                background-image: url('/img/svg/ico_crown1.svg');
              }
              &.second{
                background-image: url('/img/svg/ico_crown2.svg');
              }
              &.third{
                background-image: url('/img/svg/ico_crown3.svg');
              }
            }
            .percent{
              margin: 5px 0 8px;
            }
          }
        }
      }
      ${Space};
    `;
  }}
`;

const MusicBasketBestChartSubTitle = styled.div`
  font-size: 16px;
  font-weight: 300;
  color:#666;
  padding: 32px 4px 16px;
`;
const MusicThemeTitleImg = styled.div`
  padding: 48px 0;
  text-align: center;
  img{
    max-width: 140px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

`;

const styledComponents = {
  TitleBar, Intro, TabWH, TodayMember, MHOfficial, Banner, SlideMiniRoom, Studio, SlideHashtag, BGM, Theme, TabChart, Chart, HeroContents, ThisWeekHero, HallOfFame, NextWeekHero,
  MusicBasketBestChartSubTitle, MusicThemeTitleImg,
};

export default styledComponents;

<template>

<div>
<!--<v-btn depressed small @click="onClick">{{btnValue}}</v-btn>-->
  <v-dialog v-model="date" 
    :width="maxWidth === undefined ? '260': maxWidth"
    :content-class="maxWidth === undefined ? 'alert': 'modal'"
    :persistent="persistent"
  >
    <v-card :class="cardClass">
      <slot name="dialog-title"></slot>
      <slot name="dialog-text"></slot>
      <v-divider></v-divider>
      <v-card-actions>
        <slot name="dialog-btn"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>

</template>

<script>
  export default {
    props: {
      //btnValue: String,
      cardClass: String,
      open: Boolean,
      maxWidth: String,
      persistent:Boolean,
    },
    computed: {
      date: {
        get() {
          return this.open
        },
        set(newVal) {
            this.$emit('update:dateSettting', newVal)
        }
      },
    },
  }
</script>

<style lang="scss">
  .v-dialog__content{
    min-width: 800px;
  }
  .isMobile{
    .v-dialog__content{
      min-width: unset;
    }
  }

  .v-overlay--active{
    .v-overlay__scrim{
      min-height: 800px;
      background-color: rgb(0, 0, 0) !important;
      opacity: 0.1 !important;
      overflow-y: auto;
    }
  }
  .v-dialog:not(.v-dialog--fullscreen){
    max-height: none;
  }
  .v-dialog.v-dialog--active{
    font-family: "GothicNeoaUni",serif;
    border-radius: 12px;
    /*max-width: 260px;*/
    box-shadow: none;
  }
  .v-dialog.v-dialog--active > .v-card > .v-card__title{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    flex-wrap: nowrap;
    line-height: 1.4;
    text-align: center;
    padding: 35px 15px 36px 15px;
  }
  .v-dialog.v-dialog--active > .v-card > .v-card__text{
    text-align: center;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 300;
    padding: 0 15px 19px;
    color: rgba(0, 0, 0, 0.7);
  }
  .v-dialog.v-dialog--active > .v-card{
    &> .v-card__text.fs13{
      font-size: 13px;
    }
    &.web > .v-card__title,
    &.text.web > .v-card__title{
      padding: 36px 24px;
    }
    &.dark.web{
      background: none;
      .v-card__text{
        padding: 13px 23px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 40px;
      }
    }
    /* 방문자수 페이지 달력 */
    &.calendar{
      .v-card__text{
        padding: 20px 16px 20px;
      }
    }
    /* 일촌 도토리 선물하기 */
    &.giftselect{
      .v-card__title{
        position: relative;
        padding: 16px 16px 16px 28px;
        text-align: left;
        flex-direction: row;
        font-size: 20px;
        line-height: 44px;
        color: #1A1A1A;
        &.notitle{
          height: 76px;
        }
        &>button.pop-close-btn{
          position: absolute;
          right: 16px;
          top: 16px;
          width: 44px;
          height: 44px;
          background-image: url(/img/svg/ico_close.svg);
          cursor: pointer;
        }
        &>span.alert_ico_more{
          display: inline-block;
          position: absolute;
          right: 70px;
          top: 16px;
          width: 44px;
          height: 44px;
        }
      }
      .v-card__text{
        padding: 0 24px 24px;
        &.folder, &.diary-share-list{
          padding: 0 4px 24px 24px;
        }
        &.history{ // 더보기(도토리)
          padding: 0 24px 40px 24px;
        }
      }
    }
    .ico_more.v-btn--fab.v-size--default{
      position: absolute;
      top: 16px;
      right: 64px;
      width: 44px;
      height: 44px;
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
  }
  .v-dialog.v-dialog--active > .v-card.title2{
    &> .v-card__title{
      padding: 29px 15px 19px 15px;
    }
    &.web > .v-card__title{
      padding: 36px 24px 26px;
    }
  }
  .v-dialog.v-dialog--active > .v-card.title-text{
    &> .v-card__title{
      padding: 29px 14px 10px 14px;
    }
  }
  .v-dialog.v-dialog--active > .v-card.title-text2{
    &> .v-card__title{
      padding: 29px 15px 10px 15px;
    }
    &> .v-card__text{
      padding: 0 15px 13px;
      &:last-child{
        padding-bottom: 19px;
        }
    }
  }
  .v-dialog.v-dialog--active > .v-card.text{
    &> .v-card__text{
      padding: 26px 15px 26px 15px;
    }
    &.web > .v-card__text{
      padding: 36px 24px 26px;
    }
  }
  .v-dialog.v-dialog--active > .v-card.text2{
    &.web > .v-card__text{
     padding: 26px 24px;
    }
  }


  .v-dialog.v-dialog--active hr.v-divider{
    margin: 0;
    border-color: rgba(0, 0, 0, 0.04);
  }
  .theme--light.v-divider{
    border-color: rgba(0, 0, 0, 0.04);
  }
  .v-dialog.v-dialog--active > .v-card > .v-card__actions{
    padding: 0;
  }
  .v-dialog.v-dialog--active .v-card__actions .v-btn{
    border-radius: 0;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    color: #f36b2b;
    letter-spacing: normal;
  }

  .v-dialog.v-dialog--active .v-card__actions .theme--light.v-btn:hover::before{
    background-color: #000;
    opacity: 0.04;
  }
  .v-dialog.v-dialog--active .v-card__actions .v-ripple__container{
    .v-ripple__animation{
     background-color: rgba(252, 105, 38, 0.705) !important;
    }
  }

  .v-application--is-ltr .v-card__actions > .v-btn.v-btn + .v-btn.two-btns{
    margin: 0;
  }

  .v-dialog.v-dialog--active .v-card__actions .v-btn.two-btns {
    flex: 2;
  }
  .v-dialog.v-dialog--active .v-card__actions .v-btn.two-btns.cancel {
    color: rgba(0, 0, 0, 0.7);
  }
  .v-dialog.v-dialog--active .v-card__actions .two-btns.cancel .v-ripple__container{
    .v-ripple__animation{
     background-color: rgba(0, 0, 0, 0.5) !important;
    }
  }

  /* 방문자수 페이지 달력 */  
  .v-dialog.v-dialog--active .calendar_dialog{
    width: 248px;
    height: 227px;
    padding: 0 5px;
    position: relative;

    &>span{
      display: inline-block;
      position: absolute;
      content: '';
      width: 10px;
      height: 17px;
      cursor: pointer;
      top: 8px;
      background-size: 10px 17px;
      &.calendar_prev{
        background-image: url(/img/svg/ico_prev.svg);
        right: 64px;
        &.disabled{
          background-image: url(/img/svg/ico_prev_disabled.svg);
          pointer-events: none;
        }
      }
      &.calendar_next{
        background-image: url(/img/svg/ico_next.svg);
        right: 24px;
        &.disabled{
          background-image: url(/img/svg/ico_next_disabled.svg);
          pointer-events: none;
        }
      }
    }

    &>p{
      text-align: left;
      font-size: 24px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.9);
      padding-left: 11px;

    }
    &>ul{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 5px 27px;
      margin-top: 17px;
      &>li{
        width: 56px;
        font-size: 15px;
        color: #3c3c3c;
        padding: 13px 0 12px;
        line-height: 15px;
        border-radius: 16px;
        font-weight: 300;
        cursor: pointer;
        &:hover{
          background: #f6f6f6;
        }
        &.active{
          background: #F36B2B;
          color: #fff;
          font-weight: 400;
        }
        &.disabled{
          color: rgba(0, 0, 0, 0.38);
          pointer-events: none;
        }
      }
    }
  }

  .v-dialog{ // 캘린더 종료시 높이 고정
    & > .calendar{ 
      .v-divider, .v-card__actions{
        display: none;
      }
    }
  }

  /* 모달팝업 공통 */
  /*
  .v-dialog.modal{
    min-width: 450px;
  }
  LT-stats-popup에서 280px 있어서 주석처리*/
  .v-card.modalpopup{
    overflow: hidden;
    /* min-width: 450px; */
    .v-card__title{
       display: flex;
       flex-flow: row nowrap !important;
       justify-content: space-between;
       padding: 16px !important;
       .title_modal{
         padding-left: 12px;
         font-size: 20px;
         font-weight: 400;
         color: #1a1a1a;
       }
      .lst_func{
        display: flex;
        li{
          .v-btn{
            margin-left: 4px;
            
            &.ico_close_modal{
              &::before{
                background-color: #3C3C3C;
              }
              .v-ripple__container{
                .v-ripple__animation{
                  background-color: #3C3C3C;
                }
              }
              margin-left: 16px;
            }
          }
        }
      }
    }
    .v-card__text{
      padding: 0 24px 24px !important;
    }

  }
</style>

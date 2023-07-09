<template>
  <div :style='style'>
    <v-tabs
      v-model="tab"
      :grow='grow'
    >
      <slot name="v-tab"></slot>
    </v-tabs>

    <v-tabs-items
      v-model="tab"
    >
      <slot name="v-tab-item"
      :transition='transition'
      >
      </slot>
    </v-tabs-items>
  </div>
</template>

<script>
  export default {
    props: [
      'selected',
      'grow',
      'transition',
      'mt'
    ],
    data () {
      let selectedTab = this.selected;
      return {
        name: 'Tabs',
        tab: selectedTab,
      }
    },
    computed: {
      style () {
        return 'margin-top: ' + this.mt + 'px';
      }
    },
  }
</script>

<style lang="scss">
  .styled_tab{
    margin: 0 -16px;
    .v-tab{
      font-family: 'GothicNeoaUni';
      font-size: 15px;
      color: rgba(0, 0, 0, 0.8) !important;
      font-weight: 300;
      letter-spacing: normal;
      padding-top: 7px;
      &:hover{                
        &::before{
          background-color: rgba(0, 0, 0, 0.8);
          opacity: 0.12;
        }
      }
      .v-ripple__container{
        .v-ripple__animation{
          opacity: 0.12 !important;
        }
      }
    }
    &.web{
      margin: 0;
      padding: 0;
      .v-tabs{
        padding: 0;
        border-bottom: none;
      }
      .v-tab{
        min-width: 50px;
        margin-right: 32px;
        padding: 0 4px 16px;
        font-size: 22px;
        font-weight: 400;
        color: #666 !important;
        &:hover, &:active, &:focus{   
          color: #f36b2b !important;
          &::before{
            opacity: 0;
            display: none !important;
          }
        }
        .v-ripple__container{
          .v-ripple__animation{
            opacity: 0 !important;
          }
        }
        &.v-tab--active{
          color: #f36b2b !important;
          }
        }
      .v-tabs-slider-wrapper{
        height: 4px !important;
      }
      .v-window-item{
        padding: 0;
      }
      .v-tabs-bar{
        height: auto;
      }
      .v-text-field--filled > .v-input__control > .v-input__slot,
      .v-text-field--full-width > .v-input__control > .v-input__slot,
      .v-text-field--outlined > .v-input__control > .v-input__slot{
        min-height: 50px;
      }
    }
    /*하단 줄 */
    .v-window-item{
      padding: 0 16px;
    }
    .v-tabs{
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
      padding: 0 16px;
      /*margin: 0 -16px;
      padding: 0 16px;
      width: calc(100% + 32px);*/
    }
    .v-tabs-bar{
      height: 51px;
    }

    .v-tabs-slider-wrapper{
      color: #f36b2b !important;
      .v-tabs-slider{
        background-color: #f36b2b !important;
      }
    }
    .v-tab--active{
      color: #f36b2b !important;
      /*&.v-tab:not(:focus)::before{
        opacity: 0.12;
      }*/
      &::before{
        background-color: #f36b2b;
        opacity: 0.12;
      }
      &:hover{
        &::before{
          background-color: #f36b2b;
          opacity: 0.12;
        }
      }
      .v-ripple__container{
        .v-ripple__animation{
          background-color: rgba(0, 0, 0, 0.4);
          opacity: 0.04 !important;
        }
      }
    }
    .v-tabs-items{
      .v-window__container{
        /*padding: 0 24px;*/
        font-family: 'GothicNeoaUni';
        font-size: 16px;
        color: rgba(0, 0, 0, 1) !important;  
        font-weight: 400;
      }
    }

    &.gnb{
      .v-tabs{
        padding: 0;
        border-bottom: 0;
        .v-tabs-bar{
          height: 68px;
          .v-tabs-slider-wrapper{
            height: 4px !important;
          }
          .v-tab{
            margin: 0 25px;
            padding: 0 5px;
            min-width: unset;
            font-size: 18px;
            font-weight: 400;
          }
        }
      }
    }
  }
</style>
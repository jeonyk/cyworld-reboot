<template>
  <div>
    <v-switch
      :id='id'
      :input-value='inputValue'
      :flat='flat'
      :inset='inset'
      :disabled='disabled'
      :checkedFlag='checkedFlag'
      v-model="checkedValues"
      @change="$emit('change', $props, $event, checkedValues, inputValue)"
      @click="$emit('click', $props, $event, checkedValues, inputValue)"
    ></v-switch>
  </div>
</template>

<script>
  export default {
    name: 'Switch',
    props: [
      'id',
      'inputValue',
      'flat',
      'inset',
      'disabled',
      'checkedFlag',
      {
        click:Function,
        change: Function,
      }
    ],
    data () {
      return {
        checkedValues: this.checkedFlag === "true" ? true : false,
      }
    },
    methods: {

    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .styled_switch{
    .v-input--switch--inset{
      margin-top: 0;
      padding-top: 0;
      .v-input--switch__thumb{
        color: #fff !important;
        width: 16px;
        height: 16px;
        top: calc(50% - 8px);
        transform: translate(12px, 0) !important;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
        z-index: 3;
      }
      .v-input--switch__track{
        color: #9e9e9e !important;
        opacity: 1;
        width: 38px;
        height: 20px;
        left: 10px;
        top: calc(50% - 10px);
      }
      .v-input--selection-controls__ripple{
        color: rgba(0, 0, 0, 0.04);
        width: 36px;
        height: 36px;
        top: calc(50% - 18px);
        margin: 0;
        z-index: 2;
        &::before{
          opacity: 1;
        }
        .v-ripple__container{
          .v-ripple__animation{
            color: rgba(0, 0, 0, 0.5) !important;
          }
        }
      }
      &.v-input--is-label-active{
        .v-input--switch__track{
          color: #f36b2b !important;
          opacity: 1;
        }
        .v-input--selection-controls__ripple{
          color: rgba(243, 107, 43, 0.04);
          &::before{
            color: rgba(243, 107, 43, 0.04);
            opacity: 1;
          }
          .v-ripple__container{
            .v-ripple__animation{
              color: rgba(255, 255, 255, 1) !important;
            }
          }
        }
      }


      .v-input__slot{
        margin-bottom: 0;
        .v-input--selection-controls__input{
          margin-right: 0;
          width: 58px;
          height: 40px;
        }
      }

      .v-messages{
        display: none;
      }
    }
  }
  .v-application--is-ltr{
    .styled_switch{
      .v-input--switch{
        .v-input--selection-controls__ripple{
          left: 1px !important;
        }
      }
      .v-input--switch--inset{
        &.v-input--is-dirty{
          .v-input--selection-controls__ripple{
            &.primary--text{
              transform: translate(20px, 0) !important;
            }
          }
          .v-input--switch__thumb{
            &.primary--text{
              transform: translate(30px, 0) !important;
            }
          }
        }
      }
    }
  }
  </style>

<template>
  <div>
    <v-checkbox
        :id="id"
        :input-value='inputValue'
        :indeterminate='indeterminate'
        :disabled='disabled'
        :label='label'
        :aria-controls="ariaControls"
        v-model="checkedValues"
        @change="$emit('change', $props, $event, checkedValues, inputValue)"
    >
      <template v-if="htmlLabel" v-slot:append>
        <div v-html="linked"></div>
      </template>
    </v-checkbox>
  </div>
</template>

<script>
export default {
  names: 'Checkbox',
  props: [
    'id',
    'inputValue',
    'indeterminate',
    'disabled',
    'label',
    'ariaControls',
    'htmlLabel',
    {
      change: Function,
    }
  ],
  data () {
    return {
      checkedValues: false,
      linked: this.htmlLabel
    }
  },
  created () {
    if(this.inputValue) { // 초기 상태 checked 표시
      this.checkedValues = this.inputValue;
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .styled_checkbox{
    .v-input--checkbox{
      .v-label{
        font-family: 'GothicNeoaUni';
        font-size: 14px;
        color: rgba(0, 0, 0, 0.9);
      }
      &.v-input--is-focused .v-input--selection-controls__ripple:before,
      .v-radio--is-focused .v-input--selection-controls__ripple:before{
        background: #f36b2b;
        transform: scale(1.2);
        opacity: 0.04;
      }
      .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{
        background: rgba(0, 0, 0, 1);
        transform: scale(1.2);
        transition: none;
        opacity: 0.04;
      }
      &.v-input--is-label-active .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{
        background: rgba(243, 107, 43, 1) !important;
        transform: scale(1.2);
        transition: none;
        opacity: 0.04;
      }
      &.v-input--selection-controls{
        margin-top: 0;
      }
      .v-messages{
        min-height: 0;
      }
      .v-ripple__container{
        .v-ripple__animation{
          background-color: rgba(243, 107, 43, 0.2) !important;
        }
      }
      .mdi-checkbox-blank-outline::before{
        content: '';
        background-image: url('/img/svg/ico_checkbox.svg');
        width: 24px;
        height: 24px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
      .mdi-checkbox-marked::before{
        content: '';
        background-image: url('/img/svg/ico_checkbox_on.svg');
        width: 24px;
        height: 24px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    .v-input--is-disabled{
      .mdi-checkbox-blank-outline::before{
        background-image: url('/img/svg/ico_checkbox_disabled.svg');
      }
      .mdi-checkbox-marked::before{
        background-image: url('/img/svg/ico_checkbox_on_disabled.svg');
      }
    }
    &.indeterminate .mdi-minus-box::before,
    &.indeterminate .mdi-checkbox-marked::before{
      content: '';
      background-image: url('/img/svg/ico_checkbox_neutral.svg');
      width: 24px;
      height: 24px;
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }

    &.circle{
      .v-input--checkbox{
        &.v-input--is-focused .v-input--selection-controls__ripple:before,
        .v-radio--is-focused .v-input--selection-controls__ripple:before{
          background: #129fce;
        }
        &.v-input--is-label-active .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{
          background: #129fce !important;
        }
        .v-ripple__container{
        .v-ripple__animation{
            background-color: rgba(18, 159, 206, 0.2) !important;
          }
        }
        .mdi-checkbox-blank-outline::before{
          content: '';
          background-image: url('/img/svg/ico_checkbox_circle.svg');
        }
        .mdi-checkbox-marked::before{
          content: '';
          background-image: url('/img/svg/ico_checkbox_circle_on.svg');
        }
      }
    }

    &.web{
      .v-input--checkbox{
        &.v-input--is-focused .v-input--selection-controls__ripple:before,
        .v-radio--is-focused .v-input--selection-controls__ripple:before{
          background: #129fce;
        }
        &.v-input--is-label-active .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{
          background: #129fce !important;
        }
        .v-ripple__container{
        .v-ripple__animation{
            background-color: rgba(18, 159, 206, 0.2) !important;
          }
        }
        .mdi-checkbox-marked::before{
          content: '';
          background-image: url('/img/svg/ico_checkbox_web_on.svg');
        }
      }
    }
  }  

  .check_area.check_privacy{
    .styled_checkbox{
      .v-input--checkbox{
        .v-label{
          font-weight: 300;
        }
      }
    }
  }
</style>

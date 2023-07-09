<template>
  <div>
    <v-text-field
      class='styled_input'
      v-if="type === 'text'"
      filled
      clearable
      clear-icon="mdi-close-circle"
      :disabled='disabled'
      :label='label'
      :append-icon='appendIcon'
      :persistent-hint='persistentHint'
      :hint='hint'
      :counter='counter' 
      :placeholder='placeholder'
      :maxlength='maxlength'
      :solo='solo'
      :value='value'
      :style='style'
      hide-details='auto'
      @blur="onBlur"
      @change="onChange"
      @keyup="$emit('keyup')"
      v-model="date"
      :readonly='readonly'
    ></v-text-field>
    <v-text-field
      class='styled_input'
      v-else-if="type === 'password'"
      filled
      clearable
      clear-icon="mdi-close-circle"
      :label='label'
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      :persistent-hint='persistentHint'
      :hint='hint'
      :counter='counter'
      :placeholder='placeholder'
      :maxlength='maxlength'
      :solo='solo'
      :value='value'
      :style='style'
      ref='field_pw'
      @click:append="show = !show"
      hide-details='auto'
      @blur="onBlur"
      @mouseout="onMouseout"
      @change="onChange"
      @keyup="$emit('keyup')"
      v-model="passdate"
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: [
    'type',
    'label',
    'appendIcon',
    'persistentHint',
    'hint',
    'solo',
    'counter',
    'placeholder',
    'disabled',
    'maxlength',
    'value',
    'mt',
    'readonly'
  ],
  data () {
    return {
      show: false,
    }
  },
  created () {
    // console.log(this.mt);
  },
  computed: {
    style () {
      return 'margin-top: ' + this.mt + 'px';
    },
    date: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('update:dateSettting', newVal)
      }
    },
    passdate: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('update:dateSettting', newVal)
      }
    },

  },
  methods: {
    onBlur() {
      this.$emit('blur')
    },
    onMouseout() {
      this.$emit('mouseout')
    },
    onChange() {
      this.$emit('setInput', this.value)
    }
  }
}
</script>

<style lang="scss">
.styled_input.v-text-field--filled{
  /* default */
  .v-input__control{
    .v-input__slot{
      padding: 0 16px !important;
      border-radius: 12px;
      border: 1px solid transparent;
      background-color: #f6f6f6 !important;
      box-shadow: none !important;
      &::before, &::after {
        display: none;
      }
      &:hover{
        background-color: #f6f6f6 !important;
      }

      .v-text-field__slot{
        .v-label{
          top: 17px;
          font-family: 'GothicNeoaUni';
          font-weight: 300;
          font-size: 16px;
          color: rgba(0,0,0,0.38) !important;
        }

        input{
          font-family: 'GothicNeoaUni';
          font-weight: 400;
          font-size: 16px;
          color: #000;
          &::placeholder{
            font-family: 'GothicNeoaUni';
            font-weight: 300;
            font-size: 16px;
            color: rgba(0,0,0,0.38) !important;
          }
        }
      }

      .v-input__append-inner{
        margin-top: 15px;
        margin-left: 8px;
        .v-icon.v-icon.v-icon--link{
          color: rgba(0,0,0,0.38) !important;
        }
        .mdi-close-circle{
          display: none;
        }
        .v-icon.mdi-eye-off, .v-icon.mdi-eye{
          display: none;
        }
      }
    }

    .v-text-field__details{
      margin-bottom: 0;
      padding: 0 4px;
      .v-messages__message{
        font-family: 'GothicNeoaUni';
        font-size: 12px;
        font-weight: 300;
        color: #808080;
      }
      .v-counter{
        font-family: 'GothicNeoaUni';
        font-size: 12px;
        font-weight: 300;
        color: #666;
      }
    }
  }

  &.v-text-field--solo{
    .v-text-field__slot{
        input{
          margin-top: 0 !important;
        }
      }
  }

  /* default filled */
  &.v-input--is-dirty{
    /* default */
    .v-input__control{
      .v-input__slot{
        .v-text-field__slot{
          .v-label{
            display: none;
          }
          input{
            margin-top: 11px;
          }
        }
        .v-input__append-inner{
          .v-icon.mdi-eye-off, .v-icon.mdi-eye{
            display: block;
          }
        }
      }
    }
    /* filled focus */
    &.v-input--is-focused{
      .v-input__control{
        .v-input__slot{
          .v-text-field__slot{
            .v-label{
              display: block;
            }
            input{
              margin-top: 20px;
            }
          }

        }
      }
    }
  }

  /* default focus */
  &.v-input--is-focused{
    > .v-input__control{
    > .v-input__slot{
        background-color: #fff !important;
        border: 1px solid rgba(0, 0, 0, 0.38);

        .v-label--active{
          transform: translateY(-10px) scale(0.75);
        }

        input{
          margin-top: 20px;
          padding: 9px 0;
        }

        .v-input__append-inner{
          .mdi-close-circle{
            display: block;
          }
        }
      }
    }
  }

  &.v-input--is-disabled{
    opacity: 1 !important;
    > .v-input__control{
      opacity: 1 !important;
    > .v-input__slot{
      opacity: 1 !important;
        input{
          opacity: 1 !important;
          color: rgba(0, 0, 0, 0.38);
        }
      }
    }
  }
}

.web{
  .styled_input.v-text-field--filled{
    .v-input__control{
      .v-input__slot{
        .v-text-field__slot{
          input{
            color: #1a1a1a;
          }
        }
      }
    }
  }
}

/* error */
.input_error{
  .styled_input.v-text-field--filled{
    /* error default */
    .v-input__control{
      .v-input__slot{
        background-color: #fff;
        border-color: #411EC1;
      }
      .v-text-field__details{
        .v-messages__message{
          color: #411EC1;
        }
      }
    }

    /* error focused */
    &.v-input--is-focused{
      .v-input__control{
        .v-input__slot{
          border-color: #411EC1;
          background: #fff url('/img/svg/ico_info.svg') no-repeat 100% 50% /24px 24px !important;
          background-position-x: calc(100% - 16px) !important;
          transition: unset;
          .v-input__append-inner {
            .v-icon.mdi-eye-off, .v-icon.mdi-eye{
              display: none;
            }
          }
        }
      }
    }
  }

  /*체크 겹치는 부분 수정*/
  &#email .v-input__icon,&#nickname .v-input__icon{margin-right:30px;}
}

/* success */
.input_success{
  .styled_input.v-text-field--filled{
    /* success default */
    .v-input__control{
      .v-text-field__details{
        .v-messages__message{
          color: #058943;
        }
      }
    }

    /* success focused */
    &.v-input--is-focused{
      .v-input__control{
        .v-input__slot{
          background: #fff url('/img/svg/ico_check_success.svg') no-repeat 100% 50% /24px 24px !important;
          background-position-x: calc(100% - 16px) !important;
          transition: unset;
          .v-input__append-inner {
            .v-icon.mdi-eye-off, .v-icon.mdi-eye{
              display: none;
            }
          }
        }
      }
    }
  }
  /*체크 겹치는 부분 수정*/
  &#email .v-input__icon,&#nickname .v-input__icon{margin-right:30px;}
}

/* search */
.input_search{
  &.gift{
    margin: 0 -10px;
    margin-top:32px;
  }
  .styled_input.v-text-field--filled{
    /* success default */
    .v-input__control{
      .v-input__slot{
        padding-left: 56px !important;
        background-image: url('/img/svg/ico_search.svg')  !important;
        background-repeat: no-repeat  !important;
        background-position-x: calc(16px)  !important;
        background-position-y: 50%  !important;
        background-size: 24px  !important;
        transition: unset;
        .v-input__append-inner{
          margin-top: 0;
        }
      }
    }
  }
  &.medium{
    .styled_input.v-text-field--filled{
      /* success default */
      .v-input__control{
        .v-input__slot{
          padding-left: 52px !important;
        }
      }
    }
  }
}

/* size: medium(50) */
.medium{
  .styled_input.v-text-field--filled{
    /* default */
    .v-input__control{
      .v-input__slot{
        min-height: 48px;
        background-position-x: 18px !important;
        .v-text-field__slot{
          .v-label{
            top: 14px;
          }
          input{
            margin-top: 16px;
            color: #333;
          }
        }
      }
    }

    /* default filled */
    &.v-input--is-dirty{
      /* default */
      .v-input__control{
        .v-input__slot{
          .v-text-field__slot{
            input{
              margin-top: 8px;
            }
          }
          .v-input__append-inner{
            margin-top: 12px;
          }
        }
      }
      /* filled focus */
      &.v-input--is-focused{
        .v-input__control{
          .v-input__slot{
            .v-text-field__slot{
              input{
                margin-top: 16px;
              }
            }

          }
        }
      }
    } // .v-input--is-dirty

    &.v-text-field--solo{
      .v-input__control{
        .v-input__slot{
          .v-input__append-inner{
            margin-top: 0;
          }
        }
      }
    } // .v-text-field--solo
  } // .styled_input

  &.input_error .v-input__icon{margin-right:30px;}
  &.input_success .v-input__icon{margin-right:30px;}
} // .medium

/**/
.gift-input{
  .styled_input.v-text-field--filled .v-input__control .v-input__slot{
    background-color: #fff !important;
  }
  .styled_input.v-text-field--filled .v-input__control .v-input__slot .v-text-field__slot input{
    text-align: center;
    font-size: 20px;
    &::placeholder{
      font-weight: 300;
      font-size: 20px;
    }
  }
  .styled_input.v-text-field--filled .v-input__control .v-input__slot .v-input__append-inner .mdi-close-circle{
    display: none;
  }
  .styled_input.v-text-field--filled .v-input__control .v-input__slot .v-input__append-inner{
    margin-top: 0;
  }
  .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot{
    margin-left: 28px;
  }
}

.charge-input{
  .styled_input.v-text-field--filled .v-input__control .v-input__slot{
    min-height: 50px;
  }
  .styled_input.v-text-field--filled .v-input__control .v-input__slot{
    background-color: #EFEFEF !important;
  }
  .styled_input.v-text-field--filled.v-input--is-focused .v-input__control .v-input__slot{
    background-color: #fff !important;
  }
  .v-input__append-inner{
    display: none;
  }
  .styled_input.v-text-field--filled .v-input__control .v-input__slot .v-text-field__slot input{
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color:#1A1A1A;
    &::placeholder{
      font-family: 'Roboto';
      font-size: 20px;
      font-weight: 400;
      color:#8C8C8C;
    }
  }
  .styled_input.v-text-field--filled.v-input--is-focused .v-input__control .v-input__slot{
    background:#fff !important;
  }
}

</style>

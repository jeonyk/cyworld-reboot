<template>
  <div :style='style'>
    <v-textarea
      solo
      class="styled_input"
      no-resize
      :counter='counter'
      :placeholder='placeholder'
      :height='height'
      :value='value'
      @keyup="onChange"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: [
    'counter',
    'placeholder',
    'height',
    'mt',
    'mb',
    'value'
  ],
  data () {
    return {

    }
  },
  computed: {
    style () {
      return 'margin-top: ' + this.mt + 'px; margin-bottom: ' + this.mb + 'px;' ;
    }
  },
  methods: {
    onChange(event) {
      this.$emit('setInput', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.styled_input.v-textarea{
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

      .v-text-field__slot{
        textarea{
          margin-top: 18px;
          font-family: 'GothicNeoaUni';
          font-weight: 300;
          font-size: 16px;
          color: #000;
          line-height: 1.4;
          &::placeholder{
            font-family: 'GothicNeoaUni';
            font-weight: 300;
            font-size: 16px;
            color: rgba(0,0,0,0.38) !important;
          }
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

  /* default focus */
  &.v-input--is-focused{
    .v-input__control{
      .v-input__slot{
        background-color: #fff !important;
        border: 1px solid rgba(0, 0, 0, 0.38);
      }
    }
  }
}

.input_textarea.inquery{
  .styled_input.v-textarea{
    .v-text-field__details{
      display: none;
    }
  }
}

.input_textarea.web{
  .v-input__control{
    .v-input__slot{
      background-color: #fff !important;
      border-radius: 18px;
    }
  }
  .v-input--is-focused{
    .v-input__control{
      .v-input__slot{
        border-color: transparent;
      }
    }
  }
}
</style>
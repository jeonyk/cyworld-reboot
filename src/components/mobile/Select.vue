<template>
  <div>
    <!-- <v-select
      :items="items"
      label=""
      solo
    ></v-select> -->
    <select name="" id="" @change="$emit('change',$event)">
      <slot name="options"></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    counter: String,
    placeholder: String,
    height: String,
  },
  data () {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }
  },
  created () {

  },
  methods: {


  }
}
</script>

<style lang="scss">
.input_select{
  select{
    padding: 0 16px;
    width: 100%;
    height: 56px;
    background: #F6F6F6 url('/img/svg/ico_down.svg') no-repeat 100% 50% /18px;
    background-position-x: calc(100% - 13px);
    border-radius: 12px;

    font-family: 'GothicNeoaUni';
    font-weight: 300;
    font-size: 16px;
    color: rgba(0,0,0,0.38) !important;
    outline: none;
    &:focus{
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.38);
      font-weight: 400;
      font-size: 16px;
      color: #000 !important;
    }
  }
  &.selected{
    select{
      font-weight: 400;
      color: rgba(0,0,0,0.9) !important;
    }
  }
}

.styled_input.v-textarea{
  /* default */
  .v-input__control{
    .v-input__slot{
      padding: 0 16px !important;
      border-radius: 12px;
      border: 1px solid transparent;
      background-color: #f6f6f6;
      box-shadow: none !important;
      &::before, &::after {
        display: none;
      }

      .v-text-field__slot{
        textarea{
          margin-top: 18px;
          font-family: 'GothicNeoaUni';
          font-weight: 400;
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
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.38);
      }
    }
  }
}

</style>

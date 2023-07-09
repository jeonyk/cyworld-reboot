<template>
  <div>
    <v-radio
      :disabled='disabled'
      :label='label'
      :value='value'
      :color='color'
    ></v-radio>
  </div>
</template>

<script>
  export default {
    names: 'Radio',
    props: [
      'disabled',
      'label',
      'value',
      'color',
    ],
    data () {
      return {
      }
    },
    created () {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .styled_radio{
    .v-radio{
      .v-label{
        font-family: 'GothicNeoaUni';
        font-size: 14px;
        color: rgba(0, 0, 0, 0.9);
      }
      .v-icon{
        color: rgba(0, 0, 0, 0.7);
      }
      .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{
        background: rgba(0, 0, 0, 1);
        transform: scale(1.2);
        transition: none;
        opacity: 0.04;
      }
      &.v-item--active{
        .v-input--selection-controls__input .v-icon{
          color: #f36b2b !important;
          /* cy_blue */
          &.secondary--text{
            color: #129fce !important;
          }
        }
        .v-input--selection-controls__input:hover{
          .v-input--selection-controls__ripple:before{
            background: rgba(243, 107, 43, 1) !important;
            transform: scale(1.2);
            transition: none;
            opacity: 0.04;
          }
            /* cy_blue */
            .v-input--selection-controls__ripple.secondary--text:before{
              background: rgba(18, 159, 206, 1) !important;
           }
        }
      }    
      .v-input--selection-controls__ripple{
        &::before{
          color: rgba(243, 107, 43, 0.04);
          opacity: 1;
        }        
        .v-ripple__container{
          .v-ripple__animation{
            background-color: rgba(243, 107, 43, 0.2) !important;
          }
        }
        /* cy_blue */
        &.secondary--text{
          .v-ripple__container{
            .v-ripple__animation{
              background-color: rgba(18, 159, 206, 0.2) !important;
            }
          }
        }
      }
    }
  }
</style>
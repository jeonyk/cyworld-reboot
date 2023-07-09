<template>
  <div>
    <slot name="click-prepend" :events="{decrement:decrement}"></slot>
    <v-slider
      class='styled_slider'
      v-model='sliderValue'
      :prepend-icon='prependIcon'
    ></v-slider>
    <slot name="click-append" :events="{increment:increment}"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    props: [
      'prependIcon',
    ],
    data () {
      return {
        sliderValue: 36,
      }
    },
    methods: {
      decrement () {
        this.sliderValue--;
        console.log(this.sliderValue);
      },
      increment () {
        this.sliderValue++;
      },
    }
  }
</script>

<style lang="scss">
  .styled_slider{
    .v-input__control{
      .v-input__slot{
        .v-slider--horizontal{
          .v-slider__track-container{
            height: 3px;
            .v-slider__track-background{
              background: #fff !important;
              border-radius: 1px;
            }
            .v-slider__track-fill{
              background: #129fce !important;
              border-radius: 1px;
            }
          }
        }
        .v-slider__thumb-container{
          .v-slider__thumb{
            width: 18px;
            height: 18px;
            background: #fff !important;
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
            cursor: pointer;
            &:before{
              display: none;
            }
          }
        }
      }
    }
  }
  .profile-slider{
    .v-input__control{
      .v-input__slot{
        .v-slider--horizontal{
          .v-slider__track-container{
            height: 3px;
            .v-slider__track-background{
              background: rgba(243, 107, 43, 0.08) !important;
              border-radius: 1px;
            }
            .v-slider__track-fill{
              background: #F36B2B !important;
              border-radius: 1px;
            }
          }
        }
        .v-slider__thumb-container{
          .v-slider__thumb{
            width: 18px;
            height: 18px;
            background: #F36B2B !important;
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
            cursor: pointer;
            &:before{
              display: none;
            }
          }
        }
      }
    }
  }

  
</style>
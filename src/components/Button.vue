<template>
 
  
    <v-btn
      depressed
      :disabled='disabled'
      :x-small='xSmall'
      :x-large='xLarge'
      :large='large'
      :small='small'
      :block='block'
      :value='value'
      :color="color === undefined ? 'cy': color"
      :height='height'
      :width='width'
      :text='text'
      :outlined='outlined'
      v-bind="vbind"
      v-on="von"
      @click="onClick"
      :style='style'
    >
      <slot name="icon-left"></slot>
      {{value}}
      <slot name="icon-right"></slot>
    </v-btn>
  
</template>


<script>
export default {
  props: {
    depressed: Boolean,
    disabled: Boolean,
    xSmall:Boolean,
    xLarge:Boolean,
    large:Boolean,
    small:Boolean,
    block:Boolean,
    value:String,
    color:String,
    height:String,
    width:String,
    text:Boolean,
    outlined:Boolean,
    vbind:Object,
    von:Object,
    m:String,
    mr:String,
    mt:String,
    mb:String,
    ml:String,
  },
  data () {
    return {
    }
  },
  computed: {
    style () {
      return{
        marginBottom: this.mb+"px",
        marginTop: this.mt+"px",
        marginLeft: this.ml+"px",
        marginRight: this.mr+"px",
        margin: this.m+"px",
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  },
}
</script>


<style lang="scss">
  
  


  .theme--light.v-btn.cy::before {
    background-color: #e96729;
  }
  .theme--light.v-btn.cy_blue--text::before {
    background-color: #129fce;
  }
  .theme--light.v-btn.v-btn--has-bg.cy{
    background-color: #f36b2b;
    color: #ffffff;
  }
  .theme--light.v-btn.v-btn--has-bg.cy_blue--text{
    background-color: #129fce;
    color: #ffffff;
  }
  .theme--light.v-btn.v-btn--outlined.cy--text{
    color: #d14905;
    border-color: #d14905;
  }
  .theme--light.v-btn.v-btn--outlined.cy_blue--text{
    color: #129fce;
    border-color: #129fce;
  }

  .theme--light.v-btn.v-btn--has-bg.cy_blue{
    background-color: rgba(18, 159, 206, 0.08);
    color:#1A1A1A;
  }
  

  .theme--light.v-btn.cy:hover::before,.theme--light.v-btn.cy:focus::before{
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .theme--light.v-btn.v-btn--text:hover::before,.theme--light.v-btn.cy:focus::before{
    opacity: 0;
  }

  .theme--light.v-btn.v-btn--outlined:focus::before{
    opacity: 0.08 !important;
  }
  @media (hover: hover) { // pc에서만 적용
    .theme--light.v-btn.cy:hover::before,.theme--light.v-btn.cy:focus::before{
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.04);
    };
    .theme--light.v-btn.v-btn--text:hover::before,.theme--light.v-btn.cy:focus::before{
      opacity: 0;
    };
    .theme--light.v-btn.v-btn--outlined:focus::before{
      opacity: 0.08 !important;
    };
  }

  /* text button color */
  .v-btn--text{
    &.cy--text{
      color: #f36b2b;
    }
    &.cy_blue--text{
      color: #129FCE;
    }
  }
  
  .cy .v-ripple__container{
    .v-ripple__animation{
      background-color: rgba(0, 0, 0, 0.33) !important;
      /*opacity: 0.25 !important;*/
    }
  }

  .cy_blue .v-ripple__container{
    .v-ripple__animation{
      background-color: rgba(0, 0, 0, 0.33) !important;
    }
  }

  .v-btn--outlined.cy--text .v-ripple__container{
    .v-ripple__animation{
     background-color: rgba(243, 107, 43, 0.24) !important;
    }
  }

  .v-btn--text .v-ripple__container{
    .v-ripple__animation{
      background-color: rgba(0, 0, 0, 0.33) !important;
    }
  }

  .v-btn.gray--text{
    border-color: #e5e5e5;
    .v-btn__content{
      color: #1a1a1a !important;
    }
    
  }
  
  
  .theme--light.v-btn.v-btn--disabled.v-btn--has-bg{
    background-color: rgba(0, 0, 0, 0.1) !important;
    color:rgba(0, 0, 0, 0.38) !important;
  }

  .v-btn:not(.v-btn--round).v-size--large,.v-btn:not(.v-btn--round).v-size--large{
    height: 50px;
    font-size:16px;
    min-width: 120px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    border-radius: 12px;
  }

  .v-btn:not(.v-btn--round).v-size--default,.v-btn:not(.v-btn--round).v-size--default{
    height: 36px;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    border-radius: 9px;
  }

  .v-btn:not(.v-btn--round).v-size--small,.v-btn:not(.v-btn--round).v-size--small,.theme--light.v-btn:not(.v-btn--round).v-btn--outlined.v-size--small{
    height: 33px;
    font-size: 13px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    border-radius: 8px;
  }

  .v-btn:not(.v-btn--round).v-size--x-small,.theme--light.v-btn:not(.v-btn--round).v-btn--outlined.v-size--x-small{
    height: 28px;
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    border-radius: 8px;
  }
  
  .v-btn__content .v-icon.v-icon--left, .v-btn__content .v-icon.v-icon--right{
    width: 24px;
    height: 24px;
  }
  

  .v-btn:not(.v-btn--round).v-size--default{
    min-width: 60px;
  }

  .v-btn.fw400{
    font-weight: 400 !important;
  }

</style>
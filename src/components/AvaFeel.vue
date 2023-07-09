<template>
  <span class="avafeel" :style='style'></span>
</template>

<script>
export default {
  props:{
    width:String,
    height:String,
    backsize:String,
    m:String,
    mb:String,
    mt:String,
    ml:String,
    mr:String,
  },
  computed: {
    style () {
      return{
        width: this.width+"px",
        height: this.height+"px",
        backgroundSize: this.backsize+"px",
        marginBottom: this.mb+"px",
        marginTop: this.mt+"px",
        marginLeft: this.ml+"px",
        marginRight: this.mr+"px",
        margin: this.m+"px",
      }
    }
  },
}
</script>

<style lang="scss">
.avafeel{
  display: inline-block;
  width: 45px;
  height: 45px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 45px;
  /*사용안함*/
  &.avafeel-0{
    background-image: url('/img/svg/avafeel_0.svg');
  }
  /*답답*/
  &.avafeel-1{
    background-image: url('/img/svg/avafeel_1.svg');
  }
  /*사랑해 */
  &.avafeel-2{
    background-image: url('/img/svg/avafeel_2.svg');
  }
  /*별로 */
  &.avafeel-3{
    background-image: url('/img/svg/avafeel_3.svg');
  }
  /*개운*/
  &.avafeel-4{
    background-image: url('/img/svg/avafeel_4.svg');
  }
  /*기쁨*/
  &.avafeel-5{
    background-image: url('/img/svg/avafeel_5.svg');
  }
  /*앗싸*/
  &.avafeel-6{
    background-image: url('/img/svg/avafeel_6.svg');
  }
  /*열받음*/
  &.avafeel-7{
    background-image: url('/img/svg/avafeel_7.svg');
  }
  /*번뜩*/
  &.avafeel-8{
    background-image: url('/img/svg/avafeel_8.svg');
  }
  /*짜증*/
  &.avafeel-9{
    background-image: url('/img/svg/avafeel_9.svg');
  }
  /*행복*/
  &.avafeel-10{
    background-image: url('/img/svg/avafeel_10.svg');
  }
  /*끝*/
  &.avafeel-11{
    background-image: url('/img/svg/avafeel_2.svg');
  }
  /*그냥*/
  &.avafeel-12{
    background-image: url('/img/svg/avafeel_12.svg');
  }
  /*파이팅*/
  &.avafeel-13{
    background-image: url('/img/svg/avafeel_13.svg');
  }
  /*즐거움*/
  &.avafeel-14{
    background-image: url('/img/svg/avafeel_14.svg');
  }
  /*설렘*/
  &.avafeel-15{
    background-image: url('/img/svg/avafeel_15.svg');
  }
  /*외로움*/
  &.avafeel-16{
    background-image: url('/img/svg/avafeel_16.svg');
  }
  /*바쁨*/
  &.avafeel-17{
    background-image: url('/img/svg/avafeel_17.svg');
  }
  /*아픔*/
  &.avafeel-18{
    background-image: url('/img/svg/avafeel_18.svg');
  }
  /*쓸쓸*/
  &.avafeel-19{
    background-image: url('/img/svg/avafeel_19.svg');
  }
  /*명쾌*/
  &.avafeel-20{
    background-image: url('/img/svg/avafeel_20.svg');
  }
  /*위험*/
  &.avafeel-21{
    background-image: url('/img/svg/avafeel_21.svg');
  }
  /*신나*/
  &.avafeel-22{
    background-image: url('/img/svg/avafeel_22.svg');
  }
  /*황당*/
  &.avafeel-23{
    background-image: url('/img/svg/avafeel_23.svg');
  }
  /*불안*/
  &.avafeel-24{
    background-image: url('/img/svg/avafeel_24.svg');
  }
  /*귀찮음*/
  &.avafeel-25{
    background-image: url('/img/svg/avafeel_25.svg');
  }
  /*그림움*/
  &.avafeel-26{
    background-image: url('/img/svg/avafeel_26.svg');
  }
  
}


</style>
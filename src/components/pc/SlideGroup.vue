<template>
  <div class="today-r-f-wrap">
    <v-sheet
      class="mx-auto today-r-f"
      :max-width="maxWidth"
    >
    <slot name="f-slide-group"></slot>
    </v-sheet>
    <div class="fslide-btn-wrap">
      <span class="fslide-btn-prev" v-on:click="f_prev" v-bind:class="{disabled:prevact}"></span>
      <span class="fslide-btn-next" v-on:click="f_next" v-bind:class="{disabled:nextact}"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      domID:String,
      maxWidth:String,
      pagesize:String,
      total:Number,
    },
    data () {
      return{
        listsize:this.maxWidth,
        current:1,
        prevact:true,
        nextact:false,
      }
    },
    computed:{
      slide(){
        return document.querySelector("#"+this.domID);
      },
      // totalpage(){
      //   return Math.ceil(this.slide.childElementCount/this.pagesize);
      // }
    },
    mounted(){
      this.slide.style.transition=".8s cubic-bezier(.25,.8,.5,1)";
      if(this.$props.total===1){this.nextact=true;}
    },
    methods: {
      f_prev(){
        if(this.current>1){
          this.current = this.current -1;
          this.slide.style.transform="translateX(-"+(this.current-1)*this.listsize+"px)";
          this.btn_disabled();
        }
      },
      f_next(){
        if(this.current < this.$props.total){
          this.current = this.current +1;
          this.slide.style.transform="translateX(-"+(this.current-1)*this.listsize+"px)";
          this.btn_disabled();
        }
      },
      btn_disabled(){
        if(this.current===1){
          this.prevact = true;
        }else{
          this.prevact = false;
        }
        if(this.current===this.$props.total){
          this.nextact = true;
        }else{
          this.nextact = false;
        }
      },
    }

  }
</script>

<style lang="scss" scope>
.today-r-f-wrap{
  position: relative;
  
  .today-r-f{
    overflow: hidden;
  }

  .fslide-btn-wrap{
    position: absolute;
    top: -24px;
    left: 0;
    width: 100%;
    height: 36px;

    .fslide-btn-prev, .fslide-btn-next{
      display: inline-block;
      position: absolute;
      width: 36px;
      height: 36px;
      &:hover{
        cursor: pointer;
      }
    }
    .fslide-btn-prev{
      right: 44px;
      background-image: url(/img/svg/ico_add_prev.svg);
      &:hover{
        background-image: url(/img/svg/ico_add_prev_on.svg);
      }
      &.disabled{
        background-image: url(/img/svg/ico_add_prev_disabled.svg);
        pointer-events: none;
      }
    }
    .fslide-btn-next{
      right: 0;
      background-image: url(/img/svg/ico_add_next.svg);
      &:hover{
        background-image: url(/img/svg/ico_add_next_on.svg);
      }
      &.disabled{
        background-image: url(/img/svg/ico_add_next_disabled.svg);
        pointer-events: none;
      }
    }
  }  

  &.pf{
    .fslide-btn-wrap{
      top: 50%;
      margin-top: -18px;
      .fslide-btn-prev{
        left: 0;
        right: auto;
        border-radius: 12px;
        background-color: #fff;
        &.disabled{
          display: none;
        }
      }
      .fslide-btn-next{
        border-radius: 12px;
        background-color: #fff;
        &.disabled{
          display: none;
        }
      }
    }
  }
}  
</style>
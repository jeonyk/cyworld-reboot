<template>
<Wrap>
  <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
  <Contents :key="componentKey">
    <H3>이용약관</H3>

    <Dropdown mt="32" :items=items>
      <template v-slot:subitems>
        <v-list-item v-for="(time, index) in dataTime " :key="index" @click="timeChange(index,time)">
          <v-list-item-subtitle>{{time}}</v-list-item-subtitle>
        </v-list-item>
      </template>
    </Dropdown>

    <DescPolicy v-html="html">
    </DescPolicy>

  </Contents>

</Wrap>
</template>
<script>
import Header from "../includes/Header";
import Common from "../../../../styles/mobile/common/Common";
import Title from "../../../../styles/mobile/common/Title";
import Desc from "../../../../styles/mobile/common/Desc";
import Form from "../../../../styles/mobile/common/Form";
import Dropdown from "@/components/Dropdown.vue";

export default {
  components :{
    ...Common,
    ...Title,
    ...Desc,
    ...Form,
    Header,
    Dropdown,
  },
  mounted() {
    this.$store.dispatch('member/termslatest', 'CYWORLD').then(() => {
      for(var i=0 ; i<this.$store.getters.returnJson.data.length; i++){
        this.dataTime[i] =this.$store.getters.returnJson.data[i].dateTime.substring(0,10)
        this.htmlPathLIST[i] = this.$store.getters.htmlPathLIST[i]
        this.html = this.htmlPathLIST[0];
        this.items = this.dataTime[0];
      }
      this.forceRerender();
    })
  },
  data() {
    return {
      htmlPathLIST:[],
      dataTime:[],
      componentKey: 0,
      html:"",
      items:"",
    }
  },
  methods :{
    onCloseClick() {
      this.$func.postMessage("confirmClose")
    },
    onPrevClick() {
      if(this.$func.postMessage("confirmClose")){
        this.$router.go(-1);
      }
    },
    forceRerender() {
      this.componentKey += 1;
    },
    timeChange(index,time){
      this.items = time
      this.html = this.htmlPathLIST[index];
    },

  }
}


</script>
<style>

</style>

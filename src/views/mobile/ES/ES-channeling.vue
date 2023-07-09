<template>
  <Wrap>
    <Header close="close" @click="onCloseClick"  @prevClick="onPrevClick"/>
  <Contents>
    <H3>부가서비스</H3>
    <DescDefault type="Desc">
      싸이월드에 연결된 부가서비스 목록입니다.
    </DescDefault>
    <ListChanneling  v-if="partnerList.length > 0" component="nav" aria-label="channeling list" class="lst_channeling">
      <template v-slot:items>
      <ListChannelingDesc class="desc_channeling" v-for="partner in partnerList" :key="partner">
        <p class="thumb"><img :id="partner.affiliateId"  :src=partner.partnerIconUrl alt="" @click="test($event)"></p>
        <p class="title" :id="partner.affiliateId" @click="onClickSuccess">{{ partner.partnerName }}</p>
      </ListChannelingDesc>
      </template>
    </ListChanneling>
    <ListBlank v-else>연결된 부가서비스가 없습니다.</ListBlank>
  </Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Header from "../includes/Header";
import Title from "../../../styles/mobile/common/Title";
import Desc from "../../../styles/mobile/common/Desc";
import List from "../../../styles/mobile/common/List";

export default {
  components :{
    Header,
    ...Common,
    ...Header,
    ...Title,
    ...Desc,
    ...List
  },
  created() {
    this.$store.dispatch('member/partnerList').then((e) => {
      console.log('partnerList',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
      for (var i=0 ; i <this.$store.getters.returnJson.data.length ; i++){
        this.partnerList.push({
          partnerName:this.$store.getters.returnJson.data[i].partnerName,
          partnerIconUrl:this.$store.getters.returnJson.data[i].partnerIconUrl,
          affiliateId:JSON.stringify(this.$store.getters.returnJson.data[i].affiliateId)
        })
      }
    });
  },
  data(){
    return {
      partnerList:[]
    }
  },
  methods:{
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onClickSuccess(event){
      var affiliateId = event.currentTarget.id
      this.$router.push({name: 'ES-channelingdetail', params: {affiliateId: affiliateId}})
    },
    onPrevClick() {
        this.$router.go(-1);
    },
  }
}
</script>
<style>

</style>

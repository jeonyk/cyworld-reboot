<template>
  <div>
    <Header prev="prev" close="close" />
    <Contents>
      <Button large value="PASS인증서 발급여부 조회"  @click="certification"/>
      <Button large value="PASS 요청"  @click="passRequest"/>
      <Button large value="PASS 결과"  @click="passResult"/>
      <Button large value="멤버인증:certification"  @click="certification"/>
      <Button large value="다날인증:danalready:danalconfirm"  @click="danalready"/>
      <Button large value="다날확인:danalconfirm"  @click="danalconfirm"/>
      <Button large value="아이디 존재유무 확인"  @click="findId"/>
    </Contents>
    <Footer />
  </div>
</template>

<script>
import Header from '@/views/mobile/includes/Header.vue';
import Footer from '@/views/mobile/includes/Footer.vue';
import Button from "@/components/Button";
import Common from '@/styles/mobile/common/Common'

export default {
  components: {
    Button,
    Header,
    Footer,
    ...Common
  },
  data () {
    return {
      resData:{
        reqTxId:this.$route.query['reqTxId']
      },
      strData:{
              reqTxId : "",
              certTxId : ""
             }
    }
  },
  methods: {
    //PASS인증서 발급여부 조회
    certification: function() {
      console.log('certification: function() {');
      this.$store.dispatch('member/certification', '패스66||01019020066').then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
      });

    },
    //PASS 인증요청
    passRequest: function() {
      console.log('passRequest: function() {');
      this.$store.dispatch('member/passRequest', '패스66||01019020066').then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        console.log(this.$store.getters.returnJson.data.certTxId)
        this.strData.reqTxId = this.$store.getters.returnJson.data.reqTxId
        this.strData.certTxId = this.$store.getters.returnJson.data.certTxId
      });
    },
    //PASS 인증결과
    passResult: function() {
      console.log('passRequest: function() {');
      this.$store.dispatch('member/passResult', this.strData).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
      });
    },
    danalready: function() {
      this.$store.dispatch('member/danalready', ).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        this.danalconfirm(this.$store.getters.returnJson['data']).then((e) => {
          console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        });
      });
    },
    danalconfirm: function(reqTxId) {
      reqTxId = (this.$route.query.reqTxId)

      this.$store.dispatch('member/danalconfirm',reqTxId ).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));

      });
    },
    //아이디존재유무확인
    findId: function() {
      console.log('findId: function() {');
      this.$store.dispatch('member/findId', 'test03@fxgear.net').then(() => {
        //data가 true 이면 존재, false 이면 없음.
      });
      console.log('end findId: function() {');
    },
    login: function() {

    }

  }
}
</script>

<style>
  Button {
    margin-right: 10px;
  }
</style>

<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>

      <H3>본인확인을 진행하고 있습니다.</H3>

      <ListBlank class="blank_veri proceeding">
        <p class="msg_sub">
          입력하신 전화번호로 PASS 인증요청을 보냈어요.<br />
          PASS 앱으로 들어가서 비밀번호 또는 지문을 입력한 뒤, 아래에 있는 다음 버튼을 눌러주세요.
        </p>
      </ListBlank>

      <Submit mt="49">
        <Button value="다음" large block @click="HandleClickButton"></Button>
      </Submit>

      <Alert cardClass="title2" :open="popup" @update:dateSettting="setDate">
        <template v-slot:dialog-title>
          <v-card-title>
            PASS 인증을 완료하고<br />
            다시 시도해주세요.
          </v-card-title>
        </template>
        <template v-slot:dialog-btn>
          <v-btn class="two-btns" text x-large @click="popup = false">확인</v-btn>
        </template>
      </Alert>
    </Contents>
    <Footer />
  </Wrap>
</template>

<script>

  import Common from '@/styles/mobile/common/Common'
  import Title from '@/styles/mobile/common/Title'
  import Desc from '@/styles/mobile/common/Desc'
  import Header from '@/views/mobile/includes/Header'
  import Footer from '@/views/mobile/includes/Footer'
  import List from '@/styles/mobile/common/List'
  import Alert from "../../../components/Alert";
  import Button from '@/components/Button'

  export default {
    name: "COM-veriproceeding",
    components: {
      Header,
      Footer,
      ...Common,
      ...Title,
      ...Desc,
      ...List,
      Alert,
      Button,
    },
    created: function () {
      var name = this.$route.params.name;
      var phonenumber = this.$route.params.phonenumber;
      var id= name+'||'+phonenumber;
      this.$store.dispatch('member/passRequest', id).then((e) => {
        console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
        console.log(this.$store.getters.returnJson.data.certTxId)
        this.strData.reqTxId = this.$store.getters.returnJson.data.reqTxId
        this.strData.certTxId = this.$store.getters.returnJson.data.certTxId

      });
    },
    data() {
      return {
        popup : false,
        strData:{
          reqTxId : "",
          certTxId : ""
        },
        page : this.$route.params.page
      }
    },

    methods:{
      HandleClickButton(){
        this.$store.dispatch('member/passResult', this.strData).then((e) => {
          console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
          if(this.$store.getters.returnJson.data.statusCode == '1'){
            if(this.page === 'join'){
              this.$store.dispatch('member/findCi', this.strData.reqTxId).then((e) => {
                console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
                 if(this.$store.getters.returnJson.data != null){
                   this.$router.push({name: 'COM-verisuccess1', params: {page : this.page , reqTxId : this.strData.reqTxId ,phonenumber: this.$route.params.phonenumber}})
                 }else{
                   this.$router.push('/COM-veriexist')
                 }
              })
            }else{
              this.$router.push({name: 'COM-verisuccess1', params: {page : this.page ,phonenumber: this.$route.params.phonenumber}})
            }
          } else{
            this.popup = true
          }
        });

      },
      setDate(value) {
        this.popup = value
      },
      onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
      onPrevClick() {
        this.$router.go(-1);
      },
    }

  }

</script>

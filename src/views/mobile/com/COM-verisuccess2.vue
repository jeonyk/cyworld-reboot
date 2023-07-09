<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>

      <H3>본인확인에 성공했습니다.</H3>

      <ListBlank class="blank_veri success">
        <p class="msg_sub">
          다음 버튼을 눌러 <span>작업명</span> 절차를 계속 진행해주세요.
        </p>
      </ListBlank>

      <Submit mt="42">
        <Button value="다음" large block @click="HandleClickButton"></Button>
      </Submit>

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
  import Button from '@/components/Button'

  export default {
    name: "COM-verisuccess2",
    components: {
      Header,
      Footer,
      ...Common,
      ...Title,
      ...Desc,
      ...List,
      Button,
    },

    data() {
      return {
        page : this.$route.params.page,
        reqTxId : this.$route.params.reqTxId
      }
    },

    methods:{

      onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
      onPrevClick() {
        this.$router.go(-1);
      },
      HandleClickButton() {
          if(this.page.equals('A')){
            this.$router.push('/AL-S1-02')
          }else if(this.page.equals('B')){
            this.$router.push('/AI-findid2-02')
          }else if(this.page.equals('C')){
            this.$router.push('/AP-findpw-01')
          }else if(this.page.equals('D')){
            this.$router.push('/ES-leavecyworld03')
          }else if(this.page.equals('join')){
            this.$router.push({name: 'AJ-profile-01', params: {reqTxId : this.strData.reqTxId}})
          }
      }
    }

  }

</script>

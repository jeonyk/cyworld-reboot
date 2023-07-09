<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>

      <H3>본인확인에 성공했습니다.</H3>

      <ListBlank class="blank_veri success">
        <p class="msg_sub" v-if="memberAuthTypeJoin">
          사이좋은 싸이월드에 오신 것을 환영해요.<br />
          본격적으로 싸이월드에 입장하기 전에 몇 가지만 더 알려주세요. 아래 <span>회원가입 계속하기</span> 버튼을 눌러주세요.
        </p>
        <p class="msg_sub" v-else>
          다음 버튼을 눌러 <span>{{ memberAuthName }}</span> 절차를 계속 진행해주세요.
        </p>
      </ListBlank>

      <Submit mt="42">
        <Button :value="buttonName" large block @click="onBtnClick"></Button>
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
    name: "COM-verisuccess1",
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
        memberAuthName : '',
        memberAuthReturn : '',
        buttonName : '',
        memberAuthTypeJoin : true,
        page : this.$route.params.page,
        memberDataForm : {
          reqTxId : this.$route.query.reqTxId,
          phonenumber: this.$route.params.phonenumber
        }
      }
    },

    created() {
      if(!this.memberDataForm.phonenumber){
        this.memberDataForm.phonenumber = this.$store.getters.memberDataForm.phonenumber
      }
      var memberAuthType = this.page ? this.page : this.$store.getters.memberAuthType
      var reqTxId = this.$route.query.reqTxId;
      if(reqTxId != ''){
        this.$store.dispatch('member/danalconfirm', reqTxId ).then(() => {
          var code = this.$store.getters.returnJson.code
          var status = this.$store.getters.returnJson.data.status
          console.log(status);
          if(code === "OK" && status){
            console.log('인증 성공');
            if(memberAuthType === 'join'){
              if(!this.$store.getters.legalData.checked){
                this.$store.dispatch('member/findCi', reqTxId).then(() => {
                  if(JSON.stringify(this.$store.getters.returnJson.data) != 'false'){
                    this.$router.push('/COM-veriexist')
                  }
                })
              }
              // this.$store.dispatch('member/findCi', reqTxId).then((e) => {
              //   console.log(',eff',e,this.$store.getters.returnJson,JSON.stringify(this.$store.getters.returnJson));
              //   if(this.$store.getters.returnJson.data === true){
              //     this.$router.push('/COM-veriexist')
              //   }
              // })
            }
          }else{
            // this.$router.push('/COM-veriinfo');
          }
        });
      }
      console.log('memberAuthType ::: ', memberAuthType);
      console.log('this.page ::: ', this.page);
      console.log('this.$store.getters.memberAuthType ::: ', this.$store.getters.memberAuthType);
      if(memberAuthType === 'join'){
        this.$store.dispatch('member/setMemberDataForm', this.memberDataForm)
        this.memberAuthTypeJoin = true
        this.buttonName = '회원가입 계속하기'
        this.memberAuthReturn = 'AJ-profile-01'
      } else {
        this.memberAuthTypeJoin = false
        this.buttonName = '다음'
        if(memberAuthType === 'wakeUp'){
          this.memberAuthName = '휴면해제'
          this.memberAuthReturn = 'AL-S1-02'
        } else if(memberAuthType === 'findId'){
          this.memberAuthName = '아이디 찾기'
          this.memberAuthReturn = 'AI-findid1-01'
        } else if(memberAuthType === 'resetPassword'){
          this.memberAuthName = '비밀번호 재설정'
          this.memberAuthReturn = 'AP-findpw-01'
        } else if(memberAuthType === 'updateInfo'){
          this.memberAuthName = '개인정보 변경'
          this.memberAuthReturn = ''
        } else if(memberAuthType === 'leave'){
          this.memberAuthName = '회원탈퇴'
          this.memberAuthReturn = 'ES-leavecyworld03'
        } else if(memberAuthType === 'infoUpdate'){
          this.memberAuthName = '개인정보 수정'
          this.memberAuthReturn = 'ES-privacy'
        }else {
          this.memberAuthName = '휴면해제'
          this.memberAuthReturn = 'AL-S1-02'
        }
      }
    },

    methods:{
      onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
      onPrevClick() {
        this.$router.go(-1);
      },
      onBtnClick() {
        if(this.page === 'join'){
          if(!this.memberDataForm.reqTxId){
            this.memberDataForm.reqTxId = this.$route.params.reqTxId
          }
          this.$store.dispatch('member/setMemberDataForm', this.memberDataForm);
          this.$router.push('AJ-profile-01')
        }else if(this.page ? this.page : this.$store.getters.memberAuthType === 'infoUpdate'){
          this.$router.push({name: this.memberAuthReturn, params: {reqTxId: this.$route.query.reqTxId , updateStatus : '1' ,phonenumber: this.$route.params.phonenumber}})
        }else if(this.page === 'leave' || this.$store.getters.memberAuthType === 'leave'){
          // 회원탈퇴일 경우 처리
          let sendJson = this.$store.getters.leaveInfo;
          sendJson.txId = this.$route.query.reqTxId;
          console.log('sendJson', sendJson);
          this.$store.dispatch('member/deleteMember', sendJson ).then(() => {
            var code = this.$store.getters.returnJson.code
            var status = this.$store.getters.returnJson.data
            console.log('status', status);
            if(code === "OK" && status){
              console.log('탈퇴완료');
              this.$router.push({name: this.memberAuthReturn, params: {reqTxId: this.$route.query.reqTxId}})
            }else{
              this.$router.push('/COM-veriinfo');
            }
          });
        }else{
          this.$router.push({name: this.memberAuthReturn, params: {reqTxId: this.$route.query.reqTxId}})
        }
      },
    }

  }

</script>

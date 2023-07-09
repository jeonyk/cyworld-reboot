<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick"/>
    <Contents>
      <H3>회원탈퇴</H3>

      <AvatarWarp>
        <SpeechBalloon01 />
        <SpeechBalloon02 />
      </AvatarWarp>

      <LeaveDesc01>
<!--        <strong>{{ nickname }}</strong>님, <br />-->
        <strong>{{ this.$store.getters.email }}</strong>님, <br />
        싸이월드에서 <span>{{ joinDate | setComma }}</span>일 동안 <br />
        쌓아온 우리의 추억...
      </LeaveDesc01>
      <LeaveDesc02>
        정말... 삭제해도 괜찮으시겠어요?
      </LeaveDesc02>

      <LeaveBox>
        <p>
          탈퇴 전에 이건 꼭! 아셔야 해요.
        </p>
        <LeftAcornList>
          <LeftAcornListDesc>내 보유 도토리</LeftAcornListDesc>
          <LeftAcornListDesc><span>{{ dotori | setComma }}</span></LeftAcornListDesc>
        </LeftAcornList>
        <ListGuide>
          <ListGuideDesc>
            회원을 탈퇴하시면, 보유하고 계신 도토리가 모두 소멸되고, 복원할 수 없습니다.
          </ListGuideDesc>
          <ListGuideDesc>
            회원 탈퇴 후에는 회원 정보와 그 동안의 추억이 담긴 콘텐츠가 삭제되어 다시 복원할 수 없습니다.
          </ListGuideDesc>
          <ListGuideDesc>
            탈퇴와 관련하여 도움이 필요하신 경우 <router-link to="/">고객센터</router-link>를 통해 문의하실 수 있습니다.
          </ListGuideDesc>
        </ListGuide>
      </LeaveBox>

      <LeaveChkBox>
        <Checkbox id="checkbox" name="checkbox" class="styled_checkbox" label="탈퇴 시 내가 보유한 도토리를 포기합니다. (필수)"
                  @change="onChangeCheck"/>
      </LeaveChkBox>

      <Submit mt="24">
        <Button large block value="다음" @click="HandleClickButton" :disabled="btnDisabled"/>
      </Submit>

    </Contents>
  </Wrap>
</template>
<script>
import Common from "../../../styles/mobile/common/Common";
import Title from "../../../styles/mobile/common/Title";
import styledComponents from "../../../styles/mobile/ES/ES-leavecyworld01";
import List from "../../../styles/mobile/common/List";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Header from "../includes/Header";

export default {
  components :{
    ...Common,
    ...Title,
    ...styledComponents,
    ...List,
    Checkbox,
    Button,
    Header
  },
  data() {
    return {
      btnDisabled : true,
      joinDate : 1,
      nickname : '닉네임 API 나올예정',
      dotori : 0
    }
  },
  filters:{
    setComma(value){
      return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  created() {
    this.$store.dispatch('member/joinDate').then(() => {
      let code = this.$store.getters.returnJson.code
      if(code === 'OK'){
        let joinDateStr = this.$store.getters.returnJson.data
        let joinDate = new Date(joinDateStr);
        let today = new Date();
        let days = Math.round((today.getTime() - joinDate.getTime())/1000/60/60/24)
        this.joinDate = days;
      }
    })
  },
  methods :{
    onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
    onChangeCheck(prop, event, checked){
      if(checked){
        this.btnDisabled = false
      }else{
        this.btnDisabled = true
      }
    },
    HandleClickButton(){
      this.$router.push('/ES-leavecyworld02')
    }

  }
}
</script>
<style>

</style>

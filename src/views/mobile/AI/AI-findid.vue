<template>
  <Wrap>
    <Header close="close" @closeClick="onCloseClick"/>
    <Contents>
      <H3>싸이월드 아이디 찾기</H3>
      <DescDefault>싸이월드 아이디를 찾을 방법을 선택해 주세요.</DescDefault>

      <ListCard component="nav" ariaLabel="search id list" class="list_find">
        <template v-slot:items>
          <ListItem class="item_find" primary="휴대폰 본인확인으로 찾기" secondary="SMS 인증이나 PASS 인증으로 본인확인 후 아이디를 찾을 수 있습니다." v-on:click.native="findByAuth"/>
          <ListItem class="item_find" primary="이름, 휴대폰 번호로 찾기" secondary="가입할 때 입력한 이름과 휴대폰 번호로 아이디를 찾을 수 있습니다." v-on:click.native="findByInfo"/>
        </template>
      </ListCard>

      <form name="danalform" method="post" action="https://wauth.teledit.com/Danal/WebAuth/Web/Start.php" >
        <input type="hidden" name="TID" :value="danalform.TID" />
      </form>

    </Contents>
  </Wrap>
</template>

<script>

  import Common from '@/styles/mobile/common/Common';
  import Title from '@/styles/mobile/common/Title';
  import Desc from '@/styles/mobile/common/Desc'
  // import Footer from '@/views/mobile/includes/Footer';
  import ListCard from '@/components/List';
  import ListItem from '@/components/ListItem';
  import Header from '@/views/mobile/includes/Header'

  export default {
    name: "AI-findid",
    components: {
      Header,
      // Footer,
      ...Common,
      ...Title,
      ...Desc,
      ListCard,
      ListItem,
    },

    data() {
      return {
        danalform : {
          TID : ''
        }
      }
    },

    methods:{
      onPrevClick() {
        this.$router.push('/AL-login')
      },
      onCloseClick() {
        this.$func.postMessage("confirmClose");
      },
      findByAuth(){
        this.$store.dispatch('member/setMemberAuthType','findId').then(() => {
          this.$router.push({name: 'COM-veriinfo', params: {page : 'findId'}})
        })
      },
      findByInfo(){
        this.$router.push('/AI-findid2-01')
      },
    }

  }

</script>

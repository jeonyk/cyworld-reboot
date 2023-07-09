<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>닉네임 입력</H3>
      <DescDefault>
        싸이월드에서 사용할 닉네임을 입력해주세요.
        <br />
        닉네임은 언제든지 바꿀 수 있습니다.
      </DescDefault>

      <FormConfirm>
        <FormConfirmDesc class="po-rel">
          <TextField id="nickname"
                     name="nickname"
                     type="text"
                     :class="personDataForm.class"
                     :hint="personDataForm.hint"
                     :persistentHint="personDataForm.persistentHint"
                     label="닉네임"
                     maxlength="13"
                     @keyup="onKeyupNickname"
                     @blur="onBlurNickname"
                     value="김사이"
                     ref="nickname"/>

          <span class="limit-txt">
            {{ limitFnc }}
          </span>
        </FormConfirmDesc>


      </FormConfirm>

      <Submit mt="24">
        <Button large value="다음" block @click="onClickSuccess" :disabled="disabled"/>
      </Submit>
    </Contents>
    <Footer/>
  </Wrap>
</template>

<script>
import Title from '@/styles/mobile/common/Title';
import Common from '@/styles/mobile/common/Common';
import Form from '@/styles/mobile/common/Form';
import Desc from '@/styles/mobile/common/Desc';
import Button from "@/components/Button";
import TextField from "@/components/InputText";
import Header from '@/views/mobile/includes/Header'
//import Footer from '@/views/mobile/includes/Footer'

export default {
  name: "AJ-profile-03-success",
  components: {
    Header,
   //Footer,
    TextField,
    Button,
    ...Title,
    ...Common,
    ...Form,
    ...Desc,
  },
  data: function () {
    return {
      maxLength: '13',
      personDataList: [
        {
          nickname: '펌킨황'
        },
        {
          nickname: '호박주'
        }
      ],
      personDataForm: {
        class: '',
        nickname: '',
        hint: '',
        persistentHint: false,
      },
      disabled: true,
      limit: '',
    };
  },
  computed: {
    limitFnc: function () {
      return this.personDataForm.nickname.length + "/" + this.maxLength;
    }
  },
  methods: {
    onKeyupNickname() {
      this.personDataForm.nickname = this.$refs.nickname.value;
      if (this.personDataForm.nickname.length > 0) {
        this.personDataForm.hint = '사용할 수 있는 닉네임입니다.';
        this.personDataForm.class = 'input_success';
        //this.personDataForm.persistentHint = false;
        this.disabled = false;
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onBlurNickname() {
      this.personDataForm.nickname = this.$refs.nickname.value;
      if (this.personDataForm.nickname.length > 0) {
        this.personDataForm.hint = '사용할 수 있는 닉네임입니다.';
        this.personDataForm.class = 'input_success';
        //this.personDataForm.persistentHint = false;
        this.disabled = false;
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onClickSuccess() {
      var nicknameCheck = this.personDataList.filter((vo) => {
        return vo.nickname === this.personDataForm.nickname;
      });

      if (nicknameCheck[0] !== undefined) {
        if (nicknameCheck[0].nickname === this.personDataForm.nickname) {
          this.personDataForm.class = 'input_error';
          this.personDataForm.hint = '이미 사용중인 닉네임입니다.';
          this.personDataForm.persistentHint = true;
        }
      } else {
        this.personDataForm.class = '';
        this.personDataForm.hint = '';
        //this.personDataForm.persistentHint = false;
        alert('이동');
      }
    },
  },
  //hint 기본값
  mounted() {
    this.personDataForm.persistentHint = true;
    this.personDataForm.hint = '최대 13자 까지 입력할 수 있습니다.';
    this.personDataForm.nickname = "김사이";
    this.onKeyupNickname();
    this.$refs['nickname'].$el.querySelector('input').focus();
  },
  onCloseClick() {
      this.$func.postMessage("confirmClose");
  },
  onPrevClick() {
    this.$func.postMessage("confirmBack");
    console.log('뒤로가기');
  },
}
</script>

<style>
  .po-rel{
    position: relative;
  }
  .limit-info{
    width: calc(100% - 38px);
  }
  .limit-txt{
    font-size: 12px;
    font-weight: 300;
    color: rgba(0,0,0,0.7);
    width:34px;
    position: absolute;
    text-align: right;
    right: 4px;
    top: 63px;
  }
</style>

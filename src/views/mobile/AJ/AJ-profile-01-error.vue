<template>
  <Wrap>
    <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
    <Contents>
      <H3>이메일 아이디 입력</H3>
      <DescDefault>
        아이디로 사용할 이메일 주소를 입력해주세요.
      </DescDefault>

      <FormConfirm>
        <FormConfirmDesc>
          <TextField id="email"
                     name="email"
                     type="text"
                     :class="personDataForm.class"
                     :hint="personDataForm.hint"
                     :persistentHint="personDataForm.persistentHint"
                     label="이메일 아이디"
                     maxlength="50"
                     @keyup="onKeyupEmail"
                     @blur="onBlurEmail"
                     value="email@cyworld.com"
                     ref="email"/>
        </FormConfirmDesc>
      </FormConfirm>

      <Submit mt="24">
        <Button large value="본인확인하기" block @click="onClickSuccess" :disabled="disabled" />
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
import {validEmail} from "@/utils/validate";
import Header from '@/views/mobile/includes/Header'
// import Footer from '@/views/mobile/includes/Footer'

export default {
  name: "AJ-profile-01-error",
  components: {
    Header,
    // Footer,
    TextField,
    Button,
    ...Title,
    ...Common,
    ...Form,
    ...Desc,
  },
  data: function () {
    return {
      personDataList: [
        {
          email: 'hwangjw1234@hanmail.net'
        },
        {
          email: 'hwang3324@naver.com'
        }
      ],
      personDataForm: {
        class: '',
        email: '',
        hint: '',
        persistentHint: false,
      },
      disabled: true,
    };
  },
  methods: {
    onKeyupEmail() {
      this.personDataForm.email = this.$refs.email.value;
      if (validEmail(this.personDataForm.email)) {
        this.personDataForm.hint = '사용 가능한 아이디입니다.';
        this.personDataForm.class = 'input_success';
        this.personDataForm.persistentHint = false;
        this.disabled = false;
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onBlurEmail() {
      this.personDataForm.email = this.$refs.email.value;
      if (validEmail(this.personDataForm.email)) {
        this.personDataForm.hint = '사용 가능한 아이디입니다.';
        this.personDataForm.class = 'input_success';
        this.personDataForm.persistentHint = false;
        this.disabled = false;
      } else {
        this.personDataForm.hint = '';
        this.personDataForm.class = '';
        this.personDataForm.persistentHint = true;
        this.disabled = true;
      }
    },
    onClickSuccess() {
      var emailCheck = this.personDataList.filter((vo) => {
        return vo.email === this.personDataForm.email;
      });

      if (emailCheck[0] !== undefined) {
        if (emailCheck[0].email === this.personDataForm.email) {
          this.personDataForm.class = 'input_error';
          this.personDataForm.hint = '이미 사용중인 아이디입니다.';
          this.personDataForm.persistentHint = true;
        }
      } else {
        this.personDataForm.class = '';
        this.personDataForm.hint = '';
        this.personDataForm.persistentHint = false;
        alert('이동');
      }
    }
  },
  //success 추가
  mounted() {
    this.$nextTick(function () {
      this.personDataForm.class = 'input_error';
      this.personDataForm.hint = '이미 사용중인 아이디입니다.';
      this.$refs['email'].$el.querySelector('input').focus();
    })
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

<style scoped>

</style>

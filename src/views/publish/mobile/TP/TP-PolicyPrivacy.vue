<template>
<Wrap>
  <Header prev="prev" close="close" @closeClick="onCloseClick" @prevClick="onPrevClick"/>
  <Contents>
    <H3>개인정보 처리방침</H3>

    <Dropdown mt="32">
      <template v-slot:subitems>
        <v-list-item>
          <v-list-item-subtitle>2021.12.31</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle>2021.10.01</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle>2021.07.03</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-subtitle>2021.03.01</v-list-item-subtitle>
        </v-list-item>
      </template>
    </Dropdown>

    <DescPolicy>
      <DescPolicyTitle>제1조 (목적)</DescPolicyTitle>
      <DescPolicyDetail mt="32">
        본 약관은 주민등록번호 대체 본인확인서비스를 제공하는
        주식회사 케이티(이하 “회사”)와 이용 고객(이하“이용자”)
        간에 서비스 제공에 관한 이용조건 및 절차 등 기타 필요한
        사항을 규정함을 목적으로 합니다.
      </DescPolicyDetail>

      <DescPolicyTitle mt="32">제2조 (용어의 정의)</DescPolicyTitle>
      <DescPolicyDetail mt="32">
        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br />
        ①“본인확인서비스”라 함은 이용자가 인터넷상에서 본인명
        의의 휴대폰(이용자 개인 명의 휴대폰 또는 법인명의 휴대폰
        으로서 이용자가 본인확인서비스에 가입한 휴대폰)을 이용
        하여, 주민등록번호 입력 없이도 본인임을 안전하게 식별
        및 확인해 주는 서비스를 말
        합니다.<br />
        ②“이용자”라 함은 회사 또는 대행기관에서 제공하는 본인확
        인서비스의 이용을 위해
        자신의 본인확인정보를 회사, 대행
        기관, 본인확인기관 등에게 제공하고, 본인임을 확인 받고자
        하는 자로서 다음 각호의 자를 말합니다.<br />
        1. 회사의 개인 명의 이동전화서비스 가입자<br />
        2. 회사의 이동전화망을 이용하여 자체적으로 이동전화서비
        스를 제공하는 별정통신사업자의 가입자 중개인 명의 가입
        자<br />
        3. 회사의 법인 명의 이동전화서비스 가입자의 휴대폰을 실
        제 사용하는 자로서 명의인의
        법인으로부터 필요한 서류를
        발급 받아 이를 회사에 제출하고 본인확인서비스에 가입한
        자<br />
        ③“본인확인정보”라 함은 이용자가 입력한 생년월일, 성별,
        성명, 내/외국인, 휴대폰
        번호, 통신사 등 본인식별에 필요한
        이용자의 정보를 말합니다.<br />
        ④“중복가입확인정보”라 함은 웹사이트에 가입하고자 하는
        이용자의 중복확인을 위해
        제공되는 정보를 말합니다.<br />
        ⑤“연계정보”라 함은 인터넷사업자의 온ㆍ오프라인 서비스
        연계 등의 목적으로 이용자를 식별하기 위해 제공되는 정보
        를 말합니다.<br />
        ⑥“본인확인기관”이라 함은 주민등록번호를 사용하지 아니
        하고 본인을 확인하는 방법
        또는 본인확인서비스를 제공 하
        는 자로 방송통신위원회로부터 본인확인기관으로 지정을
        받은 자를 의미합니다.<br />
        ⑦ “대행기관”이라 함은 회사를 대신하여 본인확인서비스의
        제공 및 지원 등의 중계
        업무를 담당하는 곳으로 회사와 업
        무지원에 대한 계약이 완료되어 인터넷사업자에 본인
        확인
        서비스를 제공하는 사업체를 말합니다.<br />
        ⑧ “인터넷사업자”라 함은 인터넷을 이용하여 정보를 제공하
        거나, 정보의 제공을 매개하는 일을 업으로 하는 자로 회사
        또는 대행기관과의 서비스 계약을 통해, 인터넷 웹사이트에
        서 이용자에 대한 본인확인정보를 제공받는 사업체를 말합
        니다.<br />
        ⑨“접근매체”라 함은 본인확인을 함에 있어 이용자 본인확인
        의 진실성과 정확성을 확보하기 위하여 사용되는 수단 또는
        정보로서 회사에 등록된 이용자의 전화번호, 이용자의 생체
        정보, 이상의 수단이나 정보를 사용하는데 필요한 비밀번호
        등을 말합니다.
      </DescPolicyDetail>

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
  data: () => ({

  }),
  components :{
    ...Common,
    ...Title,
    ...Desc,
    ...Form,
    Header,
    Dropdown,
  },
  methods :{
    onCloseClick() {
      this.$func.postMessage("confirmClose")
    },
    onPrevClick() {
      if(this.$func.postMessage("confirmClose")){
        this.$router.go(-1);
      }
    }
  }
}


</script>
<style>

</style>

<template>
  <StyledFooter id="footer">
    <StyledMenulist>
      <StyledList>
        <router-link to="/TP-policy">이용약관</router-link>
      </StyledList>
      <StyledList>
        <router-link to="/TP-private">개인정보처리방침</router-link>
      </StyledList>
      <StyledList>
        <router-link to="/CM-main">고객센터</router-link>
      </StyledList>
    </StyledMenulist>

    <StyledCopyright>Copyright Cyworld Z Corp. All rights reserved.</StyledCopyright>
  </StyledFooter>
</template>

<script>
import styled, { css } from 'vue-styled-components';

const StyledFooter = styled.div`
  position: absolute;
  bottom: 30px;
  left: 16px;
  right: 16px;
  text-align: center;
`;

const StyledMenulist = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
`;

const StyledList = styled.div`
  position: relative;
  padding-left: 17px;
  &:before{
    content: '';
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 11px;
    background-color: rgba(0,0,0,0.12);
  }
  &:first-child{
    padding-left: 0;
    &:before{
      display: none;
    }
  }
  &:nth-child(2){
    a{
      font-weight: 700 !important;
      color: rgba(0,0,0,0.7);
    }
  }
`;

const StyledCopyright = styled.div`
  ${({ theme }) => {
    const { Colors } = theme;

    return css`
      font-family: "GothicNeoaUni", sans-serif;
      padding-top: 10px;
      font-size: 10px;
      line-height: 10px;
      font-weight: 400;
      color: ${Colors.disabled};
    `;
  }}
`;

export default {
  components: {
    StyledFooter,
    StyledMenulist,
    StyledList,
    StyledCopyright,
  }
}
</script>

<style lang="scss">
#footer{
  a{
    display: block;
    font-family: "GothicNeoaUni", sans-serif;
    line-height: 13px;
    font-size: 13px;
    font-weight: 300;
    color: rgba(0,0,0,0.7) !important;
  }
}
</style>

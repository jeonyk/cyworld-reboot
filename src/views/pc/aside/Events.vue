<template>
  <Events>
    <router-link to=""><img src="/img/temp_banner3.png" alt=""></router-link>
  </Events>
</template>

<script>
import styled, { css } from 'vue-styled-components';

const Events = styled.div`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      position: relative;
      overflow: hidden;
      padding: 0;
      border-radius: 18px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.06);
      a{
        display: block;
        img{
          display:block;
          width: 100%;
        }
      }
      ${Space};
    `;
  }}
`;


const styledComponents = {
  Events, 
};


export default {
  components: {
    ...styledComponents,
  },
}
</script>

<style lang="scss">
  
</style>
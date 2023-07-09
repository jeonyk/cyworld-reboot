<template>
  <Wrap bg="white">
    <Container class="webview login">
      <Login class="wrap_login" />
    </Container>
  </Wrap>  
</template>

<script>
import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';

import Login from '@/views/mobile/AL/AL-login.vue';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Login,
  }
}
</script>

<style>

</style>
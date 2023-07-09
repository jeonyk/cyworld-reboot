<template>
  <Wrap bg="white">
    <Header />
    <Container class="webview">
      <Main>
        <Section>
          <Webview />
        </Section>
      </Main>
    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';

import Webview from '@/views/mobile/AL/AL-S1-01.vue';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Header,
    Webview,
  }
}
</script>

<style>

</style>
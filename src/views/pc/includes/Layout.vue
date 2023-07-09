<template>
  <Wrap>
    <Header />
    <Container>
      <Aside class="left">
        <Profile />
      </Aside>
      <Main>
        <Section>
          main
        </Section>
      </Main>
      <Aside class="right">
        <Brithday />
        <News />
      </Aside>
    </Container>
  </Wrap>  
</template>

<script>
import Header from './Header.vue';
import Common from '@/styles/pc/common/Common';
import Profile from '@/views/pc/aside/Profile.vue';
import Brithday from '@/views/pc/aside/Birthday.vue';
import News from '@/views/pc/aside/News.vue';

export default {
  components: {
    ...Common,
    Header,
    Profile,
    Brithday,
    News,
  }
}
</script>

<style>

</style>
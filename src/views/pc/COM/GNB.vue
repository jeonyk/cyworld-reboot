<template>
  <Wrap>
    <Header />
    
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header-case.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Header,
  }
}
</script>

<style>

</style>
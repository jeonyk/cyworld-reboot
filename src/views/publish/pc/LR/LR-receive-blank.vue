<template>
  <Wrap>
    <Header />
    <Container>
      <Aside class="left">
        <AsideInner class="inner_aside">
          <Profile />
        </AsideInner>
      </Aside>
      <Main>
        <Section>
          <H2 class="title_page">싸이생활</H2>
          
          <Tab class="styled_tab web" mt="48">
            <template v-slot:v-tab>
              <v-tab>받은 일촌 신청</v-tab>
              <v-tab>보낸 일촌 신청</v-tab>
            </template>
            <template v-slot:v-tab-item>
              <v-tab-item transition="false">
                <ListBlank class="blank_receive">
                  <p class="subtitle">일촌 신청이 없어요</p>
                  <p class="msg">오늘의 추천 친구를 통해 일촌을 신청해보는 것은 어떨까요?</p>
                </ListBlank>
                <FriendsToday class="friends_today">
                  <H3>오늘의 추천 친구</H3>
                    <SlideGroup domID="today_r_f" max-width="740" pagesize="6">
                    <template v-slot:f-slide-group>
                      
                        <ListFriendsToday id="today_r_f">
                        <li v-for="k in 61" :key="k">
                          <router-link to="">
                            <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                            <span class="name">아이유러브{{k}}</span>
                          </router-link>
                        </li>
                        </ListFriendsToday>
                    </template>
                  </SlideGroup>
                </FriendsToday>
              </v-tab-item> 
              <v-tab-item transition="false">
                <ListBlank class="blank_receive">
                  <p class="subtitle">보낸 일촌 신청이 없어요.</p>
                </ListBlank>
                <FriendsToday class="friends_today">
                  <H3>오늘의 추천 친구</H3>
                    <SlideGroup domID="today_r_f" max-width="740" pagesize="6">
                    <template v-slot:f-slide-group>
                      
                        <ListFriendsToday id="today_r_f">
                        <li v-for="k in 61" :key="k">
                          <router-link to="">
                            <span class="thumb"><img src="/img/temp_profile.png" alt=""></span>
                            <span class="name">아이유러브{{k}}</span>
                          </router-link>
                        </li>
                        </ListFriendsToday>
                    </template>
                  </SlideGroup>
                </FriendsToday>
              </v-tab-item>
            </template>
          </Tab>
          
           

        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Brithday />
          <News />
        </AsideInner>
      </Aside>
    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/publish/pc/includes/Header.vue';
import Profile from '@/views/publish/pc/aside/Profile.vue';
import Brithday from '@/views/publish/pc/aside/Birthday.vue';
import News from '@/views/publish/pc/aside/News.vue';
import Tab from '@/components/Tab.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import SlideGroup from '@/components/pc/SlideGroup.vue';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    Header,
    Profile,
    Brithday,
    News,
    Tab,
    SlideGroup,
  }
}
</script>

<style>

</style>
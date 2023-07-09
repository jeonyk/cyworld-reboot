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
          <MhTitle class="noline">
            <H2 class="title_page mh-title">사진첩</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
            <IconButton class="ico_list cy_gray--text" large />
          </MhTitle>
          
        </Section>

        <Section mt="12">
            <TitleBar class="title_list gallery_grid" mt="16">
                <h3>전체보기</h3>
                <div>
                <h4><span class="num">320개</span>의 검색결과</h4>
                <IconButton class="ico_gallery_grid5 cy_gray--text" value="5단 목록"></IconButton>
                </div>
            </TitleBar>
            <ListPictures5>
                <li>
                <router-link to="/"><img src="/img/temp_profile2.png" alt=""></router-link>
                </li>
                <li class="gallery_more">
                <router-link to="/"><img src="/img/temp_profile3.png" alt=""></router-link> 
                <span><img src="/img/svg/ico_photo.svg" alt=""></span>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li class="gallery_more">
                <router-link to="/"><img src="/img/temp_profile3.png" alt=""></router-link>
                 <span><img src="/img/svg/ico_photo.svg" alt=""></span>
                </li> 
                <li>
                <router-link to="/"><img src="/img/temp_profile2.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile3.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link> 
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile3.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile2.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile2.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile3.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link> 
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile3.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile2.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile.png" alt=""></router-link>
                </li>
                <li>
                <router-link to="/"><img src="/img/temp_profile2.png" alt=""></router-link>
                </li>
            </ListPictures5>
        </Section>

      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>

    <Alert cardClass="giftselect" :open="folder_pop" max-width="450">
      <template v-slot:dialog-title>
        <v-card-title>폴더 선택
          <IconButton class="ico_close_modal pop-close-btn cy_gray--text" value="닫기" large @click="folder_pop_close()" />
          </v-card-title>
      </template>
      <template v-slot:dialog-text>
        <v-card-text class="folder">
          <FolderList class="overflow">
            <p>폴더를 선택해 주세요.</p>
            <FolderListItem class="open selected">김사이의 일상 다반사</FolderListItem>
            <FolderListItem class="friend">일촌공개 일기</FolderListItem>
            <FolderListItem class="open">나만의 다이어리 공간</FolderListItem>
            <FolderListItem class="member">나의살아가는이야기들려줄게들어봐제발제발</FolderListItem>
            <FolderListItem class="lock">싸이 중학교</FolderListItem>
            
          </FolderList>
          
          
        </v-card-text>
      </template>
    </Alert>

  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Music from '@/views/pc/aside/Music.vue';
import Friends from '@/views/pc/aside/Friends.vue';
import IconButton from '@/components/IconButton.vue';
import Alert from '@/components/Alert.vue';
//import Button from '@/components/Button.vue';
//import Checkbox from '@/components/Checkbox.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';

import MHMain from '@/styles/pc/MH/MH-main';

export default {
  components: {
    ...Common,
    ...Title,
    ...List,
    ...AlertStyle,
    Header,
    Profile,
    Music,
    Friends,
    IconButton,
    //Checkbox,
    Alert,
    //Button,
    ...MHMain,
  },
  data(){
    return {
      checkedValues: true,
      folder_pop: false,
    }
  },
  methods:{
    folder_pop_open(){
      this.folder_pop = true;
    },
    folder_pop_close(){
      this.folder_pop = false;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
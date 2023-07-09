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
            <H2 class="title_page mh-title">미니홈피 설정</H2>
            <IconButton class="ico_back_arrow cy_gray--text" large />
          </MhTitle>
        </Section>

        <Section class="mh_admin" mt="12">
            <TitleBar class="title_settings " pt="60" pb="16">
                <h3>내 미니홈피 설정</h3>
            </TitleBar>
 
            <ListinpoSetting>
              <li><p class="inpotxt">미니홈피 ID</p><p class="Settingtxt">Kimsai</p> <Button value="수정" text class="btn_Setting" /></li>
              <li><p class="inpotxt">미니홈피 공개</p><p class="Settingtxt">일촌공개</p> <Button value="수정" text class="btn_Setting" /></li>
            </ListinpoSetting>

            <TitleBar class="title_settings" pt="56" pb="16">
                <h3>프로필 설정</h3>
            </TitleBar>
 
            <ListinpoSetting>
              <li><p class="inpotxt">닉네임</p><Button value="수정" text class="btn_Setting" /></li>
              <li><p class="inpotxt">미니홈피 이름</p><Button value="수정" text class="btn_Setting" /></li>
              <li><p class="inpotxt">프로필 텍스트</p> <Button value="수정" text class="btn_Setting" /></li>
            </ListinpoSetting>

            <TitleBar class="title_settings" pt="56" pb="16">
                <h3>초대 설정</h3>
            </TitleBar>
            <ListinpoSetting>
              <li>
                <p class="inpotxt">일촌신청</p>
                <p class="Settingradio">
                  <v-radio-group v-model="friendsReceive">
                    <v-row>
                      <v-col cols="auto">
                        <Radio class="styled_radio" input-value="true" label="신청 받음" />
                      </v-col>
                      <v-col cols="auto">
                        <Radio class="styled_radio" label="신청 받지 않음" />
                      </v-col>
                    </v-row>
                  </v-radio-group>
                </p>
              </li>
              <li><p class="inpotxt">공유 다이어리 초대</p>
              <p class="Settingradio">
                  <v-radio-group v-model="friendsShare">
                    <v-row>
                      <v-col cols="auto">
                        <Radio class="styled_radio" input-value="true" label="신청 받음" />
                      </v-col>
                      <v-col cols="auto">
                        <Radio class="styled_radio" label="신청 받지 않음" />
                      </v-col>
                    </v-row>
                  </v-radio-group>
                </p>
              </li>
            </ListinpoSetting>

           <TitleBar class="title_settings" pt="56" pb="16">
                <h3>권한 설정</h3>
            </TitleBar>
 
            <ListinpoSetting>
              <li><p class="inpotxt">방명록 작성 권한</p><p class="Settingtxt">전체 허용</p> <Button value="수정" text class="btn_Setting" /></li>
            </ListinpoSetting>
        </Section>
      </Main>
      <Aside class="right">
        <AsideInner class="inner_aside">
          <Music />
          <Friends />
        </AsideInner>
      </Aside>
    </Container>
  </Wrap>  
</template>

<script>
import Header from '@/views/pc/includes/Header.vue';
import Profile from '@/views/pc/aside/Profile.vue';
import Music from '@/views/pc/aside/Music.vue';
import Friends from '@/views/pc/aside/Friends.vue';
import IconButton from '@/components/IconButton.vue';
import Button from '@/components/Button.vue';

import Common from '@/styles/pc/common/Common';
import Title from '@/styles/pc/common/Title';
import List from '@/styles/pc/common/List';
import AlertStyle from '@/styles/pc/common/Alert';
import MHMain from '@/styles/pc/MH/MH-main';
import Radio from '@/components/Radio.vue';

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
    ...MHMain,
    Radio,
    Button
  },
  data(){
    return {
      checkedValues: true,
      friendsReceive: 1,
      friendsShare: 1,
    }
  }
}
</script>

<style lang="scss" scoped>
 
</style>
<template>
  <div style="min-width:800px;">
    <v-toolbar
        color="#129fce"
        dark
        flat
    >
      <v-toolbar-title>[싸이월드-ReBoot] 퍼블</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/guide" style="margin-right: 16px">
        Guide
      </v-btn>
      <!-- <v-btn @click="changeLocale('en')">
        영문
      </v-btn>
      <v-btn @click="changeLocale('ko')">
        국문
      </v-btn> -->

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-main>
      <v-container fluid>
        <v-tabs-items v-model="tab">
          <v-tab-item transition="false">
            <H2>계정 [A] : webview Guide</H2>
            <table id="ctble" style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in pc_account" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/pc/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>
            <H2>COM</H2>
            <table id="ctble" style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in pc_com" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/pc/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>
            <H2>싸이생활</H2>
            <table id="ctble" style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in cylife" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/pc/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>
            <H2>미니홈피</H2>
            <table id="ctble" style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in minihompy" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/pc/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>
            <H2>파도타기</H2>
            <table id="ctble" style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in wh" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/pc/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>
            <H2>더보기</H2>
            <table id="ctble" style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in ed" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/pc/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>
          </v-tab-item>

          <v-tab-item transition="false">
            <H2>(웹뷰) 계정 [A]</H2>
            <table id="ctble" style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in account" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>

            <H2>(웹뷰) 더보기 [E]</H2>
            <table style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in more" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>

            <H2>(웹뷰) 고객센터[C]</H2>
            <table style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" c2DXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in customer" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>

            <H2>(웹뷰) 약관 및 정책[TP]</H2>
            <table style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in terms" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>

            <H2>공통[COM]</H2>
            <table style="border-top: 1px solid #999;margin-top: 10px;border-collapse: collapse;border-spacing: 0;width: 100%;">
              <colgroup>
                <col width="50">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="200">
                <col width="250">
                <col width="140">
                <col>
              </colgroup>
              <thead>
              <tr class=" ceDXVy">
                <td class=" ceDXVy">No</td>
                <td class=" ceDXVy">화면 코드</td>
                <td class=" ceDXVy">1 Depth</td>
                <td class=" ceDXVy">2 Depth</td>
                <td class=" ceDXVy">3 Depth</td>
                <td class=" ceDXVy">4 Depth</td>
                <td class=" ceDXVy">Filepath</td>
                <td class=" ceDXVy">화면</td>
                <td class=" ceDXVy">비고</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in com" :key="index" class="ceDXVy" :class="[{'complete':item.date === '완료'}, {'success':item.date === '컨펌완료'}, {'disabled':item.date === 'disabled'}]">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ item.id }}
                </td>
                <td>
                  {{ item.depth1 }}
                </td>
                <td>
                  {{ item.depth2 }}
                </td>
                <td>
                  {{ item.depth3 }}
                </td>
                <td>
                  {{ item.depth4 }}
                </td>
                <td>
                  <a @click="movePage(`/publish/${item.id}`)">/views/../{{ item.id }}</a>
                </td>
                <td>
                  {{ item.date }}
                </td>
                <td>
                  {{ item.etc }}
                </td>
              </tr>
              </tbody>
            </table>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import styled from 'vue-styled-components';

const H2 = styled.h2`
  position: relative;
  margin-top: 30px;
  padding-left: 10px;
  font-size: 14px;

  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 12px;
    background-color: #333;
  }
`;


export default {
  name: "devNavigation",
  methods: {
    changeLocale(val) {
      this.$i18n.locale = val;
    },
    movePage(val){
      this.$router.push({ name: val })
    }
  },
  data() {
    return {
      tab: null,
      items: [
        'PC Web', 'Webview',
      ],
      incorrectAuth: false,
      // MOBILE WEBVIEW
      account: [
        {
          id: 'AL-login',
          depth1: '로그인',
          depth2: '로그인',
          depth3: '',
          depth4: '',
          date: '완료',
          confirm: '21.10.19',
          api:  '21.10.27', etc: 'P/2021.11.30 배너추가'
        },
        {
          id: 'AL-login-success',
          depth1: '',
          depth2: '',
          depth3: '로그인 버튼 활성화',
          depth4: '',
          date: '완료',
          confirm: '21.10.19',
          api:  '21.10.27', etc: 'P/AL-login포함/2021.11.30 배너추가'
        },
        {
          id: 'AL-login-error',
          depth1: '',
          depth2: '',
          depth3: '로그인 실패',
          depth4: '',
          date: '완료',
          confirm: '21.10.19',
          api:  '21.10.27', etc: 'P/AL-login포함/2021.11.30 배너추가'
        },
        {
          id: 'AL-S1-01',
          depth1: '',
          depth2: '계정 상태코드별 안내',
          depth3: 'S1 휴면',
          depth4: '휴면해제 안내',
          date: '완료',
          confirm: '21.10.19',
          api:  '', etc: 'P/2021.11.30 글 수정'
        },
        {
          id: 'AL-S1-02',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '휴면해제 완료',
          date: '완료',
          confirm: '21.10.14',
          api:  '', etc: 'P/2021.11.30 글, 레이아웃 수정'
        },
        {
          id: 'AL-BX', depth1: '', depth2: '', depth3: '회원가입 대기', depth4: '', date: '완료', confirm: '21.10.19', api:  '21.11.12', etc: 'P/2021.12.01 글, InputText 수정'
        },
        {
          id: 'AL-BL', depth1: '', depth2: '', depth3: '블랙리스트', depth4: '', date: '완료', confirm: '21.10.19', api:  '21.10.28', etc: 'P/2021.12.01 글,레이아웃 수정'
        },
        {
          id: 'AL-B4', depth1: '', depth2: '', depth3: '유보', depth4: '', date: '완료', confirm: '21.10.19', api:  '21.10.28', etc: 'P/2021.12.01 글,레이아웃 수정'
        },
        {
          id: 'AL-B5', depth1: '', depth2: '', depth3: '대량 제재', depth4: '', date: '완료', confirm: '21.10.19', api:  '21.10.28', etc: 'P/2021.12.01 글,레이아웃 수정'
        },
        {
          id: 'AL-C1', depth1: '', depth2: '', depth3: '글쓰기 정지', depth4: '', date: '완료', confirm: '21.10.19', api:  '21.10.28', etc: 'P/2021.12.01 글,레이아웃 수정'
        },
        {
          id: 'AI-findid',
          depth1: '아이디 찾기',
          depth2: '아이디 찾기 방법 선택',
          depth3: '',
          depth4: '',
          date: '완료',
          confirm: '21.10.21',
          api:  '21.10.29', etc: 'L/2021.12.01 글 수정, 푸터 제거'
        },
        {
          id: 'AI-findid1-01',
          depth1: '',
          depth2: '실명인증으로 아이디 찾기',
          depth3: '실명인증으로 아이디 찾기 결과',
          depth4: '',
          date: '컨펌완료',
          confirm: '21.10.20',
          api:  '21.11.05', etc: 'L'
        },
        {
          id: 'AI-findid2-01',
          depth1: '',
          depth2: '이름, 휴대폰 번호로 아이디 찾기',
          depth3: '이름, 휴대폰 번호 입력',
          depth4: '',
          date: '완료',
          confirm: '21.10.21',
          api:  '21.10.29', etc: 'L/2021.12.01 글 수정'
        },
        {
          id: 'AI-findid2-01-success',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '정상 입력',
          date: '완료',
          confirm: '21.10.21',
          api:  '21.10.29', etc: 'L/AI-findid2-01에 포함2021.12.02 글,레이아웃 수정'
        },
        {
          id: 'AI-findid2-02',
          depth1: '',
          depth2: '',
          depth3: '이름, 휴대폰 번호로 아이디 찾기 결과',
          depth4: '',
          date: '컨펌완료',
          confirm: '21.10.21',
          api:  '21.11.01', etc: 'L'
        },
        {
          id: 'AI-findid2-03',
          depth1: '',
          depth2: '',
          depth3: '실명인증 아이디 전체 확인 안내',
          depth4: '',
          date: '컨펌완료',
          confirm: '21.10.20',
          api:  '21.10.29', etc: 'L'
        },
        {
          id: 'AP-findpw',
          depth1: '비밀번호 재설정',
          depth2: '이메일 아이디 입력 안내',
          depth3: '',
          depth4: '',
          date: '완료',
          confirm: '21.10.21',
          api:  '21.11.08', etc: 'L/2021.12.01 글 수정'
        },
        {
          id: 'AP-findpw-success',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '성공',
          date: '완료',
          confirm: '21.10.21',
          api:  '21.11.02', etc: 'L/AP-findpw에 포함/2021.12.01 글 수정'
        },
        {
          id: 'AP-findpw-error',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '실패',
          date: '완료',
          confirm: '21.10.21',
          api:  '21.11.02', etc: 'L/AP-findpw에 포함/2021.12.01 글 수정'
        },
        {
          id: 'AP-findpw-01',
          depth1: '',
          depth2: '비밀번호 재설정',
          depth3: '새 비밀번호 입력',
          depth4: '',
          date: '완료',
          confirm: '21.10.19',
          api:  '21.11.08', etc: 'L/2021.12.01 글 수정'
        },
        {
          id: 'AP-findpw-01-success',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '성공',
          date: '완료',
          confirm: '21.10.19',
          api:  '21.11.02', etc: 'L/AP-findpw-01에 포함/2021.12.01 글 수정'
        },
        {
          id: 'AP-findpw-01-error',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '실패',
          date: '완료',
          confirm: '21.10.19',
          api:  '21.11.02', etc: 'L/AP-findpw-01에 포함/2021.12.01 글 수정'
        },
        {
          id: 'AP-findpw-02',
          depth1: '',
          depth2: '',
          depth3: '비밀번호 재설정 완료 안내',
          depth4: '',
          date: 'disabled',
          confirm: '21.10.19',
          api:  '21.11.02', etc: '페이지 삭제 (alert로 대체)'
        },
        {
          id: 'AJ-agree',
          depth1: '회원가입',
          depth2: '약관 동의',
          depth3: '약관 동의 안내',
          depth4: '',
          date: '완료',
          confirm: '21.10.14',
          api:  '21.11.12', etc: 'H/2021.12.01 글 수정'
        },
        {
          id: 'TP-policy', depth1: '', depth2: '', depth3: '이용약관', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '80%', etc: 'H'
        },
        {
          id: 'TP-private', depth1: '', depth2: '', depth3: '개인정보 처리방침', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '80%', etc: 'H'
        },
        {
          id: 'TP-location',
          depth1: '',
          depth2: '',
          depth3: '위치기반 서비스 이용약관',
          depth4: '',
          date: '컨펌완료',
          confirm: '2021.10.21',
          api:  '80%', etc: 'H'
        },
        {
          id: 'TP-marketing',
          depth1: '',
          depth2: '',
          depth3: '마케팅 정보수신 동의 안내',
          depth4: '',
          date: '컨펌완료',
          confirm: '2021.10.21',
          api:  '80%', etc: 'H'
        },
        {
          id: 'AJ-agreechild',
          depth1: '',
          depth2: '법정대리인 동의',
          depth3: '법정대리인 동의 안내',
          depth4: '',
          date: '완료',
          confirm: '21.10.14',
          api:  '21.11.15', etc: 'H/2021.12.01 글, 레이아웃 수정'
        },
        {
          id: 'AJ-profile-01',
          depth1: '',
          depth2: '회원정보 입력',
          depth3: '아이디 입력',
          depth4: '',
          date: '완료',
          confirm: '21.10.15',
          api:  '21.11.12', etc: 'H/2021.12.02 글 수정'
        },
        {
          id: 'AJ-profile-01-success',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '성공',
          date: '완료',
          confirm: '',
          api:  '21.11.12', etc: 'H(AJ-profile-01 포함)/2021.12.02 글 수정'
        },
        {
          id: 'AJ-profile-01-error',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '실패',
          date: '완료',
          confirm: '',
          api:  '21.11.12', etc: 'H(AJ-profile-01 포함)/2021.12.02 글 수정'
        },
        {
          id: 'AJ-profile-02',
          depth1: '',
          depth2: '',
          depth3: '비밀번호 입력',
          depth4: '',
          date: '완료',
          confirm: '21.10.15',
          api:  '21.11.12', etc: 'H/2021.12.02 글 수정'
        },
        {
          id: 'AJ-profile-02-success',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '성공',
          date: '완료',
          confirm: '',
          api:  '21.11.12', etc: 'H(AJ-profile-02 포함)/2021.12.02 글 수정,푸터 제거'
        },
        {
          id: 'AJ-profile-02-error',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '실패',
          date: '완료',
          confirm: '',
          api:  '21.11.12', etc: 'H(AJ-profile-02 포함)/2021.12.02 글 수정,푸터 제거'
        },
        {
          id: 'AJ-profile-03',
          depth1: '',
          depth2: '',
          depth3: '닉네임 입력',
          depth4: '',
          date: '컨펌완료',
          confirm: '21.10.18',
          api:  '21.11.12', etc: 'H'
        },
        {
          id: 'AJ-profile-03-success',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '성공',
          date: '완료',
          confirm: '',
          api:  '21.11.12', etc: 'H(AJ-profile-03 포함)/2021.12.02 글 수정, 푸터제거'
        },
        {
          id: 'AJ-profile-03-error',
          depth1: '',
          depth2: '',
          depth3: '',
          depth4: '실패',
          date: '완료',
          confirm: '',
          api:  '21.11.12', etc: 'H(AJ-profile-03 포함)/2021.12.02 글 수정, 푸터제거'
        },
        {
          id: 'AJ-profile-04',
          depth1: '',
          depth2: '이메일 인증 대기',
          depth3: '',
          depth4: '',
          date: '완료',
          confirm: '21.10.18',
          api:  '21.11.12', etc: 'H/2021.12.02 글 수정, 푸터제거'
        },
      ],
      more: [
        {
          id: 'ES-subaccount', depth1: '설정(S)', depth2: '회원정보', depth3: '보조 이메일', depth4: '', date: '컨펌완료', confirm: '21.10.13', api:  '90%', etc: 'K',
        },
        {
          id: 'ES-subaccount-01', depth1: '', depth2: '', depth3: '', depth4: '보조 이메일 등록', date: '컨펌완료', confirm: '21.10.14', api:  '완료', etc: 'K',
        },
        {
          id: 'ES-subaccount-01-before', depth1: '', depth2: '', depth3: '', depth4: '보조 이메일 등록(메일인증전)', date: '컨펌완료', confirm: '21.10.14', api:  '완료', etc: 'K(보조 이메일 등록에 포함)',
        },
        {
          id: 'ES-subaccount-01-success', depth1: '', depth2: '', depth3: '', depth4: '보조 이메일 등록(메일인증성공)', date: '컨펌완료', confirm: '21.10.14', api:  '완료', etc: 'K(보조 이메일 등록에 포함)',
        },
        {
          id: 'ES-currentpassword', depth1: '', depth2: '', depth3: '비밀번호 재설정', depth4: '현재 비밀번호', date: '컨펌완료', confirm: '21.10.15', api:  '30%', etc: 'K',
        },
        {
          id: 'ES-currentpassword-success', depth1: '', depth2: '', depth3: '비밀번호 재설정', depth4: '현재 비밀번호(성공)', date: '컨펌완료', confirm: '21.10.15', api:  '30%', etc: 'K(ES-currentpassword에 포함)',
        },
        {
          id: 'ES-currentpassword-error', depth1: '', depth2: '', depth3: '비밀번호 재설정', depth4: '현재 비밀번호(실패)', date: '컨펌완료', confirm: '21.10.15', api:  '30%', etc: 'K(ES-currentpassword에 포함)',
        },
        {
          id: 'AP-findpw-01', depth1: '', depth2: '', depth3: '', depth4: '새로운 비밀번호', date: '컨펌완료', confirm: '21.10.19', api:  '30%', etc: 'K',
        },
        {
          id: 'AP-findpw-02', depth1: '', depth2: '', depth3: '', depth4: '비밀번호 재설정 완료 안내', date: 'disabled', confirm: '21.10.19', api:  '', etc: '페이지 삭제 (alert로 대체)',
        },
        {
          id: 'ES-privacy', depth1: '', depth2: '', depth3: '개인정보 수정', depth4: '', date: '컨펌완료', confirm: '21.10.18', api:  '80%', etc: 'K',
        },
        {
          id: 'ES-privacyperiod', depth1: '', depth2: '', depth3: '개인정보 유효기간 설정', depth4: '', date: '컨펌완료', confirm: '21.10.18', api:  '90%', etc: 'K',
        },
        {
          id: 'ES-blockaccount', depth1: '', depth2: '서비스 설정', depth3: '차단 회원 관리', depth4: '', date: '컨펌완료', confirm: '21.10.18', api:  '', etc: 'K',
        },
        {
          id: 'ES-agreement', depth1: '', depth2: '서비스 이용 동의', depth3: '약관 및 정책 동의', depth4: '', date: '컨펌완료', confirm: '', api:  '완료', etc: 'K',
        },
        {
          id: 'ES-channeling', depth1: '', depth2: '', depth3: '부가서비스 관리', depth4: '', date: '컨펌완료', confirm: '', api:  '완료', etc: 'K',
        },
        {
          id: 'ES-channeling-blank', depth1: '', depth2: '', depth3: '부가서비스 관리', depth4: '연결된 부가서비스 없는 경우', date: '컨펌완료', confirm: '', api:  '완료', etc: 'K',
        },
        {
          id: 'ES-channelingdetail', depth1: '', depth2: '', depth3: '', depth4: '부가서비스 상세', date: '컨펌완료', confirm: '', api:  '완료', etc: 'K',
        },
        {
          id: 'ES-leavecyworld01', depth1: '', depth2: '회원 탈퇴', depth3: '회원탈퇴 시작', depth4: '', date: '컨펌완료', confirm: '21.10.20', api:  '70%', etc: 'K',
        },
        {
          id: 'ES-leavecyworld02', depth1: '', depth2: '', depth3: '회원탈퇴 사유', depth4: '', date: '컨펌완료', confirm: '21.10.20', api:  '21.11.18', etc: 'K',
        },
        {
          id: 'ES-leavecyworld03', depth1: '', depth2: '', depth3: '회원 탈퇴 완료', depth4: '', date: '컨펌완료', confirm: '21.10.20', api:  '21.11.18', etc: 'K',
        },
        {
          id: 'CM-main', depth1: '고객센터[C]', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.19', api:  '', etc: 'P',
        },
        {
          id: 'CB-list', depth1: '공지/이벤트[B]', depth2: '', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: '보류',
        },
        {
          id: 'TP-policy', depth1: '약관 및 정책[TP]', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '80%', etc: '',
        },
      ],
      customer: [
        {
          id: 'CM-main', depth1: '고객센터 메인[M]', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.19', api:  '', etc: 'P',
        },
        {
          id: 'CF-FaqMain', depth1: '자주하는 질문[F]', depth2: '메인', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.19', api:  '', etc: 'P',
        },
        {
          id: 'CF-SubList', depth1: '', depth2: '서브 카테고리 - 목록', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.19', api:  '', etc: 'P',
        },
        {
          id: 'CF-Search', depth1: '', depth2: '검색 결과', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.19', api:  '', etc: 'P',
        },
        {
          id: 'CF-Search-Blank', depth1: '', depth2: '검색 결과', depth3: '결과 없음', depth4: '', date: '컨펌완료', confirm: '2021.10.19', api:  '', etc: 'P/CF-Search포함',
        },
        {
          id: 'CF-FaqDetail', depth1: '', depth2: '상세 조회', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.20', api:  '', etc: 'P',
        },
        {
          id: 'CB-Notice', depth1: '공지사항/이벤트[B]', depth2: '공지사항', depth3: '목록', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'P/CB-NotiEvent.vue로 파일 합침',
        },
        {
          id: 'CB-NoticeDetail', depth1: '', depth2: '', depth3: '상세', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'P',
        },
        {
          id: 'CB-Event', depth1: '', depth2: '이벤트', depth3: '목록', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'P/CB-NotiEvent.vue로 파일 합침',
        },
        {
          id: 'CQ11-Login', depth1: '1:1 문의하기(Q11)', depth2: '1:1문의하기(로그인)', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'L',
        },
        {
          id: 'CQ11-Login-fileupload', depth1: '', depth2: '', depth3: '이미지 첨부', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'L/CQ11-Login에 포함',
        },
        {
          id: 'CQ11-NotLogin-before', depth1: '', depth2: '1:1문의하기(비로그인)', depth3: '로그인 유도', depth4: '', date: '컨펌완료', confirm: '2021.10.22', api:  '', etc: 'L',
        },
        {
          id: 'CQ11-NotLogin', depth1: '', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.22', api:  '', etc: 'L',
        },
        {
          id: 'CQ11-NotLogin-fileupload', depth1: '', depth2: '', depth3: '이미지 첨부', depth4: '', date: '컨펌완료', confirm: '2021.10.22', api:  '', etc: 'L/CQ11-NotLogin에 포함',
        },
        {
          id: 'CMy-List', depth1: '내 문의 내역(My)', depth2: '문의 내역 목록', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.22', api:  '', etc: 'T',
        },
        {
          id: 'CMy-Detail', depth1: '', depth2: '문의 내역 상세', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.22', api:  '', etc: 'T',
        },
      ],
      terms: [
        {
          id: 'TP-PolicyService', depth1: '이용약관', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'L/TP-policy동일/사용 X',
        },
        {
          id: 'TP-PolicyPrivacy', depth1: '개인정보 처리방침', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'L/TP-private동일/사용 X',
        },
        {
          id: 'TP-PolicyParent', depth1: '법정대리인 개인정보 수집 및 이용', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '80%', etc: 'L',
        },
        {
          id: 'TP-PolicyLocation', depth1: '위치기반 서비스 이용약관', depth2: '', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.21', api:  '', etc: 'L/TP-location동일/사용 X',
        },
      ],
      com: [
        {
          id: 'COM-verisuccess1', depth1: '(공통) 본인확인', depth2: '본인확인 성공 (회원가입)', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.26', api:  '2021.11.05', etc: '',
        },
        {
          id: 'COM-veriexist', depth1: '', depth2: '기존계정 있음', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.26', api:  '', etc: '',
        },
        {
          id: 'COM-verisuccess2', depth1: '', depth2: '본인확인 성공 (회원가입 외)', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.26', api:  '2021.11.05', etc: '',
        },
        {
          id: 'COM-veriproceeding', depth1: '', depth2: '본인확인 진행 중', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.10.26', api:  '2021.11.11', etc: '',
        },
        {
          id: 'COM-veriinfo', depth1: '', depth2: '개인정보 입력', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.11.11', api:  '', etc: '',
        },
        {
          id: 'COM-veriinfo-success', depth1: '', depth2: '', depth3: '성공', depth4: '', date: '컨펌완료', confirm: '2021.11.11', api:  '', etc: '',
        },
        {
          id: 'COM-veripolicy', depth1: '', depth2: '약관 자세히', depth3: '', depth4: '', date: '컨펌완료', confirm: '2021.11.11', api:  '', etc: '',
        },
      ],

      // pc web
      pc_account: [
        {
          id: 'AL-login', depth1: '로그인[L]', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'AL-S1-01', depth1: '', depth2: '계정 상태코드별 안내', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
      ],
      pc_com: [
        {
          id: 'GNB', depth1: 'GNB', depth2: 'Popup', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 내 정보 삭제'
        },
        {
          id: 'LS-search', depth1: '통합검색', depth2: '검색결과', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'LS-null', depth1: '', depth2: '검색결과 (no result)', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-ProfileCard', depth1: '프로필카드', depth2: '일촌', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-ProfileCard_other', depth1: '', depth2: '타인', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-LR-request', depth1: '일촌 신청', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-LR-request_success', depth1: '', depth2: '성공', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-LR-request_error', depth1: '', depth2: '실패', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-LR-change', depth1: '일촌명 변경', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-LR-change_success', depth1: '', depth2: '성공', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-LR-change_error', depth1: '', depth2: '실패', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-Report', depth1: '신고하기', depth2: '목록', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-Reportdone', depth1: '', depth2: '완료', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-Popup', depth1: '공지용 팝업', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'COM-Hashtag', depth1: '해시태그 검색', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 페이지 추가'
        },
        {
          id: 'COM-Hashtag-small', depth1: '', depth2: 'small', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 페이지 추가'
        },
        {
          id: 'COM-Loading', depth1: '로딩', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
      ],
      cylife: [
        {
          id: 'LM-main', depth1: '메인', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 검색 삭제'
        },
        {
          id: 'LT-stats', depth1: '방문자수 통계', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'LT-stats-popup', depth1: '', depth2: '달력 팝업', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'LR-receive', depth1: '일촌신청', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'LR-receive-blank', depth1: '', depth2: '일촌신청 내용 없는 경우', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MF-friend', depth1: '일촌목록', depth2: '', depth3: '', depth4: '', date: 'disabled', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MF-friend-blank', depth1: '', depth2: '일촌목록 내용 없는 경우', depth3: '', depth4: '', date: 'disabled', confirm: '', api:  '', etc: ''
        },
        {
          id: 'LA-list', depth1: '일촌 수락 영역 팝업', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
      ],
      minihompy: [
        {
          id: 'MH-Main', depth1: '메인', depth2: '본인', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 미니홈피 더보기 메뉴 문구 수정, 프로필 사진 변경/더보기 버튼, Today is 감정 변경 기능 제외 2021.12.02 일촌평 없을 경우 노출 화면 추가'
        },
        {
          id: 'MH-Main-friend', depth1: '', depth2: '일촌', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 미니홈피 더보기 메뉴 문구 수정, 일촌평 쓰기 기능 제외'
        },
        {
          id: 'MH-Main-other', depth1: '', depth2: '타인', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 미니홈피 더보기 메뉴 문구 수정'
        },
        {
          id: 'MH-ProfileChange', depth1: '', depth2: '프로필 사진 편집', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MH-ProfileChange-already', depth1: '', depth2: '', depth3: '이미지 있음', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MH-PhotoModify', depth1: '', depth2: '', depth3: '사진 조정', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MH-ProfileDetail', depth1: '', depth2: '프로필 사진 자세히 보기', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MH-ProfileDetail-more', depth1: '', depth2: '', depth3: '더보기 있음', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 더보기 버튼 제외'
        },
        {
          id: 'MR-list', depth1: '미니룸', depth2: '', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01 더보기 버튼 제외'
        },
        {
          id: 'MC-Detail', depth1: '', depth2: '일촌평', depth3: '상세 목록', depth4: '타인', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MC-Detail-my', depth1: '', depth2: '', depth3: '', depth4: '작성자', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MJ-jukebox', depth1: '쥬크박스', depth2: '본인', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01'
        },
        {
          id: 'MJ-jukebox-other', depth1: '', depth2: '타인', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01'
        },
        {
          id: 'MJ-jukebox-blank', depth1: '', depth2: '검색결과', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MB-AlbumDetail', depth1: 'BGM', depth2: '앨범 상세', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MG-list', depth1: '방명록', depth2: '상세', depth3: '타인', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01'
        },
        {
          id: 'MG-list-my', depth1: '', depth2: '', depth3: '본인', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MG-list-blank', depth1: '', depth2: '방명록 없음', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01'
        },
        {
          id: 'MG-Reply', depth1: '', depth2: '공통', depth3: '댓글 목록', depth4: '타인', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MG-Reply-my', depth1: '', depth2: '', depth3: '', depth4: '본인', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MG-Reply-blank', depth1: '', depth2: '', depth3: '', depth4: '댓글 없음', date: '완료', confirm: '', api:  '', etc: '2021.12.02'
        },
        {
          id: 'MG-Reply-mention', depth1: '', depth2: '', depth3: '멘션 댓글 목록', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.02'
        },
        {
          id: 'MG-Reply-mention2', depth1: '', depth2: '', depth3: '', depth4: '댓글 전체보기 클릭 시', date: '완료', confirm: '', api:  '', etc: '2021.12.02'
        },
        {
          id: 'MD-My', depth1: '다이어리', depth2: '목록', depth3: '일반', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.02 달력 표시 변경'
        },
        {
          id: 'MD-My-other', depth1: '', depth2: '', depth3: '', depth4: '다른 달', date: '완료', confirm: '', api:  '', etc: '2021.12.02'
        },
        {
          id: 'MD-My-emoticon', depth1: '', depth2: '', depth3: '', depth4: '캘린더 이모티콘', date: '완료', confirm: '', api:  '', etc: '2021.12.02'
        },
        {
          id: 'MD-My-null', depth1: '', depth2: '', depth3: '', depth4: '작성한 일기 없을 경우', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Share', depth1: '', depth2: '', depth3: '공유', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.01'
        },
        {
          id: 'MD-Share-list', depth1: '', depth2: '', depth3: '', depth4: '멤버 목록', date: '완료', confirm: '', api:  '', etc: '2021.12.02'
        },
        {
          id: 'MD-Share-list-member', depth1: '', depth2: '', depth3: '', depth4: '멤버 목록 정렬', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Share-list-search', depth1: '', depth2: '', depth3: ' ', depth4: '멤버 목록 검색', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Share-list-search-null', depth1: '', depth2: '', depth3: '', depth4: '멤버 목록 검색 결과없음', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Folder', depth1: '', depth2: '', depth3: '폴더', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Write', depth1: '', depth2: '쓰기', depth3: '', depth4: '', date: 'disabled', confirm: '', api:  '', etc: '보류'
        },
        {
          id: 'MD-Detail', depth1: '', depth2: '상세', depth3: '작성자', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.02'
        },
        {
          id: 'MD-Detail-other', depth1: '', depth2: '', depth3: '타인', depth4: '더보기', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Detail-share', depth1: '', depth2: '', depth3: '공유', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Detail-reply', depth1: '', depth2: '', depth3: '댓글 목록', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MD-Detail-mention', depth1: '', depth2: '', depth3: '멘션 댓글 목록', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Folderselect', depth1: '사진첩', depth2: '폴더 선택', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Folderselect-first', depth1: '', depth2: '', depth3: '최초 가입자', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Detail', depth1: '', depth2: '공통 상세', depth3: '단일 첨부 게시물', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.03 퍼가요 버튼 메뉴 추가'
        },
        {
          id: 'MA-Detail-share', depth1: '', depth2: '', depth3: '퍼가요 게시물', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.03 퍼가요 출처 표기 수정'
        },
        {
          id: 'MA-Detail-special', depth1: '', depth2: '', depth3: '특수 첨부 게시물', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Detail-video', depth1: '', depth2: '', depth3: '동영상', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.03 재생전 음소거 버튼 제외'
        },
        {
          id: 'MA-Detail-video-playhover', depth1: '', depth2: '', depth3: '동영상 재생중 hover', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Detailsympathy', depth1: '', depth2: '', depth3: '공감 목록', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Reply', depth1: '', depth2: '', depth3: '댓글 목록', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Reply-blank', depth1: '', depth2: '', depth3: '댓글 없음', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Reply-mention', depth1: '', depth2: '', depth3: '멘션 댓글 목록', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-Reply-mention2', depth1: '', depth2: '', depth3: '멘션 대댓글 팝업', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-List', depth1: '', depth2: '목록', depth3: '3단', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.03 마우스오버 효과'
        },
         {
          id: 'MA-List-grid5', depth1: '', depth2: '', depth3: '5단', depth4: '', date: '완료', confirm: '', api:  '', etc: '2021.12.03 마우스오버 효과'
        },
        {
          id: 'MA-List-grid5-1', depth1: '', depth2: '', depth3: '', depth4: '폴더보기', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MA-List-default', depth1: '', depth2: '', depth3: '최초 가입자', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'MS-Setting', depth1: '미니홈피 설정', depth2: '수정 비활성화', depth3: 'A타입', depth4: '', date: 'disabled', confirm: '', api:  '', etc: '보류'
        },
      ],
      // 파도타기
      wh: [
        {
          id: 'WH-home', depth1: '홈 [H]', depth2: '', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WH-praise', depth1: '칭찬합시다 스튜디오', depth2: '', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        }, 
        {
          id: 'WH-praise-fame', depth1: '', depth2: '명예의 전당', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WH-praise-hero', depth1: '', depth2: '이 주의 주인공', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WH-herostory', depth1: '사연 보기', depth2: '주인공 보기', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WH-herostory2', depth1: '', depth2: '다음주 주인공 보기', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WH-herostory3', depth1: '', depth2: '명예의 전당 주인공 보기', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WH-gift', depth1: '', depth2: '도토리 후원하기', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WH-gift-error', depth1: '', depth2: '', depth3: '에러', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WM-home', depth1: '뮤직파도', depth2: '', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WM-basket', depth1: '', depth2: '인기차트', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'WM-theme', depth1: '', depth2: '추천테마', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
      ],
      ed: [
        {
          id: 'EM-main', depth1: '도토리', depth2: '메인', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-charge', depth1: '', depth2: '충전하기', depth3: '충전 수량 선택', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-charge-error', depth1: '', depth2: '', depth3: '', depth4: '에러', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-giftqty', depth1: '', depth2: '수량 입력', depth3: '', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-giftqty-error', depth1: '', depth2: '', depth3: '에러', depth4: '', date: '완료', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-giftselect', depth1: '내역보기', depth2: '선물하기', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-giftselect-null', depth1: '', depth2: '', depth3: '일촌 없음', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-giftselect-null2', depth1: '', depth2: '', depth3: '검색결과 없음', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-giftselect-search', depth1: '', depth2: '', depth3: '검색활성화', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-giftlist', depth1: '', depth2: '선물함', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: 'ED-giftselect에 포함'
        },
        {
          id: 'ED-giftdetail', depth1: '', depth2: '', depth3: '상세', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-chargehistory', depth1: '', depth2: '충전 내역 (달력 X)', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-chargehistory-null', depth1: '', depth2: '', depth3: '내용 없을 경우', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-chargehistorydetail', depth1: '', depth2: '', depth3: '상세', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-chargehistory-month', depth1: '', depth2: '충전 내역 (달력 O)', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-chargehistory-month-popup', depth1: '', depth2: '', depth3: '달력 팝업', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-chargehistory-month-null', depth1: '', depth2: '', depth3: '내용 없을 경우', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-usehistory', depth1: '', depth2: '사용 내역', depth3: '', depth4: '', date: '', confirm: '', api:  '', etc: 'ED-chargehistory에 포함'
        },
        {
          id: 'ED-usehistory-bgm', depth1: '', depth2: '', depth3: 'BGM 구매 내역', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },
        {
          id: 'ED-usehistorydetail', depth1: '', depth2: '', depth3: '상세', depth4: '', date: '', confirm: '', api:  '', etc: ''
        },        
      ],
    }
  },
  components: {
    H2,
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding-bottom: 100px;
}

tr{
  background-color: #f6f6f6;
}

th{
  padding: 5px 10px;
  border-left: 1px solid #ddd;
  background-color: #dbdbdb;
}

td{
  padding: 5px 10px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

thead tr td{
  &:first-child{
    border-left: 0;
  }
}

tbody tr td{
  background-color: #fff;
  &:first-child{
    border-left: 0;
  }
}

tbody tr{
  &.complete{
    td{
      background-color: #e2eff5;
    }
  }

  &.success{
    td{
      background-color: #d1e7dd;
    }
  }

  &.disabled{
    td{
      text-decoration:line-through;
      background-color: #d3d3d3;
    }
  }

  td{
    background-color: #fff;
    &:first-child{
      border-left: 0;
    }
    &:last-child{
      text-align: left;
    }
  }
}

td > a{
  display: block;
  text-decoration: underline;
}
</style>

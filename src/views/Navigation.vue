<template>
<div>
  <v-card>
    <v-toolbar
      color="#F36B2B"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>[싸이월드-ReBoot] Mobile publish</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/guide">
        Guide
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

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

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">화면 코드</th>
                  <th class="text-left">1 Depth</th>
                  <th class="text-left">2 Depth</th>
                  <th class="text-left">3 Depth</th>
                  <th class="text-left">4 Depth</th>
                  <th class="text-left">filepath</th>
                  <th class="text-left">date</th>
                  <th class="text-left">완료</th>
                  <th class="text-left">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, idx) in account"
                  :key="idx"
                >
                  <td>{{ idx + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.depth1 }}</td>
                  <td>{{ item.depth2 }}</td>
                  <td>{{ item.depth3 }}</td>
                  <td>{{ item.depth4 }}</td>
                  <td>
                    <router-link :to="`/${item.id}`">{{ item.id }}</router-link>
                  </td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.confirm }}</td>
                  <td>{{ item.etc }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">화면 코드</th>
                  <th class="text-left">1 Depth</th>
                  <th class="text-left">2 Depth</th>
                  <th class="text-left">3 Depth</th>
                  <th class="text-left">4 Depth</th>
                  <th class="text-left">filepath</th>
                  <th class="text-left">date</th>
                  <th class="text-left">완료</th>
                  <th class="text-left">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, idx) in more"
                  :key="idx"
                >
                  <td>{{ idx + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.depth1 }}</td>
                  <td>{{ item.depth2 }}</td>
                  <td>{{ item.depth3 }}</td>
                  <td>{{ item.depth4 }}</td>
                  <td>
                    <router-link :to="`/${item.id}`">{{ item.id }}</router-link>
                  </td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.confirm }}</td>
                  <td>{{ item.etc }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">화면 코드</th>
                  <th class="text-left">1 Depth</th>
                  <th class="text-left">2 Depth</th>
                  <th class="text-left">3 Depth</th>
                  <th class="text-left">4 Depth</th>
                  <th class="text-left">filepath</th>
                  <th class="text-left">date</th>
                  <th class="text-left">완료</th>
                  <th class="text-left">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, idx) in customer"
                  :key="idx"
                >
                  <td>{{ idx + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.depth1 }}</td>
                  <td>{{ item.depth2 }}</td>
                  <td>{{ item.depth3 }}</td>
                  <td>{{ item.depth4 }}</td>
                  <td>
                    <router-link :to="`/${item.id}`">{{ item.id }}</router-link>
                  </td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.confirm }}</td>
                  <td>{{ item.etc }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">화면 코드</th>
                  <th class="text-left">1 Depth</th>
                  <th class="text-left">2 Depth</th>
                  <th class="text-left">3 Depth</th>
                  <th class="text-left">4 Depth</th>
                  <th class="text-left">filepath</th>
                  <th class="text-left">date</th>
                  <th class="text-left">완료</th>
                  <th class="text-left">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, idx) in terms"
                  :key="idx"
                >
                  <td>{{ idx + 1 }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.depth1 }}</td>
                  <td>{{ item.depth2 }}</td>
                  <td>{{ item.depth3 }}</td>
                  <td>{{ item.depth4 }}</td>
                  <td>
                    <router-link :to="`/${item.id}`">{{ item.id }}</router-link>
                  </td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.confirm }}</td>
                  <td>{{ item.etc }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          '계정 [A]', '더보기 [E]', '고객센터[C]', '약관 및 정책[TP]',
        ],
        account: [
          {
            id: 'AL-login', depth1: '로그인', depth2: '로그인', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-login-success', depth1: '', depth2: '', depth3: '로그인 버튼 활성화', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-login-error', depth1: '', depth2: '', depth3: '로그인 실패', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-S1-01', depth1: '', depth2: '계정 상태코드별 안내', depth3: 'S1 휴면', depth4: '휴면해제 안내', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-S1-02', depth1: '', depth2: '', depth3: '', depth4: '휴면해제 완료', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-BX', depth1: '', depth2: '', depth3: '회원가입 대기', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-BL', depth1: '', depth2: '', depth3: '블랙리스트', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-B4', depth1: '', depth2: '', depth3: '유보', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-B5', depth1: '', depth2: '', depth3: '대량 제재', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AL-C1', depth1: '', depth2: '', depth3: '글쓰기 정지', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AI-findid', depth1: '아이디 찾기', depth2: '아이디 찾기 방법 선택', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AI-findid1-01', depth1: '', depth2: '실명인증으로 아이디 찾기', depth3: '실명인증으로 아이디 찾기 결과', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AI-findid2-01', depth1: '', depth2: '이름, 휴대폰 번호로 아이디 찾기', depth3: '이름, 휴대폰 번호 입력', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AI-findid2-01-success', depth1: '', depth2: '', depth3: '', depth4: '정상 입력', date: '', confirm: '', etc: '',
          },
          {
            id: 'AI-findid2-02', depth1: '', depth2: '', depth3: '이름, 휴대폰 번호로 아이디 찾기 결과', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AI-findid2-03', depth1: '', depth2: '', depth3: '실명인증 아이디 전체 확인 안내', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw', depth1: '비밀번호 재설정', depth2: '이메일 아이디 입력 안내', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-success', depth1: '', depth2: '', depth3: '', depth4: '성공', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-error', depth1: '', depth2: '', depth3: '', depth4: '실패', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-01', depth1: '', depth2: '비밀번호 재설정', depth3: '새 비밀번호 입력', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-01-success', depth1: '', depth2: '', depth3: '', depth4: '성공', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-01-error', depth1: '', depth2: '', depth3: '', depth4: '실패', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-02', depth1: '', depth2: '', depth3: '비밀번호 재설정 완료 안내', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-agree', depth1: '회원가입', depth2: '약관 동의', depth3: '약관 동의 안내', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'TP-policy', depth1: '', depth2: '', depth3: '이용약관', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'TP-private', depth1: '', depth2: '', depth3: '개인정보 처리방침', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'TP-location', depth1: '', depth2: '', depth3: '위치기반 서비스 이용약관', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'TP-marketing', depth1: '', depth2: '', depth3: '마케팅 정보수신 동의 안내', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-agreechild', depth1: '', depth2: '법정대리인 동의', depth3: '법정대리인 동의 안내', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-01', depth1: '', depth2: '회원정보 입력', depth3: '아이디 입력', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-01-success', depth1: '', depth2: '', depth3: '', depth4: '성공', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-01-error', depth1: '', depth2: '', depth3: '', depth4: '실패', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-02', depth1: '', depth2: '', depth3: '비밀번호 입력', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-02-success', depth1: '', depth2: '', depth3: '', depth4: '성공', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-02-error', depth1: '', depth2: '', depth3: '', depth4: '실패', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-03', depth1: '', depth2: '', depth3: '닉네임 입력', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-03-success', depth1: '', depth2: '', depth3: '', depth4: '성공', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-03-error', depth1: '', depth2: '', depth3: '', depth4: '실패', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-profile-04', depth1: '', depth2: '이메일 인증 대기', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'AJ-done', depth1: '', depth2: '회원가입 완료', depth3: '팝업 예시', depth4: '', date: '', confirm: '', etc: '',
          },
        ],
        more: [
          {
            id: 'ES-subaccount', depth1: '설정(S)', depth2: '회원정보', depth3: '보조 이메일', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-subaccount-01', depth1: '', depth2: '', depth3: '', depth4: '보조 이메일 등록', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-subaccount-01-before', depth1: '', depth2: '', depth3: '', depth4: '보조 이메일 등록(메일인증전)', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-subaccount-01-success', depth1: '', depth2: '', depth3: '', depth4: '보조 이메일 등록(메일인증성공)', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-currentpassword', depth1: '', depth2: '', depth3: '비밀번호 재설정', depth4: '현재 비밀번호', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-currentpassword-success', depth1: '', depth2: '', depth3: '비밀번호 재설정', depth4: '현재 비밀번호(성공)', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-currentpassword-error', depth1: '', depth2: '', depth3: '비밀번호 재설정', depth4: '현재 비밀번호(실패)', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-01', depth1: '', depth2: '', depth3: '', depth4: '새로운 비밀번호', date: '', confirm: '', etc: '',
          },
          {
            id: 'AP-findpw-02', depth1: '', depth2: '', depth3: '', depth4: '비밀번호 재설정 완료 안내', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-privacy', depth1: '', depth2: '', depth3: '개인정보 수정', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-privacyperiod', depth1: '', depth2: '', depth3: '개인정보 유효기간 설정', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-blockaccount', depth1: '', depth2: '서비스 설정', depth3: '차단 회원 관리', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-blockaccount-confirm', depth1: '', depth2: '서비스 설정', depth3: '차단 회원 관리', depth4: '컨펌 팝업', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-blockaccount-clear', depth1: '', depth2: '서비스 설정', depth3: '차단 회원 관리', depth4: '해제 팝업', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-agreement', depth1: '', depth2: '서비스 이용 동의', depth3: '약관 및 정책 동의', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-channeling', depth1: '', depth2: '', depth3: '부가서비스 관리', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-channeling-blank', depth1: '', depth2: '', depth3: '부가서비스 관리', depth4: '연결된 부가서비스 없는 경우', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-channelingdetail', depth1: '', depth2: '', depth3: '', depth4: '부가서비스 상세', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-leavecyworld01', depth1: '', depth2: '회원 탈퇴', depth3: '회원탈퇴 시작', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-leavecyworld01-success', depth1: '', depth2: '회원 탈퇴', depth3: '회원탈퇴 시작', depth4: '성공', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-leavecyworld02', depth1: '', depth2: '', depth3: '회원탈퇴 사유', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'ES-leavecyworld03', depth1: '', depth2: '', depth3: '회원 탈퇴 완료', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CM-main', depth1: '고객센터[C]', depth2: '', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CB-list', depth1: '공지/이벤트[B]', depth2: '', depth3: '', depth4: '', date: '', confirm: '',
          },
          {
            id: 'TP-policy', depth1: '약관 및 정책[TP]', depth2: '', depth3: '', depth4: '', date: '', confirm: '',
          },
        ],
        customer: [
          {
            id: 'CM-main', depth1: '고객센터 메인[M]', depth2: '', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CF-FaqMain', depth1: '자주하는 질문[F]', depth2: '메인', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CF-SubList', depth1: '', depth2: '서브 카테고리 - 목록', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CF-Search', depth1: '', depth2: '검색 결과', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CF-Search-Blank', depth1: '', depth2: '검색 결과', depth3: '결과 없음', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CF-FaqDetail', depth1: '', depth2: '상세 조회', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CB-Notice', depth1: '공지사항/이벤트[B]', depth2: '공지사항', depth3: '목록', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CB-NoticeDetail', depth1: '', depth2: '', depth3: '상세', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CB-Event', depth1: '', depth2: '이벤트', depth3: '목록', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CQ11-Login', depth1: '1:1 문의하기(Q11)', depth2: '1:1문의하기(로그인)', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CQ11-Login-fileupload', depth1: '', depth2: '', depth3: '이미지 첨부', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CQ11-NotLogin-before', depth1: '', depth2: '1:1문의하기(비로그인)', depth3: '로그인 유도', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CQ11-NotLogin', depth1: '', depth2: '', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CQ11-NotLogin-fileupload', depth1: '', depth2: '', depth3: '이미지 첨부', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CMy-List', depth1: '내 문의 내역(My)', depth2: '문의 내역 목록', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'CMy-Detail', depth1: '', depth2: '문의 내역 상세', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
        ],
        terms: [
          {
            id: 'TP-PolicyService', depth1: '이용약관', depth2: '', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'TP-PolicyPrivacy', depth1: '개인정보 처리방침', depth2: '', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'TP-PolicyParent', depth1: '법정대리인 개인정보 수집 및 이용', depth2: '', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
          {
            id: 'TP-PolicyLocation', depth1: '위치기반 서비스 이용약관', depth2: '', depth3: '', depth4: '', date: '', confirm: '', etc: '',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
.title{
  font-size: 22px;
  font-weight: 700;
}
.title_sub{
  font-size: 18px;
}
</style>
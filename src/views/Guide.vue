<template>
  <v-card class="wrap_guide">
    <v-toolbar
      color="#F36B2B"
      dark
      flat
    >
      <v-toolbar-title>[싸이월드-ReBoot] Mobile publish guide</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn to="/">
        Filepath
      </v-btn>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        INPUT
      </v-tab>
      <v-tab>
        SELECT
      </v-tab>
      <v-tab>
        BUTTON
      </v-tab>
      <v-tab>
        RADIO/CHECK
      </v-tab>
      <v-tab>
        SWITCH
      </v-tab>
      <v-tab>
        ALERT
      </v-tab>
      <v-tab>
        TABS
      </v-tab>
      <v-tab>
        FORMS
      </v-tab>
      <v-tab>
        TITLE
      </v-tab>
       <v-tab>
        LIST
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-title>type="text"</v-card-title>
          <v-card-text>
            <InputText
              type="text"
              label="아이디"
              value=""
            />
          </v-card-text>
          <v-card-title>type="password"</v-card-title>
          <v-card-text>
            <InputText
              type="password"
              label="패스워드"
              value=""
            />
          </v-card-text>

          <v-card-title>error</v-card-title>
          <v-card-text>
            <InputText
              type="password"
              label="비밀번호"
              value="aaa"
              class="input_error"
              hint="비밀번호가 일치하지 않습니다."
              persistent-hint
              counter="20"
            />
          </v-card-text>

          <v-card-title>success</v-card-title>
          <v-card-text>
            <InputText
              type="password"
              label="비밀번호"
              value="aaa"
              clearable
              class="input_success"
              hint="사용할 수 있는 비밀번호 입니다."
              persistent-hint
            />
          </v-card-text>

          <v-card-title>textarea</v-card-title>
          <v-card-text>
            <TextArea
              class="input_textarea"
              counter="50"
              placeholder="50자 이내"
              height="102"
            />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              <Select
                class="input_select">
                <template v-slot:options>
                  <option value="+82">+82</option>
                  <option value="010">010</option>
                  <option value="011">011</option>
                </template>
              </Select>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title>
            full width (block)
          </v-card-title>
          <v-card-text>
            <Button value="확인" large block></Button>
          </v-card-text>
          <v-card-title>
            large (height: 50)
          </v-card-title>
          <v-card-text>
            <Button value="확인" large></Button>
          </v-card-text>
          <v-card-title>
            medium (height: 36)
          </v-card-title>
          <v-card-text>
            <Button value="확인"></Button>
            &nbsp;
            <Button value="확인" outlined></Button>
          </v-card-text>
          <v-card-title>
            small (height: 33)
          </v-card-title>
          <v-card-text>
            <Button value="확인" small></Button>
            &nbsp;
            <Button value="확인" small outlined></Button>
          </v-card-text>
          <v-card-title>
            x-small (height: 28)
          </v-card-title>
          <v-card-text>
            <Button value="확인" x-small></Button>
            &nbsp;
            <Button value="확인" x-small outlined></Button>
            &nbsp;
            <Button value="담기" x-small outlined width="58" color="cy_blue"></Button>
          </v-card-text>
          <v-card-title>
            disabled
          </v-card-title>
          <v-card-text>
            <Button value="확인" large disabled></Button>
          </v-card-text>
          <v-card-title>
            outline
          </v-card-title>
          <v-card-text>
            <Button value="확인" large outlined></Button>
          </v-card-text>
          <v-card-title>
            text
          </v-card-title>
          <v-card-text>
            <Button value="확인" text large></Button>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title>radio (pc)</v-card-title>
          <v-card-text>
            <p>
              <v-radio-group v-model="radioGroup1">
                <v-row>
                  <v-col cols="auto">
                    <Radio class="styled_radio" color="secondary" />
                  </v-col>
                  <v-col cols="auto">
                    <Radio class="styled_radio" color="secondary" />
                  </v-col>
                  <v-col cols="auto">
                    <Radio class="styled_radio" color="secondary" disabled />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <Radio class="styled_radio" input-value="true" color="secondary" label="Radio Label" />
                  </v-col>
                </v-row>
              </v-radio-group>
            </p>
          </v-card-text>
          <v-card-title>radio (mobile)</v-card-title>
          <v-card-text>
            <p>
              <v-radio-group v-model="radioGroup2">
                <v-row>
                  <v-col cols="auto">
                    <Radio class="styled_radio" />
                  </v-col>
                  <v-col cols="auto">
                    <Radio class="styled_radio" />
                  </v-col>
                  <v-col cols="auto">
                    <Radio class="styled_radio" disabled />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <Radio class="styled_radio" input-value="true" label="Radio Label" />
                  </v-col>
                </v-row>
              </v-radio-group>
            </p>
          </v-card-text>
          <v-card-title>checkbox</v-card-title>
          <v-card-text>
            <p>
              <v-row>
                <v-col cols="auto">
                  <Checkbox class="styled_checkbox" input-value="true" />
                </v-col>
                <v-col cols="auto">
                  <Checkbox class="styled_checkbox" input-value="true" disabled />
                </v-col>
                <v-col cols="auto">
                  <Checkbox class="styled_checkbox" />
                </v-col>
                <v-col cols="auto">
                  <Checkbox class="styled_checkbox" disabled />
                </v-col>
                <v-col cols="auto">
                  <Checkbox class="styled_checkbox indeterminate" input-value="true" indeterminate />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <Checkbox class="styled_checkbox" input-value="true" label="Checkbox Label" />
                </v-col>
              </v-row>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              <v-row>
                <v-col cols="auto">
                  <Switchbtn class="styled_switch" input-value="true" flat inset />
                </v-col>
                <v-col cols="auto">
                  <Switchbtn class="styled_switch" flat inset />
                </v-col>
                <v-col cols="auto">
                  <Switchbtn class="styled_switch" flat inset disabled />
                </v-col>
              </v-row>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title>alert (pc)</v-card-title>
          <v-card-text>
            <v-row>
              <v-coi cols="auto">
                <Button value="제목 1줄 + 버튼 1" outlined @click="WebHandleClickButton1"></Button>
                <Alert cardClass="web" :open="webPopup1" @update:dateSettting="webSetDate1" max-width="300">
                  <template v-slot:dialog-title>
                    <v-card-title>텍스트가 1줄일 경우</v-card-title>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="webPopup1 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 2줄 + 버튼 2" outlined @click="WebHandleClickButton2"></Button>
                <Alert cardClass="title2 web" :open="webPopup2" @update:dateSettting="webSetDate2" max-width="300">
                  <template v-slot:dialog-title>
                    <v-card-title>텍스트가 2줄일 경우 <br> 이것을 사용해주세요</v-card-title>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn class="two-btns cancel" text  x-large @click="webPopup2 = false">취소</v-btn>
                    <v-btn class="two-btns" text x-large @click="webPopup2 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 1줄 +  내용 2줄 + 버튼 2" outlined @click="WebHandleClickButton3"></Button>
                <Alert cardClass="title-text web" :open="webPopup3" @update:dateSettting="webSetDate3" max-width="300">
                  <template v-slot:dialog-title>
                    <v-card-title>텍스트가 1줄일 경우</v-card-title>
                  </template>
                  <template v-slot:dialog-text>
                    <v-card-text>
                      내용이 2줄일 경우 <br> 사용해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn class="two-btns cancel" text  x-large @click="webPopup3 = false">취소</v-btn>
                    <v-btn class="two-btns" text x-large @click="webPopup3 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 2줄 +  내용 2줄 + 버튼 2" outlined @click="WebHandleClickButton4"></Button>
                <Alert cardClass="title-text web" :open="webPopup4" @update:dateSettting="webSetDate4" max-width="300">
                  <template v-slot:dialog-title>
                    <v-card-title>텍스트가 1줄일 경우 <br> 사용해주세요</v-card-title>
                  </template>
                  <template v-slot:dialog-text>
                    <v-card-text>
                      내용이 2줄일 경우 <br> 사용해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn class="two-btns cancel" text  x-large @click="webPopup4 = false">취소</v-btn>
                    <v-btn class="two-btns" text x-large @click="webPopup4 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="내용 1줄 + 버튼 1" outlined @click="WebHandleClickButton5"></Button>
                <Alert cardClass="text web" :open="webPopup5" @update:dateSettting="webSetDate5" max-width="300">
                  <template v-slot:dialog-text>
                    <v-card-text>
                      내용이 1줄일 경우 사용해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="webPopup5 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="내용 2줄 + 버튼 1" outlined @click="WebHandleClickButton6"></Button>
                <Alert cardClass="text2 web" :open="webPopup6" @update:dateSettting="webSetDate6" max-width="300">
                  <template v-slot:dialog-text>
                    <v-card-text>
                      내용이 2줄일 경우 <br>
                      사용해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="webPopup6 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="내용 1줄 (dark mode)
                " outlined @click="WebHandleClickButton7" :style="{'text-transform': tt}"></Button>
                <Alert cardClass="dark web" :open="webPopup7" @update:dateSettting="webSetDate7" max-width="190">
                  <template v-slot:dialog-text>
                    <v-card-text>
                      1분 듣기 재생 중입니다.
                    </v-card-text>
                  </template>
                </Alert>
              </v-coi>
            </v-row>
          </v-card-text>
          <v-card-title>alert (mobile)</v-card-title>
          <v-card-text>
            <v-row>
              <v-coi cols="auto">
                <Button value="제목 1줄 + 버튼 1" outlined @click="HandleClickButton1"></Button>
                <Alert :open="popup1" @update:dateSettting="setDate1" >
                  <template v-slot:dialog-title>
                    <v-card-title>싸이월드 가입이 완료되었습니다.</v-card-title>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup1 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 2줄 + 버튼 1" outlined @click="HandleClickButton2"></Button>
                <Alert cardClass="title2" :open="popup2" @update:dateSettting="setDate2">
                  <template v-slot:dialog-title>
                    <v-card-title>이메일 인증이 <br> 완료되지 않았습니다.</v-card-title>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup2 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 1줄 + 내용 2줄 + 버튼 1 (font-size 14)" outlined @click="HandleClickButton3" :style="{'text-transform': tt}"></Button>
                <Alert cardClass="title-text" :open="popup3" @update:dateSettting="setDate3">
                  <template v-slot:dialog-title>
                    <v-card-title>일치하는 회원이 없습니다.</v-card-title>
                  </template>
                  <template v-slot:dialog-text>
                    <v-card-text>
                      입력한 이름과 휴대폰 번호를 <br>
                      다시 확인해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup3 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 1줄 + 내용 1줄 + 버튼 1 (font-size 13)" outlined @click="HandleClickButton4" :style="{'text-transform': tt}"></Button>
                <Alert cardClass="title-text" :open="popup4" @update:dateSettting="setDate4">
                  <template v-slot:dialog-title>
                    <v-card-title>개인정보가 업데이트 되었습니다.</v-card-title>
                  </template>
                  <template v-slot:dialog-text>
                    <v-card-text class="fs13">
                      2021.07.11
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup4 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 2줄 + 내용 1개 + 버튼 1" outlined @click="HandleClickButton5" :style="{'text-transform': tt}"></Button>
                <Alert cardClass="title-text" :open="popup5" @update:dateSettting="setDate5">
                  <template v-slot:dialog-title>
                    <v-card-title>아직 회원가입이 <br> 완료되지 않았습니다.</v-card-title>
                  </template>
                  <template v-slot:dialog-text>
                    <v-card-text>
                      입력한 이름과 휴대폰 번호를 <br>
                      다시 확인해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup5 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 1줄 + 내용 2개 + 버튼 1" outlined @click="HandleClickButton6" :style="{'text-transform': tt}"></Button>
                <Alert cardClass="title-text2" :open="popup6" @update:dateSettting="setDate6">
                  <template v-slot:dialog-title>
                    <v-card-title>마케팅 정보 수신 동의</v-card-title>
                  </template>
                  <template v-slot:dialog-text>
                    <v-card-text>
                      싸이월드의 마케팅 정보 수신여부가 <br>
                      동의 상태로 변경되었습니다.
                    </v-card-text>
                    <v-card-text class="fs13">
                      2021.07.11
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup6 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="제목 2줄 + 내용 1개 + 버튼 1" outlined @click="HandleClickButton5" :style="{'text-transform': tt}"></Button>
                <Alert cardClass="title-text" :open="popup5" @update:dateSettting="setDate5">
                  <template v-slot:dialog-title>
                    <v-card-title>아직 회원가입이 <br> 완료되지 않았습니다.</v-card-title>
                  </template>
                  <template v-slot:dialog-text>
                    <v-card-text>
                      입력한 이름과 휴대폰 번호를 <br>
                      다시 확인해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup5 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="내용만 있는 경우" outlined @click="HandleClickButton7" :style="{'text-transform': tt}"></Button>
                <Alert cardClass="text" :open="popup7" @update:dateSettting="setDate7">
                  <template v-slot:dialog-text>
                    <v-card-text>
                      이미지는 PNG, GIF, JPG, JPEG, <br>
                      BMP 파일만 첨부 가능해요. <br>
                      이미지를 선택해주세요.
                    </v-card-text>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn text block x-large @click="popup7 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
              <v-coi cols="auto" :style="{'margin-left': ml}">
                <Button value="버튼이 2개인 경우" outlined @click="HandleClickButton8"></Button>
                <Alert :open="popup8" @update:dateSettting="setDate8">
                  <template v-slot:dialog-title>
                    <v-card-title>로그아웃 하시겠습니까?</v-card-title>
                  </template>
                  <template v-slot:dialog-btn>
                    <v-btn class="two-btns cancel" text  x-large @click="popup8 = false">취소</v-btn>
                    <v-btn class="two-btns" text x-large @click="popup8 = false">확인</v-btn>
                  </template>
                </Alert>
              </v-coi>
            </v-row>
          </v-card-text>          
          
          <v-card-text>
              (제목만 있을경우 cardClass 사용X) <br>  
              (제목2줄 있을경우 cardClass="title2") <br>
              (제목있고 내용있을경우 cardClass="title-text") <br>
              (제목있고 내용2개 이상 cardClass="title-text2") <br>
              (제목없고 내용만 있을경우 cardClass="text") <br>
              (제목없고 내용2줄 있을경우 cardClass="text2")
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              <Tab class="styled_tab" grow>
                <template v-slot:v-tab>
                  <v-tab>공지사항</v-tab>
                  <v-tab>이벤트</v-tab>
                </template>
                <template v-slot:v-tab-item>
                  <v-tab-item transition="false">공지사항 내용</v-tab-item>
                  <v-tab-item transition="false">이벤트 내용</v-tab-item>
                </template>
              </Tab>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              <v-card-title>search</v-card-title>
              <v-card-text>
                <InputText
                  type="text"
                  value=""
                  placeholder="검색어를 입력하세요"
                  solo
                  class="input_search"
                />
              </v-card-text>

              <v-card-title>file upload</v-card-title>
              <v-card-text>
                <ListFileUpload>
                  <ListFileUploadDesc>
                    <span class="filename">ABCD_imagefile.PNG</span>
                    <v-btn icon class="btn_delete">
                      <v-icon></v-icon>
                    </v-btn>
                  </ListFileUploadDesc>
                </ListFileUpload>
                <FileUpload
                  label="이미지 첨부"
                  
                >
                </FileUpload>
              </v-card-text>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-title>h3 + description</v-card-title>
          <v-card-text>
            <H3> 싸이월드 아이디 찾기</H3>
            <DescDefault>싸이월드 계정을 찾을 방법을 선택해 주세요.</DescDefault>
          </v-card-text>
          <v-card-title>h4 + description</v-card-title>
          <v-card-text>
            <H4 mt="0">개인정보 유효기간 설정</H4>
            <DescDefault>
              개인정보를 파기 또는 분리 저장, 관리해야 하는 서비스
              미이용 기간을 선택해 주세요. 선택한 기간 동안 서비스
              를 이용하지 않을 경우 휴면 계정으로 전환됩니다.
            </DescDefault>
          </v-card-text>
          <v-card-title>h5 + description(small)</v-card-title>
          <v-card-text>
            <H5>휴면 계정이란?</H5>
            <DescDefault size="small">
              장기간 로그인하지 않은 회원님의 정보가 분리 보관되는
              것을 뜻합니다. 최근 1년 내 로그인 기록이 없는 계정은 휴면
              계정으로 전환됩니다.
            </DescDefault>
          </v-card-text>

          <v-card-title>h3 + img</v-card-title>
          <v-card-text>
            <H3 class="title_complete">
              <TitleSub>휴면상태 해제 완료</TitleSub>
              <TitleDesc>회원님의 계정이 깨어났습니다.</TitleDesc>
            </H3>

            <H3 class="title_channeling" :style="{ marginTop: '32px' }">
              <TitleSub>NHN한게임</TitleSub>
              <TitleDesc>
                등록된 부가서비스의
                <br />
                정보 및 상태를 관리합니다.
              </TitleDesc>
            </H3>

            <H3 class="title_open">
              <p class="txt_sm">안심하세요!</p>
              <p>
                미니홈피 공개여부를
                <br />
                선택할 수 있어요.
              </p>
            </H3>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              <v-card-title>info list</v-card-title>
              <v-card-text>
                <ListInfo>
                  <ListInfoDesc>
                    <ListInfoSubTitle>계정</ListInfoSubTitle>
                    <ListInfoSubDesc>email@cyworld.com</ListInfoSubDesc>
                  </ListInfoDesc>
                  <ListInfoDesc>
                    <ListInfoSubTitle>휴면 전환일자</ListInfoSubTitle>
                    <ListInfoSubDesc>2016년 11월 24일</ListInfoSubDesc>
                  </ListInfoDesc>
                </ListInfo>
              </v-card-text>

              <v-card-title>info list : align left</v-card-title>
              <v-card-text>
                <ListInfo class="align_left">
                  <ListInfoDesc>
                    <ListInfoSubTitle>기간</ListInfoSubTitle>
                    <ListInfoSubDesc>2021.07.01 ~ 2021.12.31</ListInfoSubDesc>
                  </ListInfoDesc>
                  <ListInfoDesc>
                    <ListInfoSubTitle>사유</ListInfoSubTitle>
                    <ListInfoSubDesc>테스트로 인한 정지</ListInfoSubDesc>
                  </ListInfoDesc>
                </ListInfo>
              </v-card-text>

              <v-card-title>info list : align left, large</v-card-title>
              <v-card-text>
                <ListInfo class="align_left title_lg">
                  <ListInfoDesc>
                    <ListInfoSubTitle>이름</ListInfoSubTitle>
                    <ListInfoSubDesc>홍길동</ListInfoSubDesc>
                  </ListInfoDesc>
                  <ListInfoDesc>
                    <ListInfoSubTitle>성별</ListInfoSubTitle>
                    <ListInfoSubDesc>남</ListInfoSubDesc>
                  </ListInfoDesc>
                  <ListInfoDesc>
                    <ListInfoSubTitle>생년월일</ListInfoSubTitle>
                    <ListInfoSubDesc>1990.08.15</ListInfoSubDesc>
                  </ListInfoDesc>
                  <ListInfoDesc>
                    <ListInfoSubTitle>휴대폰 번호</ListInfoSubTitle>
                    <ListInfoSubDesc>010-1234-5678</ListInfoSubDesc>
                  </ListInfoDesc>
                </ListInfo>
              </v-card-text>

              <v-card-title>select(radio) list</v-card-title>
              <v-card-text>
                <RadioGroup radiogroup="1">
                  <template v-slot:radios>
                    <ListSelect>
                      <ListSelectDesc>
                        <SelectPeriod>1년</SelectPeriod>
                        <Radio class="styled_radio" />
                      </ListSelectDesc>
                      <ListSelectDesc>
                        <SelectPeriod>3년</SelectPeriod>
                        <Radio class="styled_radio" />
                      </ListSelectDesc>
                      <ListSelectDesc>
                        <SelectPeriod>5년</SelectPeriod>
                        <Radio class="styled_radio" />
                      </ListSelectDesc>
                      <ListSelectDesc>
                        <SelectPeriod>탈퇴시까지</SelectPeriod>
                        <Radio class="styled_radio" />
                      </ListSelectDesc>
                    </ListSelect>
                  </template>
                </RadioGroup>
              </v-card-text>

              <v-card-title>card list</v-card-title>
              <v-card-text>
                <CardList>
                  <CardListDesc>
                    <CardListLink to="/" class="on">
                      <CardListSubTitle>기존 설정 유지</CardListSubTitle>
                      <DescDefault size="small">
                        내 미니홈피를 기존에 본인이 설정한 상태
                        <br />
                        그대로 사용 할 수 있습니다.
                      </DescDefault>
                    </CardListLink>
                  </CardListDesc>
                  <CardListDesc>
                    <CardListLink to="/">
                      <CardListSubTitle>내 미니홈피 비공개</CardListSubTitle>
                      <DescDefault size="small">
                        나를 제외한 모든 회원은 내 미니홈피를
                        <br />
                        방문하거나 콘텐츠를 볼 수 없습니다.
                      </DescDefault>
                    </CardListLink>
                  </CardListDesc>
                </CardList>
              </v-card-text>

              <v-card-title>user info list</v-card-title>
              <v-card-text>
                <ListResult>
                  <ListResultDt>
                    <ListResultDtPrimary>김사이 (010-9958-1234) 님</ListResultDtPrimary>
                    <ListResultDtSecondary>찾은 싸이월드 아이디</ListResultDtSecondary>
                  </ListResultDt>
                  <ListResultDd>
                    <ListResultItemPrimary>aberagrhrhwdwqhgrhdrt@korea.com</ListResultItemPrimary>
                    <ListResultItemSecondary>2002.06.22 가입</ListResultItemSecondary>
                  </ListResultDd>
                  <ListResultDd>
                    <ListResultItemPrimary>cadfghrtjehr@cyworld.com</ListResultItemPrimary>
                    <ListResultItemSecondary>2002.06.22 가입</ListResultItemSecondary>
                  </ListResultDd>
                  <ListResultDd>
                    <ListResultItemPrimary>moqwdsgsgeerwgwegegwg@hanmail.net</ListResultItemPrimary>
                    <ListResultItemSecondary>2002.06.22 가입</ListResultItemSecondary>
                  </ListResultDd>
                </ListResult>
              </v-card-text>

              <v-card-title>account list</v-card-title>
              <v-card-text>
                <ListBlock>
                  <ListBlockDesc>
                    <ListBlockThumb />
                    <ListBlockInfo>
                      <p class="nickname">닉네임닉네임은최대여기까지</p>
                      <p class="date">차단일 : 2021.03.03</p>
                    </ListBlockInfo>
                    <ListBlockBtn>
                      <Button value="해제" small outlined></Button>
                    </ListBlockBtn>
                  </ListBlockDesc>
                  <ListBlockDesc>
                    <ListBlockThumb />
                    <ListBlockInfo>
                      <p class="nickname">김철수</p>
                      <p class="date">차단일 : 2021.03.03</p>
                    </ListBlockInfo>
                    <ListBlockBtn>
                      <Button value="해제" small outlined></Button>
                    </ListBlockBtn>
                  </ListBlockDesc>
                </ListBlock>
              </v-card-text>

              <v-card-title>channeling list</v-card-title>
              <v-card-text>
                <ListChanneling component="nav" ariaLabel="channeling list" class="lst_channeling">
                  <template v-slot:items>
                    <ListChannelingDesc class="desc_channeling">
                      <p class="thumb thumb_nhn ir">NHN 한게임 로고 이미지</p>
                      <p class="title">NHN 한게임</p>
                    </ListChannelingDesc>
                    <ListChannelingDesc class="desc_channeling">
                      <p class="thumb thumb_nhn ir">NHN 한게임 로고 이미지</p>
                      <p class="title">NHN 한게임</p>
                    </ListChannelingDesc>
                    <ListChannelingDesc class="desc_channeling">
                      <p class="thumb thumb_nhn ir">NHN 한게임 로고 이미지</p>
                      <p class="title">NHN 한게임</p>
                    </ListChannelingDesc>
                  </template>
                </ListChanneling>
              </v-card-text>

              <v-card-title>service guide list</v-card-title>
              <v-card-text>
                <ListGuide>
                  <ListGuideDesc>서비스 안내문구 영역입니다.</ListGuideDesc>
                  <ListGuideDesc>백오피스에서 등록할 예정이며, 상황에 따라 5줄 까지 늘어날 수 있도록 고려 부탁드립니다.</ListGuideDesc>
                  <ListGuideDesc>서비스 안내문구 영역입니다. 백오피스에서 등록할 예정이며, 2줄 들어갈 때의 모습입니다. 고려 부탁드립니다.</ListGuideDesc>
                </ListGuide>
              </v-card-text>

              <v-card-title>service guide list</v-card-title>
              <v-card-text>
                <ListService component="nav" class="lst_service" aria-label="service list main info">
                  <template v-slot:items>
                    <ListServiceDesc primary="싸이월드 서비스 이용 안내" listtype="new"></ListServiceDesc>
                    <ListServiceDesc primary="싸이월드 용어집" listtype=""></ListServiceDesc>
                    <ListServiceDesc primary="도토리 충전, 선물하기" listtype=""></ListServiceDesc>
                    <ListServiceDesc primary="미니미, 미니룸 설정하기" listtype=""></ListServiceDesc>
                    <ListServiceDesc primary="랜덤 파도타기" listtype=""></ListServiceDesc>
                  </template>
                </ListService>
              </v-card-text>

              <v-card-title>service guide list (outline)</v-card-title>
              <v-card-text>
                <ListQnaType component="nav" aria-label="qna list main">
                  <template v-slot:items>
                    <ListQnaTypeDesc primary="싸이월드 서비스 이용 안내" />
                    <ListQnaTypeDesc primary="싸이월드 용어집" />
                    <ListQnaTypeDesc primary="도토리 충전, 선물하기" />
                    <ListQnaTypeDesc primary="미니미, 미니룸 설정하기" />
                    <ListQnaTypeDesc primary="랜덤 파도타기" />
                  </template>
                </ListQnaType>
              </v-card-text>

              <v-card-title>qna list</v-card-title>
              <v-card-text>
                <ListQuestion component="nav" class="lst_qna" aria-label="list question">
                  <template v-slot:items>
                    <ListQuestionDesc primary="내 사진을 일촌에게만 공개하고 싶어요" />
                    <ListQuestionDesc primary="검색에서 내 정보가 나오지 않았으면 좋겠어요" />
                    <ListQuestionDesc primary="친구에게 아이템 선물은 어떻게 하나요?" />
                    <ListQuestionDesc primary="BGM 구매는 어떻게 하나요?" />
                    <ListQuestionDesc primary="도토리 충전은 얼마까지 가능하나요?" />
                  </template>
                </ListQuestion>
              </v-card-text>

              <v-card-title>qna list top5</v-card-title>
              <v-card-text>
                <ListQuestion component="nav" class="lst_top5" aria-label="list question top5">
                  <template v-slot:items>
                    <ListQuestionDesc primary="내 사진을 일촌에게만 공개하고 싶어요" secondary="1" />
                    <ListQuestionDesc primary="검색에서 내 정보가 나오지 않았으면 좋겠어요. 차단하는 방법 알려주세요." secondary="2" />
                    <ListQuestionDesc primary="친구에게 아이템 선물은 어떻게 하나요?" secondary="3" />
                    <ListQuestionDesc primary="BGM 구매는 어떻게 하나요?" secondary="4" />
                    <ListQuestionDesc primary="도토리 충전은 얼마까지 가능하나요?" secondary="5" />
                  </template>
                </ListQuestion>
              </v-card-text>

              <v-card-title>notice list</v-card-title>
              <v-card-text>
                <ListNotice component="nav" class="list_notice" aria-label="list notice">
                  <template v-slot:items>
                    <ListNoticeDesc class="new" primary="싸이월드 미니미 선물하기 기능이 생겼어요!" secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc class="new" primary="쥬크박스 선물하기 기능이 생겼어요~ 쥬크박스 선물하기 기능이 생겼어요~" secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc class="new" primary="일촌 목록 편집이 편해졌어요." secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc primary="프로필 편집이 쉬어졌어요!" secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc primary="싸이생활이 새롭게 변했어요!" secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc class="new" primary="고객센터가 새롭게 오픈했습니다. 고객센터가 새롭게 오픈했습니다." secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc primary="이벤트가 새롭게 오픈했습니다." secondary="2021-11-30 12:30:20" />
                  </template>
                </ListNotice>
              </v-card-text>

              <v-card-title>request list</v-card-title>
              <v-card-text>
                <ListNotice component="nav" class="list_cmy" aria-label="list cmy">
                  <template v-slot:items>
                    <ListNoticeDesc primary="일촌 목록 편집은 어떻게 하나요?" secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc primary="BGM 구매 취소해주세요. 안그러면 블랙 컨슈 BGM 구매 취소해주세요. 안그러면 블랙 컨슈" secondary="2021-11-30 12:30:20" />
                    <ListNoticeDesc primary="응원은 하는데요, 클럽은 언제 만들어 줄거에요 응원은 하는데요, 클럽은 언제 만들어 줄거에요" secondary="2021-11-30 12:30:20" class="answer" />
                    <ListNoticeDesc primary="선물하기 매뉴얼은 어디서 찾아요?" secondary="2021-11-30 12:30:20" class="answer" />
                    <ListNoticeDesc primary="일촌 목록 편집은 어떻게 하나요?" secondary="2021-11-30 12:30:20" class="answer" />
                    <ListNoticeDesc primary="BGM 구매 취소해주세요. 안그러면 블랙 컨슈 BGM 구매 취소해주세요. 안그러면 블랙 컨슈" secondary="2021-11-30 12:30:20" class="answer" />
                  </template>
                </ListNotice>
              </v-card-text>

              <v-card-title>search list</v-card-title>
              <v-card-text>
                <ListQuestion component="nav" class="lst_qna_sub" aria-label="list qna sub">
                  <template v-slot:items>
                    <ListQuestionDesc primary="텍스트릴 입력해 주세요" />
                    <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
                    <ListQuestionDesc primary="일촌 공개 키워드 검색" />
                    <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
                    <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
                    <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
                    <ListQuestionDesc primary="일촌 공개 키워드 검색" />
                    <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
                    <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
                    <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
                    <ListQuestionDesc primary="일촌 공개 키워드 검색" />
                    <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
                    <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
                    <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
                    <ListQuestionDesc primary="일촌 공개 키워드 검색" />
                    <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
                    <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
                    <ListQuestionDesc primary="일촌 공개가 뭔가요?" />
                    <ListQuestionDesc primary="일촌 공개 키워드 검색" />
                    <ListQuestionDesc primary="젠데스크 키워드가 공개 되어있죠" />
                    <ListQuestionDesc primary="목록은 기본 20개만 불러오고, 스크롤시 오토로딩 제목이 두줄이 될 수도 있습니다." />
                  </template>
                </ListQuestion>
              </v-card-text>

              <v-card-title>blank list</v-card-title>
              <v-card-text>
                <ListBlank>연결된 부가서비스가 없습니다.</ListBlank>

                <ListBlank class="blank_search">
                  <p class="msg_main">연결된 부가서비스가 없습니다.</p>
                  <p class="msg_sub">
                    추가 궁금하신 사항은,
                    <br />
                    1:1 문의하기를 이용해 주세요.
                  </p>
                </ListBlank>
              </v-card-text>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs>
  </v-card>
</template>

<script>
import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';
import Switchbtn from '@/components/Switch.vue';
import Checkbox from '@/components/Checkbox.vue';
import Radio from '@/components/Radio.vue';
import Tab from '@/components/Tab.vue';
import Alert from '@/components/Alert.vue';
import TextArea from '@/components/TextArea.vue';
import Select from '../components/mobile/Select.vue';
import FileUpload from '@/components/FileUpload.vue';
import RadioGroup from '@/components/RadioGroup.vue';

import List from '@/styles/mobile/common/List';
import Title from '@/styles/mobile/common/Title';
import Description from '@/styles/mobile/common/Desc';

const {
  H3, H4, H5, TitleSub, TitleDesc,
} = Title;

const {
  DescDefault
} = Description;

const {
  ListInfo, ListInfoDesc, ListInfoSubTitle, ListInfoSubDesc, ListFileUpload, ListFileUploadDesc, ListSelect, ListSelectDesc, SelectPeriod, CardList, CardListDesc, CardListLink, CardListSubTitle, ListResult, ListResultDt, ListResultDd, ListResultItemPrimary, ListResultItemSecondary, ListResultDtPrimary, ListResultDtSecondary, ListBlock, ListBlockDesc, ListBlockThumb, ListBlockInfo, ListBlockBtn, ListChanneling, ListChannelingDesc, ListService, ListServiceDesc, ListGuide, ListGuideDesc, ListQnaType, ListQnaTypeDesc, ListQuestion, ListQuestionDesc, ListNotice, ListNoticeDesc, ListBlank
} = List;

export default {
  components: {
    InputText,
    Button,
    Switchbtn,
    Checkbox,
    Radio,
    Tab,
    Alert,
    TextArea,
    Select,
    FileUpload,
    RadioGroup,
    H3,
    H4,
    H5,
    TitleSub,
    TitleDesc,
    DescDefault,
    ListInfo, ListInfoDesc, ListInfoSubTitle, ListInfoSubDesc,
    ListSelect, ListSelectDesc, SelectPeriod,
    ListFileUpload, ListFileUploadDesc,
    CardList, CardListDesc, CardListLink, CardListSubTitle,
    ListResult, ListResultDt, ListResultDd, ListResultItemPrimary, ListResultItemSecondary, ListResultDtPrimary, ListResultDtSecondary,
    ListBlock, ListBlockDesc, ListBlockThumb, ListBlockInfo, ListBlockBtn,
    ListChanneling, ListChannelingDesc,
    ListService, ListServiceDesc,
    ListGuide, ListGuideDesc,
    ListQnaType, ListQnaTypeDesc,
    ListQuestion, ListQuestionDesc,
    ListNotice, ListNoticeDesc,
    ListBlank,
  },
  data(){
    return {
      radioGroup1: 1,
      radioGroup2: 1,
      checkedValues: true,
      popup1 : false,
      popup2 : false,
      popup3 : false,
      popup4 : false,
      popup5 : false,
      popup6 : false,
      popup7 : false,
      popup8 : false,
      webPopup1 : false,
      webPopup2 : false,
      webPopup3 : false,
      webPopup4 : false,
      webPopup5 : false,
      webPopup6 : false,
      webPopup7 : false,
      webPopup8 : false,
      ml : "10px",
      tt : "none"
    }
  },
  methods: {
    setDate1(value1) {
      this.popup1 = value1
    },
    setDate2(value2) {
      this.popup2 = value2
    },
    setDate3(value3) {
      this.popup3 = value3
    },
    setDate4(value4) {
      this.popup4 = value4
    },
    setDate5(value5) {
      this.popup5 = value5
    },
    setDate6(value6) {
      this.popup6 = value6
    },
    setDate7(value7) {
      this.popup7 = value7
    },
    setDate8(value8) {
      this.popup8 = value8
    },
    webSetDate1(webValue1) {
      this.webPopup1 = webValue1
    },
    webSetDate2(webValue2) {
      this.webPopup2 = webValue2
    },
    webSetDate3(webValue3) {
      this.webPopup3 = webValue3
    },
    webSetDate4(webValue4) {
      this.webPopup4 = webValue4
    },
    webSetDate5(webValue5) {
      this.webPopup5 = webValue5
    },
    webSetDate6(webValue6) {
      this.webPopup6 = webValue6
    },
    webSetDate7(webValue7) {
      this.webPopup7 = webValue7
    },
    webSetDate8(webValue8) {
      this.webPopup8 = webValue8
    },

    HandleClickButton1() {
      this.popup1 = true
    },
    HandleClickButton2() {
      this.popup2 = true
    },
    HandleClickButton3() {
      this.popup3 = true
    },
    HandleClickButton4() {
      this.popup4 = true
    },
    HandleClickButton5() {
      this.popup5 = true
    },
    HandleClickButton6() {
      this.popup6 = true
    },
    HandleClickButton7() {
      this.popup7 = true
    },
    HandleClickButton8() {
      this.popup8 = true
    },
    WebHandleClickButton1() {
      this.webPopup1 = true
    },
    WebHandleClickButton2() {
      this.webPopup2 = true
    },
    WebHandleClickButton3() {
      this.webPopup3 = true
    },
    WebHandleClickButton4() {
      this.webPopup4 = true
    },
    WebHandleClickButton5() {
      this.webPopup5 = true
    },
    WebHandleClickButton6() {
      this.webPopup6 = true
    },
    WebHandleClickButton7() {
      this.webPopup7 = true
    },
    WebHandleClickButton8() {
      this.webPopup8 = true
    },
  }
}
</script>

<style lang="scss">
.wrap_guide{
  padding: 0;
  .v-card__title{
    position: relative;
    font-size: 14px;
    &::before{
      content: '';
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 12px;
      background-color: #333;
    }
  }
}
</style>
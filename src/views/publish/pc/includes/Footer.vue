<template>
  <Footer>
    <Nav>
      <Inner class="inner">
        <ul>
          <li><a href="javascript:void(0);">이용약관</a></li>
          <li><a href="javascript:void(0);">개인정보처리방침</a></li>
          <li><a href="javascript:void(0);">위치기반서비스이용약관</a></li>
          <li><a href="javascript:void(0);">마케팅정보수신동의</a></li>
          <li><a href="javascript:void(0);">법정개인개인정보수집및이용</a></li>
          <li><a href="javascript:void(0);">고객센터</a></li>
          <li><a href="javascript:void(0);">공지사항</a></li>
          <li><a href="https://ecrm.cyber.go.kr/minwon/main" target="_blank">사이버 범죄 센터</a></li>
          <li><a href="https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=3082&cntntsId=824" target="_blank">지식재산권신고센터</a></li>
          <li><a href="https://www.epeople.go.kr/" target="_blank">안전거래센터</a></li>
          <li class="store">
            APP 다운로드
            <IconButton value="App Store" class="ico_apple" small color="cy_gray"></IconButton>
            <IconButton value="Android Store" class="ico_android" small color="cy_gray"></IconButton>
          </li>
        </ul>
      </Inner>
    </Nav>

    <Inner class="inner">
      <GroupInfoList>
        <dl>
          <dt>&#40;주&#41; 싸이월드제트 &#40;Cyworld Z co.&#41;</dt>
          <dd>
            <ul>
              <li><span class="gap">대표자 : 손성민, 김호광</span><span class="gap">개인정보관리책임자 : 홍길동</span></li>
              <li><span class="gap">사업자등록 번호 : <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=3138133895" target="_blank">313-81-33895</a></span><span class="gap">통신판매업신고 : 제 2021 서울강남 04925호</span></li>
              <li><span class="gap">주소 : 서울특별시 강남구 논현로 158길 29-1 &#40;신사동&#41;</span><span class="gap">E-mail : help@cyworld.com</span></li>
              <li>&copy; Cyworld Z Corp. All rights reserved.</li>
            </ul>
          </dd>
        </dl>

        <dl>
          <dt><a href="https://www.pipc.go.kr/np/default/page.do?mCode=F080010000#" target="_blank">분쟁처리안내</a></dt>
          <dd>
            <ul>
              <li><b>1670-4242</b></li>
              <li><b>E-MAIL</b>help@cyworld.com</li>
              <li><b>BREAK TIME</b>12:00 - 13:00 </li>
              <li>AM 10:00 ~ PM 18:00 &#40;주말 및 공휴일 휴무&#41;</li>
            </ul>
          </dd>
        </dl>

        <dl>
          <dt>고객센터 이용안내</dt>
          <dd>
            <ul>
              <li><b>1670-4242</b></li>
              <li><b>E-MAIL</b>help@cyworld.com</li>
              <li><b>BREAK TIME</b>12:00 - 13:00 </li>
              <li>AM 10:00 ~ PM 18:00 &#40;주말 및 공휴일 휴무&#41;</li>
            </ul>
          </dd>
        </dl>
      </GroupInfoList>
    </Inner>
  </Footer>
</template>

<script>
import Common from '@/styles/pc/common/Common';
import styled, { css } from 'vue-styled-components';
import IconButton from '@/components/IconButton.vue';

const props = [
  'p', 'pt', 'pb', 'm', 'mt', 'mb', 'size'
];

const Footer = styled('footer', props)`
  ${({ theme }) => {
    const { Space } = theme;
    return css`
      height: 219px;
      background-color: #fff;
      ${Space};
    `;
  }}
`;

const Nav = styled('nav', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      border-bottom: 1px solid #eee;
      .inner{
        height: auto;
      }
      ul{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 51px;
        li{
          margin-right: 22px;
          a{
            display: block;
            font-size: 13px;
            font-weight: 300;
            color: ${Colors.text_body};
          }
          &:nth-child(2){
            a{
              color: ${Colors.text_subtitle};
            }
          }
          &.store{
            font-size: 14px;
            font-weight: 400;
            color: ${Colors.text_subtitle};
            
          }
        }
      }
      ${Space};
    `;
  }}
`;

const GroupInfoList = styled('div', props)`
  ${({ theme }) => {
    const { Space, Colors } = theme;
    return css`
      display: flex;

      dl{
        &:nth-child(1){
          width: 740px;
        }
        &:nth-child(2){
          width: 359px;
        }
        position: relative;
        margin-top: 20px;
        padding: 10px 0 0 31px;
        &::before{
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 127px;
          background-color: #e5e5e5;
        }

        dt{
          line-height: 14px;
          font-size: 14px;
          font-weight: 400;
          color: ${Colors.text_title};
          a{
            color: ${Colors.text_title};
          }
        }
        dd{
          padding-top: 20px;
          ul{
            li{
              font-size: 13px;
              font-weight: 300;
              letter-spacing: -0.5px;
              color: ${Colors.text_body};
              .gap{
                position: relative;
                padding: 0 8px;
                &::before{
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 1px;
                  height: 8px;
                  background-color: #666;
                }
                &:first-child{
                  padding-left: 0;
                  &::before{
                    display: none;
                  }
                }
              }
              b{
                padding-right: 8px;
                font-weight: 700;
              }
              a{
                color: ${Colors.text_body};
                border-bottom: 1px solid ${Colors.text_body};
              }
            }
          }
        }
      }
      ${Space};
    `;
  }}
`;

const styledComponents = {
  Footer, Nav, GroupInfoList, 
};

export default {
  components: {
    ...Common,
    IconButton,
    ...styledComponents,
    
  }
}
</script>

<style lang="scss" scoped>

</style>
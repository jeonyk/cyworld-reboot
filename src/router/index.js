import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// eslint-disable-next-line no-unused-vars
var ua = navigator.userAgent || navigator.vendor || navigator.opera;
ua = ua.toLowerCase();
var isMobile =
  ua.indexOf("android") > -1 ||
  ua.indexOf("iphone") > -1 ||
  ua.indexOf("ipad") > -1 ||
  ua.indexOf("ipod") > -1;
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/navigation",
    name: "Navi",
    component: () => import("@/views/Navigation"),
  },
  {
    path: "/",
    name: "/pc/AL-login",
    component: () =>
      import("@/views/" + (isMobile ? "mobile" : "pc") + "/AL/AL-login"),
  },
  {
    path: "/devNavigation",
    name: "devNavigation",
    component: () => import("@/views/devNavigation"),
  },
  {
    path: "/pbNavigation",
    name: "pbNavigation",
    component: () => import("@/views/pbNavigation"),
  },
  {
    path: "/guide",
    name: "Guide",
    component: () => import("@/views/Guide"),
  },
  {
    path: "/AL-login",
    name: "AL-login",
    component: () =>
      import("@/views/" + (isMobile ? "mobile" : "pc") + "/AL/AL-login"),
  },
  {
    path: "/AL-login-success",
    name: "AL-login-success",
    component: () => import("@/views/mobile/AL/AL-login-success"),
  },
  {
    path: "/AL-login-error",
    name: "AL-login-error",
    component: () => import("@/views/mobile/AL/AL-login-error"),
  },
  {
    path: "/ES-subaccount",
    name: "ES-subaccount",
    component: () => import("@/views/mobile/ES/ES-subaccount"),
  },
  {
    path: "/ES-subaccount-01",
    name: "ES-subaccount-01",
    component: () => import("@/views/mobile/ES/ES-subaccount-01"),
  },
  {
    path: "/ES-subaccount-01-before",
    name: "ES-subaccount-01-before",
    component: () => import("@/views/mobile/ES/ES-subaccount-01-before"),
  },
  {
    path: "/ES-subaccount-01-success",
    name: "ES-subaccount-01-success",
    component: () => import("@/views/mobile/ES/ES-subaccount-01-success"),
  },
  {
    path: "/ES-currentpassword",
    name: "ES-currentpassword",
    component: () => import("@/views/mobile/ES/ES-currentpassword"),
  },
  {
    path: "/ES-currentpassword-success",
    name: "ES-currentpassword-success",
    component: () => import("@/views/mobile/ES/ES-currentpassword-success"),
  },
  {
    path: "/ES-currentpassword-error",
    name: "ES-currentpassword-error",
    component: () => import("@/views/mobile/ES/ES-currentpassword-error"),
  },
  {
    path: "/AP-findpw-01",
    name: "AP-findpw-01",
    component: () => import("@/views/mobile/AP/AP-findpw-01"),
  },
  {
    path: "/AP-findpw-login",
    name: "AP-findpw-login",
    component: () => import("@/views/mobile/AP/AP-findpw-login"),
  },
  {
    path: "/AP-findpw-01-success",
    name: "AP-findpw-01-success",
    component: () => import("@/views/mobile/AP/AP-findpw-01-success"),
  },
  {
    path: "/AP-findpw-01-error",
    name: "AP-findpw-01-error",
    component: () => import("@/views/mobile/AP/AP-findpw-01-error"),
  },
  {
    path: "/AP-findpw-02",
    name: "AP-findpw-02",
    component: () => import("@/views/mobile/AP/AP-findpw-02"),
  },
  {
    path: "/ES-privacy",
    name: "ES-privacy",
    component: () => import("@/views/mobile/ES/ES-privacy"),
  },
  {
    path: "/ES-privacyperiod",
    name: "ES-privacyperiod",
    component: () => import("@/views/mobile/ES/ES-privacyperiod"),
  },
  {
    path: "/ES-blockaccount",
    name: "ES-blockaccount",
    component: () => import("@/views/mobile/ES/ES-blockaccount"),
  },
  {
    path: "/ES-agreement",
    name: "ES-agreement",
    component: () => import("@/views/mobile/ES/ES-agreement"),
  },
  {
    path: "/ES-channeling",
    name: "ES-channeling",
    component: () => import("@/views/mobile/ES/ES-channeling"),
  },
  {
    path: "/ES-channeling-blank",
    name: "ES-channeling-blank",
    component: () => import("@/views/mobile/ES/ES-channeling-blank"),
  },
  {
    path: "/ES-channelingdetail",
    name: "ES-channelingdetail",
    component: () => import("@/views/mobile/ES/ES-channelingdetail"),
  },
  {
    path: "/ES-leavecyworld01",
    name: "ES-leavecyworld01",
    component: () => import("@/views/mobile/ES/ES-leavecyworld01"),
  },
  {
    path: "/ES-leavecyworld02",
    name: "ES-leavecyworld02",
    component: () => import("@/views/mobile/ES/ES-leavecyworld02"),
  },
  {
    path: "/ES-leavecyworld03",
    name: "ES-leavecyworld03",
    component: () => import("@/views/mobile/ES/ES-leavecyworld03"),
  },
  {
    // test page
    path: "/temp",
    name: "Temp",
    component: () => import("@/views/mobile/AL/Temp"),
  },
  {
    path: "/AJ-agree",
    name: "AJ-agree",
    component: () => import("@/views/mobile/AJ/AJ-agree"),
  },
  {
    path: "/AJ-agreechild",
    name: "AJ-agreechild",
    component: () => import("@/views/mobile/AJ/AJ-agreechild"),
    props: true,
  },
  {
    path: "/AJ-profile-01",
    name: "AJ-profile-01",
    component: () => import("@/views/mobile/AJ/AJ-profile-01"),
  },
  {
    path: "/AJ-profile-01-success",
    name: "AJ-profile-01-success",
    component: () => import("@/views/mobile/AJ/AJ-profile-01-success"),
  },
  {
    path: "/AJ-profile-01-error",
    name: "AJ-profile-01-error",
    component: () => import("@/views/mobile/AJ/AJ-profile-01-error"),
  },
  {
    path: "/AJ-profile-02",
    name: "AJ-profile-02",
    component: () => import("@/views/mobile/AJ/AJ-profile-02"),
  },
  {
    path: "/AJ-profile-02-success",
    name: "AJ-profile-02-success",
    component: () => import("@/views/mobile/AJ/AJ-profile-02-success"),
  },
  {
    path: "/AJ-profile-02-error",
    name: "AJ-profile-02-error",
    component: () => import("@/views/mobile/AJ/AJ-profile-02-error"),
  },
  {
    path: "/AJ-profile-03",
    name: "AJ-profile-03",
    component: () => import("@/views/mobile/AJ/AJ-profile-03"),
  },
  {
    path: "/AJ-profile-03-success",
    name: "AJ-profile-03-success",
    component: () => import("@/views/mobile/AJ/AJ-profile-03-success"),
  },
  {
    path: "/AJ-profile-03-error",
    name: "AJ-profile-03-error",
    component: () => import("@/views/mobile/AJ/AJ-profile-03-error"),
  },
  {
    path: "/AJ-profile-04",
    name: "AJ-profile-04",
    component: () => import("@/views/mobile/AJ/AJ-profile-04"),
  },
  {
    path: "/AL-S1-01",
    name: "AL-S1-01",
    component: () => import("@/views/mobile/AL/AL-S1-01"),
  },
  {
    path: "/AL-S1-02",
    name: "AL-S1-02",
    component: () => import("@/views/mobile/AL/AL-S1-02"),
  },
  {
    path: "/AI-findid",
    name: "AI-findid",
    component: () => import("@/views/mobile/AI/AI-findid"),
  },
  {
    path: "/AI-findid1-01",
    name: "AI-findid1-01",
    component: () => import("@/views/mobile/AI/AI-findid1-01"),
    props: true,
  },
  {
    path: "/AI-findid2-01",
    name: "AI-findid2-01",
    component: () => import("@/views/mobile/AI/AI-findid2-01"),
  },
  {
    path: "/AI-findid2-01-success",
    name: "AI-findid2-01-success",
    component: () => import("@/views/mobile/AI/AI-findid2-01-success"),
  },
  {
    path: "/AI-findid2-02",
    name: "AI-findid2-02",
    component: () => import("@/views/mobile/AI/AI-findid2-02"),
  },
  {
    path: "/AI-findid2-03",
    name: "AI-findid2-03",
    component: () => import("@/views/mobile/AI/AI-findid2-03"),
  },
  {
    path: "/AP-findpw",
    name: "AP-findpw",
    component: () => import("@/views/mobile/AP/AP-findpw"),
  },
  {
    path: "/AP-findpw-success",
    name: "AP-findpw-success",
    component: () => import("@/views/mobile/AP/AP-findpw-success"),
  },
  {
    path: "/AP-findpw-error",
    name: "AP-findpw-error",
    component: () => import("@/views/mobile/AP/AP-findpw-error"),
  },
  {
    path: "/AL-BX",
    name: "AL-BX",
    component: () => import("@/views/mobile/AL/AL-BX"),
  },
  {
    path: "/AL-BL",
    name: "AL-BL",
    component: () => import("@/views/mobile/AL/AL-BL"),
  },
  {
    path: "/AL-B4",
    name: "AL-B4",
    component: () => import("@/views/mobile/AL/AL-B4"),
  },
  {
    path: "/AL-B5",
    name: "AL-B5",
    component: () => import("@/views/mobile/AL/AL-B5"),
  },
  {
    path: "/AL-C1",
    name: "AL-C1",
    component: () => import("@/views/mobile/AL/AL-C1"),
  },
  {
    path: "/CM-main",
    name: "CM-main",
    component: () => import("@/views/mobile/CM/CM-main"),
  },
  {
    path: "/CMy-List",
    name: "CMy-List",
    component: () => import("@/views/mobile/CM/CMy-List"),
  },
  {
    path: "/CMy-Detail",
    name: "CMy-Detail",
    component: () => import("@/views/mobile/CM/CMy-Detail"),
  },
  {
    path: "/CF-FaqMain",
    name: "CF-FaqMain",
    component: () => import("@/views/mobile/CM/CF-FaqMain"),
  },
  {
    path: "/CF-SubList",
    name: "CF-SubList",
    component: () => import("@/views/mobile/CM/CF-SubList"),
  },
  {
    path: "/CF-Search",
    name: "CF-Search",
    component: () => import("@/views/mobile/CM/CF-Search"),
  },
  {
    path: "/CF-Search-Blank",
    name: "CF-Search-Blank",
    component: () => import("@/views/mobile/CM/CF-Search-Blank"),
  },
  {
    path: "/CF-FaqDetail1",
    name: "CF-FaqDetail1",
    component: () => import("@/views/mobile/CM/CF-FaqDetail1"),
  },
  {
    path: "/CF-FaqDetail2",
    name: "CF-FaqDetail2",
    component: () => import("@/views/mobile/CM/CF-FaqDetail2"),
  },
  {
    path: "/CF-FaqDetail3",
    name: "CF-FaqDetail3",
    component: () => import("@/views/mobile/CM/CF-FaqDetail3"),
  },
  {
    path: "/CF-FaqDetail4",
    name: "CF-FaqDetail4",
    component: () => import("@/views/mobile/CM/CF-FaqDetail4"),
  },
  {
    path: "/CF-FaqDetail5",
    name: "CF-FaqDetail5",
    component: () => import("@/views/mobile/CM/CF-FaqDetail5"),
  },
  {
    path: "/CF-FaqDetail6",
    name: "CF-FaqDetail6",
    component: () => import("@/views/mobile/CM/CF-FaqDetail6"),
  },
  {
    path: "/TP-policy",
    name: "TP-policy",
    component: () => import("@/views/mobile/TP/TP-policy"),
  },
  {
    path: "/TP-private",
    name: "TP-private",
    component: () => import("@/views/mobile/TP/TP-private"),
  },
  {
    path: "/TP-policy-join",
    name: "TP-policy-join",
    component: () => import("@/views/mobile/TP/TP-policy-join"),
  },
  {
    path: "/TP-private-join",
    name: "TP-private-join",
    component: () => import("@/views/mobile/TP/TP-private-join"),
  },
  {
    path: "/TP-location",
    name: "TP-location",
    component: () => import("@/views/mobile/TP/TP-location"),
  },
  {
    path: "/TP-marketing",
    name: "TP-marketing",
    component: () => import("@/views/mobile/TP/TP-marketing"),
  },
  // {
  //   path: '/CB-Event',
  //   name: 'CB-Event',
  //   component: () => import('@/views/mobile/CB/CB-Event'),
  // },
  {
    path: "/CB-Notice",
    name: "CB-Notice",
    component: () => import("@/views/mobile/CB/CB-NotiEvent"),
    props: { selectedIndex: 0 },
  },
  {
    path: "/CB-Event",
    name: "CB-Event",
    component: () => import("@/views/mobile/CB/CB-NotiEvent"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/CB-NoticeDetail",
    name: "CB-NoticeDetail",
    component: () => import("@/views/mobile/CB/CB-NoticeDetail"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/CQ11-Login",
    name: "CQ11-Login",
    component: () => import("@/views/mobile/CM/CQ11-Login"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/CQ11-Login-fileupload",
    name: "CQ11-Login-fileupload",
    component: () => import("@/views/mobile/CM/CQ11-Login-fileupload"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/CQ11-NotLogin",
    name: "CQ11-NotLogin",
    component: () => import("@/views/mobile/CM/CQ11-NotLogin"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/CQ11-NotLogin-before",
    name: "CQ11-NotLogin-before",
    component: () => import("@/views/mobile/CM/CQ11-NotLogin-before"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/CQ11-NotLogin-fileupload",
    name: "CQ11-NotLogin-fileupload",
    component: () => import("@/views/mobile/CM/CQ11-NotLogin-fileupload"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/TP-PolicyService",
    name: "TP-PolicyService",
    component: () => import("@/views/mobile/TP/TP-PolicyService"),
  },
  {
    path: "/TP-PolicyPrivacy",
    name: "TP-PolicyPrivacy",
    component: () => import("@/views/mobile/TP/TP-PolicyPrivacy"),
  },
  {
    path: "/TP-PolicyParent",
    name: "TP-PolicyParent",
    component: () => import("@/views/mobile/TP/TP-PolicyParent"),
  },
  {
    path: "/TP-PolicyLocation",
    name: "TP-PolicyLocation",
    component: () => import("@/views/mobile/TP/TP-PolicyLocation"),
  },
  {
    path: "/COM-veriinfo",
    name: "COM-veriinfo",
    component: () => import("@/views/mobile/com/COM-veriinfo"),
    props: true,
  },
  {
    path: "/COM-veriinfo-success",
    name: "COM-veriinfo-success",
    component: () => import("@/views/mobile/com/COM-veriinfo-success"),
  },
  {
    path: "/COM-verisuccess1",
    name: "COM-verisuccess1",
    component: () => import("@/views/mobile/com/COM-verisuccess1"),
    props: true,
  },
  {
    path: "/COM-verisuccess2",
    name: "COM-verisuccess2",
    component: () => import("@/views/mobile/com/COM-verisuccess2"),
    props: true,
  },
  {
    path: "/COM-veriexist",
    name: "COM-veriexist",
    component: () => import("@/views/mobile/com/COM-veriexist"),
  },
  {
    path: "/COM-veriproceeding",
    name: "COM-veriproceeding",
    component: () => import("@/views/mobile/com/COM-veriproceeding"),
    props: true,
  },
  {
    path: "/COM-veripolicy",
    name: "COM-veripolicy",
    component: () => import("@/views/mobile/com/COM-veripolicy"),
  },
  {
    // PC Layout Test page
    path: "/Layout",
    name: "Layout",
    component: () => import("@/views/pc/includes/Layout"),
  },
  {
    path: "/pc/AL-login",
    name: "/pc/AL-login",
    component: () => import("@/views/pc/AL/AL-login"),
  },
  {
    path: "/pc/AL-S1-01",
    name: "/pc/AL-S1-01",
    component: () => import("@/views/pc/AL/AL-S1-01"),
  },
  {
    // COM
    path: "/pc/GNB",
    name: "/pc/GNB",
    component: () => import("@/views/pc/COM/GNB"),
  },
  {
    path: "/pc/LS-search",
    name: "/pc/LS-search",
    component: () => import("@/views/pc/COM/LS-search"),
  },
  {
    path: "/pc/LS-null",
    name: "/pc/LS-null",
    component: () => import("@/views/pc/COM/LS-null"),
  },
  {
    path: "/pc/COM-ProfileCard",
    name: "/pc/COM-ProfileCard",
    component: () => import("@/views/pc/COM/COM-ProfileCard"),
  },
  {
    path: "/pc/COM-ProfileCard_other",
    name: "/pc/COM-ProfileCard_other",
    component: () => import("@/views/pc/COM/COM-ProfileCard_other"),
  },
  {
    path: "/pc/COM-LR-request",
    name: "/pc/COM-LR-request",
    component: () => import("@/views/pc/COM/COM-LR-request"),
  },
  {
    path: "/pc/COM-LR-request_success",
    name: "/pc/COM-LR-request_success",
    component: () => import("@/views/pc/COM/COM-LR-request_success"),
  },
  {
    path: "/pc/COM-LR-request_error",
    name: "/pc/COM-LR-request_error",
    component: () => import("@/views/pc/COM/COM-LR-request_error"),
  },
  {
    path: "/pc/COM-LR-change",
    name: "/pc/COM-LR-change",
    component: () => import("@/views/pc/COM/COM-LR-change"),
  },
  {
    path: "/pc/COM-LR-change_success",
    name: "/pc/COM-LR-change_success",
    component: () => import("@/views/pc/COM/COM-LR-change_success"),
  },
  {
    path: "/pc/COM-LR-change_error",
    name: "/pc/COM-LR-change_error",
    component: () => import("@/views/pc/COM/COM-LR-change_error"),
  },
  {
    path: "/pc/COM-Report",
    name: "/pc/COM-Report",
    component: () => import("@/views/pc/COM/COM-Report"),
  },
  {
    path: "/pc/COM-Reportdone",
    name: "/pc/COM-Reportdone",
    component: () => import("@/views/pc/COM/COM-Reportdone"),
  },
  {
    path: "/pc/COM-Popup",
    name: "/pc/COM-Popup",
    component: () => import("@/views/pc/COM/COM-Popup"),
  },

  {
    // cylife
    path: "/pc/LM-main",
    name: "/pc/LM-main",
    component: () => import("@/views/pc/LM/LM-main"),
    props: { selectedIndex: 0 },
  },
  {
    path: "/pc/LT-stats",
    name: "/pc/LT-stats",
    component: () => import("@/views/pc/LT/LT-stats"),
  },
  {
    path: "/pc/LT-stats-popup",
    name: "/pc/LT-stats-popup",
    component: () => import("@/views/pc/LT/LT-stats-popup"),
  },
  {
    path: "/pc/LR-receive",
    name: "/pc/LR-receive",
    component: () => import("@/views/pc/LR/LR-receive"),
  },
  {
    path: "/pc/LR-receive-blank",
    name: "/pc/LR-receive-blank",
    component: () => import("@/views/pc/LR/LR-receive-blank"),
  },
  {
    path: "/pc/MF-friend",
    name: "/pc/MF-friend",
    component: () => import("@/views/pc/MF/MF-friend"),
  },
  {
    path: "/pc/MF-friend-blank",
    name: "/pc/MF-friend-blank",
    component: () => import("@/views/pc/MF/MF-friend-blank"),
  },
  {
    path: "/pc/ED-giftqty",
    name: "/pc/ED-giftqty",
    component: () => import("@/views/pc/ED/ED-giftqty"),
  },
  {
    path: "/pc/ED-giftqty-error",
    name: "/pc/ED-giftqty-error",
    component: () => import("@/views/pc/ED/ED-giftqty-error"),
  },
  {
    path: "/pc/LA-list",
    name: "/pc/LA-list",
    component: () => import("@/views/pc/LA/LA-list"),
  },
  {
    // minihompy
    path: "/pc/MH-Main",
    name: "/pc/MH-Main",
    component: () => import("@/views/pc/MH/MH-Main"),
    props: true,
  },
  {
    // minihompy
    path: "/pc/MH-Main/:userId",
    name: "/pc/MH-Main",
    component: () => import("@/views/pc/MH/MH-Main"),
    props: true,
  },
  {
    path: "/pc/MH-Main-friend",
    name: "/pc/MH-Main-friend",
    component: () => import("@/views/pc/MH/MH-Main-friend"),
  },
  {
    path: "/pc/MH-Main-other",
    name: "/pc/MH-Main-other",
    component: () => import("@/views/pc/MH/MH-Main-other"),
  },
  {
    path: "/pc/MH-ProfileChange",
    name: "/pc/MH-ProfileChange",
    component: () => import("@/views/pc/MH/MH-ProfileChange"),
  },
  {
    path: "/pc/MH-ProfileChange-already",
    name: "/pc/MH-ProfileChange-already",
    component: () => import("@/views/pc/MH/MH-ProfileChange-already"),
  },
  {
    path: "/pc/MH-PhotoModify",
    name: "/pc/MH-PhotoModify",
    component: () => import("@/views/pc/MH/MH-PhotoModify"),
  },
  {
    path: "/pc/MH-ProfileDetail",
    name: "/pc/MH-ProfileDetail",
    component: () => import("@/views/pc/MH/MH-ProfileDetail"),
  },
  {
    path: "/pc/MH-ProfileDetail-more",
    name: "/pc/MH-ProfileDetail-more",
    component: () => import("@/views/pc/MH/MH-ProfileDetail-more"),
  },
  {
    path: "/pc/MR-list",
    name: "/pc/MR-list",
    component: () => import("@/views/pc/MR/MR-list"),
  },
  {
    path: "/pc/MC-Detail",
    name: "/pc/MC-Detail",
    component: () => import("@/views/pc/MC/MC-Detail"),
  },
  {
    path: "/pc/MC-Detail-my",
    name: "/pc/MC-Detail-my",
    component: () => import("@/views/pc/MC/MC-Detail-my"),
  },
  {
    path: "/pc/MJ-jukebox",
    name: "/pc/MJ-jukebox",
    component: () => import("@/views/pc/MJ/MJ-jukebox"),
  },
  {
    path: "/pc/MJ-jukebox-other",
    name: "/pc/MJ-jukebox-other",
    component: () => import("@/views/pc/MJ/MJ-jukebox-other"),
  },
  {
    path: "/pc/MJ-jukebox-blank",
    name: "/pc/MJ-jukebox-blank",
    component: () => import("@/views/pc/MJ/MJ-jukebox-blank"),
  },
  {
    path: "/pc/MB-AlbumDetail",
    name: "/pc/MB-AlbumDetail",
    component: () => import("@/views/pc/MB/MB-AlbumDetail"),
  },
  {
    path: "/pc/MD-My",
    name: "/pc/MD-My",
    component: () => import("@/views/pc/MD/MD-My"),
  },
  {
    path: "/pc/MD-My-other",
    name: "/pc/MD-My-other",
    component: () => import("@/views/pc/MD/MD-My-other"),
  },
  {
    path: "/pc/MD-My-emoticon",
    name: "/pc/MD-My-emoticon",
    component: () => import("@/views/pc/MD/MD-My-emoticon"),
  },
  {
    path: "/pc/MD-My-null",
    name: "/pc/MD-My-null",
    component: () => import("@/views/pc/MD/MD-My-null"),
  },
  {
    path: "/pc/MD-Share",
    name: "/pc/MD-Share",
    component: () => import("@/views/pc/MD/MD-Share"),
  },
  {
    path: "/pc/MD-Share-list",
    name: "/pc/MD-Share-list",
    component: () => import("@/views/pc/MD/MD-Share-list"),
  },
  {
    path: "/pc/MD-Share-list-member",
    name: "/pc/MD-Share-list-member",
    component: () => import("@/views/pc/MD/MD-Share-list-member"),
  },
  {
    path: "/pc/MD-Share-list-search",
    name: "/pc/MD-Share-list-search",
    component: () => import("@/views/pc/MD/MD-Share-list-search"),
  },
  {
    path: "/pc/MD-Share-list-search-null",
    name: "/pc/MD-Share-list-search-null",
    component: () => import("@/views/pc/MD/MD-Share-list-search-null"),
  },
  {
    path: "/pc/MD-Folder",
    name: "/pc/MD-Folder",
    component: () => import("@/views/pc/MD/MD-Folder"),
  },
  {
    path: "/pc/MD-Write",
    name: "/pc/MD-Write",
    component: () => import("@/views/pc/MD/MD-Write"),
  },
  {
    path: "/pc/MD-Detail",
    name: "/pc/MD-Detail",
    component: () => import("@/views/pc/MD/MD-Detail"),
  },
  {
    path: "/pc/MD-Detail-other",
    name: "/pc/MD-Detail-other",
    component: () => import("@/views/pc/MD/MD-Detail-other"),
  },
  {
    path: "/pc/MD-Detail-share",
    name: "/pc/MD-Detail-share",
    component: () => import("@/views/pc/MD/MD-Detail-share"),
  },
  {
    path: "/pc/MD-Detail-reply",
    name: "/pc/MD-Detail-reply",
    component: () => import("@/views/pc/MD/MD-Detail-reply"),
  },
  {
    path: "/pc/MD-Detail-mention",
    name: "/pc/MD-Detail-mention",
    component: () => import("@/views/pc/MD/MD-Detail-mention"),
  },
  // MG-list
  {
    path: "/pc/MG-list",
    name: "/pc/MG-list",
    component: () => import("@/views/pc/MG/MG-list"),
  },
  {
    path: "/pc/MG-list-my",
    name: "/pc/MG-list-my",
    component: () => import("@/views/pc/MG/MG-list-my"),
  },
  {
    path: "/pc/MG-list-blank",
    name: "/pc/MG-list-blank",
    component: () => import("@/views/pc/MG/MG-list-blank"),
  },
  {
    path: "/pc/MG-Reply",
    name: "/pc/MG-Reply",
    component: () => import("@/views/pc/MG/MG-Reply"),
  },
  {
    path: "/pc/MG-Reply-my",
    name: "/pc/MG-Reply-my",
    component: () => import("@/views/pc/MG/MG-Reply-my"),
  },
  {
    path: "/pc/MG-Reply-blank",
    name: "/pc/MG-Reply-blank",
    component: () => import("@/views/pc/MG/MG-Reply-blank"),
  },
  {
    path: "/pc/MG-Reply-mention",
    name: "/pc/MG-Reply-mention",
    component: () => import("@/views/pc/MG/MG-Reply-mention"),
  },
  {
    path: "/pc/MG-Reply-mention2",
    name: "/pc/MG-Reply-mention2",
    component: () => import("@/views/pc/MG/MG-Reply-mention2"),
  },
  {
    path: "/pc/MA-List",
    name: "/pc/MA-List",
    component: () => import("@/views/pc/MA/MA-List"),
  },
  {
    path: "/pc/MA-Detail",
    name: "/pc/MA-Detail",
    component: () => import("@/views/pc/MA/MA-Detail"),
  },
  {
    path: "/pc/MA-Detail-share",
    name: "/pc/MA-Detail-share",
    component: () => import("@/views/pc/MA/MA-Detail-share"),
  },
  {
    path: "/pc/MA-Detail-special",
    name: "/pc/MA-Detail-special",
    component: () => import("@/views/pc/MA/MA-Detail-special"),
  },
  {
    path: "/pc/MA-Detail-video",
    name: "/pc/MA-Detail-video",
    component: () => import("@/views/pc/MA/MA-Detail-video"),
  },
  {
    path: "/pc/MA-Detail-video-playhover",
    name: "/pc/MA-Detail-video-playhover",
    component: () => import("@/views/pc/MA/MA-Detail-video-playhover"),
  },
  {
    path: "/pc/MA-Reply",
    name: "/pc/MA-Reply",
    component: () => import("@/views/pc/MA/MA-Reply"),
  },
  {
    path: "/pc/MA-Reply-blank",
    name: "/pc/MA-Reply-blank",
    component: () => import("@/views/pc/MA/MA-Reply-blank"),
  },
  {
    path: "/pc/MA-Reply-mention",
    name: "/pc/MA-Reply-mention",
    component: () => import("@/views/pc/MA/MA-Reply-mention"),
  },
  {
    path: "/pc/MA-Reply-mention2",
    name: "/pc/MA-Reply-mention2",
    component: () => import("@/views/pc/MA/MA-Reply-mention2"),
  },
  {
    path: "/pc/MA-Folderselect",
    name: "/pc/MA-Folderselect",
    component: () => import("@/views/pc/MA/MA-Folderselect"),
  },
  {
    path: "/pc/MA-Folderselect-first",
    name: "/pc/MA-Folderselect-first",
    component: () => import("@/views/pc/MA/MA-Folderselect-first"),
  },
  {
    path: "/pc/MA-Detailsympathy",
    name: "/pc/MA-Detailsympathy",
    component: () => import("@/views/pc/MA/MA-Detailsympathy"),
  },
  {
    path: "/pc/MA-List-grid5",
    name: "/pc/MA-List-grid5",
    component: () => import("@/views/pc/MA/MA-List-grid5"),
  },
  {
    path: "/pc/MA-List-grid5-1",
    name: "/pc/MA-List-grid5-1",
    component: () => import("@/views/pc/MA/MA-List-grid5-1"),
  },
  {
    path: "/pc/MA-List-default",
    name: "/pc/MA-List-default",
    component: () => import("@/views/pc/MA/MA-List-default"),
  },
  {
    path: "/pc/MS-Setting",
    name: "/pc/MS-Setting",
    component: () => import("@/views/pc/MS/MS-Setting"),
  },
  {
    path: "/pc/WH-home",
    name: "/pc/WH-home",
    component: () => import("@/views/pc/WH/WH-home"),
    props: { selectedIndex: 2 },
  },
  {
    path: "/pc/WH-praise",
    name: "/pc/WH-praise",
    component: () => import("@/views/pc/WH/WH-praise"),
  },
  {
    path: "/pc/WH-praise-fame",
    name: "/pc/WH-praise-fame",
    component: () => import("@/views/pc/WH/WH-praise-fame"),
    props: { selectedIndex: 2 },
  },
  {
    path: "/pc/WH-praise-hero",
    name: "/pc/WH-praise-hero",
    component: () => import("@/views/pc/WH/WH-praise-hero"),
    props: { selectedIndex: 2 },
  },
  {
    path: "/pc/WH-herostory",
    name: "/pc/WH-herostory",
    component: () => import("@/views/pc/WH/WH-herostory"),
  },
  {
    path: "/pc/WH-herostory2",
    name: "/pc/WH-herostory2",
    component: () => import("@/views/pc/WH/WH-herostory2"),
  },
  {
    path: "/pc/WH-herostory3",
    name: "/pc/WH-herostory3",
    component: () => import("@/views/pc/WH/WH-herostory3"),
  },
  {
    path: "/pc/WH-gift",
    name: "/pc/WH-gift",
    component: () => import("@/views/pc/WH/WH-gift"),
  },
  {
    path: "/pc/WH-gift-error",
    name: "/pc/WH-gift-error",
    component: () => import("@/views/pc/WH/WH-gift-error"),
  },

  /**********************************************/
  //퍼블 URL별도분리
  /**********************************************/

  {
    path: "/publish/AL-login",
    name: "/publish/AL-login",
    component: () => import("@/views/publish/mobile/AL/AL-login"),
    // name: '/publish/AL-login',
    // component: () => import('@/views/publish/mobile/AL/AL-login'),
  },

  {
    path: "/publish/AL-login-success",
    name: "/publish/AL-login-success",
    component: () => import("@/views/publish/mobile/AL/AL-login-success"),
  },
  {
    path: "/publish/AL-login-error",
    name: "/publish/AL-login-error",
    component: () => import("@/views/publish/mobile/AL/AL-login-error"),
  },
  {
    path: "/publish/ES-subaccount",
    name: "/publish/ES-subaccount",
    component: () => import("@/views/publish/mobile/ES/ES-subaccount"),
  },
  {
    path: "/publish/ES-subaccount-01",
    name: "/publish/ES-subaccount-01",
    component: () => import("@/views/publish/mobile/ES/ES-subaccount-01"),
  },
  {
    path: "/publish/ES-subaccount-01-before",
    name: "/publish/ES-subaccount-01-before",
    component: () =>
      import("@/views/publish/mobile/ES/ES-subaccount-01-before"),
  },
  {
    path: "/publish/ES-subaccount-01-success",
    name: "/publish/ES-subaccount-01-success",
    component: () =>
      import("@/views/publish/mobile/ES/ES-subaccount-01-success"),
  },
  {
    path: "/publish/ES-currentpassword",
    name: "/publish/ES-currentpassword",
    component: () => import("@/views/publish/mobile/ES/ES-currentpassword"),
  },
  {
    path: "/publish/ES-currentpassword-success",
    name: "/publish/ES-currentpassword-success",
    component: () =>
      import("@/views/publish/mobile/ES/ES-currentpassword-success"),
  },
  {
    path: "/publish/ES-currentpassword-error",
    name: "/publish/ES-currentpassword-error",
    component: () =>
      import("@/views/publish/mobile/ES/ES-currentpassword-error"),
  },
  {
    path: "/publish/AP-findpw-01",
    name: "/publish/AP-findpw-01",
    component: () => import("@/views/publish/mobile/AP/AP-findpw-01"),
  },
  {
    path: "/publish/AP-findpw-login",
    name: "/publish/AP-findpw-login",
    component: () => import("@/views/publish/mobile/AP/AP-findpw-login"),
  },
  {
    path: "/publish/AP-findpw-01-success",
    name: "AP-findpw-01-success",
    component: () => import("@/views/publish/mobile/AP/AP-findpw-01-success"),
  },
  {
    path: "/publish/AP-findpw-01-error",
    name: "/publish/AP-findpw-01-error",
    component: () => import("@/views/publish/mobile/AP/AP-findpw-01-error"),
  },
  {
    path: "/publish/AP-findpw-02",
    name: "/publish/AP-findpw-02",
    component: () => import("@/views/publish/mobile/AP/AP-findpw-02"),
  },
  {
    path: "/publish/ES-privacy",
    name: "/publish/ES-privacy",
    component: () => import("@/views/publish/mobile/ES/ES-privacy"),
  },
  {
    path: "/publish/ES-privacyperiod",
    name: "/publish/ES-privacyperiod",
    component: () => import("@/views/publish/mobile/ES/ES-privacyperiod"),
  },
  {
    path: "/publish/ES-blockaccount",
    name: "/publish/ES-blockaccount",
    component: () => import("@/views/publish/mobile/ES/ES-blockaccount"),
  },
  {
    path: "/publish/ES-agreement",
    name: "/publish/ES-agreement",
    component: () => import("@/views/publish/mobile/ES/ES-agreement"),
  },
  {
    path: "/publish/ES-channeling",
    name: "/publish/ES-channeling",
    component: () => import("@/views/publish/mobile/ES/ES-channeling"),
  },
  {
    path: "/publish/ES-channeling-blank",
    name: "/publish/ES-channeling-blank",
    component: () => import("@/views/publish/mobile/ES/ES-channeling-blank"),
  },
  {
    path: "/publish/ES-channelingdetail",
    name: "/publish/ES-channelingdetail",
    component: () => import("@/views/publish/mobile/ES/ES-channelingdetail"),
  },
  {
    path: "/publish/ES-leavecyworld01",
    name: "/publish/ES-leavecyworld01",
    component: () => import("@/views/publish/mobile/ES/ES-leavecyworld01"),
  },
  {
    path: "/publish/ES-leavecyworld02",
    name: "/publish/ES-leavecyworld02",
    component: () => import("@/views/publish/mobile/ES/ES-leavecyworld02"),
  },
  {
    path: "/publish/ES-leavecyworld03",
    name: "/publish/ES-leavecyworld03",
    component: () => import("@/views/publish/mobile/ES/ES-leavecyworld03"),
  },
  {
    // test page
    path: "/publish/temp",
    name: "/publish/Temp",
    component: () => import("@/views/publish/mobile/AL/Temp"),
  },
  {
    path: "/publish/AJ-agree",
    name: "/publish/AJ-agree",
    component: () => import("@/views/publish/mobile/AJ/AJ-agree"),
  },
  {
    path: "/publish/AJ-agreechild",
    name: "/publish/AJ-agreechild",
    component: () => import("@/views/publish/mobile/AJ/AJ-agreechild"),
    props: true,
  },
  {
    path: "/publish/AJ-profile-01",
    name: "/publish/AJ-profile-01",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-01"),
  },
  {
    path: "/publish/AJ-profile-01-success",
    name: "/publish/AJ-profile-01-success",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-01-success"),
  },
  {
    path: "/publish/AJ-profile-01-error",
    name: "/publish/AJ-profile-01-error",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-01-error"),
  },
  {
    path: "/publish/AJ-profile-02",
    name: "/publish/AJ-profile-02",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-02"),
  },
  {
    path: "/publish/AJ-profile-02-success",
    name: "/publish/AJ-profile-02-success",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-02-success"),
  },
  {
    path: "/publish/AJ-profile-02-error",
    name: "/publish/AJ-profile-02-error",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-02-error"),
  },
  {
    path: "/publish/AJ-profile-03",
    name: "/publish/AJ-profile-03",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-03"),
  },
  {
    path: "/publish/AJ-profile-03-success",
    name: "/publish/AJ-profile-03-success",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-03-success"),
  },
  {
    path: "/publish/AJ-profile-03-error",
    name: "/publish/AJ-profile-03-error",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-03-error"),
  },
  {
    path: "/publish/AJ-profile-04",
    name: "/publish/AJ-profile-04",
    component: () => import("@/views/publish/mobile/AJ/AJ-profile-04"),
  },
  {
    path: "/publish/AL-S1-01",
    name: "/publish/AL-S1-01",
    component: () => import("@/views/publish/mobile/AL/AL-S1-01"),
  },
  {
    path: "/publish/AL-S1-02",
    name: "/publish/AL-S1-02",
    component: () => import("@/views/publish/mobile/AL/AL-S1-02"),
  },
  {
    path: "/publish/AI-findid",
    name: "/publish/AI-findid",
    component: () => import("@/views/publish/mobile/AI/AI-findid"),
  },
  {
    path: "/publish/AI-findid1-01",
    name: "/publish/AI-findid1-01",
    component: () => import("@/views/publish/mobile/AI/AI-findid1-01"),
    props: true,
  },
  {
    path: "/publish/AI-findid2-01",
    name: "/publish/AI-findid2-01",
    component: () => import("@/views/publish/mobile/AI/AI-findid2-01"),
  },
  {
    path: "/publish/AI-findid2-01-success",
    name: "/publish/AI-findid2-01-success",
    component: () => import("@/views/publish/mobile/AI/AI-findid2-01-success"),
  },
  {
    path: "/publish/AI-findid2-02",
    name: "/publish/AI-findid2-02",
    component: () => import("@/views/publish/mobile/AI/AI-findid2-02"),
  },
  {
    path: "/publish/AI-findid2-03",
    name: "/publish/AI-findid2-03",
    component: () => import("@/views/publish/mobile/AI/AI-findid2-03"),
  },
  {
    path: "/publish/AP-findpw",
    name: "/publish/AP-findpw",
    component: () => import("@/views/publish/mobile/AP/AP-findpw"),
  },
  {
    path: "/publish/AP-findpw-success",
    name: "/publish/AP-findpw-success",
    component: () => import("@/views/publish/mobile/AP/AP-findpw-success"),
  },
  {
    path: "/publish/AP-findpw-error",
    name: "/publish/AP-findpw-error",
    component: () => import("@/views/publish/mobile/AP/AP-findpw-error"),
  },
  {
    path: "/publish/AL-BX",
    name: "/publish/AL-BX",
    component: () => import("@/views/publish/mobile/AL/AL-BX"),
  },
  {
    path: "/publish/AL-BL",
    name: "/publish/AL-BL",
    component: () => import("@/views/publish/mobile/AL/AL-BL"),
  },
  {
    path: "/publish/AL-B4",
    name: "/publish/AL-B4",
    component: () => import("@/views/publish/mobile/AL/AL-B4"),
  },
  {
    path: "/publish/AL-B5",
    name: "/publish/AL-B5",
    component: () => import("@/views/publish/mobile/AL/AL-B5"),
  },
  {
    path: "/publish/AL-C1",
    name: "/publish/AL-C1",
    component: () => import("@/views/publish/mobile/AL/AL-C1"),
  },
  {
    path: "/publish/CM-main",
    name: "/publish/CM-main",
    component: () => import("@/views/publish/mobile/CM/CM-main"),
  },
  {
    path: "/publish/CMy-List",
    name: "/publish/CMy-List",
    component: () => import("@/views/publish/mobile/CM/CMy-List"),
  },
  {
    path: "/publish/CMy-Detail",
    name: "/publish/CMy-Detail",
    component: () => import("@/views/publish/mobile/CM/CMy-Detail"),
  },
  {
    path: "/publish/CF-FaqMain",
    name: "/publish/CF-FaqMain",
    component: () => import("@/views/publish/mobile/CM/CF-FaqMain"),
  },
  {
    path: "/publish/CF-SubList",
    name: "/publish/CF-SubList",
    component: () => import("@/views/publish/mobile/CM/CF-SubList"),
  },
  {
    path: "/publish/CF-Search",
    name: "/publish/CF-Search",
    component: () => import("@/views/publish/mobile/CM/CF-Search"),
  },
  {
    path: "/publish/CF-Search-Blank",
    name: "/publish/CF-Search-Blank",
    component: () => import("@/views/publish/mobile/CM/CF-Search-Blank"),
  },
  {
    path: "/publish/CF-FaqDetail",
    name: "/publish/CF-FaqDetail",
    component: () => import("@/views/publish/mobile/CM/CF-FaqDetail"),
  },
  {
    path: "/publish/TP-policy",
    name: "/publish/TP-policy",
    component: () => import("@/views/publish/mobile/TP/TP-policy"),
  },
  {
    path: "/publish/TP-private",
    name: "/publish/TP-private",
    component: () => import("@/views/publish/mobile/TP/TP-private"),
  },
  {
    path: "/publish/TP-location",
    name: "/publish/TP-location",
    component: () => import("@/views/publish/mobile/TP/TP-location"),
  },
  {
    path: "/publish/TP-marketing",
    name: "/publish/TP-marketing",
    component: () => import("@/views/publish/mobile/TP/TP-marketing"),
  },
  // {
  //   path: '/publish/CB-Event',
  //   name: '/publish/CB-Event',
  //   component: () => import('@/views/publish/mobile/CB/CB-Event'),
  // },
  {
    path: "/publish/CB-Notice",
    name: "/publish/CB-Notice",
    component: () => import("@/views/publish/mobile/CB/CB-NotiEvent"),
    props: { selectedIndex: 0 },
  },
  {
    path: "/publish/CB-Event",
    name: "/publish/CB-Event",
    component: () => import("@/views/publish/mobile/CB/CB-NotiEvent"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/publish/CB-NoticeDetail",
    name: "/publish/CB-NoticeDetail",
    component: () => import("@/views/publish/mobile/CB/CB-NoticeDetail"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/publish/CQ11-Login",
    name: "/publish/CQ11-Login",
    component: () => import("@/views/publish/mobile/CM/CQ11-Login"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/publish/CQ11-Login-fileupload",
    name: "/publish/CQ11-Login-fileupload",
    component: () => import("@/views/publish/mobile/CM/CQ11-Login-fileupload"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/publish/CQ11-NotLogin",
    name: "/publish/CQ11-NotLogin",
    component: () => import("@/views/publish/mobile/CM/CQ11-NotLogin"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/publish/CQ11-NotLogin-before",
    name: "/publish/CQ11-NotLogin-before",
    component: () => import("@/views/publish/mobile/CM/CQ11-NotLogin-before"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/publish/CQ11-NotLogin-fileupload",
    name: "/publish/CQ11-NotLogin-fileupload",
    component: () =>
      import("@/views/publish/mobile/CM/CQ11-NotLogin-fileupload"),
    props: { selectedIndex: 1 },
  },
  {
    path: "/publish/TP-PolicyService",
    name: "/publish/TP-PolicyService",
    component: () => import("@/views/publish/mobile/TP/TP-PolicyService"),
  },
  {
    path: "/publish/TP-PolicyPrivacy",
    name: "/publish/TP-PolicyPrivacy",
    component: () => import("@/views/publish/mobile/TP/TP-PolicyPrivacy"),
  },
  {
    path: "/publish/TP-PolicyParent",
    name: "/publish/TP-PolicyParent",
    component: () => import("@/views/publish/mobile/TP/TP-PolicyParent"),
  },
  {
    path: "/publish/TP-PolicyLocation",
    name: "/publish/TP-PolicyLocation",
    component: () => import("@/views/publish/mobile/TP/TP-PolicyLocation"),
  },
  {
    path: "/publish/COM-veriinfo",
    name: "/publish/COM-veriinfo",
    component: () => import("@/views/publish/mobile/com/COM-veriinfo"),
    props: true,
  },
  {
    path: "/publish/COM-veriinfo-success",
    name: "/publish/COM-veriinfo-success",
    component: () => import("@/views/publish/mobile/com/COM-veriinfo-success"),
  },
  {
    path: "/publish/COM-verisuccess1",
    name: "/publish/COM-verisuccess1",
    component: () => import("@/views/publish/mobile/com/COM-verisuccess1"),
    props: true,
  },
  {
    path: "/publish/COM-verisuccess2",
    name: "/publish/COM-verisuccess2",
    component: () => import("@/views/publish/mobile/com/COM-verisuccess2"),
    props: true,
  },
  {
    path: "/publish/COM-veriexist",
    name: "/publish/COM-veriexist",
    component: () => import("@/views/publish/mobile/com/COM-veriexist"),
  },
  {
    path: "/publish/COM-veriproceeding",
    name: "/publish/COM-veriproceeding",
    component: () => import("@/views/publish/mobile/com/COM-veriproceeding"),
    props: true,
  },
  {
    path: "/publish/COM-veripolicy",
    name: "/publish/COM-veripolicy",
    component: () => import("@/views/publish/mobile/com/COM-veripolicy"),
  },
  {
    // PC Layout Test page
    path: "/publish/Layout",
    name: "/publish/Layout",
    component: () => import("@/views/publish/pc/includes/Layout"),
  },
  {
    path: "/publish/pc/AL-login",
    name: "/publish/pc/AL-login",
    component: () => import("@/views/publish/pc/AL/AL-login"),
  },
  {
    path: "/publish/pc/AL-S1-01",
    name: "/publish/pc/AL-S1-01",
    component: () => import("@/views/publish/pc/AL/AL-S1-01"),
  },
  {
    // COM
    path: "/publish/pc/GNB",
    name: "/publish/pc/GNB",
    component: () => import("@/views/publish/pc/COM/GNB"),
  },
  {
    path: "/publish/pc/LS-search",
    name: "/publish/pc/LS-search",
    component: () => import("@/views/publish/pc/COM/LS-search"),
  },
  {
    path: "/publish/pc/LS-null",
    name: "/publish/pc/LS-null",
    component: () => import("@/views/publish/pc/COM/LS-null"),
  },
  {
    path: "/publish/pc/COM-ProfileCard",
    name: "/publish/pc/COM-ProfileCard",
    component: () => import("@/views/publish/pc/COM/COM-ProfileCard"),
  },
  {
    path: "/publish/pc/COM-ProfileCard_other",
    name: "/publish/pc/COM-ProfileCard_other",
    component: () => import("@/views/publish/pc/COM/COM-ProfileCard_other"),
  },
  {
    path: "/publish/pc/COM-LR-request",
    name: "/publish/pc/COM-LR-request",
    component: () => import("@/views/publish/pc/COM/COM-LR-request"),
  },
  {
    path: "/publish/pc/COM-LR-request_success",
    name: "/publish/pc/COM-LR-request_success",
    component: () => import("@/views/publish/pc/COM/COM-LR-request_success"),
  },
  {
    path: "/publish/pc/COM-LR-request_error",
    name: "/publish/pc/COM-LR-request_error",
    component: () => import("@/views/publish/pc/COM/COM-LR-request_error"),
  },
  {
    path: "/publish/pc/COM-LR-change",
    name: "/publish/pc/COM-LR-change",
    component: () => import("@/views/publish/pc/COM/COM-LR-change"),
  },
  {
    path: "/publish/pc/COM-LR-change_success",
    name: "/publish/pc/COM-LR-change_success",
    component: () => import("@/views/publish/pc/COM/COM-LR-change_success"),
  },
  {
    path: "/publish/pc/COM-LR-change_error",
    name: "/publish/pc/COM-LR-change_error",
    component: () => import("@/views/publish/pc/COM/COM-LR-change_error"),
  },
  {
    path: "/publish/pc/COM-Report",
    name: "/publish/pc/COM-Report",
    component: () => import("@/views/publish/pc/COM/COM-Report"),
  },
  {
    path: "/publish/pc/COM-Reportdone",
    name: "/publish/pc/COM-Reportdone",
    component: () => import("@/views/publish/pc/COM/COM-Reportdone"),
  },
  {
    path: "/publish/pc/COM-Popup",
    name: "/publish/pc/COM-Popup",
    component: () => import("@/views/publish/pc/COM/COM-Popup"),
  },
  {
    path: "/publish/pc/COM-Hashtag",
    name: "/publish/pc/COM-Hashtag",
    component: () => import("@/views/publish/pc/COM/COM-Hashtag"),
  },
  {
    path: "/publish/pc/COM-Hashtag-small",
    name: "/publish/pc/COM-Hashtag-small",
    component: () => import("@/views/publish/pc/COM/COM-Hashtag-small"),
  },
  {
    path: "/publish/pc/COM-Loading",
    name: "/publish/pc/COM-Loading",
    component: () => import("@/views/publish/pc/COM/COM-Loading"),
  },

  {
    // cylife
    path: "/publish/pc/LM-main",
    name: "/publish/pc/LM-main",
    component: () => import("@/views/publish/pc/LM/LM-main"),
    props: { selectedIndex: 0 },
  },
  {
    path: "/publish/pc/LT-stats",
    name: "/publish/pc/LT-stats",
    component: () => import("@/views/publish/pc/LT/LT-stats"),
  },
  {
    path: "/publish/pc/LT-stats-popup",
    name: "/publish/pc/LT-stats-popup",
    component: () => import("@/views/publish/pc/LT/LT-stats-popup"),
  },
  {
    path: "/publish/pc/LR-receive",
    name: "/publish/pc/LR-receive",
    component: () => import("@/views/publish/pc/LR/LR-receive"),
  },
  {
    path: "/publish/pc/LR-receive-blank",
    name: "/publish/pc/LR-receive-blank",
    component: () => import("@/views/publish/pc/LR/LR-receive-blank"),
  },
  {
    path: "/publish/pc/MF-friend",
    name: "/publish/pc/MF-friend",
    component: () => import("@/views/publish/pc/MF/MF-friend"),
  },
  {
    path: "/publish/pc/MF-friend-blank",
    name: "/publish/pc/MF-friend-blank",
    component: () => import("@/views/publish/pc/MF/MF-friend-blank"),
  },
  {
    path: "/publish/pc/LA-list",
    name: "/publish/pc/LA-list",
    component: () => import("@/views/publish/pc/LA/LA-list"),
  },
  {
    // minihompy
    path: "/publish/pc/MH-Main",
    name: "/publish/pc/MH-Main",
    component: () => import("@/views/publish/pc/MH/MH-Main"),
    props: true,
  },
  {
    // minihompy
    path: "/publish/pc/MH-Main/:userId",
    name: "/publish/pc/MH-Main",
    component: () => import("@/views/publish/pc/MH/MH-Main"),
    props: true,
  },
  {
    path: "/publish/pc/MH-Main-friend",
    name: "/publish/pc/MH-Main-friend",
    component: () => import("@/views/publish/pc/MH/MH-Main-friend"),
  },
  {
    path: "/publish/pc/MH-Main-other",
    name: "/publish/pc/MH-Main-other",
    component: () => import("@/views/publish/pc/MH/MH-Main-other"),
  },
  {
    path: "/publish/pc/MH-ProfileChange",
    name: "/publish/pc/MH-ProfileChange",
    component: () => import("@/views/publish/pc/MH/MH-ProfileChange"),
  },
  {
    path: "/publish/pc/MH-ProfileChange-already",
    name: "/publish/pc/MH-ProfileChange-already",
    component: () => import("@/views/publish/pc/MH/MH-ProfileChange-already"),
  },
  {
    path: "/publish/pc/MH-PhotoModify",
    name: "/publish/pc/MH-PhotoModify",
    component: () => import("@/views/publish/pc/MH/MH-PhotoModify"),
  },
  {
    path: "/publish/pc/MH-ProfileDetail",
    name: "/publish/pc/MH-ProfileDetail",
    component: () => import("@/views/publish/pc/MH/MH-ProfileDetail"),
  },
  {
    path: "/publish/pc/MH-ProfileDetail-more",
    name: "/publish/pc/MH-ProfileDetail-more",
    component: () => import("@/views/publish/pc/MH/MH-ProfileDetail-more"),
  },
  {
    path: "/publish/pc/MR-list",
    name: "/publish/pc/MR-list",
    component: () => import("@/views/publish/pc/MR/MR-list"),
  },
  {
    path: "/publish/pc/MC-Detail",
    name: "/publish/pc/MC-Detail",
    component: () => import("@/views/publish/pc/MC/MC-Detail"),
  },
  {
    path: "/publish/pc/MC-Detail-my",
    name: "/publish/pc/MC-Detail-my",
    component: () => import("@/views/publish/pc/MC/MC-Detail-my"),
  },
  {
    path: "/publish/pc/MJ-jukebox",
    name: "/publish/pc/MJ-jukebox",
    component: () => import("@/views/publish/pc/MJ/MJ-jukebox"),
  },
  {
    path: "/publish/pc/MJ-jukebox-other",
    name: "/publish/pc/MJ-jukebox-other",
    component: () => import("@/views/publish/pc/MJ/MJ-jukebox-other"),
  },
  {
    path: "/publish/pc/MJ-jukebox-blank",
    name: "/publish/pc/MJ-jukebox-blank",
    component: () => import("@/views/publish/pc/MJ/MJ-jukebox-blank"),
  },
  {
    path: "/publish/pc/MB-AlbumDetail",
    name: "/publish/pc/MB-AlbumDetail",
    component: () => import("@/views/publish/pc/MB/MB-AlbumDetail"),
  },
  {
    path: "/publish/pc/MD-My",
    name: "/publish/pc/MD-My",
    component: () => import("@/views/publish/pc/MD/MD-My"),
  },
  {
    path: "/publish/pc/MD-My-other",
    name: "/publish/pc/MD-My-other",
    component: () => import("@/views/publish/pc/MD/MD-My-other"),
  },
  {
    path: "/publish/pc/MD-My-emoticon",
    name: "/publish/pc/MD-My-emoticon",
    component: () => import("@/views/publish/pc/MD/MD-My-emoticon"),
  },
  {
    path: "/publish/pc/MD-My-null",
    name: "/publish/pc/MD-My-null",
    component: () => import("@/views/publish/pc/MD/MD-My-null"),
  },
  {
    path: "/publish/pc/MD-Share",
    name: "/publish/pc/MD-Share",
    component: () => import("@/views/publish/pc/MD/MD-Share"),
  },
  {
    path: "/publish/pc/MD-Share-list",
    name: "/publish/pc/MD-Share-list",
    component: () => import("@/views/publish/pc/MD/MD-Share-list"),
  },
  {
    path: "/publish/pc/MD-Share-list-member",
    name: "/publish/pc/MD-Share-list-member",
    component: () => import("@/views/publish/pc/MD/MD-Share-list-member"),
  },
  {
    path: "/publish/pc/MD-Share-list-search",
    name: "/publish/pc/MD-Share-list-search",
    component: () => import("@/views/publish/pc/MD/MD-Share-list-search"),
  },
  {
    path: "/publish/pc/MD-Share-list-search-null",
    name: "/publish/pc/MD-Share-list-search-null",
    component: () => import("@/views/publish/pc/MD/MD-Share-list-search-null"),
  },
  {
    path: "/publish/pc/MD-Folder",
    name: "/publish/pc/MD-Folder",
    component: () => import("@/views/publish/pc/MD/MD-Folder"),
  },
  {
    path: "/publish/pc/MD-Write",
    name: "/publish/pc/MD-Write",
    component: () => import("@/views/publish/pc/MD/MD-Write"),
  },
  {
    path: "/publish/pc/MD-Detail",
    name: "/publish/pc/MD-Detail",
    component: () => import("@/views/publish/pc/MD/MD-Detail"),
  },
  {
    path: "/publish/pc/MD-Detail-other",
    name: "/publish/pc/MD-Detail-other",
    component: () => import("@/views/publish/pc/MD/MD-Detail-other"),
  },
  {
    path: "/publish/pc/MD-Detail-share",
    name: "/publish/pc/MD-Detail-share",
    component: () => import("@/views/publish/pc/MD/MD-Detail-share"),
  },
  {
    path: "/publish/pc/MD-Detail-reply",
    name: "/publish/pc/MD-Detail-reply",
    component: () => import("@/views/publish/pc/MD/MD-Detail-reply"),
  },
  {
    path: "/publish/pc/MD-Detail-mention",
    name: "/publish/pc/MD-Detail-mention",
    component: () => import("@/views/publish/pc/MD/MD-Detail-mention"),
  },
  // MG-list
  {
    path: "/publish/pc/MG-list",
    name: "/publish/pc/MG-list",
    component: () => import("@/views/publish/pc/MG/MG-list"),
  },
  {
    path: "/publish/pc/MG-list-my",
    name: "/publish/pc/MG-list-my",
    component: () => import("@/views/publish/pc/MG/MG-list-my"),
  },
  {
    path: "/publish/pc/MG-list-blank",
    name: "/publish/pc/MG-list-blank",
    component: () => import("@/views/publish/pc/MG/MG-list-blank"),
  },
  {
    path: "/publish/pc/MG-Reply",
    name: "/publish/pc/MG-Reply",
    component: () => import("@/views/publish/pc/MG/MG-Reply"),
  },
  {
    path: "/publish/pc/MG-Reply-my",
    name: "/publish/pc/MG-Reply-my",
    component: () => import("@/views/publish/pc/MG/MG-Reply-my"),
  },
  {
    path: "/publish/pc/MG-Reply-blank",
    name: "/publish/pc/MG-Reply-blank",
    component: () => import("@/views/publish/pc/MG/MG-Reply-blank"),
  },
  {
    path: "/publish/pc/MG-Reply-mention",
    name: "/publish/pc/MG-Reply-mention",
    component: () => import("@/views/publish/pc/MG/MG-Reply-mention"),
  },
  {
    path: "/publish/pc/MG-Reply-mention2",
    name: "/publish/pc/MG-Reply-mention2",
    component: () => import("@/views/publish/pc/MG/MG-Reply-mention2"),
  },
  {
    path: "/publish/pc/MA-List",
    name: "/publish/pc/MA-List",
    component: () => import("@/views/publish/pc/MA/MA-List"),
  },
  {
    path: "/publish/pc/MA-Detail",
    name: "/publish/pc/MA-Detail",
    component: () => import("@/views/publish/pc/MA/MA-Detail"),
  },
  {
    path: "/publish/pc/MA-Detail-share",
    name: "/publish/pc/MA-Detail-share",
    component: () => import("@/views/publish/pc/MA/MA-Detail-share"),
  },
  {
    path: "/publish/pc/MA-Detail-special",
    name: "/publish/pc/MA-Detail-special",
    component: () => import("@/views/publish/pc/MA/MA-Detail-special"),
  },
  {
    path: "/publish/pc/MA-Detail-video",
    name: "/publish/pc/MA-Detail-video",
    component: () => import("@/views/publish/pc/MA/MA-Detail-video"),
  },
  {
    path: "/publish/pc/MA-Detail-video-playhover",
    name: "/publish/pc/MA-Detail-video-playhover",
    component: () => import("@/views/publish/pc/MA/MA-Detail-video-playhover"),
  },
  {
    path: "/publish/pc/MA-Reply",
    name: "/publish/pc/MA-Reply",
    component: () => import("@/views/publish/pc/MA/MA-Reply"),
  },
  {
    path: "/publish/pc/MA-Reply-blank",
    name: "/publish/pc/MA-Reply-blank",
    component: () => import("@/views/publish/pc/MA/MA-Reply-blank"),
  },
  {
    path: "/publish/pc/MA-Reply-mention",
    name: "/publish/pc/MA-Reply-mention",
    component: () => import("@/views/publish/pc/MA/MA-Reply-mention"),
  },
  {
    path: "/publish/pc/MA-Reply-mention2",
    name: "/publish/pc/MA-Reply-mention2",
    component: () => import("@/views/publish/pc/MA/MA-Reply-mention2"),
  },
  {
    path: "/publish/pc/MA-Folderselect",
    name: "/publish/pc/MA-Folderselect",
    component: () => import("@/views/publish/pc/MA/MA-Folderselect"),
  },
  {
    path: "/publish/pc/MA-Folderselect-first",
    name: "/publish/pc/MA-Folderselect-first",
    component: () => import("@/views/publish/pc/MA/MA-Folderselect-first"),
  },
  {
    path: "/publish/pc/MA-Detailsympathy",
    name: "/publish/pc/MA-Detailsympathy",
    component: () => import("@/views/publish/pc/MA/MA-Detailsympathy"),
  },
  {
    path: "/publish/pc/MA-List-grid5",
    name: "/publish/pc/MA-List-grid5",
    component: () => import("@/views/publish/pc/MA/MA-List-grid5"),
  },
  {
    path: "/publish/pc/MA-List-grid5-1",
    name: "/publish/pc/MA-List-grid5-1",
    component: () => import("@/views/publish/pc/MA/MA-List-grid5-1"),
  },
  {
    path: "/publish/pc/MA-List-default",
    name: "/publish/pc/MA-List-default",
    component: () => import("@/views/publish/pc/MA/MA-List-default"),
  },
  {
    path: "/publish/pc/MS-Setting",
    name: "/publish/pc/MS-Setting",
    component: () => import("@/views/publish/pc/MS/MS-Setting"),
  },
  {
    path: "/publish/pc/WH-home",
    name: "/publish/pc/WH-home",
    component: () => import("@/views/publish/pc/WH/WH-home"),
    props: { selectedIndex: 2 },
  },
  {
    path: "/publish/pc/WH-praise",
    name: "/publish/pc/WH-praise",
    component: () => import("@/views/publish/pc/WH/WH-praise"),
  },
  {
    path: "/publish/pc/WH-herostory",
    name: "/publish/pc/WH-herostory",
    component: () => import("@/views/publish/pc/WH/WH-herostory"),
  },
  {
    path: "/pc/WH-praise-fame",
    name: "/pc/WH-praise-fame",
    component: () => import("@/views/pc/WH/WH-praise-fame"),
    props: { selectedIndex: 2 },
  },
  {
    path: "/pc/WH-praise-hero",
    name: "/pc/WH-praise-hero",
    component: () => import("@/views/pc/WH/WH-praise-hero"),
    props: { selectedIndex: 2 },
  },
  {
    path: "/pc/WH-herostory",
    name: "/pc/WH-herostory",
    component: () => import("@/views/pc/WH/WH-herostory"),
  },
  {
    path: "/pc/WH-herostory2",
    name: "/pc/WH-herostory2",
    component: () => import("@/views/pc/WH/WH-herostory2"),
  },
  {
    path: "/pc/WH-herostory3",
    name: "/pc/WH-herostory3",
    component: () => import("@/views/pc/WH/WH-herostory3"),
  },
  {
    path: "/pc/WH-gift",
    name: "/pc/WH-gift",
    component: () => import("@/views/pc/WH/WH-gift"),
  },
  {
    path: "/pc/WH-gift-error",
    name: "/pc/WH-gift-error",
    component: () => import("@/views/pc/WH/WH-gift-error"),
  },
  {
    path: "/publish/pc/WM-home",
    name: "/publish/pc/WM-home",
    component: () => import("@/views/publish/pc/WM/WM-home"),
  },
  {
    path: "/publish/pc/WM-basket",
    name: "/publish/pc/WM-basket",
    component: () => import("@/views/publish/pc/WM/WM-basket"),
  },
  {
    path: "/publish/pc/WM-theme",
    name: "/publish/pc/WM-theme",
    component: () => import("@/views/publish/pc/WM/WM-theme"),
  },
  {
    path: "/publish/pc/EM-main",
    name: "/publish/pc/EM-main",
    component: () => import("@/views/publish/pc/EM/EM-main"),
  },
  {
    path: "/publish/pc/ED-charge",
    name: "/publish/pc/ED-charge",
    component: () => import("@/views/publish/pc/ED/ED-charge"),
  },
  {
    path: "/publish/pc/ED-charge-error",
    name: "/publish/pc/ED-charge-error",
    component: () => import("@/views/publish/pc/ED/ED-charge-error"),
  },
  {
    path: "/publish/pc/ED-giftqty",
    name: "/publish/pc/ED-giftqty",
    component: () => import("@/views/publish/pc/ED/ED-giftqty"),
  },
  {
    path: "/publish/pc/ED-giftqty-error",
    name: "/publish/pc/ED-giftqty-error",
    component: () => import("@/views/publish/pc/ED/ED-giftqty-error"),
  },
  {
    path: "/publish/pc/ED-giftselect",
    name: "/publish/pc/ED-giftselect",
    component: () => import("@/views/publish/pc/ED/ED-giftselect"),
  },
  {
    path: "/publish/pc/ED-giftselect-null",
    name: "/publish/pc/ED-giftselect-null",
    component: () => import("@/views/publish/pc/ED/ED-giftselect-null"),
  },
  {
    path: "/publish/pc/ED-giftselect-null2",
    name: "/publish/pc/ED-giftselect-null2",
    component: () => import("@/views/publish/pc/ED/ED-giftselect-null2"),
  },
  {
    path: "/publish/pc/ED-giftselect-search",
    name: "/publish/pc/ED-giftselect-search",
    component: () => import("@/views/publish/pc/ED/ED-giftselect-search"),
  },
  {
    path: "/publish/pc/ED-giftdetail",
    name: "/publish/pc/ED-giftdetail",
    component: () => import("@/views/publish/pc/ED/ED-giftdetail"),
  },
  {
    path: "/publish/pc/ED-chargehistory",
    name: "/publish/pc/ED-chargehistory",
    component: () => import("@/views/publish/pc/ED/ED-chargehistory"),
  },
  {
    path: "/publish/pc/ED-chargehistory-null",
    name: "/publish/pc/ED-chargehistory-null",
    component: () => import("@/views/publish/pc/ED/ED-chargehistory-null"),
  },
  {
    path: "/publish/pc/ED-chargehistory-month",
    name: "/publish/pc/ED-chargehistory-month",
    component: () => import("@/views/publish/pc/ED/ED-chargehistory-month"),
  },
  {
    path: "/publish/pc/ED-chargehistory-month-popup",
    name: "/publish/pc/ED-chargehistory-month-popup",
    component: () => import("@/views/publish/pc/ED/ED-chargehistory-month-popup"),
  },
  {
    path: "/publish/pc/ED-chargehistory-month-null",
    name: "/publish/pc/ED-chargehistory-month-null",
    component: () => import("@/views/publish/pc/ED/ED-chargehistory-month-null"),
  },
  {
    path: "/publish/pc/ED-chargehistorydetail",
    name: "/publish/pc/ED-chargehistorydetail",
    component: () => import("@/views/publish/pc/ED/ED-chargehistorydetail"),
  },
  {
    path: "/publish/pc/ED-usehistory-bgm",
    name: "/publish/pc/ED-usehistory-bgm",
    component: () => import("@/views/publish/pc/ED/ED-usehistory-bgm"),
  },
  {
    path: "/publish/pc/ED-usehistorydetail",
    name: "/publish/pc/ED-usehistorydetail",
    component: () => import("@/views/publish/pc/ED/ED-usehistorydetail"),
  },
];
const createRouter = () =>
  new Router({
    mode: "history", // '#' 사용 X
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

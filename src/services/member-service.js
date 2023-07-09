import axios from 'axios'
import Crypto from '@/plugins/Crypto';
import AuthService from './auth-service'
import authHeader from "./auth-header";
import getApiUrl from './api-urls'
const publicKey = require("@/plugins/key");
const MEMBER_URL = 'https://'+(getApiUrl())+'member.rapi.cyworld.com/'

class MemberService {


  handleResponse(response) {
    if (response.status === 401) {
      AuthService.logout()
      location.reload(true)

      const error = response.data && response.data.message
      return Promise.reject(error)
    }

    return Promise.resolve(response)
  }
  danalready(redirectPath) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);

    var params = {};

    var protocol = location.protocol;
    var hostName = location.hostname;
    var port = location.port;



    var redirectUrl = [protocol,'//',hostName,(port?':'+port:''),'/',(redirectPath?redirectPath:'temp')].join('');

    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,redirectUrl);
    return axios
                .post(MEMBER_URL + 'api/inf_010_110200401', params)
                .then(this.handleResponse)
                .then(response => {
                    return response.data;
                })
  }
  danalconfirm(reqTxId) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);

    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,reqTxId);
    console.log(JSON.stringify(params));
    return axios
                .post(MEMBER_URL + 'web/auth/danal/confirm', params)
                .then(this.handleResponse)
                .then(response => {
                    return response.data;
                })
  }
  certification(strData) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);

    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
                .post(MEMBER_URL + 'api/inf_010_110200101', params)
                .then(this.handleResponse)
                .then(response => {
                    return response.data;
                })

  }
  passRequest(strData) {

    var key = Crypto.getRandom();
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData)
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110200201', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })

  }

  passResult(strData) {

    var key = Crypto.getRandom();
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData.reqTxId + '||'+ strData.certTxId+'||패스66||01019020066');
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110200301', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })

  }

  findId(strData) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);

    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110100401', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  findIdsInfo(strData) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);

    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110300201', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  findIdsCi(strData) {
    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110300101', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  findPassword(strData) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);

    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110300301', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  findCi(strData) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);

    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110200501', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  verifyEmail(strData) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110100601', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  registnew(strData) {
    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    var pw = Crypto.getSha256(strData.pw,'cyreboot')
    var member = ''
    var phoneNumber = Crypto.getAseEncrypt(key,strData.phonenumber)
    console.log('phonenumber ::::: ' , strData.phonenumber)
    if(strData.legalEmailId === undefined && strData.legalConditionId === undefined && strData.agreementLegal === undefined){
      member = strData.reqTxId+'||'+strData.email+'||'+pw+'||'+strData.nickname+'||'+strData.cyworldConditionId+'||'+strData.agreementCyword+'||'+strData.privateConditionId+'||'+strData.agreementPrivate+'||'+strData.locationConditionId+'||'+strData.agreementLocation+'||'+strData.marketingConditionId+'||'+strData.agreementMarketing
    }else{
      member = strData.reqTxId+'||'+strData.email+'||'+pw+'||'+strData.nickname+'||'+strData.cyworldConditionId+'||'+strData.agreementCyword+'||'+strData.privateConditionId+'||'+strData.agreementPrivate+'||'+strData.locationConditionId+'||'+strData.agreementLocation+'||'+strData.marketingConditionId+'||'+strData.agreementMarketing+'||'+strData.legalEmailId+'||'+strData.legalConditionId+'||'+strData.agreementLegal
    }
    console.log('member ::::: ' , member)
    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,member);
    params['phoneNumber'] =phoneNumber;
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110100501', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  termslatest(strData) {
    var params ={};
    var terms = strData;
    params['terms'] =terms
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110100201', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

 /* latestTermslatest(strData) {
    var params ={};
    var terms =[strData];
    params['terms'] =terms
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110100101', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }*/

  htmlSearch(url) {
    return axios.get(url).then(res => {
      return res.data;
    })
  }

  emailcheck(strData) {
    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    var params ={};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'api/inf_010_110100701', params)
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  //내 정보 갱신
  myInfoUpdateTxid(params) {
    // var key = Crypto.getRandom()
    // var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    //console.log(JSON.stringify(params));

    return axios
        .post(MEMBER_URL + 'members/my/info/update', params,{headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  //보조 이메일 삭제
/*  subemail(params) {
    // var key = Crypto.getRandom()
    // var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    //console.log(JSON.stringify(params));

    return axios
        .post(MEMBER_URL + 'members/subemail', params,{headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }*/
  //보조 이메일 설정
  subemailCheck() {
    return axios
        .post(MEMBER_URL + 'members/subemail/check','',{method: 'POST',headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  //보조 이메일 삭제
  subemailDelete() {
    return axios
        .post(MEMBER_URL + 'members/subemail/delete','',{headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  //내 정보 갱신 Txid 없을때
  myInfoUpdate(strData) {
    var params ={};
    params['txId'] =strData.txId;
    params['phoneNumber'] =strData.phonenumber;
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'members/my/info/update', params,{headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  subemail(strData) {
    var params ={};
    params['email'] =strData;
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'members/subemail', params,{ method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  periodSetting(strData) {
    var params ={};
    params['period'] =strData;
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'members/my/setting/period/private', params,{ method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  settingTerms(strData) {
    var params ={};
    params['terms'] =strData.inputValue;
    params['agree'] =strData.checked
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'members/my/setting/terms', params,{ method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }

  marketingChannel(strData) {
    var params ={};
    params['channel'] =strData.inputValue;
    params['agree'] =strData.checked
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'members/my/setting/marketing/channel', params,{ method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  infoTerms() {
    return axios
        .post(MEMBER_URL + 'members/my/info/terms','',{headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  infoMarketingChannel() {
    return axios
        .post(MEMBER_URL + 'members/my/info/marketing/channel','',{headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  partnerList() {
    return axios
        .post(MEMBER_URL + 'members/my/partner/list','',{headers: authHeader() })
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  partnerDelete(strData) {
    var params ={};
    params['affiliateId'] =strData;
    console.log(JSON.stringify(params));
    return axios
        .post(MEMBER_URL + 'members/my/partner/delete', params,{ method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
  joinDate() {
    return axios
      .post(MEMBER_URL + 'members/my/info/regist/date', {},{ method: 'POST', headers: authHeader()})
      .then(this.handleResponse)
      .then(response => {
        return response.data;
      })
  }
  deleteMember(params) {
  console.log('before enc', params);
    console.log(JSON.stringify(params));
    return axios
      .post(MEMBER_URL + 'web/delete', params,{ method: 'POST', headers: authHeader()})
      .then(this.handleResponse)
      .then(response => {
        return response.data;
    })
  }
  subemailSelect() {
    return axios
        .post(MEMBER_URL + 'api/inf_010_110400101', {},{ method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
          return response.data;
        })
  }
}

export default new MemberService()

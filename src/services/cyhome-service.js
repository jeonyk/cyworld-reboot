import axios from 'axios'
import Crypto from '@/plugins/Crypto';
import AuthService from './cyhome-service'
import authHeader from "./auth-header";
import getApiUrl from './api-urls'
const publicKey = require("@/plugins/key");
const CYHOME_URL = 'https://dev-member.rapi.cyworld.com/'
const CYHOME_PROFILE_URL = 'https://'+(getApiUrl())+'profile.rapi.cyworld.com'
const CYHOME_FRIENDS_URL = 'https://'+(getApiUrl())+'friends.rapi.cyworld.com'

// const token = 'eyJhbGciOiJIUzUxMiJ9.eyJ0aWQiOiIxMDAwMDAwMCIsImV4cCI6MTYzNjQ0MTczOSwiaWF0IjoxNjM2NDM0NTM5fQ.aL4AMzeQOvG-BFKEs47lS2sbayEGv0khfa_hStFYRgvrqdWmDLVMK5l6jKq1uGJPrCXT1jHCQV8bchrPAGnefA'

class CyhomeService {
  handleResponse(response) {
    if (response.status === 401) {
      AuthService.logout();
      location.reload(true);

      const error = response.data && response.data.message;
      return Promise.reject(error);
    }

    return Promise.resolve(response);
  }

  guestbook(strData) {
    var key = Crypto.getRandom();
    var envelopKey = Crypto.getEncryptKey(publicKey.member, key);
    var params = {};
    params["envelopKey"] = envelopKey;
    params["envelopData"] = Crypto.getAseEncrypt(key, strData);
    console.log(JSON.stringify(params));
    return axios
      .post(CYHOME_URL + "guestbook", params, { headers: authHeader() })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeProfile(strData) {
    var params = {};
    params["did"] = strData;

    return axios
      .post(CYHOME_PROFILE_URL + "/api/inf_010_200100101", params, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeRecommend(strData) {
    var params = {};
    params["did"] = strData;

    return axios
      .post(CYHOME_PROFILE_URL + "/api/inf_010_200200101", params, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeFriend(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeFriendBirth(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210600101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeFriendDelete(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100401", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeFriendReceiving(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100701", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeAcceptFriendReceiving(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100801", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeRefuseFriendReceiving(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100901", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeFriendSending(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100601", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeCancelFriendSending(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100501", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeFriendSay(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210300101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }
  cylifeFriendSayRegister(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210300201", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  cylifeBookmark(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210200101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  minihompyProfile(strData) {
    return axios
      .post(CYHOME_PROFILE_URL + "/api/inf_010_200300101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  contentsCount(strData) {
    return axios
      .post(CYHOME_PROFILE_URL + "/api/inf_010_200400101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  profileCard(strData) {
    return axios
      .post(CYHOME_PROFILE_URL + "/api/inf_010_200800101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  buttonBookmarkDelete(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210200201", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  buttonBookmarkRegister(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210500101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  buttonPinRegister(strData) {
    return axios
      .post(CYHOME_PROFILE_URL + "/api/inf_010_210200301", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  friendRequest(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210100301", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  friendSayDetail(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210300101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  searchFriend(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210700101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  searchBookmark(strData) {
    return axios
      .post(CYHOME_FRIENDS_URL + "/api/inf_010_210700201", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  blockCylifeFriend(strData) {
    return axios
      .post(CYHOME_PROFILE_URL + "/api/inf_010_200500101", strData, {
        headers: authHeader(),
      })
      .then(this.handleResponse)
      .then((response) => {
        return response.data;
      });
  }

  // buttonPinDelete(strData) {
  //   return axios
  //     .post()
  // }
}

export default new CyhomeService()

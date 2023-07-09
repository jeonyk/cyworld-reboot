import axios from 'axios'
import Crypto from '@/plugins/Crypto';
import authHeader from './auth-header'
import getApiUrl from './api-urls'

const publicKey = require("@/plugins/key");
const API_URL = 'http://localhost:8080/api/auth/'
const AUTH_URL = 'https://'+(getApiUrl())+'auth.rapi.cyworld.com/'



class AuthService {

  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(this.handleResponse)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    })
  }

  handleResponse(response) {
    if (response.status === 401) {
      this.logout()
      location.reload(true)

      const error = response.data && response.data.message
      return Promise.reject(error)
    }

    return Promise.resolve(response)
  }

  token(user) {

    var params = {};
    params['id'] = user.email;

    return axios
    .post(AUTH_URL + '/api/inf_012_100100101', params)
    // .then(res => res.json())
    .then(response => {
        if(response.data.code === 'OK') {
            var data = response.data.data
            var nonceClient = Crypto.getRandomInt()
            var sha256 = Crypto.getSha256(user.password,'cyreboot')
            var ns = Number(data.nonce)+1
            var envelop = nonceClient +'||' + ns + '||' + data.sid + '||' + sha256
            var key = Crypto.getRandom()
            var envelopKey = Crypto.getEncryptKey(publicKey.auth, key);
            var envelopData = Crypto.getAseEncrypt(key,envelop);

            let params = {
                id: user.email,
                nonceClient: nonceClient,
                envelopKey: envelopKey,
                envelopData: envelopData
            }

            return axios
                .post(AUTH_URL + '/api/inf_012_100100201', params)
                .then(this.handleResponse)
                .then(response => {
                    if(response.data.data.token) {
                        response.data.data.token = Crypto.getAesDiscrypt(key,response.data.data.token).split('||')[1];
                        response.data.data.sid = data.sid
                    }

                    response.data.data.publicEncKey = key
                    return response.data;
                })
        }
    })
  }

  passwordVerify(strData) {

    var sha256 = Crypto.getSha256(strData,'cyreboot')
    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.auth, key);
    var envelopData = Crypto.getAseEncrypt(key, sha256);
    let params = {
        envelopKey: envelopKey,
        envelopData: envelopData
    }
    return axios
        .post(AUTH_URL + 'members/password/verify', params, { method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
            return response.data;
        })
  }

  resetPassword(strData) {

    var key = Crypto.getRandom()
    var envelopKey = Crypto.getEncryptKey(publicKey.auth, key);

    var params = {};
    params['envelopKey'] =envelopKey;
    params['envelopData'] =Crypto.getAseEncrypt(key,strData);
    return axios
        .post(AUTH_URL + 'members/password/set', params, { method: 'POST', headers: authHeader()})
        .then(this.handleResponse)
        .then(response => {
            return response.data;
        })
  }

    refreshToken(jsonData) {
      let param = { id : jsonData.email }
        return axios.post(AUTH_URL + 'api/inf_012_100100401', param)
        .then(response => {
            if(response.data.code === 'OK') {
                var data = response.data.data
                var nonceClient = Crypto.getRandomInt() // param 2
                var ns = Number(data.nonce)+1
                var key = Crypto.getRandom()
                var envelopKey = Crypto.getEncryptKey(publicKey.auth, key); // param 3
                var envelop = nonceClient +'||' + ns + '||' + jsonData.sid
                var envelopData = Crypto.getAseEncrypt(key,envelop); // param 4

                let params = {
                    id: jsonData.email,
                    nonceClient: nonceClient,
                    envelopKey: envelopKey,
                    envelopData: envelopData
                }

                return axios
                    .post(AUTH_URL + 'api/inf_012_100100501', params)
                    .then(this.handleResponse)
                    .then(response => {
                        response.data.token = Crypto.getAesDiscrypt(jsonData.publicEncKey, response.data.data).split('||')[1]
                        return response.data;
                    })
            }
        })
    }

}

export default new AuthService()

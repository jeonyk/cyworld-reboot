import AuthService from '../../services/auth-service'
import moment from "moment";

const state = {
  email: '',
  token: '',
  status: '',
  statusStartDate: '',
  statusEndDate: '',
  statusReason: '',
  message: '',
  returnJson: {},
  sid: '',
  publicEncKey: '',
}
const actions = {
  onGetToken ({ commit }, user) {

    return new Promise((resolve, reject) => {

      try {
          commit('SET_EMAIL', user.email)
          commit('SET_TOKEN', user.token)
          commit('SET_STATUS', user.status)
          commit('SET_STATUS_START_DATE', moment(user.statusStartDate).format('YYYY.MM.DD'))
          commit('SET_STATUS_END_DATE', moment(user.statusEndDate).format('YYYY.MM.DD'))
          commit('SET_STATUS_REASON', user.statusReason)
          commit('SET_MESSAGE', '')
          localStorage.setItem('user', JSON.stringify(user))
          resolve()
      } catch(e) {
          commit('loginFailure', {"msg":"false"})
          reject()
      }

    })
  },
  login ({ commit }, user) {

    return new Promise((resolve, reject) => {
      AuthService.token(user).then(response => {
        if(response.code === 'OK') {
          commit('SET_EMAIL', user.email)
          commit('SET_TOKEN', response.data.token)
          commit('SET_STATUS', response.data.status)
          commit('SET_STATUS_START_DATE', moment(response.data.statusStartDate).format('YYYY.MM.DD'))
          commit('SET_STATUS_END_DATE', moment(response.data.statusEndDate).format('YYYY.MM.DD'))
          commit('SET_STATUS_REASON', response.data.statusReason)
          commit('SET_MESSAGE', '')
          commit('SET_SID', response.data.sid)
          commit('SET_PUBLIC_ENC_KEY', response.data.publicEncKey)
          response.data.email = user.email
          localStorage.setItem('user', JSON.stringify(response.data))
          // 토큰 만료시간 설정
          let dateTime = new Date()
          dateTime.setMinutes(dateTime.getMinutes() + 4)
          dateTime.setSeconds(dateTime.getSeconds() + 40)
          let tokenExpiredTime = dateTime // (실 운영 시 발급 후 5분까지 유효하므로 4분 40초마다 갱신)
          localStorage.setItem('tokenExpiredTime', String(tokenExpiredTime))
          resolve()
        } else {
          commit('loginFailure', response.message)
          reject()
        }
      }).catch(error => {
        commit('loginFailure', error)
        reject()
      })
    })
  },
  logout({ commit }) {
    AuthService.logout()
    commit('logout')
  },
  register({ commit }, user) {
    return AuthService.register(user).then(
        response => {
          commit('registerSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('registerFailure')
          return Promise.reject(error.response.data)
        }
    )
  },
  passwordVerify({ commit }, strData) {
    return new Promise((resolve, reject) => {
      AuthService.passwordVerify(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnSuccess', response)
          resolve()
        } else {
          commit('returnFailure', response)
          reject()
        }
      }).catch(error => {
        commit('returnFailure', error)
        reject()
      })
    })
  },
  resetPassword({ commit }, strData) {
    return new Promise((resolve, reject) => {
      AuthService.resetPassword(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnSuccess', response)
          resolve()
        } else {
          commit('returnFailure', response)
          reject()
        }
      }).catch(error => {
        commit('returnFailure', error)
        reject()
      })
    })
  },
  refreshToken ({ commit }, jsonData) {
    return new Promise((resolve, reject) => {
      AuthService.refreshToken(jsonData).then(response => {
        if(response.code === 'OK') {
          commit('SET_TOKEN', response.token)
           let user = JSON.parse(localStorage.getItem('user'))
          user.token = response.token
          user.email = jsonData.email
          localStorage.setItem('user', JSON.stringify(user))
          // if(response.token !== ''){ // 토큰이 정상적으로 발급되었을 경우
          // 토큰 만료시간 설정
          let dateTime = new Date()
          dateTime.setMinutes(dateTime.getMinutes() + 4)
          dateTime.setSeconds(dateTime.getSeconds() + 40)
          let tokenExpiredTime = dateTime // (실 운영 시 발급 후 5분까지 유효하므로 4분 40초마다 갱신)
          localStorage.setItem('tokenExpiredTime', String(tokenExpiredTime))
          // }
          resolve()
        } else {
          commit('loginFailure', response.message)
          reject()
        }
      }).catch(error => {
        commit('loginFailure', error)
        reject()
      })
    })
  },
}

const mutations = {
  returnSuccess(state, response) {
    state.returnJson = response
  },
  SET_EMAIL(state, email) {
    state.email = email
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_STATUS(state, status) {
    state.status = status
  },
  SET_MESSAGE(state, message) {
    state.message = message
  },
  SET_STATUS_START_DATE(state, statusStartDate) {
    state.statusStartDate = statusStartDate
  },
  SET_STATUS_END_DATE(state, statusEndDate) {
    state.statusEndDate = statusEndDate
  },
  SET_STATUS_REASON(state, statusReason) {
    state.statusReason = statusReason
  },
  SET_SID(state, sid) {
    state.sid = sid
  },
  SET_PUBLIC_ENC_KEY(state, publicEncKey) {
    state.publicEncKey = publicEncKey
  },
  loginFailure(state, message) {
    state.email = ''
    state.token = ''
    state.status = ''
    state.statusStartDate = ''
    state.statusEndDate = ''
    state.statusReason = ''
    state.message = message
  },
  logout(state) {
    state.status = {}
    state.email = ''
    state.token = ''
    state.status = ''
  },
  registerSuccess(state) {
    state.status = {}
  },
  registerFailure(state) {
    state.status = {}
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

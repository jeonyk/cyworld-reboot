import MemberService from '../../services/member-service'

const state = {
  certification: '',
  returnJson: {},
  token: '',
  status: '',
  statusStartDate: '',
  statusEndDate: '',
  statusReason: '',
  message: '',
  findedIdsData: {},
  memberAuthInfo: {},
  memberAuthType: '',
  resetPasswordEmail: '',
  agreementLocation: '',
  agreementMarketing: '',
  legalData:{},
  htmlPathLIST: [],
  leaveInfo:{},
  subMail:{},
  memberDataForm:{},
}
const actions = {


  certification ({ commit }, strData) {

    return new Promise((resolve, reject) => {
      MemberService.certification(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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
  passRequest ({ commit }, strData) {

    return new Promise((resolve, reject) => {
      MemberService.passRequest(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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
  passResult ({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.passResult(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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
  danalready({ commit },strData) {
      return new Promise((resolve, reject) => {
      MemberService.danalready(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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
  danalconfirm({ commit },strData) {
      return new Promise((resolve, reject) => {
      MemberService.danalconfirm(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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

  findId({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.findId(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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

  findIdsInfo({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.findIdsInfo(strData).then(response => {
        var params = strData.split('||');
        response.paramName = params[0];
        response.paramCountryCode = params[1];
        response.paramPhone = params[2];
        console.log("response", response);
        if(response.code === 'OK') {
          commit('SET_FINDED_IDS_LIST', response)
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

  findIdsCi({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.findIdsCi(strData).then(response => {
        console.log("response", response);
        if(response.code === 'OK') {
          commit('SET_FINDED_IDS_LIST', response)
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

  findPassword({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.findPassword(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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

  findCi({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.findCi(strData).then(response => {
        console.log(response);
        if(response.code === 'OK') {
          commit('returnFailure', response)
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

  verifyEmail({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.verifyEmail(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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

  registnew({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.registnew(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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

  termslatest({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.termslatest(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
          resolve()
          for(var i =0 ; i < response.data.length ; i++){
          MemberService.htmlSearch(response.data[i].htmlPath).then(res => {
            commit('SET_HTMLPATH_LIST', res)
            resolve()
          })
          }
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

  /*latestTermslatest({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.latestTermslatest(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
          resolve()
          MemberService.htmlSearch(response.data[0].htmlPath).then(res => {
            commit('SET_POLICY', res)
            resolve()
          })
        } else {
          commit('returnFailure', response)
          reject()
        }
      }).catch(error => {
        commit('returnFailure', error)
        reject()
      })
    })
  },*/
  emailcheck({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.emailcheck(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  //보조 이메일 설정
  subemailCheck({ commit }) {
    return new Promise((resolve, reject) => {
      MemberService.subemailCheck().then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  //보조 이메일 삭제
  subemailDelete({ commit }) {
    return new Promise((resolve, reject) => {
      MemberService.subemailDelete().then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  subemailSelect({ commit }) {
    return new Promise((resolve, reject) => {
      MemberService.subemailSelect().then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('SET_SUB_MAIL', response)
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
  //내 정보 갱신
  myInfoUpdateTxid({ commit }, params) {
    return new Promise((resolve, reject) => {
      MemberService.myInfoUpdateTxid(params).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  //내 정보 갱신 Txid 없을때 period
  myInfoUpdate({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.myInfoUpdate(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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

  subemail({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.subemail(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  periodSetting({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.periodSetting(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  settingTerms({ commit }, strData) {
  return new Promise((resolve, reject) => {
    MemberService.settingTerms(strData).then(response => {
      console.log(response);
      if (response.code === 'OK') {
        commit('returnFailure', response)
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
  marketingChannel({ commit }, strData) {
    return new Promise((resolve, reject) => {
      MemberService.marketingChannel(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  infoTerms({ commit }) {
    return new Promise((resolve, reject) => {
      MemberService.infoTerms().then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  infoMarketingChannel({ commit }) {
    return new Promise((resolve, reject) => {
      MemberService.infoMarketingChannel().then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  partnerList({ commit }) {
    return new Promise((resolve, reject) => {
      MemberService.partnerList().then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  partnerDelete({ commit },strData) {
    return new Promise((resolve, reject) => {
      MemberService.partnerDelete(strData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
          commit('returnFailure', response)
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
  joinDate({ commit }) {
    return new Promise((resolve, reject) => {
      MemberService.joinDate().then(response => {
        console.log(response);
        if (response.code === 'OK') {
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
  deleteMember({ commit }, jsonData) {
    return new Promise((resolve, reject) => {
      MemberService.deleteMember(jsonData).then(response => {
        console.log(response);
        if (response.code === 'OK') {
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
  setMemberAuthType({ commit }, type) {
    commit('SET_MEMBER_AUTH_TYPE', type)
  },

  setMemberAuthInfo({ commit }, json) {
    commit('SET_MEMBER_AUTH_INFO', json)
  },

  setResetPasswordEmail({ commit }, email) {
    commit('SET_RESET_PASSWORD_EMAIL', email)
  },

  setAgreementLocation({ commit }, type) {
    commit('SET_AGREEMENT_LOCATION',type)
  },

  setAgreementMarketing({ commit }, type) {
    commit('SET_AGREEMENT_MARKETING',type)
  },

  setLegalData({ commit }, json) {
    commit('SET_LEGAL_DATA', json)
  },

  setLeaveInfo({ commit }, json) {
    commit('SET_LEAVE_INFO', json)
  },

  setMemberDataForm({ commit }, json) {
    commit('SET_MEMBER_DATA_FORM', json)
  }
}

const mutations = {

  returnSuccess(state, response) {
    state.returnJson = response
  },
  returnFailure(state, response) {
    state.returnJson = response
  },
  SET_FINDED_IDS_LIST(state, response) {
    state.findedIdsData = response
  },
  SET_MEMBER_AUTH_INFO(state, json) {
    state.memberAuthInfo = json
  },
  SET_MEMBER_AUTH_TYPE(state, type) {
    state.memberAuthType = type
  },
  SET_RESET_PASSWORD_EMAIL(state, email) {
    state.resetPasswordEmail = email
  },
  SET_AGREEMENT_LOCATION(state, type) {
    state.agreementLocation = type
  },
  SET_AGREEMENT_MARKETING(state, type) {
    state.agreementMarketing = type
  },
  SET_LEGAL_DATA(state, json) {
    state.legalData = json
  },
  SET_HTMLPATH_LIST(state, htmlPathLIST) {
    state.htmlPathLIST.push(htmlPathLIST)
  },
  SET_LEAVE_INFO(state, json) {
    state.leaveInfo = json
  },
  SET_SUB_MAIL(state, json) {
    state.subMail = json
  },

  SET_MEMBER_DATA_FORM(state, json) {
    state.memberDataForm = json
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

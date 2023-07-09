import CyhomeService from '../../services/cyhome-service'

const state = {
  profileJson: {},
  friendJson: {},
  friendSayJson: {},
  friendReceivingJson: {},
  friendSendingJson: {},
  bookmarkJson: {},
  monihomepyProfileJson: {},
  returnJson: {},
  profileCardJson: {},
  successJson: {},
  friendBirthJson: {},
  friendSayDetailJson: {},
  searchFriendJson: {},
  searchBookmarkJson: {}
};
const actions = {
  guestbook({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.guestbook(strData)
        .then((response) => {
          console.log(response);
          if (response.code === "OK") {
            commit("returnFailure", response);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeProfile({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeProfile(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_PROFILE", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeRecommend({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeRecommend(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_RECOMMEND", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeFriend({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeFriend(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_FRIEND", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeFriendDelete({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeFriendDelete(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeFriendReceiving({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeFriendReceiving(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_FINDED_RECEIVING_LIST", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeFriendSending({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeFriendSending(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_FINDED_SENDING_LIST", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeAcceptFriendReceiving({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeAcceptFriendReceiving(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeRefuseFriendReceiving({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeRefuseFriendReceiving(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeCancelFriendSending({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeCancelFriendSending(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeFriendSay({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeFriendSay(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_FINDED_SAY_LIST", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeFriendSayRegister({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeFriendSayRegister(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_FINDED_SAY_LIST", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeBookmark({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeBookmark(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_BOOKMARK", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  minihompyProfile({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.minihompyProfile(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_MINIHOMEPY_PROFILE", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  contentsCount({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.contentsCount(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_CONTENTS_COUNT", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  profileCard({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.profileCard(strData)
        .then((response) => {
          if (response.code === "OK") {
            commit("SET_PROFILE_CARD", response.data);
            resolve();
          } else {
            commit("returnFailure", response);
            reject();
          }
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  buttonBookmarkDelete({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.buttonBookmarkDelete(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },

  buttonBookmarkRegister({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.buttonBookmarkRegister(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },

  friendRequest({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.friendRequest(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },
  cylifeFriendBirth({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.cylifeFriendBirth(strData)
        .then((response) => {
          commit("SET_FRIEND_BIRTH", response.data);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },

  friendSayDetail({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.friendSayDetail(strData)
        .then((response) => {
          commit("SET_FRIEND_SAY_DETAIL", response.data.elements);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },

  searchFriend({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.searchFriend(strData)
        .then((response) => {
          commit("SET_SEARCH_FRIEND", response.data);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },

  searchBookmark({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.searchBookmark(strData)
        .then((response) => {
          commit("SET_SEARCH_BOOKMARK", response.data);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },

  blockCylifeFriend({ commit }, strData) {
    return new Promise((resolve, reject) => {
      CyhomeService.blockCylifeFriend(strData)
        .then((response) => {
          commit("returnJson", response);
          resolve();
        })
        .catch((error) => {
          commit("returnFailure", error);
          reject();
        });
    });
  },

  // buttonPinRegister({ commit }, strData) {
  //   return new Promise((resolve, reject => {
  //     CyhomeService.
  //   }))
  // }
};

const mutations = {
  returnSuccess(state, response) {
    state.returnJson = response;
  },
  returnFailure(state, response) {
    state.returnJson = response;
  },
  returnJson(state, response) {
    state.returnJson = response;
  },
  SET_PROFILE(state, response) {
    state.profileJson = response;
  },
  SET_RECOMMEND(state, response) {
    state.recommendJson = response;
  },
  SET_FRIEND(state, response) {
    state.friendJson = response;
  },
  SET_FINDED_SAY_LIST(state, response) {
    state.friendSayJson = response;
  },
  SET_FINDED_RECEIVING_LIST(state, response) {
    state.friendReceivingJson = response;
  },
  SET_FINDED_SENDING_LIST(state, response) {
    state.friendSendingJson = response;
  },
  SET_BOOKMARK(state, response) {
    state.bookmarkJson = response;
  },
  SET_MINIHOMEPY_PROFILE(state, response) {
    state.monihomepyProfileJson = response;
  },
  SET_FINDED_IDS_LIST(state, response) {
    state.findedIdsData = response;
  },
  SET_MEMBER_AUTH_INFO(state, json) {
    state.memberAuthInfo = json;
  },
  SET_MEMBER_AUTH_TYPE(state, type) {
    state.memberAuthType = type;
  },
  SET_RESET_PASSWORD_EMAIL(state, email) {
    state.resetPasswordEmail = email;
  },
  SET_AGREEMENT_LOCATION(state, type) {
    state.agreementLocation = type;
  },
  SET_AGREEMENT_MARKETING(state, type) {
    state.agreementMarketing = type;
  },
  SET_LEGAL_DATA(state, json) {
    state.legalData = json;
  },
  SET_CONTENTS_COUNT(state, json) {
    state.contentsCountJson = json;
  },
  SET_PROFILE_CARD(state, data) {
    state.profileCardJson = data;
  },
  SET_FRIEND_BIRTH(state, data) {
    state.friendBirthJson = data;
  },
  SET_FRIEND_SAY_DETAIL(state, data) {
    state.friendSayDetailJson = data;
  },
  SET_SEARCH_FRIEND(state, data) {
    state.searchFriendJson = data;
  },
  SET_SEARCH_BOOKMARK(state, data) {
    state.searchBookmarkJson = data;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor', 'wooh']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
  return reg.test(email)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmailSpecialStr(email) {
  // 허용 특문 : '-',  '_', '.', '@'
  const reg =  /[`~!#$%^&*|\\\'\";:\/\(\)<>,=+?]/gi // eslint-disable-line
  return !reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validNumber(str) {
  const reg = /[0-9]$/g // eslint-disable-line
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @param {string} password
 * @returns {Boolean}
 */
export function validPassword(password) {
  const reg = /^(?=.*[a-z])(?=.*[A-Z]).{8,20}$|(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}$|(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,20}$/
  return reg.test(password)
}

/**
 * @param {string} password
 * @returns {Boolean}
 */
export function validSpclChrct(password) {
  const reg =  /^[a-zA-Z0-9!@#$%^&*()_+|<>?~,./;{}\':"-=]*$/  // eslint-disable-line
  return !reg.test(password)
}
/**
 * @param {string} password
 * @returns {Boolean}
 */
export function continuousPwd(password) {
  var o, d, p, n = 0, l = 3;
  for(var i=0; i<password.length; i++){
    var c = password.charCodeAt(i);
    if(i > 0 && (p = o - c) >-2 && p < 2 && (n = p == d ? n+1 : 0) > l-3) {
      return true;
    }
    d = p, o = c;
  }
  return false
}
/**
 * @param {string} password
 * @returns {Boolean}
 */
export function samePwd(password) {
  const reg = /(\w)\1\1/
  return reg.test(password)
}






import Bowser from "bowser";

const state = {
    isDesktop : Bowser.getParser(window.navigator.userAgent).getPlatformType() === 'desktop',
    isMobile : Bowser.getParser(window.navigator.userAgent).getPlatformType() === 'mobile',
    isIOS : Bowser.getParser(window.navigator.userAgent).getOSName() === 'iOS',
    isAndroid : Bowser.getParser(window.navigator.userAgent).getOSName() === 'Android',
}

export default {
    namespaced: true,
    state,
}
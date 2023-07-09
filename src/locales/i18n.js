import Vue from "vue";
import VueI18n from "vue-i18n"
import ko from './ko.json'
import en from './en.json'

Vue.use(VueI18n)


export const i18n = new VueI18n({
    locale: 'ko',
    messages: {en, ko}
})
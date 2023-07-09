const methods = {

    isEmpty: (value) => {


        if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
            alert('empty!!');
            return true;
        } else {
            alert('not empty!');
            return false;


        }


    }

};
export default {
    install(Vue) {
        Vue.prototype.$isEmpty = methods.isEmpty // global method type�쑝濡� �젙�쓽
    }
}

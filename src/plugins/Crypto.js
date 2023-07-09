import Vue from 'vue';
import crypto from 'crypto';

const ecc = require('./ECC');

Vue.use(crypto);

class Crypto {
    makeRandom(min, max) {
        var RandVal = Math.floor(Math.random() * (max - min + 1)) + min;
        return RandVal;
    }

    getRandom(len = 32) {
        var buffer = [];
        var chars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9,!,@,#,$,%,^,&,*".split(",");
        for (var i = 0; i < len; i++) {
            var random = this.makeRandom(0, 69);
            buffer.push(chars[random]);
        }
        return buffer.join('');
    }
    getRandomInt(len = 16) {
        var buffer = [];
        var chars = "0,1,2,3,4,5,6,7,8,9".split(",");
        for (var i = 0; i < len-1; i++) {
            var random = this.makeRandom(0, 9);
            buffer.push(chars[random]);
        }
        return '1'+buffer.join('');
    }

    getEncryptKey(publicKey, key) {
        const encKey = ecc.encrypt(publicKey, key);
        return encKey;
    }

    getAseEncrypt(key, val) {
        var ENC_KEY = key;
        var IV = ENC_KEY.substr(0, 16);
        let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
        let encrypted = cipher.update(val, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }

    getAesDiscrypt(key, val) {
        var ENC_KEY = key;
        var IV = ENC_KEY.substr(0, 16);
        let cipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
        let encrypted = cipher.update(val, 'base64', 'utf8');
        encrypted += cipher.final('utf8');
        return encrypted;
    }

    getSha256(val, salt) {
        var data = val+salt;
        return crypto.createHash('sha256').update(data).digest('base64');
    }
}

export default new Crypto();

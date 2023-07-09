/**
 * Compatible with https://github.com/IBM-Swift/BlueECC
 * Compatible with kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA256AESGCM (iOS/Mac)
 */

"use strict";

const crypto = require("crypto");

module.exports.encrypt = function (key, data) {
	const msg = crypto.privateEncrypt(key, Buffer.from(data, "utf8")).toString('base64')
	return msg;
}

module.exports.decrypt = function (key, data) {
	const msg = crypto.publicDecrypt(key, Buffer.from(data, "base64")).toString('utf8')
	return msg;
}

module.exports.verify = function (publicKey, data, signature) {

	const verifier = crypto.createVerify("RSA-SHA256");
	verifier.update(typeof data === 'string' ? Buffer.from(data, "utf8") : data);
	return verifier.verify(
		publicKey,typeof signature === 'string' ? Buffer.from(signature, 'base64') : signature,
	)
}

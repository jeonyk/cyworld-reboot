/**
 * Compatible with https://github.com/IBM-Swift/BlueECC
 * Compatible with kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA256AESGCM (iOS/Mac)
 */

"use strict";

const ecc = require("./ECC");

module.exports.auth = Buffer.from(ecc.extractKeyData(`-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+4avzSADwqAcv3w0VnQmhAjErotl
ZNbDyUqhOb0Iw2VlZn5zyReXMHt37EjvU4TF6u7UMTgsIN9peUDQt/YMGg==
-----END PUBLIC KEY-----`), 'base64');

module.exports.member = Buffer.from(ecc.extractKeyData(`-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5TTvDvDfJdsKTUWKGic9xYeBHFcN
G8kFe+APfbfvpIAMArtySimfTOBiVcJX5rgTBzpQSuZiDg0Sg2AwbkltGQ==
-----END PUBLIC KEY-----
`), 'base64');
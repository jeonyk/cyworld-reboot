

Object.defineProperty(exports, '__esModule', {
    value: true,
});
// eslint-disable-next-line no-use-before-define
exports.default = isStrongPassword;

const upperCaseRegex = /^[A-Z]$/;
const lowerCaseRegex = /^[a-z]$/;
const numberRegex = /^[0-9]$/;
// eslint-disable-next-line no-useless-escape
const symbolRegex = /^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
const defaultOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    maxLength: 20,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10,
};
/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/

function countChars(str) {
    const result = {};
    Array.from(str).forEach((char) => {
        const curVal = result[char];

        if (curVal) {
            result[char] += 1;
        } else {
            result[char] = 1;
        }
    });
    return result;
}
/* Return information about a password */


function analyzePassword(password) {
    const charMap = countChars(password);
    const analysis = {
        length: password.length,
        uniqueChars: Object.keys(charMap).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0,
    };
    Object.keys(charMap).forEach((char) => {
        /* istanbul ignore else */
        if (upperCaseRegex.test(char)) {
            analysis.uppercaseCount += charMap[char];
        } else if (lowerCaseRegex.test(char)) {
            analysis.lowercaseCount += charMap[char];
        } else if (numberRegex.test(char)) {
            analysis.numberCount += charMap[char];
        } else if (symbolRegex.test(char)) {
            analysis.symbolCount += charMap[char];
        }
    });
    return analysis;
}

function scorePassword(analysis, scoringOptions) {
    let points = 0;
    points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
    points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;

    if (analysis.lowercaseCount > 0) {
        points += scoringOptions.pointsForContainingLower;
    }

    if (analysis.uppercaseCount > 0) {
        points += scoringOptions.pointsForContainingUpper;
    }

    if (analysis.numberCount > 0) {
        points += scoringOptions.pointsForContainingNumber;
    }

    if (analysis.symbolCount > 0) {
        points += scoringOptions.pointsForContainingSymbol;
    }

    return points;
}

function isStrongPassword(str) {
    // eslint-disable-next-line prefer-rest-params
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const analysis = analyzePassword(str);

    // 옵션 없으면 디폴트옵션
    options = options.length === 0 ? defaultOptions : options[0];

    if (options.returnScore) {
        return scorePassword(analysis, options);
    }

    console.log(str);

    // 옵션 추가(비밀번호와 ID 일치 시 VALIDATION)
    let understandingFlag = true;

    if (options.understandingStr !== undefined) {
        understandingFlag = str === options.understandingStr ? false : understandingFlag;
    }
    const a = analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase;
    const b = analysis.lowercaseCount >= options.minLowercase && analysis.numberCount >= options.minNumbers;
    const c = analysis.lowercaseCount >= options.minLowercase && analysis.symbolCount >= options.minSymbols;
    const d = analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers;
    const e = analysis.uppercaseCount >= options.minUppercase && analysis.symbolCount >= options.minSymbols;
    const f = analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;

    return analysis.length >= options.minLength && analysis.length <= options.maxLength && (a || b || c || d || e || f) && understandingFlag;
}

module.exports = exports.default;
module.exports.default = exports.default;

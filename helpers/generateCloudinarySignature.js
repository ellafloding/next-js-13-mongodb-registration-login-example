import {sign} from "jsonwebtoken";

// export function generateSignature(paramsToSign, callback) {
//
//     fetch(`/api/pictures/sign`, {
//         method: "POST",
//         body: paramsToSign
//
//     })
//         .then((r) => r.json())
//         .then(({signature}) => {
//             callback(signature);
//         })
//
// }
const API_SECRET = 'RtEQlGhyTQYVVfgzLwn-quaBR2U';
const crypto = require('crypto');
export function createSignature(timestamp){
    const params = {
        timestamp: timestamp
    }
    const signature = crypto
        .createHash('sha1')
        .update(`${params}${API_SECRET}`)
        .digest('hex');

    return signature;

}


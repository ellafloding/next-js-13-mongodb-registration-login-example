// import {v2 as cloudinary} from "cloudinary";
//
// // require('dotenv').config()
// export default async function handler(req,res) {
//     const body = JSON.parse(req) || {};
//     const {timestamp} = body;
//
//
//     const API_SECRET = "RtEQlGhyTQYVVfgzLwn-quaBR2U";
//
//     try{
//         const signature = cloudinary.utils.api_sign_request(timestamp,
//             API_SECRET
//         );
//         res.json({ signature })
//     } catch (error){
//         console.log(error);
//         res.send(error);
//     }
//     // const signUpload = async () => {
//     //     const timestamp = Math.round((new Date).getTime()/1000);
//     //     const signature = cloudinary.utils.api_sign_request(timestamp, API_SECRET)
//     //     return {timestamp, signature}
//     // }
//
//     // try{
//     //     const signature = cloudinary.utils.api_sign_request({
//     //         paramsToSign,
//     //         },
//     //         API_SECRET
//     //     );
//     //
//     //     res.json({ signature })
//     // } catch (error){
//     //     console.log(error);
//     //     res.send(error);
//     // }
//
// }

import { v2 as cloudinary } from "cloudinary";

export default async function handler(req, res) {
    const body = JSON.parse(req.body) || {};
    const { paramsToSign } = body;

    const API_SECRET = "RtEQlGhyTQYVVfgzLwn-quaBR2U";
    console.log(paramsToSign);
    const timestamp = Math.round((new Date).getTime()/1000);
    const apiSecret = API_SECRET;

    try{
        const signature = cloudinary.utils.api_sign_request(timestamp,
            API_SECRET
        );
        res.json({ signature })
    } catch (error){
        console.log(error);
        res.send(error);
    }
    // try {
    //     const signature = cloudinary.utils.api_sign_request(
    //         paramsToSign,
    //         apiSecret
    //     );
    //     res.json({ signature });
    // } catch (error) {
    //     console.log(error);
    //     res.send(error);
    // }
}
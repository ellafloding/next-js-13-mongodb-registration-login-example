// import { useState } from 'react';
// import Head from 'next/head'
import styles from '/styles/Home.module.css'
// import {generateSignature} from "../../helpers/generateCloudinarySignature";
import {func} from "prop-types";
// import { useState } from 'react';
// import Head from 'next/head';


import { useState } from "react";
// import styles from "../styles/Home.module.css";
import {createSignature} from "../../helpers/generateCloudinarySignature";
import Head from "next/head";
export default function Home() {
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();


    /**
     * handleOnChange
     * @description Triggers when the file input changes (ex: when a file is selected)
     */

    // function handleOnChange(changeEvent) {
    //     const reader = new FileReader();
    //
    //     reader.onload = function(onLoadEvent) {
    //         setImageSrc(onLoadEvent.target.result);
    //         setUploadData(undefined);
    //     }
    //
    //         reader.readAsDataURL(changeEvent.target.files[0]);
    //
    // }

    /**
     * handleOnSubmit
     * @description Triggers when the main form is submitted
     */

    const cloudinaryAdam = "dmhozrlru";
    const cloudinaryElla = "dgbatwabz";
    const uploadAdam = "tcsyqjkq";
    const uploadELla ='my-uploads';
    const uploadSigned = "ml_default";
    const API_KEY = "663938968425976";
    const API_SECRET = "RtEQlGhyTQYVVfgzLwn-quaBR2U";

    async function handleOnSubmit(event) {
        event.preventDefault();

       // var id = document.getElementById('file')

        var timestamp = Math.round((new Date)/1000);

        // signature = generateSignature(()=>{
        //     console.log('signature generated');
        // });

        const signature = createSignature(timestamp);

        const form = event.currentTarget;
        const fileInput = Array.from(form.elements).find(({name}) => name === 'file')
        console.log(fileInput);

        const formData = new FormData();
        const tags = document.getElementById("tags").value;

        for( const file of fileInput.files){
            formData.append('file', file);
        }

        formData.append('upload_preset', uploadSigned);
        formData.append('tags', tags);
        formData.append('api_key', API_KEY);
        formData.append('timestamp', timestamp);
        formData.append('signature', signature);


        const data = await fetch('https://api.cloudinary.com/v1_1/dgbatwabz/image/upload?api_key=663938968425976&timestamp=' + timestamp+ '&signature=' + signature, {
            method: 'POST',
            body: formData,
            // apiKey: API_KEY,
            // uploadSignature: signature

        }).then(r => r.json());

        setImageSrc(data.secure_url);
        setUploadData(data);

        console.log('data', data);

    }
    //
    //     const [isImageUploaded, setIsImageUploaded] = useState(false);
    // const cloudinaryAdam = "dmhozrlru";
    // const cloudinaryElla = "dgbatwabz";
    // const uploadAdam = "tcsyqjkq";
    // const uploadELla ='my-uploads';
    // const uploadSigned = "ml_default";
    // const API_KEY = "663938968425976";
    //     async function handleOnSubmit() {
    //         const widget = window.cloudinary.createUploadWidget(
    //             {
    //                 cloudName: cloudinaryElla,
    //                 uploadSignature: generateSignature,
    //                 apiKey: API_KEY,
    //                 resourceType: "image",
    //             },
    //             (error, result) => {
    //                 if (!error && result && result.event === "success") {
    //                     console.log("Done! Here is the image info: ", result.info);
    //                     setIsImageUploaded(true);
    //                 } else if (error) {
    //                     console.log(error);
    //                 }
    //             }
    //         );
    //         widget.open();
    //     }


        return (
            <div className={styles.container}>
                <Head>
                    <title>Image Uploader</title>
                    <meta name="description" content="Upload your image to Cloudinary!"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Ladda upp bild
                    </h1>

                    <p className={styles.description}>
                        Ladda upp dina bilder till Cloudinary.
                    </p>

                    <form className={styles.form} method="post"
                        // onChange={handleOnChange}
                          onSubmit={handleOnSubmit}>
                        <p>
                            <input type="file" id="file" name="file"/>
                        </p>

                        <p>
                            <input type="text" id="tags" placeholder={"Tags"} required={true}/>
                        </p>


                        {/*<img src={imageSrc} />*/}

                        {!uploadData && (
                            <p>
                                <button>Upload Files</button>
                            </p>
                        )}

                        {uploadData && (
                            <h4> Bilddata: </h4>
                        )}
                        {uploadData && (
                            <code>
                                <pre>{JSON.stringify(uploadData, null, 2)}</pre>
                            </code>
                        )}
                    </form>
                </main>

            </div>
        )

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.vertical}>
    //             <button
    //                 className={styles.button}
    //                 type="button"
    //                 onClick={handleOnSubmit}
    //             >
    //                 Upload image
    //             </button>
    //         </div>
    //
    //         {isImageUploaded ? (
    //             <>
    //                 <div>Successfully uploaded</div>
    //             </>
    //         ) : null}
    //     </div>
    // );
    }

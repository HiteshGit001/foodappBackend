import admin from 'firebase-admin';
import serviceAccount from "../../serviceKey.json" assert {type: "json"};
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import multer from "multer";
import { initializeApp } from "firebase/app";

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: "gs://foodorderapp-18590.appspot.com"
// });
initializeApp(serviceAccount);
const storage = getStorage();

export const upload = multer({ storage: multer.memoryStorage() });

export const uploadDoc = async (req, res) => {
    const { foldername, categoryname, categoryId } = req.body;
    try {
        const dateTime = giveCurrentDateTime();
        const storageRef = ref(storage, `${foldername}/${req.file.originalname + "       " + dateTime}`);
        const metadata = {
            contentType: req.file.mimetype,
        };
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);

        return res.send({
            message: 'file uploaded to firebase storage',
            name: req.file.originalname,
            type: req.file.mimetype,
            categoryname,
            categoryId,
            downloadURL: downloadURL
        })
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}
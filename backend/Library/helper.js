/*---------------------------------------------------------*/
import CryptoJS from "crypto-js";
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
function Encrypter(data){
    return CryptoJS.AES.encrypt(data , process.env.SEC_KEY).toString()
}

function Decrypter(data){
    return CryptoJS.AES.decrypt(data , process.env.SEC_KEY).toString(CryptoJS.enc.Utf8)
}

/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
export{Encrypter , Decrypter };
/*---------------------------------------------------------*/
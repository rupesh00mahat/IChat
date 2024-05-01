import React from "react";
import "../style.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage,db} from '../components/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc, setDoc} from 'firebase/firestore';

function RegisterScreen(props) {
  const submitForm = async(e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const image = e.target[3].files[0];

   try{
    let res = await createUserWithEmailAndPassword(auth, email, password).then((userCredentials)=>{
        const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, image);
// 
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(userCredentials.user,{ displayName,
        photoURL: downloadURL,
}        );
await setDoc(doc(db, "users",userCredentials.user.uid),{
    uid: userCredentials.user.uid,
    displayName,
    email,photoURL: downloadURL
})
    });
  }
);
    })
   }catch(e){
    console.log(e);
   }



// 

  };
  document.title = "Ichat || Login Screen";

  return (
    <div id="register-screen">
      <div className="register-wrapper">
        <h2>IChat </h2>
        <form action="" onSubmit={submitForm}>
          <input type="text" placeholder="Enter your Display Name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input type='file' />
          <label htmlFor="file">
            <FaCloudUploadAlt />
            <span>Choose your avatar</span>
          </label>

          <input type="submit" placeholder="Register" />
        </form>
        <p>
          Already have an account ? <span>Login Now!</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterScreen;

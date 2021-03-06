import React, { useState, useContext, useEffect } from 'react';
import firebase from "firebase/app"
import "firebase/firestore"
interface Props {
  children: React.ReactNode
}

export interface Project {
date: any,
id: string,
name: string,
tech: Array<string>,
text: string,
}


const FirebaseContext = React.createContext<Array<Project>>([]);


export const useFirebase = () => {
    return useContext(FirebaseContext);
  };

if (!firebase.apps.length) {
    firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }



const FirebaseContextProvider : React.FC<Props> = ({ children }) => {
    const db = firebase.firestore();


    const [projects, setprojects] = useState<Array<Project>>([])

    //TODO: gör en array med currentproject

    useEffect(() => { 
        if (db) {
            console.log("hello")
            const unsubscribe = db
        .collection('projects')
        .orderBy('date').limit(25) //show 25 latest documents
        .onSnapshot(querySnapshot => {
            const data : Array<any> = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setprojects(data); 
            console.log(data, "data")
        });
        return unsubscribe
        }
    }, [db]);



  return (
    <FirebaseContext.Provider
        value={projects}
    //   value={{
    //     //db: db,
    //     projects: projects,
    //   }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;

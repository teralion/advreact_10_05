import firebase from 'firebase';

export const appName = 'advreact-10-05-9f8df';

export const config = {
    apiKey: "AIzaSyCE_9Xm45N6g2szBFS5rBLycQOAqRgcN2I",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    messagingSenderId: "352655619160"
};

firebase.initializeApp(config);
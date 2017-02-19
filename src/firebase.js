import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAj0enJqFX2yxs55h-wX3naS6cEx20xG3E",
  authDomain: "react-quickstart-b7101.firebaseapp.com",
  databaseURL: "https://react-quickstart-b7101.firebaseio.com",
  storageBucket: "react-quickstart-b7101.appspot.com"
};

firebase.initializeApp(config);

class AuthGlobal {
  constructor() {
    this.observers = [];
    this.user = undefined;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userData = {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          uid: user.uid
        };
        console.log("Logged in: ", userData);
        this.user = userData;
      } else {
        console.log("Not logged in.");
        this.user = null;
      }
      // Let observers know
      this.observers.forEach(observer => {
        observer.call({}, this.user);
      });
    });
  }

  observeAuthState(callback) {
    this.observers.push(callback);
    callback.call({}, this.user);
  }

  authWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  signOut() {
    firebase.auth().signOut();
  }

}

// singleton
const Auth = new AuthGlobal();

export { Auth };




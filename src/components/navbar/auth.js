import firebase from './firebaseConfig'; 

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    await firebase.auth().signInWithPopup(provider);
    console.log('Logged in successfully');
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

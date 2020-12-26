import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication


const config = {
    apiKey: "AIzaSyBqg3TzabZRadE9KKOBTLYdJKQk-Opqn5U",
    authDomain: "crown-db-58230.firebaseapp.com",
    projectId: "crown-db-58230",
    storageBucket: "crown-db-58230.appspot.com",
    messagingSenderId: "1000682676217",
    appId: "1:1000682676217:web:c597608c889c293e496728"
}

// Initializes the App
firebase.initializeApp(config)

// Assigning your firebase authentication library
export const auth = firebase.auth()
// Assigning your firebase firestore library
export const firestore = firebase.firestore()


export const createUserProfileDocument = async (user, additionalData) => {
    
    console.log(user)

    if(!user) return

    const userRef = firestore.doc(`users/${user.uid}`)
    console.log(userRef)
    const snapShot = await userRef.get()
    //console.log(snapShot)
    if(!snapShot.exists){

        const {email,displayName}= user
        const createAt = new Date() 
        
        try{await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }
    catch(err){
        console.log('Error Creating Document '+err)
    }

    }
    return userRef

}

// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase
const firebaseConfig = {
    apiKey: "AIzaSyCmABSa8PsBP2A5t0tJhLvsVl25GTw-kFs",
    authDomain: "geemovies-6fa57.firebaseapp.com",
    projectId: "geemovies-6fa57",
    storageBucket: "geemovies-6fa57.appspot.com",
    messagingSenderId: "362120285352",
    appId: "1:362120285352:web:0187be461adfc4a9a5469d"
};
firebase.initializeApp(firebaseConfig)

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html"
    }).catch(error => {
        alert('Erro ao fazer logout!')
    })
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
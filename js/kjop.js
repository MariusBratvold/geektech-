// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMk2gPucuSHVSYK9QJrCjCrr1ykUk_WAk",
  authDomain: "geektech-49a5a.firebaseapp.com",
  databaseURL: "https://geektech-49a5a.firebaseio.com",
  projectId: "geektech-49a5a",
  storageBucket: "geektech-49a5a.appspot.com",
  messagingSenderId: "964699682673"
};
firebase.initializeApp(config);
let database = firebase.database();





// Button for kjøp
let btnKjop = document.getElementById("kjop");
btnKjop.addEventListener("click", kjop);
function kjop(e) {
    let varer = Array.from(document.querySelectorAll("input:checked "));
    let bestilling = varer.map(e => [e.value, e.dataset.name]);
    let navn = document.getElementById("land").value;
    let ref = database.ref("bestilling/" + navn);
    ref.set( bestilling );
}


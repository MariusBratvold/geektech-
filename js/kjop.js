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


// Tabell
{
    "bestilling" : [ null, {
      "antall" : 1,
      "kundenr" : 1,
      "pris" : "13 495",
      "varenavn" : "Huawei Matebook X"
    }, {
      "antall" : 1,
      "kundenr" : 2,
      "pris" : "21 990",
      "varenavn" : "Microsoft Surface Book 2"
    }, {
      "antall" : 1,
      "kundenr" : 3,
      "pris" : "19 990",
      "varenavn" : "HP Spectre x360"
    }, {
      "antall" : 1,
      "kundenr" : 4,
      "pris" : "9 490",
      "varenavn" : "Microsoft Surface Laptop"
    }, {
      "antall" : 1,
      "kundenr" : 5,
      "pris" : "15 989",
      "varenavn" : "Apple Macbook Pro 13"
    }, {
      "antall" : 1,
      "kundenr" : 6,
      "pris" : "7 490",
      "varenavn" : "Lenovo Legion Y520T"
    }, {
      "antall" : 1,
      "kundenr" : 7,
      "pris" : "13 990",
      "varenavn" : "OMEN av HP 880-121"
    }, {
      "antall" : 1,
      "kundenr" : 8,
      "pris" : "9 490",
      "varenavn" : "HP Pavilion Power 580-189"
    }, {
      "antall" : 1,
      "kundenr" : 9,
      "pris" : "4 990",
      "varenavn" : "Acer Revo Cube RN-76"
    }, {
      "antall" : 1,
      "kundenr" : 10,
      "pris" : "20 489",
      "varenavn" : "Apple iMac 27"
    } ],
    "demo" : true
  }
  


// Button for kjøp
let btnKjop = document.getElementById("kjop");
btnKjop.addEventListener("click", kjop);
function kjop(e) {
    let varer = Array.from(document.querySelectorAll("input:checked "));
    let bestilling = varer.map(e => [e.value, e.dataset.name]);
    console.log(bestilling);
}


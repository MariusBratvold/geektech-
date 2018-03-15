function handlekurv() {

    var config = {
        apiKey: "AIzaSyBMk2gPucuSHVSYK9QJrCjCrr1ykUk_WAk",
        authDomain: "geektech-49a5a.firebaseapp.com",
        databaseURL: "https://geektech-49a5a.firebaseio.com",
        projectId: "geektech-49a5a",
        storageBucket: "geektech-49a5a.appspot.com",
        messagingSenderId: "964699682673"
      };
      firebase.initializeApp(config);

    let inpLand = document.getElementById("land");


    let btnLagreLand = document.getElementById("lagreland");
    btnLagreLand.addEventListener("click", lagreLand);


    function lagreLand(e) {
        let land = inpLand.value;
        let navn = inpRegion.value;
        let ref = database.ref("land/" + land);
        ref.set({ navn });
    }
}
    

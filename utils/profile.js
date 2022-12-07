document.addEventListener("DOMContentLoaded", function(event) {

    loadNavbar();
// Cambiar a node, testeo que en FIREBASE funciona bien
    var config = {
        apiKey: "AIzaSyCVmYvSsBTNHcm7mC8Ch9RgtbwKXEympbw",
        authDomain: "test-app-6d523.firebaseapp.com",
        projectId: "test-app-6d523",
        storageBucket: "test-app-6d523.appspot.com",
        messagingSenderId: "246780587604",
        appId: "1:246780587604:web:40117f60bcaeb7869147c1",
        measurementId: "G-QXT9P81Z8K",
        databaseURL: "https://test-app-6d523-default-rtdb.firebaseio.com/",
    };

    firebase.initializeApp(config);
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('users');

    const userListUI = document.getElementById("userList");

    var userInfo = null;

    let id_user = localStorage.getItem('id_user');
    usersRef.on("child_added", snap => {
        let user = snap.val();
        if(user['id_user'] == id_user){  
            userInfo = user;
            loadProfile(userInfo);
        }
       
    });

  
    })

   


function loadNavbar(){
   
    $('#containerNavBar').load('../navbar.html')
    setTimeout(function () {
        checkLogin()
    }, 100);

}

function checkLogin(){

    //obtenemos del alamcenamiento local , el id_user,username y password
    let id_user = localStorage.getItem('id_user');
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');

    //tengo que obtener toda la BAse de datos
    let db = localStorage.getItem('users');

    var myobj = JSON.parse(db);

    var flag = false;

   
    myobj.forEach(element => {

        if(element['id_user'] == id_user && element['username'] == username && element['password'] == password){
           flag = true;
        }
    });


    if(flag == false){
        window.location.href = "./login.html"
    }

    $('#textUsername').text(username)
    $(".div-login").show()
    


}

function loadProfile(infoUser){
    var id_user = localStorage.getItem('id_user')
    var username = localStorage.getItem('username')

   

    $('#username').val(infoUser.name)
    $('#postcode').val(infoUser.cp)
}


function logout() {

    localStorage.setItem("id_user", null);
    localStorage.setItem("username", null);
    localStorage.setItem("password", null);

    window.location.href = "./login.html"

}

document.addEventListener("DOMContentLoaded", function(event) {
    loadNavbar();
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

function logout() {

    localStorage.setItem("id_user", null);
    localStorage.setItem("username", null);
    localStorage.setItem("password", null);

    window.location.href = "./login.html"

}

// exports.logout = function (doc, req) {

// 	// log the user out
// 	session.logout();

// 	// redirect user to logoutok page
// 	return [null, utils.redirect(req, '/logoutok')]; redireccionar a la página de login
// };

// function logout()
// {
//   localStorage.setItem("data", data);
//   var user = localStorage.getItem("data");
//   user.rows.item(0).name;
//   localStorage.removeItem("data");
//   window.location.href = "signin.html";

// }
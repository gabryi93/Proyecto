document.addEventListener("DOMContentLoaded", function(event) {
   $('#containerNavBar').load('../navbar.html')
})


function login (){

    //tengo que obtener toda la BAse de datos
    let db = localStorage.getItem('users');

    var myobj = JSON.parse(db);

    
   //obtenemos del alamcenamiento local , el id_user,username y password

   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;
   let id_user = null;

   var flag = false;

   myobj.forEach(element => {

       if(element['username'] == username && element['password'] == password){
        //se que este es el uuario que se está intentando logear
          id_user = element['id_user'];
          flag = true;
       }
   });


   if(flag == false){
       document.getElementById('containerError').innerHTML = '<p style="red">Algo no coincide, intentalo de nuevo</p>'
   }else{

    localStorage.setItem('id_user' ,id_user);
    localStorage.setItem('username' ,username);
    localStorage.setItem('password' ,password);

    window.location.href = "./index.html"
   }


}
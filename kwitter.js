function login(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    user_name = document.getElementById("gmail").value;
    localStorage.setItem("gmail", gmail);
    user_name = document.getElementById("phone").value;
    localStorage.setItem("phone", phone);
    window.location = "kwitter_room.html";

    
}
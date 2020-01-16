let nameUser = document.getElementsByClassName("userName");
let commentUser = document.getElementById("userComment");
let addCommentButton =  document.getElementById("submit");
let commentSection =  document.getElementsByClassName("seccionComments");

addCommentButton.addEventListener("click", function(event){
    event.preventDefault();
    if (nameUser[0].value === ''){
        alert("No es posible registrar un nombre vacio");
    }
    if (commentUser.value === ''){
        alert("No es posible registrar un comentario vacio");
    }
    else{
        let boxNameUser = document.createTextNode(nameUser[0].value)
        let commentNameUser = document.createTextNode(commentUser.value)
        let space = document.createElement("br");
        let separacion = document.createTextNode(" : ")
        commentSection[0].appendChild(boxNameUser);
        commentSection[0].appendChild(separacion);
        commentSection[0].appendChild(commentNameUser);
        commentSection[0].appendChild(space);
    }
    document.getElementsByClassName("userName") = "";
    document.getElementById("userComment") = "";
});
 
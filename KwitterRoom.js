function addRoom()
{
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
var x = localStorage.getItem("mytime");
//Fim do código
});});}
getData();
}
// var yo = 'ricardo'

// function nombre() {
//     document.getElementById("tu").innerHTML = (yo);
// }
// document.getElementById("ejecutar").onclick = function () {
//     nombre();
// }
// con este codigo ya creamos un boton que funiona

function capture() {
    function Person(name, age, number, date, day, lastname) {
        this.name = name;
        this.age = age;
        this.number = number;
        this.date = date;
        this.day = day;
        this.lastname = lastname;
    }
    var nameCapture = document.getElementById("name").value;
    var ageCapture = document.getElementById("age").value;
    var numberCapture = document.getElementById("number").value;
    var dateCapture = document.getElementById("date").value;
    var dayCapture = document.getElementById("day").value;
    var lastnameCapture = document.getElementById("lastname").value;

    newSubject = new Person(nameCapture, ageCapture, numberCapture, dateCapture, dayCapture, lastnameCapture)
    console.log(newSubject);
    add();
}
var database = [];

function add() {
    console.log("Running add")
    database.push(newSubject);
    console.log(database);
    document.getElementById("table").innerHTML += '<tbody><td>' + newSubject.name + '</td><td>' + newSubject.age + '</td><td>' + newSubject.number + '</td><td>' + newSubject.date + '</td><td>' + newSubject.day + '</td><td>' + newSubject.lastname + '</td></tbody>';
};
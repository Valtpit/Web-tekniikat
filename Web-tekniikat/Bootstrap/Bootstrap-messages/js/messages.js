/*let exampleEl = document.getElementById('esim')
let tooltip = new bootstrap.Tooltip(exampleEl)*/

//Tooltip

//tekee taulukon (array) elementeistä
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//tekee jokaisesta taulukon elementistä BT:n Tooltip-olion,
//jolla on tarvittavat metosit (functiont) ja tapahtumakuuntelijat (hover)
//oliot menevät muuttujaan tooltipList
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//POPOVER

/* */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//modal

/* */
function message1() {
    var myModal = new bootstrap.Modal(document.getElementById('mymessage'))
    myModal.show()
}

function message2() {
    var myModal = new bootstrap.Modal(document.getElementById('mymessage'), {backdrop: "static"})
    myModal.show()
}

function message3() {
    document.getElementById("m_title").innerHTML = "oma otsikko"
    document.getElementById("m_body").innerHTML = "oma teksti"
    var myModal = new bootstrap.Modal(document.getElementById('mymessage'), {backdrop: "static"})
    myModal.show()
}

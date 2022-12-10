// Home tab 

// adults name
function adultup(max) {
    document.getElementById("adultsNumber").value = parseInt(document.getElementById("adultsNumber").value) + 1;
    if (document.getElementById("adultsNumber").value >= parseInt(max)) {
        document.getElementById("adultsNumber").value = max;
    }
}
function adultdown(min) {
    document.getElementById("adultsNumber").value = parseInt(document.getElementById("adultsNumber").value) - 1;
    if (document.getElementById("adultsNumber").value <= parseInt(min)) {
        document.getElementById("adultsNumber").value = min;
    }
}
// children valus
function childup(max) {
    document.getElementById("childNumber").value = parseInt(document.getElementById("childNumber").value) + 1;
    if (document.getElementById("childNumber").value >= parseInt(max)) {
        document.getElementById("childNumber").value = max;
    }
}
function childdown(min) {
    document.getElementById("childNumber").value = parseInt(document.getElementById("childNumber").value) - 1;
    if (document.getElementById("childNumber").value <= parseInt(min)) {
        document.getElementById("childNumber").value = min;
    }
}
// rooms valus
    function roomup(max) {
    document.getElementById("roomsNumber").value = parseInt(document.getElementById("roomsNumber").value) + 1;
    if (document.getElementById("roomsNumber").value >= parseInt(max)) {
        document.getElementById("roomsNumber").value = max;
    }
}
function roomdown(min) {
    document.getElementById("roomsNumber").value = parseInt(document.getElementById("roomsNumber").value) - 1;
    if (document.getElementById("roomsNumber").value <= parseInt(min)) {
        document.getElementById("roomsNumber").value = min;
    }
}
//  tab max and min buttons

// adults name
function tabAdultTop(max) {
    document.getElementById("tabAdultsNumber").value = parseInt(document.getElementById("tabAdultsNumber").value) + 1;
    if (document.getElementById("tabAdultsNumber").value >= parseInt(max)) {
        document.getElementById("tabAdultsNumber").value = max;
    }
}
function tabadultdown(min) {
    document.getElementById("tabAdultsNumber").value = parseInt(document.getElementById("tabAdultsNumber").value) - 1;
    if (document.getElementById("tabAdultsNumber").value <= parseInt(min)) {
        document.getElementById("tabAdultsNumber").value = min;
    }
}
// children valus
function tabChildUp(max) {
    document.getElementById("tabChildNumber").value = parseInt(document.getElementById("tabChildNumber").value) + 1;
    if (document.getElementById("tabChildNumber").value >= parseInt(max)) {
        document.getElementById("tabChildNumber").value = max;
    }
}
function tabChilddown(min) {
    document.getElementById("tabChildNumber").value = parseInt(document.getElementById("tabChildNumber").value) - 1;
    if (document.getElementById("tabChildNumber").value <= parseInt(min)) {
        document.getElementById("tabChildNumber").value = min;
    }
}
// rooms valus
    function tabRoomUp(max) {
    document.getElementById("tabRoomsNumber").value = parseInt(document.getElementById("tabRoomsNumber").value) + 1;
    if (document.getElementById("tabRoomsNumber").value >= parseInt(max)) {
        document.getElementById("tabRoomsNumber").value = max;
    }
}
function tabRoomDown(min) {
    document.getElementById("tabRoomsNumber").value = parseInt(document.getElementById("tabRoomsNumber").value) - 1;
    if (document.getElementById("tabRoomsNumber").value <= parseInt(min)) {
        document.getElementById("tabRoomsNumber").value = min;
    }
}

//  travel max and min buttons

// adults name
function travelAdulTop(max) {
    document.getElementById("travelAdultsNumber").value = parseInt(document.getElementById("travelAdultsNumber").value) + 1;
    if (document.getElementById("travelAdultsNumber").value >= parseInt(max)) {
        document.getElementById("travelAdultsNumber").value = max;
    }
}
function travelAdultDown(min) {
    document.getElementById("travelAdultsNumber").value = parseInt(document.getElementById("travelAdultsNumber").value) - 1;
    if (document.getElementById("travelAdultsNumber").value <= parseInt(min)) {
        document.getElementById("travelAdultsNumber").value = min;
    }
}
// children valus
function travelChildUp(max) {
    document.getElementById("travelChildNumber").value = parseInt(document.getElementById("travelChildNumber").value) + 1;
    if (document.getElementById("travelChildNumber").value >= parseInt(max)) {
        document.getElementById("travelChildNumber").value = max;
    }
}
function travelChildDown(min) {
    document.getElementById("travelChildNumber").value = parseInt(document.getElementById("travelChildNumber").value) - 1;
    if (document.getElementById("travelChildNumber").value <= parseInt(min)) {
        document.getElementById("travelChildNumber").value = min;
    }
}
// rooms valus
    function travelRoomUp(max) {
    document.getElementById("travelRoomsNumber").value = parseInt(document.getElementById("travelRoomsNumber").value) + 1;
    if (document.getElementById("travelRoomsNumber").value >= parseInt(max)) {
        document.getElementById("travelRoomsNumber").value = max;
    }
}
function travelRoomDown(min) {
    document.getElementById("travelRoomsNumber").value = parseInt(document.getElementById("travelRoomsNumber").value) - 1;
    if (document.getElementById("travelRoomsNumber").value <= parseInt(min)) {
        document.getElementById("travelRoomsNumber").value = min;
    }
}


// set dropdown 

function open_addnew(){
    // document.getElementById("add_new").style.opacity=1;
    document.getElementById("add_new").style.display="block";
  document.getElementById("add_new").classList.toggle("show");

}
// open tab drop down 

function open_tabaddnew(){
    document.getElementById("tab_add_new").style.display="block";
    document.getElementById("tab_add_new").classList.toggle("show");
}

//  open travel tab 
function open_traveladdnew(){
    document.getElementById("travel_add_new").style.display="block";
    document.getElementById("travel_add_new").classList.toggle("show");
}

// Home tab  adding years select 
var yearSelect = document.getElementById("years");
var yearInput =document.getElementById('childNumber');
var yearsValue;

function addYearsSelect(){
    yearsValue = yearInput.value;
    var years = ` 
      <select class="form-select" aria-label="Default select example">\n\
          <option value="1" selected> 1 years old </option>\n\
          <option value="2"> 2 years old</option>\n\
          <option value="3">3 years old</option>\n\
          <option value="4">4 years old </option>\n\
          <option value="5">5 years old</option>\n\
          <option value="6">6 years old</option>\n\
          <option value="7">7 years old</option>\n\
          <option value="8">8 years old</option>\n\
          <option value="9">9 years old</option>\n\
          <option value="10">10 years old</option>\n\
        </select>\n\
     `
     yearSelect.insertAdjacentHTML ('beforeend',years);
}

function removeYearsSelect(){
    yearsValue = yearInput.value;
    $('#years select').last().remove();
}

// tour tab 
var tabyearSelect = document.getElementById("tabYears");
var tabyearInput =document.getElementById('tabChildNumber');
var tabyearsValue;

function addTabYearsSelect(){
    tabyearsValue = tabyearInput.value;
    var years = ` 
      <select class="form-select" aria-label="Default select example">\n\
          <option value="1" selected> 1 years old </option>\n\
          <option value="2"> 2 years old</option>\n\
          <option value="3">3 years old</option>\n\
          <option value="4">4 years old </option>\n\
          <option value="5">5 years old</option>\n\
          <option value="6">6 years old</option>\n\
          <option value="7">7 years old</option>\n\
          <option value="8">8 years old</option>\n\
          <option value="9">9 years old</option>\n\
          <option value="10">10 years old</option>\n\
        </select>\n\
     `
     tabyearSelect.insertAdjacentHTML ('beforeend',years);
}

function removeTabYearsSelect(){
    tabyearsValue = tabyearInput.value;
    $('#tabYears select').last().remove();
}




// travel tab 
var travelyearSelect = document.getElementById("travelYears");
var travelyearInput =document.getElementById('travelChildNumber');
var travelyearsValue;

function addTravelYearsSelect(){
    travelyearsValue = travelyearInput.value;
    var years = ` 
      <select class="form-select" aria-label="Default select example">\n\
          <option value="1" selected> 1 years old </option>\n\
          <option value="2"> 2 years old</option>\n\
          <option value="3">3 years old</option>\n\
          <option value="4">4 years old </option>\n\
          <option value="5">5 years old</option>\n\
          <option value="6">6 years old</option>\n\
          <option value="7">7 years old</option>\n\
          <option value="8">8 years old</option>\n\
          <option value="9">9 years old</option>\n\
          <option value="10">10 years old</option>\n\
        </select>\n\
     `
     travelyearSelect.insertAdjacentHTML ('beforeend',years);
}

function removeTravelYearsSelect(){
    travelyearsValue = travelyearInput.value;
    $('#travelYears select').last().remove();
}

// adding the declarative numbers selected inn  html input 

var adultsNumberSpan = document.getElementById('adults_number');
var childNumberSpan = document.getElementById('child_number');
var roomNumberSpan = document.getElementById('rooms_number');

function declateNumbers() {
    adultsNumberSpan.innerHTML= document.getElementById("adultsNumber").value;
    childNumberSpan.innerHTML = document.getElementById("childNumber").value;
    roomNumberSpan.innerHTML = document.getElementById("roomsNumber").value;
    document.getElementById("add_new").style.display="none";

    // tab tab
    document.getElementById('tab_adults_number').innerHTML= document.getElementById("tabAdultsNumber").value;
    document.getElementById('tab_child_number').innerHTML = document.getElementById("tabChildNumber").value;
    document.getElementById('tab_rooms_number').innerHTML = document.getElementById("tabRoomsNumber").value;
    document.getElementById("tab_add_new").style.display="none";

    // travel tab 
    document.getElementById('travel_adults_number').innerHTML= document.getElementById("travelAdultsNumber").value;
    document.getElementById('travel_child_number').innerHTML = document.getElementById("travelChildNumber").value;
    document.getElementById('travel_rooms_number').innerHTML = document.getElementById("travelRoomsNumber").value;
    document.getElementById("travel_add_new").style.display="none";
}   

//**************************************************************************************************** */
// hotel page 

function hoteladultup(max) {
    document.getElementById("hoteladultsNumber").value = parseInt(document.getElementById("hoteladultsNumber").value) + 1;
    if (document.getElementById("hoteladultsNumber").value >= parseInt(max)) {
        document.getElementById("hoteladultsNumber").value = max;
    }
}
function hoteladultdown(min) {
    document.getElementById("hoteladultsNumber").value = parseInt(document.getElementById("hoteladultsNumber").value) - 1;
    if (document.getElementById("hoteladultsNumber").value <= parseInt(min)) {
        document.getElementById("hoteladultsNumber").value = min;
    }
}
// hotel cild 
function hotelchildup(max) {
    document.getElementById("hotelchildNumber").value = parseInt(document.getElementById("hotelchildNumber").value) + 1;
    if (document.getElementById("hotelchildNumber").value >= parseInt(max)) {
        document.getElementById("hotelchildNumber").value = max;
    }
}
function hotelchilddown(min) {
    document.getElementById("hotelchildNumber").value = parseInt(document.getElementById("hotelchildNumber").value) - 1;
    if (document.getElementById("hotelchildNumber").value <= parseInt(min)) {
        document.getElementById("hotelchildNumber").value = min;
    }
}
// hotel rooms number
function hotelroomsup(max) {
    document.getElementById("hotelroomsNumber").value = parseInt(document.getElementById("hotelroomsNumber").value) + 1;
    if (document.getElementById("hotelroomsNumber").value >= parseInt(max)) {
        document.getElementById("hotelroomsNumber").value = max;
    }
}
function hotelroomsdown(min) {
    document.getElementById("hotelroomsNumber").value = parseInt(document.getElementById("hotelroomsNumber").value) - 1;
    if (document.getElementById("hotelroomsNumber").value <= parseInt(min)) {
        document.getElementById("hotelroomsNumber").value = min;
    }
}

//  open travel tab 
function open_hoteladdnew(){
    document.getElementById("hotel_add_new").style.display="block";
    document.getElementById("hotel_add_new").classList.toggle("show_hotel");
}

// Home tab  adding years select 
var yearSelect = document.getElementById("hotelyears");
var yearInput =document.getElementById('hotelchildNumber');
var yearsValue;

function addHotelYearsSelect(){
    yearsValue = yearInput.value;
    var years = ` 
      <select class="form-select" aria-label="Default select example">\n\
          <option value="1" selected> 1 years old </option>\n\
          <option value="2"> 2 years old</option>\n\
          <option value="3">3 years old</option>\n\
          <option value="4">4 years old </option>\n\
          <option value="5">5 years old</option>\n\
          <option value="6">6 years old</option>\n\
          <option value="7">7 years old</option>\n\
          <option value="8">8 years old</option>\n\
          <option value="9">9 years old</option>\n\
          <option value="10">10 years old</option>\n\
        </select>\n\
     `
     yearSelect.insertAdjacentHTML ('beforeend',years);
}

function removeHotelYearsSelect(){
    yearsValue = yearInput.value;
    $('#hotelyears select').last().remove();
}


function hotelDeclateNumbers() {

    document.getElementById('hotel_adults_number').innerHTML= document.getElementById("hoteladultsNumber").value;
    document.getElementById('hotel_child_number').innerHTML = document.getElementById("hotelchildNumber").value;
    document.getElementById('hotel_rooms_number').innerHTML = document.getElementById("hotelroomsNumber").value;
    document.getElementById("hotel_add_new").style.display="none";
    // document.getElementById("hotel_add_new").style.backgroundColor="red";

}   
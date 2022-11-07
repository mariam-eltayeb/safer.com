var addRoomBtn =document.getElementById ('roomBtn');
var formInput = document.getElementById('details');
var removeBtn = document.getElementById('removeBtn"');


function addInput() {
  var detailCounter = document.getElementsByClassName('details_content').length;
    var fields = ` <div class="row mx-0  details_content new" id="details-${detailCounter}"> \n\
    <div class="col-xl-6 col-md-12 col-sm-12 ">\n\
    <div class="remove">\n\
    <button id="removeBtn" onclick="remove(this)">\n\
        <i class="fa-solid fa-xmark"></i>\n\
    </button>\n\
    </div>\n\
      <h5> adults</h5>\n\
      <select class="form-select" aria-label="Default select example">\n\
          <option selected>1</option>\n\
          <option value="1">2 </option>\n\
          <option value="2"> 3</option>\n\
          <option value="3">4</option>\n\
          <option value="4">4</option>\n\
          <option value="5">5</option>\n\
          <option value="6">6</option>\n\
          <option value="7">7</option>\n\
          <option value="8">8</option>\n\
          <option value="9">9</option>\n\
          <option value="10">10</option>\n\
        </select>\n\
      </div>\n\
      <div class="col-xl-6 col-md-12 col-sm-12">\n\
        <h5> childs</h5>\n\
        <select class="form-select" aria-label="Default select example">\n\
            <option selected>1</option>\n\
            <option value="1">2 </option>\n\
            <option value="2"> 3</option>\n\
            <option value="3">4</option>\n\
            <option value="4">4</option>\n\
            <option value="5">5</option>\n\
            <option value="6">6</option>\n\
            <option value="7">7</option>\n\
            <option value="8">8</option>\n\
            <option value="9">9</option>\n\
            <option value="10">10</option>\n\
          </select>\n\
        </div>\n\
  </div> `
  formInput.insertAdjacentHTML ('beforeend',fields);
};

function remove($event) {
  console.log ($event.closest('.details_content'));
  $event.closest('.details_content').remove();
}
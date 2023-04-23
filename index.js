console.log("connected!!!!!");
var data ={}
function getRoomInfo(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/roomdetails");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
       data.roomid=xhr.responseText;
      }
    };
    xhr.send();
}
function getToken(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/roomToken");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
        
      }
    };
    xhr.send(JSON.stringify(data)); 
}

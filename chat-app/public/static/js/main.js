var socket = io.connect(window.location.host)

var output = document.querySelector(".message-space");
var send = document.querySelector(".send");
var hello = document.querySelector(".message");




send.addEventListener('click', () => {
  socket.emit("chat", {
    message : hello.value,
    handle : "daat",
  })
  hello.value = ""
  console.log(window.location.host)
})

socket.on("chat", (data) => {
  console.log(data)
  output.innerHTML += '<div class="hello"><p>' + data.message +  '</p><span class="time-right">' + data.person + '</span></div><br>'
})


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





function MenuOpen() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

firstSec = document.getElementById("firstSec");

var scrollF = function() {
  var y = window.scrollY;
  if (y >= 300) {
    firstSec.className = "section showSec"
  } else {
    firstSec.className = "section hideSec"
  }
};

window.addEventListener("scroll", scrollF);

var delete1 = document.getElementsByClassName("delete");
var messageOkay = document.getElementById("messageAccept");


function accept() {

  
  var correct = true;
  messageOkay.innerHTML="";
  var reName = /^[A-ZŽŠĐČĆ][a-zšđčćž]{2,10}$/;
  var reSurname = /^([A-ZŽŠĐČĆ][a-zšđčćž]{2,16})(\s[AZŽŠĐČĆ][a-zšđčćž]{2,16})*$/;
  var reEmail = /^\w+([\.\-]\w+)*@\w+([\.\-]\w+)*(\.\w{2,4})+$/;
  var name = document.querySelector("#name").value.trim();
  var surname = document.querySelector("#surname").value.trim();
  var email = document.querySelector("#email").value.trim();
  var message = document.querySelector("#message").value.trim();

  if(!reName.test(name)) {
    document.querySelector("#name").classList.add("border");
    correct = false;
    } else{
   
   document.querySelector("#name").classList.remove("border");
    }

  if(!reSurname.test(surname)) {
   
   document.querySelector("#surname").classList.add("border");
    correct = false;
    } else{
      document.querySelector("#surname").classList.remove("border");
    }

    if(!reEmail.test(email)) {

      document.querySelector("#email").classList.add("border");
      correct = false;
    } else {
      document.querySelector("#email").classList.remove("border");
    }

    if(message == ""){
      document.querySelector("#message").classList.add("border");
      correct = false;
    } else{
      document.querySelector("#message").classList.remove("border");
    }

    
    if(correct){
      messageOkay.innerHTML="The message was sent!";
      messageOkay.style.color="#3792cb";
      messageOkay.style.fontSize="2vw";
      for (let i = 0; i < delete1.length; i++) {

      delete1[i].value = "";

      }


      if(localStorage){
        localStorage.setItem("name",name);
        localStorage.setItem("surname",surname);
        localStorage.setItem("email",email);
        }
        else{
        console.log("Local storage is not supported");
        }
       
        }

        else{
          messageOkay.innerHTML="Please fill out every box, or check if everything you wrote is valid.";
          messageOkay.style.color="#3792cb";
          messageOkay.style.fontSize="2vw";

        }
  }
        document.getElementsByName("send")[0].addEventListener("click", accept);

        
        document.getElementsByName("delete")[0].addEventListener("click", function () { 
        messageOkay.innerHTML="";
        for (let i = 0; i < delete1.length; i++) {
        delete1[i].value=""
        delete1[i].classList.remove("border");
        }});

         
      // galerija

      var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

      

          
         
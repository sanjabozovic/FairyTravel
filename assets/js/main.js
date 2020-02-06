
function scrollToTop() { 
  $(window).scrollTop(0); 
} 

var menuLinks = ["Countries", "Author", "Contact"];
var menuWhere = document.getElementById("myDropdown");
      
 for(var i=0; i<menuLinks.length; i++){
      var MenuA = document.createElement("a");
      MenuA.id = "scrl"+ i;
      MenuA.innerHTML= menuLinks[i];
      menuWhere.appendChild(MenuA);
}

$(document).ready(function() {

    $("#scrl1").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#gallery").offset().top
      }, 2000);
    });

    $("#scrl2").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#form").offset().top
      }, 2000);
    });

    $("#scrl0").click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#naslov").offset().top
      }, 2000);
    });

    $(document).ready(function () {
      $('#sliderText').fadeIn(1500).removeClass('hidden');
    });

    $(function(){
      $('.thumb img').hoverZoom({
        speedView: 600,
        speedRemove: 400,
        showCaption: true,
        speedCaption: 800,
        debug: false,
        easing: 'easeOutQuint',
        captionHeight: 32,
        breathingSize: 0,
        hoverIntent: true,
        useBgImg: false
      });
    }) 
})

window.onload = function(){
  firstSec = document.getElementById("firstSec");

$(window).scroll(function(){
  if ($(this).scrollTop() > 200){
    $("#firstSec").animate({
      opacity: 1
    }, 500)
  }
})

}


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

/*tekst podeljen u tri kolone*/



function mediaChange(x){
  if(x.matches){
    scrollF = function() {
      var y = window.scrollY;
      if (y >= 100) {
        firstSec.className = "section showSec"
      } else {
        firstSec.className = "section hideSec"
      }
    };
  }
}

var x = window.matchMedia("(max-width:992px)");
mediaChange(x)
x.addListener(mediaChange)

function mediaChange2(y){
  if(y.matches){
    scrollF = function() {
      var y = window.scrollY;
      if (y >= 25) {
        firstSec.className = "section showSec"
      } else {
        firstSec.className = "section hideSec"
      }
    };
  }
}

var y = window.matchMedia("(max-width:768px)");
mediaChange(y)
y.addListener(mediaChange)


var articl = document.getElementById("firstSec").childNodes;
for(var i=0; i<articl.length; i++){
 articl[i].className = "first";
}

/*Countries */

var cities = ["venice", "belgrade", "amsterdam", "losangeles", "miami", "budapest"];
var citiesWrite = ["Venice", "Belgrade", "Amsterdam", "Los Angeles", "Miami", "Budapest"];
var galleryUL = document.getElementById("ulGallery");
      
 for(var i=0; i<cities.length; i++){
      var liTag = document.createElement("li")
      var galleryA = document.createElement("a");
      var galleryImg = document.createElement("img");
      galleryA.href = `images/${cities[i]}.jpg`
      galleryImg.src = `images/${cities[i]}.jpg`;
      galleryImg.alt = citiesWrite[i];
      galleryA.appendChild(galleryImg);
      liTag.appendChild(galleryA)
      galleryUL.appendChild(liTag);
}


var couImg = document.getElementById("countries").getElementsByTagName("img");
for(var i=0; i<couImg.length; i++){
  couImg[i].className = "couImg";
}

  /*forma */

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
      messageOkay.style.color="green";
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
          messageOkay.style.color="red";

        }
  }
        document.getElementsByName("send")[0].addEventListener("click", accept);

        
        document.getElementsByName("delete")[0].addEventListener("click", function () { 
        messageOkay.innerHTML="";
        for (let i = 0; i < delete1.length; i++) {
        delete1[i].value=""
        delete1[i].classList.remove("border");
 }});


         
      // galerija autor


var authorImgs = ["author1_wide", "author2_wide", "author3_wide"];
var authorDiv = document.getElementById("imgs");
      
 for(var i=0; i<authorImgs.length; i++){
      var authorImg = document.createElement("img");
      authorImg.src = `images/${authorImgs[i]}.jpg`;
      authorImg.alt = "author photo";
      authorDiv.appendChild(authorImg);
}


      
var gallery = document.getElementById("imgs").childNodes;
    for(var i=0; i<gallery.length; i++){
    gallery[i].className = "slide";
    }

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


      
const projectButton = document.getElementById("projectBtn");
const closeModal = document.querySelector(".close-modal");
const openPledge = document.querySelector('.radio-btn');
console.log(openPledge);
projectButton.onclick = function(){
  document.getElementById("modalPage").style.display = "block";
}

closeModal.onclick =function(){
    document.getElementById("modalPage").style.display = "none"; 
}
// openPledge.onclick= function(){
//   console.log("checked")
//   document.querySelector(".pledge-line").style.display = "block";
//   document.querySelector(".pledge").style.display = "block";
//   document.querySelector('.modal').classList.toggle("active");
// }
const radioBtn = document.getElementsByTagName("INPUT");
// const showPledge = document.querySelectorAll('.modal');
// console.log(showPledge);
const pledge = document.getElementById('mypledge');
console.log(pledge);
const pledgeLine = document.getElementsByClassName('pledge-line');
    console.log(pledgeLine);
// pledge.addEventListener('click', function(e) {
//   if (!e.target.matches('#bamboo, #black, #mahogany'))
//   //your code here
//   // pledge.style.display ="block";
//   // pledgeLine.style.display = "block";
//   console.log("clicked");
// })
function showPledge(){
  pledge.style.display ="block";
  pledgeLine.style.display = "block";
}

const showBookmark = document.getElementById('showBookmark');
const bookDiv = document.getElementById('bookImg');
const bookMark = document.getElementById('bookmark');
showBookmark.onclick = function(){
  bookMark.textContent ="Bookmarked";
  bookDiv.src= "images/icon-bookmark-active.svg";
  //bookDiv.style.right ="145px";
  bookMark.style.fontWeight ="700";
  bookMark.style.fontSize ="12px";
  bookMark.style.color = "hsl(176, 50%, 47%)";
}

const openMenu = document.getElementById('openNav');
const closeMenu = document.getElementById('close_list');
const ulList = document.getElementById("ul_list");
console.log(ulList);

function openNav(){
ulList.style.display ="block";
openMenu.style.display = "none";
closeMenu.style.display ="block";
}
closeMenu.onclick = function(){
  ulList.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display ="none";
}

  function myFunction() {
    
    // x[0].style.backgroundColor = "red";

  }

{/* <input type="radio" id="html" name="fav_language" value="HTML">
 
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">CSS</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">JavaScript</label> */}
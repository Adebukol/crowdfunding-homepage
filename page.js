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
const pledge = document.querySelectorAll('.pledge');
console.log(pledge);
const pledgeLine = document.getElementsByClassName('pledge-line')
    
document.addEventListener('click', function(e) {
  if (!e.target.matches('#bamboo, #black, #mahogany')) return;
  //your code here
  // pledgeLine.style.display="block"
  pledge.style.display="block";
  
});
  function myFunction() {
    
    // x[0].style.backgroundColor = "red";

  }

{/* <input type="radio" id="html" name="fav_language" value="HTML">
 
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">CSS</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">JavaScript</label> */}
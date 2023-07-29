const projectButton = document.getElementById("projectBtn");
const closeModal = document.querySelector(".close-modal");
const openPledge = document.querySelector('radio');
console.log(openPledge);
projectButton.onclick = function(){
  document.getElementById("modalPage").style.visibility = "visible";
}

closeModal.onclick =function(){
    document.getElementById("modalPage").style.visibility = "hidden"; 
}
// openPledge.onclick= function(){
//   console.log("checked")
//   document.querySelector(".pledge-line").style.display = "block";
//   document.querySelector(".pledge").style.display = "block";
//   document.querySelector('.modal').classList.toggle("active");
// }
  function myFunction() {
    var x = document.getElementById("modal").querySelectorAll(".radio-btn");
    x[0].style.backgroundColor = "red";
  }

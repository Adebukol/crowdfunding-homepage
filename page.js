const projectButton = document.getElementById("projectBtn");
const closeModal = document.querySelector(".close-modal");
const openPledge = document.querySelector('.radio-btn');
const modalHeight = document.querySelectorAll('.modal')
projectButton.onclick = function(){
  document.getElementById("modalPage").style.display = "block";
}

closeModal.onclick =function(){
    document.getElementById("modalPage").style.display = "none"; 
}

const radioBtn = document.getElementsByTagName("INPUT");
const pledgeBamboo = document.getElementById('bambooPledge');
const pledge = document.getElementById('mypledge');
const pledgeLine = document.getElementById('line1');
const pledgeLine1 = document.getElementById('line2');
const pledgeLine2 = document.getElementById('line3');

// radioBtn.addEventListener('change', function() {
//   if (this.checked) {
//     // Add your custom logic here
//   }
// });

function viewPledge(){
  pledgeBamboo.style.display ="block";
 pledgeLine.style.display = "block";
 modalHeight.forEach(btn =>{
  btn.classList.toggle('height');
 });
}
function showPledge(){
  pledge.style.display ="block";
  pledgeLine1.style.display = "block";
  modalHeight.forEach(btn =>{
    btn.classList.toggle('height');
   });
}
const totalBacked = document.getElementById('backed');
const backers = document.getElementById('backers');
const pledgeBtn = document.getElementsByClassName('pledge-btn');
console.log(pledgeBtn);
const confirmBtn = document.querySelectorAll('.confirm-btn');
const supportPage = document.getElementById('supportPage');
const backedEl = document.getElementById('backed');
//console.log(backedEl.textContent)


confirmBtn.forEach((btn =>{
  btn.addEventListener('click', ()=> {
    supportPage.style.display = "block";
    document.getElementById("modalPage").style.display = "none"; 
    var newBacked = backedEl.innerText
    console.log(newBacked);
    
    parseFloat(newBacked.innerText.replace('$', ''))
    //console.log(increaseBackers);
    // totalBacked.textContent + pledgeBtn[0].textContent;
    // backers.textContent + 1;
  });
}));
const supportClose= document.getElementById('supportClose');
supportClose.onclick = function(){
  supportPage.style.display = "none";
}
const showBookmark = document.getElementById('showBookmark');
const bookDiv = document.getElementById('bookImg');
const bookMark = document.getElementById('bookmark');
showBookmark.onclick = function(){
  bookMark.textContent ="Bookmarked";
  bookDiv.src= "images/icon-bookmark-active.svg";
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

var displayEle = document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

for(var i = 0; i<chrs.length; i++){
   var element = document.createElement("div");
   var nameEle= document.createElement("h4");
   var classEle= document.createElement("h5");
   var vehicleEle= document.createElement("h5");
   var imgEle= document.createElement("img");

  
  element.classList.add("character");

  nameEle.innerHTML = "Name: "+ chrs[i].name;
  classEle.innerHTML = "Class: " + chrs[i].class.toUpperCase(); 
  vehicleEle.innerHTML = "Vehicle: " + chrs[i].vehicle;
  
  
  if(chrs[i].afl == "autobot"){
    imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    element.classList.add("autobot");
  }else{
    imgEle.src= "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    element.classList.add("decepticon");
  }
  
  if(chrs[i].vehicle == "truck"){
    vehicleEle.style.color= "blue";
   }else if(chrs[i].vehicle == "tank"){
     vehicleEle.style.color = "green";
   }else if(chrs[i].vehicle == "car"){
     vehicleEle.style.color = "gold";
   }else{
     vehicleEle.style.color = "white";
   }
  
  
  
  element.appendChild(nameEle);
  element.appendChild(classEle);
  element.appendChild(imgEle);
  element.appendChild(vehicleEle);

  displayEle.appendChild(element);
  
}
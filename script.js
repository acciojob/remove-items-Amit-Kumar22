//your JS code here. If required.
let cars=document.getElementById("colorSelect");
  let clrs=document.querySelector("input");
  clrs.addEventListener("click", () =>{
    cars.remove(cars.selectedIndex);
  })
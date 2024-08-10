//selecting inputbox
var inputbox = document.querySelector(".inputbox")
//selecting add button
var addbutton = document.getElementById("addbtn")
//selecting second box
var listcontainer =document.querySelector(".add-list")
//selecting icon and groceries text
var icon =document.getElementById("icon")
var test=document.getElementById("tes")

test.addEventListener("click",function(){
   test.classList.toggle("checked")
})
icon.addEventListener("click",function(){
   test.remove()

})

//Add the list item
addbutton.addEventListener("click", function () {
   if((inputbox.value).length == 0 )
    {
    alert("Please Enter a task")
   }
else{
var listitem =document.createElement("p")
listitem.textContent =inputbox.value
listcontainer.append(listitem)

//adding cross mark 
let span = document.createElement("span")
span.innerHTML ="\u00d7";
listitem.append(span)
}
inputbox.value=""

listcontainer.addEventListener("click",function(e){
if(e.target.tagName === "P"){
   e.target.classList.toggle("checked")
}
else if(e.target.tagName === "SPAN"){
   e.target.parentElement.remove()
}
},false);
})
// Create an object called as Restaurat which has properties like RestauratName, ContactNo, MenuItems.
//  MenuItems is an array of MenuItem objects.

//|Create a object called as MenuItem with properties as itemname,, itemPrice.



//oneObject-inside another object
function restaurant(ResName2, ResContactNo2, MenuItems2){

    this.RestaurantName = ResName2;
    this.ReataurantContact = ResContactNo2;
    this.MenuItems = MenuItems2; 
}
  
function eachMenuItem (itemName2, itemPrice2){
this.itemName = itemName2;
this.itemPrice = itemPrice2;
}



var food = new eachMenuItem("soup", 6)
var food2 = new eachMenuItem("salad",7)
var food3 = new eachMenuItem("sandwich",8)

// put 3 above into array

var arrFoodie = [food, food2, food3];

//create restaurant object 

var restaurantDetail = new restaurant("Thai", "345678", arrFoodie)



/*
Create a function to be called when page loads which fetches itemNames 
from menuItem array and shows in a drop down list

*/
//dynamic html
function loadMenu(){
    var select = document.createElement("select")
    for (i = 0; i < restaurantDetail.MenuItems.length; i++){
        var option = document.createElement("option")
        var text = document.createTextNode(restaurantDetail.MenuItems[i].itemName)
        option.appendChild(text)
        select.appendChild(option)

    }
document.body.appendChild(select)
var p = document.createElement("p")//we crate paragraph tag
var text2 = document.createTextNode("Enter quantity");
p.appendChild(text2)
var pb = document.createElement("input")
pb.setAttribute("type", "text")
pb.setAttribute ("id","b")// id of textbox is b
//createelement for create tag
document.body.appendChild(p)
document.body.appendChild(pb)


select.setAttribute("id","menu")
var pButton = document.createElement("input")
pButton.setAttribute("type", "button")
document.body.appendChild(pButton)
pButton.setAttribute("value","Submit here")
pButton.setAttribute("onclick","placeOrder()")
}


// function every time when we click a button

function placeOrder(){
//how to read value in text box in html document.get element by id
var quantity = document.getElementById("b").value

var itemName = document.getElementById('menu').value
for (i = 0; i < restaurantDetail.MenuItems.length; i++){
if (restaurantDetail.MenuItems[i].itemName == itemName){
    var price = restaurantDetail.MenuItems[i].itemPrice
}
}
alert("$" + (price * quantity))



}
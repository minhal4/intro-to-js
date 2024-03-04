var shoppingCart = {
    books:3 ,
    sunglass: 3,
    keybroad : 5,
    mouse: 1, 
    pen : 25,
}
 const key = Object.keys(shoppingCart);
 console.log(key);
const values = Object.values(shoppingCart);
 console.log(values);
 for (var i =0 ; i <= key.length;i++){
     var propertyNam = key[i];
     var propertyValues = shoppingCart[propertyNam]; 
     console.log(propertyNam,propertyValues);
 }


//  for in loop 
// for(var pro)
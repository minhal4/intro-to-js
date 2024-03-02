var shoppingCart = {
    books:3 ,
    sunglass: 3,
    keyborad : 5,
    mouse: 1, 
    pen : 25,
}

// way--1
console.log(shoppingCart.pen);

// way--2
var booksCount = shoppingCart.books;
console.log(booksCount);

// way--3

var keyboradCount = shoppingCart['keyborad'];
console.log(keyboradCount)

// way --4;
var naMe =Object.keys(shoppingCart);///when we need to know the keys of the object
console.log(naMe);

var Bame = Object.values(shoppingCart)
console.log(Bame);

                  // value change
shoppingCart.keyborad = 20;
console.log(shoppingCart.keyborad);
shoppingCart['books'] = 10000;
console.log(shoppingCart.books)


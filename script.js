"use strict";

const resturant = {
  name: "Classico Italian",
  location: "581 B Gulshan Ravi",
  categories: ["italian", "fast food", "chinese", "vegetarian"],
  startmenu: ["garlic", "bread", "caprese salad"],
  mainmenu: ["pizza", "pasta", "risoto"],
  order: function (starterindex, mainindex) {
    return [this.startmenu[starterindex], this.mainmenu[mainindex]];
  },
};

const arr = [1, 2, 3];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
let [first, , scond] = resturant.categories;
console.log(first, scond);

// const temp = first;
// first = scond;
// scond = temp;
// console.log(first, scond);

[first, scond] = [scond, first];
console.log(first, scond);
console.log(resturant.order(2, 0));
// Destructure two return values
const [start, main] = resturant.order(2, 0);
console.log(start, main);

// destructing nested arrays

const arr1 = [2, 3, [4, 5]];
const [a, , [b, ,]] = arr1;
console.log(a, b);

// destruting default Array
const [p, q, r] = [8, 9];
console.log(p, q, r);
const [g = 1, h = 1, i = 1] = [2, 3];
console.log(g, h, i);

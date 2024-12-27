/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr1 = [
  { id: 5, name: "johnWick", age: "28", profession: "Front-end developer" },
  { id: 6, name: "jackieChan", age: "30", profession: "Full Stack developer" },
  { id: 7, name: "karenArjun", age: "29", profession: "admin salesforce" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element, index) => {
     console.log(element);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element, index) => {
     console.log(element);
  })
}

function addData() {
  //Write your code here, just console.log
  let newObj = {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(admin => admin.profession !== 'admin');
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let finalArray = arr.concat(arr1);
  console.log(finalArray);
}

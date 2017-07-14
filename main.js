// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 (){
  let prices = 0;
  for(let i=0; i < data.length; i++) {
    prices += data[i].price;
  }
  let total = prices / data.length;
  console.log(total);

}


  // Answer:





// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let between = [];
  for (i = 0; i <data.length; i++){
    if(data[i].price >=14 && data[i].price <=18){
      between.push(data[i].title);
    }
  }
  console.log(between);
  // Answer:
}




// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
let item = [];
for(let i=0; i < data.length; i++){
  if(data[i].currency_code === "GBP"){
    item.push(data[i].title);
    item.push(data[i].price);
    }
  }
  console.log(item);
}


// 4: Display a list of all items who are made of wood.
function question4 () {

  // Answer:
  let items =[];
  for(let i=0; i < data.length; i++){
    for(let h=0; h < data[i].materials.length; h++){
      if(data[i].materials[h] === 'wood'){
        items.push(data[i]);
      }
    }

  }
  console.log(items);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let stuff = [];
  for(let i=0; i < data.length; i++){
    for(let h=0; h < data[i].materials.length; h++){
      if(data[i].materials.length >= 8){
        stuff.push(data[i].title);
        stuff.push(data[i].materials.length);
        stuff.push(data[i].materials[h]);
      }
    }
  }
  console.log(stuff);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let things = [];
  for(let i=0; i < data.length; i++){
    if(data[i].who_made === "i_did"){
      things.push(data[i]);
    }
  }
  console.log(things.length);
}

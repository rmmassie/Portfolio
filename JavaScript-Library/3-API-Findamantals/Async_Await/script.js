/**
 * Alternate way of promised based code - (As opposed to Fetch.then.then)
 *      Allows us to avoid chaining promises.
 * 
 * Async await allows the construction of async functions.
 * 
 * Await can only be used in an Async function
 */

//  async function thisFunction(param) {
//     //await 
    
//     return 'Hello';
//  }

// thisFunction().then(result => {(console.log(result))})


// const anotherFunction = async (param) => {
//     //await
//     return;
//  }

//  const request = async () => {
//      const response = await fetch('https://random.dog/woof.json')
//      const json = await response.json();
//      return json;
//  }

//  request().then(json => {
//      console.log(json)
//  })

//  for (let i = 0; i < 10; i++) {
//      console.log(i);
     
//  }
// 1. Write a fat arrow async function that does the following:
// Uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
// Uses await to jsonify the response received from the fetch
// console.log the results of the fetch before console.logging a message saying 'this should print last'
// our console.log of 'this should print last' should be accessed using a promise resolver chained to the call of the function.

// Your console.log should look like the screenshot below: 

 //Query https://swapi.co/api/people/<number here> for Star Wars Info
const starWarsGet = async (n) => {
    const response = await fetch(`https://swapi.co/api/people/${n}`);
    const json = await response.json();
    console.log(json);
}

starWarsGet(2).then(result => console.log('This should print last'))

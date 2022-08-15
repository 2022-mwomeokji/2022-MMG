import {chose_food} from './twenty_guess.js';
//const {chose_food} = require('./twenty_guess.js');
console.log("11");
console.log(chose_food);

async function chose_succuess(chose_food){
    //console.log("123");
    var result_url = "http://localhost:8081/dishes/";
    const response = await fetch(result_url+chose_food);
    const data = await response.json();
    console.log(data);
  
}
chose_succuess(chose_food);

var keys=[];
var food_named=[];
var food_data=[];
var question_length=[];
//let number=0;
//export var chose_food=0;


function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

//fetch 시작
async function getjson(){
  const response = await fetch(`http://ec2-43-200-137-107.ap-northeast-2.compute.amazonaws.com:8081/questions/dishes`);
  const data = await response.json();
  console.log(data.dishes);
  food_data = data;
  for(key in data) {
    keys.push(key);
      //console.log(key+ data[key]);
      //console.log("key "+ data[key].question);
      //console.log("key "+ data[key].question.length);
      question_length.push(data[key].question.length);
      //질문들을 알 수 있음
  }
  
  for(var key in data) {
    keys.push(key);
      //console.log(key+ data[key]);
      //console.log("메뉴 "+key+ data[key].dishes); //out 질문에 대한 음식 갯수체크정도
      //질문들을 알 수 있음
      ///for(var smallkey in data[key].dishes){
        ///food_named.push(smallkey);
        //console.log(food_named);
        //console.log(smallkey+ data[key].dishes[smallkey].name);
        //data[key].dishes[1].name
        //key값에 포함된 음식들을 알 수 있음
      ///}
  }
  //console.log("test "+food_named[0].dishes[smallkey].name)


  
  data.forEach(o => {
      if (o.id != '{id: 92, name: 쌀국수}') {
          //console.log(o);
      }
      else {
          //console.log(o);
      }
  });const unique = [...new Set(data.map(item => item.group))];

  console.log("질문 0부터 10까지");
  for(var i=0 ; i<10 ; i++){
    console.log("i="+i+" "+food_data[rst[i]].question);
  }



  return data;
}
//fetch 끝



var guess_food_data = getjson();
/*
console.log("data = "+guess_food_data);
var keys=[];
for(key in guess_food_data) {
  keys.push(key);
    console.log(key+ guess_food_data[key]);
    console.log("11");
    //console.log(key+ [key].question);
    //질문들을 알 수 있음
}
*/



var rst=[]; // 질문들이 랜덤하게 들어있고 안에 그 순서가 지정되있다 
function getRandom(min, max) {
  return Math.floor((Math.random()*(max-min+1))+min);
  }
  
  // 랜덤하게 추출 (array Ver)
  function getRandomArray(min, max, count) {
    if (max-min+1<count) return;
    while(1){
      var index=getRandom(min,max);
      // 중복 여부를 체크
      if (rst.indexOf(index) > -1) {
        continue;
      }
      rst.push(index);
      if (rst.length == count) {
        break;
      }
    }

  }
console.log("guestion_list random")

getRandomArray(0,9,10);
//next_guess();
//배열 랜덤으로 만드는 부분(0부터 9까지 10개의 수를 배열)
console.log("배열 "+rst);

var guess_order=-1;

function next_guess(){

  
  console.log("next guess guess_order = "+guess_order);
  console.log(food_data[rst[guess_order]].question);
  data=getjson();
  const guessElement = document.getElementById('guess_text');
  console.log("글자수를 입력받았습니다."+guess_order);
  console.log(guessElement); 
  //let guess_text = guessElement.innerText;
  //console.log(guess_text);
  /*
  console.log("--");
  console.log("guess_order "+guess_order);
  console.log("rst guess order "+rst[guess_order]);
  console.log("글자수 = "+question_length[rst[guess_order]]);
  var target = document.getElementById("guess_text");
  var length=question_length[rst[guess_order]];
  */

  guessElement.innerText = food_data[rst[guess_order]].question;
  




  //console.log(food_data[guess_order].question);
  
  //console.log("guess_order "+guess_order);
/*
  for(key in food_data) {
    console.log(food_data[key].question);
      for(smallkey in food_data[key].dishes){
        console.log(smallkey+ food_data[key].dishes[smallkey].name);
        //질문마다 속해있는 음식 말해줌 

      }

  }
  */
}
var arr = {};
function make_arr(){
  
  for( var order = 1 ; order <106 ; order++){
    arr[order] = 0;
  }
  console.log("arr");
  console.log(arr);
}
make_arr();


function like(){
  
  guess_order=guess_order+1;
  console.log("like guess_order = "+guess_order);
  console.log(food_data[rst[guess_order]].question);
  for(var i =0 ; i<guess_order ; i++){
    //console.log("rst "+rst[guess_order]);
    //console.log("i= "+i)
  }

  for(smallkey in food_data[rst[guess_order]].dishes){
    console.log(food_data[rst[guess_order]].dishes[smallkey].name+" "+food_data[rst[guess_order]].dishes[smallkey].id);
    
    //질문마다 속해있는 음식 말해줌
    arr[food_data[rst[guess_order]].dishes[smallkey].id]+=1;
    console.log("arr "+arr[food_data[rst[guess_order]].dishes[smallkey].id])
  }
  console.log(arr);
}

function dislike(){
  guess_order=guess_order+1;

  for(var i = guess_order ; i<guess_order ; i++){
    console.log("rst "+rst[guess_order]);
  }
  for(smallkey in food_data[rst[guess_order]].dishes){
    console.log(food_data[rst[guess_order]].dishes[smallkey].name+" "+food_data[rst[guess_order]].dishes[smallkey].id);
    //질문마다 속해있는 음식 말해줌
    arr[food_data[rst[guess_order]].dishes[smallkey].id]-=1;
    console.log("arr "+arr[food_data[rst[guess_order]].dishes[smallkey].id])
  }
  console.log(arr);

}

function nurmal(){
  console.log(arr);
}

function guess_back(){
  const guessElement = document.getElementById('guess_text');
  guess_order-=1;
  for(smallkey in food_data[rst[guess_order]].dishes){
    console.log(food_data[rst[guess_order]].dishes[smallkey].id);
    //질문마다 속해있는 음식 말해줌
    arr[food_data[rst[guess_order]].dishes[smallkey].id]-=1;
  }
  console.log()
  for(smallkey in food_data[rst[guess_order]].dishes){
    console.log(food_data[rst[guess_order]].dishes[smallkey].id);
    //질문마다 속해있는 음식 말해줌
    arr[food_data[rst[guess_order]].dishes[smallkey].id]-=1;
  }
  guessElement.innerText = food_data[rst[guess_order]].question;
  console.log(arr);
}



let chose_food=1;

function choose(){
  const resultElement = document.getElementById('guess_number');
  number = resultElement.innerText;


  if(number>7){
    let sorted = Object.entries(arr).sort((a, b) => b[1] - a[1]);
    var sorted_arr = [];
    var big_value=sorted[0][1];
    var chose;
    var big_value_arr=[];
    var length=0;

    for(let element of sorted) {
      if(big_value==element[1]){
        big_value_arr.push(element[0]);
        length+=1;
      }
      //console.log("big ="+big_value);
	    sorted_arr.push(element[0])
	    //console.log(element[0]+ ": " + element[1]);
    }

    //console.log(sorted_arr);

    //console.log("-----------");
    console.log("big "+big_value_arr);
    //console.log(big_value_arr);
    var num = Math.random() * length; // Math 앞에 대문자
    var ball1 = parseInt(num); // parseInt 철자 주의
    //console.log(big_value_arr[ball1]);
    chose_food=big_value_arr[ball1]; 
    console.log("---------음식id = "+chose_food);
    localStorage.setItem("food_code", chose_food);
    chose_succuess(chose_food);
    
    //big_value_arr : 질문의 대답과 가장 연관이 많은 음식들이 저장된 배열
    //chose_food : big_value_arr에서 랜덤으로 뽑힌 한 음식의 id값
  

  //module.export = {chose_food}

  setTimeout(function() {  
    location.href='./twenty_loading.html';
    chose_succuess(chose_food);
    setTimeout(function() {
      location.href='./twenty_result.html';
      //setTimeout(function() {  
        //result(big_value_arr[ball1]); },1000);
        //result();
    }, 3000); // 로딩 -> 결과
  }, 3000); // 질문->로딩

  //location.href='./twenty_loading.html'
  }
  else if(number<8){
    window.alert("조금 더 진행해주시면 감사하겠습니다");
  }
  
}



function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('guess_number');
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus')  {
    number = parseInt(number) - 1;
    if(number === -1){
      location.href='./twenty_main.html';
    }
  }


  if(number>7){
    document.getElementById("skipd").src= "./img_file_twenty/twenty_guess_skip_guess.svg";
  }
  
  // 결과 출력
  if(number < 10){
    resultElement.innerText = "0"+number+".";
  }
  else{
    resultElement.innerText = number+".";
  }
}
chose_succuess();
result();
function result(name){
  const resultElement = document.getElementById("food_name");
  let food_name = resultElement.innerText;
  food_name=1;
  resultElement.innerText = "'"+name+"'";
  console.log("id "+name);
}

async function chose_succuess(food_id){
  food_id = localStorage.getItem("food_code");
  //console.log("123");
  var result_url = "http://ec2-43-200-137-107.ap-northeast-2.compute.amazonaws.com:8081/dishes/";
  const response = await fetch(result_url+food_id);
  const data = await response.json();
  console.log(data);
  result(data.name);

  }

  function clicked(){
    window.alert("clicked");
  }
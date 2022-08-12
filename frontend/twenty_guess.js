var keys=[];
var food_named=[];
var food_data=[];

//fetch 시작
async function getjson(){
  const response = await fetch(`http://localhost:8081/question-dishes`);
  const data = await response.json();
  console.log(data.dishNameResponseList);
  food_data = data;
  for(key in data) {
    keys.push(key);
      //console.log(key+ data[key]);
      //console.log(key+ [key].question);
      //질문들을 알 수 있음
  }
  for(key in data) {
    keys.push(key);
      //console.log(key+ data[key]);
      //console.log("메뉴 "+key+ data[key].dishNameResponseList); //out 질문에 대한 음식 갯수체크정도
      //질문들을 알 수 있음
      for(smallkey in data[key].dishNameResponseList){
        food_named.push(smallkey);
        //console.log(smallkey+ data[key].dishNameResponseList[smallkey].name);
        //data[key].dishNameResponseList[1].name
        //key값에 포함된 음식들을 알 수 있음
      }

  }
  //console.log("test "+food_named[0].dishNameResponseList[smallkey].name)
  for(i in keys){
    //console.log([i].question);
  }

  
  data.forEach(o => {
      if (o.id != '{id: 92, name: 쌀국수}') {
          //console.log(o);
      }
      else {
          //console.log(o);
      }
  });const unique = [...new Set(data.map(item => item.group))];

  return data;
}
//fetch 끝



guess_food_data = getjson();

console.log("data = "+guess_food_data);
var keys=[];
for(key in guess_food_data) {
  keys.push(key);
    console.log(key+ guess_food_data[key]);
    //console.log(key+ [key].question);
    //질문들을 알 수 있음
}




var rst=[];
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
  
      // 원하는 배열 갯수가 되면 종료
      if (rst.length == count) {
        break;
      }
    }
  }
  

getRandomArray(0,2,3);
for(var i=0 ; i<3 ; i++){
  console.log(rst[i]);
}
//배열 랜덤으로 만드는 부분


var guess_order=0;
//next_guess()
function next_guess(){
  data=getjson();
  const guessElement = document.getElementById('guess_text');
  console.log(guessElement); 
  let guess_text = guessElement.innerText;
  console.log(guess_text);
  console.log("--");
  guessElement.innerText = food_data[rst[guess_order]].question;
  //console.log(food_data[guess_order].question);
  guess_order=guess_order+1;
  //console.log("guess_order "+guess_order);
/*
  for(key in food_data) {
    console.log(food_data[key].question);
      for(smallkey in food_data[key].dishNameResponseList){
        console.log(smallkey+ food_data[key].dishNameResponseList[smallkey].name);
        //질문마다 속해있는 음식 말해줌 

      }

  }
  */
}
var arr = {};
function make_arr(){
  
  for( var order = 1 ; order <100 ; order++){
    arr[order] = 0;
  }
  console.log("arr");
  console.log(arr);
}
make_arr();


function like(){
  for(smallkey in food_data[rst[guess_order]].dishNameResponseList){
    console.log(food_data[rst[guess_order]].dishNameResponseList[smallkey].id);
    //질문마다 속해있는 음식 말해줌
    arr[food_data[rst[guess_order]].dishNameResponseList[smallkey].id]+=1;
  }
  console.log(arr);
}

function dislike(){
  for(smallkey in food_data[rst[guess_order]].dishNameResponseList){
    console.log(food_data[rst[guess_order]].dishNameResponseList[smallkey].id);
    //질문마다 속해있는 음식 말해줌
    arr[food_data[rst[guess_order]].dishNameResponseList[smallkey].id]-=1;
  }
  console.log(arr);
}

function nurmal(){
  console.log(arr);
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

  if(number>1){
    //window.alert(1);
    document.getElementById("skip").src=".\img_file_twenty\twenty_guess_skip_guess.svg";
  }
  
  // 결과 출력
  if(number < 10){
    resultElement.innerText = "0"+number+".";
  }
  else{
    resultElement.innerText = number+".";
  }
}


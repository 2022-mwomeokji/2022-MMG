var food_id=0;

chose_succuess(food_id)
result()
function result(name){
    const resultElement = document.getElementById("food_name");
    let food_name = resultElement.innerText;
    food_name=1;
    resultElement.innerText = "'"+name+"'";
    console.log("id "+name);
    food_id = localStorage.getItem("food_code");
  }

async function chose_succuess(food_id){
    food_id = localStorage.getItem("food_code");
    console.log("chose_success");
    console.log(food_id);
    var result_url = "http://ec2-43-200-137-107.ap-northeast-2.compute.amazonaws.com:8081/dishes/";
    const response = await fetch(result_url+food_id);
    const data = await response.json();
    console.log(data.name);
    result(data.name);
  
    }
chose_succuess(chose_food);
var food=[];

async function getjson(){
    const response = await fetch('https://mwomeokji.shop/categories');
    console.log("22");
    const data = await response.json();
    food = data;
    console.log(food);
    /*
    console.log(food);
    console.log(food.id);
    console.log(food.name);
    url = data.imageUrl;
    document.getElementById("food_img").src= url;

    const resultElement = document.getElementById("food_name");
    let food_name = resultElement.innerText;

    resultElement.innerText = "'"+food.name+"'";
  */
  }
  getjson();

//API 끌어오기
const response = await fetch(`https://mwomeokji.shop/dishes/random`);

const data = await response.json();


console.log(data.name);

url = data.imageUrl;


document.getElementById("food_img").src= url;
var value = 2;

function addItem() {
  blockNext();

  value++;
  var num = document.getElementById("num");
  num.textContent = String(value);

  const par = document.getElementById("inputItem");
  var id = "item" + String(value);

  let randomNumber = Math.floor(Math.random() * 3);
  let imgName = ["r", "s", "p"];

  par.innerHTML += `<div class="item_box" id=${id}>
  <div class="item_container">
    <img class="rps_img" src="./img_rps/img_${imgName[randomNumber]}.svg" width="60px" />
    <input class="rps_name" placeholder="이름 입력" />
    <input class="rps_menu" placeholder="메뉴 입력" />
    <button type="button" class="image">
      <img
        class="edit_img"
        src="./img_rps/edit_button.svg"
        width="35px"
        onClick="saveValue(${value})"
      />
    </button>
  </div>
  <img class="check_img" src="./img_rps/img_check.svg" width="80px" />
</div>`;
}

function removeItem() {
  blockNext();

  if (value < 3) {
    alert("최소 2개부터 설정해주세요.");
  } else {
    let chi = document.getElementById("item" + value);
    let chio = chi.parentElement;
    chio.removeChild(chi);

    value--;
    var num = document.getElementById("num");
    num.textContent = String(value);
  }
}

function saveValue(itemNum) {
  var id = Number(itemNum) - 1;
  var nameVal = document.getElementsByClassName("rps_name")[id].value;
  var menuVal = document.getElementsByClassName("rps_menu")[id].value;
  if (menuVal == "") {
    alert("메뉴를 입력해주세요.");
  } else {
    document.getElementsByClassName("rps_name")[id].readOnly = true;
    document.getElementsByClassName("rps_menu")[id].readOnly = true;
    document.getElementsByClassName("rps_name")[id].value = nameVal;
    document.getElementsByClassName("rps_menu")[id].value = menuVal;
    document.getElementsByClassName("item_container")[
      id
    ].style.backgroundColor = "#FFFEFB";
    document.getElementsByClassName("rps_menu")[id].style.backgroundColor =
      "#f9f8ec";
    document.getElementsByClassName("item_container")[id].style.border =
      "1px solid #9B9B9B";
    var rps = document.getElementsByClassName("rps_img")[id].src;
    rps = String(rps).slice(0, -4);
    document.getElementsByClassName("rps_img")[id].src = rps + "_gray.svg";
    document.getElementsByClassName("edit_img")[id].style.display = "none";
    document.getElementsByClassName("check_img")[id].style.visibility =
      "visible";
  }
  var finish = 1;
  for (var i = 0; i < value; i++) {
    if (document.getElementsByClassName("rps_menu")[i].readOnly == false) {
      finish = 0;
      break;
    }
  }
  if (finish == 1) {
    document
      .querySelector("#next_img")
      .setAttribute("src", "./img_rps/next_button.svg");
    document.getElementById("next_img").setAttribute("onClick", "hrefLink();");
    let randNum = Math.floor(Math.random() * value);
    var name = document.getElementsByClassName("rps_name")[randNum].value;
    var menu = document.getElementsByClassName("rps_menu")[randNum].value;
    localStorage.setItem("name", name);
    localStorage.setItem("menu", menu);
  }
}

function hrefLink() {
  location.href = "./rps_result.html";
}

function blockNext() {
  for (var i = 0; i < value; i++) {
    var rps = document.getElementsByClassName("rps_img")[i].src;
    if (String(rps).slice(-8) == "gray.svg") {
      document.getElementsByClassName("rps_name")[i].readOnly = false;
      document.getElementsByClassName("rps_menu")[i].readOnly = false;
      document.getElementsByClassName("item_container")[
        i
      ].style.backgroundColor = "#f9f8ec";
      document.getElementsByClassName("rps_menu")[i].style.backgroundColor =
        "#ebeb99";
      document.getElementsByClassName("edit_img")[i].style.display = "block";
      rps = String(rps).slice(0, -9);
      console.log(rps);
      document.getElementsByClassName("rps_img")[i].src = rps + ".svg";
      document.getElementsByClassName("check_img")[i].style.visibility =
        "hidden";
      document.getElementsByClassName("item_container")[i].style.border =
        "hidden";
    }
  }

  document
    .querySelector("#next_img")
    .setAttribute("src", "./img_rps/next_button_gray.svg");
  document.getElementById("next_img").removeAttribute("onClick");
}

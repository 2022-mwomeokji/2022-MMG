

// var fast= document.getElementById("random_category_sec_cat_fast");
// var jap= document.getElementById("random_category_sec_cat_jap");
// var wes= document.getElementById("random_category_sec_cat_wes");
// var kor= document.getElementById("random_category_sec_cat_kor");
// var chi= document.getElementById("random_category_sec_cat_chi");
// var all= document.getElementById("random_category_sec_cat_all");

function check(i){

    var check_fast= document.getElementById("random_category_sec_cat_check_fast");
    var check_jap= document.getElementById("random_category_sec_cat_check_jap");
    var check_wes= document.getElementById("random_category_sec_cat_check_wes");
    var check_kor= document.getElementById("random_category_sec_cat_check_kor");
    var check_chi= document.getElementById("random_category_sec_cat_check_chi");
    var check_all= document.getElementById("random_category_sec_cat_check_all");

    if (i==1){
        addCheck(check_fast);
        removeCheck(check_jap);
        removeCheck(check_wes);
        removeCheck(check_kor);
        removeCheck(check_chi);
        removeCheck(check_all);
    }
    else if(i==2){
        addCheck(check_jap);
        removeCheck(check_fast);
        removeCheck(check_wes);
        removeCheck(check_kor);
        removeCheck(check_chi);
        removeCheck(check_all);
    }
    else if(i==3){
        addCheck(check_wes);
        removeCheck(check_jap);
        removeCheck(check_fast);
        removeCheck(check_kor);
        removeCheck(check_chi);
        removeCheck(check_all);
    }
    else if(i==4){
        addCheck(check_kor);
        removeCheck(check_jap);
        removeCheck(check_wes);
        removeCheck(check_fast);
        removeCheck(check_chi);
        removeCheck(check_all);
    }
    else if(i==5){
        addCheck(check_chi);
        removeCheck(check_jap);
        removeCheck(check_wes);
        removeCheck(check_kor);
        removeCheck(check_fast);
        removeCheck(check_all);
    }
    else if(i==6){
        addCheck(check_all);
        removeCheck(check_jap);
        removeCheck(check_wes);
        removeCheck(check_kor);
        removeCheck(check_chi);
        removeCheck(check_fast);
    }

}

function addCheck(id){
    id.style.visibility = 'visible';
   
}

function removeCheck(id){
    id.style.visibility = 'hidden';
}
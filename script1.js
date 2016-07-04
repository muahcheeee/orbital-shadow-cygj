function processForm() {
    
    var ans = document.ansForm.temp.value;
    var tempType;
    var result;
    
    for (var i=0; i < document.ansForm.choice.length; i++) {
        if (document.ansForm.choice[i].checked) {
            tempType = document.ansForm.choice[i].value;
        }
    }

    if (tempType == "hall") {
        result = "Correct!";
    }
    
    else {
        result = "Wrong!";
    }
    
    alert(result);
}

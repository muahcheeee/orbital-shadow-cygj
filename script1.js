function processForm() {
    
    var ans = document.ansForm.temp.value;
    var tempType;

    for (var i=0; i < document.ansForm.choice.length; i++) {
        
        if (document.ansForm.choice[i].checked) {
            tempType = document.ansForm.choice[i].value;
        }
    }

    if (tempType == 'hall') {
        alert("Correct!");
    }
    
    else {
        alert("Wrong!");
    }
}

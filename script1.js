function processForm() {
    
    var ans = document.ansForm.temp.value;
    var tempType;

    for (var i=0; i < document.tempForm.choice.length; i++) {
        
        if (document.tempForm.choice[i].checked) {
            tempType = document.tempForm.choice[i].value;
        }
    }

    if (tempType == 'hall') {
        alert("Correct!");
    }
    
    else {
        alert("Wrong!");
    }
}

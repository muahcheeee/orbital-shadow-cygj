function processPageOne() {
    
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

function processPageTwo() {
    
    var tempType;
    var ans = ["knife","lead pipe","candlestick","revolver","wrench"];
    
    for (var i=0; i < document.plum.choice.length; i++) {
        if (document.plum.choice[i].checked) {
            tempType[0] = document.plum.choice[i].value;
        }
    }
    
    for (var i=0; i < document.green.choice.length; i++) {
        if (document.green.choice[i].checked) {
            tempType[1] = document.green.choice[i].value;
        }
    }
    
    for (var i=0; i < document.mustard.choice.length; i++) {
        if (document.mustard.choice[i].checked) {
            tempType[2] = document.mustard.choice[i].value;
        }
    }
    
    for (var i=0; i < document.scarlet.choice.length; i++) {
        if (document.scarlet.choice[i].checked) {
            tempType[3] = document.scarlet.choice[i].value;
        }
    }
    
    for (var i=0; i < document.white.choice.length; i++) {
        if (document.white.choice[i].checked) {
            tempType[4] = document.white.choice[i].value;
        }
    }
    
    for (var i=0; i < ans.length; i++) {
        if (tempType[i] != ans[i]) {
            alert("Wrong!");
        }
        
        else if (tempType[i] === ans[i]) {
            alert("Correct!");
        }
        
        else {
            alert("Wrong!");
        }
    }
}

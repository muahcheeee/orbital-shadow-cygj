function processForm() {
    
    var ans = document.ansForm.temp.value;
    var result;

    if (ans == 'mr peng') {
        alert("Correct!");
    }
    
    else {
        alert("Wrong!");
    }
    
    document.ansForm.resultField.value = result;
}

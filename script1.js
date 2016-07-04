function processForm() {
    
    var ans = document.ansForm.temp.value;
    var tempType;
    var result;

    if (ans == 'mr peng') {
        document.tempForm.resultField.value = "Correct!";
    }
    
    else {
        document.tempForm.resultField.value = "Wrong!";
    }
}

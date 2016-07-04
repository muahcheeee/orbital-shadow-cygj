function processForm() {
    
    var ans = document.ansForm.temp.value;
    var result;

    if (ans == 'mr peng') {
        result = "Correct!";
    }
    
    else {
        result = "Wrong!";
    }
    
    document.ansForm.resultField.value = result;
}

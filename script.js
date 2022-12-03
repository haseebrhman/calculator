function buttonClick(SelectButton) {
    document.getElementById("screen").value+=SelectButton
}
    
function buttonClear(){
    document.getElementById("screen").value=""
}

function buttonEqual(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

// 1 display number in text box
function displayNumber(num){
    result.value+=num;
}
//2 clear text box

function clearBox(){
    result.value="";
}

//3 evaluate expression

function evaluateExpression(){
    // expression=result.value;
    // output=eval(expression)
    // result.value=output;
    result.value=eval(result.value)
}

//4remove last item from text box

function RemoveLastItem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}
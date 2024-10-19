let mainBtn = document.querySelectorAll("#main-btn");
let activeBtn = 0;

mainBtn.forEach(function(button)
{
    button.addEventListener("click",function() {
        if (activeBtn)
        {
            activeBtn.style.backgroundColor="black";
        }button.style.backgroundColor="red"
        activeBtn=button    
});
});
let input = document.querySelector(".result");
let opp ='';
let num1 = '';
let res;

function number(y) {
    if (res !== undefined) {
        input.value = ''; 
        res = undefined; 
    }
    input.value += y;  
}
function opariter(z) {
    opp= z
    num1 = input.value
    input.value =''
}
function result() {
    let num2 =document.querySelector(".result").value   
    switch (opp) {
        case '+':
            res = +num1 + +num2;
            break;
            case '-':
            res = +num1 - +num2;
            break;
            case '*':
                res = +num1  * +num2;
            break;
            case '/':
            if (+num2 === 0) {
                alert('لا يمكن القسمة على الصفر');
                // confirm('no')
                return;     
                }
                res = +num1 / +num2;
            break;
            case '%':
                res = ( +num1  /  100) ;
            break;   
        default:
            res = "fuls";
    }
    input.value = res;
    num1 = '';
}
    function clearResult() {
        input.value = '';
        opp = '';
        num1 = '';
        res = undefined;
    }






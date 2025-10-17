function clearScreen(){
    document.getElementById('result').value="";
}

function display(value){
    document.getElementById('result').value+=value;
}

function calculate(){
    let p=document.getElementById('result').value;
    let q=eval(p); //eval() function : it evaluated the javascript code and performs action accordinglt eg. 4*2=8
    document.querySelector("#result").value=q;
}
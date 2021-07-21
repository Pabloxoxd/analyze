var addBtn = document.querySelector('input#addBtn').style.cursor = "pointer"
var analyzeBtn = document.querySelector('input#analyzeBtn').style.cursor = "pointer"
var list = document.getElementById('list')
var num = document.getElementById('num')

function isNumber(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function addNumber (){
    if(inList(num.value) && isNumber(num.value, valores)){
        window.alert('ok')
    } else {
        window.alert('Invalid')
    }
}





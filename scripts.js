let add1 = document.getElementById("taille")
let add2 = document.getElementById("taille2")


let count = 0
let count2 = 0
let b = document.getElementById("new")

function get1(){
    count = count + 1
    add1.textContent = count
    
}
function get2(){
    count = count + 2
    add1.textContent = count
}

function get3(){
    count = count + 3
    add1.textContent = count
}
function got1(){
    count2 = count2 + 1
    add2.textContent = count2
}
function got2(){
    count2 = count2 + 2
    add2.textContent = count2
}
function got3(){
    count2 = count2 + 3
    add2.textContent = count2 
}

function reset(){
    count = count * 0
    count2 = count2 * 0
    add1.textContent =count 
    add2.textContent =count2
    

}

window.onload = () =>{
    myFunction()
}; 

function myFunction(){
    let main = document.getElementById("main")
    let btn = document.getElementById("btn")
    let input = document.getElementById("input")
    let copy_btn = document.getElementById("copy_btn")


    btn.addEventListener("click", function(){
        main.style.backgroundColor = colorGenaretor();
        main.style.backgroundColor = colorHexa();
        input.value = colorHexa();
    });

    copy_btn.addEventListener("click", function(){
        navigator.clipboard.writeText(input.value)
    });

};

function colorGenaretor(){
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)

    return`rgb(${red},${blue},${green})`
}; 

function colorHexa(){
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)

    return`#(${red.toString(16)}${blue.toString(16)}${green.toString(16)})`
}; 
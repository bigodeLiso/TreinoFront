const Receber = function(){

    let x = document.getElementById("name").value
    let y = document.getElementById("email").value
}

const toggleMode = function(){
    const html = document.documentElement

    if(html.classList.contains("light")){
        html.classList.remove("light")
    }else{
        html.classList.add("light")
    }
}
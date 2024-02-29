function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector('#profile')
    var btn = document.getElementById("btnStyle")
    var dt = document.getElementById("data")

    var registro = new Date();

    dt = formatarData(registro)
    console.log(dt)

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "../imagens/img1.png");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "darkcyan";
        btn.style.borderColor = "darkcyan";
        document.getElementById("colorTxt").style.color = "#ffff"


    }else{
        imagem.setAttribute("src", "../imagens/imagem2.jpg");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "aqua";
        btn.style.borderColor = "aqua";
        document.getElementById("colorTxt").style.color = "aqua"
    }


}

function formatarData(item){

    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    return item.toLocaleString("pt-BR", options)
}




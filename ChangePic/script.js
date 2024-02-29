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
        imagem.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3135/3135768.png");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.backgroundColor = "aqua";
        btn.style.borderColor = "aqua";
        
    }else{
        imagem.setAttribute("src", "https://avatars.githubusercontent.com/u/114186739?v=4");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.backgroundColor = "red";
        btn.style.borderColor = "red";

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




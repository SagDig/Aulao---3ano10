function calcular(){
    var n1 = document.getElementById("num1").valueAsNumber;                   
    var n2 = document.getElementById("num2").valueAsNumber;
    var res = document.getElementById("res")

    if(isNaN(n1) && isNaN(n2)){
        alert("Digite números validos")
        return;
    }

    res.innerHTML = n1 + n2
}

function media(){
    var n1 = document.getElementById("nota1").valueAsNumber;                   
    var n2 = document.getElementById("nota2").valueAsNumber;
    var n3 = document.getElementById("nota3").valueAsNumber;
    var mediaTexto = document.getElementById("resposta");
    res = ((n1 + n2 + n3) / 3);

    if(res >= 7){
        mediaTexto.innerHTML = res.toFixed(2)
        mediaTexto.style.color = "green"
    }else{
        mediaTexto.innerHTML = res.toFixed(2)
        mediaTexto.style.color = "red"
    }
}

function contar(){
    const num = parseInt($("#numeroInput").val());
    
    if(isNaN(num)){
        $('#result').text("Por favor, informe um numero valido");
        return;
    }

    var resultadoStr = ""
    if(num <= 10000){
        for(var cont =1; cont <= num; cont++){
            resultadoStr = resultadoStr + cont + "<br>";
        }
        $("#result").html(resultadoStr)
    }else{
        $('#result').text("Proibido digitar números maiores que 10000");
    }
}
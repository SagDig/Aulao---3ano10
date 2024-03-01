function checMajority(){
    var wasBorn = document.getElementById("clientBirth").valueAsNumber;
    var res = document.getElementById("result");

    if(isNaN(wasBorn)){
        res.textContent = "Type only numbers";
        res.style.color = "red";
        return;
    }   

    const ThisYear = new Date().getFullYear();
    const age = ThisYear - wasBorn;
    console.log(age);

    if(age >= 18){
        res.textContent = "Over 18, ENTRY (._.)"
        res.style.color = "green"
    }else{
        res.textContent = "Under 18, NOT ALLOWED (X_X)"
        res.style.color = "red"
    }
    
    // const ThisMonth = new Date().getMonth();
    // const mes = ThisMonth - wasBorn;
    // console.log(mes)

    document.getElementById("clientAge").innerHTML = `${age} anos de idade`;
    // document.getElementById("clientMes").innerHTML = `${mes} anos de idade`;
    document.getElementById("clientAge").innerHTML = age + " anos de idade ";


}
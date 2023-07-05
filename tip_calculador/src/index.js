

function calculadorTip(event) {
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let servicequality = document.getElementById("servicequality").value;
    let people = document.getElementById("people").value;


    if(bill === "" || servicequality === 0 ){
    alert("Por Favor, Preencha os Campos!")
    return;
                                            }
    if(people == "" || people <= 1){
    people = 1
    document.getElementById("cada").style.display = "none"
    }else{
    document.getElementById("cada").style.display = "block"
    }
    
    let total = (bill * servicequality) / people;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("each").style.display = "block";

}
document.getElementById("cada").style.display="none"
document.getElementById("each").style.display = "none";
document.getElementById("tipsForm").addEventListener("submit",calculadorTip);


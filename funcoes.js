function trocar(icones){
    document.getElementById("icone").src = icones;
  

}

function Calculo(){
    var qtd = parseInt(document.getElementById("iquant").value);
    tot = qtd * 1000;
    document.getElementById("ipreco").value = tot;

}
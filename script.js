function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex"
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "block"
    }

    
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectCalca = document.getElementById("selectCalca")
    var selectTenis = document.getElementById("selectTenis")
    var selectCamiseta = document.getElementById("selectCamiseta")
    var resultadoSpan = document.getElementById("resultado")

    var total = 0;
    var calca = 0;
    var tenis = 0;
    var camiseta = 0;

    switch (selectCalca.value) {
        case "Azul":
            total += 79.90;
            calca = 79.90;
        break;
        case "Preta":
            total += 55.00;
            calca = 55.00;
        break;
        case "Bege":
            total += 60.00;
            calca = 60.00;
        break;
    
    }
    switch (selectTenis.value) {
        case "Vermelho":
            total += 80.00;
            tenis = 80.00;
        break;
        case "Preto":
            total += 139.90;
            tenis = 139.90;
        break;
        case "Vinho":
            total += 99.90;
            tenis = 99.90;
        break;
    
    }
    switch (selectCamiseta.value) {
        case "Branca":
            total += 50.00;
            camiseta = 50.00;
        break;
        case "Polo azul":
            total += 70.00;
            camiseta = 70.00;
        break;
        case "Camiseta preta":
            total += 45.50;
            camiseta = 45.50;
        break;
    
    }
    document.getElementById("encomenda-pronto").style.display = "block"
    document.getElementById("calca-pronto").textContent = selectCalca.value + " R$ " + calca.toFixed(2);
    document.getElementById("tenis-pronto").textContent = selectTenis.value + " R$ " + tenis.toFixed(2);
    document.getElementById("camiseta-pronto").textContent = selectCamiseta.value + " R$ " + camiseta.toFixed(2);
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
}

function limpar(){
    document.getElementById("encomenda-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectCalca").value = "Selecione sua calça";
    document.getElementById("selectTenis").value = "Selecione seu tenis";
    document.getElementById("selectCamiseta").value = "Selecione sua camiseta";
}
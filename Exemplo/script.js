
/* Regra Botão Exibir Mensagem
document.querySelector("#btn").addEventListener("click", (e) => {
    let texto = document.querySelector("#texto").value;

    document.querySelector("#textoDiv").innerHTML=texto
});

// Regra Juntar Nome
document.querySelector("#btnNomeCompleto").addEventListener("click", (e) => {
    let nome = document.querySelector("#nome").value;
    let sobrenome = document.querySelector("#sobrenome").value;

    if (nome==""&&sobrenome=="") {
        alert("Nome e sobrenome está faltando!")
        return
    } else if (sobrenome=="") {
        alert("Sobrenome está faltando!")
        return
    } else if (nome=="") {
        alert("Nome está faltando!")
        return
    }

    document.querySelector("#nomeCompleto").innerHTML=`${nome} ${sobrenome}`
});
*/

function getValue() {
    let value=[];
    value[0] = document.querySelector("#valor1").value;
    value[1] = document.querySelector("#valor2").value;

    return value;
}

// Regra Somar
document.querySelector("#somar").addEventListener("click", () => {
    let value = getValue()

    document.querySelector("#resultado").innerHTML = `${parseInt(value[0]) + parseInt(value[1])}`
})

// Regra Subtração
document.querySelector("#subtracao").addEventListener("click", () => {
    let value = getValue()

    document.querySelector("#resultado").innerHTML = `${parseInt(value[0]) - parseInt(value[1])}`
})

// Regra divisão
document.querySelector("#divisao").addEventListener("click", () => {
    let value = getValue()

    if (value[0]==0||value[1]==0) {
        document.querySelector("#resultado").innerHTML = "Divisão por 0 não é possível!"
        return 
    }

    document.querySelector("#resultado").innerHTML = `${parseInt(value[0]) / parseInt(value[1])}`
})

// Regra multiplicação
document.querySelector("#multiplicacao").addEventListener("click", () => {
    let value = getValue()

    document.querySelector("#resultado").innerHTML = `${parseInt(value[0]) * parseInt(value[1])}`
})
var nome = new Object();
nome.nome = window.prompt("Informe seu primeiro nome:");
nome.sobrenome = window.prompt("Informe seu sobrenome:");

function pag(){
    document.getElementById("frase").innerHTML = "Olá, "+nome.nome+" "+nome.sobrenome+"! Fico feliz que tenha visitado minha página.";
}
// Função que executa a pesquisa do usuário
function pesquisar(){
   
//Acessa as coisas que estão no documento html e pega o ID resultados-pesquisa
let section = document.getElementById("resultados-pesquisa");

//Inicializa uma string vazia para armazenar resultados
let resultados = "";

//Itera sobre cada dado da lista
for (let dado of dados) {
    //Lê e cria um novo elemento HTML para cada resultado
    resultados += `
    <div class = "item-resultado"> 
        <h2>
       <a href="#" target="_blank">${dados.titulo}</a>
        </h2>
        <p class = "descricao-meta">${dados.descricao}</p>
        <a href=${dados.link} target="_blank">Trailer</a>
    </div>
    `
}

//Atribui os resultados
section.innerHTML = resultados;

}
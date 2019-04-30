//let ou const para o input?
//pode criar variavel com o nome do id?

let adicionarTarefa = document.getElementById("adicionarTarefa");

let listaTarefas = document.getElementById("listaTarefas");

adicionarTarefa.addEventListener("click", function(){

    let novaTarefa = document.getElementById("novaTarefa"); 

    if (novaTarefa.value !== "") {
        
        //criar linha para cada tarefa
        let itemLista = document.createElement("li");
        itemLista.innerHTML = 
        `<div>
            <input type="checkbox" class="check">
            <label>${novaTarefa.value}</label>
        </div>
        <button onclick="excluirTarefa(this)" class="btn-excluir">x</button>`;
        // itemLista.classList = "lista";
        listaTarefas.appendChild(itemLista);
        
        //voltando para default do input
        novaTarefa.value = "";
       
        //mostrando botões da lista
        let botoesLista = document.getElementById("botoesLista");
        botoesLista.classList.remove("botoes-lista")

        //botão excluir todas as tarefas
        let excluirTodas = document.getElementById("excluirTodas");
        excluirTodas.addEventListener("click", function(){

            listaTarefas.removeChild(itemLista);
            botoesLista.classList.add("botoes-lista"); // só funciona com classList.remove no evento anterior
            // botoesLista.classList.toggle("botoes-lista-estilo")
        });

    }

    else {
        alert("Digite a sua tarefa!")
    }

});

//botão selecionar todas as tarefas
let selecionarTodas = document.getElementById("selecionarTodas");
selecionarTodas.addEventListener("click", function(){
    let check = document.querySelectorAll(".check")
    check.forEach(function(item){
        item.checked = true;
    })

});

function excluirTarefa(elemento){
   elemento.parentElement.remove();
    
}


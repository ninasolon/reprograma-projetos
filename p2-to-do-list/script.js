//let ou const para o input?
//pode criar variavel com o nome do id?

let adicionarTarefa = document.getElementById("adicionarTarefa");

let listaTarefas = document.getElementById("listaTarefas");

adicionarTarefa.addEventListener("click", function(){

    let tarefaNova = document.getElementById("tarefaNova").value; 

    if (tarefaNova !== "") {
        // console.log(tarefaNova)

        let itemLista = document.createElement("li");

        itemLista.innerHTML = `<input type="checkbox"><label>${tarefaNova}</label>`;

        listaTarefas.appendChild(itemLista);
    }

    else {
        alert("Digite a sua tarefa!")
    }

});

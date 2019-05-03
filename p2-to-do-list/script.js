let adicionarTarefa = document.getElementById("adicionarTarefa");
let novaTarefa = document.getElementById("novaTarefa"); 

//tecla "enter" aciona botão Adicionar (keycode do enter = 13) 
novaTarefa.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    adicionarTarefa.click();
    }
});

adicionarTarefa.addEventListener("click", function(){

    let listaTarefas = document.getElementById("listaTarefas");

    if (novaTarefa.value.trim() !== "") {
        
        //criar linha para cada tarefa
        let itemLista = document.createElement("li");
        itemLista.innerHTML = 
        `<label>
            <input type="checkbox" class="checkbox" onchange="selecionarTarefa(this)">
            <p>${novaTarefa.value}</p>
        </label>
        <button onclick="excluirTarefa(this)" class="btn-excluir">X</button>`;
        listaTarefas.appendChild(itemLista);
       
        //mostrando botões da lista
        let botoesLista = document.getElementById("botoesLista");
        botoesLista.style.display = "block";

        //botão excluir todas as tarefas
        let excluirTodas = document.getElementById("excluirTodas");
        excluirTodas.addEventListener("click", function(){

            listaTarefas.removeChild(itemLista);
            botoesLista.style.display = "none";
        });

        //drag and drop

        // adiciona o atributo que permite a movimentação
        itemLista.setAttribute("draggable", true);

        //seleciona o evento de click, define que o elemento pode ser arrastado (guarda a classe numa variável)
        itemLista.addEventListener("dragstart", dragStart);
        
        function dragStart(event) {
            dragging = event.target.closest('li');
            itemLista.classList.add("drag")
        }
        
        //seleciona a localização do evento de click e direciona para inserção depois do proximo elemento
        itemLista.addEventListener("dragover", dragOver);

        function dragOver(event) {
            const location = event.target.closest('li');
            this.parentNode.insertBefore(dragging, location);
        }

        // finaliza o movimento
        itemLista.addEventListener("dragend", dragEnd);

        function dragEnd() {
            dragging = null;//usamos o dragging = null para dizer que deve parar o movimento
            itemLista.classList.remove("drag")
        } 
    }

    else {
        alert("Digite a sua tarefa!")
    }

    //voltando para default do input
    novaTarefa.value = "";
});

function varredura(checkbox) {
   
    // verifica se todos os checkbox estão marcados
    let todosMarcados = true;
    checkbox.forEach(function(item){
        if (item.checked == false) {
            todosMarcados = false;
        }
    })
    return todosMarcados;
}

//botão selecionar todas as tarefas
let marcarTodas = document.getElementById("marcarTodas");
marcarTodas.addEventListener("click", function(){

    let checkbox = document.querySelectorAll(".checkbox")
    const varredura1 = varredura(checkbox);

    //condição em que todos os checkbox estão marcados; ativa função desmarcar
    if (varredura1 == true) {
        checkbox.forEach(function(item){
            item.checked = false;
            item.parentElement.classList.remove("item-riscado")
        });
        marcarTodas.textContent = "Marcar todas";
    }

    //ativa função marcar
    else {
        checkbox.forEach(function(item){
            item.checked = true;
            item.parentElement.classList.add("item-riscado")
        });
        marcarTodas.textContent = "Desmarcar todas";
    }
});

//função do botão X para excluir tarefa da lista
function excluirTarefa(item){
   item.parentElement.remove();
    
   if (document.getElementById("listaTarefas").innerHTML == "") {
       botoesLista.style.display = "none";
   }
}

//função do checkbox para riscar tarefa
function selecionarTarefa(item){
    item.parentElement.classList.toggle("item-riscado");

    // alterar botão Marcar/Desmarcar
    let checkbox = document.querySelectorAll(".checkbox");
    const varredura1 = varredura(checkbox);

    if (varredura1 == true) {
        marcarTodas.textContent = "Desmarcar todas";
    }

    else {
        marcarTodas.textContent = "Marcar todas";
    }
}


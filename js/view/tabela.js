import { getTarefas, adicionaTarefa, excluir } from '../controler/controler.js';

listarTodasTarefas();

export function listarTodasTarefas(){

    const todasTarefas = getTarefas();
    let linhasTabela ='';

    todasTarefas.forEach((tarefas, indice) => {
        linhasTabela += `
            <tr>
                <td class="tarefa">${tarefas.nome}</td>
                <td class="tarefa">${tarefas.tarefa}</td>
                <td class="tarefa">${tarefas.dataInicial}</td>
                <td class="tarefa">${tarefas.dataFinal}</td>
                <td><button data-indice="${indice}" class="btn btn-warning excluir"></button></td>
            </tr>
            
        
        `;
    })

    tBody.innerHTML = linhasTabela;

}

tBody.onclick = (event) => {
    try{
        let indice = event.target.dataset.indice;
        if(indice != undefined){
            excluir(indice)
            listarTodasTarefas()
        }
    }
     catch(erro){
         alert("erro")
     }   
}
import { getTarefas, adicionaTarefa, excluir, getRecado, excluirRecado  } from '../controler/controler.js';

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

/************************** */

listarRecados()


export function listarRecados(){
    const todosRecado = getRecado();
    let linhasRecados = '';

    todosRecado.forEach((recado, indice) => {
        linhasRecados += `
            <div class="cartao cartao-conteudo d-inline-flex p-2 bd-dark"><p>${recado.recado}<button data-indice="${indice}" class="btn btn-warning excluir"></button></p></div>
            
        `;
        
    })
    cartaoMural.innerHTML = linhasRecados;
}

cartaoMural.onclick = (event) => {
    try{
        let indice = event.target.dataset.indice;
        if(indice != undefined){
            excluirRecado(indice)
            listarRecados()
        }
    }    
    catch(erro){
        alert('erro')
    }
    
}
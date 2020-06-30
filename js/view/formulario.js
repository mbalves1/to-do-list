import {adicionaTarefa, adicionaCartao} from '../controler/controler.js';
import {listarTodasTarefas, listarRecados} from '../view/tabela.js';


const botao = document.querySelector('.btn-success')

botao.onclick = (event) => {
event.preventDefault();
    let nomei = nome.value;
    let tarefa = tarefas.value;
    let dataI = calendario.value;
    let dataF = calendario2.value;

    adicionaTarefa(nomei, tarefa, dataI, dataF)
    listarTodasTarefas();

    nome.value = '';
    tarefas.value = '';
    calendario.value =' ';
    calendario2.value = '';
}

// **********************************************

const botaoRecado = document.querySelector('.success')

botaoRecado.onclick = (event) => {
    event.preventDefault();
    let area = recado.value;
    adicionaCartao(area)
    listarRecados();
    
    recado.value = '';

    
}

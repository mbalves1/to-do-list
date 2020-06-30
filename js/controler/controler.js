import {Cartao} from '../model/cartao.js'
import {Recado} from '../model/cartao.js'

const listaTarefas = JSON.parse(localStorage.getItem('agenda')) || [];

export function adicionaTarefa(nome, tarefa, dataInicial, dataFinal){

    const cartao = new Cartao(nome, tarefa, dataInicial, dataFinal);

    listaTarefas.push(cartao)
    localStorage.setItem('agenda', JSON.stringify(listaTarefas));
}

export function getTarefas(){
    return listaTarefas;
}

export function excluir(indice){
    listaTarefas.splice(indice, 1)
    localStorage.setItem('agenda', JSON.stringify(listaTarefas))
}

// Recados

const listaDeCartao = JSON.parse(localStorage.getItem('agendaRecados')) || [];

export function adicionaCartao(recado){
    const textoArea = new Recado(recado)
    listaDeCartao.push(textoArea)
    localStorage.setItem('agendaRecados', JSON.stringify(listaDeCartao))
}

export function getRecado(){
    return listaDeCartao;
}

export function excluirRecado(indice){
    listaDeCartao.splice(indice,1)
    localStorage.setItem('agendaRecados', JSON.stringify(listaDeCartao))
}

/** 
 * Busca
 *
 */


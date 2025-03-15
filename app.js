//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []; 

function adicionarAmigo() {
    let input = document.getElementById('amigo'); 
    let nome = input.value.trim(); 

    if (nome) {
        nomes.push(nome);
        atualizarLista();
        input.value = '';
        input.focus();
    } else {
        alert('Por favor, insira um nome válido!');
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nomes.forEach(nome => {
        let item = document.createElement('li'); 
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length); 
    let nomeSorteado = nomes[indiceSorteado]; 

    let listaAmigos = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado'); 

    listaAmigos.style.display = 'none';
    resultado.textContent = `Nome sorteado: ${nomeSorteado}`;
}
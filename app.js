// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = ''; // Limpa o campo de input
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    // Cria uma cópia do array para não modificar o original
    let amigosParaSortear = [...amigos];

    // Embaralha a lista de amigos
    amigosParaSortear.sort(() => Math.random() - 0.5);

    // Exibe o resultado do sorteio
    for (let i = 0; i < amigosParaSortear.length; i++) {
        const amigoAtual = amigosParaSortear[i];
        const amigoSorteado = amigosParaSortear[(i + 1) % amigosParaSortear.length]; 

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoAtual} ➔ ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    }
}
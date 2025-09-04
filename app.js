let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome === '') {
        alert('Por favor, insira um nome.');
    return;
}
    amigos.push(nome);
    document.getElementById('amigo').value = '';

    exibirAmigos();
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = 'O amigo secreto sorteado é: ' + amigoSorteado;
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}
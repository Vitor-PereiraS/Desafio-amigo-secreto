
let amigos = [];

function adicionarAmigo() {
    let nomeAdicionado = document.getElementById('amigo').value;
    if (nomeAdicionado == '') {
        alert ('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAdicionado);
        adicionarLista();
    }
    limparCampo();

}

function limparCampo() {
    nomeAdicionado = document.getElementById('amigo');
    nomeAdicionado.value = '';
}

function adicionarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0){
        alert('Adicione amigos para realizar o sorteio');
        return;

    }
        let indiceAleatorio = parseInt(Math.random() * amigos.length )
        let amigoSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}